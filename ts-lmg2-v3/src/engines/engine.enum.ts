export enum UniformsType {
    "Texture",
    "Float",
    "Vec2",
    "Vec3",
    "Vec4",
    "Mat3",
    "Mat4",
    "Struct",
    "Array",
}

export enum TextureProjection {
    /**
     * Texture data is not stored a specific projection format.
     */
    TEXTUREPROJECTION_NONE = "none",

    /**
     * Texture data is stored in cubemap projection format.
     */
    TEXTUREPROJECTION_CUBE = "cube",

    /**
     * Texture data is stored in equirectangular projection format.
     */
    TEXTUREPROJECTION_EQUIRECT = "equirect",

    /**
     * Texture data is stored in octahedral projection format.
     */
    TEXTUREPROJECTION_OCTAHEDRAL = "octahedral",
}

export enum TextureType {
    /**
     * Texture is a default type.
     */
    TEXTURETYPE_DEFAULT = "default",

    /**
     * Texture stores high dynamic range data in RGBM format.
     */
    TEXTURETYPE_RGBM = "rgbm",

    /**
     * Texture stores high dynamic range data in RGBE format.
     */
    TEXTURETYPE_RGBE = "rgbe",

    /**
     * Texture stores normalmap data swizzled in GGGR format. This is used for tangent space normal
     * maps. The R component is stored in alpha and G is stored in RGB. This packing can result in
     * higher quality when the texture data is compressed.
     */
    TEXTURETYPE_SWIZZLEGGGR = "swizzleGGGR",
}

export enum TextureFormat {
    /**
     * 8-bit alpha.
     */
    PIXELFORMAT_A8 = 0,
    /**
     * 8-bit luminance.
     */
    PIXELFORMAT_L8 = 1,
    /**
     * 8-bit luminance with 8-bit alpha.
     */
    PIXELFORMAT_L8_A8 = 2,
    /**
     * 16-bit RGB (5-bits for red channel, 6 for green and 5 for blue).
     */
    PIXELFORMAT_R5_G6_B5 = 3,

    /**
     * 16-bit RGBA (5-bits for red channel, 5 for green, 5 for blue with 1-bit alpha).
     */
    PIXELFORMAT_R5_G5_B5_A1 = 4,

    /**
     * 16-bit RGBA (4-bits for red channel, 4 for green, 4 for blue with 4-bit alpha).
     */
    PIXELFORMAT_R4_G4_B4_A4 = 5,

    /**
     * 24-bit RGB (8-bits for red channel, 8 for green and 8 for blue).
     */
    PIXELFORMAT_R8_G8_B8 = 6,

    /**
     * 32-bit RGBA (8-bits for red channel, 8 for green, 8 for blue with 8-bit alpha).
     */
    PIXELFORMAT_R8_G8_B8_A8 = 7,

    /**
     * Block compressed format storing 16 input pixels in 64 bits of output, consisting of two 16-bit
     * RGB 5:6:5 color values and a 4x4 two bit lookup table.
     */
    PIXELFORMAT_DXT1 = 8,

    /**
     * Block compressed format storing 16 input pixels (corresponding to a 4x4 pixel block) into 128
     * bits of output, consisting of 64 bits of alpha channel data (4 bits for each pixel) followed by
     * 64 bits of color data, encoded the same way as DXT1.
     */
    PIXELFORMAT_DXT3 = 9,

    /**
     * Block compressed format storing 16 input pixels into 128 bits of output, consisting of 64 bits
     * of alpha channel data (two 8 bit alpha values and a 4x4 3 bit lookup table) followed by 64 bits
     * of color data (encoded the same way as DXT1).
     */
    PIXELFORMAT_DXT5 = 10,

    /**
     * 16-bit floating point RGB (16-bit float for each red, green and blue channels).
     */
    PIXELFORMAT_RGB16F = 11,

    /**
     * 16-bit floating point RGBA (16-bit float for each red, green, blue and alpha channels).
     */
    PIXELFORMAT_RGBA16F = 12,

    /**
     * 32-bit floating point RGB (32-bit float for each red, green and blue channels).
     */
    PIXELFORMAT_RGB32F = 13,

    /**
     * 32-bit floating point RGBA (32-bit float for each red, green, blue and alpha channels).
     */
    PIXELFORMAT_RGBA32F = 14,

    /**
     * 32-bit floating point single channel format (WebGL2 only).
     */
    PIXELFORMAT_R32F = 15,

    /**
     * 16-bit floating point single channel format (WebGL2 only).
     */
    PIXELFORMAT_R16F = 16,

    /**
     * A readable depth buffer format.
     */
    PIXELFORMAT_DEPTH = 17,

    /**
     * A readable depth/stencil buffer format (WebGL2 only).
     */
    PIXELFORMAT_DEPTHSTENCIL = 18,

    /**
     * A floating-point color-only format with 11 bits for red and green channels and 10 bits for the
     * blue channel (WebGL2 only).
     */
    PIXELFORMAT_111110F = 19,

    /**
     * Color-only sRGB format (WebGL2 only).
     */
    PIXELFORMAT_SRGB = 20,

    /**
     * Color sRGB format with additional alpha channel (WebGL2 only).
     */
    PIXELFORMAT_SRGBA = 21,

    /**
     * ETC1 compressed format.
     */
    PIXELFORMAT_ETC1 = 22,

    /**
     * ETC2 (RGB) compressed format.
     */
    PIXELFORMAT_ETC2_RGB = 23,

    /**
     * ETC2 (RGBA) compressed format.
     */
    PIXELFORMAT_ETC2_RGBA = 24,

    /**
     * PVRTC (2BPP RGB) compressed format.
     */
    PIXELFORMAT_PVRTC_2BPP_RGB_1 = 25,

    /**
     * PVRTC (2BPP RGBA) compressed format.
     */
    PIXELFORMAT_PVRTC_2BPP_RGBA_1 = 26,

    /**
     * PVRTC (4BPP RGB) compressed format.
     */
    PIXELFORMAT_PVRTC_4BPP_RGB_1 = 27,

    /**
     * PVRTC (4BPP RGBA) compressed format.
     */
    PIXELFORMAT_PVRTC_4BPP_RGBA_1 = 28,

    /**
     * ATC compressed format with alpha channel in blocks of 4x4.
     */
    PIXELFORMAT_ASTC_4x4 = 29,

    /**
     * ATC compressed format with no alpha channel.
     */
    PIXELFORMAT_ATC_RGB = 30,

    /**
     * ATC compressed format with alpha channel.
     */
    PIXELFORMAT_ATC_RGBA = 31,
}

export enum TextureFilter {
    /**
     * Point sample filtering.
     */
    FILTER_NEAREST = 0,

    /**
     * Bilinear filtering.
     */
    FILTER_LINEAR = 1,

    /**
     * Use the nearest neighbor in the nearest mipmap level.
     */
    FILTER_NEAREST_MIPMAP_NEAREST = 2,

    /**
     * Linearly interpolate in the nearest mipmap level.
     */
    FILTER_NEAREST_MIPMAP_LINEAR = 3,

    /**
     * Use the nearest neighbor after linearly interpolating between mipmap levels.
     */
    FILTER_LINEAR_MIPMAP_NEAREST = 4,

    /**
     * Linearly interpolate both the mipmap levels and between texels.
     */
    FILTER_LINEAR_MIPMAP_LINEAR = 5,
}

export enum TextureAddress {
    /**
     * Ignores the integer part of texture coordinates, using only the fractional part.
     */
    ADDRESS_REPEAT = 0,

    /**
     * Clamps texture coordinate to the range 0 to 1.
     */
    ADDRESS_CLAMP_TO_EDGE = 1,

    /**
     * Texture coordinate to be set to the fractional part if the integer part is even. If the integer
     * part is odd, then the texture coordinate is set to 1 minus the fractional part.
     */
    ADDRESS_MIRRORED_REPEAT = 2,
}

export enum CompareFunc {
    /**
     * Never pass.
     */
    FUNC_NEVER = 0,

    /**
     * Pass if (ref & mask) < (stencil & mask).
     */
    FUNC_LESS = 1,

    /**
     * Pass if (ref & mask) == (stencil & mask).
     */
    FUNC_EQUAL = 2,

    /**
     * Pass if (ref & mask) <= (stencil & mask).
     */
    FUNC_LESSEQUAL = 3,

    /**
     * Pass if (ref & mask) > (stencil & mask).
     */
    FUNC_GREATER = 4,

    /**
     * Pass if (ref & mask) != (stencil & mask).
     */
    FUNC_NOTEQUAL = 5,

    /**
     * Pass if (ref & mask) >= (stencil & mask).
     */
    FUNC_GREATEREQUAL = 6,

    /**
     * Always pass.
     */
    FUNC_ALWAYS = 7,
}

export enum CubeFace {
    /**
     * The positive X face of a cubemap.
     */
    CUBEFACE_POSX = 0,

    /**
     * The negative X face of a cubemap.
     */
    CUBEFACE_NEGX = 1,

    /**
     * The positive Y face of a cubemap.
     */
    CUBEFACE_POSY = 2,

    /**
     * The negative Y face of a cubemap.
     */
    CUBEFACE_NEGY = 3,

    /**
     * The positive Z face of a cubemap.
     */
    CUBEFACE_POSZ = 4,

    /**
     * The negative Z face of a cubemap.
     */
    CUBEFACE_NEGZ = 5,
}
export interface iProgramUniforms {
    [name: string]: {
        value: any | iProgramUniforms;
        type: UniformsType;
    };
}

export interface iProgrameDefines {
    [name: string]: number;
}

/**
 * defines: {
		'PERSPECTIVE_CAMERA': 1,
		'KERNEL_SIZE': 32
	},
 */
export interface iProgrameCreateOptions {
    vertexShader: string | string[];
    fragmentShader: string | string[];
    uniforms?: iProgramUniforms;
    defines?: iProgrameDefines;
}

export enum BlendMode {
    /**
     * Multiply all fragment components by zero.
     */
    BLENDMODE_ZERO = 0,

    /**
     * Multiply all fragment components by one.
     */
    BLENDMODE_ONE = 1,

    /**
     * Multiply all fragment components by the components of the source fragment.
     */
    BLENDMODE_SRC_COLOR = 2,

    /**
     * Multiply all fragment components by one minus the components of the source fragment.
     */
    BLENDMODE_ONE_MINUS_SRC_COLOR = 3,

    /**
     * Multiply all fragment components by the components of the destination fragment.
     */
    BLENDMODE_DST_COLOR = 4,

    /**
     * Multiply all fragment components by one minus the components of the destination fragment.
     */
    BLENDMODE_ONE_MINUS_DST_COLOR = 5,

    /**
     * Multiply all fragment components by the alpha value of the source fragment.
     */
    BLENDMODE_SRC_ALPHA = 6,

    /**
     * Multiply all fragment components by the alpha value of the source fragment.
     */
    BLENDMODE_SRC_ALPHA_SATURATE = 7,

    /**
     * Multiply all fragment components by one minus the alpha value of the source fragment.
     */
    BLENDMODE_ONE_MINUS_SRC_ALPHA = 8,

    /**
     * Multiply all fragment components by the alpha value of the destination fragment.
     */
    BLENDMODE_DST_ALPHA = 9,

    /**
     * Multiply all fragment components by one minus the alpha value of the destination fragment.
     */
    BLENDMODE_ONE_MINUS_DST_ALPHA = 10,
}

export enum BlendEquation {
    /**
     * Add the results of the source and destination fragment multiplies.
     */
    BLENDEQUATION_ADD = 0,

    /**
     * Subtract the results of the source and destination fragment multiplies.
     */
    BLENDEQUATION_SUBTRACT = 1,

    /**
     * Reverse and subtract the results of the source and destination fragment multiplies.
     */
    BLENDEQUATION_REVERSE_SUBTRACT = 2,

    /**
     * Use the smallest value. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BLENDEQUATION_MIN = 3,

    /**
     * Use the largest value. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BLENDEQUATION_MAX = 4,
}

export enum CullFace {
    /**
     * No triangles are culled.
     */
    CULLFACE_NONE = 0,

    /**
     * Triangles facing away from the view direction are culled.
     */
    CULLFACE_BACK = 1,

    /**
     * Triangles facing the view direction are culled.
     */
    CULLFACE_FRONT = 2,

    /**
     * Triangles are culled regardless of their orientation with respect to the view direction. Note
     * that point or line primitives are unaffected by this render state.
     */
    CULLFACE_FRONTANDBACK = 3,
}

export enum ClearFlag {
    CLEARFLAG_NULL = 0,
    /**
     * Clear the color buffer.
     */
    CLEARFLAG_COLOR = 1,

    /**
     * Clear the depth buffer.
     */
    CLEARFLAG_DEPTH = 2,

    /**
     * Clear the stencil buffer.
     */
    CLEARFLAG_STENCIL = 4,
}

export enum BufferStore {
    /**
     * The data store contents will be modified once and used many times.
     */
    BUFFER_STATIC = 0,

    /**
     * The data store contents will be modified repeatedly and used many times.
     */
    BUFFER_DYNAMIC = 1,

    /**
     * The data store contents will be modified once and used at most a few times.
     */
    BUFFER_STREAM = 2,

    /**
     * The data store contents will be modified repeatedly on the GPU and used many times. Optimal for
     * transform feedback usage (WebGL2 only).
     */
    BUFFER_GPUDYNAMIC = 3,
}

export enum DataType {
    /**
     * Signed byte vertex element type.
     */
    TYPE_INT8 = 0,

    /**
     * Unsigned byte vertex element type.
     */
    TYPE_UINT8 = 1,

    /**
     * Signed short vertex element type.
     */
    TYPE_INT16 = 2,

    /**
     * Unsigned short vertex element type.
     */
    TYPE_UINT16 = 3,

    /**
     * Signed integer vertex element type.
     */
    TYPE_INT32 = 4,

    /**
     * Unsigned integer vertex element type.
     */
    TYPE_UINT32 = 5,

    /**
     * Floating point vertex element type.
     */
    TYPE_FLOAT32 = 6,

    /**
     * 矩阵类型 mat4
     */
    TYPE_MAT4 = 7,
}

export enum IndexFormat {
    /**
     * 8-bit unsigned vertex indices (0 to 255).
     */
    INDEXFORMAT_UINT8 = 0,

    /**
     * 16-bit unsigned vertex indices (0 to 65,535).
     */
    INDEXFORMAT_UINT16 = 1,

    /**
     * 32-bit unsigned vertex indices (0 to 4,294,967,295).
     */
    INDEXFORMAT_UINT32 = 2,
}

export enum BufferType {
    ARRAY_BUFFER,
    ELEMENT_ARRAY_BUFFER,
}

export enum BlendType {
    /**
     * Subtract the color of the source fragment from the destination fragment and write the result to
     * the frame buffer.
     */
    BLEND_SUBTRACTIVE = 0,

    /**
     * Add the color of the source fragment to the destination fragment and write the result to the
     * frame buffer.
     */
    BLEND_ADDITIVE = 1,

    /**
     * Enable simple translucency for materials such as glass. This is equivalent to enabling a source
     * blend mode of {@link BLENDMODE_SRC_ALPHA} and a destination blend mode of
     * {@link BLENDMODE_ONE_MINUS_SRC_ALPHA}.
     */
    BLEND_NORMAL = 2,

    /**
     * Disable blending.
     */
    BLEND_NONE = 3,

    /**
     * Similar to {@link BLEND_NORMAL} expect the source fragment is assumed to have already been
     * multiplied by the source alpha value.
     */
    BLEND_PREMULTIPLIED = 4,

    /**
     * Multiply the color of the source fragment by the color of the destination fragment and write the
     * result to the frame buffer.
     */
    BLEND_MULTIPLICATIVE = 5,

    /**
     * Same as {@link BLEND_ADDITIVE} except the source RGB is multiplied by the source alpha.
     */
    BLEND_ADDITIVEALPHA = 6,

    /**
     * Multiplies colors and doubles the result.
     */
    BLEND_MULTIPLICATIVE2X = 7,

    /**
     * Softer version of additive.
     */
    BLEND_SCREEN = 8,

    /**
     * Minimum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BLEND_MIN = 9,

    /**
     * Maximum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BLEND_MAX = 10,
}

export enum PrimitiveType {
    PRIMITIVE_POINTS = 0,
    PRIMITIVE_LINES = 1,
    PRIMITIVE_LINELOOP = 2,
    PRIMITIVE_LINESTRIP = 3,
    PRIMITIVE_TRIANGLES = 4,
    PRIMITIVE_TRISTRIP = 5,
    PRIMITIVE_TRIFAN = 6,
}
