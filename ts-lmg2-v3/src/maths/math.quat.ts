/** @typedef {import('./mat4.js').Mat4} Mat4 */

import { Euler } from "./math.euler";
import { Mat4 } from "./math.mat4";
import { MathTool } from "./math.tool";
import { Vec3 } from "./math.vec3";

/**
 * A quaternion.
 */
class Quat {
    // setFromEuler(rotation: Euler, arg1: boolean) {
    // 	throw new Error("Method not implemented.");
    // }
    // _onChange(onQuaternionChange: () => void) {
    // 	throw new Error("Method not implemented.");
    // }
    // setFromRotationMatrix(_m1: Mat4) {
    // 	throw new Error("Method not implemented.");
    // }
    x: number;
    y: number;
    z: number;
    w: number;
    /**
     * Create a new Quat instance.
     *
     * @param {number} [x] - The quaternion's x component. Defaults to 0. If x is an array
     * of length 4, the array will be used to populate all components.
     * @param {number} [y] - The quaternion's y component. Defaults to 0.
     * @param {number} [z] - The quaternion's z component. Defaults to 0.
     * @param {number} [w] - The quaternion's w component. Defaults to 1.
     */
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    /**
     * Returns an identical copy of the specified quaternion.
     *
     * @returns {Quat} A quaternion containing the result of the cloning.
     * @example
     * var q = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
     * var qclone = q.clone();
     *
     * console.log("The result of the cloning is: " + q.toString());
     */
    clone() {
        return new Quat(this.x, this.y, this.z, this.w);
    }

    conjugate() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;

        return this;
    }

    /**
     * Copies the contents of a source quaternion to a destination quaternion.
     *
     * @param {Quat} rhs - The quaternion to be copied.
     * @returns {Quat} Self for chaining.
     * @example
     * var src = new pc.Quat();
     * var dst = new pc.Quat();
     * dst.copy(src, src);
     * console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"));
     */
    copy(rhs: Quat) {
        this.x = rhs.x;
        this.y = rhs.y;
        this.z = rhs.z;
        this.w = rhs.w;

        return this;
    }

    /**
     * Reports whether two quaternions are equal.
     *
     * @param {Quat} rhs - The quaternion to be compared against.
     * @returns {boolean} True if the quaternions are equal and false otherwise.
     * @example
     * var a = new pc.Quat();
     * var b = new pc.Quat();
     * console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs: Quat) {
        return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z && this.w === rhs.w;
    }

    /**
     * Gets the rotation axis and angle for a given quaternion. If a quaternion is created with
     * `setFromAxisAngle`, this method will return the same values as provided in the original
     * parameter list OR functionally equivalent values.
     *
     * @param {Vec3} axis - The 3-dimensional vector to receive the axis of rotation.
     * @returns {number} Angle, in degrees, of the rotation.
     * @example
     * var q = new pc.Quat();
     * q.setFromAxisAngle(new pc.Vec3(0, 1, 0), 90);
     * var v = new pc.Vec3();
     * var angle = q.getAxisAngle(v);
     * // Outputs 90
     * console.log(angle);
     * // Outputs [0, 1, 0]
     * console.log(v.toString());
     */
    getAxisAngle(axis: Vec3) {
        let rad = Math.acos(this.w) * 2;
        const s = Math.sin(rad / 2);
        if (s !== 0) {
            axis.x = this.x / s;
            axis.y = this.y / s;
            axis.z = this.z / s;
            if (axis.x < 0 || axis.y < 0 || axis.z < 0) {
                // Flip the sign
                axis.x *= -1;
                axis.y *= -1;
                axis.z *= -1;
                rad *= -1;
            }
        } else {
            // If s is zero, return any axis (no rotation - axis does not matter)
            axis.x = 1;
            axis.y = 0;
            axis.z = 0;
        }
        return rad * MathTool.RAD_TO_DEG;
    }

    /**
     * Converts the supplied quaternion to Euler angles.
     *
     * @param {Vec3} [eulers] - The 3-dimensional vector to receive the Euler angles.
     * @returns {Vec3} The 3-dimensional vector holding the Euler angles that
     * correspond to the supplied quaternion.
     */
    getEulerAngles(eulers = new Vec3()) {
        let x, y, z;

        const qx = this.x;
        const qy = this.y;
        const qz = this.z;
        const qw = this.w;

        const a2 = 2 * (qw * qy - qx * qz);

        if (a2 <= -0.99999) {
            x = 2 * Math.atan2(qx, qw);
            y = -Math.PI / 2;
            z = 0;
        } else if (a2 >= 0.99999) {
            x = 2 * Math.atan2(qx, qw);
            y = Math.PI / 2;
            z = 0;
        } else {
            x = Math.atan2(2 * (qw * qx + qy * qz), 1 - 2 * (qx * qx + qy * qy));
            y = Math.asin(a2);
            z = Math.atan2(2 * (qw * qz + qx * qy), 1 - 2 * (qy * qy + qz * qz));
        }

        return eulers.set(x, y, z).mulScalar(MathTool.RAD_TO_DEG);
    }

    /**
     * Generates the inverse of the specified quaternion.
     *
     * @returns {Quat} Self for chaining.
     * @example
     * // Create a quaternion rotated 180 degrees around the y-axis
     * var rot = new pc.Quat().setFromEulerAngles(0, 180, 0);
     *
     * // Invert in place
     * rot.invert();
     */
    invert() {
        return this.conjugate().normalize();
    }

    /**
     * Returns the magnitude of the specified quaternion.
     *
     * @returns {number} The magnitude of the specified quaternion.
     * @example
     * var q = new pc.Quat(0, 0, 0, 5);
     * var len = q.length();
     * // Outputs 5
     * console.log("The length of the quaternion is: " + len);
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Returns the magnitude squared of the specified quaternion.
     *
     * @returns {number} The magnitude of the specified quaternion.
     * @example
     * var q = new pc.Quat(3, 4, 0);
     * var lenSq = q.lengthSq();
     * // Outputs 25
     * console.log("The length squared of the quaternion is: " + lenSq);
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }

    /**
     * Returns the result of multiplying the specified quaternions together.
     *
     * @param {Quat} rhs - The quaternion used as the second multiplicand of the operation.
     * @returns {Quat} Self for chaining.
     * @example
     * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
     * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
     *
     * // a becomes a 90 degree rotation around the Y axis
     * // In other words, a = a * b
     * a.mul(b);
     *
     * console.log("The result of the multiplication is: " + a.toString());
     */
    mul(rhs: Quat) {
        const q1x = this.x;
        const q1y = this.y;
        const q1z = this.z;
        const q1w = this.w;

        const q2x = rhs.x;
        const q2y = rhs.y;
        const q2z = rhs.z;
        const q2w = rhs.w;

        this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;

        return this;
    }

    /**
     * Returns the result of multiplying the specified quaternions together.
     *
     * @param {Quat} lhs - The quaternion used as the first multiplicand of the operation.
     * @param {Quat} rhs - The quaternion used as the second multiplicand of the operation.
     * @returns {Quat} Self for chaining.
     * @example
     * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
     * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
     * var r = new pc.Quat();
     *
     * // r is set to a 90 degree rotation around the Y axis
     * // In other words, r = a * b
     * r.mul2(a, b);
     *
     * console.log("The result of the multiplication is: " + r.toString());
     */
    mul2(lhs: Quat, rhs: Quat) {
        const q1x = lhs.x;
        const q1y = lhs.y;
        const q1z = lhs.z;
        const q1w = lhs.w;

        const q2x = rhs.x;
        const q2y = rhs.y;
        const q2z = rhs.z;
        const q2w = rhs.w;

        this.x = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        this.y = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        this.z = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;

        return this;
    }

    /**
     * Returns the specified quaternion converted in place to a unit quaternion.
     *
     * @returns {Quat} The result of the normalization.
     * @example
     * var v = new pc.Quat(0, 0, 0, 5);
     *
     * v.normalize();
     *
     * // Outputs 0, 0, 0, 1
     * console.log("The result of the vector normalization is: " + v.toString());
     */
    normalize() {
        let len = this.length();
        if (len === 0) {
            this.x = this.y = this.z = 0;
            this.w = 1;
        } else {
            len = 1 / len;
            this.x *= len;
            this.y *= len;
            this.z *= len;
            this.w *= len;
        }

        return this;
    }

    /**
     * Sets the specified quaternion to the supplied numerical values.
     *
     * @param {number} x - The x component of the quaternion.
     * @param {number} y - The y component of the quaternion.
     * @param {number} z - The z component of the quaternion.
     * @param {number} w - The w component of the quaternion.
     * @returns {Quat} Self for chaining.
     * @example
     * var q = new pc.Quat();
     * q.set(1, 0, 0, 0);
     *
     * // Outputs 1, 0, 0, 0
     * console.log("The result of the vector set is: " + q.toString());
     */
    set(x: number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    }

    /**
     * Sets a quaternion from an angular rotation around an axis.
     *
     * @param {Vec3} axis - World space axis around which to rotate.
     * @param {number} angle - Angle to rotate around the given axis in degrees.
     * @returns {Quat} Self for chaining.
     * @example
     * var q = new pc.Quat();
     * q.setFromAxisAngle(pc.Vec3.UP, Math.PI/2);
     */
    setFromAxisAngle(axis: Vec3, angle: number) {
        angle *= 0.5;

        const sa = Math.sin(angle);
        const ca = Math.cos(angle);

        this.x = sa * axis.x;
        this.y = sa * axis.y;
        this.z = sa * axis.z;
        this.w = ca;

        return this;
    }

    /**
     * Sets a quaternion from Euler angles specified in XYZ order.
     *
     * @param {number} ex - Angle to rotate around X axis in degrees.
     * @param {number} ey - Angle to rotate around Y axis in degrees.
     * @param {number} ez - Angle to rotate around Z axis in degrees.
     * @returns {Quat} Self for chaining.
     * @example
     * var q = new pc.Quat();
     * q.setFromEulerAngles(45, 90, 180);
     */
    setFromEulerAngles(ex: number, ey: number, ez: number) {
        const halfToRad = 0.5 * MathTool.DEG_TO_RAD;
        ex *= halfToRad;
        ey *= halfToRad;
        ez *= halfToRad;

        const sx = Math.sin(ex);
        const cx = Math.cos(ex);
        const sy = Math.sin(ey);
        const cy = Math.cos(ey);
        const sz = Math.sin(ez);
        const cz = Math.cos(ez);

        this.x = sx * cy * cz - cx * sy * sz;
        this.y = cx * sy * cz + sx * cy * sz;
        this.z = cx * cy * sz - sx * sy * cz;
        this.w = cx * cy * cz + sx * sy * sz;

        return this;
    }

    /**
     *
     * @param euler 弧度的欧拉值
     * @returns
     */
    setFromEuler(euler: Euler) {
        if (!(euler && euler.isEuler)) {
            throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        }

        const x = euler.x,
            y = euler.y,
            z = euler.z;

        // http://www.mathworks.com/matlabcentral/fileexchange/
        // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //	content/SpinCalc.m

        const cos = Math.cos;
        const sin = Math.sin;

        const c1 = cos(x / 2);
        const c2 = cos(y / 2);
        const c3 = cos(z / 2);

        const s1 = sin(x / 2);
        const s2 = sin(y / 2);
        const s3 = sin(z / 2);

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;
        return this;
    }

    /**
     * Converts the specified 4x4 matrix to a quaternion. Note that since a quaternion is purely a
     * representation for orientation, only the translational part of the matrix is lost.
     *
     * @param {Mat4} m - The 4x4 matrix to convert.
     * @returns {Quat} Self for chaining.
     * @example
     * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
     * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
     *
     * // Convert to a quaternion
     * var q = new pc.Quat().setFromMat4(rot);
     */
    setFromMat4(m: Mat4) {
        let m00, m01, m02, m10, m11, m12, m20, m21, m22, s, rs, lx, ly, lz;

        var mData = m.data;

        // Cache matrix values for super-speed
        m00 = mData[0];
        m01 = mData[1];
        m02 = mData[2];
        m10 = mData[4];
        m11 = mData[5];
        m12 = mData[6];
        m20 = mData[8];
        m21 = mData[9];
        m22 = mData[10];

        // Remove the scale from the matrix
        lx = m00 * m00 + m01 * m01 + m02 * m02;
        if (lx === 0) return this;
        lx = 1 / Math.sqrt(lx);
        ly = m10 * m10 + m11 * m11 + m12 * m12;
        if (ly === 0) return this;
        ly = 1 / Math.sqrt(ly);
        lz = m20 * m20 + m21 * m21 + m22 * m22;
        if (lz === 0) return this;
        lz = 1 / Math.sqrt(lz);

        m00 *= lx;
        m01 *= lx;
        m02 *= lx;
        m10 *= ly;
        m11 *= ly;
        m12 *= ly;
        m20 *= lz;
        m21 *= lz;
        m22 *= lz;

        // http://www.cs.ucr.edu/~vbz/resources/quatut.pdf

        const tr = m00 + m11 + m22;
        if (tr >= 0) {
            s = Math.sqrt(tr + 1);
            this.w = s * 0.5;
            s = 0.5 / s;
            this.x = (m12 - m21) * s;
            this.y = (m20 - m02) * s;
            this.z = (m01 - m10) * s;
        } else {
            if (m00 > m11) {
                if (m00 > m22) {
                    // XDiagDomMatrix
                    rs = m00 - (m11 + m22) + 1;
                    rs = Math.sqrt(rs);

                    this.x = rs * 0.5;
                    rs = 0.5 / rs;
                    this.w = (m12 - m21) * rs;
                    this.y = (m01 + m10) * rs;
                    this.z = (m02 + m20) * rs;
                } else {
                    // ZDiagDomMatrix
                    rs = m22 - (m00 + m11) + 1;
                    rs = Math.sqrt(rs);

                    this.z = rs * 0.5;
                    rs = 0.5 / rs;
                    this.w = (m01 - m10) * rs;
                    this.x = (m20 + m02) * rs;
                    this.y = (m21 + m12) * rs;
                }
            } else if (m11 > m22) {
                // YDiagDomMatrix
                rs = m11 - (m22 + m00) + 1;
                rs = Math.sqrt(rs);

                this.y = rs * 0.5;
                rs = 0.5 / rs;
                this.w = (m20 - m02) * rs;
                this.z = (m12 + m21) * rs;
                this.x = (m10 + m01) * rs;
            } else {
                // ZDiagDomMatrix
                rs = m22 - (m00 + m11) + 1;
                rs = Math.sqrt(rs);

                this.z = rs * 0.5;
                rs = 0.5 / rs;
                this.w = (m01 - m10) * rs;
                this.x = (m20 + m02) * rs;
                this.y = (m21 + m12) * rs;
            }
        }

        return this;
    }

    /**
     * Performs a spherical interpolation between two quaternions. The result of the interpolation
     * is written to the quaternion calling the function.
     *
     * @param {Quat} lhs - The quaternion to interpolate from.
     * @param {Quat} rhs - The quaternion to interpolate to.
     * @param {number} alpha - The value controlling the interpolation in relation to the two input
     * quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything
     * in between generating a spherical interpolation between the two.
     * @returns {Quat} Self for chaining.
     * @example
     * var q1 = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
     * var q2 = new pc.Quat(-0.21, -0.21, -0.67, 0.68);
     *
     * var result;
     * result = new pc.Quat().slerp(q1, q2, 0);   // Return q1
     * result = new pc.Quat().slerp(q1, q2, 0.5); // Return the midpoint interpolant
     * result = new pc.Quat().slerp(q1, q2, 1);   // Return q2
     */
    slerp(lhs: Quat, rhs: Quat, alpha: number) {
        // Algorithm sourced from:
        // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
        const lx = lhs.x;
        const ly = lhs.y;
        const lz = lhs.z;
        const lw = lhs.w;
        let rx = rhs.x;
        let ry = rhs.y;
        let rz = rhs.z;
        let rw = rhs.w;

        // Calculate angle between them.
        let cosHalfTheta = lw * rw + lx * rx + ly * ry + lz * rz;

        if (cosHalfTheta < 0) {
            rw = -rw;
            rx = -rx;
            ry = -ry;
            rz = -rz;
            cosHalfTheta = -cosHalfTheta;
        }

        // If lhs == rhs or lhs == -rhs then theta == 0 and we can return lhs
        if (Math.abs(cosHalfTheta) >= 1) {
            this.w = lw;
            this.x = lx;
            this.y = ly;
            this.z = lz;
            return this;
        }

        // Calculate temporary values.
        const halfTheta = Math.acos(cosHalfTheta);
        const sinHalfTheta = Math.sqrt(1 - cosHalfTheta * cosHalfTheta);

        // If theta = 180 degrees then result is not fully defined
        // we could rotate around any axis normal to qa or qb
        if (Math.abs(sinHalfTheta) < 0.001) {
            this.w = lw * 0.5 + rw * 0.5;
            this.x = lx * 0.5 + rx * 0.5;
            this.y = ly * 0.5 + ry * 0.5;
            this.z = lz * 0.5 + rz * 0.5;
            return this;
        }

        const ratioA = Math.sin((1 - alpha) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(alpha * halfTheta) / sinHalfTheta;

        // Calculate Quaternion.
        this.w = lw * ratioA + rw * ratioB;
        this.x = lx * ratioA + rx * ratioB;
        this.y = ly * ratioA + ry * ratioB;
        this.z = lz * ratioA + rz * ratioB;
        return this;
    }

    /**
     * Transforms a 3-dimensional vector by the specified quaternion.
     *
     * @param {Vec3} vec - The 3-dimensional vector to be transformed.
     * @param {Vec3} [res] - An optional 3-dimensional vector to receive the result of the transformation.
     * @returns {Vec3} The input vector v transformed by the current instance.
     * @example
     * // Create a 3-dimensional vector
     * var v = new pc.Vec3(1, 2, 3);
     *
     * // Create a 4x4 rotation matrix
     * var q = new pc.Quat().setFromEulerAngles(10, 20, 30);
     *
     * var tv = q.transformVector(v);
     */
    transformVector(vec: Vec3, res = new Vec3()): Vec3 {
        const x = vec.x,
            y = vec.y,
            z = vec.z;
        const qx = this.x,
            qy = this.y,
            qz = this.z,
            qw = this.w;

        // calculate quat * vec
        const ix = qw * x + qy * z - qz * y;
        const iy = qw * y + qz * x - qx * z;
        const iz = qw * z + qx * y - qy * x;
        const iw = -qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        res.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        res.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        res.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

        return res;
    }

    /**
     * Converts the quaternion to string form.
     *
     * @returns {string} The quaternion in string form.
     * @example
     * var v = new pc.Quat(0, 0, 0, 1);
     * // Outputs [0, 0, 0, 1]
     * console.log(v.toString());
     */
    toString() {
        return `[${this.x}, ${this.y}, ${this.z}, ${this.w}]`;
    }

    /**
     * A constant quaternion set to [0, 0, 0, 1] (the identity).
     *
     * @type {Quat}
     * @readonly
     */
    static IDENTITY = Object.freeze(new Quat(0, 0, 0, 1));

    /**
     * A constant quaternion set to [0, 0, 0, 0].
     *
     * @type {Quat}
     * @readonly
     */
    static ZERO = Object.freeze(new Quat(0, 0, 0, 0));
}

export { Quat };
