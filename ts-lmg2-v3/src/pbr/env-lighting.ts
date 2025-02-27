import {Engine} from "../engines/engine";
import {TextureAddress, TextureFilter, TextureFormat, TextureProjection, TextureType, UniformsType} from "../engines/engine.enum";
import {Vec4} from "../maths/math.vec4";
import {Texture} from "../texture/texture";
import reprojectFrag from "../shaders/chunks/reproject.frag";
import reprojectVert from "../shaders/chunks/reproject.vert";
import gles3 from "../shaders/chunks/gles3.frag";

import {Postprocessing} from "../postprocessing/postprocessing";
import {Application} from "../application";
import {RenderTarget, RenderTargetBufferType} from "../renderer/render.target";
import {Vec3} from "../maths/math.vec3";
import {random} from "../maths/math.random";

// runtime lighting can be RGBM
const lightingPixelFormat = () => {
    return TextureFormat.PIXELFORMAT_R8_G8_B8_A8;
};

const supportsFloat16 = (device: Engine) => {
    return device.extensions.extTextureHalfFloat && device.textureHalfFloatRenderable;
};

const supportsFloat32 = (device: Engine) => {
    return device.extensions.extTextureFloat && device.textureFloatRenderable;
};

// lighting source should be stored HDR
const lightingSourcePixelFormat = (device: Engine) => {
    return supportsFloat16(device) ? TextureFormat.PIXELFORMAT_RGBA16F : supportsFloat32(device) ? TextureFormat.PIXELFORMAT_RGBA32F : TextureFormat.PIXELFORMAT_R8_G8_B8_A8;
};

const createCubemap = (device: Engine, size: number, format: TextureFormat, mipmaps: boolean) => {
    return new Texture(device, {
        name: `lighting-${size}`,
        cubemap: true,
        width: size,
        height: size,
        format: format,
        type: format === TextureFormat.PIXELFORMAT_R8_G8_B8_A8 ? TextureType.TEXTURETYPE_RGBM : TextureType.TEXTURETYPE_DEFAULT,
        addressU: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
        addressV: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
        fixCubemapSeams: true,
        mipmaps: !!mipmaps
    });
};

// calculate the number of mipmap levels given texture dimensions
const calcLevels = (width: number, height: number) => {
    return 1 + Math.floor(Math.log2(Math.max(width, height)));
};

// get a coding string for texture based on its type and pixel format.
const getCoding = (texture: Texture) => {
    switch (texture.type) {
        case TextureType.TEXTURETYPE_RGBM:
            return "RGBM";
        case TextureType.TEXTURETYPE_RGBE:
            return "RGBE";
        default:
            switch (texture.format) {
                case TextureFormat.PIXELFORMAT_RGB16F:
                case TextureFormat.PIXELFORMAT_RGB32F:
                case TextureFormat.PIXELFORMAT_RGBA16F:
                case TextureFormat.PIXELFORMAT_RGBA32F:
                    return "Linear";
                default:
                    return "Gamma";
            }
    }
};

const getProjectionName = (projection: TextureProjection): string => {
    // default to equirect if not specified
    if (projection === TextureProjection.TEXTUREPROJECTION_NONE) {
        projection = TextureProjection.TEXTUREPROJECTION_EQUIRECT;
    }
    switch (projection) {
        case TextureProjection.TEXTUREPROJECTION_CUBE:
            return "Cubemap";
        case TextureProjection.TEXTUREPROJECTION_EQUIRECT:
            return "Equirect";
        case TextureProjection.TEXTUREPROJECTION_OCTAHEDRAL:
            return "Octahedral";
    }
};

// generate a table storing the number of samples required to get 'numSamples'
// valid samples for the given specularPower.
// 生成一个表，存储获取“numSamples”所需的样本数, 给定specularPower的有效样本。

/* eslint-disable no-unused-vars */
const calculateRequiredSamplesGGX = () => {
    const countValidSamplesGGX = (numSamples: number, specularPower: number) => {
        const roughness = 1 - Math.log2(specularPower) / 11.0;
        const a = roughness * roughness;
        const H = new Vec3();
        const L = new Vec3();
        const N = new Vec3(0, 0, 1);
        let validSamples = 0;
        for (let i = 0; i < numSamples; ++i) {
            hemisphereSampleGGX(H, i / numSamples, random.radicalInverse(i), a);

            const NoH = H.z; // since N is (0, 0, 1)
            L.set(H.x, H.y, H.z)
                .mulScalar(2 * NoH)
                .sub(N);

            validSamples += L.z > 0 ? 1 : 0;
        }

        return validSamples;
    };

    const numSamples = [1024, 128, 32, 16];
    const specularPowers = [512, 128, 32, 8, 2];

    const requiredTable: any = {};
    numSamples.forEach(numSamples => {
        const table: any = {};
        specularPowers.forEach(specularPower => {
            let requiredSamples = numSamples;
            while (countValidSamplesGGX(requiredSamples, specularPower) < numSamples) {
                requiredSamples++;
            }
            table[specularPower] = requiredSamples;
        });
        requiredTable[numSamples] = table;
    });

    return requiredTable;
};

// print to the console the required samples table for GGX reflection convolution
// console.log(calculateRequiredSamplesGGX());

// this is a table with pre-calculated number of samples required for GGX.
// the table is generated by calculateRequiredSamplesGGX()
// the table is organized by [numSamples][specularPower]
// 这是一个表格，其中包含GGX所需的预计算样本数。
//该表由calculateRequiredSamplesGGX（）生成
//该表由[numSamples][specularPower]组织

// we use a repeatable pseudo-random sequence of numbers when generating samples
// for use in prefiltering GGX reflections. however not all the random samples
// will be valid. this is because some resulting reflection vectors will be below
// the hemisphere. this is especially apparent when calculating vectors for the
// higher roughnesses. (since vectors are more wild, more of them are invalid).
// for example, specularPower 2 results in half the generated vectors being
// invalid. (meaning the GPU would spend half the time on vectors that don't
// contribute to the final result).
// 我们在生成样本时使用可重复的伪随机数字序列
// 用于预滤波GGX反射。然而，并不是所有的随机样本
// 将是有效的。这是因为一些产生的反射向量将位于下面
// 半球。这在计算模型的向量时尤为明显
// 更高的粗糙度。（由于载体更为野生，因此更多载体无效）。
// 例如，specularPower 2会导致生成的向量中有一半是
// 无效。（这意味着GPU将花费一半的时间在不需要的向量上。）
// 为最终结果做出贡献）。
//
// calculating how many samples are required to generate 'n' valid samples is a
// slow operation, so this table stores the pre-calculated numbers of samples
// required for the sets of (numSamples, specularPowers) pairs we expect to
// encounter at runtime.
// 计算生成“n”个有效样本所需的样本数是一个简单的过程
// 操作缓慢，因此此表存储预先计算的样本数
// 我们期望的（numsample、specularPowers）对集需要
// 在运行时遇到。
const requiredSamplesGGX: any = {
    "16": {
        "2": 26,
        "8": 20,
        "32": 17,
        "128": 16,
        "512": 16
    },
    "32": {
        "2": 53,
        "8": 40,
        "32": 34,
        "128": 32,
        "512": 32
    },
    "128": {
        "2": 214,
        "8": 163,
        "32": 139,
        "128": 130,
        "512": 128
    },
    "1024": {
        "2": 1722,
        "8": 1310,
        "32": 1114,
        "128": 1041,
        "512": 1025
    }
};

// get the number of random samples required to generate numSamples valid samples.
// 获取生成 numSamples 有效样本所需的随机样本数。
const getRequiredSamplesGGX = (numSamples: number, specularPower: number) => {
    const table = requiredSamplesGGX[numSamples];
    return (table && table[specularPower]) || numSamples;
};

// generate a vector on the hemisphere with GGX distribution.
// a is linear roughness^2
// 在半球上生成具有GGX分布的向量。a是线性粗糙度^2
const hemisphereSampleGGX = (dstVec: Vec3, x: number, y: number, a: number) => {
    const phi = y * 2 * Math.PI;
    const cosTheta = Math.sqrt((1 - x) / (1 + (a * a - 1) * x));
    const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
    dstVec.set(Math.cos(phi) * sinTheta, Math.sin(phi) * sinTheta, cosTheta).normalize();
};

const D_GGX = (NoH: number, linearRoughness: number) => {
    const a = NoH * linearRoughness;
    const k = linearRoughness / (1.0 - NoH * NoH + a * a);
    return k * k * (1 / Math.PI);
};

// generate precomputed GGX samples
const generateGGXSamples = (numSamples: number, specularPower: number, sourceTotalPixels: number) => {
    const pixelsPerSample = sourceTotalPixels / numSamples;
    // 使用预过滤纹理，如果镜面反射生成基于线性渐变进行定义。
    // 默认情况下，我们使用的是线性粗糙度的log2，这有助于保持更好的分辨率
    // 平均粗糙度值。
    // ref: babylon.js linearSpecularLOD
    const roughness = 1 - Math.log2(specularPower) / 11.0;
    const a = roughness * roughness;
    const H = new Vec3();
    const L = new Vec3();
    const N = new Vec3(0, 0, 1);
    const result = [];

    const requiredSamples = getRequiredSamplesGGX(numSamples, specularPower);
    for (let i = 0; i < requiredSamples; ++i) {
        hemisphereSampleGGX(H, i / requiredSamples, random.radicalInverse(i), a);

        // since N is (0, 0, 1)
        const NoH = H.z;
        L.set(H.x, H.y, H.z)
            .mulScalar(2 * NoH)
            .sub(N);

        if (L.z > 0) {
            const pdf = D_GGX(Math.min(1, NoH), a) / 4 + 0.001;
            const mipLevel = 0.5 * Math.log2(pixelsPerSample / pdf);
            result.push(L.x, L.y, L.z, mipLevel);
        }
    }

    while (result.length < numSamples * 4) {
        result.push(0, 0, 0, 0);
    }

    return result;
};

const generateGGXSamplesTex = (device: Engine, numSamples: number, specularPower: number, sourceTotalPixels: number) => {
    const a = generateGGXSamples(numSamples, specularPower, sourceTotalPixels);
    const b = createSamplesTex(device, "123", a);
    return b;
};

// pack a 32bit floating point value into RGBA8
const packFloat32ToRGBA8 = (value: number, array: any, offset: number) => {
    if (value <= 0) {
        array[offset + 0] = 0;
        array[offset + 1] = 0;
        array[offset + 2] = 0;
        array[offset + 3] = 0;
    } else if (value >= 1.0) {
        array[offset + 0] = 255;
        array[offset + 1] = 0;
        array[offset + 2] = 0;
        array[offset + 3] = 0;
    } else {
        let encX = (1 * value) % 1;
        let encY = (255 * value) % 1;
        let encZ = (65025 * value) % 1;
        const encW = (16581375.0 * value) % 1;

        encX -= encY / 255;
        encY -= encZ / 255;
        encZ -= encW / 255;

        array[offset + 0] = Math.min(255, Math.floor(encX * 256));
        array[offset + 1] = Math.min(255, Math.floor(encY * 256));
        array[offset + 2] = Math.min(255, Math.floor(encZ * 256));
        array[offset + 3] = Math.min(255, Math.floor(encW * 256));
    }
};

// pack samples into texture-ready format
const packSamples = (samples: any[]) => {
    const numSamples = samples.length;

    const w = Math.min(numSamples, 512);
    const h = Math.ceil(numSamples / w);
    const data = new Uint8Array(w * h * 4);

    // normalize float data and pack into rgba8
    let off = 0;
    for (let i = 0; i < numSamples; ++i) {
        packFloat32ToRGBA8(samples[i * 4 + 0] * 0.5 + 0.5, data, off + 0);
        packFloat32ToRGBA8(samples[i * 4 + 1] * 0.5 + 0.5, data, off + 4);
        packFloat32ToRGBA8(samples[i * 4 + 2] * 0.5 + 0.5, data, off + 8);
        packFloat32ToRGBA8(samples[i * 4 + 3] / 8, data, off + 12);
        off += 16;
    }

    return {
        width: w,
        height: h,
        data: data
    };
};

// pack float samples data into an rgba8 texture
const createSamplesTex = (device: Engine, name: string, samples: any[]) => {
    const packedSamples = packSamples(samples);
    const texture = new Texture(device, {
        name: name,
        width: packedSamples.width,
        height: packedSamples.height,
        mipmaps: false,
        minFilter: TextureFilter.FILTER_NEAREST,
        magFilter: TextureFilter.FILTER_NEAREST,
        flipY: false
    });
    texture.levels = [packedSamples.data];
    return texture;
};

export class EnvLighting {
    private _app: Application;
    private _engine: Engine;
    public isReady: boolean;
    result: Texture;

    constructor(app: Application) {
        this._app = app;
        this._engine = app.engine;
    }

    reprojectTexture(
        source: Texture,
        target: Texture,
        options: {
            // 可选镜面反射功率。当镜面反射功率指定时，源由提升到指定幂的phong加权内核进行卷积。否则，该函数将执行标准重采样。
            specularPower?: number;
            numSamples?: number;
            // 指定卷积分布: 'null', 'lambert', 'phong', 'ggx'。默认值取决于specularPower。
            distribution?: string;
            // 视口矩形
            rect?: Vec4;
            face?: any;
            // 要渲染的接缝像素
            seamPixels?: number;
        }
    ) {
        // table of distribution -> function name
        const funcNames: {[key: string]: string} = {
            none: "reproject",
            lambert: "prefilterSamplesUnweighted",
            phong: "prefilterSamplesUnweighted",
            ggx: "prefilterSamples"
        };

        const specularPower = options.hasOwnProperty("specularPower") ? options.specularPower : 1;
        const face = options.hasOwnProperty("face") ? options.face : null;
        const distribution: any = options.hasOwnProperty("distribution") ? options.distribution : specularPower === 1 ? "none" : "phong";

        const processFunc = funcNames[distribution];
        const decodeFunc = `decode${getCoding(source)}`;
        // const encodeFunc = "encodeLinear";
        const encodeFunc = `encode${getCoding(target)}`;
        const sourceFunc = `sample${getProjectionName(source.projection)}`;
        const targetFunc = `getDirection${getProjectionName(target.projection)}`;
        const numSamples = options.hasOwnProperty("numSamples") ? options.numSamples : 1024;

        const defines =
            `#define PROCESS_FUNC ${processFunc}\n` +
            `#define DECODE_FUNC ${decodeFunc}\n` +
            `#define ENCODE_FUNC ${encodeFunc}\n` +
            `#define SOURCE_FUNC ${sourceFunc}\n` +
            `#define TARGET_FUNC ${targetFunc}\n` +
            `#define NUM_SAMPLES ${numSamples}\n` +
            `#define SUPPORTS_TEXLOD\n`;

        const post = new Postprocessing(this._app);
        (window as any).post = post;
        post.createProgram({
            programName: "envPre",
            vertexShader: reprojectVert,
            fragmentShader: `${gles3}\n${defines}\n${reprojectFrag}`,
            uniforms: {
                uvMod: {
                    type: UniformsType.Vec4,
                    value: null
                },
                params: {
                    type: UniformsType.Vec4,
                    value: null
                },
                params2: {
                    type: UniformsType.Vec2,
                    value: null
                },
                samplesTexInverseSize: {
                    type: UniformsType.Vec2,
                    value: null
                },
                sourceCube: {
                    type: UniformsType.Texture,
                    value: null
                },
                sourceTex: {
                    type: UniformsType.Texture,
                    value: null
                },
                samplesTex: {
                    type: UniformsType.Texture,
                    value: null
                }
            }
        });
        post.useProgram("envPre");

        const textureName = source.cubemap ? "sourceCube" : "sourceTex";
        post.setUniform(textureName, source);

        if (options?.seamPixels) {
            const p = options.seamPixels;
            const w = options.rect ? options.rect.z : target.width;
            const h = options.rect ? options.rect.w : target.height;

            const innerWidth = w - p * 2;
            const innerHeight = h - p * 2;

            post.setUniform("uvMod", {
                x: (innerWidth + p * 2) / innerWidth,
                y: (innerHeight + p * 2) / innerHeight,
                z: -p / innerWidth,
                w: -p / innerHeight
            });
        } else {
            post.setUniform("uvMod", {x: 1, y: 1, z: 0, w: 0});
        }

        const params = [
            0,
            specularPower,
            source.fixCubemapSeams ? 1.0 / source.width : 0.0, // source seam scale
            target.fixCubemapSeams ? 1.0 / target.width : 0.0 // target seam scale
        ];

        const params2 = [target.width * target.height * (target.cubemap ? 6 : 1), source.width * source.height * (source.cubemap ? 6 : 1)];

        if (processFunc.startsWith("prefilterSamples")) {
            // set or generate the pre-calculated samples data
            const sourceTotalPixels = source.width * source.height * (source.cubemap ? 6 : 1);
            const samplesTex = generateGGXSamplesTex(this._engine, numSamples || 1024, specularPower || 1, sourceTotalPixels);
            post.setUniform("samplesTex", samplesTex);
            post.setUniform("samplesTexInverseSize", {
                x: 1.0 / samplesTex.width,
                y: 1.0 / samplesTex.height
            });
        }

        for (let f = 0; f < (target.cubemap ? 6 : 1); f++) {
            if (face === null || f === face) {
                const renderTarget = new RenderTarget(this._engine, {
                    bufferType: RenderTargetBufferType.colorBuffer,
                    depth: false,
                    face: f,
                    colorBuffer: target
                });
                params[0] = f;
                post.setRenderTarget(renderTarget)
                    .setUniform("params", {x: params[0], y: params[1], z: params[2], w: params[3]})
                    .setUniform("params2", {x: params2[0], y: params2[1]})
                    .viewport(options?.rect)
                    .render();
                renderTarget.destroy();
            }
        }
    }

    /**
     *
     * @param source  This is either a 2d texture in equirect format or a cubemap.
     */
    generateAtlas(source: Texture) {
        const result = new Texture(this._engine, {
            name: "envAtlas",
            width: 512,
            height: 512,
            format: TextureFormat.PIXELFORMAT_R8_G8_B8_A8,
            type: TextureType.TEXTURETYPE_RGBM,
            projection: TextureProjection.TEXTUREPROJECTION_EQUIRECT,
            addressU: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            addressV: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            mipmaps: false,
            flipY: false
        });

        const s = result.width / 512;
        const rect = new Vec4(0, 0, 512 * s, 256 * s);
        const levels = 1; //calcLevels(result.width, result.height);

        for (let i = 0; i < levels; ++i) {
            this.reprojectTexture(source, result, {
                numSamples: 1,
                rect: rect,
                seamPixels: s
            });

            rect.x += rect.w;
            rect.y += rect.w;
            rect.z = Math.max(1, Math.floor(rect.z * 0.5));
            rect.w = Math.max(1, Math.floor(rect.w * 0.5));
        }

        rect.set(0, 256 * s, 256 * s, 128 * s);
        for (let i = 1; i < 7; ++i) {
            this.reprojectTexture(source, result, {
                numSamples: 1024,
                distribution: "ggx",
                specularPower: Math.max(1, 2048 >> (i * 2)),
                rect: rect,
                seamPixels: s
            });
            rect.y += rect.w;
            rect.z = Math.max(1, Math.floor(rect.z * 0.5));
            rect.w = Math.max(1, Math.floor(rect.w * 0.5));
        }
        return result;
    }

    /**
     * Generate the environment lighting atlas from prefiltered cubemap data.
     *
     * @param {Texture[]} sources - Array of 6 prefiltered textures.
     * @param {object} options - The options object
     * @param {Texture} [options.target] - The target texture. If one is not provided then a
     * new texture will be created and returned.
     * @param {number} [options.size] - Size of the target texture to create. Only used if
     * target isn't specified. Defaults to 512.
     * @param {boolean} [options.legacyAmbient] - Enable generating legacy ambient lighting.
     * Default is false.
     * @param {number} [options.numSamples] - Number of samples to use when generating ambient
     * lighting. Default is 2048.
     * @returns {Texture} The resulting atlas texture.
     */
    generatePrefilteredAtlas(sources: Texture[]) {
        // const device = sources[0].device;
        const format = lightingPixelFormat();

        const result = new Texture(this._engine, {
            width: 512,
            height: 512,
            format: format,
            type: TextureType.TEXTURETYPE_RGBM,
            projection: TextureProjection.TEXTUREPROJECTION_EQUIRECT,
            addressU: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            addressV: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            minFilter: TextureFilter.FILTER_LINEAR,
            magFilter: TextureFilter.FILTER_LINEAR,
            mipmaps: false
        });

        const s = result.width / 512;

        // generate mipmaps
        const rect = new Vec4(0, 0, 512 * s, 256 * s);
        const levels = 1; //calcLevels(512,0);
        for (let i = 0; i < levels; ++i) {
            this.reprojectTexture(sources[0], result, {
                numSamples: 1,
                rect: rect,
                seamPixels: s
            });

            rect.x += rect.w;
            rect.y += rect.w;
            rect.z = Math.max(1, Math.floor(rect.z * 0.5));
            rect.w = Math.max(1, Math.floor(rect.w * 0.5));
        }

        // copy blurry reflections
        // rect.set(0, 256 * s, 256 * s, 128 * s);
        // for (let i = 1; i < sources.length; ++i) {
        //     reprojectTexture(sources[i], result, {
        //         numSamples: 1,
        //         rect: rect,
        //         seamPixels: s
        //     });
        //     rect.y += rect.w;
        //     rect.z = Math.max(1, Math.floor(rect.z * 0.5));
        //     rect.w = Math.max(1, Math.floor(rect.w * 0.5));
        // }

        // generate ambient
        // rect.set(128 * s, (256 + 128) * s, 64 * s, 32 * s);
        // this.reprojectTexture(sources[0], result, {
        //      numSamples: options?.numSamples || 2048,
        //      distribution: "lambert",
        //      rect: rect,
        //      seamPixels: s
        //  });

        return result;
    }

    /**
     * Generate a skybox cubemap in the correct pixel format from the source texture.
     *
     * @param {Texture} source - The source texture. This is either a 2d texture in equirect format
     * or a cubemap.
     * @param {number} [size] - Size of the resulting texture. Otherwise use automatic sizing.
     * @returns {Texture} The resulting cubemap.
     */
    generateSkyboxCubemap(source: Texture, size?: number) {
        // const device = source.device;

        const result = createCubemap(this._engine, size || (source.cubemap ? source.width : source.width / 4), TextureFormat.PIXELFORMAT_R8_G8_B8_A8, false);

        this.reprojectTexture(source, result, {
            numSamples: 1024
        });

        return result;
    }

    /**
     * Create a texture in the format needed to precalculate lighting data.
     *
     * @param {Texture} source - The source texture. This is either a 2d texture in equirect format
     * or a cubemap.
     * @param {object} [options] - Specify generation options.
     * @param {Texture} [options.target] - The target texture. If one is not provided then a
     * new texture will be created and returned.
     * @param {number} [options.size] - Size of the lighting source cubemap texture. Only used
     * if target isn't specified. Defaults to 128.
     * @returns {Texture} The resulting cubemap.
     */
    generateLightingSource(source: Texture) {
        // const device = source.device;

        // DebugGraphics.pushGpuMarker(device, "genLightingSource");

        const format = lightingSourcePixelFormat(this._engine);
        const result = new Texture(this._engine, {
            name: `lighting-source`,
            cubemap: true,
            width: 128,
            height: 128,
            format: format,
            type: format === TextureFormat.PIXELFORMAT_R8_G8_B8_A8 ? TextureType.TEXTURETYPE_RGBM : TextureType.TEXTURETYPE_DEFAULT,
            addressU: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            addressV: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
            fixCubemapSeams: false,
            mipmaps: true
        });

        // copy into top level
        this.reprojectTexture(source, result, {
            numSamples: source.mipmaps ? 1 : 1024
        });

        // generate mipmaps
        return result;
    }
}
