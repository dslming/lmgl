import { Logger } from "../misc/logger";
import { Nullable } from "../types";
import { Engine } from "./engine";
import { BufferStore, BufferType, DataType, IndexFormat } from "./engine.enum";

// map of engine TYPE_*** enums to their corresponding typed array constructors and byte sizes
export const typedArrayTypes = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
export const typedArrayTypesByteSize = [1, 1, 2, 2, 4, 4, 4];

// map of engine INDEXFORMAT_*** to their corresponding typed array constructors and byte sizes
export const typedArrayIndexFormats = [Uint8Array, Uint16Array, Uint32Array];
export const typedArrayIndexFormatsByteSize = [1, 2, 4];

// map of typed array to engine TYPE_***
export const typedArrayToType = {
    Int8Array: DataType.TYPE_INT8,
    Uint8Array: DataType.TYPE_UINT8,
    Int16Array: DataType.TYPE_INT16,
    Uint16Array: DataType.TYPE_UINT16,
    Int32Array: DataType.TYPE_INT32,
    Uint32Array: DataType.TYPE_UINT32,
    Float32Array: DataType.TYPE_FLOAT32,
};

export class EngineVertex {
    private _cachedVertexArrayObject: Nullable<WebGLVertexArrayObject>;
    private _engine: Engine;
    private _glType: number[];
    private _glBufferType: number[];

    constructor(engine: Engine) {
        this._engine = engine;
        const { gl } = engine;
        this._glBufferType = [gl.ARRAY_BUFFER, gl.ELEMENT_ARRAY_BUFFER];
        this._glType = [gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.INT, gl.UNSIGNED_INT, gl.FLOAT];
    }

    private _unbindVertexArrayObject(): void {
        const { gl } = this._engine;
        if (!this._cachedVertexArrayObject) {
            return;
        }

        this._cachedVertexArrayObject = null;
        gl.bindVertexArray(null);
    }
    createVertexArray() {
        const { gl } = this._engine;
        return gl.createVertexArray();
    }

    bindVertexArray(vao: any) {
        const { gl } = this._engine;
        gl.bindVertexArray(vao);
    }

    deleteVertexArray(vao: any) {
        const { gl } = this._engine;
        gl.deleteVertexArray(vao);
    }

    createBuffer() {
        const { gl } = this._engine;
        return gl.createBuffer();
    }

    setBufferData(target: BufferType, data: any, buffer: any, usage: BufferStore, dataType: DataType | IndexFormat) {
        const { gl, webgl2 } = this._engine;

        // 绑定缓冲区
        gl.bindBuffer(this._glBufferType[target], buffer);

        let glUsage: any;
        switch (usage) {
            case BufferStore.BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case BufferStore.BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case BufferStore.BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case BufferStore.BUFFER_GPUDYNAMIC:
                if (webgl2) {
                    glUsage = gl.DYNAMIC_COPY;
                } else {
                    glUsage = gl.STATIC_DRAW;
                }
                break;
        }
        let typeArray: any;
        if (target === BufferType.ARRAY_BUFFER) {
            typeArray = typedArrayTypes;
        } else if (target === BufferType.ELEMENT_ARRAY_BUFFER) {
            typeArray = typedArrayIndexFormats;
        }
        const arrayBuffer = ArrayBuffer.isView(data) ? data : new typeArray[dataType](data);
        // 缓冲区指定数据
        gl.bufferData(this._glBufferType[target], arrayBuffer, glUsage);
    }

    /**
     * 初始化矩阵属性
     * @param buffer
     * @param usage
     * @param length
     */
    initAttributeMat4(buffer: any, usage: BufferStore, length: number) {
        const { gl, webgl2 } = this._engine;

        // 绑定缓冲区
        gl.bindBuffer(this._glBufferType[BufferType.ARRAY_BUFFER], buffer);

        let glUsage: any;
        switch (usage) {
            case BufferStore.BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case BufferStore.BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case BufferStore.BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case BufferStore.BUFFER_GPUDYNAMIC:
                if (webgl2) {
                    glUsage = gl.DYNAMIC_COPY;
                } else {
                    glUsage = gl.STATIC_DRAW;
                }
                break;
        }

        // 缓冲区指定数据
        gl.bufferData(this._glBufferType[BufferType.ARRAY_BUFFER], length, glUsage);
    }

    /**
     * 更新矩阵类型的属性,只支持mat4
     * https://webglfundamentals.org/webgl/webgl-instanced-drawing-projection-view.html
     * https://webglfundamentals.org/webgl/lessons/webgl-instanced-drawing.html
     * @param buffer
     * @param value
     * @param location
     * @param instancing
     * @param divisor
     */
    setAttributeMat4(buffer: any, value: any, location: number, instancing: boolean, divisor: number) {
        const { gl } = this._engine;

        // upload the new matrix data
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, value);

        // set all 4 attributes for matrix
        const bytesPerMatrix = 4 * 16;
        for (let i = 0; i < 4; ++i) {
            const loc = location + i;
            gl.enableVertexAttribArray(loc);
            // note the stride and offset
            const offset = i * 16; // 4 floats per row, 4 bytes per float
            gl.vertexAttribPointer(
                loc, // location
                4, // size (num values to pull from buffer per iteration)
                gl.FLOAT, // type of data in buffer
                false, // normalize
                bytesPerMatrix, // stride, num bytes to advance to get to next set of values
                offset // offset in buffer
            );
            // this line says this attribute only changes for each 1 instance
            if (instancing && divisor > 0) {
                gl.vertexAttribDivisor(loc, divisor);
            }
        }
    }

    setAttribBuffer(program: WebGLProgram, buffer: any, param: any) {
        const { gl } = this._engine;
        const { attribureName, attriburData, itemSize, dataType, usage, normalized, instancing, divisor } = param;

        // 属性使能数组
        const attribure = gl.getAttribLocation(program, attribureName);
        if (attribure == -1) {
            Logger.Warn(`attribureName 不存在...,${attribureName}`);
            return;
        }

        // 单独处理矩阵属性
        if (dataType === DataType.TYPE_MAT4) {
            this.setAttributeMat4(buffer, attriburData, attribure, instancing, divisor);
            return;
        }

        this.setBufferData(BufferType.ARRAY_BUFFER, attriburData, buffer, usage, dataType);
        const stride = 0;
        const offset = 0;

        // 绑定顶点缓冲区对象,传送给GPU
        gl.vertexAttribPointer(attribure, itemSize, this._glType[dataType], normalized, stride, offset);

        // 启用顶点数组
        gl.enableVertexAttribArray(attribure);

        if (instancing && divisor > 0) {
            gl.vertexAttribDivisor(attribure, divisor);
        }
    }

    getAttribLocation(program: any, name: string) {
        const { gl } = this._engine;
        return gl.getAttribLocation(program, name);
    }

    disableVertexAttribArray(attribure: number) {
        const { gl } = this._engine;
        gl.disableVertexAttribArray(attribure);
    }

    setBuffers() {}
}
