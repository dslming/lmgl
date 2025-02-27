/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lmgl.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_tslib@2.3.1@tslib/tslib.es6.js":
/*!******************************************************!*\
  !*** ./node_modules/_tslib@2.3.1@tslib/tslib.es6.js ***!
  \******************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _cameras_camera_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cameras/camera.control */ "./src/cameras/camera.control.ts");
/* harmony import */ var _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cameras/PerspectiveCamera */ "./src/cameras/PerspectiveCamera.ts");
/* harmony import */ var _mesh_mesh_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mesh/mesh.axis */ "./src/mesh/mesh.axis.ts");
/* harmony import */ var _renderer_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/renderer */ "./src/renderer/renderer.ts");




class Application {
    constructor(engine, scene, options) {
        this._loopFunc = new Map();
        this.autoRender = true;
        this.engine = engine;
        scene && (this.scene = scene);
        this.camera = new _cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](45, 1, 0.1, 1000);
        this.renderer = new _renderer_renderer__WEBPACK_IMPORTED_MODULE_3__["default"](engine);
        this.loop = this.loop.bind(this);
        this.handleResize(this.engine.renderingCanvas.clientWidth, this.engine.renderingCanvas.clientHeight);
        this.camera.position.set(0, 0, 10);
        this.control = new _cameras_camera_control__WEBPACK_IMPORTED_MODULE_0__["CameraControl"]({
            distance: this.camera.position.z
            // distRange: {
            //     min: this.camera.near,
            //     max: this.camera.far,
            // },
        }, this.camera, this.engine.renderingCanvas);
        window.onresize = () => {
            const parentElement = this.engine.renderingCanvas.parentElement;
            this.handleResize(parentElement.clientWidth, parentElement.clientHeight);
        };
        if (options && options.needAxis) {
            const axis = new _mesh_mesh_axis__WEBPACK_IMPORTED_MODULE_2__["MeshAxis"](engine, 20);
            this._axis = axis;
            this.scene.add(axis.meshX);
            this.scene.add(axis.meshY);
            this.scene.add(axis.meshZ);
        }
        this.loop();
    }
    set needAxis(v) {
        if (!this._axis)
            return;
        this._axis.meshX.visible = v;
        this._axis.meshY.visible = v;
        this._axis.meshZ.visible = v;
    }
    get needAxis() {
        return this._axis.meshX.visible;
    }
    handleResize(width, height) {
        const canvas = this.engine.renderingCanvas;
        const ratio = window.devicePixelRatio;
        canvas.width = width;
        canvas.height = height;
        this.camera.aspect = width / height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }
    getRenderSize() {
        return {
            width: this.engine.engineDraw.getRenderWidth(),
            height: this.engine.engineDraw.getRenderHeight()
        };
    }
    addUpdate(name, callback) {
        this._loopFunc.set(name, callback);
    }
    removeUpdate(name) {
        this._loopFunc.delete(name);
    }
    loop() {
        this.control.update();
        this._loopFunc.forEach(callback => {
            callback();
        });
        for (let i = 0; i < this.scene.childrenParticleSystem.length; i++) {
            const child = this.scene.childrenParticleSystem[i];
            child.animate();
        }
        if (this.autoRender) {
            this.renderer.renderScene(this.scene, this.camera);
        }
        window.requestAnimationFrame(this.loop);
    }
}


/***/ }),

/***/ "./src/cameras/PerspectiveCamera.ts":
/*!******************************************!*\
  !*** ./src/cameras/PerspectiveCamera.ts ***!
  \******************************************/
/*! exports provided: PerspectiveCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveCamera", function() { return PerspectiveCamera; });
/* harmony import */ var _maths_math_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths/math.constants */ "./src/maths/math.constants.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera */ "./src/cameras/camera.ts");


class PerspectiveCamera extends _camera__WEBPACK_IMPORTED_MODULE_1__["Camera"] {
    constructor(fov = 50, aspect = 1, near = 0.1, far = 2000) {
        super();
        this.useRightHandedSystem = true;
        this.type = "PerspectiveCamera";
        this.fov = fov;
        this.zoom = 1;
        this.near = near;
        this.far = far;
        this.focus = 10;
        this.aspect = aspect;
        this.view = null;
        this.filmGauge = 35; // width of the film (default in millimeters)
        this.filmOffset = 0; // horizontal film offset (same unit as gauge)
        this.updateProjectionMatrix();
    }
    // copy(source, recursive) {
    //   super.copy(source, recursive);
    //   this.fov = source.fov;
    //   this.zoom = source.zoom;
    //   this.near = source.near;
    //   this.far = source.far;
    //   this.focus = source.focus;
    //   this.aspect = source.aspect;
    //   this.view = source.view === null ? null : Object.assign({}, source.view);
    //   this.filmGauge = source.filmGauge;
    //   this.filmOffset = source.filmOffset;
    //   return this;
    // }
    /**
     * Sets the FOV by focal length in respect to the current .filmGauge.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength) {
        /** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */
        const vExtentSlope = (0.5 * this.getFilmHeight()) / focalLength;
        this.fov = _maths_math_constants__WEBPACK_IMPORTED_MODULE_0__["RAD2DEG"] * 2 * Math.atan(vExtentSlope);
        this.updateProjectionMatrix();
    }
    /**
     * Calculates the focal length from the current .fov and .filmGauge.
     */
    getFocalLength() {
        const vExtentSlope = Math.tan(_maths_math_constants__WEBPACK_IMPORTED_MODULE_0__["DEG2RAD"] * 0.5 * this.fov);
        return (0.5 * this.getFilmHeight()) / vExtentSlope;
    }
    getEffectiveFOV() {
        return _maths_math_constants__WEBPACK_IMPORTED_MODULE_0__["RAD2DEG"] * 2 * Math.atan(Math.tan(_maths_math_constants__WEBPACK_IMPORTED_MODULE_0__["DEG2RAD"] * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
        // film not completely covered in portrait format (aspect < 1)
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        // film not completely covered in landscape format (aspect > 1)
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or
     * multi-monitor/multi-machine setups.
     *
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
     * the monitors are in grid like this
     *
     *   +---+---+---+
     *   | A | B | C |
     *   +---+---+---+
     *   | D | E | F |
     *   +---+---+---+
     *
     * then for each monitor you would call it like this
     *
     *   const w = 1920;
     *   const h = 1080;
     *   const fullWidth = w * 3;
     *   const fullHeight = h * 2;
     *
     *   --A--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     *   --B--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     *   --C--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     *   --D--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     *   --E--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     *   --F--
     *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
     *
     *   Note there is no reason monitors have to be the same size or in a grid.
     */
    setViewOffset(fullWidth, fullHeight, x, y, width, height) {
        this.aspect = fullWidth / fullHeight;
        if (this.view === null) {
            this.view = {
                enabled: true,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
            };
        }
        this.view.enabled = true;
        this.view.fullWidth = fullWidth;
        this.view.fullHeight = fullHeight;
        this.view.offsetX = x;
        this.view.offsetY = y;
        this.view.width = width;
        this.view.height = height;
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
        if (this.view !== null) {
            this.view.enabled = false;
        }
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const near = this.near;
        let top = (near * Math.tan(_maths_math_constants__WEBPACK_IMPORTED_MODULE_0__["DEG2RAD"] * 0.5 * this.fov)) / this.zoom;
        let height = 2 * top;
        let width = this.aspect * height;
        let left = -0.5 * width;
        const view = this.view;
        if (this.view !== null && this.view.enabled) {
            const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
            left += (view.offsetX * width) / fullWidth;
            top -= (view.offsetY * height) / fullHeight;
            width *= view.width / fullWidth;
            height *= view.height / fullHeight;
        }
        const skew = this.filmOffset;
        if (skew !== 0)
            left += (near * skew) / this.getFilmWidth();
        if (this.useRightHandedSystem === true) {
            this.projectionMatrix.makePerspectiveRH(left, left + width, top, top - height, near, this.far);
        }
        else {
            this.projectionMatrix.makePerspectiveLH(left, left + width, top, top - height, near, this.far);
        }
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    getViewMatrix() {
        return this.matrixWorldInverse;
    }
    getProjectionMatrix() {
        this.updateProjectionMatrix();
        return this.projectionMatrix;
    }
}
PerspectiveCamera.prototype.isPerspectiveCamera = true;



/***/ }),

/***/ "./src/cameras/camera.control.ts":
/*!***************************************!*\
  !*** ./src/cameras/camera.control.ts ***!
  \***************************************/
/*! exports provided: CameraControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraControl", function() { return CameraControl; });
/* harmony import */ var _maths_math_euler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths/math.euler */ "./src/maths/math.euler.ts");
/* harmony import */ var _maths_math_quat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/math.quat */ "./src/maths/math.quat.ts");
/* harmony import */ var _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _maths_math_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maths/math.vec2 */ "./src/maths/math.vec2.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maths/math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _object3D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../object3D */ "./src/object3D.ts");






// 相机控制器
class CameraControl {
    /**
     * @param {object} options
     * @param { object } options.distRange
     * @param { number } options.distRange.max
     * @param { number } options.distRange.min
     *
     * @param { object } options.rotRange
     * @param { number } options.rotRange.xMax
     * @param { number } options.rotRange.xMin
     * @param { number } options.rotRange.yMax
     * @param { number } options.rotRange.yMin
     *
     * @param { number } options.distance
     */
    constructor(options, camera, container) {
        this.forceUpdate = true;
        this.readOptions(options);
        this.vpW = container.clientWidth;
        this.vpH = container.clientHeight;
        this.quatX = new _maths_math_quat__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
        this.quatY = new _maths_math_quat__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
        this.camHolder = new _object3D__WEBPACK_IMPORTED_MODULE_5__["Object3D"]();
        this.camera = camera;
        this.gyro = {
            orient: 0,
            alpha: 0,
            beta: 0,
            gamma: 0,
        };
        this.defaultEuler = new _maths_math_euler__WEBPACK_IMPORTED_MODULE_0__["Euler"](0, 0, 0);
        this.initEvent(container);
    }
    initEvent(container) {
        const mouseVec2 = new _maths_math_vec2__WEBPACK_IMPORTED_MODULE_3__["Vec2"]();
        let disableHammer = true;
        container.addEventListener("mousedown", (event) => {
            mouseVec2.set(event.clientX, event.clientY);
            disableHammer = false;
        }, false);
        container.addEventListener("mousemove", (event) => {
            if (disableHammer)
                return;
            const t = 300;
            let angleX = ((event.clientX - mouseVec2.x) / this.vpW) * t;
            let angleY = ((event.clientY - mouseVec2.y) / this.vpH) * t;
            this.orbitBy(angleX, angleY);
            mouseVec2.set(event.clientX, event.clientY);
        }, false);
        container.addEventListener("mouseup", event => {
            disableHammer = true;
        }, false);
        container.addEventListener("wheel", (event) => {
            const t = 0.006;
            this.dolly(event.deltaY * t);
        }, false);
    }
    update() {
        if (!this.forceUpdate && !this.changesOccurred()) {
            return false;
        }
        // 控制相机的旋转
        this.rotActual.lerp(this.rotTarget, 0.2);
        this.quatX.setFromAxisAngle(_maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"].AXIS_X, -_maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].degToRad(this.rotActual.y));
        this.quatY.setFromAxisAngle(_maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"].AXIS_Y, -_maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].degToRad(this.rotActual.x));
        this.quatY.mul(this.quatX);
        this.camera.quaternion.copy(this.quatY);
        // 控制相机的位置
        this.focusActual.lerp(this.focusTarget, 0.1);
        this.camera.position.copy(this.focusActual);
        if (this.distActual !== this.distTarget) {
            this.distActual = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].zTween(this.distActual, this.distTarget, 0.3);
        }
        this.camera.translateZ(this.distActual);
        this.forceUpdate = false;
        return true;
    }
    readOptions(options) {
        if (options == undefined)
            options = {};
        if (options.distRange == undefined)
            options.distRange = {};
        if (options.rotRange == undefined)
            options.rotRange = {};
        this.options = {
            distance: options.distance || 90,
            focusPos: new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"](),
            rotation: new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"](),
            rotRange: {
                xMax: options.rotRange.xMax || Number.POSITIVE_INFINITY,
                xMin: options.rotRange.xMin || Number.NEGATIVE_INFINITY,
                yMax: options.rotRange.yMax || 90,
                yMin: options.rotRange.yMin || -90,
            },
            distRange: {
                max: options.distRange.max || Number.POSITIVE_INFINITY,
                min: options.distRange.min || Number.NEGATIVE_INFINITY,
            },
            smartUpdates: true,
        };
        const opt = this.options;
        this.distActual = opt.distance;
        this.distTarget = opt.distance;
        // 实际焦点
        this.focusActual = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"](opt.focusPos.x, opt.focusPos.y, opt.focusPos.z);
        // 目标焦点
        this.focusTarget = this.focusActual.clone();
        this.rotActual = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_4__["Vec3"](opt.rotation.x, opt.rotation.y, opt.rotation.z);
        this.rotTarget = this.rotActual.clone();
    }
    setDistance(dist) {
        this.distTarget = dist;
        this.distTarget = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.distTarget, this.options.distRange.min, this.options.distRange.max);
        this.forceUpdate = true;
    }
    setDistRange(max, min) {
        this.options.distRange.max = max;
        this.options.distRange.min = min;
    }
    setRotation(_rotX, _rotY, _rotZ) {
        if (_rotX === undefined)
            _rotX = 0;
        if (_rotY === undefined)
            _rotY = 0;
        if (_rotZ === undefined)
            _rotZ = 0;
        this.rotActual.set(_rotX, _rotY, _rotZ);
        this.rotTarget.set(_rotX, _rotY, _rotZ);
        this.forceUpdate = true;
    }
    setRotRange(xMax, xMin, yMax, yMin) {
        this.options.rotRange.xMax = xMax !== undefined ? xMax : this.options.rotRange.xMax;
        this.options.rotRange.xMin = xMin !== undefined ? xMin : this.options.rotRange.xMin;
        this.options.rotRange.yMax = yMax !== undefined ? yMax : this.options.rotRange.yMax;
        this.options.rotRange.yMin = yMin !== undefined ? yMin : this.options.rotRange.yMin;
    }
    clearRotRange() {
        this.options.rotRange.xMax = Number.POSITIVE_INFINITY;
        this.options.rotRange.xMin = Number.NEGATIVE_INFINITY;
        this.options.rotRange.yMax = Number.POSITIVE_INFINITY;
        this.options.rotRange.yMin = Number.NEGATIVE_INFINITY;
    }
    dolly(distance) {
        this.distTarget += distance;
        this.distTarget = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.distTarget, this.options.distRange.min, this.options.distRange.max);
    }
    orbitBy(angleX, angleY) {
        this.rotTarget.x += angleX;
        this.rotTarget.y += angleY;
        this.rotTarget.x = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.rotTarget.x, this.options.rotRange.xMin, this.options.rotRange.xMax);
        this.rotTarget.y = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.rotTarget.y, this.options.rotRange.yMin, this.options.rotRange.yMax);
    }
    orbitTo(angleX, angleY) {
        this.rotTarget.x = angleX;
        this.rotTarget.y = angleY;
        this.rotTarget.x = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.rotTarget.x, this.options.rotRange.xMin, this.options.rotRange.xMax);
        this.rotTarget.y = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].clamp(this.rotTarget.y, this.options.rotRange.yMin, this.options.rotRange.yMax);
    }
    pan(distX, distY) {
        this.focusTarget.x -= distX;
        this.focusTarget.y += distY;
    }
    onWindowResize(vpW, vpH) {
        this.vpW = vpW;
        this.vpH = vpH;
    }
    changesOccurred() {
        if (this.options.smartUpdates &&
            this.rotActual.manhattanDistanceTo(this.rotTarget) < 0.01 &&
            Math.abs(this.distActual - this.distTarget) < 0.01 &&
            this.focusActual.manhattanDistanceTo(this.focusTarget) < 0.01) {
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ "./src/cameras/camera.ts":
/*!*******************************!*\
  !*** ./src/cameras/camera.ts ***!
  \*******************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths/math.mat4 */ "./src/maths/math.mat4.ts");
/* harmony import */ var _object3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object3D */ "./src/object3D.ts");


class Camera extends _object3D__WEBPACK_IMPORTED_MODULE_1__["Object3D"] {
    constructor() {
        super();
        this.type = "Camera";
        this.matrixWorldInverse = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.projectionMatrix = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.projectionMatrixInverse = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
    }
    toJSON(meta) {
        throw new Error("Method not implemented.");
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.matrixWorldInverse.copy(source.matrixWorldInverse);
        this.projectionMatrix.copy(source.projectionMatrix);
        this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
        return this;
    }
    getWorldDirection(target) {
        this.updateWorldMatrix(true, false);
        const e = this.matrixWorld.data;
        return target.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld() {
        // super.updateMatrixWorld(force);
        this.matrixWorld.copy(this.matrix);
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(updateParents, updateChildren) {
        super.updateWorldMatrix(updateParents, updateChildren);
        this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateProjectionMatrix() { }
    clone() {
        // return new Camera().copy(this);
    }
}
Camera.prototype.isCamera = true;



/***/ }),

/***/ "./src/cameras/index.ts":
/*!******************************!*\
  !*** ./src/cameras/index.ts ***!
  \******************************/
/*! exports provided: PerspectiveCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PerspectiveCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerspectiveCamera */ "./src/cameras/PerspectiveCamera.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerspectiveCamera", function() { return _PerspectiveCamera__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]; });




/***/ }),

/***/ "./src/engines/engine.draw.ts":
/*!************************************!*\
  !*** ./src/engines/engine.draw.ts ***!
  \************************************/
/*! exports provided: EngineDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineDraw", function() { return EngineDraw; });
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");

class EngineDraw {
    constructor(engine) {
        this._engine = engine;
        const { gl } = this._engine;
        this._glPrimitive = [gl.POINTS, gl.LINES, gl.LINE_LOOP, gl.LINE_STRIP, gl.TRIANGLES, gl.TRIANGLE_STRIP, gl.TRIANGLE_FAN];
    }
    /**
     * Gets the current render width
     * @returns a number defining the current render width
     */
    getRenderWidth() {
        return this._engine.gl.drawingBufferWidth;
    }
    /**
     * Gets the current render height
     * @returns a number defining the current render height
     */
    getRenderHeight() {
        return this._engine.gl.drawingBufferHeight;
    }
    draw(primitive) {
        const instanceCount = primitive.instanceCount !== undefined ? primitive.instanceCount : 1;
        if (!primitive.type) {
            throw new Error("error primitive type");
        }
        if (primitive.count === undefined) {
            throw new Error("error primitive count");
        }
        const mode = this._glPrimitive[primitive.type];
        const count = primitive.count;
        const { gl } = this._engine;
        if (primitive.indexed) {
            if (instanceCount > 0) {
                gl.drawElementsInstanced(mode, count, gl.UNSIGNED_SHORT, 0, instanceCount);
            }
            else {
                gl.drawElements(mode, count, gl.UNSIGNED_SHORT, 0);
            }
        }
        else if (primitive.type === _engine_enum__WEBPACK_IMPORTED_MODULE_0__["PrimitiveType"].PRIMITIVE_LINES) {
            gl.lineWidth(1);
            gl.drawArrays(gl.LINES, 0, count);
        }
        else {
            if (instanceCount > 0) {
                gl.drawArraysInstanced(mode, 0, count, instanceCount);
            }
            else {
                gl.drawArrays(mode, 0, count);
            }
        }
    }
    // 根据材质设置webgl状态
    readMaterial(material) {
        this._engine.engineState.setBlending(material.blend);
        if (material.blend) {
            if (material.separateAlphaBlend) {
                this._engine.engineState.setBlendFunctionSeparate(material.blendSrc, material.blendDst, material.blendSrcAlpha, material.blendDstAlpha);
                this._engine.engineState.setBlendEquationSeparate(material.blendEquation, material.blendAlphaEquation);
            }
            else {
                this._engine.engineState.setBlendFunction(material.blendSrc, material.blendDst);
                this._engine.engineState.setBlendEquation(material.blendEquation);
            }
        }
        this._engine.engineState.setCullMode(material.cull);
        this._engine.engineState.setDepthWrite(material.depthWrite);
        this._engine.engineState.setDepthFunc(material.depthFunc);
        this._engine.engineState.setDepthTest(material.depthTest);
    }
}


/***/ }),

/***/ "./src/engines/engine.enum.ts":
/*!************************************!*\
  !*** ./src/engines/engine.enum.ts ***!
  \************************************/
/*! exports provided: UniformsType, TextureProjection, TextureType, TextureFormat, TextureFilter, TextureAddress, CompareFunc, CubeFace, BlendMode, BlendEquation, CullFace, ClearFlag, BufferStore, DataType, IndexFormat, BufferType, BlendType, PrimitiveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniformsType", function() { return UniformsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureProjection", function() { return TextureProjection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureType", function() { return TextureType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return TextureFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureFilter", function() { return TextureFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureAddress", function() { return TextureAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareFunc", function() { return CompareFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeFace", function() { return CubeFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendMode", function() { return BlendMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendEquation", function() { return BlendEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CullFace", function() { return CullFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearFlag", function() { return ClearFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferStore", function() { return BufferStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexFormat", function() { return IndexFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return BufferType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendType", function() { return BlendType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveType", function() { return PrimitiveType; });
var UniformsType;
(function (UniformsType) {
    UniformsType[UniformsType["Texture"] = 0] = "Texture";
    UniformsType[UniformsType["Float"] = 1] = "Float";
    UniformsType[UniformsType["Vec2"] = 2] = "Vec2";
    UniformsType[UniformsType["Vec3"] = 3] = "Vec3";
    UniformsType[UniformsType["Vec4"] = 4] = "Vec4";
    UniformsType[UniformsType["Mat3"] = 5] = "Mat3";
    UniformsType[UniformsType["Mat4"] = 6] = "Mat4";
    UniformsType[UniformsType["Struct"] = 7] = "Struct";
    UniformsType[UniformsType["Array"] = 8] = "Array";
})(UniformsType || (UniformsType = {}));
var TextureProjection;
(function (TextureProjection) {
    /**
     * Texture data is not stored a specific projection format.
     */
    TextureProjection["TEXTUREPROJECTION_NONE"] = "none";
    /**
     * Texture data is stored in cubemap projection format.
     */
    TextureProjection["TEXTUREPROJECTION_CUBE"] = "cube";
    /**
     * Texture data is stored in equirectangular projection format.
     */
    TextureProjection["TEXTUREPROJECTION_EQUIRECT"] = "equirect";
    /**
     * Texture data is stored in octahedral projection format.
     */
    TextureProjection["TEXTUREPROJECTION_OCTAHEDRAL"] = "octahedral";
})(TextureProjection || (TextureProjection = {}));
var TextureType;
(function (TextureType) {
    /**
     * Texture is a default type.
     */
    TextureType["TEXTURETYPE_DEFAULT"] = "default";
    /**
     * Texture stores high dynamic range data in RGBM format.
     */
    TextureType["TEXTURETYPE_RGBM"] = "rgbm";
    /**
     * Texture stores high dynamic range data in RGBE format.
     */
    TextureType["TEXTURETYPE_RGBE"] = "rgbe";
    /**
     * Texture stores normalmap data swizzled in GGGR format. This is used for tangent space normal
     * maps. The R component is stored in alpha and G is stored in RGB. This packing can result in
     * higher quality when the texture data is compressed.
     */
    TextureType["TEXTURETYPE_SWIZZLEGGGR"] = "swizzleGGGR";
})(TextureType || (TextureType = {}));
var TextureFormat;
(function (TextureFormat) {
    /**
     * 8-bit alpha.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_A8"] = 0] = "PIXELFORMAT_A8";
    /**
     * 8-bit luminance.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_L8"] = 1] = "PIXELFORMAT_L8";
    /**
     * 8-bit luminance with 8-bit alpha.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_L8_A8"] = 2] = "PIXELFORMAT_L8_A8";
    /**
     * 16-bit RGB (5-bits for red channel, 6 for green and 5 for blue).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R5_G6_B5"] = 3] = "PIXELFORMAT_R5_G6_B5";
    /**
     * 16-bit RGBA (5-bits for red channel, 5 for green, 5 for blue with 1-bit alpha).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R5_G5_B5_A1"] = 4] = "PIXELFORMAT_R5_G5_B5_A1";
    /**
     * 16-bit RGBA (4-bits for red channel, 4 for green, 4 for blue with 4-bit alpha).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R4_G4_B4_A4"] = 5] = "PIXELFORMAT_R4_G4_B4_A4";
    /**
     * 24-bit RGB (8-bits for red channel, 8 for green and 8 for blue).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R8_G8_B8"] = 6] = "PIXELFORMAT_R8_G8_B8";
    /**
     * 32-bit RGBA (8-bits for red channel, 8 for green, 8 for blue with 8-bit alpha).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R8_G8_B8_A8"] = 7] = "PIXELFORMAT_R8_G8_B8_A8";
    /**
     * Block compressed format storing 16 input pixels in 64 bits of output, consisting of two 16-bit
     * RGB 5:6:5 color values and a 4x4 two bit lookup table.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_DXT1"] = 8] = "PIXELFORMAT_DXT1";
    /**
     * Block compressed format storing 16 input pixels (corresponding to a 4x4 pixel block) into 128
     * bits of output, consisting of 64 bits of alpha channel data (4 bits for each pixel) followed by
     * 64 bits of color data, encoded the same way as DXT1.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_DXT3"] = 9] = "PIXELFORMAT_DXT3";
    /**
     * Block compressed format storing 16 input pixels into 128 bits of output, consisting of 64 bits
     * of alpha channel data (two 8 bit alpha values and a 4x4 3 bit lookup table) followed by 64 bits
     * of color data (encoded the same way as DXT1).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_DXT5"] = 10] = "PIXELFORMAT_DXT5";
    /**
     * 16-bit floating point RGB (16-bit float for each red, green and blue channels).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_RGB16F"] = 11] = "PIXELFORMAT_RGB16F";
    /**
     * 16-bit floating point RGBA (16-bit float for each red, green, blue and alpha channels).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_RGBA16F"] = 12] = "PIXELFORMAT_RGBA16F";
    /**
     * 32-bit floating point RGB (32-bit float for each red, green and blue channels).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_RGB32F"] = 13] = "PIXELFORMAT_RGB32F";
    /**
     * 32-bit floating point RGBA (32-bit float for each red, green, blue and alpha channels).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_RGBA32F"] = 14] = "PIXELFORMAT_RGBA32F";
    /**
     * 32-bit floating point single channel format (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R32F"] = 15] = "PIXELFORMAT_R32F";
    /**
     * 16-bit floating point single channel format (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_R16F"] = 16] = "PIXELFORMAT_R16F";
    /**
     * A readable depth buffer format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_DEPTH"] = 17] = "PIXELFORMAT_DEPTH";
    /**
     * A readable depth/stencil buffer format (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_DEPTHSTENCIL"] = 18] = "PIXELFORMAT_DEPTHSTENCIL";
    /**
     * A floating-point color-only format with 11 bits for red and green channels and 10 bits for the
     * blue channel (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_111110F"] = 19] = "PIXELFORMAT_111110F";
    /**
     * Color-only sRGB format (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_SRGB"] = 20] = "PIXELFORMAT_SRGB";
    /**
     * Color sRGB format with additional alpha channel (WebGL2 only).
     */
    TextureFormat[TextureFormat["PIXELFORMAT_SRGBA"] = 21] = "PIXELFORMAT_SRGBA";
    /**
     * ETC1 compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ETC1"] = 22] = "PIXELFORMAT_ETC1";
    /**
     * ETC2 (RGB) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ETC2_RGB"] = 23] = "PIXELFORMAT_ETC2_RGB";
    /**
     * ETC2 (RGBA) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ETC2_RGBA"] = 24] = "PIXELFORMAT_ETC2_RGBA";
    /**
     * PVRTC (2BPP RGB) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_PVRTC_2BPP_RGB_1"] = 25] = "PIXELFORMAT_PVRTC_2BPP_RGB_1";
    /**
     * PVRTC (2BPP RGBA) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_PVRTC_2BPP_RGBA_1"] = 26] = "PIXELFORMAT_PVRTC_2BPP_RGBA_1";
    /**
     * PVRTC (4BPP RGB) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_PVRTC_4BPP_RGB_1"] = 27] = "PIXELFORMAT_PVRTC_4BPP_RGB_1";
    /**
     * PVRTC (4BPP RGBA) compressed format.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_PVRTC_4BPP_RGBA_1"] = 28] = "PIXELFORMAT_PVRTC_4BPP_RGBA_1";
    /**
     * ATC compressed format with alpha channel in blocks of 4x4.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ASTC_4x4"] = 29] = "PIXELFORMAT_ASTC_4x4";
    /**
     * ATC compressed format with no alpha channel.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ATC_RGB"] = 30] = "PIXELFORMAT_ATC_RGB";
    /**
     * ATC compressed format with alpha channel.
     */
    TextureFormat[TextureFormat["PIXELFORMAT_ATC_RGBA"] = 31] = "PIXELFORMAT_ATC_RGBA";
})(TextureFormat || (TextureFormat = {}));
var TextureFilter;
(function (TextureFilter) {
    /**
     * Point sample filtering.
     */
    TextureFilter[TextureFilter["FILTER_NEAREST"] = 0] = "FILTER_NEAREST";
    /**
     * Bilinear filtering.
     */
    TextureFilter[TextureFilter["FILTER_LINEAR"] = 1] = "FILTER_LINEAR";
    /**
     * Use the nearest neighbor in the nearest mipmap level.
     */
    TextureFilter[TextureFilter["FILTER_NEAREST_MIPMAP_NEAREST"] = 2] = "FILTER_NEAREST_MIPMAP_NEAREST";
    /**
     * Linearly interpolate in the nearest mipmap level.
     */
    TextureFilter[TextureFilter["FILTER_NEAREST_MIPMAP_LINEAR"] = 3] = "FILTER_NEAREST_MIPMAP_LINEAR";
    /**
     * Use the nearest neighbor after linearly interpolating between mipmap levels.
     */
    TextureFilter[TextureFilter["FILTER_LINEAR_MIPMAP_NEAREST"] = 4] = "FILTER_LINEAR_MIPMAP_NEAREST";
    /**
     * Linearly interpolate both the mipmap levels and between texels.
     */
    TextureFilter[TextureFilter["FILTER_LINEAR_MIPMAP_LINEAR"] = 5] = "FILTER_LINEAR_MIPMAP_LINEAR";
})(TextureFilter || (TextureFilter = {}));
var TextureAddress;
(function (TextureAddress) {
    /**
     * Ignores the integer part of texture coordinates, using only the fractional part.
     */
    TextureAddress[TextureAddress["ADDRESS_REPEAT"] = 0] = "ADDRESS_REPEAT";
    /**
     * Clamps texture coordinate to the range 0 to 1.
     */
    TextureAddress[TextureAddress["ADDRESS_CLAMP_TO_EDGE"] = 1] = "ADDRESS_CLAMP_TO_EDGE";
    /**
     * Texture coordinate to be set to the fractional part if the integer part is even. If the integer
     * part is odd, then the texture coordinate is set to 1 minus the fractional part.
     */
    TextureAddress[TextureAddress["ADDRESS_MIRRORED_REPEAT"] = 2] = "ADDRESS_MIRRORED_REPEAT";
})(TextureAddress || (TextureAddress = {}));
var CompareFunc;
(function (CompareFunc) {
    /**
     * Never pass.
     */
    CompareFunc[CompareFunc["FUNC_NEVER"] = 0] = "FUNC_NEVER";
    /**
     * Pass if (ref & mask) < (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_LESS"] = 1] = "FUNC_LESS";
    /**
     * Pass if (ref & mask) == (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_EQUAL"] = 2] = "FUNC_EQUAL";
    /**
     * Pass if (ref & mask) <= (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_LESSEQUAL"] = 3] = "FUNC_LESSEQUAL";
    /**
     * Pass if (ref & mask) > (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_GREATER"] = 4] = "FUNC_GREATER";
    /**
     * Pass if (ref & mask) != (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_NOTEQUAL"] = 5] = "FUNC_NOTEQUAL";
    /**
     * Pass if (ref & mask) >= (stencil & mask).
     */
    CompareFunc[CompareFunc["FUNC_GREATEREQUAL"] = 6] = "FUNC_GREATEREQUAL";
    /**
     * Always pass.
     */
    CompareFunc[CompareFunc["FUNC_ALWAYS"] = 7] = "FUNC_ALWAYS";
})(CompareFunc || (CompareFunc = {}));
var CubeFace;
(function (CubeFace) {
    /**
     * The positive X face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_POSX"] = 0] = "CUBEFACE_POSX";
    /**
     * The negative X face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_NEGX"] = 1] = "CUBEFACE_NEGX";
    /**
     * The positive Y face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_POSY"] = 2] = "CUBEFACE_POSY";
    /**
     * The negative Y face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_NEGY"] = 3] = "CUBEFACE_NEGY";
    /**
     * The positive Z face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_POSZ"] = 4] = "CUBEFACE_POSZ";
    /**
     * The negative Z face of a cubemap.
     */
    CubeFace[CubeFace["CUBEFACE_NEGZ"] = 5] = "CUBEFACE_NEGZ";
})(CubeFace || (CubeFace = {}));
var BlendMode;
(function (BlendMode) {
    /**
     * Multiply all fragment components by zero.
     */
    BlendMode[BlendMode["BLENDMODE_ZERO"] = 0] = "BLENDMODE_ZERO";
    /**
     * Multiply all fragment components by one.
     */
    BlendMode[BlendMode["BLENDMODE_ONE"] = 1] = "BLENDMODE_ONE";
    /**
     * Multiply all fragment components by the components of the source fragment.
     */
    BlendMode[BlendMode["BLENDMODE_SRC_COLOR"] = 2] = "BLENDMODE_SRC_COLOR";
    /**
     * Multiply all fragment components by one minus the components of the source fragment.
     */
    BlendMode[BlendMode["BLENDMODE_ONE_MINUS_SRC_COLOR"] = 3] = "BLENDMODE_ONE_MINUS_SRC_COLOR";
    /**
     * Multiply all fragment components by the components of the destination fragment.
     */
    BlendMode[BlendMode["BLENDMODE_DST_COLOR"] = 4] = "BLENDMODE_DST_COLOR";
    /**
     * Multiply all fragment components by one minus the components of the destination fragment.
     */
    BlendMode[BlendMode["BLENDMODE_ONE_MINUS_DST_COLOR"] = 5] = "BLENDMODE_ONE_MINUS_DST_COLOR";
    /**
     * Multiply all fragment components by the alpha value of the source fragment.
     */
    BlendMode[BlendMode["BLENDMODE_SRC_ALPHA"] = 6] = "BLENDMODE_SRC_ALPHA";
    /**
     * Multiply all fragment components by the alpha value of the source fragment.
     */
    BlendMode[BlendMode["BLENDMODE_SRC_ALPHA_SATURATE"] = 7] = "BLENDMODE_SRC_ALPHA_SATURATE";
    /**
     * Multiply all fragment components by one minus the alpha value of the source fragment.
     */
    BlendMode[BlendMode["BLENDMODE_ONE_MINUS_SRC_ALPHA"] = 8] = "BLENDMODE_ONE_MINUS_SRC_ALPHA";
    /**
     * Multiply all fragment components by the alpha value of the destination fragment.
     */
    BlendMode[BlendMode["BLENDMODE_DST_ALPHA"] = 9] = "BLENDMODE_DST_ALPHA";
    /**
     * Multiply all fragment components by one minus the alpha value of the destination fragment.
     */
    BlendMode[BlendMode["BLENDMODE_ONE_MINUS_DST_ALPHA"] = 10] = "BLENDMODE_ONE_MINUS_DST_ALPHA";
})(BlendMode || (BlendMode = {}));
var BlendEquation;
(function (BlendEquation) {
    /**
     * Add the results of the source and destination fragment multiplies.
     */
    BlendEquation[BlendEquation["BLENDEQUATION_ADD"] = 0] = "BLENDEQUATION_ADD";
    /**
     * Subtract the results of the source and destination fragment multiplies.
     */
    BlendEquation[BlendEquation["BLENDEQUATION_SUBTRACT"] = 1] = "BLENDEQUATION_SUBTRACT";
    /**
     * Reverse and subtract the results of the source and destination fragment multiplies.
     */
    BlendEquation[BlendEquation["BLENDEQUATION_REVERSE_SUBTRACT"] = 2] = "BLENDEQUATION_REVERSE_SUBTRACT";
    /**
     * Use the smallest value. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BlendEquation[BlendEquation["BLENDEQUATION_MIN"] = 3] = "BLENDEQUATION_MIN";
    /**
     * Use the largest value. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BlendEquation[BlendEquation["BLENDEQUATION_MAX"] = 4] = "BLENDEQUATION_MAX";
})(BlendEquation || (BlendEquation = {}));
var CullFace;
(function (CullFace) {
    /**
     * No triangles are culled.
     */
    CullFace[CullFace["CULLFACE_NONE"] = 0] = "CULLFACE_NONE";
    /**
     * Triangles facing away from the view direction are culled.
     */
    CullFace[CullFace["CULLFACE_BACK"] = 1] = "CULLFACE_BACK";
    /**
     * Triangles facing the view direction are culled.
     */
    CullFace[CullFace["CULLFACE_FRONT"] = 2] = "CULLFACE_FRONT";
    /**
     * Triangles are culled regardless of their orientation with respect to the view direction. Note
     * that point or line primitives are unaffected by this render state.
     */
    CullFace[CullFace["CULLFACE_FRONTANDBACK"] = 3] = "CULLFACE_FRONTANDBACK";
})(CullFace || (CullFace = {}));
var ClearFlag;
(function (ClearFlag) {
    ClearFlag[ClearFlag["CLEARFLAG_NULL"] = 0] = "CLEARFLAG_NULL";
    /**
     * Clear the color buffer.
     */
    ClearFlag[ClearFlag["CLEARFLAG_COLOR"] = 1] = "CLEARFLAG_COLOR";
    /**
     * Clear the depth buffer.
     */
    ClearFlag[ClearFlag["CLEARFLAG_DEPTH"] = 2] = "CLEARFLAG_DEPTH";
    /**
     * Clear the stencil buffer.
     */
    ClearFlag[ClearFlag["CLEARFLAG_STENCIL"] = 4] = "CLEARFLAG_STENCIL";
})(ClearFlag || (ClearFlag = {}));
var BufferStore;
(function (BufferStore) {
    /**
     * The data store contents will be modified once and used many times.
     */
    BufferStore[BufferStore["BUFFER_STATIC"] = 0] = "BUFFER_STATIC";
    /**
     * The data store contents will be modified repeatedly and used many times.
     */
    BufferStore[BufferStore["BUFFER_DYNAMIC"] = 1] = "BUFFER_DYNAMIC";
    /**
     * The data store contents will be modified once and used at most a few times.
     */
    BufferStore[BufferStore["BUFFER_STREAM"] = 2] = "BUFFER_STREAM";
    /**
     * The data store contents will be modified repeatedly on the GPU and used many times. Optimal for
     * transform feedback usage (WebGL2 only).
     */
    BufferStore[BufferStore["BUFFER_GPUDYNAMIC"] = 3] = "BUFFER_GPUDYNAMIC";
})(BufferStore || (BufferStore = {}));
var DataType;
(function (DataType) {
    /**
     * Signed byte vertex element type.
     */
    DataType[DataType["TYPE_INT8"] = 0] = "TYPE_INT8";
    /**
     * Unsigned byte vertex element type.
     */
    DataType[DataType["TYPE_UINT8"] = 1] = "TYPE_UINT8";
    /**
     * Signed short vertex element type.
     */
    DataType[DataType["TYPE_INT16"] = 2] = "TYPE_INT16";
    /**
     * Unsigned short vertex element type.
     */
    DataType[DataType["TYPE_UINT16"] = 3] = "TYPE_UINT16";
    /**
     * Signed integer vertex element type.
     */
    DataType[DataType["TYPE_INT32"] = 4] = "TYPE_INT32";
    /**
     * Unsigned integer vertex element type.
     */
    DataType[DataType["TYPE_UINT32"] = 5] = "TYPE_UINT32";
    /**
     * Floating point vertex element type.
     */
    DataType[DataType["TYPE_FLOAT32"] = 6] = "TYPE_FLOAT32";
    /**
     * 矩阵类型 mat4
     */
    DataType[DataType["TYPE_MAT4"] = 7] = "TYPE_MAT4";
})(DataType || (DataType = {}));
var IndexFormat;
(function (IndexFormat) {
    /**
     * 8-bit unsigned vertex indices (0 to 255).
     */
    IndexFormat[IndexFormat["INDEXFORMAT_UINT8"] = 0] = "INDEXFORMAT_UINT8";
    /**
     * 16-bit unsigned vertex indices (0 to 65,535).
     */
    IndexFormat[IndexFormat["INDEXFORMAT_UINT16"] = 1] = "INDEXFORMAT_UINT16";
    /**
     * 32-bit unsigned vertex indices (0 to 4,294,967,295).
     */
    IndexFormat[IndexFormat["INDEXFORMAT_UINT32"] = 2] = "INDEXFORMAT_UINT32";
})(IndexFormat || (IndexFormat = {}));
var BufferType;
(function (BufferType) {
    BufferType[BufferType["ARRAY_BUFFER"] = 0] = "ARRAY_BUFFER";
    BufferType[BufferType["ELEMENT_ARRAY_BUFFER"] = 1] = "ELEMENT_ARRAY_BUFFER";
})(BufferType || (BufferType = {}));
var BlendType;
(function (BlendType) {
    /**
     * Subtract the color of the source fragment from the destination fragment and write the result to
     * the frame buffer.
     */
    BlendType[BlendType["BLEND_SUBTRACTIVE"] = 0] = "BLEND_SUBTRACTIVE";
    /**
     * Add the color of the source fragment to the destination fragment and write the result to the
     * frame buffer.
     */
    BlendType[BlendType["BLEND_ADDITIVE"] = 1] = "BLEND_ADDITIVE";
    /**
     * Enable simple translucency for materials such as glass. This is equivalent to enabling a source
     * blend mode of {@link BLENDMODE_SRC_ALPHA} and a destination blend mode of
     * {@link BLENDMODE_ONE_MINUS_SRC_ALPHA}.
     */
    BlendType[BlendType["BLEND_NORMAL"] = 2] = "BLEND_NORMAL";
    /**
     * Disable blending.
     */
    BlendType[BlendType["BLEND_NONE"] = 3] = "BLEND_NONE";
    /**
     * Similar to {@link BLEND_NORMAL} expect the source fragment is assumed to have already been
     * multiplied by the source alpha value.
     */
    BlendType[BlendType["BLEND_PREMULTIPLIED"] = 4] = "BLEND_PREMULTIPLIED";
    /**
     * Multiply the color of the source fragment by the color of the destination fragment and write the
     * result to the frame buffer.
     */
    BlendType[BlendType["BLEND_MULTIPLICATIVE"] = 5] = "BLEND_MULTIPLICATIVE";
    /**
     * Same as {@link BLEND_ADDITIVE} except the source RGB is multiplied by the source alpha.
     */
    BlendType[BlendType["BLEND_ADDITIVEALPHA"] = 6] = "BLEND_ADDITIVEALPHA";
    /**
     * Multiplies colors and doubles the result.
     */
    BlendType[BlendType["BLEND_MULTIPLICATIVE2X"] = 7] = "BLEND_MULTIPLICATIVE2X";
    /**
     * Softer version of additive.
     */
    BlendType[BlendType["BLEND_SCREEN"] = 8] = "BLEND_SCREEN";
    /**
     * Minimum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BlendType[BlendType["BLEND_MIN"] = 9] = "BLEND_MIN";
    /**
     * Maximum color. Check app.graphicsDevice.extBlendMinmax for support.
     */
    BlendType[BlendType["BLEND_MAX"] = 10] = "BLEND_MAX";
})(BlendType || (BlendType = {}));
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["PRIMITIVE_POINTS"] = 0] = "PRIMITIVE_POINTS";
    PrimitiveType[PrimitiveType["PRIMITIVE_LINES"] = 1] = "PRIMITIVE_LINES";
    PrimitiveType[PrimitiveType["PRIMITIVE_LINELOOP"] = 2] = "PRIMITIVE_LINELOOP";
    PrimitiveType[PrimitiveType["PRIMITIVE_LINESTRIP"] = 3] = "PRIMITIVE_LINESTRIP";
    PrimitiveType[PrimitiveType["PRIMITIVE_TRIANGLES"] = 4] = "PRIMITIVE_TRIANGLES";
    PrimitiveType[PrimitiveType["PRIMITIVE_TRISTRIP"] = 5] = "PRIMITIVE_TRISTRIP";
    PrimitiveType[PrimitiveType["PRIMITIVE_TRIFAN"] = 6] = "PRIMITIVE_TRIFAN";
})(PrimitiveType || (PrimitiveType = {}));


/***/ }),

/***/ "./src/engines/engine.programs.ts":
/*!****************************************!*\
  !*** ./src/engines/engine.programs.ts ***!
  \****************************************/
/*! exports provided: EngineProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineProgram", function() { return EngineProgram; });
/* harmony import */ var _misc_shaderProcess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/shaderProcess */ "./src/misc/shaderProcess.ts");

// 查询信息类型
var SHADER_INFO_TYPE;
(function (SHADER_INFO_TYPE) {
    SHADER_INFO_TYPE["DELETE_STATUS"] = "DELETE_STATUS";
    SHADER_INFO_TYPE["COMPILE_STATUS"] = "COMPILE_STATUS";
    SHADER_INFO_TYPE["SHADER_TYPE"] = "SHADER_TYPE";
})(SHADER_INFO_TYPE || (SHADER_INFO_TYPE = {}));
// shader 类型
var SHADER_TYPE;
(function (SHADER_TYPE) {
    SHADER_TYPE["VERTEX_SHADER"] = "VERTEX_SHADER";
    SHADER_TYPE["FRAGMENT_SHADER"] = "FRAGMENT_SHADER";
})(SHADER_TYPE || (SHADER_TYPE = {}));
class EngineProgram {
    constructor(engine) {
        this._engine = engine;
    }
    _getShader(type, source) {
        const { gl } = this._engine;
        // 创建
        const shader = gl.createShader(gl[type]);
        if (!shader) {
            throw new Error("Something went wrong while compile the shader.");
        }
        // 指定源码
        gl.shaderSource(shader, source);
        // 编译
        gl.compileShader(shader);
        //检测是否编译正常。
        let success = this._getShaderInfo(shader, SHADER_INFO_TYPE.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        console.error(gl.getShaderInfoLog(shader), source);
        this._deleteShader(shader);
        return true;
    }
    _getShaderInfo(shader, type) {
        const { gl } = this._engine;
        return gl.getShaderParameter(shader, gl[type]);
    }
    _deleteShader(shader) {
        const { gl } = this._engine;
        gl.deleteShader(shader);
    }
    _createProgram(vertexShader, fragmentShader) {
        const { gl } = this._engine;
        const program = gl.createProgram();
        if (!program) {
            throw new Error("Unable to create program");
        }
        // 连接shader, shader对是否编译没有要求
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        // 链接
        gl.linkProgram(program);
        let result = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (result) {
            // console.log('着色器程序创建成功');
            this._deleteShader(vertexShader);
            this._deleteShader(fragmentShader);
            return program;
        }
        let errorLog = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw errorLog;
    }
    createProgram(shaderSource) {
        let { vertexShader: vs, fragmentShader: fs } = shaderSource;
        const header = _misc_shaderProcess__WEBPACK_IMPORTED_MODULE_0__["ShaderProcess"].getHead();
        const defines = _misc_shaderProcess__WEBPACK_IMPORTED_MODULE_0__["ShaderProcess"].generateDefines(shaderSource.defines);
        vs = header + defines + vs;
        fs = header + defines + fs;
        //创建顶点着色器
        const vertexShader = this._getShader(SHADER_TYPE.VERTEX_SHADER, vs);
        //创建片元着色器
        let fragmentShader = this._getShader(SHADER_TYPE.FRAGMENT_SHADER, fs);
        //创建着色器程序
        const program = this._createProgram(vertexShader, fragmentShader);
        return {
            vertexShader: vs,
            fragmentShader: fs,
            program,
        };
    }
    deleteProgram(program) {
        this._engine.gl.deleteProgram(program);
    }
    useProgram(program) {
        this._engine.gl.useProgram(program);
    }
}


/***/ }),

/***/ "./src/engines/engine.renderTarget.ts":
/*!********************************************!*\
  !*** ./src/engines/engine.renderTarget.ts ***!
  \********************************************/
/*! exports provided: EngineRenderTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineRenderTarget", function() { return EngineRenderTarget; });
class EngineRenderTarget {
    constructor(engine) {
        this._engine = engine;
        this.maxRenderBufferSize = this._engine.capabilities.maxRenderBufferSize;
    }
    /**
     * Binds the specified framebuffer object.
     *
     * @param {WebGLFramebuffer} fb - The framebuffer to bind.
     * @ignore
     */
    _setFramebuffer(fb) {
        const { gl } = this._engine;
        if (this.activeFramebuffer !== fb) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
            this.activeFramebuffer = fb;
        }
        if (gl.getError() != gl.NO_ERROR) {
            console.error("Some WebGL error occurred while trying to create framebuffer.");
        }
    }
    /**
     * Initialize render target before it can be used.
     *
     * @param {RenderTarget} target - The render target to be initialized.
     * @ignore
     */
    _initRenderTarget(target) {
        if (target.glFrameBuffer)
            return;
        const { gl, webgl2 } = this._engine;
        // ##### Create main FBO #####
        target.glFrameBuffer = gl.createFramebuffer();
        this._setFramebuffer(target.glFrameBuffer);
        // --- Init the provided color buffer (optional) ---
        const colorBuffer = target.colorBuffer;
        if (colorBuffer) {
            if (!colorBuffer.glTexture) {
                // Clamp the render buffer size to the maximum supported by the device
                colorBuffer.width = Math.min(colorBuffer.width, this.maxRenderBufferSize);
                colorBuffer.height = Math.min(colorBuffer.height, this.maxRenderBufferSize);
                this._engine.engineTexture.setTexture(colorBuffer, 0);
            }
            // Attach the color buffer
            // prettier-ignore
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, colorBuffer.cubemap ? gl.TEXTURE_CUBE_MAP_POSITIVE_X + target.face : gl.TEXTURE_2D, colorBuffer.glTexture, 0);
        }
        const depthBuffer = target.depthBuffer;
        if (depthBuffer && webgl2) {
            // --- Init the provided depth/stencil buffer (optional, WebGL2 only) ---
            if (!depthBuffer.glTexture) {
                // Clamp the render buffer size to the maximum supported by the device
                depthBuffer.width = Math.min(depthBuffer.width, this.maxRenderBufferSize);
                depthBuffer.height = Math.min(depthBuffer.height, this.maxRenderBufferSize);
                this._engine.engineTexture.setTexture(depthBuffer, 0);
            }
            // Attach
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, target.depthBuffer.glTexture, 0);
        }
        else if (target.depth) {
            if (!target.glDepthBuffer) {
                target.glDepthBuffer = gl.createRenderbuffer();
            }
            gl.bindRenderbuffer(gl.RENDERBUFFER, target.glDepthBuffer);
            if (target.stencil) {
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, target.width, target.height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, target.glDepthBuffer);
            }
            else {
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, target.width, target.height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, target.glDepthBuffer);
            }
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        }
        this._checkFbo();
    }
    /**
     * Sets the specified render target on the device. If null is passed as a parameter, the back
     * buffer becomes the current target for all rendering operations.
     *
     * @param {RenderTarget} renderTarget - The render target to activate.
     * @example
     * // Set a render target to receive all rendering output
     * device.setRenderTarget(renderTarget);
     *
     * // Set the back buffer to receive all rendering output
     * device.setRenderTarget(null);
     */
    setRenderTarget(renderTarget) {
        this._renderTarget = renderTarget;
    }
    /**
     * Checks the completeness status of the currently bound WebGLFramebuffer object.
     *
     * @private
     */
    _checkFbo() {
        const { gl } = this._engine;
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        switch (status) {
            case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                console.error("ERROR: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                console.error("ERROR: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
                break;
            case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                console.error("ERROR: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
                break;
            case gl.FRAMEBUFFER_UNSUPPORTED:
                console.error("ERROR: FRAMEBUFFER_UNSUPPORTED");
                break;
            case gl.FRAMEBUFFER_COMPLETE:
                break;
            default:
                break;
        }
    }
    /**
     * Marks the beginning of a block of rendering. Internally, this function binds the render
     * target currently set on the device. This function should be matched with a call to
     * {@link GraphicsDevice#updateEnd}. Calls to {@link GraphicsDevice#updateBegin} and
     * {@link GraphicsDevice#updateEnd} must not be nested.
     */
    updateBegin() {
        // Set the render target
        const target = this._renderTarget;
        if (target) {
            // Create a new WebGL frame buffer object
            if (!target.glFrameBuffer) {
                this._initRenderTarget(target);
            }
            else {
                this._setFramebuffer(target.glFrameBuffer);
            }
        }
        else {
            this._setFramebuffer(null);
        }
    }
    /**
     * Marks the end of a block of rendering. This function should be called after a matching call
     * to {@link GraphicsDevice#updateBegin}. Calls to {@link GraphicsDevice#updateBegin} and
     * {@link GraphicsDevice#updateEnd} must not be nested.
     */
    updateEnd() {
        const { gl, webgl2 } = this._engine;
        // unbind VAO from device to protect it from being changed
        // if (this.boundVao) {
        //     this.boundVao = null;
        //     this.gl.bindVertexArray(null);
        // }
        // Unset the render target
        const target = this._renderTarget;
        if (target) {
            // If the active render target is auto-mipmapped, generate its mip chain
            const colorBuffer = target.colorBuffer;
            if (colorBuffer && colorBuffer.glTexture && colorBuffer.mipmaps && (colorBuffer.pot || webgl2)) {
                // FIXME: if colorBuffer is a cubemap currently we're re-generating mipmaps after
                // updating each face!
                // this.activeTexture(this.maxCombinedTextures - 1);
                // this.bindTexture(colorBuffer);
                // gl.generateMipmap(colorBuffer._glTarget);
            }
            // Resolve MSAA if needed
            // if (this.webgl2 && target._samples > 1 && target.autoResolve) {
            //     target.resolve();
            // }
        }
    }
}


/***/ }),

/***/ "./src/engines/engine.state.ts":
/*!*************************************!*\
  !*** ./src/engines/engine.state.ts ***!
  \*************************************/
/*! exports provided: EngineState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineState", function() { return EngineState; });
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");

class EngineState {
    constructor(engine) {
        this._engine = engine;
        this._depthWrite = true;
        const { gl } = this._engine;
        this._glBlendFunction = [
            gl.ZERO,
            gl.ONE,
            gl.SRC_COLOR,
            gl.ONE_MINUS_SRC_COLOR,
            gl.DST_COLOR,
            gl.ONE_MINUS_DST_COLOR,
            gl.SRC_ALPHA,
            gl.SRC_ALPHA_SATURATE,
            gl.ONE_MINUS_SRC_ALPHA,
            gl.DST_ALPHA,
            gl.ONE_MINUS_DST_ALPHA,
        ];
        this._glCull = [0, gl.BACK, gl.FRONT, gl.FRONT_AND_BACK];
        this._glBlendEquation = [gl.FUNC_ADD, gl.FUNC_SUBTRACT, gl.FUNC_REVERSE_SUBTRACT, gl.MIN, gl.MAX];
        this._glClearFlag = [
            0,
            gl.COLOR_BUFFER_BIT,
            gl.DEPTH_BUFFER_BIT,
            gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT,
            gl.STENCIL_BUFFER_BIT,
            gl.STENCIL_BUFFER_BIT | gl.COLOR_BUFFER_BIT,
            gl.STENCIL_BUFFER_BIT | gl.DEPTH_BUFFER_BIT,
            gl.STENCIL_BUFFER_BIT | gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT,
        ];
        this._defaultClearOptions = {
            color: { r: 0, g: 0, b: 0, a: 1 },
            depth: 1,
            stencil: 0,
            flags: _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_COLOR | _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_DEPTH,
        };
        this.setDepthTest(true);
        this._cullMode = _engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_NONE;
        this.setCullMode(_engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_BACK);
        // gl.enable(gl.SCISSOR_TEST);
        gl.hint(gl.FRAGMENT_SHADER_DERIVATIVE_HINT, gl.NICEST);
        gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
    }
    /**
     * Queries whether depth testing is enabled.
     *
     * @returns {boolean} True if depth testing is enabled and false otherwise.
     * @example
     * var depthTest = device.getDepthTest();
     * console.log('Depth testing is ' + depthTest ? 'enabled' : 'disabled');
     */
    getDepthTest() {
        return this._depthTest;
    }
    /**
     * Enables or disables depth testing of fragments. Once this state is set, it persists until it
     * is changed. By default, depth testing is enabled.
     *
     * @param {boolean} depthTest - True to enable depth testing and false otherwise.
     * @example
     * device.setDepthTest(true);
     */
    setDepthTest(depthTest) {
        const { gl } = this._engine;
        if (this._depthTest !== depthTest) {
            if (depthTest) {
                gl.enable(gl.DEPTH_TEST);
            }
            else {
                gl.disable(gl.DEPTH_TEST);
            }
            this._depthTest = depthTest;
        }
    }
    /**
     * Configures the depth test.
     *
     * @param {number} func - A function to compare a new depth value with an existing z-buffer
     * value and decide if to write a pixel. Can be:
     *
     * - {@link FUNC_NEVER}: don't draw
     * - {@link FUNC_LESS}: draw if new depth < depth buffer
     * - {@link FUNC_EQUAL}: draw if new depth == depth buffer
     * - {@link FUNC_LESSEQUAL}: draw if new depth <= depth buffer
     * - {@link FUNC_GREATER}: draw if new depth > depth buffer
     * - {@link FUNC_NOTEQUAL}: draw if new depth != depth buffer
     * - {@link FUNC_GREATEREQUAL}: draw if new depth >= depth buffer
     * - {@link FUNC_ALWAYS}: always draw
     */
    setDepthFunc(func) {
        const { gl, glComparison } = this._engine;
        if (this._depthFunc === func)
            return;
        gl.depthFunc(glComparison[func]);
        this._depthFunc = func;
    }
    /**
     * Queries whether writes to the depth buffer are enabled.
     *
     * @returns {boolean} True if depth writing is enabled and false otherwise.
     * @example
     * var depthWrite = device.getDepthWrite();
     * console.log('Depth writing is ' + depthWrite ? 'enabled' : 'disabled');
     */
    getDepthWrite() {
        return this._depthWrite;
    }
    /**
     * Enables or disables writes to the depth buffer. Once this state is set, it persists until it
     * is changed. By default, depth writes are enabled.
     *
     * @param {boolean} writeDepth - True to enable depth writing and false otherwise.
     * @example
     * device.setDepthWrite(true);
     */
    setDepthWrite(writeDepth) {
        const { gl } = this._engine;
        if (this._depthWrite !== writeDepth) {
            gl.depthMask(writeDepth);
            this._depthWrite = writeDepth;
        }
    }
    /**
     * Queries whether blending is enabled.
     *
     * @returns {boolean} True if blending is enabled and false otherwise.
     */
    getBlending() {
        return this._blending;
    }
    /**
     * Enables or disables blending.
     *
     * @param {boolean} blending - True to enable blending and false to disable it.
     */
    setBlending(blending) {
        const { gl } = this._engine;
        if (this._blending !== blending) {
            if (blending) {
                gl.enable(gl.BLEND);
            }
            else {
                gl.disable(gl.BLEND);
            }
            this._blending = blending;
        }
    }
    /**
     * Configures blending operations. Both source and destination blend modes can take the
     * following values:
     *
     * @param {number} blendSrc - The source blend function.
     * @param {number} blendDst - The destination blend function.
     */
    setBlendFunction(blendSrc, blendDst) {
        const { gl } = this._engine;
        if (this._blendSrc !== blendSrc || this._blendDst !== blendDst || this._separateAlphaBlend) {
            gl.blendFunc(this._glBlendFunction[blendSrc], this._glBlendFunction[blendDst]);
            this._blendSrc = blendSrc;
            this._blendDst = blendDst;
            this._separateAlphaBlend = false;
        }
    }
    /**
     * Configures blending operations. Both source and destination blend modes can take the
     * following values:
     *
     * - {@link BLENDMODE_ZERO}
     * - {@link BLENDMODE_ONE}
     * - {@link BLENDMODE_SRC_COLOR}
     * - {@link BLENDMODE_ONE_MINUS_SRC_COLOR}
     * - {@link BLENDMODE_DST_COLOR}
     * - {@link BLENDMODE_ONE_MINUS_DST_COLOR}
     * - {@link BLENDMODE_SRC_ALPHA}
     * - {@link BLENDMODE_SRC_ALPHA_SATURATE}
     * - {@link BLENDMODE_ONE_MINUS_SRC_ALPHA}
     * - {@link BLENDMODE_DST_ALPHA}
     * - {@link BLENDMODE_ONE_MINUS_DST_ALPHA}
     *
     * @param {number} blendSrc - The source blend function.
     * @param {number} blendDst - The destination blend function.
     * @param {number} blendSrcAlpha - The separate source blend function for the alpha channel.
     * @param {number} blendDstAlpha - The separate destination blend function for the alpha channel.
     */
    setBlendFunctionSeparate(blendSrc, blendDst, blendSrcAlpha, blendDstAlpha) {
        const { gl } = this._engine;
        if (this._blendSrc !== blendSrc || this._blendDst !== blendDst || this._blendSrcAlpha !== blendSrcAlpha || this._blendDstAlpha !== blendDstAlpha || !this._separateAlphaBlend) {
            gl.blendFuncSeparate(this._glBlendFunction[blendSrc], this._glBlendFunction[blendDst], this._glBlendFunction[blendSrcAlpha], this._glBlendFunction[blendDstAlpha]);
            this._blendSrc = blendSrc;
            this._blendDst = blendDst;
            this._blendSrcAlpha = blendSrcAlpha;
            this._blendDstAlpha = blendDstAlpha;
            this._separateAlphaBlend = true;
        }
    }
    /**
     * Configures the blending equation. The default blend equation is {@link BLENDEQUATION_ADD}.
     *
     * @param {number} blendEquation - The blend equation. Can be:
     *
     * - {@link BLENDEQUATION_ADD}
     * - {@link BLENDEQUATION_SUBTRACT}
     * - {@link BLENDEQUATION_REVERSE_SUBTRACT}
     * - {@link BLENDEQUATION_MIN}
     * - {@link BLENDEQUATION_MAX}
     *
     * Note that MIN and MAX modes require either EXT_blend_minmax or WebGL2 to work (check
     * device.extBlendMinmax).
     * @param {number} blendAlphaEquation - A separate blend equation for the alpha channel.
     * Accepts same values as `blendEquation`.
     */
    setBlendEquationSeparate(blendEquation, blendAlphaEquation) {
        const { gl } = this._engine;
        if (this._blendEquation !== blendEquation || this._blendAlphaEquation !== blendAlphaEquation || !this._separateAlphaEquation) {
            gl.blendEquationSeparate(this._glBlendEquation[blendEquation], this._glBlendEquation[blendAlphaEquation]);
            this._blendEquation = blendEquation;
            this._blendAlphaEquation = blendAlphaEquation;
            this._separateAlphaEquation = true;
        }
    }
    /**
     * Configures the blending equation. The default blend equation is {@link BLENDEQUATION_ADD}.
     *
     * @param {number} blendEquation - The blend equation. Can be:
     *
     * - {@link BLENDEQUATION_ADD}
     * - {@link BLENDEQUATION_SUBTRACT}
     * - {@link BLENDEQUATION_REVERSE_SUBTRACT}
     * - {@link BLENDEQUATION_MIN}
     * - {@link BLENDEQUATION_MAX}
     *
     * Note that MIN and MAX modes require either EXT_blend_minmax or WebGL2 to work (check
     * device.extBlendMinmax).
     */
    setBlendEquation(blendEquation) {
        const { gl } = this._engine;
        if (this._blendEquation !== blendEquation || this._separateAlphaEquation) {
            gl.blendEquation(this._glBlendEquation[blendEquation]);
            this._blendEquation = blendEquation;
            this._separateAlphaEquation = false;
        }
    }
    /**
     * Controls how triangles are culled based on their face direction. The default cull mode is
     * {@link CULLFACE_BACK}.
     *
     * @param {number} cullMode - The cull mode to set. Can be:
     *
     * - {@link CULLFACE_NONE}
     * - {@link CULLFACE_BACK}
     * - {@link CULLFACE_FRONT}
     * - {@link CULLFACE_FRONTANDBACK}
     */
    setCullMode(cullMode) {
        const { gl } = this._engine;
        if (this._cullMode !== cullMode) {
            if (cullMode === _engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_NONE) {
                gl.disable(gl.CULL_FACE);
            }
            else {
                if (this._cullMode === _engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_NONE) {
                    gl.enable(gl.CULL_FACE);
                }
                const mode = this._glCull[cullMode];
                if (this._cullFace !== mode) {
                    gl.cullFace(mode);
                    this._cullFace = mode;
                }
            }
            this._cullMode = cullMode;
        }
    }
    /**
     * Gets the current cull mode.
     *
     * @returns {number} The current cull mode.
     * @ignore
     */
    getCullMode() {
        return this._cullMode;
    }
    /**
     * Set the stencil clear value used when the stencil buffer is cleared.
     *
     * @param {number} value - The stencil value to clear the stencil buffer to.
     */
    setClearStencil(value) {
        const { gl } = this._engine;
        if (value !== this._clearStencil) {
            gl.clearStencil(value);
            this._clearStencil = value;
        }
    }
    /**
     * Set the depth value used when the depth buffer is cleared.
     *
     * @param {number} depth - The depth value to clear the depth buffer to in the range 0.0
     * to 1.0.
     * @ignore
     */
    setClearDepth(depth) {
        const { gl } = this._engine;
        if (depth !== this._clearDepth) {
            gl.clearDepth(depth);
            this._clearDepth = depth;
        }
    }
    /**
     * Set the clear color used when the frame buffer is cleared.
     *
     * @param {number} r - The red component of the color in the range 0.0 to 1.0.
     * @param {number} g - The green component of the color in the range 0.0 to 1.0.
     * @param {number} b - The blue component of the color in the range 0.0 to 1.0.
     * @param {number} a - The alpha component of the color in the range 0.0 to 1.0.
     * @ignore
     */
    setClearColor(r, g, b, a) {
        const { gl } = this._engine;
        if (r !== this._clearRed || g !== this._clearGreen || b !== this._clearBlue || a !== this._clearAlpha) {
            gl.clearColor(r, g, b, a);
            this._clearRed = r;
            this._clearGreen = g;
            this._clearBlue = b;
            this._clearAlpha = a;
        }
    }
    /**
     * Clears the frame buffer of the currently set render target.
     *
     * @param {object} [options] - Optional options object that controls the behavior of the clear
     * operation defined as follows:
     * @param {number[]} [options.color] - The color to clear the color buffer to in the range 0.0
     * to 1.0 for each component.
     * @param {number} [options.depth=1] - The depth value to clear the depth buffer to in the
     * range 0.0 to 1.0.
     * @param {number} [options.flags] - The buffers to clear (the types being color, depth and
     * stencil). Can be any bitwise combination of:
     *
     * - {@link CLEARFLAG_COLOR}
     * - {@link CLEARFLAG_DEPTH}
     * - {@link CLEARFLAG_STENCIL}
     *
     * @param {number} [options.stencil=0] - The stencil value to clear the stencil buffer to. Defaults to 0.
     * @example
     * // Clear color buffer to black and depth buffer to 1.0
     * device.clear();
     *
     * // Clear just the color buffer to red
     * device.clear({
     *     color: [1, 0, 0, 1],
     *     flags: pc.CLEARFLAG_COLOR
     * });
     *
     * // Clear color buffer to yellow and depth to 1.0
     * device.clear({
     *     color: [1, 1, 0, 1],
     *     depth: 1,
     *     flags: pc.CLEARFLAG_COLOR | pc.CLEARFLAG_DEPTH
     * });
     */
    clear(options) {
        const { gl } = this._engine;
        const defaultOptions = this._defaultClearOptions;
        options = options || defaultOptions;
        const flags = options.flags == undefined ? defaultOptions.flags : options.flags;
        if (flags) {
            // const gl = this.gl;
            // Set the clear color
            if (flags & _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_COLOR) {
                const color = options.color == undefined ? defaultOptions.color : options.color;
                color && this.setClearColor(color.r, color.g, color.b, color.a);
            }
            if (flags & _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_DEPTH) {
                // Set the clear depth
                const depth = options.depth == undefined ? defaultOptions.depth : options.depth;
                depth && this.setClearDepth(depth);
                if (!this._depthWrite) {
                    gl.depthMask(true);
                }
            }
            if (flags & _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_STENCIL) {
                // Set the clear stencil
                const stencil = options.stencil == undefined ? defaultOptions.stencil : options.stencil;
                stencil && this.setClearStencil(stencil);
            }
            // Clear the frame buffer
            gl.clear(this._glClearFlag[flags]);
            if (flags & _engine_enum__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"].CLEARFLAG_DEPTH) {
                if (!this._depthWrite) {
                    gl.depthMask(false);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/engines/engine.texture.ts":
/*!***************************************!*\
  !*** ./src/engines/engine.texture.ts ***!
  \***************************************/
/*! exports provided: EngineTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineTexture", function() { return EngineTexture; });
/* harmony import */ var _misc_domManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/domManagement */ "./src/misc/domManagement.ts");
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");


class EngineTexture {
    constructor(engine) {
        this._engine = engine;
        this.textureUnit = -1;
        this.textureUnits = [];
        this.targetToSlot = {};
        const { gl } = this._engine;
        this.targetToSlot[gl.TEXTURE_2D] = 0;
        this.targetToSlot[gl.TEXTURE_CUBE_MAP] = 1;
        this.targetToSlot[gl.TEXTURE_3D] = 2;
        this.glFilter = [gl.NEAREST, gl.LINEAR, gl.NEAREST_MIPMAP_NEAREST, gl.NEAREST_MIPMAP_LINEAR, gl.LINEAR_MIPMAP_NEAREST, gl.LINEAR_MIPMAP_LINEAR];
        this.glAddress = [gl.REPEAT, gl.CLAMP_TO_EDGE, gl.MIRRORED_REPEAT];
    }
    /**
     * Allocate WebGL resources for a texture and add it to the array of textures managed by this
     * device.
     *
     * @param {Texture} texture - The texture to allocate WebGL resources for.
     * @ignore
     */
    initializeTexture(texture) {
        const { gl, webgl2 } = this._engine;
        texture.glTexture = gl.createTexture();
        texture.glTarget = texture.cubemap ? gl.TEXTURE_CUBE_MAP : texture.volume ? gl.TEXTURE_3D : gl.TEXTURE_2D;
        switch (texture.format) {
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_A8:
                texture.glFormat = gl.ALPHA;
                texture.glInternalFormat = gl.ALPHA;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_L8:
                texture.glFormat = gl.LUMINANCE;
                texture.glInternalFormat = gl.LUMINANCE;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_L8_A8:
                texture.glFormat = gl.LUMINANCE_ALPHA;
                texture.glInternalFormat = gl.LUMINANCE_ALPHA;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R5_G6_B5:
                texture.glFormat = gl.RGB;
                texture.glInternalFormat = gl.RGB;
                texture.glPixelType = gl.UNSIGNED_SHORT_5_6_5;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R5_G5_B5_A1:
                texture.glFormat = gl.RGBA;
                texture.glInternalFormat = gl.RGBA;
                texture.glPixelType = gl.UNSIGNED_SHORT_5_5_5_1;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R4_G4_B4_A4:
                texture.glFormat = gl.RGBA;
                texture.glInternalFormat = gl.RGBA;
                texture.glPixelType = gl.UNSIGNED_SHORT_4_4_4_4;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R8_G8_B8:
                texture.glFormat = gl.RGB;
                texture.glInternalFormat = webgl2 ? gl.RGB8 : gl.RGB;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R8_G8_B8_A8:
                texture.glFormat = gl.RGBA;
                texture.glInternalFormat = webgl2 ? gl.RGBA8 : gl.RGBA;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGB32F:
                // definition varies between WebGL1 and 2
                texture.glFormat = gl.RGB;
                if (webgl2) {
                    texture.glInternalFormat = gl.RGB32F;
                }
                else {
                    texture.glInternalFormat = gl.RGB;
                }
                texture.glPixelType = gl.FLOAT;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGBA32F:
                // definition varies between WebGL1 and 2
                texture.glFormat = gl.RGBA;
                if (webgl2) {
                    texture.glInternalFormat = gl.RGBA32F;
                }
                else {
                    texture.glInternalFormat = gl.RGBA;
                }
                texture.glPixelType = gl.FLOAT;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R32F: // WebGL2 only
                texture.glFormat = gl.RED;
                texture.glInternalFormat = gl.R32F;
                texture.glPixelType = gl.FLOAT;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R16F:
                texture.glFormat = gl.RED;
                texture.glInternalFormat = gl.R16F;
                texture.glPixelType = gl.HALF_FLOAT;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_DEPTH:
                if (webgl2) {
                    // native WebGL2
                    texture.glFormat = gl.DEPTH_COMPONENT;
                    texture.glInternalFormat = gl.DEPTH_COMPONENT32F; // should allow 16/24 bits?
                    texture.glPixelType = gl.FLOAT;
                }
                else {
                    // using WebGL1 extension
                    texture.glFormat = gl.DEPTH_COMPONENT;
                    texture.glInternalFormat = gl.DEPTH_COMPONENT;
                    texture.glPixelType = gl.UNSIGNED_SHORT; // the only acceptable value?
                }
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_DEPTHSTENCIL: // WebGL2 only
                texture.glFormat = gl.DEPTH_STENCIL;
                texture.glInternalFormat = gl.DEPTH24_STENCIL8;
                texture.glPixelType = gl.UNSIGNED_INT_24_8;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_111110F: // WebGL2 only
                texture.glFormat = gl.RGB;
                texture.glInternalFormat = gl.R11F_G11F_B10F;
                texture.glPixelType = gl.UNSIGNED_INT_10F_11F_11F_REV;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_SRGB: // WebGL2 only
                texture.glFormat = gl.RGB;
                texture.glInternalFormat = gl.SRGB8;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_SRGBA: // WebGL2 only
                texture.glFormat = gl.RGBA;
                texture.glInternalFormat = gl.SRGB8_ALPHA8;
                texture.glPixelType = gl.UNSIGNED_BYTE;
                break;
        }
    }
    /**
     * Activate the specified texture unit.
     *
     * @param {number} textureUnit - The texture unit to activate.
     * @ignore
     */
    activeTexture(textureUnit) {
        const { gl } = this._engine;
        gl.activeTexture(gl.TEXTURE0 + textureUnit);
        if (this.textureUnit !== textureUnit) {
            this.textureUnit = textureUnit;
        }
    }
    /**
     * If the texture is not already bound on the currently active texture unit, bind it.
     *
     * @param {Texture} texture - The texture to bind.
     * @ignore
     */
    bindTexture(texture) {
        const { gl } = this._engine;
        const textureTarget = texture.glTarget;
        const textureObject = texture.glTexture;
        const textureUnit = this.textureUnit;
        // const slot = this.targetToSlot[textureTarget];
        // if (this.textureUnits[textureUnit][slot] !== textureObject) {
        //     gl.bindTexture(textureTarget, textureObject);
        //     this.textureUnits[textureUnit][slot] = textureObject;
        // }
        gl.bindTexture(textureTarget, textureObject);
    }
    unbindTexture(textureTarget) {
        const { gl } = this._engine;
        gl.bindTexture(textureTarget, null);
    }
    /**
     * Update the texture parameters for a given texture if they have changed.
     *
     * @param {Texture} texture - The texture to update.
     * @ignore
     */
    setTextureParameters(texture) {
        const { gl, webgl2, glComparison } = this._engine;
        const flags = texture.parameterFlags;
        const target = texture.glTarget;
        if (flags & 1) {
            let filter = texture.minFilter;
            gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, this.glFilter[filter]);
        }
        if (flags & 2) {
            gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, this.glFilter[texture.magFilter]);
        }
        if (flags & 4) {
            if (webgl2) {
                gl.texParameteri(target, gl.TEXTURE_WRAP_S, this.glAddress[texture.addressU]);
            }
            else {
                // WebGL1 doesn't support all addressing modes with NPOT textures
                gl.texParameteri(target, gl.TEXTURE_WRAP_S, this.glAddress[texture.pot ? texture.addressU : _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE]);
            }
        }
        if (flags & 8) {
            if (webgl2) {
                gl.texParameteri(target, gl.TEXTURE_WRAP_T, this.glAddress[texture.addressV]);
            }
            else {
                // WebGL1 doesn't support all addressing modes with NPOT textures
                gl.texParameteri(target, gl.TEXTURE_WRAP_T, this.glAddress[texture.pot ? texture.addressV : _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE]);
            }
        }
        if (flags & 16) {
            if (webgl2) {
                gl.texParameteri(target, gl.TEXTURE_WRAP_R, this.glAddress[texture.addressW]);
            }
        }
        if (flags & 32) {
            if (webgl2) {
                gl.texParameteri(target, gl.TEXTURE_COMPARE_MODE, texture.compareOnRead ? gl.COMPARE_REF_TO_TEXTURE : gl.NONE);
            }
        }
        if (flags & 64) {
            if (webgl2) {
                gl.texParameteri(target, gl.TEXTURE_COMPARE_FUNC, glComparison[texture.compareFunc]);
            }
        }
        if (flags & 128) {
            const ext = this._engine.extensions.extTextureFilterAnisotropic;
            if (ext) {
                gl.texParameterf(target, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.max(1, Math.min(Math.round(texture.anisotropy), this._engine.capabilities.maxAnisotropy)));
            }
        }
    }
    /**
     * Sets the specified texture on the specified texture unit.
     *
     * @param {Texture} texture - The texture to set.
     * @param {number} textureUnit - The texture unit to set the texture on.
     * @ignore
     */
    setTexture(texture, textureUnit) {
        if (!texture.glTexture)
            this.initializeTexture(texture);
        if (texture.needsUpload) {
            // Ensure the specified texture unit is active
            this.activeTexture(textureUnit);
            // Ensure the texture is bound on correct target of the specified texture unit
            this.bindTexture(texture);
            if (texture.parameterFlags) {
                this.setTextureParameters(texture);
                texture.parameterFlags = 0;
            }
            this.uploadTexture(texture);
            texture.needsUpload = false;
        }
        else {
            // Ensure the texture is currently bound to the correct target on the specified texture unit.
            // If the texture is already bound to the correct target on the specified unit, there's no need
            // to actually make the specified texture unit active because the texture itself does not need
            // to be updated.
            this.bindTextureOnUnit(texture, textureUnit);
        }
    }
    /**
     * Updates a texture's vertical flip.
     *
     * @param {boolean} flipY - True to flip the texture vertically.
     * @ignore
     */
    setUnpackFlipY(flipY) {
        const { gl } = this._engine;
        if (this.unpackFlipY !== flipY) {
            this.unpackFlipY = flipY;
            // Note: the WebGL spec states that UNPACK_FLIP_Y_WEBGL only affects
            // texImage2D and texSubImage2D, not compressedTexImage2D
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
        }
    }
    /**
     * Updates a texture to have its RGB channels premultiplied by its alpha channel or not.
     *
     * @param {boolean} premultiplyAlpha - True to premultiply the alpha channel against the RGB
     * channels.
     * @ignore
     */
    setUnpackPremultiplyAlpha(premultiplyAlpha) {
        const { gl } = this._engine;
        if (this.unpackPremultiplyAlpha !== premultiplyAlpha) {
            this.unpackPremultiplyAlpha = premultiplyAlpha;
            // Note: the WebGL spec states that UNPACK_PREMULTIPLY_ALPHA_WEBGL only affects
            // texImage2D and texSubImage2D, not compressedTexImage2D
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, premultiplyAlpha);
        }
    }
    _uploadTexture2d(texture) {
        const { gl } = this._engine;
        let mipLevel = 0;
        if (Object(_misc_domManagement__WEBPACK_IMPORTED_MODULE_0__["isBrowserInterface"])(texture.source)) {
            // Upload the image, canvas or video
            this.setUnpackFlipY(texture.flipY);
            this.setUnpackPremultiplyAlpha(texture.premultiplyAlpha);
            gl.texImage2D(gl.TEXTURE_2D, mipLevel, texture.glInternalFormat, texture.glFormat, texture.glPixelType, texture.source);
            gl.generateMipmap(texture.glTarget);
        }
        else {
            this.setUnpackFlipY(false);
            this.setUnpackPremultiplyAlpha(texture.premultiplyAlpha);
            // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, texture.width, texture.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.texImage2D(gl.TEXTURE_2D, mipLevel, texture.glInternalFormat, texture.width, texture.height, 0, texture.glFormat, texture.glPixelType, texture.source);
        }
    }
    _uploadTextureCube(texture) {
        const { gl, webgl2 } = this._engine;
        // Upload the byte array
        const mipLevel = 0;
        for (let face = 0; face < 6; face++) {
            const texImage = texture.source[face];
            this.setUnpackFlipY(false);
            this.setUnpackPremultiplyAlpha(texture.premultiplyAlpha);
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, mipLevel, texture.glInternalFormat, texture.glFormat, texture.glPixelType, texImage);
        }
    }
    uploadTexture(texture) {
        if (!texture.needsUpload && ((texture.needsMipmapsUpload && texture.mipmapsUploaded) || !texture.pot))
            return;
        if (texture.cubemap) {
            this._uploadTextureCube(texture);
        }
        else {
            this._uploadTexture2d(texture);
        }
        const { gl, webgl2 } = this._engine;
        if (texture.mipmaps && texture.needsMipmapsUpload && (texture.pot || webgl2)) {
            gl.generateMipmap(texture.glTarget);
            // texture.mipmapsUploaded = true;
        }
    }
    /**
     * If the texture is not bound on the specified texture unit, active the texture unit and bind
     * the texture to it.
     *
     * @param {Texture} texture - The texture to bind.
     * @param {number} textureUnit - The texture unit to activate and bind the texture to.
     * @ignore
     */
    bindTextureOnUnit(texture, textureUnit) {
        const { gl } = this._engine;
        const textureTarget = texture.glTarget;
        const textureObject = texture.glTexture;
        this.activeTexture(textureUnit);
        gl.bindTexture(textureTarget, textureObject);
    }
}


/***/ }),

/***/ "./src/engines/engine.ts":
/*!*******************************!*\
  !*** ./src/engines/engine.ts ***!
  \*******************************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var _engine_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.draw */ "./src/engines/engine.draw.ts");
/* harmony import */ var _engine_programs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.programs */ "./src/engines/engine.programs.ts");
/* harmony import */ var _engine_renderTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine.renderTarget */ "./src/engines/engine.renderTarget.ts");
/* harmony import */ var _engine_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine.state */ "./src/engines/engine.state.ts");
/* harmony import */ var _engine_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine.texture */ "./src/engines/engine.texture.ts");
/* harmony import */ var _engine_uniformBuffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine.uniformBuffer */ "./src/engines/engine.uniformBuffer.ts");
/* harmony import */ var _engine_uniforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine.uniforms */ "./src/engines/engine.uniforms.ts");
/* harmony import */ var _engine_vertex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine.vertex */ "./src/engines/engine.vertex.ts");
/* harmony import */ var _engine_viewPort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine.viewPort */ "./src/engines/engine.viewPort.ts");









class Engine {
    constructor(canvas) {
        this._contextWasLost = false;
        this.webgl2 = true;
        if (!canvas)
            return;
        this.extensions = {};
        this.renderingCanvas = canvas;
        try {
            this.gl = canvas.getContext("webgl2", {
                antialias: true,
                alpha: true
            });
        }
        catch (err) {
            throw new Error("仅支持 webgl2.0");
        }
        this._initializeExtensions();
        this._initializeCapabilities();
        const gl = this.gl;
        this.glComparison = [gl.NEVER, gl.LESS, gl.EQUAL, gl.LEQUAL, gl.GREATER, gl.NOTEQUAL, gl.GEQUAL, gl.ALWAYS];
        this.engineDraw = new _engine_draw__WEBPACK_IMPORTED_MODULE_0__["EngineDraw"](this);
        this.engineViewPort = new _engine_viewPort__WEBPACK_IMPORTED_MODULE_8__["EngineViewPort"](this);
        this.enginePrograms = new _engine_programs__WEBPACK_IMPORTED_MODULE_1__["EngineProgram"](this);
        this.engineUniform = new _engine_uniforms__WEBPACK_IMPORTED_MODULE_6__["EngineUniform"](this);
        this.engineVertex = new _engine_vertex__WEBPACK_IMPORTED_MODULE_7__["EngineVertex"](this);
        this.engineTexture = new _engine_texture__WEBPACK_IMPORTED_MODULE_4__["EngineTexture"](this);
        this.engineUniformBuffer = new _engine_uniformBuffer__WEBPACK_IMPORTED_MODULE_5__["EngineUniformBuffer"](this);
        this.engineRenderTarget = new _engine_renderTarget__WEBPACK_IMPORTED_MODULE_2__["EngineRenderTarget"](this);
        this.engineState = new _engine_state__WEBPACK_IMPORTED_MODULE_3__["EngineState"](this);
    }
    _initializeCapabilities() {
        const gl = this.gl;
        const contextAttribs = gl.getContextAttributes();
        this.capabilities = {
            supportsMsaa: contextAttribs === null || contextAttribs === void 0 ? void 0 : contextAttribs.antialias,
            supportsStencil: contextAttribs.stencil,
            maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
            maxCubeMapSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
            maxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
            maxTextures: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
            maxCombinedTextures: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxVertexTextures: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            vertexUniformsCount: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
            fragmentUniformsCount: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
            maxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),
            maxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),
            maxVolumeSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),
            maxSamples: gl.getParameter(gl.SAMPLES),
            supportsAreaLights: true,
        };
        let ext = this.extensions.extDebugRendererInfo;
        this.capabilities.unmaskedRenderer = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
        this.capabilities.unmaskedVendor = ext ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) : "";
        ext = this.extensions.extTextureFilterAnisotropic;
        this.capabilities.maxAnisotropy = ext ? gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;
        //  this.capabilities.samples = gl.getParameter(gl.SAMPLES);
        this.capabilities.maxSamples = this.webgl2 ? gl.getParameter(gl.MAX_SAMPLES) : 1;
    }
    _initializeExtensions() {
        const gl = this.gl;
        const supportedExtensions = gl.getSupportedExtensions();
        const getExtension = function (list) {
            for (let i = 0; i < list.length; i++) {
                if (supportedExtensions.indexOf(list[i]) !== -1) {
                    return gl.getExtension(list[i]);
                }
            }
            return null;
        };
        this.extensions = {
            extBlendMinmax: true,
            extDrawBuffers: true,
            extInstancing: true,
            extStandardDerivatives: true,
            extTextureFloat: true,
            extTextureHalfFloat: true,
            extTextureLod: true,
            extUintElement: true,
            extVertexArrayObject: true,
            extColorBufferFloat: getExtension(["EXT_color_buffer_float"]),
            // Note that Firefox exposes EXT_disjoint_timer_query under WebGL2 rather than
            // EXT_disjoint_timer_query_webgl2
            extDisjointTimerQuery: getExtension(["EXT_disjoint_timer_query_webgl2", "EXT_disjoint_timer_query"]),
            // RENDERER
            extDebugRendererInfo: getExtension(["WEBGL_debug_renderer_info"]),
            extTextureFloatLinear: getExtension(["OES_texture_float_linear"]),
            extTextureHalfFloatLinear: getExtension(["OES_texture_half_float_linear"]),
            extFloatBlend: getExtension(["EXT_float_blend"]),
            extTextureFilterAnisotropic: getExtension(["EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic"]),
            extCompressedTextureETC1: getExtension(["WEBGL_compressed_texture_etc1"]),
            extCompressedTextureETC: getExtension(["WEBGL_compressed_texture_etc"]),
            extCompressedTexturePVRTC: getExtension(["WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc"]),
            extCompressedTextureS3TC: getExtension(["WEBGL_compressed_texture_s3tc", "WEBKIT_WEBGL_compressed_texture_s3tc"]),
            extCompressedTextureATC: getExtension(["WEBGL_compressed_texture_atc"]),
            extCompressedTextureASTC: getExtension(["WEBGL_compressed_texture_astc"]),
            extParallelShaderCompile: getExtension(["KHR_parallel_shader_compile"]),
            // iOS exposes for half precision render targets on both Webgl1 and 2 from iOS v 14.5beta
            extColorBufferHalfFloat: getExtension(["EXT_color_buffer_half_float"]),
            supportsInstancing: true
        };
    }
}


/***/ }),

/***/ "./src/engines/engine.uniformBuffer.ts":
/*!*********************************************!*\
  !*** ./src/engines/engine.uniformBuffer.ts ***!
  \*********************************************/
/*! exports provided: EngineUniformBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineUniformBuffer", function() { return EngineUniformBuffer; });
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");

class EngineUniformBuffer {
    constructor(engine) {
        this._engine = engine;
    }
    _getUniformBlockCatch(uniformBlock, name) {
        const { gl } = this._engine;
        if (!uniformBlock.blockCatch.has(name)) {
            const ubb = uniformBlock.blockIndex;
            const ubo = gl.createBuffer();
            uniformBlock.blockCatch.set(name, {
                ubb,
                ubo,
            });
            uniformBlock.blockIndex += 1;
        }
        return uniformBlock.blockCatch.get(name);
    }
    _getBufferData(keys, content) {
        let len = 0;
        let offset = [0];
        for (let i = 0; i < keys.length; i++) {
            const propName = keys[i];
            const { type } = content[propName];
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Float) {
                len += 4;
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec2) {
                len += 4;
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec3) {
                len += 4;
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec4) {
                len += 4;
            }
            offset.push(len);
        }
        const result = new Float32Array(len);
        for (let i = 0; i < keys.length; i++) {
            const propName = keys[i];
            const { value, type } = content[propName];
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Float) {
                result.set([0, 0, 0, value.x], offset[i]);
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec2) {
                result.set([0, 0, value.x, value.y], offset[i]);
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec3) {
                result.set([0, value.x, value.y, value.z], offset[i]);
            }
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec4) {
                result.set([value.x, value.y, value.z, value.w], offset[i]);
            }
        }
        return result;
    }
    handleUniformBlock(program, blockName, content, uniformBlock) {
        const { gl } = this._engine;
        const ubi = gl.getUniformBlockIndex(program, blockName);
        const { ubb, ubo } = this._getUniformBlockCatch(uniformBlock, blockName);
        gl.uniformBlockBinding(program, ubi, ubb);
        gl.bindBuffer(gl.UNIFORM_BUFFER, ubo);
        const keys = Object.keys(content);
        const result = this._getBufferData(keys, content);
        gl.bufferData(gl.UNIFORM_BUFFER, result, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        gl.bindBufferBase(gl.UNIFORM_BUFFER, ubb, ubo);
    }
}


/***/ }),

/***/ "./src/engines/engine.uniforms.ts":
/*!****************************************!*\
  !*** ./src/engines/engine.uniforms.ts ***!
  \****************************************/
/*! exports provided: EngineUniform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineUniform", function() { return EngineUniform; });
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths */ "./src/maths/index.ts");
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");
// import { bindCubeTexture, bindTexture, activeTexture } from "./texture.js";


class EngineUniform {
    constructor(engine) {
        this._innerUniformName = ["projectionMatrix", "modelViewMatrix", "world", "normalMatrix", "modelMatrix", "vEyePosition", "viewMatrix", "inverseViewTransform"];
        this._engine = engine;
    }
    getUniformLocation(program, name) {
        const { gl } = this._engine;
        return gl.getUniformLocation(program, name);
    }
    setUniform(program, name, value, type, textureId) {
        const { gl } = this._engine;
        if (value == null) {
            return;
        }
        // const subName = `${name}_${meshName}`
        // 变量地址
        const addr = gl.getUniformLocation(program, name);
        if (addr == null && !this._innerUniformName.includes(name)) {
            // console.warn("fail", name)
            return;
        }
        switch (type) {
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Float:
                gl.uniform1f(addr, value);
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec2:
                gl.uniform2f(addr, value.x, value.y);
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec3:
                gl.uniform3f(addr, value.x, value.y, value.z);
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec4:
                gl.uniform4f(addr, value.x, value.y, value.z, value.w);
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Mat3:
                gl.uniformMatrix3fv(addr, false, new Float32Array(value));
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Mat4:
                gl.uniformMatrix4fv(addr, false, new Float32Array(value));
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Texture:
                if (textureId === undefined)
                    textureId = 0;
                this._engine.engineTexture.setTexture(value, textureId);
                gl.uniform1i(addr, textureId);
                break;
            default:
                console.error("error", type, name);
                break;
        }
    }
    // 数组
    handleUniformArray(program, name, content) {
        const array = content;
        for (let i = 0; i < array.length; i++) {
            let baseName = `${name}[${i}]`;
            const item = array[i];
            if (item.type == _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Struct) {
                const keys = Object.keys(item.value);
                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    const properties = item.value[key];
                    const { value, type } = properties;
                    const addrName = baseName + `.${key}`;
                    this.setUniform(program, addrName, value, type);
                }
            }
            else {
                this.setUniform(program, baseName, item.value, item.type);
            }
        }
    }
    setSystemUniform(program, camera) {
        let _vector3 = new _maths__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
        _vector3 = _vector3.setFromMatrixPosition(camera.matrixWorld);
        this._engine.engineUniform.setUniform(program, "vEyePosition", _vector3, _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec3);
        this._engine.engineUniform.setUniform(program, "viewMatrix", camera.matrixWorldInverse.data, _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Mat4);
        let _tempMat3 = new _maths__WEBPACK_IMPORTED_MODULE_0__["Mat3"]();
        _tempMat3.setFromMatrix4(camera.matrixWorldInverse).invert();
        this._engine.engineUniform.setUniform(program, "inverseViewTransform", _tempMat3.data, _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Mat3);
    }
    handleUniform(program, obj, uniformBlock) {
        // const { program } = this;
        let textureId = 0;
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const name = keys[i];
            const { value, type } = obj[name];
            if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Array) {
                this._engine.engineUniform.handleUniformArray(program, name, value);
            }
            else if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Struct) {
                this._engine.engineUniformBuffer.handleUniformBlock(program, name, value, uniformBlock);
            }
            else if (type == _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Texture) {
                const texture = value;
                if (texture) {
                    this._engine.engineUniform.setUniform(program, name, value, type, textureId);
                    textureId += 1;
                }
            }
            else {
                this._engine.engineUniform.setUniform(program, name, value, type, textureId);
            }
        }
    }
}


/***/ }),

/***/ "./src/engines/engine.vertex.ts":
/*!**************************************!*\
  !*** ./src/engines/engine.vertex.ts ***!
  \**************************************/
/*! exports provided: typedArrayTypes, typedArrayTypesByteSize, typedArrayIndexFormats, typedArrayIndexFormatsByteSize, typedArrayToType, EngineVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayTypes", function() { return typedArrayTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayTypesByteSize", function() { return typedArrayTypesByteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayIndexFormats", function() { return typedArrayIndexFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayIndexFormatsByteSize", function() { return typedArrayIndexFormatsByteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typedArrayToType", function() { return typedArrayToType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineVertex", function() { return EngineVertex; });
/* harmony import */ var _misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/logger */ "./src/misc/logger.ts");
/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");


// map of engine TYPE_*** enums to their corresponding typed array constructors and byte sizes
const typedArrayTypes = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
const typedArrayTypesByteSize = [1, 1, 2, 2, 4, 4, 4];
// map of engine INDEXFORMAT_*** to their corresponding typed array constructors and byte sizes
const typedArrayIndexFormats = [Uint8Array, Uint16Array, Uint32Array];
const typedArrayIndexFormatsByteSize = [1, 2, 4];
// map of typed array to engine TYPE_***
const typedArrayToType = {
    Int8Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_INT8,
    Uint8Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_UINT8,
    Int16Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_INT16,
    Uint16Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_UINT16,
    Int32Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_INT32,
    Uint32Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_UINT32,
    Float32Array: _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_FLOAT32,
};
class EngineVertex {
    constructor(engine) {
        this._engine = engine;
        const { gl } = engine;
        this._glBufferType = [gl.ARRAY_BUFFER, gl.ELEMENT_ARRAY_BUFFER];
        this._glType = [gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.INT, gl.UNSIGNED_INT, gl.FLOAT];
    }
    _unbindVertexArrayObject() {
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
    bindVertexArray(vao) {
        const { gl } = this._engine;
        gl.bindVertexArray(vao);
    }
    deleteVertexArray(vao) {
        const { gl } = this._engine;
        gl.deleteVertexArray(vao);
    }
    createBuffer() {
        const { gl } = this._engine;
        return gl.createBuffer();
    }
    setBufferData(target, data, buffer, usage, dataType) {
        const { gl, webgl2 } = this._engine;
        // 绑定缓冲区
        gl.bindBuffer(this._glBufferType[target], buffer);
        let glUsage;
        switch (usage) {
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_GPUDYNAMIC:
                if (webgl2) {
                    glUsage = gl.DYNAMIC_COPY;
                }
                else {
                    glUsage = gl.STATIC_DRAW;
                }
                break;
        }
        let typeArray;
        if (target === _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].ARRAY_BUFFER) {
            typeArray = typedArrayTypes;
        }
        else if (target === _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].ELEMENT_ARRAY_BUFFER) {
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
    initAttributeMat4(buffer, usage, length) {
        const { gl, webgl2 } = this._engine;
        // 绑定缓冲区
        gl.bindBuffer(this._glBufferType[_engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].ARRAY_BUFFER], buffer);
        let glUsage;
        switch (usage) {
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_STATIC:
                glUsage = gl.STATIC_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_DYNAMIC:
                glUsage = gl.DYNAMIC_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_STREAM:
                glUsage = gl.STREAM_DRAW;
                break;
            case _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"].BUFFER_GPUDYNAMIC:
                if (webgl2) {
                    glUsage = gl.DYNAMIC_COPY;
                }
                else {
                    glUsage = gl.STATIC_DRAW;
                }
                break;
        }
        // 缓冲区指定数据
        gl.bufferData(this._glBufferType[_engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].ARRAY_BUFFER], length, glUsage);
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
    setAttributeMat4(buffer, value, location, instancing, divisor) {
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
            gl.vertexAttribPointer(loc, // location
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
    setAttribBuffer(program, buffer, param) {
        const { gl } = this._engine;
        const { attribureName, attriburData, itemSize, dataType, usage, normalized, instancing, divisor } = param;
        // 属性使能数组
        const attribure = gl.getAttribLocation(program, attribureName);
        if (attribure == -1) {
            _misc_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].Warn(`attribureName 不存在...,${attribureName}`);
            return;
        }
        // 单独处理矩阵属性
        if (dataType === _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"].TYPE_MAT4) {
            this.setAttributeMat4(buffer, attriburData, attribure, instancing, divisor);
            return;
        }
        this.setBufferData(_engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].ARRAY_BUFFER, attriburData, buffer, usage, dataType);
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
    getAttribLocation(program, name) {
        const { gl } = this._engine;
        return gl.getAttribLocation(program, name);
    }
    disableVertexAttribArray(attribure) {
        const { gl } = this._engine;
        gl.disableVertexAttribArray(attribure);
    }
    setBuffers() { }
}


/***/ }),

/***/ "./src/engines/engine.viewPort.ts":
/*!****************************************!*\
  !*** ./src/engines/engine.viewPort.ts ***!
  \****************************************/
/*! exports provided: EngineViewPort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineViewPort", function() { return EngineViewPort; });
class EngineViewPort {
    constructor(engine) {
        this.viewportCached = { x: 0, y: 0, width: 0, height: 0 };
        this._engine = engine;
    }
    /**
     * Set the WebGL's viewport
     * @param viewport defines the viewport element to be used
     * @param requiredWidth defines the width required for rendering. If not provided the rendering canvas' width is used
     * @param requiredHeight defines the height required for rendering. If not provided the rendering canvas' height is used
     */
    setViewport(viewport, requiredWidth, requiredHeight) {
        // var width = requiredWidth || this._engine.engineDraw.getRenderWidth();
        // var height = requiredHeight || this._engine.engineDraw.getRenderHeight();
        // var x = viewport.x || 0;
        // var y = viewport.y || 0;
        // this._viewport(x * width, y * height, width * viewport.width, height * viewport.height);
        this._engine.gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
    }
    _viewport(x, y, width, height) {
        if (x !== this.viewportCached.x || y !== this.viewportCached.y || width !== this.viewportCached.width || height !== this.viewportCached.height) {
            this.viewportCached.x = x;
            this.viewportCached.y = y;
            this.viewportCached.width = width;
            this.viewportCached.height = height;
            this._engine.gl.viewport(x, y, width, height);
        }
    }
}


/***/ }),

/***/ "./src/engines/index.ts":
/*!******************************!*\
  !*** ./src/engines/index.ts ***!
  \******************************/
/*! exports provided: Engine, UniformsType, TextureProjection, TextureType, TextureFormat, TextureFilter, TextureAddress, CompareFunc, CubeFace, BlendMode, BlendEquation, CullFace, ClearFlag, BufferStore, DataType, IndexFormat, BufferType, BlendType, PrimitiveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engines/engine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _engine__WEBPACK_IMPORTED_MODULE_0__["Engine"]; });

/* harmony import */ var _engine_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.enum */ "./src/engines/engine.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniformsType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureProjection", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureFilter", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureAddress", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareFunc", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["CompareFunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeFace", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["CubeFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendMode", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BlendMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendEquation", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BlendEquation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CullFace", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["CullFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearFlag", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["ClearFlag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferStore", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["DataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexFormat", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["IndexFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["BlendType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimitiveType", function() { return _engine_enum__WEBPACK_IMPORTED_MODULE_1__["PrimitiveType"]; });





/***/ }),

/***/ "./src/geometry/builder.ts":
/*!*********************************!*\
  !*** ./src/geometry/builder.ts ***!
  \*********************************/
/*! exports provided: boxBuilder, sphereBuilder, planeBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxBuilder", function() { return boxBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphereBuilder", function() { return sphereBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planeBuilder", function() { return planeBuilder; });
const primitiveUv1Padding = 4.0 / 64;
const primitiveUv1PaddingScale = 1.0 - primitiveUv1Padding * 2;
// export function boxBuilder(opts?: any): iGeometryBuilder {
//     // Check the supplied options and provide defaults for unspecified ones
//     const he = opts && opts.halfExtents !== undefined ? opts.halfExtents : new Vec3(0.5, 0.5, 0.5);
//     const ws = opts && opts.widthSegments !== undefined ? opts.widthSegments : 1;
//     const ls = opts && opts.lengthSegments !== undefined ? opts.lengthSegments : 1;
//     const hs = opts && opts.heightSegments !== undefined ? opts.heightSegments : 1;
//     const corners = [
//         new Vec3(-he.x, -he.y, he.z),
//         new Vec3(he.x, -he.y, he.z),
//         new Vec3(he.x, he.y, he.z),
//         new Vec3(-he.x, he.y, he.z),
//         new Vec3(he.x, -he.y, -he.z),
//         new Vec3(-he.x, -he.y, -he.z),
//         new Vec3(-he.x, he.y, -he.z),
//         new Vec3(he.x, he.y, -he.z),
//     ];
//     const faceAxes = [
//         [0, 1, 3], // FRONT
//         [4, 5, 7], // BACK
//         [3, 2, 6], // TOP
//         [1, 0, 4], // BOTTOM
//         [1, 4, 2], // RIGHT
//         [5, 0, 6], // LEFT
//     ];
//     const faceNormals = [
//         [0, 0, 1], // FRONT
//         [0, 0, -1], // BACK
//         [0, 1, 0], // TOP
//         [0, -1, 0], // BOTTOM
//         [1, 0, 0], // RIGHT
//         [-1, 0, 0], // LEFT
//     ];
//     enum Sides {
//         FRONT = 0,
//         BACK = 1,
//         TOP = 2,
//         BOTTOM = 3,
//         RIGHT = 4,
//         LEFT = 5,
//     }
//     const positions = new Array<number>();
//     const normals = new Array<number>();
//     const uvs = new Array<number>();
//     const uvs1 = new Array<number>();
//     const indices = new Array<number>();
//     let vcounter = 0;
//     const generateFace = (side: Sides, uSegments: number, vSegments: number) => {
//         const temp1 = new Vec3();
//         const temp2 = new Vec3();
//         const temp3 = new Vec3();
//         const r = new Vec3();
//         for (let i = 0; i <= uSegments; i++) {
//             for (let j = 0; j <= vSegments; j++) {
//                 temp1.lerp2(corners[faceAxes[side][0]], corners[faceAxes[side][1]], i / uSegments);
//                 temp2.lerp2(corners[faceAxes[side][0]], corners[faceAxes[side][2]], j / vSegments);
//                 temp3.sub2(temp2, corners[faceAxes[side][0]]);
//                 r.add2(temp1, temp3);
//                 let u = i / uSegments;
//                 let v = j / vSegments;
//                 positions.push(r.x, r.y, r.z);
//                 normals.push(faceNormals[side][0], faceNormals[side][1], faceNormals[side][2]);
//                 uvs.push(u, 1 - v);
//                 // pack as 3x2. 1/3 will be empty, but it's either that or stretched pixels
//                 // TODO: generate non-rectangular lightMaps, so we could use space without stretching
//                 u = u * primitiveUv1PaddingScale + primitiveUv1Padding;
//                 v = v * primitiveUv1PaddingScale + primitiveUv1Padding;
//                 u /= 3;
//                 v /= 3;
//                 u += (side % 3) / 3;
//                 v += Math.floor(side / 3) / 3;
//                 uvs1.push(u, 1 - v);
//                 if (i < uSegments && j < vSegments) {
//                     indices.push(vcounter + vSegments + 1, vcounter + 1, vcounter);
//                     indices.push(vcounter + vSegments + 1, vcounter + vSegments + 2, vcounter + 1);
//                 }
//                 vcounter++;
//             }
//         }
//     };
//     generateFace(Sides.FRONT, ws, hs);
//     generateFace(Sides.BACK, ws, hs);
//     generateFace(Sides.TOP, ws, ls);
//     generateFace(Sides.BOTTOM, ws, ls);
//     generateFace(Sides.RIGHT, ls, hs);
//     generateFace(Sides.LEFT, ls, hs);
//     return {
//         positions: positions,
//         normals: normals,
//         uvs: uvs,
//         // uvs1: uvs1,
//         indices: indices,
//     };
// }
function boxBuilder(side) {
    var s = (side || 1) / 2;
    var coords = [];
    var normals = [];
    var texCoords = [];
    var indices = [];
    function face(xyz, nrm) {
        var start = coords.length / 3;
        var i;
        for (i = 0; i < 12; i++) {
            coords.push(xyz[i]);
        }
        for (i = 0; i < 4; i++) {
            normals.push(nrm[0], nrm[1], nrm[2]);
        }
        texCoords.push(0, 0, 1, 0, 1, 1, 0, 1);
        indices.push(start, start + 1, start + 2, start, start + 2, start + 3);
    }
    face([-s, -s, s, s, -s, s, s, s, s, -s, s, s], [0, 0, 1]);
    face([-s, -s, -s, -s, s, -s, s, s, -s, s, -s, -s], [0, 0, -1]);
    face([-s, s, -s, -s, s, s, s, s, s, s, s, -s], [0, 1, 0]);
    face([-s, -s, -s, s, -s, -s, s, -s, s, -s, -s, s], [0, -1, 0]);
    face([s, -s, -s, s, s, -s, s, s, s, s, -s, s], [1, 0, 0]);
    face([-s, -s, -s, -s, -s, s, -s, s, s, -s, s, -s], [-1, 0, 0]);
    return {
        positions: coords,
        normals: normals,
        uvs: texCoords,
        indices: indices
    };
}
function sphereBuilder(opts) {
    // Check the supplied options and provide defaults for unspecified ones
    const radius = opts && opts.radius !== undefined ? opts.radius : 0.5;
    const latitudeBands = opts && opts.latitudeBands !== undefined ? opts.latitudeBands : 32;
    const longitudeBands = opts && opts.longitudeBands !== undefined ? opts.longitudeBands : 32;
    const calcTangents = opts && opts.calculateTangents !== undefined ? opts.calculateTangents : false;
    // Variable declarations
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    for (let lat = 0; lat <= latitudeBands; lat++) {
        const theta = (lat * Math.PI) / latitudeBands;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        for (let lon = 0; lon <= longitudeBands; lon++) {
            // Sweep the sphere from the positive Z axis to match a 3DS Max sphere
            const phi = (lon * 2 * Math.PI) / longitudeBands - Math.PI / 2;
            const sinPhi = Math.sin(phi);
            const cosPhi = Math.cos(phi);
            const x = cosPhi * sinTheta;
            const y = cosTheta;
            const z = sinPhi * sinTheta;
            const u = 1 - lon / longitudeBands;
            const v = 1 - lat / latitudeBands;
            positions.push(x * radius, y * radius, z * radius);
            normals.push(x, y, z);
            uvs.push(u, 1 - v);
        }
    }
    for (let lat = 0; lat < latitudeBands; ++lat) {
        for (let lon = 0; lon < longitudeBands; ++lon) {
            const first = lat * (longitudeBands + 1) + lon;
            const second = first + longitudeBands + 1;
            indices.push(first + 1, second, first);
            indices.push(first + 1, second + 1, second);
        }
    }
    return {
        positions: positions,
        normals: normals,
        uvs: uvs,
        // uvs1: uvs, // UV1 = UV0 for sphere
        indices: indices
    };
    // return createMesh(device, positions, options);
}
/**
 * Z轴朝上
 * @param width
 * @param height
 * @returns
 */
function planeBuilder(width, height) {
    if (width == undefined) {
        width = 1;
    }
    if (height == undefined) {
        height = 1;
    }
    const vert = [-width, height, 0, -width, -height, 0, width, -height, 0, width, height, 0];
    const indices = [0, 1, 2, 2, 3, 0];
    const normal = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
    return {
        positions: vert,
        normals: normal,
        uvs: [0, 1, 0, 0, 1, 0, 1, 1],
        indices: indices
    };
}


/***/ }),

/***/ "./src/geometry/geometry.ts":
/*!**********************************!*\
  !*** ./src/geometry/geometry.ts ***!
  \**********************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _index_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-buffer */ "./src/geometry/index-buffer.ts");
/* harmony import */ var _vertex_array_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertex-array-buffer */ "./src/geometry/vertex-array-buffer.ts");



class Geometry {
    constructor(engine, geometryData) {
        this._engine = engine;
        this.drawType = geometryData.drawType !== undefined ? geometryData.drawType : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["PrimitiveType"].PRIMITIVE_TRIANGLES;
        this.instancing = geometryData.instanceCount !== undefined ? geometryData.instanceCount > 0 : false;
        this.instanceCount = geometryData.instanceCount !== undefined ? geometryData.instanceCount : 0;
        this.vertexArrayBuffer = new _vertex_array_buffer__WEBPACK_IMPORTED_MODULE_2__["VertexArrayBuffer"](engine, geometryData.attributes, this.instanceCount);
        if (geometryData === null || geometryData === void 0 ? void 0 : geometryData.indices) {
            this.indexBuffer = new _index_buffer__WEBPACK_IMPORTED_MODULE_1__["IndexBuffer"](engine, geometryData === null || geometryData === void 0 ? void 0 : geometryData.indices);
        }
    }
    setBuffers(program) {
        this.vertexArrayBuffer.unlock(program);
        if (this.indexBuffer) {
            this.indexBuffer.unlock();
        }
    }
    getDrawInfo() {
        var _a;
        let count = 0;
        if (this.indexBuffer) {
            count = this.indexBuffer.indexCount;
        }
        else {
            count = this.vertexArrayBuffer.vertexCount;
        }
        return {
            type: this.drawType,
            indexed: (_a = this.indexBuffer) === null || _a === void 0 ? void 0 : _a.storage,
            count: count,
            instanceCount: this.instanceCount,
        };
    }
    updateAttribure(name) {
        return this.vertexArrayBuffer.updateAttribure(name);
    }
    getAttribute(name) {
        return this.vertexArrayBuffer.getAttribute(name);
    }
}


/***/ }),

/***/ "./src/geometry/index-buffer.ts":
/*!**************************************!*\
  !*** ./src/geometry/index-buffer.ts ***!
  \**************************************/
/*! exports provided: IndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBuffer", function() { return IndexBuffer; });
/* harmony import */ var _engines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines */ "./src/engines/index.ts");

class IndexBuffer {
    constructor(engine, geometryIndex) {
        this._engine = engine;
        this.buffer = null;
        this.indexCount = 0;
        if (geometryIndex) {
            this.storage = geometryIndex.value;
            this.indexCount = this.storage.length;
            this.itemSize = geometryIndex.itemSize ? geometryIndex.itemSize : 3;
            this.dataType = geometryIndex.dateType ? geometryIndex.dateType : _engines__WEBPACK_IMPORTED_MODULE_0__["IndexFormat"].INDEXFORMAT_UINT16;
            this.usage = geometryIndex.usage ? geometryIndex.usage : _engines__WEBPACK_IMPORTED_MODULE_0__["BufferStore"].BUFFER_STATIC;
        }
    }
    unlock() {
        if (this.buffer === null) {
            this.buffer = this._engine.engineVertex.createBuffer();
        }
        // 绑定顶点索引
        if (this.storage) {
            this._engine.engineVertex.setBufferData(_engines__WEBPACK_IMPORTED_MODULE_0__["BufferType"].ELEMENT_ARRAY_BUFFER, this.storage, this.buffer, this.usage, this.dataType);
        }
    }
}


/***/ }),

/***/ "./src/geometry/index.ts":
/*!*******************************!*\
  !*** ./src/geometry/index.ts ***!
  \*******************************/
/*! exports provided: boxBuilder, sphereBuilder, planeBuilder, Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/geometry/builder.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxBuilder", function() { return _builder__WEBPACK_IMPORTED_MODULE_0__["boxBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphereBuilder", function() { return _builder__WEBPACK_IMPORTED_MODULE_0__["sphereBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planeBuilder", function() { return _builder__WEBPACK_IMPORTED_MODULE_0__["planeBuilder"]; });

/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry/geometry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"]; });





/***/ }),

/***/ "./src/geometry/vertex-array-buffer.ts":
/*!*********************************************!*\
  !*** ./src/geometry/vertex-array-buffer.ts ***!
  \*********************************************/
/*! exports provided: VertexArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexArrayBuffer", function() { return VertexArrayBuffer; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");

class VertexArrayBuffer {
    constructor(engine, attributes, instanceCount) {
        var _a;
        this._vao = null;
        this._buffers = new Map();
        this._engine = engine;
        this._attributes = [];
        this._instanceCount = instanceCount;
        this.instancing = instanceCount > 0;
        // 拷贝数据
        for (let i = 0; i < attributes.length; i++) {
            const attribute = attributes[i];
            const cloneAttribute = {
                value: attribute.value !== undefined ? attribute.value : [],
                itemSize: attribute.itemSize,
                name: attribute.name,
                usage: attribute.usage !== undefined ? attribute.usage : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BufferStore"].BUFFER_STATIC,
                dataType: attribute.dataType !== undefined ? attribute.dataType : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].TYPE_FLOAT32,
                normalized: attribute.normalized !== undefined ? attribute.normalized : false,
                divisor: attribute.divisor !== undefined ? attribute.divisor : 0,
            };
            this._attributes.push(cloneAttribute);
        }
        // todo:优化, 现在使用用第一个属性的长度
        this.vertexCount = this._attributes[0].value.length / (((_a = this._attributes[0]) === null || _a === void 0 ? void 0 : _a.itemSize) || 1);
    }
    _createVertexArray() {
        this._vao = this._engine.engineVertex.createVertexArray();
        this._engine.engineVertex.bindVertexArray(this._vao);
        for (let i = 0; i < this._attributes.length; i++) {
            const attribute = this._attributes[i];
            const { name } = attribute;
            this._buffers.set(name, this._engine.engineVertex.createBuffer());
            // 处理矩阵属性
            if (attribute.dataType === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["DataType"].TYPE_MAT4) {
                const matrixData = new Float32Array(this._instanceCount * 16);
                const matrices = [];
                for (let i = 0; i < this._instanceCount; ++i) {
                    const byteOffsetToMatrix = i * 16 * 4;
                    const numFloatsForView = 16;
                    matrices.push(new Float32Array(matrixData.buffer, byteOffsetToMatrix, numFloatsForView));
                }
                attribute.value = matrixData;
                attribute.matrices = matrices;
                this._engine.engineVertex.initAttributeMat4(this._buffers.get(name), attribute.usage, matrixData.byteLength);
            }
        }
    }
    /**
     * 指定属性
     * @param attributeName
     * @returns
     */
    updateAttribure(attributeName) {
        if (!this._program) {
            return;
        }
        const attribure = this.getAttribute(attributeName);
        const { value, itemSize, usage, dataType, name, divisor } = attribure;
        this._engine.engineVertex.setAttribBuffer(this._program, this._buffers.get(name), {
            attribureName: name,
            attriburData: value,
            itemSize: itemSize,
            usage,
            dataType,
            divisor,
            instancing: this.instancing,
        });
    }
    /**
     * 更新所有属性
     * @param program
     */
    _updateAllAttribute(program) {
        for (let i = 0; i < this._attributes.length; i++) {
            const attribute = this._attributes[i];
            const { value, itemSize, usage, dataType, name, divisor } = attribute;
            this._engine.engineVertex.setAttribBuffer(program, this._buffers.get(name), {
                attribureName: name,
                attriburData: value,
                itemSize: itemSize,
                usage,
                dataType,
                divisor,
                instancing: this.instancing,
            });
        }
    }
    unlock(program) {
        if (this._vao === null) {
            this._createVertexArray();
            this._updateAllAttribute(program);
        }
        if (!this._program) {
            this._program = program;
        }
        this._engine.engineVertex.bindVertexArray(this._vao);
    }
    getAttribute(name) {
        return this._attributes.filter(item => {
            return item.name === name;
        })[0];
    }
    destroy() { }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Engine, UniformsType, TextureProjection, TextureType, TextureFormat, TextureFilter, TextureAddress, CompareFunc, CubeFace, BlendMode, BlendEquation, CullFace, ClearFlag, BufferStore, DataType, IndexFormat, BufferType, BlendType, PrimitiveType, PerspectiveCamera, boxBuilder, sphereBuilder, planeBuilder, Geometry, Material, Mesh, MeshAxis, MeshSprite, MeshSkybox, Scene, TextureLoader, ShaderLoader, Texture, RenderTargetBufferType, RenderTarget, Postprocessing, Vec2, Vec3, Vec4, Mat3, Mat4, Euler, Quat, MathTool, Color3, Color4, TmpColors, ParticleSystem, Object3D, showImage, FileTools, Application, EnvLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engines_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engines/index */ "./src/engines/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["Engine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniformsType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["UniformsType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureProjection", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["TextureProjection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["TextureType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureFilter", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureAddress", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareFunc", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["CompareFunc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CubeFace", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["CubeFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendMode", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["BlendMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendEquation", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CullFace", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["CullFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearFlag", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["ClearFlag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferStore", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["BufferStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["DataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexFormat", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["IndexFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["BufferType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlendType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["BlendType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimitiveType", function() { return _engines_index__WEBPACK_IMPORTED_MODULE_0__["PrimitiveType"]; });

/* harmony import */ var _cameras_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cameras/index */ "./src/cameras/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerspectiveCamera", function() { return _cameras_index__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"]; });

/* harmony import */ var _geometry_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry/index */ "./src/geometry/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxBuilder", function() { return _geometry_index__WEBPACK_IMPORTED_MODULE_2__["boxBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphereBuilder", function() { return _geometry_index__WEBPACK_IMPORTED_MODULE_2__["sphereBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planeBuilder", function() { return _geometry_index__WEBPACK_IMPORTED_MODULE_2__["planeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _geometry_index__WEBPACK_IMPORTED_MODULE_2__["Geometry"]; });

/* harmony import */ var _material_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/index */ "./src/material/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return _material_index__WEBPACK_IMPORTED_MODULE_3__["Material"]; });

/* harmony import */ var _mesh_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mesh/index */ "./src/mesh/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _mesh_index__WEBPACK_IMPORTED_MODULE_4__["Mesh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshAxis", function() { return _mesh_index__WEBPACK_IMPORTED_MODULE_4__["MeshAxis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshSprite", function() { return _mesh_index__WEBPACK_IMPORTED_MODULE_4__["MeshSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshSkybox", function() { return _mesh_index__WEBPACK_IMPORTED_MODULE_4__["MeshSkybox"]; });

/* harmony import */ var _scene_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scene/index */ "./src/scene/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene_index__WEBPACK_IMPORTED_MODULE_5__["Scene"]; });

/* harmony import */ var _loader_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/index */ "./src/loader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _loader_index__WEBPACK_IMPORTED_MODULE_6__["TextureLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShaderLoader", function() { return _loader_index__WEBPACK_IMPORTED_MODULE_6__["ShaderLoader"]; });

/* harmony import */ var _texture_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./texture/index */ "./src/texture/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _texture_index__WEBPACK_IMPORTED_MODULE_7__["Texture"]; });

/* harmony import */ var _renderer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderer/index */ "./src/renderer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTargetBufferType", function() { return _renderer_index__WEBPACK_IMPORTED_MODULE_8__["RenderTargetBufferType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return _renderer_index__WEBPACK_IMPORTED_MODULE_8__["RenderTarget"]; });

/* harmony import */ var _postprocessing_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./postprocessing/index */ "./src/postprocessing/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Postprocessing", function() { return _postprocessing_index__WEBPACK_IMPORTED_MODULE_9__["Postprocessing"]; });

/* harmony import */ var _maths_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maths/index */ "./src/maths/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Vec2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Vec3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Vec4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Mat3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Mat4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Euler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Quat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathTool", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["MathTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color3", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Color3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color4", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["Color4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TmpColors", function() { return _maths_index__WEBPACK_IMPORTED_MODULE_10__["TmpColors"]; });

/* harmony import */ var _particles_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./particles/index */ "./src/particles/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return _particles_index__WEBPACK_IMPORTED_MODULE_11__["ParticleSystem"]; });

/* harmony import */ var _object3D__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./object3D */ "./src/object3D.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return _object3D__WEBPACK_IMPORTED_MODULE_12__["Object3D"]; });

/* harmony import */ var _misc_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./misc/index */ "./src/misc/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showImage", function() { return _misc_index__WEBPACK_IMPORTED_MODULE_13__["showImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTools", function() { return _misc_index__WEBPACK_IMPORTED_MODULE_13__["FileTools"]; });

/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application */ "./src/application.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_14__["Application"]; });

/* harmony import */ var _pbr_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pbr/index */ "./src/pbr/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvLighting", function() { return _pbr_index__WEBPACK_IMPORTED_MODULE_15__["EnvLighting"]; });



















/***/ }),

/***/ "./src/lmgl.ts":
/*!*********************!*\
  !*** ./src/lmgl.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
// 挂载到window对象;

window.lmgl = _index__WEBPACK_IMPORTED_MODULE_0__;


/***/ }),

/***/ "./src/loader/index.ts":
/*!*****************************!*\
  !*** ./src/loader/index.ts ***!
  \*****************************/
/*! exports provided: TextureLoader, ShaderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texture_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texture.loader */ "./src/loader/texture.loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _texture_loader__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]; });

/* harmony import */ var _shader_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader.loader */ "./src/loader/shader.loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShaderLoader", function() { return _shader_loader__WEBPACK_IMPORTED_MODULE_1__["ShaderLoader"]; });





/***/ }),

/***/ "./src/loader/loader.ts":
/*!******************************!*\
  !*** ./src/loader/loader.ts ***!
  \******************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
class Loader {
    constructor(engine) {
        this.engine = engine;
        this.rootPath = "";
    }
    setPath(path) {
        this.rootPath = path || "";
        return this;
    }
}


/***/ }),

/***/ "./src/loader/shader.loader.ts":
/*!*************************************!*\
  !*** ./src/loader/shader.loader.ts ***!
  \*************************************/
/*! exports provided: ShaderLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderLoader", function() { return ShaderLoader; });
/* harmony import */ var _misc_fileTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/fileTools */ "./src/misc/fileTools.ts");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/loader/loader.ts");


class ShaderLoader extends _loader__WEBPACK_IMPORTED_MODULE_1__["Loader"] {
    constructor(engine) {
        super(engine);
    }
    load(options) {
        return new Promise((resolve, reject) => {
            let filesToLoad = [];
            filesToLoad = filesToLoad.concat(options.vsPaths);
            filesToLoad = filesToLoad.concat(options.fsPaths);
            _misc_fileTools__WEBPACK_IMPORTED_MODULE_0__["FileTools"].LoadTextFiles(filesToLoad, this.rootPath).then((files) => {
                var vertexShaderSources = [];
                for (var i = 0; i < options.vsPaths.length; ++i) {
                    vertexShaderSources.push(files[this.rootPath + options.vsPaths[i]]);
                }
                var fragmentShaderSources = [];
                for (var i = 0; i < options.fsPaths.length; ++i) {
                    fragmentShaderSources.push(files[this.rootPath + options.fsPaths[i]]);
                }
                const ret = {
                    vertexShader: vertexShaderSources.join("\n"),
                    fragmentShader: fragmentShaderSources.join("\n"),
                };
                options.onLoad && options.onLoad(ret);
                resolve(ret);
            });
        });
    }
}


/***/ }),

/***/ "./src/loader/texture.loader.ts":
/*!**************************************!*\
  !*** ./src/loader/texture.loader.ts ***!
  \**************************************/
/*! exports provided: TextureLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return TextureLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@2.3.1@tslib/tslib.es6.js");
/* harmony import */ var _misc_fileTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/fileTools */ "./src/misc/fileTools.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../texture */ "./src/texture/index.ts");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader */ "./src/loader/loader.ts");




class TextureLoader extends _loader__WEBPACK_IMPORTED_MODULE_3__["Loader"] {
    constructor(engine) {
        super(engine);
    }
    load(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const image = yield _misc_fileTools__WEBPACK_IMPORTED_MODULE_1__["FileTools"].LoadImage({ url });
                const texture = new _texture__WEBPACK_IMPORTED_MODULE_2__["Texture"](this.engine);
                texture.source = image;
                return resolve(texture);
            }));
        });
    }
}


/***/ }),

/***/ "./src/material/index.ts":
/*!*******************************!*\
  !*** ./src/material/index.ts ***!
  \*******************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ "./src/material/material.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return _material__WEBPACK_IMPORTED_MODULE_0__["Material"]; });




/***/ }),

/***/ "./src/material/material.ts":
/*!**********************************!*\
  !*** ./src/material/material.ts ***!
  \**********************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _loader_shader_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/shader.loader */ "./src/loader/shader.loader.ts");
/* harmony import */ var _misc_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/tool */ "./src/misc/tool.ts");



class Material {
    constructor(engine, materialInfo) {
        this._engine = engine;
        const load = () => {
            this.vertexShader = this.inputVertexShader;
            this.fragmentShader = this.inputFragmentShader;
            const programInfo = engine.enginePrograms.createProgram({
                vertexShader: this.vertexShader,
                fragmentShader: this.fragmentShader,
            });
            this.program = programInfo.program;
            this.vertexShader = programInfo.vertexShader;
            this.fragmentShader = programInfo.fragmentShader;
        };
        if (materialInfo.vertexShader && materialInfo.fragmentShader) {
            this.inputVertexShader = JSON.parse(JSON.stringify(materialInfo.vertexShader));
            this.inputFragmentShader = JSON.parse(JSON.stringify(materialInfo.fragmentShader));
            load();
        }
        if (materialInfo.fragmentShaderPaths && materialInfo.vertexShaderPaths) {
            const loader = new _loader_shader_loader__WEBPACK_IMPORTED_MODULE_1__["ShaderLoader"](engine).setPath(materialInfo.shaderRootPath).load({
                vsPaths: materialInfo.vertexShaderPaths,
                fsPaths: materialInfo.fragmentShaderPaths,
                onLoad: (ret) => {
                    this.inputVertexShader = ret.vertexShader;
                    this.inputFragmentShader = ret.fragmentShader;
                    load();
                },
            });
        }
        this.uniforms = Object(_misc_tool__WEBPACK_IMPORTED_MODULE_2__["cloneUniforms"])(materialInfo.uniforms || {});
        this.uniformBlock = {
            blockCatch: new Map(),
            blockIndex: 0,
        };
        // 是否需要每帧更新uniform变量
        this.needUpdate = true;
        this.depthTest = true;
        this.depthFunc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["CompareFunc"].FUNC_LESSEQUAL;
        this.depthWrite = true;
        this.cull = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_BACK;
        this._blend = false;
        this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
        this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO;
        this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
        this._separateAlphaBlend = false;
        this._blendSrcAlpha = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
        this._blendDstAlpha = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO;
        this._blendAlphaEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
    }
    get separateAlphaBlend() {
        return this._separateAlphaBlend;
    }
    set separateAlphaBlend(v) {
        this._separateAlphaBlend = v;
    }
    get blend() {
        return this._blend;
    }
    get blendSrc() {
        return this._blendSrc;
    }
    get blendDst() {
        return this._blendDst;
    }
    get blendEquation() {
        return this._blendEquation;
    }
    get blendSrcAlpha() {
        return this._blendSrcAlpha;
    }
    get blendDstAlpha() {
        return this._blendDstAlpha;
    }
    get blendAlphaEquation() {
        return this._blendAlphaEquation;
    }
    // returns boolean depending on material being transparent
    get transparent() {
        return this.blend || this._blendSrc !== _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE || this._blendDst !== _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO || this._blendEquation !== _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
    }
    set blendType(type) {
        const prevBlend = this.blend;
        switch (type) {
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_NONE:
                this._blend = false;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_NORMAL:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_ALPHA;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_SRC_ALPHA;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_PREMULTIPLIED:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_SRC_ALPHA;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_ADDITIVE:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_ADDITIVEALPHA:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_ALPHA;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MULTIPLICATIVE2X:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_DST_COLOR;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_COLOR;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_SCREEN:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_DST_COLOR;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MULTIPLICATIVE:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_DST_COLOR;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MIN:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_MIN;
                break;
            case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MAX:
                this._blend = true;
                this._blendSrc = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendDst = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE;
                this._blendEquation = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_MAX;
                break;
        }
    }
    // prettier-ignore
    get blendType() {
        if (!this.transparent) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_NONE;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_ALPHA &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_SRC_ALPHA &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_NORMAL;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_ADDITIVE;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_ALPHA &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_ADDITIVEALPHA;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_DST_COLOR &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_SRC_COLOR &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MULTIPLICATIVE2X;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_DST_COLOR &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_SCREEN;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_MIN) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MIN;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_MAX) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MAX;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_DST_COLOR &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ZERO &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_MULTIPLICATIVE;
        }
        else if (this.blend &&
            this._blendSrc === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE &&
            this._blendDst === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendMode"].BLENDMODE_ONE_MINUS_SRC_ALPHA &&
            this._blendEquation === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendEquation"].BLENDEQUATION_ADD) {
            return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_PREMULTIPLIED;
        }
        return _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_NORMAL;
    }
    setUniform() {
        const { program, uniforms, uniformBlock } = this;
        this._engine.engineUniform.handleUniform(program, uniforms, uniformBlock);
    }
    clone() {
        return new Material(this._engine, {
            vertexShader: this.inputVertexShader,
            fragmentShader: this.inputFragmentShader,
            uniforms: this.uniforms,
        });
    }
}


/***/ }),

/***/ "./src/maths/index.ts":
/*!****************************!*\
  !*** ./src/maths/index.ts ***!
  \****************************/
/*! exports provided: Vec2, Vec3, Vec4, Mat3, Mat4, Euler, Quat, MathTool, Color3, Color4, TmpColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.vec2 */ "./src/maths/math.vec2.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _math_vec2__WEBPACK_IMPORTED_MODULE_0__["Vec2"]; });

/* harmony import */ var _math_vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return _math_vec3__WEBPACK_IMPORTED_MODULE_1__["Vec3"]; });

/* harmony import */ var _math_vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.vec4 */ "./src/maths/math.vec4.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return _math_vec4__WEBPACK_IMPORTED_MODULE_2__["Vec4"]; });

/* harmony import */ var _math_mat3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.mat3 */ "./src/maths/math.mat3.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return _math_mat3__WEBPACK_IMPORTED_MODULE_3__["Mat3"]; });

/* harmony import */ var _math_mat4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math.mat4 */ "./src/maths/math.mat4.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return _math_mat4__WEBPACK_IMPORTED_MODULE_4__["Mat4"]; });

/* harmony import */ var _math_euler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math.euler */ "./src/maths/math.euler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return _math_euler__WEBPACK_IMPORTED_MODULE_5__["Euler"]; });

/* harmony import */ var _math_quat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math.quat */ "./src/maths/math.quat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return _math_quat__WEBPACK_IMPORTED_MODULE_6__["Quat"]; });

/* harmony import */ var _math_tool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math.tool */ "./src/maths/math.tool.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathTool", function() { return _math_tool__WEBPACK_IMPORTED_MODULE_7__["MathTool"]; });

/* harmony import */ var _math_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math.color */ "./src/maths/math.color.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color3", function() { return _math_color__WEBPACK_IMPORTED_MODULE_8__["Color3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color4", function() { return _math_color__WEBPACK_IMPORTED_MODULE_8__["Color4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TmpColors", function() { return _math_color__WEBPACK_IMPORTED_MODULE_8__["TmpColors"]; });












/***/ }),

/***/ "./src/maths/math.color.ts":
/*!*********************************!*\
  !*** ./src/maths/math.color.ts ***!
  \*********************************/
/*! exports provided: Color3, Color4, TmpColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color3", function() { return Color3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color4", function() { return Color4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmpColors", function() { return TmpColors; });
/* harmony import */ var _math_scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.scalar */ "./src/maths/math.scalar.ts");
/* harmony import */ var _math_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.constants */ "./src/maths/math.constants.ts");
/* harmony import */ var _misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/arrayTools */ "./src/misc/arrayTools.ts");
/* harmony import */ var _misc_typeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../misc/typeStore */ "./src/misc/typeStore.ts");




/**
 * Class used to hold a RBG color
 */
class Color3 {
    /**
     * Creates a new Color3 object from red, green, blue values, all between 0 and 1
     * @param r defines the red component (between 0 and 1, default is 0)
     * @param g defines the green component (between 0 and 1, default is 0)
     * @param b defines the blue component (between 0 and 1, default is 0)
     */
    constructor(
    /**
     * Defines the red component (between 0 and 1, default is 0)
     */
    r = 0, 
    /**
     * Defines the green component (between 0 and 1, default is 0)
     */
    g = 0, 
    /**
     * Defines the blue component (between 0 and 1, default is 0)
     */
    b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    /**
     * Creates a string with the Color3 current values
     * @returns the string representation of the Color3 object
     */
    toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
    }
    /**
     * Returns the string "Color3"
     * @returns "Color3"
     */
    getClassName() {
        return "Color3";
    }
    /**
     * Compute the Color3 hash code
     * @returns an unique number that can be used to hash Color3 objects
     */
    getHashCode() {
        let hash = (this.r * 255) | 0;
        hash = (hash * 397) ^ ((this.g * 255) | 0);
        hash = (hash * 397) ^ ((this.b * 255) | 0);
        return hash;
    }
    // Operators
    /**
     * Stores in the given array from the given starting index the red, green, blue values as successive elements
     * @param array defines the array where to store the r,g,b components
     * @param index defines an optional index in the target array to define where to start storing values
     * @returns the current Color3 object
     */
    toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        return this;
    }
    /**
     * Update the current color with values stored in an array from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns the current Color3 object
     */
    fromArray(array, offset = 0) {
        Color3.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Returns a new Color4 object from the current Color3 and the given alpha
     * @param alpha defines the alpha component on the new Color4 object (default is 1)
     * @returns a new Color4 object
     */
    toColor4(alpha = 1) {
        return new Color4(this.r, this.g, this.b, alpha);
    }
    /**
     * Returns a new array populated with 3 numeric elements : red, green and blue values
     * @returns the new array
     */
    asArray() {
        var result = new Array();
        this.toArray(result, 0);
        return result;
    }
    /**
     * Returns the luminance value
     * @returns a float value
     */
    toLuminance() {
        return this.r * 0.3 + this.g * 0.59 + this.b * 0.11;
    }
    /**
     * Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object
     * @param otherColor defines the second operand
     * @returns the new Color3 object
     */
    multiply(otherColor) {
        return new Color3(this.r * otherColor.r, this.g * otherColor.g, this.b * otherColor.b);
    }
    /**
     * Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result"
     * @param otherColor defines the second operand
     * @param result defines the Color3 object where to store the result
     * @returns the current Color3
     */
    multiplyToRef(otherColor, result) {
        result.r = this.r * otherColor.r;
        result.g = this.g * otherColor.g;
        result.b = this.b * otherColor.b;
        return this;
    }
    /**
     * Determines equality between Color3 objects
     * @param otherColor defines the second operand
     * @returns true if the rgb values are equal to the given ones
     */
    equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b;
    }
    /**
     * Determines equality between the current Color3 object and a set of r,b,g values
     * @param r defines the red component to check
     * @param g defines the green component to check
     * @param b defines the blue component to check
     * @returns true if the rgb values are equal to the given ones
     */
    equalsFloats(r, g, b) {
        return this.r === r && this.g === g && this.b === b;
    }
    /**
     * Multiplies in place each rgb value by scale
     * @param scale defines the scaling factor
     * @returns the updated Color3
     */
    scale(scale) {
        return new Color3(this.r * scale, this.g * scale, this.b * scale);
    }
    /**
     * Multiplies the rgb values by scale and stores the result into "result"
     * @param scale defines the scaling factor
     * @param result defines the Color3 object where to store the result
     * @returns the unmodified current Color3
     */
    scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        return this;
    }
    /**
     * Scale the current Color3 values by a factor and add the result to a given Color3
     * @param scale defines the scale factor
     * @param result defines color to store the result into
     * @returns the unmodified current Color3
     */
    scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        return this;
    }
    /**
     * Clamps the rgb values by the min and max values and stores the result into "result"
     * @param min defines minimum clamping value (default is 0)
     * @param max defines maximum clamping value (default is 1)
     * @param result defines color to store the result into
     * @returns the original Color3
     */
    clampToRef(min = 0, max = 1, result) {
        result.r = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.r, min, max);
        result.g = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.g, min, max);
        result.b = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.b, min, max);
        return this;
    }
    /**
     * Creates a new Color3 set with the added values of the current Color3 and of the given one
     * @param otherColor defines the second operand
     * @returns the new Color3
     */
    add(otherColor) {
        return new Color3(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b);
    }
    /**
     * Stores the result of the addition of the current Color3 and given one rgb values into "result"
     * @param otherColor defines the second operand
     * @param result defines Color3 object to store the result into
     * @returns the unmodified current Color3
     */
    addToRef(otherColor, result) {
        result.r = this.r + otherColor.r;
        result.g = this.g + otherColor.g;
        result.b = this.b + otherColor.b;
        return this;
    }
    /**
     * Returns a new Color3 set with the subtracted values of the given one from the current Color3
     * @param otherColor defines the second operand
     * @returns the new Color3
     */
    subtract(otherColor) {
        return new Color3(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b);
    }
    /**
     * Stores the result of the subtraction of given one from the current Color3 rgb values into "result"
     * @param otherColor defines the second operand
     * @param result defines Color3 object to store the result into
     * @returns the unmodified current Color3
     */
    subtractToRef(otherColor, result) {
        result.r = this.r - otherColor.r;
        result.g = this.g - otherColor.g;
        result.b = this.b - otherColor.b;
        return this;
    }
    /**
     * Copy the current object
     * @returns a new Color3 copied the current one
     */
    clone() {
        return new Color3(this.r, this.g, this.b);
    }
    /**
     * Copies the rgb values from the source in the current Color3
     * @param source defines the source Color3 object
     * @returns the updated Color3 object
     */
    copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        return this;
    }
    /**
     * Updates the Color3 rgb values from the given floats
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @returns the current Color3 object
     */
    copyFromFloats(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    /**
     * Updates the Color3 rgb values from the given floats
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @returns the current Color3 object
     */
    set(r, g, b) {
        return this.copyFromFloats(r, g, b);
    }
    /**
     * Compute the Color3 hexadecimal code as a string
     * @returns a string containing the hexadecimal representation of the Color3 object
     */
    toHexString() {
        var intR = (this.r * 255) | 0;
        var intG = (this.g * 255) | 0;
        var intB = (this.b * 255) | 0;
        return "#" + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intR) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intG) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intB);
    }
    /**
     * Computes a new Color3 converted from the current one to linear space
     * @returns a new Color3 object
     */
    toLinearSpace() {
        var convertedColor = new Color3();
        this.toLinearSpaceToRef(convertedColor);
        return convertedColor;
    }
    /**
     * Converts current color in rgb space to HSV values
     * @returns a new color3 representing the HSV values
     */
    toHSV() {
        let result = new Color3();
        this.toHSVToRef(result);
        return result;
    }
    /**
     * Converts current color in rgb space to HSV values
     * @param result defines the Color3 where to store the HSV values
     */
    toHSVToRef(result) {
        var r = this.r;
        var g = this.g;
        var b = this.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h = 0;
        var s = 0;
        var v = max;
        var dm = max - min;
        if (max !== 0) {
            s = dm / max;
        }
        if (max != min) {
            if (max == r) {
                h = (g - b) / dm;
                if (g < b) {
                    h += 6;
                }
            }
            else if (max == g) {
                h = (b - r) / dm + 2;
            }
            else if (max == b) {
                h = (r - g) / dm + 4;
            }
            h *= 60;
        }
        result.r = h;
        result.g = s;
        result.b = v;
    }
    /**
     * Converts the Color3 values to linear space and stores the result in "convertedColor"
     * @param convertedColor defines the Color3 object where to store the linear space version
     * @returns the unmodified Color3
     */
    toLinearSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        convertedColor.g = Math.pow(this.g, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        convertedColor.b = Math.pow(this.b, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        return this;
    }
    /**
     * Computes a new Color3 converted from the current one to gamma space
     * @returns a new Color3 object
     */
    toGammaSpace() {
        var convertedColor = new Color3();
        this.toGammaSpaceToRef(convertedColor);
        return convertedColor;
    }
    /**
     * Converts the Color3 values to gamma space and stores the result in "convertedColor"
     * @param convertedColor defines the Color3 object where to store the gamma space version
     * @returns the unmodified Color3
     */
    toGammaSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        convertedColor.g = Math.pow(this.g, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        convertedColor.b = Math.pow(this.b, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        return this;
    }
    /**
     * Convert Hue, saturation and value to a Color3 (RGB)
     * @param hue defines the hue
     * @param saturation defines the saturation
     * @param value defines the value
     * @param result defines the Color3 where to store the RGB values
     */
    static HSVtoRGBToRef(hue, saturation, value, result) {
        var chroma = value * saturation;
        var h = hue / 60;
        var x = chroma * (1 - Math.abs((h % 2) - 1));
        var r = 0;
        var g = 0;
        var b = 0;
        if (h >= 0 && h <= 1) {
            r = chroma;
            g = x;
        }
        else if (h >= 1 && h <= 2) {
            r = x;
            g = chroma;
        }
        else if (h >= 2 && h <= 3) {
            g = chroma;
            b = x;
        }
        else if (h >= 3 && h <= 4) {
            g = x;
            b = chroma;
        }
        else if (h >= 4 && h <= 5) {
            r = x;
            b = chroma;
        }
        else if (h >= 5 && h <= 6) {
            r = chroma;
            b = x;
        }
        var m = value - chroma;
        result.set((r + m), (g + m), (b + m));
    }
    /**
     * Creates a new Color3 from the string containing valid hexadecimal values
     * @param hex defines a string containing valid hexadecimal values
     * @returns a new Color3 object
     */
    static FromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 7) {
            return new Color3(0, 0, 0);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        return Color3.FromInts(r, g, b);
    }
    /**
     * Creates a new Color3 from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns a new Color3 object
     */
    static FromArray(array, offset = 0) {
        return new Color3(array[offset], array[offset + 1], array[offset + 2]);
    }
    /**
     * Creates a new Color3 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @param result defines the target Color3 object
     */
    static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
    }
    /**
     * Creates a new Color3 from integer values (< 256)
     * @param r defines the red component to read from (value between 0 and 255)
     * @param g defines the green component to read from (value between 0 and 255)
     * @param b defines the blue component to read from (value between 0 and 255)
     * @returns a new Color3 object
     */
    static FromInts(r, g, b) {
        return new Color3(r / 255.0, g / 255.0, b / 255.0);
    }
    /**
     * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
     * @param start defines the start Color3 value
     * @param end defines the end Color3 value
     * @param amount defines the gradient value between start and end
     * @returns a new Color3 object
     */
    static Lerp(start, end, amount) {
        var result = new Color3(0.0, 0.0, 0.0);
        Color3.LerpToRef(start, end, amount, result);
        return result;
    }
    /**
     * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @param result defines the Color3 object where to store the result
     */
    static LerpToRef(left, right, amount, result) {
        result.r = left.r + ((right.r - left.r) * amount);
        result.g = left.g + ((right.g - left.g) * amount);
        result.b = left.b + ((right.b - left.b) * amount);
    }
    /**
     * Returns a Color3 value containing a red color
     * @returns a new Color3 object
     */
    static Red() { return new Color3(1, 0, 0); }
    /**
     * Returns a Color3 value containing a green color
     * @returns a new Color3 object
     */
    static Green() { return new Color3(0, 1, 0); }
    /**
     * Returns a Color3 value containing a blue color
     * @returns a new Color3 object
     */
    static Blue() { return new Color3(0, 0, 1); }
    /**
     * Returns a Color3 value containing a black color
     * @returns a new Color3 object
     */
    static Black() { return new Color3(0, 0, 0); }
    /**
      * Gets a Color3 value containing a black color that must not be updated
      */
    static get BlackReadOnly() {
        return Color3._BlackReadOnly;
    }
    /**
     * Returns a Color3 value containing a white color
     * @returns a new Color3 object
     */
    static White() { return new Color3(1, 1, 1); }
    /**
     * Returns a Color3 value containing a purple color
     * @returns a new Color3 object
     */
    static Purple() { return new Color3(0.5, 0, 0.5); }
    /**
     * Returns a Color3 value containing a magenta color
     * @returns a new Color3 object
     */
    static Magenta() { return new Color3(1, 0, 1); }
    /**
     * Returns a Color3 value containing a yellow color
     * @returns a new Color3 object
     */
    static Yellow() { return new Color3(1, 1, 0); }
    /**
     * Returns a Color3 value containing a gray color
     * @returns a new Color3 object
     */
    static Gray() { return new Color3(0.5, 0.5, 0.5); }
    /**
     * Returns a Color3 value containing a teal color
     * @returns a new Color3 object
     */
    static Teal() { return new Color3(0, 1.0, 1.0); }
    /**
     * Returns a Color3 value containing a random color
     * @returns a new Color3 object
     */
    static Random() { return new Color3(Math.random(), Math.random(), Math.random()); }
}
// Statics
Color3._BlackReadOnly = Color3.Black();
/**
 * Class used to hold a RBGA color
 */
class Color4 {
    /**
     * Creates a new Color4 object from red, green, blue values, all between 0 and 1
     * @param r defines the red component (between 0 and 1, default is 0)
     * @param g defines the green component (between 0 and 1, default is 0)
     * @param b defines the blue component (between 0 and 1, default is 0)
     * @param a defines the alpha component (between 0 and 1, default is 1)
     */
    constructor(
    /**
     * Defines the red component (between 0 and 1, default is 0)
     */
    r = 0, 
    /**
     * Defines the green component (between 0 and 1, default is 0)
     */
    g = 0, 
    /**
     * Defines the blue component (between 0 and 1, default is 0)
     */
    b = 0, 
    /**
     * Defines the alpha component (between 0 and 1, default is 1)
     */
    a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    // Operators
    /**
     * Adds in place the given Color4 values to the current Color4 object
     * @param right defines the second operand
     * @returns the current updated Color4 object
     */
    addInPlace(right) {
        this.r += right.r;
        this.g += right.g;
        this.b += right.b;
        this.a += right.a;
        return this;
    }
    /**
     * Creates a new array populated with 4 numeric elements : red, green, blue, alpha values
     * @returns the new array
     */
    asArray() {
        var result = new Array();
        this.toArray(result, 0);
        return result;
    }
    /**
     * Stores from the starting index in the given array the Color4 successive values
     * @param array defines the array where to store the r,g,b components
     * @param index defines an optional index in the target array to define where to start storing values
     * @returns the current Color4 object
     */
    toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        array[index + 3] = this.a;
        return this;
    }
    /**
     * Update the current color with values stored in an array from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns the current Color4 object
     */
    fromArray(array, offset = 0) {
        Color4.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Determines equality between Color4 objects
     * @param otherColor defines the second operand
     * @returns true if the rgba values are equal to the given ones
     */
    equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b && this.a === otherColor.a;
    }
    /**
     * Creates a new Color4 set with the added values of the current Color4 and of the given one
     * @param right defines the second operand
     * @returns a new Color4 object
     */
    add(right) {
        return new Color4(this.r + right.r, this.g + right.g, this.b + right.b, this.a + right.a);
    }
    /**
     * Creates a new Color4 set with the subtracted values of the given one from the current Color4
     * @param right defines the second operand
     * @returns a new Color4 object
     */
    subtract(right) {
        return new Color4(this.r - right.r, this.g - right.g, this.b - right.b, this.a - right.a);
    }
    /**
     * Subtracts the given ones from the current Color4 values and stores the results in "result"
     * @param right defines the second operand
     * @param result defines the Color4 object where to store the result
     * @returns the current Color4 object
     */
    subtractToRef(right, result) {
        result.r = this.r - right.r;
        result.g = this.g - right.g;
        result.b = this.b - right.b;
        result.a = this.a - right.a;
        return this;
    }
    /**
     * Creates a new Color4 with the current Color4 values multiplied by scale
     * @param scale defines the scaling factor to apply
     * @returns a new Color4 object
     */
    scale(scale) {
        return new Color4(this.r * scale, this.g * scale, this.b * scale, this.a * scale);
    }
    /**
     * Multiplies the current Color4 values by scale and stores the result in "result"
     * @param scale defines the scaling factor to apply
     * @param result defines the Color4 object where to store the result
     * @returns the current unmodified Color4
     */
    scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        result.a = this.a * scale;
        return this;
    }
    /**
     * Scale the current Color4 values by a factor and add the result to a given Color4
     * @param scale defines the scale factor
     * @param result defines the Color4 object where to store the result
     * @returns the unmodified current Color4
     */
    scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        result.a += this.a * scale;
        return this;
    }
    /**
     * Clamps the rgb values by the min and max values and stores the result into "result"
     * @param min defines minimum clamping value (default is 0)
     * @param max defines maximum clamping value (default is 1)
     * @param result defines color to store the result into.
     * @returns the cuurent Color4
     */
    clampToRef(min = 0, max = 1, result) {
        result.r = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.r, min, max);
        result.g = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.g, min, max);
        result.b = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.b, min, max);
        result.a = _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Clamp(this.a, min, max);
        return this;
    }
    /**
      * Multipy an Color4 value by another and return a new Color4 object
      * @param color defines the Color4 value to multiply by
      * @returns a new Color4 object
      */
    multiply(color) {
        return new Color4(this.r * color.r, this.g * color.g, this.b * color.b, this.a * color.a);
    }
    /**
     * Multipy a Color4 value by another and push the result in a reference value
     * @param color defines the Color4 value to multiply by
     * @param result defines the Color4 to fill the result in
     * @returns the result Color4
     */
    multiplyToRef(color, result) {
        result.r = this.r * color.r;
        result.g = this.g * color.g;
        result.b = this.b * color.b;
        result.a = this.a * color.a;
        return result;
    }
    /**
     * Creates a string with the Color4 current values
     * @returns the string representation of the Color4 object
     */
    toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
    }
    /**
     * Returns the string "Color4"
     * @returns "Color4"
     */
    getClassName() {
        return "Color4";
    }
    /**
     * Compute the Color4 hash code
     * @returns an unique number that can be used to hash Color4 objects
     */
    getHashCode() {
        let hash = (this.r * 255) | 0;
        hash = (hash * 397) ^ ((this.g * 255) | 0);
        hash = (hash * 397) ^ ((this.b * 255) | 0);
        hash = (hash * 397) ^ ((this.a * 255) | 0);
        return hash;
    }
    /**
     * Creates a new Color4 copied from the current one
     * @returns a new Color4 object
     */
    clone() {
        return new Color4(this.r, this.g, this.b, this.a);
    }
    /**
     * Copies the given Color4 values into the current one
     * @param source defines the source Color4 object
     * @returns the current updated Color4 object
     */
    copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        this.a = source.a;
        return this;
    }
    /**
     * Copies the given float values into the current one
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @param a defines the alpha component to read from
     * @returns the current updated Color4 object
     */
    copyFromFloats(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }
    /**
     * Copies the given float values into the current one
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @param a defines the alpha component to read from
     * @returns the current updated Color4 object
     */
    set(r, g, b, a) {
        return this.copyFromFloats(r, g, b, a);
    }
    /**
     * Compute the Color4 hexadecimal code as a string
     * @param returnAsColor3 defines if the string should only contains RGB values (off by default)
     * @returns a string containing the hexadecimal representation of the Color4 object
     */
    toHexString(returnAsColor3 = false) {
        var intR = (this.r * 255) | 0;
        var intG = (this.g * 255) | 0;
        var intB = (this.b * 255) | 0;
        if (returnAsColor3) {
            return "#" + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intR) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intG) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intB);
        }
        var intA = (this.a * 255) | 0;
        return "#" + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intR) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intG) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intB) + _math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].ToHex(intA);
    }
    /**
     * Computes a new Color4 converted from the current one to linear space
     * @returns a new Color4 object
     */
    toLinearSpace() {
        var convertedColor = new Color4();
        this.toLinearSpaceToRef(convertedColor);
        return convertedColor;
    }
    /**
     * Converts the Color4 values to linear space and stores the result in "convertedColor"
     * @param convertedColor defines the Color4 object where to store the linear space version
     * @returns the unmodified Color4
     */
    toLinearSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        convertedColor.g = Math.pow(this.g, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        convertedColor.b = Math.pow(this.b, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToLinearSpace"]);
        convertedColor.a = this.a;
        return this;
    }
    /**
     * Computes a new Color4 converted from the current one to gamma space
     * @returns a new Color4 object
     */
    toGammaSpace() {
        var convertedColor = new Color4();
        this.toGammaSpaceToRef(convertedColor);
        return convertedColor;
    }
    /**
     * Converts the Color4 values to gamma space and stores the result in "convertedColor"
     * @param convertedColor defines the Color4 object where to store the gamma space version
     * @returns the unmodified Color4
     */
    toGammaSpaceToRef(convertedColor) {
        convertedColor.r = Math.pow(this.r, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        convertedColor.g = Math.pow(this.g, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        convertedColor.b = Math.pow(this.b, _math_constants__WEBPACK_IMPORTED_MODULE_1__["ToGammaSpace"]);
        convertedColor.a = this.a;
        return this;
    }
    // Statics
    /**
     * Creates a new Color4 from the string containing valid hexadecimal values
     * @param hex defines a string containing valid hexadecimal values
     * @returns a new Color4 object
     */
    static FromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 9) {
            return new Color4(0.0, 0.0, 0.0, 0.0);
        }
        var r = parseInt(hex.substring(1, 3), 16);
        var g = parseInt(hex.substring(3, 5), 16);
        var b = parseInt(hex.substring(5, 7), 16);
        var a = parseInt(hex.substring(7, 9), 16);
        return Color4.FromInts(r, g, b, a);
    }
    /**
     * Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @returns a new Color4 object
     */
    static Lerp(left, right, amount) {
        var result = new Color4(0.0, 0.0, 0.0, 0.0);
        Color4.LerpToRef(left, right, amount, result);
        return result;
    }
    /**
     * Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @param result defines the Color4 object where to store data
     */
    static LerpToRef(left, right, amount, result) {
        result.r = left.r + (right.r - left.r) * amount;
        result.g = left.g + (right.g - left.g) * amount;
        result.b = left.b + (right.b - left.b) * amount;
        result.a = left.a + (right.a - left.a) * amount;
    }
    /**
     * Creates a new Color4 from a Color3 and an alpha value
     * @param color3 defines the source Color3 to read from
     * @param alpha defines the alpha component (1.0 by default)
     * @returns a new Color4 object
     */
    static FromColor3(color3, alpha = 1.0) {
        return new Color4(color3.r, color3.g, color3.b, alpha);
    }
    /**
     * Creates a new Color4 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @returns a new Color4 object
     */
    static FromArray(array, offset = 0) {
        return new Color4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }
    /**
     * Creates a new Color4 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @param result defines the target Color4 object
     */
    static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
        result.a = array[offset + 3];
    }
    /**
     * Creates a new Color3 from integer values (< 256)
     * @param r defines the red component to read from (value between 0 and 255)
     * @param g defines the green component to read from (value between 0 and 255)
     * @param b defines the blue component to read from (value between 0 and 255)
     * @param a defines the alpha component to read from (value between 0 and 255)
     * @returns a new Color3 object
     */
    static FromInts(r, g, b, a) {
        return new Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
    }
    /**
     * Check the content of a given array and convert it to an array containing RGBA data
     * If the original array was already containing count * 4 values then it is returned directly
     * @param colors defines the array to check
     * @param count defines the number of RGBA data to expect
     * @returns an array containing count * 4 values (RGBA)
     */
    static CheckColors4(colors, count) {
        // Check if color3 was used
        if (colors.length === count * 3) {
            var colors4 = [];
            for (var index = 0; index < colors.length; index += 3) {
                var newIndex = (index / 3) * 4;
                colors4[newIndex] = colors[index];
                colors4[newIndex + 1] = colors[index + 1];
                colors4[newIndex + 2] = colors[index + 2];
                colors4[newIndex + 3] = 1.0;
            }
            return colors4;
        }
        return colors;
    }
}
/**
 * @hidden
 */
class TmpColors {
}
TmpColors.Color3 = _misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__["ArrayTools"].BuildArray(3, Color3.Black);
TmpColors.Color4 = _misc_arrayTools__WEBPACK_IMPORTED_MODULE_2__["ArrayTools"].BuildArray(3, () => new Color4(0, 0, 0, 0));
_misc_typeStore__WEBPACK_IMPORTED_MODULE_3__["_TypeStore"].RegisteredTypes["BABYLON.Color3"] = Color3;
_misc_typeStore__WEBPACK_IMPORTED_MODULE_3__["_TypeStore"].RegisteredTypes["BABYLON.Color4"] = Color4;


/***/ }),

/***/ "./src/maths/math.constants.ts":
/*!*************************************!*\
  !*** ./src/maths/math.constants.ts ***!
  \*************************************/
/*! exports provided: ToGammaSpace, ToLinearSpace, DEG2RAD, RAD2DEG, Epsilon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToGammaSpace", function() { return ToGammaSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToLinearSpace", function() { return ToLinearSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEG2RAD", function() { return DEG2RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAD2DEG", function() { return RAD2DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Epsilon", function() { return Epsilon; });
/**
 * Constant used to convert a value to gamma space
 * @ignorenaming
 */
const ToGammaSpace = 1 / 2.2;
/**
 * Constant used to convert a value to linear space
 * @ignorenaming
 */
const ToLinearSpace = 2.2;
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
/**
 * Constant used to define the minimal number value in Babylon.js
 * @ignorenaming
 */
let Epsilon = 0.001;



/***/ }),

/***/ "./src/maths/math.euler.ts":
/*!*********************************!*\
  !*** ./src/maths/math.euler.ts ***!
  \*********************************/
/*! exports provided: Euler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return Euler; });
/* harmony import */ var _math_quat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.quat */ "./src/maths/math.quat.ts");
/* harmony import */ var _math_vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _math_mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.mat4 */ "./src/maths/math.mat4.ts");
/* harmony import */ var _math_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.tool */ "./src/maths/math.tool.ts");




const _matrix = /*@__PURE__*/ new _math_mat4__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
const _quaternion = /*@__PURE__*/ new _math_quat__WEBPACK_IMPORTED_MODULE_0__["Quat"]();
class Euler {
    constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
        this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
        this._onChangeCallback();
    }
    set(x, y, z, order = this._order) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._order = order;
        this._onChangeCallback();
        return this;
    }
    clone() {
        return new Euler(this._x, this._y, this._z, this._order);
    }
    copy(euler) {
        this._x = euler._x;
        this._y = euler._y;
        this._z = euler._z;
        this._order = euler._order;
        this._onChangeCallback();
        return this;
    }
    setFromRotationMatrix(m, order = this._order, update = true) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        const te = m.data;
        const m11 = te[0], m12 = te[4], m13 = te[8];
        const m21 = te[1], m22 = te[5], m23 = te[9];
        const m31 = te[2], m32 = te[6], m33 = te[10];
        switch (order) {
            case 'XYZ':
                this._y = Math.asin(_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m13, -1, 1));
                if (Math.abs(m13) < 0.9999999) {
                    this._x = Math.atan2(-m23, m33);
                    this._z = Math.atan2(-m12, m11);
                }
                else {
                    this._x = Math.atan2(m32, m22);
                    this._z = 0;
                }
                break;
            case 'YXZ':
                this._x = Math.asin(-_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m23, -1, 1));
                if (Math.abs(m23) < 0.9999999) {
                    this._y = Math.atan2(m13, m33);
                    this._z = Math.atan2(m21, m22);
                }
                else {
                    this._y = Math.atan2(-m31, m11);
                    this._z = 0;
                }
                break;
            case 'ZXY':
                this._x = Math.asin(_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m32, -1, 1));
                if (Math.abs(m32) < 0.9999999) {
                    this._y = Math.atan2(-m31, m33);
                    this._z = Math.atan2(-m12, m22);
                }
                else {
                    this._y = 0;
                    this._z = Math.atan2(m21, m11);
                }
                break;
            case 'ZYX':
                this._y = Math.asin(-_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m31, -1, 1));
                if (Math.abs(m31) < 0.9999999) {
                    this._x = Math.atan2(m32, m33);
                    this._z = Math.atan2(m21, m11);
                }
                else {
                    this._x = 0;
                    this._z = Math.atan2(-m12, m22);
                }
                break;
            case 'YZX':
                this._z = Math.asin(_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m21, -1, 1));
                if (Math.abs(m21) < 0.9999999) {
                    this._x = Math.atan2(-m23, m22);
                    this._y = Math.atan2(-m31, m11);
                }
                else {
                    this._x = 0;
                    this._y = Math.atan2(m13, m33);
                }
                break;
            case 'XZY':
                this._z = Math.asin(-_math_tool__WEBPACK_IMPORTED_MODULE_3__["MathTool"].clamp(m12, -1, 1));
                if (Math.abs(m12) < 0.9999999) {
                    this._x = Math.atan2(m32, m22);
                    this._y = Math.atan2(m13, m11);
                }
                else {
                    this._x = Math.atan2(-m23, m33);
                    this._y = 0;
                }
                break;
            default:
                console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order);
        }
        this._order = order;
        if (update === true)
            this._onChangeCallback();
        return this;
    }
    setFromQuaternion(q, order, update) {
        _matrix.makeRotationFromQuaternion(q);
        return this.setFromRotationMatrix(_matrix, order, update);
    }
    setFromVector3(v, order = this._order) {
        return this.set(v.x, v.y, v.z, order);
    }
    reorder(newOrder) {
        // WARNING: this discards revolution information -bhouston
        _quaternion.setFromEuler(this);
        return this.setFromQuaternion(_quaternion, newOrder);
    }
    equals(euler) {
        return (euler._x === this._x) && (euler._y === this._y) && (euler._z === this._z) && (euler._order === this._order);
    }
    fromArray(array) {
        this._x = array[0];
        this._y = array[1];
        this._z = array[2];
        if (array[3] !== undefined)
            this._order = array[3];
        this._onChangeCallback();
        return this;
    }
    toArray(array, offset = 0) {
        array[offset] = this._x;
        array[offset + 1] = this._y;
        array[offset + 2] = this._z;
        array[offset + 3] = this._order;
        return array;
    }
    toVector3(optionalResult) {
        if (optionalResult) {
            return optionalResult.set(this._x, this._y, this._z);
        }
        else {
            return new _math_vec3__WEBPACK_IMPORTED_MODULE_1__["Vec3"](this._x, this._y, this._z);
        }
    }
    _onChange(callback) {
        this._onChangeCallback = callback;
        return this;
    }
    _onChangeCallback() { }
}
Euler.prototype.isEuler = true;
Euler.DefaultOrder = 'XYZ';
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];



/***/ }),

/***/ "./src/maths/math.mat3.ts":
/*!********************************!*\
  !*** ./src/maths/math.mat3.ts ***!
  \********************************/
/*! exports provided: Mat3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return Mat3; });
/* harmony import */ var _math_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.vec3 */ "./src/maths/math.vec3.ts");

/**
 * A 3x3 matrix.
 */
class Mat3 {
    /**
     * Create a new Mat3 instance. It is initialized to the identity matrix.
     */
    constructor() {
        // Create an identity matrix. Note that a new Float32Array has all elements set
        // to zero by default, so we only need to set the relevant elements to one.
        const data = new Float32Array(9);
        data[0] = data[4] = data[8] = 1;
        /**
         * Matrix elements in the form of a flat array.
         *
         * @type {Float32Array}
         */
        this.data = data;
    }
    invert() {
        const te = this.data, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
        if (det === 0)
            return this.set([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        const detInv = 1 / det;
        te[0] = t11 * detInv;
        te[1] = (n31 * n23 - n33 * n21) * detInv;
        te[2] = (n32 * n21 - n31 * n22) * detInv;
        te[3] = t12 * detInv;
        te[4] = (n33 * n11 - n31 * n13) * detInv;
        te[5] = (n31 * n12 - n32 * n11) * detInv;
        te[6] = t13 * detInv;
        te[7] = (n21 * n13 - n23 * n11) * detInv;
        te[8] = (n22 * n11 - n21 * n12) * detInv;
        return this;
    }
    setFromMatrix4(m) {
        const me = m.data;
        this.set([me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]]);
        return this;
    }
    /**
     * Creates a duplicate of the specified matrix.
     *
     * @returns {Mat3} A duplicate matrix.
     * @example
     * var src = new pc.Mat3().translate(10, 20, 30);
     * var dst = src.clone();
     * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
     */
    clone() {
        return new Mat3().copy(this);
    }
    /**
     * Copies the contents of a source 3x3 matrix to a destination 3x3 matrix.
     *
     * @param {Mat3} rhs - A 3x3 matrix to be copied.
     * @returns {Mat3} Self for chaining.
     * @example
     * var src = new pc.Mat3().translate(10, 20, 30);
     * var dst = new pc.Mat3();
     * dst.copy(src);
     * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
     */
    copy(rhs) {
        const src = rhs.data;
        const dst = this.data;
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
        dst[3] = src[3];
        dst[4] = src[4];
        dst[5] = src[5];
        dst[6] = src[6];
        dst[7] = src[7];
        dst[8] = src[8];
        return this;
    }
    /**
     * Copies the contents of a source array[9] to a destination 3x3 matrix.
     *
     * @param {number[]} src - An array[9] to be copied.
     * @returns {Mat3} Self for chaining.
     * @example
     * var dst = new pc.Mat3();
     * dst.set([0, 1, 2, 3, 4, 5, 6, 7, 8]);
     */
    set(src) {
        const dst = this.data;
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
        dst[3] = src[3];
        dst[4] = src[4];
        dst[5] = src[5];
        dst[6] = src[6];
        dst[7] = src[7];
        dst[8] = src[8];
        return this;
    }
    /**
     * Reports whether two matrices are equal.
     *
     * @param {Mat3} rhs - The other matrix.
     * @returns {boolean} True if the matrices are equal and false otherwise.
     * @example
     * var a = new pc.Mat3().translate(10, 20, 30);
     * var b = new pc.Mat3();
     * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs) {
        const l = this.data;
        const r = rhs.data;
        return l[0] === r[0] && l[1] === r[1] && l[2] === r[2] && l[3] === r[3] && l[4] === r[4] && l[5] === r[5] && l[6] === r[6] && l[7] === r[7] && l[8] === r[8];
    }
    /**
     * Reports whether the specified matrix is the identity matrix.
     *
     * @returns {boolean} True if the matrix is identity and false otherwise.
     * @example
     * var m = new pc.Mat3();
     * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
     */
    isIdentity() {
        const m = this.data;
        return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 0 && m[4] === 1 && m[5] === 0 && m[6] === 0 && m[7] === 0 && m[8] === 1;
    }
    /**
     * Sets the matrix to the identity matrix.
     *
     * @returns {Mat3} Self for chaining.
     * @example
     * m.setIdentity();
     * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
     */
    setIdentity() {
        const m = this.data;
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 1;
        m[5] = 0;
        m[6] = 0;
        m[7] = 0;
        m[8] = 1;
        return this;
    }
    /**
     * Converts the matrix to string form.
     *
     * @returns {string} The matrix in string form.
     * @example
     * var m = new pc.Mat3();
     * // Outputs [1, 0, 0, 0, 1, 0, 0, 0, 1]
     * console.log(m.toString());
     */
    toString() {
        let t = "[";
        for (let i = 0; i < 9; i++) {
            t += this.data[i];
            t += i !== 8 ? ", " : "";
        }
        t += "]";
        return t;
    }
    /**
     * Generates the transpose of the specified 3x3 matrix.
     *
     * @returns {Mat3} Self for chaining.
     * @example
     * var m = new pc.Mat3();
     *
     * // Transpose in place
     * m.transpose();
     */
    transpose() {
        const m = this.data;
        let tmp;
        tmp = m[1];
        m[1] = m[3];
        m[3] = tmp;
        tmp = m[2];
        m[2] = m[6];
        m[6] = tmp;
        tmp = m[5];
        m[5] = m[7];
        m[7] = tmp;
        return this;
    }
    /**
     * Converts the specified 4x4 matrix to a Mat3.
     *
     * @param {Mat4} m - The 4x4 matrix to convert.
     * @returns {Mat3} Self for chaining.
     */
    setFromMat4(m) {
        const src = m.data;
        const dst = this.data;
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
        dst[3] = src[4];
        dst[4] = src[5];
        dst[5] = src[6];
        dst[6] = src[8];
        dst[7] = src[9];
        dst[8] = src[10];
        return this;
    }
    /**
     * Transforms a 3-dimensional vector by a 3x3 matrix.
     *
     * @param {Vec3} vec - The 3-dimensional vector to be transformed.
     * @param {Vec3} [res] - An optional 3-dimensional vector to receive the result of the
     * transformation.
     * @returns {Vec3} The input vector v transformed by the current instance.
     */
    transformVector(vec, res = new _math_vec3__WEBPACK_IMPORTED_MODULE_0__["Vec3"]()) {
        const m = this.data;
        const x = vec.x;
        const y = vec.y;
        const z = vec.z;
        res.x = x * m[0] + y * m[3] + z * m[6];
        res.y = x * m[1] + y * m[4] + z * m[7];
        res.z = x * m[2] + y * m[5] + z * m[8];
        return res;
    }
    getNormalMatrix(matrix4) {
        return this.setFromMatrix4(matrix4).invert().transpose();
    }
}
/**
 * A constant matrix set to the identity.
 *
 * @type {Mat3}
 * @readonly
 */
Mat3.IDENTITY = Object.freeze(new Mat3());
/**
 * A constant matrix with all elements set to 0.
 *
 * @type {Mat3}
 * @readonly
 */
Mat3.ZERO = Object.freeze(new Mat3().set([0, 0, 0, 0, 0, 0, 0, 0, 0]));



/***/ }),

/***/ "./src/maths/math.mat4.ts":
/*!********************************!*\
  !*** ./src/maths/math.mat4.ts ***!
  \********************************/
/*! exports provided: Mat4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return Mat4; });
/* harmony import */ var _math_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _math_vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.vec2 */ "./src/maths/math.vec2.ts");
/* harmony import */ var _math_vec3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _math_vec4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.vec4 */ "./src/maths/math.vec4.ts");
/** @typedef {import('./quat.js').Quat} Quat */




const _halfSize = new _math_vec2__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
const x = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
const y = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
const z = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
const scale = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
const _v1 = /*@__PURE__*/ new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
let MatType = Float32Array;
/**
 * A 4x4 matrix.
 */
class Mat4 {
    /**
     * Create a new Mat4 instance. It is initialized to the identity matrix.
     */
    constructor() {
        // Create an identity matrix. Note that a new Float32Array has all elements set
        // to zero by default, so we only need to set the relevant elements to one.
        const data = new Float32Array(16);
        data[0] = data[5] = data[10] = data[15] = 1;
        /**
         * Matrix elements in the form of a flat array.
         *
         * @type {Float32Array}
         */
        this.data = data;
    }
    // 左手坐标系
    makePerspectiveLH(left, right, top, bottom, near, far) {
        if (far === undefined) {
            console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        }
        const te = this.data;
        const x = (2 * near) / (right - left);
        const y = (2 * near) / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = (far + near) / (far - near);
        const d = (-2 * far * near) / (far - near);
        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = 1;
        te[15] = 0;
        return this;
    }
    // 右手坐标系
    makePerspectiveRH(left, right, top, bottom, near, far) {
        if (far === undefined) {
            console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        }
        var te = this.data;
        const x = (2 * near) / (right - left);
        const y = (2 * near) / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = -(far + near) / (far - near);
        const d = (-2 * far * near) / (far - near);
        te[0] = x;
        te[4] = 0;
        te[8] = a;
        te[12] = 0;
        te[1] = 0;
        te[5] = y;
        te[9] = b;
        te[13] = 0;
        te[2] = 0;
        te[6] = 0;
        te[10] = c;
        te[14] = d;
        te[3] = 0;
        te[7] = 0;
        te[11] = -1;
        te[15] = 0;
        return this;
    }
    makeRotationFromQuaternion(q) {
        return this.compose(_zero, q, _one);
    }
    // Static function which evaluates perspective projection matrix half size at the near plane
    static _getPerspectiveHalfSize(halfSize, fov, aspect, znear, fovIsHorizontal) {
        if (fovIsHorizontal) {
            halfSize.x = znear * Math.tan((fov * Math.PI) / 360);
            halfSize.y = halfSize.x / aspect;
        }
        else {
            halfSize.y = znear * Math.tan((fov * Math.PI) / 360);
            halfSize.x = halfSize.y * aspect;
        }
    }
    /**
     * Adds the specified 4x4 matrices together and stores the result in the current instance.
     *
     * @param {Mat4} lhs - The 4x4 matrix used as the first operand of the addition.
     * @param {Mat4} rhs - The 4x4 matrix used as the second operand of the addition.
     * @returns {Mat4} Self for chaining.
     * @example
     * var m = new pc.Mat4();
     *
     * m.add2(pc.Mat4.IDENTITY, pc.Mat4.ONE);
     *
     * console.log("The result of the addition is: " + m.toString());
     */
    add2(lhs, rhs) {
        const a = lhs.data, b = rhs.data, r = this.data;
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        r[2] = a[2] + b[2];
        r[3] = a[3] + b[3];
        r[4] = a[4] + b[4];
        r[5] = a[5] + b[5];
        r[6] = a[6] + b[6];
        r[7] = a[7] + b[7];
        r[8] = a[8] + b[8];
        r[9] = a[9] + b[9];
        r[10] = a[10] + b[10];
        r[11] = a[11] + b[11];
        r[12] = a[12] + b[12];
        r[13] = a[13] + b[13];
        r[14] = a[14] + b[14];
        r[15] = a[15] + b[15];
        return this;
    }
    /**
     * Adds the specified 4x4 matrix to the current instance.
     *
     * @param {Mat4} rhs - The 4x4 matrix used as the second operand of the addition.
     * @returns {Mat4} Self for chaining.
     * @example
     * var m = new pc.Mat4();
     *
     * m.add(pc.Mat4.ONE);
     *
     * console.log("The result of the addition is: " + m.toString());
     */
    add(rhs) {
        return this.add2(this, rhs);
    }
    /**
     * Creates a duplicate of the specified matrix.
     *
     * @returns {Mat4} A duplicate matrix.
     * @example
     * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     * var dst = src.clone();
     * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
     */
    clone() {
        return new Mat4().copy(this);
    }
    /**
     * Copies the contents of a source 4x4 matrix to a destination 4x4 matrix.
     *
     * @param {Mat4} rhs - A 4x4 matrix to be copied.
     * @returns {Mat4} Self for chaining.
     * @example
     * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     * var dst = new pc.Mat4();
     * dst.copy(src);
     * console.log("The two matrices are " + (src.equals(dst) ? "equal" : "different"));
     */
    copy(rhs) {
        const src = rhs.data, dst = this.data;
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
        dst[3] = src[3];
        dst[4] = src[4];
        dst[5] = src[5];
        dst[6] = src[6];
        dst[7] = src[7];
        dst[8] = src[8];
        dst[9] = src[9];
        dst[10] = src[10];
        dst[11] = src[11];
        dst[12] = src[12];
        dst[13] = src[13];
        dst[14] = src[14];
        dst[15] = src[15];
        return this;
    }
    /**
     * Reports whether two matrices are equal.
     *
     * @param {Mat4} rhs - The other matrix.
     * @returns {boolean} True if the matrices are equal and false otherwise.
     * @example
     * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     * var b = new pc.Mat4();
     * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs) {
        const l = this.data, r = rhs.data;
        return (l[0] === r[0] &&
            l[1] === r[1] &&
            l[2] === r[2] &&
            l[3] === r[3] &&
            l[4] === r[4] &&
            l[5] === r[5] &&
            l[6] === r[6] &&
            l[7] === r[7] &&
            l[8] === r[8] &&
            l[9] === r[9] &&
            l[10] === r[10] &&
            l[11] === r[11] &&
            l[12] === r[12] &&
            l[13] === r[13] &&
            l[14] === r[14] &&
            l[15] === r[15]);
    }
    /**
     * Reports whether the specified matrix is the identity matrix.
     *
     * @returns {boolean} True if the matrix is identity and false otherwise.
     * @example
     * var m = new pc.Mat4();
     * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
     */
    isIdentity() {
        const m = this.data;
        return (m[0] === 1 &&
            m[1] === 0 &&
            m[2] === 0 &&
            m[3] === 0 &&
            m[4] === 0 &&
            m[5] === 1 &&
            m[6] === 0 &&
            m[7] === 0 &&
            m[8] === 0 &&
            m[9] === 0 &&
            m[10] === 1 &&
            m[11] === 0 &&
            m[12] === 0 &&
            m[13] === 0 &&
            m[14] === 0 &&
            m[15] === 1);
    }
    /**
     * Multiplies the specified 4x4 matrices together and stores the result in the current
     * instance.
     *
     * @param {Mat4} lhs - The 4x4 matrix used as the first multiplicand of the operation.
     * @param {Mat4} rhs - The 4x4 matrix used as the second multiplicand of the operation.
     * @returns {Mat4} Self for chaining.
     * @example
     * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
     * var r = new pc.Mat4();
     *
     * // r = a * b
     * r.mul2(a, b);
     *
     * console.log("The result of the multiplication is: " + r.toString());
     */
    mul2(lhs, rhs) {
        const a = lhs.data;
        const b = rhs.data;
        const r = this.data;
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a03 = a[3];
        const a10 = a[4];
        const a11 = a[5];
        const a12 = a[6];
        const a13 = a[7];
        const a20 = a[8];
        const a21 = a[9];
        const a22 = a[10];
        const a23 = a[11];
        const a30 = a[12];
        const a31 = a[13];
        const a32 = a[14];
        const a33 = a[15];
        let b0, b1, b2, b3;
        b0 = b[0];
        b1 = b[1];
        b2 = b[2];
        b3 = b[3];
        r[0] = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
        r[1] = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
        r[2] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
        r[3] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        r[4] = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
        r[5] = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
        r[6] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
        r[7] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        r[8] = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
        r[9] = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
        r[10] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
        r[11] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        r[12] = a00 * b0 + a10 * b1 + a20 * b2 + a30 * b3;
        r[13] = a01 * b0 + a11 * b1 + a21 * b2 + a31 * b3;
        r[14] = a02 * b0 + a12 * b1 + a22 * b2 + a32 * b3;
        r[15] = a03 * b0 + a13 * b1 + a23 * b2 + a33 * b3;
        return this;
    }
    /**
     * Multiplies the specified 4x4 matrices together and stores the result in the current
     * instance. This function assumes the matrices are affine transformation matrices, where the
     * upper left 3x3 elements are a rotation matrix, and the bottom left 3 elements are
     * translation. The rightmost column is assumed to be [0, 0, 0, 1]. The parameters are not
     * verified to be in the expected format. This function is faster than general
     * {@link Mat4#mul2}.
     *
     * @param {Mat4} lhs - The affine transformation 4x4 matrix used as the first multiplicand of
     * the operation.
     * @param {Mat4} rhs - The affine transformation 4x4 matrix used as the second multiplicand of
     * the operation.
     * @returns {Mat4} Self for chaining.
     */
    mulAffine2(lhs, rhs) {
        const a = lhs.data;
        const b = rhs.data;
        const r = this.data;
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a10 = a[4];
        const a11 = a[5];
        const a12 = a[6];
        const a20 = a[8];
        const a21 = a[9];
        const a22 = a[10];
        const a30 = a[12];
        const a31 = a[13];
        const a32 = a[14];
        let b0, b1, b2;
        b0 = b[0];
        b1 = b[1];
        b2 = b[2];
        r[0] = a00 * b0 + a10 * b1 + a20 * b2;
        r[1] = a01 * b0 + a11 * b1 + a21 * b2;
        r[2] = a02 * b0 + a12 * b1 + a22 * b2;
        r[3] = 0;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        r[4] = a00 * b0 + a10 * b1 + a20 * b2;
        r[5] = a01 * b0 + a11 * b1 + a21 * b2;
        r[6] = a02 * b0 + a12 * b1 + a22 * b2;
        r[7] = 0;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        r[8] = a00 * b0 + a10 * b1 + a20 * b2;
        r[9] = a01 * b0 + a11 * b1 + a21 * b2;
        r[10] = a02 * b0 + a12 * b1 + a22 * b2;
        r[11] = 0;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        r[12] = a00 * b0 + a10 * b1 + a20 * b2 + a30;
        r[13] = a01 * b0 + a11 * b1 + a21 * b2 + a31;
        r[14] = a02 * b0 + a12 * b1 + a22 * b2 + a32;
        r[15] = 1;
        return this;
    }
    /**
     * Multiplies the current instance by the specified 4x4 matrix.
     *
     * @param {Mat4} rhs - The 4x4 matrix used as the second multiplicand of the operation.
     * @returns {Mat4} Self for chaining.
     * @example
     * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
     *
     * // a = a * b
     * a.mul(b);
     *
     * console.log("The result of the multiplication is: " + a.toString());
     */
    mul(rhs) {
        return this.mul2(this, rhs);
    }
    /**
     * Transforms a 3-dimensional point by a 4x4 matrix.
     *
     * @param {Vec3} vec - The 3-dimensional point to be transformed.
     * @param {Vec3} [res] - An optional 3-dimensional point to receive the result of the
     * transformation.
     * @returns {Vec3} The input point v transformed by the current instance.
     * @example
     * // Create a 3-dimensional point
     * var v = new pc.Vec3(1, 2, 3);
     *
     * // Create a 4x4 rotation matrix
     * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     *
     * var tv = m.transformPoint(v);
     */
    transformPoint(vec, res = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        const m = this.data;
        const x = vec.x;
        const y = vec.y;
        const z = vec.z;
        res.x = x * m[0] + y * m[4] + z * m[8] + m[12];
        res.y = x * m[1] + y * m[5] + z * m[9] + m[13];
        res.z = x * m[2] + y * m[6] + z * m[10] + m[14];
        return res;
    }
    /**
     * Transforms a 3-dimensional vector by a 4x4 matrix.
     *
     * @param {Vec3} vec - The 3-dimensional vector to be transformed.
     * @param {Vec3} [res] - An optional 3-dimensional vector to receive the result of the
     * transformation.
     * @returns {Vec3} The input vector v transformed by the current instance.
     * @example
     * // Create a 3-dimensional vector
     * var v = new pc.Vec3(1, 2, 3);
     *
     * // Create a 4x4 rotation matrix
     * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     *
     * var tv = m.transformVector(v);
     */
    transformVector(vec, res = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        const m = this.data;
        const x = vec.x;
        const y = vec.y;
        const z = vec.z;
        res.x = x * m[0] + y * m[4] + z * m[8];
        res.y = x * m[1] + y * m[5] + z * m[9];
        res.z = x * m[2] + y * m[6] + z * m[10];
        return res;
    }
    /**
     * Transforms a 4-dimensional vector by a 4x4 matrix.
     *
     * @param {Vec4} vec - The 4-dimensional vector to be transformed.
     * @param {Vec4} [res] - An optional 4-dimensional vector to receive the result of the
     * transformation.
     * @returns {Vec4} The input vector v transformed by the current instance.
     * @example
     * // Create an input 4-dimensional vector
     * var v = new pc.Vec4(1, 2, 3, 4);
     *
     * // Create an output 4-dimensional vector
     * var result = new pc.Vec4();
     *
     * // Create a 4x4 rotation matrix
     * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
     *
     * m.transformVec4(v, result);
     */
    transformVec4(vec, res = new _math_vec4__WEBPACK_IMPORTED_MODULE_3__["Vec4"]()) {
        const m = this.data;
        const x = vec.x;
        const y = vec.y;
        const z = vec.z;
        const w = vec.w;
        res.x = x * m[0] + y * m[4] + z * m[8] + w * m[12];
        res.y = x * m[1] + y * m[5] + z * m[9] + w * m[13];
        res.z = x * m[2] + y * m[6] + z * m[10] + w * m[14];
        res.w = x * m[3] + y * m[7] + z * m[11] + w * m[15];
        return res;
    }
    /**
     * Sets the specified matrix to a viewing matrix derived from an eye point, a target point and
     * an up vector. The matrix maps the target point to the negative z-axis and the eye point to
     * the origin, so that when you use a typical projection matrix, the center of the scene maps
     * to the center of the viewport. Similarly, the direction described by the up vector projected
     * onto the viewing plane is mapped to the positive y-axis so that it points upward in the
     * viewport. The up vector must not be parallel to the line of sight from the eye to the
     * reference point.
     *
     * @param {Vec3} position - 3-d vector holding view position.
     * @param {Vec3} target - 3-d vector holding reference point.
     * @param {Vec3} up - 3-d vector holding the up direction.
     * @returns {Mat4} Self for chaining.
     * @example
     * var position = new pc.Vec3(10, 10, 10);
     * var target = new pc.Vec3(0, 0, 0);
     * var up = new pc.Vec3(0, 1, 0);
     * var m = new pc.Mat4().setLookAt(position, target, up);
     */
    setLookAt(position, target, up) {
        z.sub2(position, target).normalize();
        y.copy(up).normalize();
        x.cross(y, z).normalize();
        y.cross(z, x);
        const r = this.data;
        r[0] = x.x;
        r[1] = x.y;
        r[2] = x.z;
        r[3] = 0;
        r[4] = y.x;
        r[5] = y.y;
        r[6] = y.z;
        r[7] = 0;
        r[8] = z.x;
        r[9] = z.y;
        r[10] = z.z;
        r[11] = 0;
        r[12] = position.x;
        r[13] = position.y;
        r[14] = position.z;
        r[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to a perspective projection matrix. The function's parameters
     * define the shape of a frustum.
     *
     * @param {number} left - The x-coordinate for the left edge of the camera's projection plane
     * in eye space.
     * @param {number} right - The x-coordinate for the right edge of the camera's projection plane
     * in eye space.
     * @param {number} bottom - The y-coordinate for the bottom edge of the camera's projection
     * plane in eye space.
     * @param {number} top - The y-coordinate for the top edge of the camera's projection plane in
     * eye space.
     * @param {number} znear - The near clip plane in eye coordinates.
     * @param {number} zfar - The far clip plane in eye coordinates.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 perspective projection matrix
     * var f = pc.Mat4().setFrustum(-2, 2, -1, 1, 1, 1000);
     * @ignore
     */
    setFrustum(left, right, bottom, top, znear, zfar) {
        const temp1 = 2 * znear;
        const temp2 = right - left;
        const temp3 = top - bottom;
        const temp4 = zfar - znear;
        const r = this.data;
        r[0] = temp1 / temp2;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = temp1 / temp3;
        r[6] = 0;
        r[7] = 0;
        r[8] = (right + left) / temp2;
        r[9] = (top + bottom) / temp3;
        r[10] = (-zfar - znear) / temp4;
        r[11] = -1;
        r[12] = 0;
        r[13] = 0;
        r[14] = (-temp1 * zfar) / temp4;
        r[15] = 0;
        return this;
    }
    /**
     * Sets the specified matrix to a perspective projection matrix. The function's parameters
     * define the shape of a frustum.
     *
     * @param {number} fov - The frustum's field of view in degrees. The fovIsHorizontal parameter
     * controls whether this is a vertical or horizontal field of view. By default, it's a vertical
     * field of view.
     * @param {number} aspect - The aspect ratio of the frustum's projection plane
     * (width / height).
     * @param {number} znear - The near clip plane in eye coordinates.
     * @param {number} zfar - The far clip plane in eye coordinates.
     * @param {boolean} [fovIsHorizontal=false] - Set to true to treat the fov as horizontal
     * (x-axis) and false for vertical (y-axis). Defaults to false.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 perspective projection matrix
     * var persp = pc.Mat4().setPerspective(45, 16 / 9, 1, 1000);
     */
    setPerspective(fov, aspect, znear, zfar, fovIsHorizontal) {
        Mat4._getPerspectiveHalfSize(_halfSize, fov, aspect, znear, fovIsHorizontal);
        return this.setFrustum(-_halfSize.x, _halfSize.x, -_halfSize.y, _halfSize.y, znear, zfar);
    }
    /**
     * Sets the specified matrix to an orthographic projection matrix. The function's parameters
     * define the shape of a cuboid-shaped frustum.
     *
     * @param {number} left - The x-coordinate for the left edge of the camera's projection plane
     * in eye space.
     * @param {number} right - The x-coordinate for the right edge of the camera's projection plane
     * in eye space.
     * @param {number} bottom - The y-coordinate for the bottom edge of the camera's projection
     * plane in eye space.
     * @param {number} top - The y-coordinate for the top edge of the camera's projection plane in
     * eye space.
     * @param {number} near - The near clip plane in eye coordinates.
     * @param {number} far - The far clip plane in eye coordinates.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 orthographic projection matrix
     * var ortho = pc.Mat4().ortho(-2, 2, -2, 2, 1, 1000);
     */
    setOrtho(left, right, bottom, top, near, far) {
        const r = this.data;
        r[0] = 2 / (right - left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2 / (top - bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = -2 / (far - near);
        r[11] = 0;
        r[12] = -(right + left) / (right - left);
        r[13] = -(top + bottom) / (top - bottom);
        r[14] = -(far + near) / (far - near);
        r[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to a rotation matrix equivalent to a rotation around an axis. The
     * axis must be normalized (unit length) and the angle must be specified in 弧度.
     *
     * @param {Vec3} axis - The normalized axis vector around which to rotate.
     * @param {number} angle - The angle of rotation in 弧度.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 rotation matrix
     * var rm = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, Math.PI/4);
     */
    setFromAxisAngle(axis, angle) {
        const x = axis.x;
        const y = axis.y;
        const z = axis.z;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const t = 1 - c;
        const tx = t * x;
        const ty = t * y;
        const m = this.data;
        m[0] = tx * x + c;
        m[1] = tx * y + s * z;
        m[2] = tx * z - s * y;
        m[3] = 0;
        m[4] = tx * y - s * z;
        m[5] = ty * y + c;
        m[6] = ty * z + s * x;
        m[7] = 0;
        m[8] = tx * z + s * y;
        m[9] = ty * z - x * s;
        m[10] = t * z * z + c;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to a translation matrix.
     *
     * @param {number} x - The x-component of the translation.
     * @param {number} y - The y-component of the translation.
     * @param {number} z - The z-component of the translation.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 translation matrix
     * var tm = new pc.Mat4().setTranslate(10, 10, 10);
     * @ignore
     */
    setTranslate(x, y, z) {
        const m = this.data;
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = 1;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = 1;
        m[11] = 0;
        m[12] = x;
        m[13] = y;
        m[14] = z;
        m[15] = 1;
        return this;
    }
    static SetTranslate(x, y, z, dist) {
        const m = dist;
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = 1;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = 1;
        m[11] = 0;
        m[12] = x;
        m[13] = y;
        m[14] = z;
        m[15] = 1;
    }
    /**
     * Multiply by an x rotation matrix
     * @param {Matrix4} m matrix to multiply
     * @param {number} angleInRadians amount to rotate
     * @param {Matrix4} [dst] optional matrix to store result
     * @return {Matrix4} dst or a new matrix if none provided
     * @memberOf module:webgl-3d-math
     */
    static XRotate(m, angleInRadians, dst) {
        // this is the optimized version of
        // return multiply(m, xRotation(angleInRadians), dst);
        dst = dst || new MatType(16);
        var m10 = m[4];
        var m11 = m[5];
        var m12 = m[6];
        var m13 = m[7];
        var m20 = m[8];
        var m21 = m[9];
        var m22 = m[10];
        var m23 = m[11];
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        dst[4] = c * m10 + s * m20;
        dst[5] = c * m11 + s * m21;
        dst[6] = c * m12 + s * m22;
        dst[7] = c * m13 + s * m23;
        dst[8] = c * m20 - s * m10;
        dst[9] = c * m21 - s * m11;
        dst[10] = c * m22 - s * m12;
        dst[11] = c * m23 - s * m13;
        if (m !== dst) {
            dst[0] = m[0];
            dst[1] = m[1];
            dst[2] = m[2];
            dst[3] = m[3];
            dst[12] = m[12];
            dst[13] = m[13];
            dst[14] = m[14];
            dst[15] = m[15];
        }
        return dst;
    }
    /**
     * Multiply by an y rotation matrix
     * @param {Matrix4} m matrix to multiply
     * @param {number} angleInRadians amount to rotate
     * @param {Matrix4} [dst] optional matrix to store result
     * @return {Matrix4} dst or a new matrix if none provided
     * @memberOf module:webgl-3d-math
     */
    static YRotate(m, angleInRadians, dst) {
        // this is the optimized version of
        // return multiply(m, yRotation(angleInRadians), dst);
        dst = dst || new MatType(16);
        var m00 = m[0 * 4 + 0];
        var m01 = m[0 * 4 + 1];
        var m02 = m[0 * 4 + 2];
        var m03 = m[0 * 4 + 3];
        var m20 = m[2 * 4 + 0];
        var m21 = m[2 * 4 + 1];
        var m22 = m[2 * 4 + 2];
        var m23 = m[2 * 4 + 3];
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        dst[0] = c * m00 - s * m20;
        dst[1] = c * m01 - s * m21;
        dst[2] = c * m02 - s * m22;
        dst[3] = c * m03 - s * m23;
        dst[8] = c * m20 + s * m00;
        dst[9] = c * m21 + s * m01;
        dst[10] = c * m22 + s * m02;
        dst[11] = c * m23 + s * m03;
        if (m !== dst) {
            dst[4] = m[4];
            dst[5] = m[5];
            dst[6] = m[6];
            dst[7] = m[7];
            dst[12] = m[12];
            dst[13] = m[13];
            dst[14] = m[14];
            dst[15] = m[15];
        }
        return dst;
    }
    /**
     * Multiply by an z rotation matrix
     * @param {Matrix4} m matrix to multiply
     * @param {number} angleInRadians amount to rotate
     * @param {Matrix4} [dst] optional matrix to store result
     * @return {Matrix4} dst or a new matrix if none provided
     * @memberOf module:webgl-3d-math
     */
    static ZRotate(m, angleInRadians, dst) {
        // This is the optimized version of
        // return multiply(m, zRotation(angleInRadians), dst);
        dst = dst || new MatType(16);
        var m00 = m[0 * 4 + 0];
        var m01 = m[0 * 4 + 1];
        var m02 = m[0 * 4 + 2];
        var m03 = m[0 * 4 + 3];
        var m10 = m[1 * 4 + 0];
        var m11 = m[1 * 4 + 1];
        var m12 = m[1 * 4 + 2];
        var m13 = m[1 * 4 + 3];
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        dst[0] = c * m00 + s * m10;
        dst[1] = c * m01 + s * m11;
        dst[2] = c * m02 + s * m12;
        dst[3] = c * m03 + s * m13;
        dst[4] = c * m10 - s * m00;
        dst[5] = c * m11 - s * m01;
        dst[6] = c * m12 - s * m02;
        dst[7] = c * m13 - s * m03;
        if (m !== dst) {
            dst[8] = m[8];
            dst[9] = m[9];
            dst[10] = m[10];
            dst[11] = m[11];
            dst[12] = m[12];
            dst[13] = m[13];
            dst[14] = m[14];
            dst[15] = m[15];
        }
        return dst;
    }
    /**
     * Sets the specified matrix to a scale matrix.
     *
     * @param {number} x - The x-component of the scale.
     * @param {number} y - The y-component of the scale.
     * @param {number} z - The z-component of the scale.
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 scale matrix
     * var sm = new pc.Mat4().setScale(10, 10, 10);
     * @ignore
     */
    setScale(x, y, z) {
        const m = this.data;
        m[0] = x;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = y;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = z;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to a matrix transforming a normalized view volume (in range of
     * -1 .. 1) to their position inside a viewport (in range of 0 .. 1). This encapsulates a
     * scaling to the size of the viewport and a translation to the position of the viewport.
     *
     * @param {number} x - The x-component of the position of the viewport (in 0..1 range).
     * @param {number} y - The y-component of the position of the viewport (in 0..1 range).
     * @param {number} width - The width of the viewport (in 0..1 range).
     * @param {number} height - The height of the viewport (in 0..1 range).
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 viewport matrix which scales normalized view volume to full texture viewport
     * var vm = new pc.Mat4().setViewport(0, 0, 1, 1);
     * @ignore
     */
    setViewport(x, y, width, height) {
        const m = this.data;
        m[0] = width * 0.5;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = height * 0.5;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = 0.5;
        m[11] = 0;
        m[12] = x + width * 0.5;
        m[13] = y + height * 0.5;
        m[14] = 0.5;
        m[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to its inverse.
     *
     * @returns {Mat4} Self for chaining.
     * @example
     * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
     * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
     *
     * // Invert in place
     * rot.invert();
     */
    invert() {
        const m = this.data;
        const a00 = m[0];
        const a01 = m[1];
        const a02 = m[2];
        const a03 = m[3];
        const a10 = m[4];
        const a11 = m[5];
        const a12 = m[6];
        const a13 = m[7];
        const a20 = m[8];
        const a21 = m[9];
        const a22 = m[10];
        const a23 = m[11];
        const a30 = m[12];
        const a31 = m[13];
        const a32 = m[14];
        const a33 = m[15];
        const b00 = a00 * a11 - a01 * a10;
        const b01 = a00 * a12 - a02 * a10;
        const b02 = a00 * a13 - a03 * a10;
        const b03 = a01 * a12 - a02 * a11;
        const b04 = a01 * a13 - a03 * a11;
        const b05 = a02 * a13 - a03 * a12;
        const b06 = a20 * a31 - a21 * a30;
        const b07 = a20 * a32 - a22 * a30;
        const b08 = a20 * a33 - a23 * a30;
        const b09 = a21 * a32 - a22 * a31;
        const b10 = a21 * a33 - a23 * a31;
        const b11 = a22 * a33 - a23 * a32;
        const det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (det === 0) {
            this.setIdentity();
        }
        else {
            const invDet = 1 / det;
            m[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
            m[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
            m[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
            m[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
            m[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
            m[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
            m[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
            m[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
            m[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
            m[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
            m[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
            m[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
            m[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
            m[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
            m[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
            m[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
        }
        return this;
    }
    /**
     * Sets matrix data from an array.
     *
     * @param {number[]} src - Source array. Must have 16 values.
     * @returns {Mat4} Self for chaining.
     */
    set(src) {
        const dst = this.data;
        dst[0] = src[0];
        dst[1] = src[1];
        dst[2] = src[2];
        dst[3] = src[3];
        dst[4] = src[4];
        dst[5] = src[5];
        dst[6] = src[6];
        dst[7] = src[7];
        dst[8] = src[8];
        dst[9] = src[9];
        dst[10] = src[10];
        dst[11] = src[11];
        dst[12] = src[12];
        dst[13] = src[13];
        dst[14] = src[14];
        dst[15] = src[15];
        return this;
    }
    /**
     * Sets the specified matrix to the identity matrix.
     *
     * @returns {Mat4} Self for chaining.
     * @example
     * m.setIdentity();
     * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
     */
    setIdentity() {
        const m = this.data;
        m[0] = 1;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;
        m[4] = 0;
        m[5] = 1;
        m[6] = 0;
        m[7] = 0;
        m[8] = 0;
        m[9] = 0;
        m[10] = 1;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to the concatenation of a translation, a quaternion rotation and a
     * scale.
     *
     * @param {Vec3} t - A 3-d vector translation.
     * @param {Quat} r - A quaternion rotation.
     * @param {Vec3} s - A 3-d vector scale.
     * @returns {Mat4} Self for chaining.
     * @example
     * var t = new pc.Vec3(10, 20, 30);
     * var r = new pc.Quat();
     * var s = new pc.Vec3(2, 2, 2);
     *
     * var m = new pc.Mat4();
     * m.setTRS(t, r, s);
     */
    setTRS(t, r, s) {
        const qx = r.x;
        const qy = r.y;
        const qz = r.z;
        const qw = r.w;
        const sx = s.x;
        const sy = s.y;
        const sz = s.z;
        const x2 = qx + qx;
        const y2 = qy + qy;
        const z2 = qz + qz;
        const xx = qx * x2;
        const xy = qx * y2;
        const xz = qx * z2;
        const yy = qy * y2;
        const yz = qy * z2;
        const zz = qz * z2;
        const wx = qw * x2;
        const wy = qw * y2;
        const wz = qw * z2;
        const m = this.data;
        m[0] = (1 - (yy + zz)) * sx;
        m[1] = (xy + wz) * sx;
        m[2] = (xz - wy) * sx;
        m[3] = 0;
        m[4] = (xy - wz) * sy;
        m[5] = (1 - (xx + zz)) * sy;
        m[6] = (yz + wx) * sy;
        m[7] = 0;
        m[8] = (xz + wy) * sz;
        m[9] = (yz - wx) * sz;
        m[10] = (1 - (xx + yy)) * sz;
        m[11] = 0;
        m[12] = t.x;
        m[13] = t.y;
        m[14] = t.z;
        m[15] = 1;
        return this;
    }
    /**
     * Sets the specified matrix to its transpose.
     *
     * @returns {Mat4} Self for chaining.
     * @example
     * var m = new pc.Mat4();
     *
     * // Transpose in place
     * m.transpose();
     */
    transpose() {
        let tmp;
        const m = this.data;
        tmp = m[1];
        m[1] = m[4];
        m[4] = tmp;
        tmp = m[2];
        m[2] = m[8];
        m[8] = tmp;
        tmp = m[3];
        m[3] = m[12];
        m[12] = tmp;
        tmp = m[6];
        m[6] = m[9];
        m[9] = tmp;
        tmp = m[7];
        m[7] = m[13];
        m[13] = tmp;
        tmp = m[11];
        m[11] = m[14];
        m[14] = tmp;
        return this;
    }
    invertTo3x3(res) {
        const m = this.data;
        const r = res.data;
        const m0 = m[0];
        const m1 = m[1];
        const m2 = m[2];
        const m4 = m[4];
        const m5 = m[5];
        const m6 = m[6];
        const m8 = m[8];
        const m9 = m[9];
        const m10 = m[10];
        const a11 = m10 * m5 - m6 * m9;
        const a21 = -m10 * m1 + m2 * m9;
        const a31 = m6 * m1 - m2 * m5;
        const a12 = -m10 * m4 + m6 * m8;
        const a22 = m10 * m0 - m2 * m8;
        const a32 = -m6 * m0 + m2 * m4;
        const a13 = m9 * m4 - m5 * m8;
        const a23 = -m9 * m0 + m1 * m8;
        const a33 = m5 * m0 - m1 * m4;
        const det = m0 * a11 + m1 * a12 + m2 * a13;
        if (det === 0) {
            // no inverse
            return this;
        }
        const idet = 1 / det;
        r[0] = idet * a11;
        r[1] = idet * a21;
        r[2] = idet * a31;
        r[3] = idet * a12;
        r[4] = idet * a22;
        r[5] = idet * a32;
        r[6] = idet * a13;
        r[7] = idet * a23;
        r[8] = idet * a33;
        return this;
    }
    /**
     * Extracts the translational component from the specified 4x4 matrix.
     *
     * @param {Vec3} [t] - The vector to receive the translation of the matrix.
     * @returns {Vec3} The translation of the specified 4x4 matrix.
     * @example
     * // Create a 4x4 matrix
     * var m = new pc.Mat4();
     *
     * // Query the z-axis component
     * var t = new pc.Vec3();
     * m.getTranslation(t);
     */
    getTranslation(t = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        return t.set(this.data[12], this.data[13], this.data[14]);
    }
    /**
     * Extracts the x-axis from the specified 4x4 matrix.
     *
     * @param {Vec3} [x] - The vector to receive the x axis of the matrix.
     * @returns {Vec3} The x-axis of the specified 4x4 matrix.
     * @example
     * // Create a 4x4 matrix
     * var m = new pc.Mat4();
     *
     * // Query the z-axis component
     * var x = new pc.Vec3();
     * m.getX(x);
     */
    getX(x = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        return x.set(this.data[0], this.data[1], this.data[2]);
    }
    /**
     * Extracts the y-axis from the specified 4x4 matrix.
     *
     * @param {Vec3} [y] - The vector to receive the y axis of the matrix.
     * @returns {Vec3} The y-axis of the specified 4x4 matrix.
     * @example
     * // Create a 4x4 matrix
     * var m = new pc.Mat4();
     *
     * // Query the z-axis component
     * var y = new pc.Vec3();
     * m.getY(y);
     */
    getY(y = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        return y.set(this.data[4], this.data[5], this.data[6]);
    }
    /**
     * Extracts the z-axis from the specified 4x4 matrix.
     *
     * @param {Vec3} [z] - The vector to receive the z axis of the matrix.
     * @returns {Vec3} The z-axis of the specified 4x4 matrix.
     * @example
     * // Create a 4x4 matrix
     * var m = new pc.Mat4();
     *
     * // Query the z-axis component
     * var z = new pc.Vec3();
     * m.getZ(z);
     */
    getZ(z = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        return z.set(this.data[8], this.data[9], this.data[10]);
    }
    /**
     * Extracts the scale component from the specified 4x4 matrix.
     *
     * @param {Vec3} [scale] - Vector to receive the scale.
     * @returns {Vec3} The scale in X, Y and Z of the specified 4x4 matrix.
     * @example
     * // Query the scale component
     * var scale = m.getScale();
     */
    getScale(scale = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        this.getX(x);
        this.getY(y);
        this.getZ(z);
        scale.set(x.length(), y.length(), z.length());
        return scale;
    }
    /**
     * Sets the specified matrix to a rotation matrix defined by Euler angles. The Euler angles are
     * specified in XYZ order and in degrees.
     *
     * @param {number} ex - Angle to rotate around X axis in degrees.
     * @param {number} ey - Angle to rotate around Y axis in degrees.
     * @param {number} ez - Angle to rotate around Z axis in degrees.
     * @returns {Mat4} Self for chaining.
     * @example
     * var m = new pc.Mat4();
     * m.setFromEulerAngles(45, 90, 180);
     */
    setFromEulerAngles(ex, ey, ez) {
        // http://en.wikipedia.org/wiki/Rotation_matrix#Conversion_from_and_to_axis-angle
        // The 3D space is right-handed, so the rotation around each axis will be counterclockwise
        // for an observer placed so that the axis goes in his or her direction (Right-hand rule).
        ex *= _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].DEG_TO_RAD;
        ey *= _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].DEG_TO_RAD;
        ez *= _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].DEG_TO_RAD;
        // Solution taken from http://en.wikipedia.org/wiki/Euler_angles#Matrix_orientation
        const s1 = Math.sin(-ex);
        const c1 = Math.cos(-ex);
        const s2 = Math.sin(-ey);
        const c2 = Math.cos(-ey);
        const s3 = Math.sin(-ez);
        const c3 = Math.cos(-ez);
        const m = this.data;
        // Set rotation elements
        m[0] = c2 * c3;
        m[1] = -c2 * s3;
        m[2] = s2;
        m[3] = 0;
        m[4] = c1 * s3 + c3 * s1 * s2;
        m[5] = c1 * c3 - s1 * s2 * s3;
        m[6] = -c2 * s1;
        m[7] = 0;
        m[8] = s1 * s3 - c1 * c3 * s2;
        m[9] = c3 * s1 + c1 * s2 * s3;
        m[10] = c1 * c2;
        m[11] = 0;
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        return this;
    }
    /**
     * Extracts the Euler angles equivalent to the rotational portion of the specified matrix. The
     * returned Euler angles are in XYZ order an in degrees.
     *
     * @param {Vec3} [eulers] - A 3-d vector to receive the Euler angles.
     * @returns {Vec3} A 3-d vector containing the Euler angles.
     * @example
     * // Create a 4x4 rotation matrix of 45 degrees around the y-axis
     * var m = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 45);
     *
     * var eulers = m.getEulerAngles();
     */
    getEulerAngles(eulers = new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()) {
        this.getScale(scale);
        const sx = scale.x;
        const sy = scale.y;
        const sz = scale.z;
        if (sx === 0 || sy === 0 || sz === 0)
            return eulers.set(0, 0, 0);
        const m = this.data;
        const y = Math.asin(-m[2] / sx);
        const halfPi = Math.PI * 0.5;
        let x, z;
        if (y < halfPi) {
            if (y > -halfPi) {
                x = Math.atan2(m[6] / sy, m[10] / sz);
                z = Math.atan2(m[1] / sx, m[0] / sx);
            }
            else {
                // Not a unique solution
                z = 0;
                x = -Math.atan2(m[4] / sy, m[5] / sy);
            }
        }
        else {
            // Not a unique solution
            z = 0;
            x = Math.atan2(m[4] / sy, m[5] / sy);
        }
        return eulers.set(x, y, z).mulScalar(_math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].RAD_TO_DEG);
    }
    /**
     * Converts the specified matrix to string form.
     *
     * @returns {string} The matrix in string form.
     * @example
     * var m = new pc.Mat4();
     * // Outputs [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
     * console.log(m.toString());
     */
    toString() {
        let t = "[";
        for (let i = 0; i < 16; i += 1) {
            t += this.data[i];
            t += i !== 15 ? ", " : "";
        }
        t += "]";
        return t;
    }
    determinant() {
        const te = this.data;
        const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
        const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
        const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
        const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
        //TODO: make this more efficient
        //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
        return (n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) +
            n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) +
            n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) +
            n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31));
    }
    compose(position, quaternion, scale) {
        const te = this.data;
        const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
        const x2 = x + x, y2 = y + y, z2 = z + z;
        const xx = x * x2, xy = x * y2, xz = x * z2;
        const yy = y * y2, yz = y * z2, zz = z * z2;
        const wx = w * x2, wy = w * y2, wz = w * z2;
        const sx = scale.x, sy = scale.y, sz = scale.z;
        te[0] = (1 - (yy + zz)) * sx;
        te[1] = (xy + wz) * sx;
        te[2] = (xz - wy) * sx;
        te[3] = 0;
        te[4] = (xy - wz) * sy;
        te[5] = (1 - (xx + zz)) * sy;
        te[6] = (yz + wx) * sy;
        te[7] = 0;
        te[8] = (xz + wy) * sz;
        te[9] = (yz - wx) * sz;
        te[10] = (1 - (xx + yy)) * sz;
        te[11] = 0;
        te[12] = position.x;
        te[13] = position.y;
        te[14] = position.z;
        te[15] = 1;
        return this;
    }
    decompose(position, quaternion, scale) {
        const te = this.data;
        let sx = _v1.set(te[0], te[1], te[2]).length();
        const sy = _v1.set(te[4], te[5], te[6]).length();
        const sz = _v1.set(te[8], te[9], te[10]).length();
        // if determine is negative, we need to invert one scale
        const det = this.determinant();
        if (det < 0)
            sx = -sx;
        position.x = te[12];
        position.y = te[13];
        position.z = te[14];
        // scale the rotation part
        _m1.copy(this);
        const invSX = 1 / sx;
        const invSY = 1 / sy;
        const invSZ = 1 / sz;
        _m1.data[0] *= invSX;
        _m1.data[1] *= invSX;
        _m1.data[2] *= invSX;
        _m1.data[4] *= invSY;
        _m1.data[5] *= invSY;
        _m1.data[6] *= invSY;
        _m1.data[8] *= invSZ;
        _m1.data[9] *= invSZ;
        _m1.data[10] *= invSZ;
        quaternion.setFromMat4(_m1);
        scale.x = sx;
        scale.y = sy;
        scale.z = sz;
        return this;
    }
    setPosition(x, y, z) {
        const te = this.data;
        te[12] = x;
        te[13] = y;
        te[14] = z;
        return this;
    }
    static copyToArrayData(src, dist) {
        src.data.forEach((item, index) => {
            dist[index] = item;
        });
    }
}
/**
 * A constant matrix set to the identity.
 *
 * @type {Mat4}
 * @readonly
 */
Mat4.IDENTITY = Object.freeze(new Mat4());
/**
 * A constant matrix with all elements set to 0.
 *
 * @type {Mat4}
 * @readonly
 */
Mat4.ZERO = Object.freeze(new Mat4().set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
const _m1 = /*@__PURE__*/ new Mat4();
const _zero = /*@__PURE__*/ new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"](0, 0, 0);
const _one = /*@__PURE__*/ new _math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"](1, 1, 1);



/***/ }),

/***/ "./src/maths/math.quat.ts":
/*!********************************!*\
  !*** ./src/maths/math.quat.ts ***!
  \********************************/
/*! exports provided: Quat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return Quat; });
/* harmony import */ var _math_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _math_vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.vec3 */ "./src/maths/math.vec3.ts");
/** @typedef {import('./mat4.js').Mat4} Mat4 */


/**
 * A quaternion.
 */
class Quat {
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
    copy(rhs) {
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
    equals(rhs) {
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
    getAxisAngle(axis) {
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
        }
        else {
            // If s is zero, return any axis (no rotation - axis does not matter)
            axis.x = 1;
            axis.y = 0;
            axis.z = 0;
        }
        return rad * _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].RAD_TO_DEG;
    }
    /**
     * Converts the supplied quaternion to Euler angles.
     *
     * @param {Vec3} [eulers] - The 3-dimensional vector to receive the Euler angles.
     * @returns {Vec3} The 3-dimensional vector holding the Euler angles that
     * correspond to the supplied quaternion.
     */
    getEulerAngles(eulers = new _math_vec3__WEBPACK_IMPORTED_MODULE_1__["Vec3"]()) {
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
        }
        else if (a2 >= 0.99999) {
            x = 2 * Math.atan2(qx, qw);
            y = Math.PI / 2;
            z = 0;
        }
        else {
            x = Math.atan2(2 * (qw * qx + qy * qz), 1 - 2 * (qx * qx + qy * qy));
            y = Math.asin(a2);
            z = Math.atan2(2 * (qw * qz + qx * qy), 1 - 2 * (qy * qy + qz * qz));
        }
        return eulers.set(x, y, z).mulScalar(_math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].RAD_TO_DEG);
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
    mul(rhs) {
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
    mul2(lhs, rhs) {
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
        }
        else {
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
    set(x, y, z, w) {
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
    setFromAxisAngle(axis, angle) {
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
    setFromEulerAngles(ex, ey, ez) {
        const halfToRad = 0.5 * _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].DEG_TO_RAD;
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
    setFromEuler(euler) {
        if (!(euler && euler.isEuler)) {
            throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        }
        const x = euler.x, y = euler.y, z = euler.z;
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
    setFromMat4(m) {
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
        if (lx === 0)
            return this;
        lx = 1 / Math.sqrt(lx);
        ly = m10 * m10 + m11 * m11 + m12 * m12;
        if (ly === 0)
            return this;
        ly = 1 / Math.sqrt(ly);
        lz = m20 * m20 + m21 * m21 + m22 * m22;
        if (lz === 0)
            return this;
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
        }
        else {
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
                }
                else {
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
            else if (m11 > m22) {
                // YDiagDomMatrix
                rs = m11 - (m22 + m00) + 1;
                rs = Math.sqrt(rs);
                this.y = rs * 0.5;
                rs = 0.5 / rs;
                this.w = (m20 - m02) * rs;
                this.z = (m12 + m21) * rs;
                this.x = (m10 + m01) * rs;
            }
            else {
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
    slerp(lhs, rhs, alpha) {
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
    transformVector(vec, res = new _math_vec3__WEBPACK_IMPORTED_MODULE_1__["Vec3"]()) {
        const x = vec.x, y = vec.y, z = vec.z;
        const qx = this.x, qy = this.y, qz = this.z, qw = this.w;
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
}
/**
 * A constant quaternion set to [0, 0, 0, 1] (the identity).
 *
 * @type {Quat}
 * @readonly
 */
Quat.IDENTITY = Object.freeze(new Quat(0, 0, 0, 1));
/**
 * A constant quaternion set to [0, 0, 0, 0].
 *
 * @type {Quat}
 * @readonly
 */
Quat.ZERO = Object.freeze(new Quat(0, 0, 0, 0));



/***/ }),

/***/ "./src/maths/math.random.ts":
/*!**********************************!*\
  !*** ./src/maths/math.random.ts ***!
  \**********************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _math_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.tool */ "./src/maths/math.tool.ts");

// golden angle in radians: PI * (3 - sqrt(5))
const _goldenAngle = 2.399963229728653;
/**
 * Random API.
 *
 * @namespace
 * @ignore
 */
const random = {
    /**
     * Return a pseudo-random 2D point inside a unit circle with uniform distribution.
     *
     * @param {Vec2} point - The returned generated point.
     * @ignore
     */
    circlePoint: function (point) {
        const r = Math.sqrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        point.x = r * Math.cos(theta);
        point.y = r * Math.sin(theta);
    },
    /**
     * Generates evenly distributed deterministic points inside a unit circle using Fermat's spiral
     * and Vogel's method.
     *
     * @param {Vec2} point - The returned generated point.
     * @param {number} index - Index of the point to generate, in the range from 0 to numPoints - 1.
     * @param {number} numPoints - The total number of points of the set.
     * @ignore
     */
    circlePointDeterministic: function (point, index, numPoints) {
        const theta = index * _goldenAngle;
        const r = Math.sqrt(index) / Math.sqrt(numPoints);
        point.x = r * Math.cos(theta);
        point.y = r * Math.sin(theta);
    },
    /**
     * Generates evenly distributed deterministic points on a unit sphere using Fibonacci sphere
     * algorithm. It also allows the points to cover only part of the sphere by specifying start
     * and end parameters, representing value from 0 (top of the sphere) and 1 (bottom of the
     * sphere). For example by specifying 0.4 and 0.6 and start and end, a band around the equator
     * would be generated.
     *
     * @param {Vec3} point - The returned generated point.
     * @param {number} index - Index of the point to generate, in the range from 0 to numPoints - 1.
     * @param {number} numPoints - The total number of points of the set.
     * @param {number} [start] - Part on the sphere along y axis to start the points, in the range
     * of 0 and 1. Defaults to 0.
     * @param {number} [end] - Part on the sphere along y axis to stop the points, in the range of
     * 0 and 1. Defaults to 1.
     * @ignore
     */
    spherePointDeterministic: function (point, index, numPoints, start = 0, end = 1) {
        // y coordinate needs to go from -1 (top) to 1 (bottom) for the full sphere
        // evaluate its value for this point and specified start and end
        start = 1 - 2 * start;
        end = 1 - 2 * end;
        const y = _math_tool__WEBPACK_IMPORTED_MODULE_0__["MathTool"].lerp(start, end, index / numPoints);
        // radius at y
        const radius = Math.sqrt(1 - y * y);
        // golden angle increment
        const theta = _goldenAngle * index;
        point.x = Math.cos(theta) * radius;
        point.y = y;
        point.z = Math.sin(theta) * radius;
    },
    /**
     * Generate a repeatable pseudo-random sequence using radical inverse. Based on
     * http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
     *
     * @param {number} i - The index in the sequence to return.
     * @returns {number} The pseudo-random value.
     * @ignore
     */
    radicalInverse: function (i) {
        let bits = ((i << 16) | (i >>> 16)) >>> 0;
        bits = (((bits & 0x55555555) << 1) | ((bits & 0xAAAAAAAA) >>> 1)) >>> 0;
        bits = (((bits & 0x33333333) << 2) | ((bits & 0xCCCCCCCC) >>> 2)) >>> 0;
        bits = (((bits & 0x0F0F0F0F) << 4) | ((bits & 0xF0F0F0F0) >>> 4)) >>> 0;
        bits = (((bits & 0x00FF00FF) << 8) | ((bits & 0xFF00FF00) >>> 8)) >>> 0;
        return bits * 2.3283064365386963e-10;
    }
};



/***/ }),

/***/ "./src/maths/math.scalar.ts":
/*!**********************************!*\
  !*** ./src/maths/math.scalar.ts ***!
  \**********************************/
/*! exports provided: Scalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scalar", function() { return Scalar; });
/**
 * Scalar computation library
 */
class Scalar {
    /**
     * Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
     * @param a number
     * @param b number
     * @param epsilon (default = 1.401298E-45)
     * @returns true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
     */
    static WithinEpsilon(a, b, epsilon = 1.401298E-45) {
        return Math.abs(a - b) <= epsilon;
    }
    /**
     * Returns a string : the upper case translation of the number i to hexadecimal.
     * @param i number
     * @returns the upper case translation of the number i to hexadecimal.
     */
    static ToHex(i) {
        var str = i.toString(16);
        if (i <= 15) {
            return ("0" + str).toUpperCase();
        }
        return str.toUpperCase();
    }
    /**
     * Returns -1 if value is negative and +1 is value is positive.
     * @param value the value
     * @returns the value itself if it's equal to zero.
     */
    static Sign(value) {
        value = +value; // convert to a number
        if (value === 0 || isNaN(value)) {
            return value;
        }
        return value > 0 ? 1 : -1;
    }
    /**
     * Returns the value itself if it's between min and max.
     * Returns min if the value is lower than min.
     * Returns max if the value is greater than max.
     * @param value the value to clmap
     * @param min the min value to clamp to (default: 0)
     * @param max the max value to clamp to (default: 1)
     * @returns the clamped value
     */
    static Clamp(value, min = 0, max = 1) {
        return Math.min(max, Math.max(min, value));
    }
    /**
     * the log2 of value.
     * @param value the value to compute log2 of
     * @returns the log2 of value.
     */
    static Log2(value) {
        return Math.log(value) * Math.LOG2E;
    }
    /**
     * the floor part of a log2 value.
     * @param value the value to compute log2 of
     * @returns the log2 of value.
     */
    static ILog2(value) {
        if (Math.log2) {
            return Math.floor(Math.log2(value));
        }
        if (value < 0) {
            return NaN;
        }
        else if (value === 0) {
            return -Infinity;
        }
        let n = 0;
        if (value < 1) {
            while (value < 1) {
                n++;
                value = value * 2;
            }
            n = -n;
        }
        else if (value > 1) {
            while (value > 1) {
                n++;
                value = Math.floor(value / 2);
            }
        }
        return n;
    }
    /**
    * Loops the value, so that it is never larger than length and never smaller than 0.
    *
    * This is similar to the modulo operator but it works with floating point numbers.
    * For example, using 3.0 for t and 2.5 for length, the result would be 0.5.
    * With t = 5 and length = 2.5, the result would be 0.0.
    * Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator
    * @param value the value
    * @param length the length
    * @returns the looped value
    */
    static Repeat(value, length) {
        return value - Math.floor(value / length) * length;
    }
    /**
     * Normalize the value between 0.0 and 1.0 using min and max values
     * @param value value to normalize
     * @param min max to normalize between
     * @param max min to normalize between
     * @returns the normalized value
     */
    static Normalize(value, min, max) {
        return (value - min) / (max - min);
    }
    /**
    * Denormalize the value from 0.0 and 1.0 using min and max values
    * @param normalized value to denormalize
    * @param min max to denormalize between
    * @param max min to denormalize between
    * @returns the denormalized value
    */
    static Denormalize(normalized, min, max) {
        return (normalized * (max - min) + min);
    }
    /**
    * Calculates the shortest difference between two given angles given in degrees.
    * @param current current angle in degrees
    * @param target target angle in degrees
    * @returns the delta
    */
    static DeltaAngle(current, target) {
        var num = Scalar.Repeat(target - current, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return num;
    }
    /**
    * PingPongs the value t, so that it is never larger than length and never smaller than 0.
    * @param tx value
    * @param length length
    * @returns The returned value will move back and forth between 0 and length
    */
    static PingPong(tx, length) {
        var t = Scalar.Repeat(tx, length * 2.0);
        return length - Math.abs(t - length);
    }
    /**
    * Interpolates between min and max with smoothing at the limits.
    *
    * This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up
    * from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.
    * @param from from
    * @param to to
    * @param tx value
    * @returns the smooth stepped value
    */
    static SmoothStep(from, to, tx) {
        var t = Scalar.Clamp(tx);
        t = -2.0 * t * t * t + 3.0 * t * t;
        return to * t + from * (1.0 - t);
    }
    /**
    * Moves a value current towards target.
    *
    * This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta.
    * Negative values of maxDelta pushes the value away from target.
    * @param current current value
    * @param target target value
    * @param maxDelta max distance to move
    * @returns resulting value
    */
    static MoveTowards(current, target, maxDelta) {
        var result = 0;
        if (Math.abs(target - current) <= maxDelta) {
            result = target;
        }
        else {
            result = current + Scalar.Sign(target - current) * maxDelta;
        }
        return result;
    }
    /**
    * Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
    *
    * Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
    *  are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.
    * @param current current value
    * @param target target value
    * @param maxDelta max distance to move
    * @returns resulting angle
    */
    static MoveTowardsAngle(current, target, maxDelta) {
        var num = Scalar.DeltaAngle(current, target);
        var result = 0;
        if (-maxDelta < num && num < maxDelta) {
            result = target;
        }
        else {
            target = current + num;
            result = Scalar.MoveTowards(current, target, maxDelta);
        }
        return result;
    }
    /**
     * Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.
     * @param start start value
     * @param end target value
     * @param amount amount to lerp between
     * @returns the lerped value
     */
    static Lerp(start, end, amount) {
        return start + ((end - start) * amount);
    }
    /**
    * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
    * The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.
    * @param start start value
    * @param end target value
    * @param amount amount to lerp between
    * @returns the lerped value
    */
    static LerpAngle(start, end, amount) {
        var num = Scalar.Repeat(end - start, 360.0);
        if (num > 180.0) {
            num -= 360.0;
        }
        return start + num * Scalar.Clamp(amount);
    }
    /**
    * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
    * @param a start value
    * @param b target value
    * @param value value between a and b
    * @returns the inverseLerp value
    */
    static InverseLerp(a, b, value) {
        var result = 0;
        if (a != b) {
            result = Scalar.Clamp((value - a) / (b - a));
        }
        else {
            result = 0.0;
        }
        return result;
    }
    /**
     * Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".
     * @see http://mathworld.wolfram.com/HermitePolynomial.html
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param amount defines the amount on the interpolation spline (between 0 and 1)
     * @returns hermite result
     */
    static Hermite(value1, tangent1, value2, tangent2, amount) {
        var squared = amount * amount;
        var cubed = amount * squared;
        var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
        var part2 = (-2.0 * cubed) + (3.0 * squared);
        var part3 = (cubed - (2.0 * squared)) + amount;
        var part4 = cubed - squared;
        return (((value1 * part1) + (value2 * part2)) + (tangent1 * part3)) + (tangent2 * part4);
    }
    /**
     * Returns a new scalar which is the 1st derivative of the Hermite spline defined by the scalars "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */
    static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const t2 = time * time;
        return ((t2 - time) * 6 * value1 +
            (3 * t2 - 4 * time + 1) * tangent1 +
            (-t2 + time) * 6 * value2 +
            (3 * t2 - 2 * time) * tangent2);
    }
    /**
    * Returns a random float number between and min and max values
    * @param min min value of random
    * @param max max value of random
    * @returns random value
    */
    static RandomRange(min, max) {
        if (min === max) {
            return min;
        }
        return ((Math.random() * (max - min)) + min);
    }
    /**
    * This function returns percentage of a number in a given range.
    *
    * RangeToPercent(40,20,60) will return 0.5 (50%)
    * RangeToPercent(34,0,100) will return 0.34 (34%)
    * @param number to convert to percentage
    * @param min min range
    * @param max max range
    * @returns the percentage
    */
    static RangeToPercent(number, min, max) {
        return ((number - min) / (max - min));
    }
    /**
    * This function returns number that corresponds to the percentage in a given range.
    *
    * PercentToRange(0.34,0,100) will return 34.
    * @param percent to convert to number
    * @param min min range
    * @param max max range
    * @returns the number
    */
    static PercentToRange(percent, min, max) {
        return ((max - min) * percent + min);
    }
    /**
     * Returns the angle converted to equivalent value between -Math.PI and Math.PI radians.
     * @param angle The angle to normalize in radian.
     * @return The converted angle.
     */
    static NormalizeRadians(angle) {
        // More precise but slower version kept for reference.
        // angle = angle % Tools.TwoPi;
        // angle = (angle + Tools.TwoPi) % Tools.TwoPi;
        //if (angle > Math.PI) {
        //	angle -= Tools.TwoPi;
        //}
        angle -= (Scalar.TwoPi * Math.floor((angle + Math.PI) / Scalar.TwoPi));
        return angle;
    }
    /**
     * Returns the highest common factor of two integers.
     * @param a first parameter
     * @param b second parameter
     * @return HCF of a and b
     */
    static HCF(a, b) {
        const r = a % b;
        if (r === 0) {
            return b;
        }
        return Scalar.HCF(b, r);
    }
}
/**
 * Two pi constants convenient for computation.
 */
Scalar.TwoPi = Math.PI * 2;


/***/ }),

/***/ "./src/maths/math.tool.ts":
/*!********************************!*\
  !*** ./src/maths/math.tool.ts ***!
  \********************************/
/*! exports provided: MathTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathTool", function() { return MathTool; });
/* harmony import */ var _math_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.constants */ "./src/maths/math.constants.ts");

/**
 * @name math
 * @namespace
 * @description Math API.
 */
class MathTool {
    // 角度转弧度
    static degToRad(degrees) {
        return degrees * _math_constants__WEBPACK_IMPORTED_MODULE_0__["DEG2RAD"];
    }
    static radToDeg(radians) {
        return radians * _math_constants__WEBPACK_IMPORTED_MODULE_0__["RAD2DEG"];
    }
    /**
     * @function
     * @name math.clamp
     * @description Clamp a number between min and max inclusive.
     * @param {number} value - Number to clamp.
     * @param {number} min - Min value.
     * @param {number} max - Max value.
     * @returns {number} The clamped value.
     */
    static clamp(value, min, max) {
        if (value >= max)
            return max;
        if (value <= min)
            return min;
        return value;
    }
    /**
     * @function
     * @name math.intToBytes24
     * @description Convert an 24 bit integer into an array of 3 bytes.
     * @param {number} i - Number holding an integer value.
     * @returns {number[]} An array of 3 bytes.
     * @example
     * // Set bytes to [0x11, 0x22, 0x33]
     * var bytes = pc.math.intToBytes24(0x112233);
     */
    static intToBytes24(i) {
        var r, g, b;
        r = (i >> 16) & 0xff;
        g = (i >> 8) & 0xff;
        b = i & 0xff;
        return [r, g, b];
    }
    /**
     * @function
     * @name math.intToBytes32
     * @description Convert an 32 bit integer into an array of 4 bytes.
     * @returns {number[]} An array of 4 bytes.
     * @param {number} i - Number holding an integer value.
     * @example
     * // Set bytes to [0x11, 0x22, 0x33, 0x44]
     * var bytes = pc.math.intToBytes32(0x11223344);
     */
    static intToBytes32(i) {
        var r, g, b, a;
        r = (i >> 24) & 0xff;
        g = (i >> 16) & 0xff;
        b = (i >> 8) & 0xff;
        a = i & 0xff;
        return [r, g, b, a];
    }
    /**
     * @function
     * @name math.bytesToInt24
     * @description Convert 3 8 bit Numbers into a single unsigned 24 bit Number.
     * @example
     * // Set result1 to 0x112233 from an array of 3 values
     * var result1 = pc.math.bytesToInt24([0x11, 0x22, 0x33]);
     *
     * // Set result2 to 0x112233 from 3 discrete values
     * var result2 = pc.math.bytesToInt24(0x11, 0x22, 0x33);
     * @param {number} r - A single byte (0-255).
     * @param {number} g - A single byte (0-255).
     * @param {number} b - A single byte (0-255).
     * @returns {number} A single unsigned 24 bit Number.
     */
    static bytesToInt24(bytes) {
        const b = bytes[2];
        const g = bytes[1];
        const r = bytes[0];
        return (r << 16) | (g << 8) | b;
    }
    /**
     * @function
     * @name math.bytesToInt32
     * @description Convert 4 1-byte Numbers into a single unsigned 32bit Number.
     * @returns {number} A single unsigned 32bit Number.
     * @example
     * // Set result1 to 0x11223344 from an array of 4 values
     * var result1 = pc.math.bytesToInt32([0x11, 0x22, 0x33, 0x44]);
     *
     * // Set result2 to 0x11223344 from 4 discrete values
     * var result2 = pc.math.bytesToInt32(0x11, 0x22, 0x33, 0x44);
     * @param {number} r - A single byte (0-255).
     * @param {number} g - A single byte (0-255).
     * @param {number} b - A single byte (0-255).
     * @param {number} a - A single byte (0-255).
     */
    static bytesToInt32(bytes) {
        const a = bytes[3];
        const b = bytes[2];
        const g = bytes[1];
        const r = bytes[0];
        // Why ((r << 24)>>>32)?
        // << operator uses signed 32 bit numbers, so 128<<24 is negative.
        // >>> used unsigned so >>>32 converts back to an unsigned.
        // See http://stackoverflow.com/questions/1908492/unsigned-integer-in-javascript
        return ((r << 24) | (g << 16) | (b << 8) | a) >>> 32;
    }
    /**
     * @function
     * @name math.lerp
     * @returns {number} The linear interpolation of two numbers.
     * @description Calculates the linear interpolation of two numbers.
     * @param {number} a - Number to linearly interpolate from.
     * @param {number} b - Number to linearly interpolate to.
     * @param {number} alpha - The value controlling the result of interpolation. When alpha is 0,
     * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
     * a and b is returned. alpha is clamped between 0 and 1.
     */
    static lerp(a, b, alpha) {
        return a + (b - a) * MathTool.clamp(alpha, 0, 1);
    }
    /**
     * @function
     * @name math.lerpAngle
     * @description Calculates the linear interpolation of two angles ensuring that interpolation
     * is correctly performed across the 360 to 0 degree boundary. Angles are supplied in degrees.
     * @returns {number} The linear interpolation of two angles.
     * @param {number} a - Angle (in degrees) to linearly interpolate from.
     * @param {number} b - Angle (in degrees) to linearly interpolate to.
     * @param {number} alpha - The value controlling the result of interpolation. When alpha is 0,
     * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
     * a and b is returned. alpha is clamped between 0 and 1.
     */
    static lerpAngle(a, b, alpha) {
        if (b - a > 180) {
            b -= 360;
        }
        if (b - a < -180) {
            b += 360;
        }
        return MathTool.lerp(a, b, MathTool.clamp(alpha, 0, 1));
    }
    /**
     * @function
     * @name math.powerOfTwo
     * @description Returns true if argument is a power-of-two and false otherwise.
     * @param {number} x - Number to check for power-of-two property.
     * @returns {boolean} True if power-of-two and false otherwise.
     */
    static powerOfTwo(x) {
        return x !== 0 && !(x & (x - 1));
    }
    /**
     * @function
     * @name math.nextPowerOfTwo
     * @description Returns the next power of 2 for the specified value.
     * @param {number} val - The value for which to calculate the next power of 2.
     * @returns {number} The next power of 2.
     */
    static nextPowerOfTwo(val) {
        val--;
        val |= val >> 1;
        val |= val >> 2;
        val |= val >> 4;
        val |= val >> 8;
        val |= val >> 16;
        val++;
        return val;
    }
    /**
     * @function
     * @name math.random
     * @description Return a pseudo-random number between min and max.
     * The number generated is in the range [min, max), that is inclusive of the minimum but exclusive of the maximum.
     * @param {number} min - Lower bound for range.
     * @param {number} max - Upper bound for range.
     * @returns {number} Pseudo-random number between the supplied range.
     */
    static random(min, max) {
        var diff = max - min;
        return Math.random() * diff + min;
    }
    /**
     * @function
     * @name math.smoothstep
     * @description The function interpolates smoothly between two input values based on
     * a third one that should be between the first two. The returned value is clamped
     * between 0 and 1.
     * <br/>The slope (i.e. derivative) of the smoothstep function starts at 0 and ends at 0.
     * This makes it easy to create a sequence of transitions using smoothstep to interpolate
     * each segment rather than using a more sophisticated or expensive interpolation technique.
     * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
     * @param {number} min - The lower bound of the interpolation range.
     * @param {number} max - The upper bound of the interpolation range.
     * @param {number} x - The value to interpolate.
     * @returns {number} The smoothly interpolated value clamped between zero and one.
     */
    static smoothstep(min, max, x) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * (3 - 2 * x);
    }
    /**
     * @function
     * @name math.smootherstep
     * @description An improved version of the {@link math.smoothstep} function which has zero
     * 1st and 2nd order derivatives at t=0 and t=1.
     * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
     * @param {number} min - The lower bound of the interpolation range.
     * @param {number} max - The upper bound of the interpolation range.
     * @param {number} x - The value to interpolate.
     * @returns {number} The smoothly interpolated value clamped between zero and one.
     */
    static smootherstep(min, max, x) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * x * (x * (x * 6 - 15) + 10);
    }
    /**
     * @function
     * @name math.roundUp
     * @description Rounds a number up to nearest multiple.
     * @param {number} numToRound - The number to round up.
     * @param {number} multiple - The multiple to round up to.
     * @returns {number} A number rounded up to nearest multiple.
     */
    static roundUp(numToRound, multiple) {
        if (multiple === 0)
            return numToRound;
        return Math.ceil(numToRound / multiple) * multiple;
    }
    /**
     * @function
     * @name math.float2Half
     * @description Converts float number to half float representation.
     * @param {number} val - The float number.
     * @returns {number} A 16 bit number representing half float representation as used by GPU.
     */
    static float2Half(val) {
        // based on based on https://esdiscuss.org/topic/float16array
        var floatView = new Float32Array(1);
        var int32View = new Int32Array(floatView.buffer);
        // This method is faster than the OpenEXR implementation (very often
        // used, eg. in Ogre), with the additional benefit of rounding, inspired
        // by James Tursa?s half-precision code.
        floatView[0] = val;
        var x = int32View[0];
        var bits = (x >> 16) & 0x8000; // Get the sign
        var m = (x >> 12) & 0x07ff; // Keep one extra bit for rounding
        var e = (x >> 23) & 0xff; // Using int is faster here
        // If zero, or denormal, or exponent underflows too much for a denormal half, return signed zero.
        if (e < 103) {
            return bits;
        }
        // If NaN, return NaN. If Inf or exponent overflow, return Inf.
        if (e > 142) {
            bits |= 0x7c00;
            // If exponent was 0xff and one mantissa bit was set, it means NaN,
            // not Inf, so make sure we set one mantissa bit too.
            bits |= (e == 255 ? 0 : 1) && x & 0x007fffff;
            return bits;
        }
        // If exponent underflows but not too much, return a denormal
        if (e < 113) {
            m |= 0x0800;
            // Extra rounding may overflow and set mantissa to 0 and exponent to 1, which is OK.
            bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
            return bits;
        }
        bits |= ((e - 112) << 10) | (m >> 1);
        // Extra rounding. An overflow will set mantissa to 0 and increment the exponent, which is OK.
        bits += m & 1;
        return bits;
    }
    /**
     * @function
     * @private
     * @name math.between
     * @description Checks whether a given number resides between two other given numbers.
     * @returns {boolean} true if between or false otherwise.
     * @param {number} num - The number to check the position of.
     * @param {number} a - The first upper or lower threshold to check between.
     * @param {number} b - The second upper or lower threshold to check between.
     * @param {boolean} inclusive - If true, a num param which is equal to a or b will return true.
     */
    static between(num, a, b, inclusive) {
        var min = Math.min(a, b), max = Math.max(a, b);
        return inclusive ? num >= min && num <= max : num > min && num < max;
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    static generateUUID() {
        const d0 = (Math.random() * 0xffffffff) | 0;
        const d1 = (Math.random() * 0xffffffff) | 0;
        const d2 = (Math.random() * 0xffffffff) | 0;
        const d3 = (Math.random() * 0xffffffff) | 0;
        const _lut = [];
        const uuid = _lut[d0 & 0xff] +
            _lut[(d0 >> 8) & 0xff] +
            _lut[(d0 >> 16) & 0xff] +
            _lut[(d0 >> 24) & 0xff] +
            "-" +
            _lut[d1 & 0xff] +
            _lut[(d1 >> 8) & 0xff] +
            "-" +
            _lut[((d1 >> 16) & 0x0f) | 0x40] +
            _lut[(d1 >> 24) & 0xff] +
            "-" +
            _lut[(d2 & 0x3f) | 0x80] +
            _lut[(d2 >> 8) & 0xff] +
            "-" +
            _lut[(d2 >> 16) & 0xff] +
            _lut[(d2 >> 24) & 0xff] +
            _lut[d3 & 0xff] +
            _lut[(d3 >> 8) & 0xff] +
            _lut[(d3 >> 16) & 0xff] +
            _lut[(d3 >> 24) & 0xff];
        // .toUpperCase() here flattens concatenated strings to save heap memory space.
        return uuid.toUpperCase();
    }
    static zTween(_val, _target, _ratio) {
        return Math.abs(_target - _val) < 0.00001 ? _target : _val + (_target - _val) * Math.min(_ratio, 1);
    }
}
/**
 * @constant
 * @type {number}
 * @name math.DEG_TO_RAD
 * @description Conversion factor between degrees and radians.
 * @example
 * // Convert 180 degrees to pi radians
 * var rad = 180 * pc.math.DEG_TO_RAD;
 */
MathTool.DEG_TO_RAD = Math.PI / 180;
/**
 * @constant
 * @type {number}
 * @name math.RAD_TO_DEG
 * @description Conversion factor between degrees and radians.
 * @example
 * // Convert pi radians to 180 degrees
 * var deg = Math.PI * pc.math.RAD_TO_DEG;
 */
MathTool.RAD_TO_DEG = 180 / Math.PI;


/***/ }),

/***/ "./src/maths/math.vec2.ts":
/*!********************************!*\
  !*** ./src/maths/math.vec2.ts ***!
  \********************************/
/*! exports provided: Vec2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/**
 * A 2-dimensional vector.
 */
class Vec2 {
    /**
     * Create a new Vec2 instance.
     *
     * @param {number|number[]} [x] - The x value. Defaults to 0. If x is an array of length 2, the
     * array will be used to populate all components.
     * @param {number} [y] - The y value. Defaults to 0.
     * @example
     * var v = new pc.Vec2(1, 2);
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * Adds a 2-dimensional vector to another in place.
     *
     * @param {Vec2} rhs - The vector to add to the specified vector.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(10, 10);
     * var b = new pc.Vec2(20, 20);
     *
     * a.add(b);
     *
     * // Outputs [30, 30]
     * console.log("The result of the addition is: " + a.toString());
     */
    add(rhs) {
        this.x += rhs.x;
        this.y += rhs.y;
        return this;
    }
    /**
     * Adds two 2-dimensional vectors together and returns the result.
     *
     * @param {Vec2} lhs - The first vector operand for the addition.
     * @param {Vec2} rhs - The second vector operand for the addition.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(10, 10);
     * var b = new pc.Vec2(20, 20);
     * var r = new pc.Vec2();
     *
     * r.add2(a, b);
     * // Outputs [30, 30]
     *
     * console.log("The result of the addition is: " + r.toString());
     */
    add2(lhs, rhs) {
        this.x = lhs.x + rhs.x;
        this.y = lhs.y + rhs.y;
        return this;
    }
    /**
     * Adds a number to each element of a vector.
     *
     * @param {number} scalar - The number to add.
     * @returns {Vec2} Self for chaining.
     * @example
     * var vec = new pc.Vec2(3, 4);
     *
     * vec.addScalar(2);
     *
     * // Outputs [5, 6]
     * console.log("The result of the addition is: " + vec.toString());
     */
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    /**
     * Returns an identical copy of the specified 2-dimensional vector.
     *
     * @returns {Vec2} A 2-dimensional vector containing the result of the cloning.
     * @example
     * var v = new pc.Vec2(10, 20);
     * var vclone = v.clone();
     * console.log("The result of the cloning is: " + vclone.toString());
     */
    clone() {
        return new Vec2(this.x, this.y);
    }
    /**
     * Copies the contents of a source 2-dimensional vector to a destination 2-dimensional vector.
     *
     * @param {Vec2} rhs - A vector to copy to the specified vector.
     * @returns {Vec2} Self for chaining.
     * @example
     * var src = new pc.Vec2(10, 20);
     * var dst = new pc.Vec2();
     *
     * dst.copy(src);
     *
     * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
     */
    copy(rhs) {
        this.x = rhs.x;
        this.y = rhs.y;
        return this;
    }
    /**
     * Returns the result of a cross product operation performed on the two specified 2-dimensional
     * vectors.
     *
     * @param {Vec2} rhs - The second 2-dimensional vector operand of the cross product.
     * @returns {number} The cross product of the two vectors.
     * @example
     * var right = new pc.Vec2(1, 0);
     * var up = new pc.Vec2(0, 1);
     * var crossProduct = right.cross(up);
     *
     * // Prints 1
     * console.log("The result of the cross product is: " + crossProduct);
     */
    cross(rhs) {
        return this.x * rhs.y - this.y * rhs.x;
    }
    /**
     * Returns the distance between the two specified 2-dimensional vectors.
     *
     * @param {Vec2} rhs - The second 2-dimensional vector to test.
     * @returns {number} The distance between the two vectors.
     * @example
     * var v1 = new pc.Vec2(5, 10);
     * var v2 = new pc.Vec2(10, 20);
     * var d = v1.distance(v2);
     * console.log("The distance between v1 and v2 is: " + d);
     */
    distance(rhs) {
        const x = this.x - rhs.x;
        const y = this.y - rhs.y;
        return Math.sqrt(x * x + y * y);
    }
    /**
     * Divides a 2-dimensional vector by another in place.
     *
     * @param {Vec2} rhs - The vector to divide the specified vector by.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(4, 9);
     * var b = new pc.Vec2(2, 3);
     *
     * a.div(b);
     *
     * // Outputs [2, 3]
     * console.log("The result of the division is: " + a.toString());
     */
    div(rhs) {
        this.x /= rhs.x;
        this.y /= rhs.y;
        return this;
    }
    /**
     * Divides one 2-dimensional vector by another and writes the result to the specified vector.
     *
     * @param {Vec2} lhs - The dividend vector (the vector being divided).
     * @param {Vec2} rhs - The divisor vector (the vector dividing the dividend).
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(4, 9);
     * var b = new pc.Vec2(2, 3);
     * var r = new pc.Vec2();
     *
     * r.div2(a, b);
     * // Outputs [2, 3]
     *
     * console.log("The result of the division is: " + r.toString());
     */
    div2(lhs, rhs) {
        this.x = lhs.x / rhs.x;
        this.y = lhs.y / rhs.y;
        return this;
    }
    /**
     * Divides each element of a vector by a number.
     *
     * @param {number} scalar - The number to divide by.
     * @returns {Vec2} Self for chaining.
     * @example
     * var vec = new pc.Vec2(3, 6);
     *
     * vec.divScalar(3);
     *
     * // Outputs [1, 2]
     * console.log("The result of the division is: " + vec.toString());
     */
    divScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    /**
     * Returns the result of a dot product operation performed on the two specified 2-dimensional
     * vectors.
     *
     * @param {Vec2} rhs - The second 2-dimensional vector operand of the dot product.
     * @returns {number} The result of the dot product operation.
     * @example
     * var v1 = new pc.Vec2(5, 10);
     * var v2 = new pc.Vec2(10, 20);
     * var v1dotv2 = v1.dot(v2);
     * console.log("The result of the dot product is: " + v1dotv2);
     */
    dot(rhs) {
        return this.x * rhs.x + this.y * rhs.y;
    }
    /**
     * Reports whether two vectors are equal.
     *
     * @param {Vec2} rhs - The vector to compare to the specified vector.
     * @returns {boolean} True if the vectors are equal and false otherwise.
     * @example
     * var a = new pc.Vec2(1, 2);
     * var b = new pc.Vec2(4, 5);
     * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs) {
        return this.x === rhs.x && this.y === rhs.y;
    }
    /**
     * Returns the magnitude of the specified 2-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 2-dimensional vector.
     * @example
     * var vec = new pc.Vec2(3, 4);
     * var len = vec.length();
     * // Outputs 5
     * console.log("The length of the vector is: " + len);
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Returns the magnitude squared of the specified 2-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 2-dimensional vector.
     * @example
     * var vec = new pc.Vec2(3, 4);
     * var len = vec.lengthSq();
     * // Outputs 25
     * console.log("The length squared of the vector is: " + len);
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * Returns the result of a linear interpolation between two specified 2-dimensional vectors.
     *
     * @param {Vec2} lhs - The 2-dimensional to interpolate from.
     * @param {Vec2} rhs - The 2-dimensional to interpolate to.
     * @param {number} alpha - The value controlling the point of interpolation. Between 0 and 1,
     * the linear interpolant will occur on a straight line between lhs and rhs. Outside of this
     * range, the linear interpolant will occur on a ray extrapolated from this line.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(0, 0);
     * var b = new pc.Vec2(10, 10);
     * var r = new pc.Vec2();
     *
     * r.lerp(a, b, 0);   // r is equal to a
     * r.lerp(a, b, 0.5); // r is 5, 5
     * r.lerp(a, b, 1);   // r is equal to b
     */
    lerp(lhs, rhs, alpha) {
        this.x = lhs.x + alpha * (rhs.x - lhs.x);
        this.y = lhs.y + alpha * (rhs.y - lhs.y);
        return this;
    }
    /**
     * Multiplies a 2-dimensional vector to another in place.
     *
     * @param {Vec2} rhs - The 2-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(2, 3);
     * var b = new pc.Vec2(4, 5);
     *
     * a.mul(b);
     *
     * // Outputs 8, 15
     * console.log("The result of the multiplication is: " + a.toString());
     */
    mul(rhs) {
        this.x *= rhs.x;
        this.y *= rhs.y;
        return this;
    }
    /**
     * Returns the result of multiplying the specified 2-dimensional vectors together.
     *
     * @param {Vec2} lhs - The 2-dimensional vector used as the first multiplicand of the operation.
     * @param {Vec2} rhs - The 2-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(2, 3);
     * var b = new pc.Vec2(4, 5);
     * var r = new pc.Vec2();
     *
     * r.mul2(a, b);
     *
     * // Outputs 8, 15
     * console.log("The result of the multiplication is: " + r.toString());
     */
    mul2(lhs, rhs) {
        this.x = lhs.x * rhs.x;
        this.y = lhs.y * rhs.y;
        return this;
    }
    /**
     * Multiplies each element of a vector by a number.
     *
     * @param {number} scalar - The number to multiply by.
     * @returns {Vec2} Self for chaining.
     * @example
     * var vec = new pc.Vec2(3, 6);
     *
     * vec.mulScalar(3);
     *
     * // Outputs [9, 18]
     * console.log("The result of the multiplication is: " + vec.toString());
     */
    mulScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    /**
     * Returns this 2-dimensional vector converted to a unit vector in place. If the vector has a
     * length of zero, the vector's elements will be set to zero.
     *
     * @returns {Vec2} Self for chaining.
     * @example
     * var v = new pc.Vec2(25, 0);
     *
     * v.normalize();
     *
     * // Outputs 1, 0
     * console.log("The result of the vector normalization is: " + v.toString());
     */
    normalize() {
        const lengthSq = this.x * this.x + this.y * this.y;
        if (lengthSq > 0) {
            const invLength = 1 / Math.sqrt(lengthSq);
            this.x *= invLength;
            this.y *= invLength;
        }
        return this;
    }
    /**
     * Each element is set to the largest integer less than or equal to its value.
     *
     * @returns {Vec2} Self for chaining.
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    /**
     * Each element is rounded up to the next largest integer.
     *
     * @returns {Vec2} Self for chaining.
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    /**
     * Each element is rounded up or down to the nearest integer.
     *
     * @returns {Vec2} Self for chaining.
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is smaller.
     *
     * @param {Vec2} rhs - The 2-dimensional vector used as the source of elements to compare to.
     * @returns {Vec2} Self for chaining.
     */
    min(rhs) {
        if (rhs.x < this.x)
            this.x = rhs.x;
        if (rhs.y < this.y)
            this.y = rhs.y;
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is larger.
     *
     * @param {Vec2} rhs - The 2-dimensional vector used as the source of elements to compare to.
     * @returns {Vec2} Self for chaining.
     */
    max(rhs) {
        if (rhs.x > this.x)
            this.x = rhs.x;
        if (rhs.y > this.y)
            this.y = rhs.y;
        return this;
    }
    /**
     * Sets the specified 2-dimensional vector to the supplied numerical values.
     *
     * @param {number} x - The value to set on the first component of the vector.
     * @param {number} y - The value to set on the second component of the vector.
     * @returns {Vec2} Self for chaining.
     * @example
     * var v = new pc.Vec2();
     * v.set(5, 10);
     *
     * // Outputs 5, 10
     * console.log("The result of the vector set is: " + v.toString());
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Subtracts a 2-dimensional vector from another in place.
     *
     * @param {Vec2} rhs - The vector to add to the specified vector.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(10, 10);
     * var b = new pc.Vec2(20, 20);
     *
     * a.sub(b);
     *
     * // Outputs [-10, -10]
     * console.log("The result of the subtraction is: " + a.toString());
     */
    sub(rhs) {
        this.x -= rhs.x;
        this.y -= rhs.y;
        return this;
    }
    /**
     * Subtracts two 2-dimensional vectors from one another and returns the result.
     *
     * @param {Vec2} lhs - The first vector operand for the addition.
     * @param {Vec2} rhs - The second vector operand for the addition.
     * @returns {Vec2} Self for chaining.
     * @example
     * var a = new pc.Vec2(10, 10);
     * var b = new pc.Vec2(20, 20);
     * var r = new pc.Vec2();
     *
     * r.sub2(a, b);
     *
     * // Outputs [-10, -10]
     * console.log("The result of the subtraction is: " + r.toString());
     */
    sub2(lhs, rhs) {
        this.x = lhs.x - rhs.x;
        this.y = lhs.y - rhs.y;
        return this;
    }
    /**
     * Subtracts a number from each element of a vector.
     *
     * @param {number} scalar - The number to subtract.
     * @returns {Vec2} Self for chaining.
     * @example
     * var vec = new pc.Vec2(3, 4);
     *
     * vec.subScalar(2);
     *
     * // Outputs [1, 2]
     * console.log("The result of the subtraction is: " + vec.toString());
     */
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    /**
     * Converts the vector to string form.
     *
     * @returns {string} The vector in string form.
     * @example
     * var v = new pc.Vec2(20, 10);
     * // Outputs [20, 10]
     * console.log(v.toString());
     */
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
    /**
     * Calculates the angle between two Vec2's in radians.
     *
     * @param {Vec2} lhs - The first vector operand for the calculation.
     * @param {Vec2} rhs - The second vector operand for the calculation.
     * @returns {number} The calculated angle in radians.
     * @ignore
     */
    static angleRad(lhs, rhs) {
        return Math.atan2(lhs.x * rhs.y - lhs.y * rhs.x, lhs.x * rhs.x + lhs.y * rhs.y);
    }
}
/**
 * A constant vector set to [0, 0].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.ZERO = Object.freeze(new Vec2(0, 0));
/**
 * A constant vector set to [1, 1].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.ONE = Object.freeze(new Vec2(1, 1));
/**
 * A constant vector set to [0, 1].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.UP = Object.freeze(new Vec2(0, 1));
/**
 * A constant vector set to [0, -1].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.DOWN = Object.freeze(new Vec2(0, -1));
/**
 * A constant vector set to [1, 0].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.RIGHT = Object.freeze(new Vec2(1, 0));
/**
 * A constant vector set to [-1, 0].
 *
 * @type {Vec2}
 * @readonly
 */
Vec2.LEFT = Object.freeze(new Vec2(-1, 0));


/***/ }),

/***/ "./src/maths/math.vec3.ts":
/*!********************************!*\
  !*** ./src/maths/math.vec3.ts ***!
  \********************************/
/*! exports provided: Vec3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/**
 * 3-dimensional vector.
 */
class Vec3 {
    /**
     * Creates a new Vec3 object.
     *
     * @param {number} [x] - The x value. Defaults to 0. If x is an array of length 3, the
     * array will be used to populate all components.
     * @param {number} [y] - The y value. Defaults to 0.
     * @param {number} [z] - The z value. Defaults to 0.
     * @example
     * var v = new pc.Vec3(1, 2, 3);
     */
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    applyQuaternion(q) {
        const x = this.x, y = this.y, z = this.z;
        const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // calculate quat * vector
        const ix = qw * x + qy * z - qz * y;
        const iy = qw * y + qz * x - qx * z;
        const iz = qw * z + qx * y - qy * x;
        const iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
    }
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    setFromMatrixPosition(m) {
        const e = m.data;
        this.x = e[12];
        this.y = e[13];
        this.z = e[14];
        return this;
    }
    /**
     * Adds a 3-dimensional vector to another in place.
     *
     * @param {Vec3} rhs - The vector to add to the specified vector.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(10, 10, 10);
     * var b = new pc.Vec3(20, 20, 20);
     *
     * a.add(b);
     *
     * // Outputs [30, 30, 30]
     * console.log("The result of the addition is: " + a.toString());
     */
    add(rhs) {
        this.x += rhs.x;
        this.y += rhs.y;
        this.z += rhs.z;
        return this;
    }
    /**
     * Adds two 3-dimensional vectors together and returns the result.
     *
     * @param {Vec3} lhs - The first vector operand for the addition.
     * @param {Vec3} rhs - The second vector operand for the addition.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(10, 10, 10);
     * var b = new pc.Vec3(20, 20, 20);
     * var r = new pc.Vec3();
     *
     * r.add2(a, b);
     * // Outputs [30, 30, 30]
     *
     * console.log("The result of the addition is: " + r.toString());
     */
    add2(lhs, rhs) {
        this.x = lhs.x + rhs.x;
        this.y = lhs.y + rhs.y;
        this.z = lhs.z + rhs.z;
        return this;
    }
    /**
     * Adds a number to each element of a vector.
     *
     * @param {number} scalar - The number to add.
     * @returns {Vec3} Self for chaining.
     * @example
     * var vec = new pc.Vec3(3, 4, 5);
     *
     * vec.addScalar(2);
     *
     * // Outputs [5, 6, 7]
     * console.log("The result of the addition is: " + vec.toString());
     */
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        this.z += scalar;
        return this;
    }
    /**
     * Returns an identical copy of the specified 3-dimensional vector.
     *
     * @returns {Vec3} A 3-dimensional vector containing the result of the cloning.
     * @example
     * var v = new pc.Vec3(10, 20, 30);
     * var vclone = v.clone();
     * console.log("The result of the cloning is: " + vclone.toString());
     */
    clone() {
        return new Vec3(this.x, this.y, this.z);
    }
    /**
     * Copies the contents of a source 3-dimensional vector to a destination 3-dimensional vector.
     *
     * @param {Vec3} rhs - A vector to copy to the specified vector.
     * @returns {Vec3} Self for chaining.
     * @example
     * var src = new pc.Vec3(10, 20, 30);
     * var dst = new pc.Vec3();
     *
     * dst.copy(src);
     *
     * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
     */
    copy(rhs) {
        this.x = rhs.x;
        this.y = rhs.y;
        this.z = rhs.z;
        return this;
    }
    /**
     * Returns the result of a cross product operation performed on the two specified 3-dimensional
     * vectors.
     *
     * @param {Vec3} lhs - The first 3-dimensional vector operand of the cross product.
     * @param {Vec3} rhs - The second 3-dimensional vector operand of the cross product.
     * @returns {Vec3} Self for chaining.
     * @example
     * var back = new pc.Vec3().cross(pc.Vec3.RIGHT, pc.Vec3.UP);
     *
     * // Prints the Z axis (i.e. [0, 0, 1])
     * console.log("The result of the cross product is: " + back.toString());
     */
    cross(lhs, rhs) {
        // Create temporary variables in case lhs or rhs are 'this'
        const lx = lhs.x;
        const ly = lhs.y;
        const lz = lhs.z;
        const rx = rhs.x;
        const ry = rhs.y;
        const rz = rhs.z;
        this.x = ly * rz - ry * lz;
        this.y = lz * rx - rz * lx;
        this.z = lx * ry - rx * ly;
        return this;
    }
    /**
     * Returns the distance between the two specified 3-dimensional vectors.
     *
     * @param {Vec3} rhs - The second 3-dimensional vector to test.
     * @returns {number} The distance between the two vectors.
     * @example
     * var v1 = new pc.Vec3(5, 10, 20);
     * var v2 = new pc.Vec3(10, 20, 40);
     * var d = v1.distance(v2);
     * console.log("The distance between v1 and v2 is: " + d);
     */
    distance(rhs) {
        const x = this.x - rhs.x;
        const y = this.y - rhs.y;
        const z = this.z - rhs.z;
        return Math.sqrt(x * x + y * y + z * z);
    }
    /**
     * Divides a 3-dimensional vector by another in place.
     *
     * @param {Vec3} rhs - The vector to divide the specified vector by.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(4, 9, 16);
     * var b = new pc.Vec3(2, 3, 4);
     *
     * a.div(b);
     *
     * // Outputs [2, 3, 4]
     * console.log("The result of the division is: " + a.toString());
     */
    div(rhs) {
        this.x /= rhs.x;
        this.y /= rhs.y;
        this.z /= rhs.z;
        return this;
    }
    /**
     * Divides one 3-dimensional vector by another and writes the result to the specified vector.
     *
     * @param {Vec3} lhs - The dividend vector (the vector being divided).
     * @param {Vec3} rhs - The divisor vector (the vector dividing the dividend).
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(4, 9, 16);
     * var b = new pc.Vec3(2, 3, 4);
     * var r = new pc.Vec3();
     *
     * r.div2(a, b);
     * // Outputs [2, 3, 4]
     *
     * console.log("The result of the division is: " + r.toString());
     */
    div2(lhs, rhs) {
        this.x = lhs.x / rhs.x;
        this.y = lhs.y / rhs.y;
        this.z = lhs.z / rhs.z;
        return this;
    }
    /**
     * Divides each element of a vector by a number.
     *
     * @param {number} scalar - The number to divide by.
     * @returns {Vec3} Self for chaining.
     * @example
     * var vec = new pc.Vec3(3, 6, 9);
     *
     * vec.divScalar(3);
     *
     * // Outputs [1, 2, 3]
     * console.log("The result of the division is: " + vec.toString());
     */
    divScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        return this;
    }
    /**
     * Returns the result of a dot product operation performed on the two specified 3-dimensional
     * vectors.
     *
     * @param {Vec3} rhs - The second 3-dimensional vector operand of the dot product.
     * @returns {number} The result of the dot product operation.
     * @example
     * var v1 = new pc.Vec3(5, 10, 20);
     * var v2 = new pc.Vec3(10, 20, 40);
     * var v1dotv2 = v1.dot(v2);
     * console.log("The result of the dot product is: " + v1dotv2);
     */
    dot(rhs) {
        return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
    }
    /**
     * Reports whether two vectors are equal.
     *
     * @param {Vec3} rhs - The vector to compare to the specified vector.
     * @returns {boolean} True if the vectors are equal and false otherwise.
     * @example
     * var a = new pc.Vec3(1, 2, 3);
     * var b = new pc.Vec3(4, 5, 6);
     * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs) {
        return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z;
    }
    /**
     * Returns the magnitude of the specified 3-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 3-dimensional vector.
     * @example
     * var vec = new pc.Vec3(3, 4, 0);
     * var len = vec.length();
     * // Outputs 5
     * console.log("The length of the vector is: " + len);
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * Returns the magnitude squared of the specified 3-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 3-dimensional vector.
     * @example
     * var vec = new pc.Vec3(3, 4, 0);
     * var len = vec.lengthSq();
     * // Outputs 25
     * console.log("The length squared of the vector is: " + len);
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Returns the result of a linear interpolation between two specified 3-dimensional vectors.
     *
     * @param {Vec3} lhs - The 3-dimensional to interpolate from.
     * @param {Vec3} rhs - The 3-dimensional to interpolate to.
     * @param {number} alpha - The value controlling the point of interpolation. Between 0 and 1,
     * the linear interpolant will occur on a straight line between lhs and rhs. Outside of this
     * range, the linear interpolant will occur on a ray extrapolated from this line.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(0, 0, 0);
     * var b = new pc.Vec3(10, 10, 10);
     * var r = new pc.Vec3();
     *
     * r.lerp(a, b, 0);   // r is equal to a
     * r.lerp(a, b, 0.5); // r is 5, 5, 5
     * r.lerp(a, b, 1);   // r is equal to b
     */
    lerp2(lhs, rhs, alpha) {
        this.x = lhs.x + alpha * (rhs.x - lhs.x);
        this.y = lhs.y + alpha * (rhs.y - lhs.y);
        this.z = lhs.z + alpha * (rhs.z - lhs.z);
        return this;
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
    }
    /**
     * Multiplies a 3-dimensional vector to another in place.
     *
     * @param {Vec3} rhs - The 3-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(2, 3, 4);
     * var b = new pc.Vec3(4, 5, 6);
     *
     * a.mul(b);
     *
     * // Outputs 8, 15, 24
     * console.log("The result of the multiplication is: " + a.toString());
     */
    mul(rhs) {
        this.x *= rhs.x;
        this.y *= rhs.y;
        this.z *= rhs.z;
        return this;
    }
    /**
     * Returns the result of multiplying the specified 3-dimensional vectors together.
     *
     * @param {Vec3} lhs - The 3-dimensional vector used as the first multiplicand of the operation.
     * @param {Vec3} rhs - The 3-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(2, 3, 4);
     * var b = new pc.Vec3(4, 5, 6);
     * var r = new pc.Vec3();
     *
     * r.mul2(a, b);
     *
     * // Outputs 8, 15, 24
     * console.log("The result of the multiplication is: " + r.toString());
     */
    mul2(lhs, rhs) {
        this.x = lhs.x * rhs.x;
        this.y = lhs.y * rhs.y;
        this.z = lhs.z * rhs.z;
        return this;
    }
    /**
     * Multiplies each element of a vector by a number.
     *
     * @param {number} scalar - The number to multiply by.
     * @returns {Vec3} Self for chaining.
     * @example
     * var vec = new pc.Vec3(3, 6, 9);
     *
     * vec.mulScalar(3);
     *
     * // Outputs [9, 18, 27]
     * console.log("The result of the multiplication is: " + vec.toString());
     */
    mulScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    /**
     * Returns this 3-dimensional vector converted to a unit vector in place. If the vector has a
     * length of zero, the vector's elements will be set to zero.
     *
     * @returns {Vec3} Self for chaining.
     * @example
     * var v = new pc.Vec3(25, 0, 0);
     *
     * v.normalize();
     *
     * // Outputs 1, 0, 0
     * console.log("The result of the vector normalization is: " + v.toString());
     */
    normalize() {
        const lengthSq = this.x * this.x + this.y * this.y + this.z * this.z;
        if (lengthSq > 0) {
            const invLength = 1 / Math.sqrt(lengthSq);
            this.x *= invLength;
            this.y *= invLength;
            this.z *= invLength;
        }
        return this;
    }
    /**
     * Each element is set to the largest integer less than or equal to its value.
     *
     * @returns {Vec3} Self for chaining.
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    /**
     * Each element is rounded up to the next largest integer.
     *
     * @returns {Vec3} Self for chaining.
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    /**
     * Each element is rounded up or down to the nearest integer.
     *
     * @returns {Vec3} Self for chaining.
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is smaller.
     *
     * @param {Vec3} rhs - The 3-dimensional vector used as the source of elements to compare to.
     * @returns {Vec3} Self for chaining.
     */
    min(rhs) {
        if (rhs.x < this.x)
            this.x = rhs.x;
        if (rhs.y < this.y)
            this.y = rhs.y;
        if (rhs.z < this.z)
            this.z = rhs.z;
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is larger.
     *
     * @param {Vec3} rhs - The 3-dimensional vector used as the source of elements to compare to.
     * @returns {Vec3} Self for chaining.
     */
    max(rhs) {
        if (rhs.x > this.x)
            this.x = rhs.x;
        if (rhs.y > this.y)
            this.y = rhs.y;
        if (rhs.z > this.z)
            this.z = rhs.z;
        return this;
    }
    /**
     * Projects this 3-dimensional vector onto the specified vector.
     *
     * @param {Vec3} rhs - The vector onto which the original vector will be projected on.
     * @returns {Vec3} Self for chaining.
     * @example
     * var v = new pc.Vec3(5, 5, 5);
     * var normal = new pc.Vec3(1, 0, 0);
     *
     * v.project(normal);
     *
     * // Outputs 5, 0, 0
     * console.log("The result of the vector projection is: " + v.toString());
     */
    project(rhs) {
        const a_dot_b = this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
        const b_dot_b = rhs.x * rhs.x + rhs.y * rhs.y + rhs.z * rhs.z;
        const s = a_dot_b / b_dot_b;
        this.x = rhs.x * s;
        this.y = rhs.y * s;
        this.z = rhs.z * s;
        return this;
    }
    /**
     * Sets the specified 3-dimensional vector to the supplied numerical values.
     *
     * @param {number} x - The value to set on the first component of the vector.
     * @param {number} y - The value to set on the second component of the vector.
     * @param {number} z - The value to set on the third component of the vector.
     * @returns {Vec3} Self for chaining.
     * @example
     * var v = new pc.Vec3();
     * v.set(5, 10, 20);
     *
     * // Outputs 5, 10, 20
     * console.log("The result of the vector set is: " + v.toString());
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    /**
     * Subtracts a 3-dimensional vector from another in place.
     *
     * @param {Vec3} rhs - The vector to add to the specified vector.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(10, 10, 10);
     * var b = new pc.Vec3(20, 20, 20);
     *
     * a.sub(b);
     *
     * // Outputs [-10, -10, -10]
     * console.log("The result of the subtraction is: " + a.toString());
     */
    sub(rhs) {
        this.x -= rhs.x;
        this.y -= rhs.y;
        this.z -= rhs.z;
        return this;
    }
    /**
     * Subtracts two 3-dimensional vectors from one another and returns the result.
     *
     * @param {Vec3} lhs - The first vector operand for the addition.
     * @param {Vec3} rhs - The second vector operand for the addition.
     * @returns {Vec3} Self for chaining.
     * @example
     * var a = new pc.Vec3(10, 10, 10);
     * var b = new pc.Vec3(20, 20, 20);
     * var r = new pc.Vec3();
     *
     * r.sub2(a, b);
     *
     * // Outputs [-10, -10, -10]
     * console.log("The result of the subtraction is: " + r.toString());
     */
    sub2(lhs, rhs) {
        this.x = lhs.x - rhs.x;
        this.y = lhs.y - rhs.y;
        this.z = lhs.z - rhs.z;
        return this;
    }
    /**
     * Subtracts a number from each element of a vector.
     *
     * @param {number} scalar - The number to subtract.
     * @returns {Vec3} Self for chaining.
     * @example
     * var vec = new pc.Vec3(3, 4, 5);
     *
     * vec.subScalar(2);
     *
     * // Outputs [1, 2, 3]
     * console.log("The result of the subtraction is: " + vec.toString());
     */
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        this.z -= scalar;
        return this;
    }
    /**
     * Converts the vector to string form.
     *
     * @returns {string} The vector in string form.
     * @example
     * var v = new pc.Vec3(20, 10, 5);
     * // Outputs [20, 10, 5]
     * console.log(v.toString());
     */
    toString() {
        return `[${this.x}, ${this.y}, ${this.z}]`;
    }
    /**
     * Returns a new Vector3 set to (0.0, 0.0, 0.0)
     * @returns a new empty Vector3
     */
    static Zero() {
        return new Vec3(0.0, 0.0, 0.0);
    }
    /**
     * Returns a new Vector3 set to (1.0, 1.0, 1.0)
     * @returns a new unit Vector3
     */
    static One() {
        return new Vec3(1.0, 1.0, 1.0);
    }
}
/**
 * A constant vector set to [0, 0, 0].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.ZERO = Object.freeze(new Vec3(0, 0, 0));
/**
 * A constant vector set to [1, 1, 1].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.ONE = Object.freeze(new Vec3(1, 1, 1));
/**
 * A constant vector set to [0, 1, 0].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.UP = Object.freeze(new Vec3(0, 1, 0));
/**
 * A constant vector set to [0, -1, 0].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.DOWN = Object.freeze(new Vec3(0, -1, 0));
/**
 * A constant vector set to [1, 0, 0].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.RIGHT = Object.freeze(new Vec3(1, 0, 0));
/**
 * A constant vector set to [-1, 0, 0].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.LEFT = Object.freeze(new Vec3(-1, 0, 0));
/**
 * A constant vector set to [0, 0, -1].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.FORWARD = Object.freeze(new Vec3(0, 0, -1));
/**
 * A constant vector set to [0, 0, 1].
 *
 * @type {Vec3}
 * @readonly
 */
Vec3.BACK = Object.freeze(new Vec3(0, 0, 1));
Vec3.AXIS_X = Object.freeze(new Vec3(1, 0, 0));
Vec3.AXIS_Y = Object.freeze(new Vec3(0, 1, 0));
Vec3.AXIS_Z = Object.freeze(new Vec3(0, 0, 1));



/***/ }),

/***/ "./src/maths/math.vec4.ts":
/*!********************************!*\
  !*** ./src/maths/math.vec4.ts ***!
  \********************************/
/*! exports provided: Vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
/**
 * A 4-dimensional vector.
 */
class Vec4 {
    /**
     * Creates a new Vec4 object.
     *
     * @param {number|number[]} [x] - The x value. Defaults to 0. If x is an array of length 4, the
     * array will be used to populate all components.
     * @param {number} [y] - The y value. Defaults to 0.
     * @param {number} [z] - The z value. Defaults to 0.
     * @param {number} [w] - The w value. Defaults to 0.
     * @example
     * var v = new pc.Vec4(1, 2, 3, 4);
     */
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
     * Adds a 4-dimensional vector to another in place.
     *
     * @param {Vec4} rhs - The vector to add to the specified vector.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(10, 10, 10, 10);
     * var b = new pc.Vec4(20, 20, 20, 20);
     *
     * a.add(b);
     *
     * // Outputs [30, 30, 30]
     * console.log("The result of the addition is: " + a.toString());
     */
    add(rhs) {
        this.x += rhs.x;
        this.y += rhs.y;
        this.z += rhs.z;
        this.w += rhs.w;
        return this;
    }
    /**
     * Adds two 4-dimensional vectors together and returns the result.
     *
     * @param {Vec4} lhs - The first vector operand for the addition.
     * @param {Vec4} rhs - The second vector operand for the addition.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(10, 10, 10, 10);
     * var b = new pc.Vec4(20, 20, 20, 20);
     * var r = new pc.Vec4();
     *
     * r.add2(a, b);
     * // Outputs [30, 30, 30]
     *
     * console.log("The result of the addition is: " + r.toString());
     */
    add2(lhs, rhs) {
        this.x = lhs.x + rhs.x;
        this.y = lhs.y + rhs.y;
        this.z = lhs.z + rhs.z;
        this.w = lhs.w + rhs.w;
        return this;
    }
    /**
     * Adds a number to each element of a vector.
     *
     * @param {number} scalar - The number to add.
     * @returns {Vec4} Self for chaining.
     * @example
     * var vec = new pc.Vec4(3, 4, 5, 6);
     *
     * vec.addScalar(2);
     *
     * // Outputs [5, 6, 7, 8]
     * console.log("The result of the addition is: " + vec.toString());
     */
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        this.z += scalar;
        this.w += scalar;
        return this;
    }
    /**
     * Returns an identical copy of the specified 4-dimensional vector.
     *
     * @returns {Vec4} A 4-dimensional vector containing the result of the cloning.
     * @example
     * var v = new pc.Vec4(10, 20, 30, 40);
     * var vclone = v.clone();
     * console.log("The result of the cloning is: " + vclone.toString());
     */
    clone() {
        return new Vec4(this.x, this.y, this.z, this.w);
    }
    /**
     * Copies the contents of a source 4-dimensional vector to a destination 4-dimensional vector.
     *
     * @param {Vec4} rhs - A vector to copy to the specified vector.
     * @returns {Vec4} Self for chaining.
     * @example
     * var src = new pc.Vec4(10, 20, 30, 40);
     * var dst = new pc.Vec4();
     *
     * dst.copy(src);
     *
     * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
     */
    copy(rhs) {
        this.x = rhs.x;
        this.y = rhs.y;
        this.z = rhs.z;
        this.w = rhs.w;
        return this;
    }
    /**
     * Divides a 4-dimensional vector by another in place.
     *
     * @param {Vec4} rhs - The vector to divide the specified vector by.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(4, 9, 16, 25);
     * var b = new pc.Vec4(2, 3, 4, 5);
     *
     * a.div(b);
     *
     * // Outputs [2, 3, 4, 5]
     * console.log("The result of the division is: " + a.toString());
     */
    div(rhs) {
        this.x /= rhs.x;
        this.y /= rhs.y;
        this.z /= rhs.z;
        this.w /= rhs.w;
        return this;
    }
    /**
     * Divides one 4-dimensional vector by another and writes the result to the specified vector.
     *
     * @param {Vec4} lhs - The dividend vector (the vector being divided).
     * @param {Vec4} rhs - The divisor vector (the vector dividing the dividend).
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(4, 9, 16, 25);
     * var b = new pc.Vec4(2, 3, 4, 5);
     * var r = new pc.Vec4();
     *
     * r.div2(a, b);
     * // Outputs [2, 3, 4, 5]
     *
     * console.log("The result of the division is: " + r.toString());
     */
    div2(lhs, rhs) {
        this.x = lhs.x / rhs.x;
        this.y = lhs.y / rhs.y;
        this.z = lhs.z / rhs.z;
        this.w = lhs.w / rhs.w;
        return this;
    }
    /**
     * Divides each element of a vector by a number.
     *
     * @param {number} scalar - The number to divide by.
     * @returns {Vec4} Self for chaining.
     * @example
     * var vec = new pc.Vec4(3, 6, 9, 12);
     *
     * vec.divScalar(3);
     *
     * // Outputs [1, 2, 3, 4]
     * console.log("The result of the division is: " + vec.toString());
     */
    divScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        this.w /= scalar;
        return this;
    }
    /**
     * Returns the result of a dot product operation performed on the two specified 4-dimensional
     * vectors.
     *
     * @param {Vec4} rhs - The second 4-dimensional vector operand of the dot product.
     * @returns {number} The result of the dot product operation.
     * @example
     * var v1 = new pc.Vec4(5, 10, 20, 40);
     * var v2 = new pc.Vec4(10, 20, 40, 80);
     * var v1dotv2 = v1.dot(v2);
     * console.log("The result of the dot product is: " + v1dotv2);
     */
    dot(rhs) {
        return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z + this.w * rhs.w;
    }
    /**
     * Reports whether two vectors are equal.
     *
     * @param {Vec4} rhs - The vector to compare to the specified vector.
     * @returns {boolean} True if the vectors are equal and false otherwise.
     * @example
     * var a = new pc.Vec4(1, 2, 3, 4);
     * var b = new pc.Vec4(5, 6, 7, 8);
     * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
     */
    equals(rhs) {
        return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z && this.w === rhs.w;
    }
    /**
     * Returns the magnitude of the specified 4-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 4-dimensional vector.
     * @example
     * var vec = new pc.Vec4(3, 4, 0, 0);
     * var len = vec.length();
     * // Outputs 5
     * console.log("The length of the vector is: " + len);
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    /**
     * Returns the magnitude squared of the specified 4-dimensional vector.
     *
     * @returns {number} The magnitude of the specified 4-dimensional vector.
     * @example
     * var vec = new pc.Vec4(3, 4, 0);
     * var len = vec.lengthSq();
     * // Outputs 25
     * console.log("The length squared of the vector is: " + len);
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    /**
     * Returns the result of a linear interpolation between two specified 4-dimensional vectors.
     *
     * @param {Vec4} lhs - The 4-dimensional to interpolate from.
     * @param {Vec4} rhs - The 4-dimensional to interpolate to.
     * @param {number} alpha - The value controlling the point of interpolation. Between 0 and 1,
     * the linear interpolant will occur on a straight line between lhs and rhs. Outside of this
     * range, the linear interpolant will occur on a ray extrapolated from this line.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(0, 0, 0, 0);
     * var b = new pc.Vec4(10, 10, 10, 10);
     * var r = new pc.Vec4();
     *
     * r.lerp(a, b, 0);   // r is equal to a
     * r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
     * r.lerp(a, b, 1);   // r is equal to b
     */
    lerp(lhs, rhs, alpha) {
        this.x = lhs.x + alpha * (rhs.x - lhs.x);
        this.y = lhs.y + alpha * (rhs.y - lhs.y);
        this.z = lhs.z + alpha * (rhs.z - lhs.z);
        this.w = lhs.w + alpha * (rhs.w - lhs.w);
        return this;
    }
    /**
     * Multiplies a 4-dimensional vector to another in place.
     *
     * @param {Vec4} rhs - The 4-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(2, 3, 4, 5);
     * var b = new pc.Vec4(4, 5, 6, 7);
     *
     * a.mul(b);
     *
     * // Outputs 8, 15, 24, 35
     * console.log("The result of the multiplication is: " + a.toString());
     */
    mul(rhs) {
        this.x *= rhs.x;
        this.y *= rhs.y;
        this.z *= rhs.z;
        this.w *= rhs.w;
        return this;
    }
    /**
     * Returns the result of multiplying the specified 4-dimensional vectors together.
     *
     * @param {Vec4} lhs - The 4-dimensional vector used as the first multiplicand of the operation.
     * @param {Vec4} rhs - The 4-dimensional vector used as the second multiplicand of the operation.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(2, 3, 4, 5);
     * var b = new pc.Vec4(4, 5, 6, 7);
     * var r = new pc.Vec4();
     *
     * r.mul2(a, b);
     *
     * // Outputs 8, 15, 24, 35
     * console.log("The result of the multiplication is: " + r.toString());
     */
    mul2(lhs, rhs) {
        this.x = lhs.x * rhs.x;
        this.y = lhs.y * rhs.y;
        this.z = lhs.z * rhs.z;
        this.w = lhs.w * rhs.w;
        return this;
    }
    /**
     * Multiplies each element of a vector by a number.
     *
     * @param {number} scalar - The number to multiply by.
     * @returns {Vec4} Self for chaining.
     * @example
     * var vec = new pc.Vec4(3, 6, 9, 12);
     *
     * vec.mulScalar(3);
     *
     * // Outputs [9, 18, 27, 36]
     * console.log("The result of the multiplication is: " + vec.toString());
     */
    mulScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        this.w *= scalar;
        return this;
    }
    /**
     * Returns this 4-dimensional vector converted to a unit vector in place. If the vector has a
     * length of zero, the vector's elements will be set to zero.
     *
     * @returns {Vec4} Self for chaining.
     * @example
     * var v = new pc.Vec4(25, 0, 0, 0);
     *
     * v.normalize();
     *
     * // Outputs 1, 0, 0, 0
     * console.log("The result of the vector normalization is: " + v.toString());
     */
    normalize() {
        const lengthSq = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        if (lengthSq > 0) {
            const invLength = 1 / Math.sqrt(lengthSq);
            this.x *= invLength;
            this.y *= invLength;
            this.z *= invLength;
            this.w *= invLength;
        }
        return this;
    }
    /**
     * Each element is set to the largest integer less than or equal to its value.
     *
     * @returns {Vec4} Self for chaining.
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    }
    /**
     * Each element is rounded up to the next largest integer.
     *
     * @returns {Vec4} Self for chaining.
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    }
    /**
     * Each element is rounded up or down to the nearest integer.
     *
     * @returns {Vec4} Self for chaining.
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is smaller.
     *
     * @param {Vec4} rhs - The 4-dimensional vector used as the source of elements to compare to.
     * @returns {Vec4} Self for chaining.
     */
    min(rhs) {
        if (rhs.x < this.x)
            this.x = rhs.x;
        if (rhs.y < this.y)
            this.y = rhs.y;
        if (rhs.z < this.z)
            this.z = rhs.z;
        if (rhs.w < this.w)
            this.w = rhs.w;
        return this;
    }
    /**
     * Each element is assigned a value from rhs parameter if it is larger.
     *
     * @param {Vec4} rhs - The 4-dimensional vector used as the source of elements to compare to.
     * @returns {Vec4} Self for chaining.
     */
    max(rhs) {
        if (rhs.x > this.x)
            this.x = rhs.x;
        if (rhs.y > this.y)
            this.y = rhs.y;
        if (rhs.z > this.z)
            this.z = rhs.z;
        if (rhs.w > this.w)
            this.w = rhs.w;
        return this;
    }
    /**
     * Sets the specified 4-dimensional vector to the supplied numerical values.
     *
     * @param {number} x - The value to set on the first component of the vector.
     * @param {number} y - The value to set on the second component of the vector.
     * @param {number} z - The value to set on the third component of the vector.
     * @param {number} w - The value to set on the fourth component of the vector.
     * @returns {Vec4} Self for chaining.
     * @example
     * var v = new pc.Vec4();
     * v.set(5, 10, 20, 40);
     *
     * // Outputs 5, 10, 20, 40
     * console.log("The result of the vector set is: " + v.toString());
     */
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    /**
     * Subtracts a 4-dimensional vector from another in place.
     *
     * @param {Vec4} rhs - The vector to add to the specified vector.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(10, 10, 10, 10);
     * var b = new pc.Vec4(20, 20, 20, 20);
     *
     * a.sub(b);
     *
     * // Outputs [-10, -10, -10, -10]
     * console.log("The result of the subtraction is: " + a.toString());
     */
    sub(rhs) {
        this.x -= rhs.x;
        this.y -= rhs.y;
        this.z -= rhs.z;
        this.w -= rhs.w;
        return this;
    }
    /**
     * Subtracts two 4-dimensional vectors from one another and returns the result.
     *
     * @param {Vec4} lhs - The first vector operand for the subtraction.
     * @param {Vec4} rhs - The second vector operand for the subtraction.
     * @returns {Vec4} Self for chaining.
     * @example
     * var a = new pc.Vec4(10, 10, 10, 10);
     * var b = new pc.Vec4(20, 20, 20, 20);
     * var r = new pc.Vec4();
     *
     * r.sub2(a, b);
     *
     * // Outputs [-10, -10, -10, -10]
     * console.log("The result of the subtraction is: " + r.toString());
     */
    sub2(lhs, rhs) {
        this.x = lhs.x - rhs.x;
        this.y = lhs.y - rhs.y;
        this.z = lhs.z - rhs.z;
        this.w = lhs.w - rhs.w;
        return this;
    }
    /**
     * Subtracts a number from each element of a vector.
     *
     * @param {number} scalar - The number to subtract.
     * @returns {Vec4} Self for chaining.
     * @example
     * var vec = new pc.Vec4(3, 4, 5, 6);
     *
     * vec.subScalar(2);
     *
     * // Outputs [1, 2, 3, 4]
     * console.log("The result of the subtraction is: " + vec.toString());
     */
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        this.z -= scalar;
        this.w -= scalar;
        return this;
    }
    /**
     * Converts the vector to string form.
     *
     * @returns {string} The vector in string form.
     * @example
     * var v = new pc.Vec4(20, 10, 5, 0);
     * // Outputs [20, 10, 5, 0]
     * console.log(v.toString());
     */
    toString() {
        return `[${this.x}, ${this.y}, ${this.z}, ${this.w}]`;
    }
}
/**
 * A constant vector set to [0, 0, 0, 0].
 *
 * @type {Vec4}
 * @readonly
 */
Vec4.ZERO = Object.freeze(new Vec4(0, 0, 0, 0));
/**
 * A constant vector set to [1, 1, 1, 1].
 *
 * @type {Vec4}
 * @readonly
 */
Vec4.ONE = Object.freeze(new Vec4(1, 1, 1, 1));



/***/ }),

/***/ "./src/mesh/index.ts":
/*!***************************!*\
  !*** ./src/mesh/index.ts ***!
  \***************************/
/*! exports provided: Mesh, MeshAxis, MeshSprite, MeshSkybox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh */ "./src/mesh/mesh.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _mesh__WEBPACK_IMPORTED_MODULE_0__["Mesh"]; });

/* harmony import */ var _mesh_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesh.axis */ "./src/mesh/mesh.axis.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshAxis", function() { return _mesh_axis__WEBPACK_IMPORTED_MODULE_1__["MeshAxis"]; });

/* harmony import */ var _mesh_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mesh.sprite */ "./src/mesh/mesh.sprite.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshSprite", function() { return _mesh_sprite__WEBPACK_IMPORTED_MODULE_2__["MeshSprite"]; });

/* harmony import */ var _mesh_skybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesh.skybox */ "./src/mesh/mesh.skybox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshSkybox", function() { return _mesh_skybox__WEBPACK_IMPORTED_MODULE_3__["MeshSkybox"]; });







/***/ }),

/***/ "./src/mesh/mesh.axis.ts":
/*!*******************************!*\
  !*** ./src/mesh/mesh.axis.ts ***!
  \*******************************/
/*! exports provided: MeshAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshAxis", function() { return MeshAxis; });
/* harmony import */ var _engines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines */ "./src/engines/index.ts");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry */ "./src/geometry/index.ts");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material */ "./src/material/material.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesh */ "./src/mesh/mesh.ts");




class MeshAxis {
    constructor(engine, size) {
        this._engine = engine;
        const geoX = this.getGeoX(size);
        const geoY = this.getGeoX(size);
        const geoZ = this.getGeoX(size);
        geoY.attributes[0].value = [0, 0, 0, 0, 1 * size, 0];
        geoZ.attributes[0].value = [0, 0, 0, 0, 0, 1 * size];
        const matX = this.getMat({ x: 1, y: 0, z: 0, w: 1 });
        const matY = this.getMat({ x: 0, y: 1, z: 0, w: 1 });
        const matZ = this.getMat({ x: 0, y: 0, z: 1, w: 1 });
        this.meshX = new _mesh__WEBPACK_IMPORTED_MODULE_3__["Mesh"](this._engine, new _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"](engine, geoX), matX);
        this.meshY = new _mesh__WEBPACK_IMPORTED_MODULE_3__["Mesh"](this._engine, new _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"](engine, geoY), matY);
        this.meshZ = new _mesh__WEBPACK_IMPORTED_MODULE_3__["Mesh"](this._engine, new _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"](engine, geoZ), matZ);
    }
    getMat(color) {
        const vertexShader = `
      in vec3 aPosition;

      uniform mat4 projectionMatrix;
      uniform mat4 modelViewMatrix;

      void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(aPosition, 1.0);
      }
    `;
        const fragmentShader = `
      uniform vec4 uColor;
      out vec4 FragColor;

      void main() {
        FragColor = uColor;
      }
      `;
        const mat = new _material_material__WEBPACK_IMPORTED_MODULE_2__["Material"](this._engine, {
            vertexShader,
            fragmentShader,
            uniforms: {
                uColor: { type: _engines__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec4, value: color },
            },
        });
        return mat;
    }
    getGeoX(size) {
        return {
            drawType: _engines__WEBPACK_IMPORTED_MODULE_0__["PrimitiveType"].PRIMITIVE_LINES,
            attributes: [
                {
                    name: "aPosition",
                    value: [0, 0, 0, 1 * size, 0, 0],
                    itemSize: 3,
                },
            ],
        };
    }
}


/***/ }),

/***/ "./src/mesh/mesh.skybox.ts":
/*!*********************************!*\
  !*** ./src/mesh/mesh.skybox.ts ***!
  \*********************************/
/*! exports provided: MeshSkybox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshSkybox", function() { return MeshSkybox; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _geometry_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/builder */ "./src/geometry/builder.ts");
/* harmony import */ var _geometry_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/geometry */ "./src/geometry/geometry.ts");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material */ "./src/material/material.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mesh */ "./src/mesh/mesh.ts");
/* harmony import */ var _shaders_skybox_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/skybox.vert */ "./src/shaders/skybox.vert");
/* harmony import */ var _shaders_skybox_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/skybox.frag */ "./src/shaders/skybox.frag");
/* harmony import */ var _shaders_gles3_frag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shaders/gles3.frag */ "./src/shaders/gles3.frag");
/* harmony import */ var _maths_math_mat3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maths/math.mat3 */ "./src/maths/math.mat3.ts");









class MeshSkybox {
    constructor(engine, options) {
        this._engine = engine;
        this._options = options;
        const geometry = new _geometry_geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"](engine, this._getGeometryData());
        this.mesh = new _mesh__WEBPACK_IMPORTED_MODULE_4__["Mesh"](engine, geometry, this._getMat());
        this.mesh.material.cull = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["CullFace"].CULLFACE_FRONT;
    }
    _getGeometryData() {
        const model = Object(_geometry_builder__WEBPACK_IMPORTED_MODULE_1__["boxBuilder"])(1);
        return {
            indices: {
                value: model.indices,
            },
            attributes: [
                {
                    name: "aPosition",
                    value: model.positions,
                    itemSize: 3,
                },
            ],
        };
    }
    _getMat() {
        // const { urls } = this._options;
        // const skyboxTexture = new Texture(this._engine, {
        //     urls,
        //     minFilter: TextureFilter.FILTER_LINEAR,
        //     magFilter: TextureFilter.FILTER_LINEAR,
        //     addressU: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
        //     addressV: TextureAddress.ADDRESS_CLAMP_TO_EDGE,
        // });
        let mat3 = new _maths_math_mat3__WEBPACK_IMPORTED_MODULE_8__["Mat3"]();
        return new _material_material__WEBPACK_IMPORTED_MODULE_3__["Material"](this._engine, {
            vertexShader: _shaders_skybox_vert__WEBPACK_IMPORTED_MODULE_5__["default"],
            fragmentShader: `${_shaders_gles3_frag__WEBPACK_IMPORTED_MODULE_7__["default"]}\n${_shaders_skybox_frag__WEBPACK_IMPORTED_MODULE_6__["default"]}`,
            uniforms: {
                texture_envAtlas: { type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Texture, value: this._options.cubeMap },
                exposure: { type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Float, value: 1 },
                mipLevel: { type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Float, value: 0 },
                cubeMapRotationMatrix: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat3,
                    value: mat3.data
                }
            }
        });
    }
}


/***/ }),

/***/ "./src/mesh/mesh.sprite.ts":
/*!*********************************!*\
  !*** ./src/mesh/mesh.sprite.ts ***!
  \*********************************/
/*! exports provided: MeshSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshSprite", function() { return MeshSprite; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _geometry_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometry */ "./src/geometry/geometry.ts");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material */ "./src/material/material.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesh */ "./src/mesh/mesh.ts");




class MeshSprite {
    constructor(engine, options) {
        var _a;
        this.engine = engine;
        this._options = options;
        const geometry = new _geometry_geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"](engine, this.getGeometryData());
        this.mesh = new _mesh__WEBPACK_IMPORTED_MODULE_3__["Mesh"](engine, geometry, this.getMat((_a = this === null || this === void 0 ? void 0 : this._options) === null || _a === void 0 ? void 0 : _a.color));
    }
    getGeometryData() {
        return {
            indices: {
                value: [0, 1, 2, 0, 2, 3],
            },
            attributes: [
                {
                    name: "aPosition",
                    value: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
                    itemSize: 3,
                },
                {
                    name: "aUv",
                    value: [0, 0, 0, 1, 1, 1, 0, 1],
                    itemSize: 2,
                },
            ],
        };
    }
    getMat(color) {
        const vertexShader = `
      in vec3 aPosition;
      in vec2 aUv;
      out vec2 vUv;
      uniform float rotation;
      uniform mat4 modelViewMatrix;
      uniform mat4 viewMatrix;
      uniform mat4 projectionMatrix;

      void main() {
        // vec3 viewPos = (viewMatrix * vec4(aPosition.xyz, 1.0)).xyz;
        vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

        vec2 scale = vec2(1.,1.);
        vec2 center = vec2(0.5,0.5);
        vec2 alignedPosition = ( aPosition.xy - ( center - vec2( 0.5 ) ) ) * scale;

        vec2 rotatedPosition;
        rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
        rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

        mvPosition.xy += rotatedPosition;

        gl_Position = projectionMatrix * mvPosition;
        vUv = aUv;
      }
    `;
        const fragmentShader = `
      uniform vec4 uColor;
      out vec4 FragColor;

      void main() {
        FragColor = uColor;
      }
      `;
        if (!color) {
            color = { r: 1, g: 1, b: 1, a: 1 };
        }
        const mat = new _material_material__WEBPACK_IMPORTED_MODULE_2__["Material"](this.engine, {
            vertexShader,
            fragmentShader,
            uniforms: {
                uColor: { type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec4, value: { x: color.r, y: color.g, z: color.b, w: color.a } },
            },
        });
        return mat;
    }
}


/***/ }),

/***/ "./src/mesh/mesh.ts":
/*!**************************!*\
  !*** ./src/mesh/mesh.ts ***!
  \**************************/
/*! exports provided: Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _maths_math_euler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths/math.euler */ "./src/maths/math.euler.ts");
/* harmony import */ var _maths_math_mat3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/math.mat3 */ "./src/maths/math.mat3.ts");
/* harmony import */ var _maths_math_mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.mat4 */ "./src/maths/math.mat4.ts");
/* harmony import */ var _maths_math_quat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maths/math.quat */ "./src/maths/math.quat.ts");
/* harmony import */ var _maths_math_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maths/math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../maths/math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _misc_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../misc/tool */ "./src/misc/tool.ts");







class Mesh {
    constructor(engine, geometry, material) {
        this.geometry = geometry;
        this._engine = engine;
        this.uuid = _maths_math_tool__WEBPACK_IMPORTED_MODULE_4__["MathTool"].generateUUID();
        this.material = material;
        this.visible = true;
        this.matrix = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
        this.normalMatrix = new _maths_math_mat3__WEBPACK_IMPORTED_MODULE_1__["Mat3"]();
        this.position = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_5__["Vec3"]();
        this.scale = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_5__["Vec3"](1, 1, 1);
        this.rotation = new _maths_math_euler__WEBPACK_IMPORTED_MODULE_0__["Euler"]();
        this.quaternion = new _maths_math_quat__WEBPACK_IMPORTED_MODULE_3__["Quat"]();
        this.updateMatrix = this.updateMatrix.bind(this);
        this._onRotationChange = this._onRotationChange.bind(this);
        this.position = Object(_misc_tool__WEBPACK_IMPORTED_MODULE_6__["addProxy"])(this.position, this.updateMatrix);
        this.scale = Object(_misc_tool__WEBPACK_IMPORTED_MODULE_6__["addProxy"])(this.scale, this.updateMatrix);
        this.rotation = Object(_misc_tool__WEBPACK_IMPORTED_MODULE_6__["addProxy"])(this.rotation, this._onRotationChange);
    }
    _onRotationChange() {
        this.quaternion.setFromEuler(this.rotation);
        this.updateMatrix();
    }
    setBuffers() {
        this.geometry.setBuffers(this.material.program);
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
    }
    getClassName() {
        return "Mesh";
    }
}


/***/ }),

/***/ "./src/misc/arrayTools.ts":
/*!********************************!*\
  !*** ./src/misc/arrayTools.ts ***!
  \********************************/
/*! exports provided: ArrayTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayTools", function() { return ArrayTools; });
/**
 * Class containing a set of static utilities functions for arrays.
 */
class ArrayTools {
    /**
     * Returns an array of the given size filled with element built from the given constructor and the paramters
     * @param size the number of element to construct and put in the array
     * @param itemBuilder a callback responsible for creating new instance of item. Called once per array entry.
     * @returns a new array filled with new objects
     */
    static BuildArray(size, itemBuilder) {
        const a = [];
        for (let i = 0; i < size; ++i) {
            a.push(itemBuilder());
        }
        return a;
    }
}


/***/ }),

/***/ "./src/misc/domManagement.ts":
/*!***********************************!*\
  !*** ./src/misc/domManagement.ts ***!
  \***********************************/
/*! exports provided: IsWindowObjectExist, IsNavigatorAvailable, IsDocumentAvailable, GetDOMTextContent, isBrowserInterface, DomManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsWindowObjectExist", function() { return IsWindowObjectExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNavigatorAvailable", function() { return IsNavigatorAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDocumentAvailable", function() { return IsDocumentAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDOMTextContent", function() { return GetDOMTextContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserInterface", function() { return isBrowserInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomManagement", function() { return DomManagement; });
/**
 * Checks if the window object exists
 * @returns true if the window object exists
 */
function IsWindowObjectExist() {
    return typeof window !== "undefined";
}
/**
 * Checks if the navigator object exists
 * @returns true if the navigator object exists
 */
function IsNavigatorAvailable() {
    return typeof navigator !== "undefined";
}
/**
 * Check if the document object exists
 * @returns true if the document object exists
 */
function IsDocumentAvailable() {
    return typeof document !== "undefined";
}
/**
 * Extracts text content from a DOM element hierarchy
 * @param element defines the root element
 * @returns a string
 */
function GetDOMTextContent(element) {
    var result = "";
    var child = element.firstChild;
    while (child) {
        if (child.nodeType === 3) {
            result += child.textContent;
        }
        child = child.nextSibling;
    }
    return result;
}
/**
 * Reports whether a texture source is a canvas, image, video or ImageBitmap.
 *
 * @param {*} texture - Texture source data.
 * @returns {boolean} True if the texture is a canvas, image, video or ImageBitmap and false
 * otherwise.
 * @private
 */
function isBrowserInterface(texture) {
    return ((typeof HTMLCanvasElement !== "undefined" && texture instanceof HTMLCanvasElement) ||
        (typeof HTMLImageElement !== "undefined" && texture instanceof HTMLImageElement) ||
        (typeof HTMLVideoElement !== "undefined" && texture instanceof HTMLVideoElement) ||
        (typeof ImageBitmap !== "undefined" && texture instanceof ImageBitmap));
}
/**
 * Sets of helpers dealing with the DOM and some of the recurrent functions needed in
 * Babylon.js
 */
const DomManagement = {
    /**
     * Checks if the window object exists
     * @returns true if the window object exists
     */
    IsWindowObjectExist,
    /**
     * Checks if the navigator object exists
     * @returns true if the navigator object exists
     */
    IsNavigatorAvailable,
    /**
     * Check if the document object exists
     * @returns true if the document object exists
     */
    IsDocumentAvailable,
    /**
     * Extracts text content from a DOM element hierarchy
     * @param element defines the root element
     * @returns a string
     */
    GetDOMTextContent,
};


/***/ }),

/***/ "./src/misc/event.handler.ts":
/*!***********************************!*\
  !*** ./src/misc/event.handler.ts ***!
  \***********************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/**
 * @class
 * @name EventHandler
 * @classdesc Abstract base class that implements functionality for event handling.
 * @description Create a new event handler.
 * @example
 * var obj = new EventHandlerSubclass();
 *
 * // subscribe to an event
 * obj.on('hello', function (str) {
 *     console.log('event hello is fired', str);
 * });
 *
 * // fire event
 * obj.fire('hello', 'world');
 */
class EventHandler {
    constructor() {
        this.initEventHandler();
    }
    initEventHandler() {
        this._callbacks = {};
        this._callbackActive = {};
    }
    _addCallback(name, callback, scope, once = false) {
        if (!name || typeof name !== "string" || !callback)
            return;
        if (!this._callbacks[name])
            this._callbacks[name] = [];
        if (this._callbackActive[name] && this._callbackActive[name] === this._callbacks[name])
            this._callbackActive[name] = this._callbackActive[name].slice();
        this._callbacks[name].push({
            callback: callback,
            scope: scope || this,
            once: once,
        });
    }
    /**
     * @function
     * @name EventHandler#on
     * @description Attach an event handler to an event.
     * @param {string} name - Name of the event to bind the callback to.
     * @param {callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
     * @returns {EventHandler} Self for chaining.
     * @example
     * obj.on('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     */
    on(name, callback, scope) {
        this._addCallback(name, callback, scope, false);
        return this;
    }
    /**
     * @function
     * @name EventHandler#off
     * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
     * if scope is not provided then all events with the callback will be unbound.
     * @param {string} [name] - Name of the event to unbind.
     * @param {callbacks.HandleEvent} [callback] - Function to be unbound.
     * @param {object} [scope] - Scope that was used as the this when the event is fired.
     * @returns {EventHandler} Self for chaining.
     * @example
     * var handler = function () {
     * };
     * obj.on('test', handler);
     *
     * obj.off(); // Removes all events
     * obj.off('test'); // Removes all events called 'test'
     * obj.off('test', handler); // Removes all handler functions, called 'test'
     * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
     */
    off(name, callback, scope) {
        if (name) {
            if (this._callbackActive[name] && this._callbackActive[name] === this._callbacks[name])
                this._callbackActive[name] = this._callbackActive[name].slice();
        }
        else {
            for (var key in this._callbackActive) {
                if (!this._callbacks[key])
                    continue;
                if (this._callbacks[key] !== this._callbackActive[key])
                    continue;
                this._callbackActive[key] = this._callbackActive[key].slice();
            }
        }
        if (!name) {
            this._callbacks = {};
        }
        else if (!callback) {
            if (this._callbacks[name])
                this._callbacks[name] = [];
        }
        else {
            var events = this._callbacks[name];
            if (!events)
                return this;
            var count = events.length;
            for (var i = 0; i < count; i++) {
                if (events[i].callback !== callback)
                    continue;
                if (scope && events[i].scope !== scope)
                    continue;
                events[i--] = events[--count];
            }
            events.length = count;
        }
        return this;
    }
    // ESLint rule disabled here as documenting arg1, arg2...argN as [...] rest
    // arguments is preferable to documenting each one individually.
    /* eslint-disable valid-jsdoc */
    /**
     * @function
     * @name EventHandler#fire
     * @description Fire an event, all additional arguments are passed on to the event listener.
     * @param {object} name - Name of event to fire.
     * @param {*} [arg1] - First argument that is passed to the event handler.
     * @param {*} [arg2] - Second argument that is passed to the event handler.
     * @param {*} [arg3] - Third argument that is passed to the event handler.
     * @param {*} [arg4] - Fourth argument that is passed to the event handler.
     * @param {*} [arg5] - Fifth argument that is passed to the event handler.
     * @param {*} [arg6] - Sixth argument that is passed to the event handler.
     * @param {*} [arg7] - Seventh argument that is passed to the event handler.
     * @param {*} [arg8] - Eighth argument that is passed to the event handler.
     * @returns {EventHandler} Self for chaining.
     * @example
     * obj.fire('test', 'This is the message');
     */
    /* eslint-enable valid-jsdoc */
    fire(name, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        if (!name || !this._callbacks[name])
            return this;
        var callbacks;
        if (!this._callbackActive[name]) {
            this._callbackActive[name] = this._callbacks[name];
        }
        else {
            if (this._callbackActive[name] === this._callbacks[name])
                this._callbackActive[name] = this._callbackActive[name].slice();
            callbacks = this._callbacks[name].slice();
        }
        // TODO: What does callbacks do here?
        // In particular this condition check looks wrong: (i < (callbacks || this._callbackActive[name]).length)
        // Because callbacks is not an integer
        for (var i = 0; (callbacks || this._callbackActive[name]) && i < (callbacks || this._callbackActive[name]).length; i++) {
            var evt = (callbacks || this._callbackActive[name])[i];
            evt.callback.call(evt.scope, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
            if (evt.once) {
                var ind = this._callbacks[name].indexOf(evt);
                if (ind !== -1) {
                    if (this._callbackActive[name] === this._callbacks[name])
                        this._callbackActive[name] = this._callbackActive[name].slice();
                    this._callbacks[name].splice(ind, 1);
                }
            }
        }
        if (!callbacks)
            this._callbackActive[name] = null;
        return this;
    }
    /**
     * @function
     * @name EventHandler#once
     * @description Attach an event handler to an event. This handler will be removed after being fired once.
     * @param {string} name - Name of the event to bind the callback to.
     * @param {callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
     * @returns {EventHandler} Self for chaining.
     * @example
     * obj.once('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     * obj.fire('test', 1, 2); // not going to get handled
     */
    once(name, callback, scope) {
        this._addCallback(name, callback, scope, true);
        return this;
    }
    /**
     * @function
     * @name EventHandler#hasEvent
     * @description Test if there are any handlers bound to an event name.
     * @param {string} name - The name of the event to test.
     * @returns {boolean} True if the object has handlers bound to the specified event name.
     * @example
     * obj.on('test', function () { }); // bind an event to 'test'
     * obj.hasEvent('test'); // returns true
     * obj.hasEvent('hello'); // returns false
     */
    hasEvent(name) {
        return (this._callbacks[name] && this._callbacks[name].length !== 0) || false;
    }
}



/***/ }),

/***/ "./src/misc/fileTools.ts":
/*!*******************************!*\
  !*** ./src/misc/fileTools.ts ***!
  \*******************************/
/*! exports provided: FileTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTools", function() { return FileTools; });
/**
 * @hidden
 */
class FileTools {
    static LoadImage(options) {
        if (options.rootPath === undefined)
            options.rootPath = "";
        return new Promise(function (resolve, reject) {
            let img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = function () {
                options.onLoad && options.onLoad(img);
                resolve(img);
            };
            img.onerror = function () {
                const msg = "error load image," + options.url;
                options.onError && options.onError(msg);
                reject(msg);
            };
            img.src = options.rootPath + options.url;
        });
    }
    static LoadCubeImages(options) {
        return new Promise(function (resolve, reject) {
            let ct = 0;
            let img = new Array(6);
            for (let i = 0; i < 6; i++) {
                img[i] = new Image();
                img[i].onload = function () {
                    ct++;
                    if (ct == 6) {
                        options.onLoad && options.onLoad(img);
                        resolve(img);
                    }
                };
                img[i].onerror = function () {
                    const msg = "ERROR WHILE TRYING TO LOAD SKYBOX TEXTURE" + options.urls[i];
                    options.onError && options.onError(msg);
                    reject(msg);
                };
                img[i].src = options.urls[i];
            }
        });
    }
    static LoadTextFiles(filenames, rootPath) {
        if (rootPath === undefined)
            rootPath = "";
        return new Promise((resolve, reject) => {
            var loadedSoFar = 0;
            var results = {};
            for (var i = 0; i < filenames.length; ++i) {
                var filename = filenames[i];
                (function () {
                    var name = rootPath + filename;
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function () {
                        if (request.readyState === 4) {
                            //if this reqest is done
                            //add this file to the results object
                            var text = request.responseText;
                            results[name] = text;
                            loadedSoFar += 1;
                            if (loadedSoFar === filenames.length) {
                                //if we've loaded all of the files
                                return resolve(results);
                            }
                        }
                    };
                    request.open("GET", name, true);
                    request.send();
                })();
            }
        });
    }
}


/***/ }),

/***/ "./src/misc/index.ts":
/*!***************************!*\
  !*** ./src/misc/index.ts ***!
  \***************************/
/*! exports provided: showImage, FileTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showHelper */ "./src/misc/showHelper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showImage", function() { return _showHelper__WEBPACK_IMPORTED_MODULE_0__["showImage"]; });

/* harmony import */ var _fileTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileTools */ "./src/misc/fileTools.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileTools", function() { return _fileTools__WEBPACK_IMPORTED_MODULE_1__["FileTools"]; });





/***/ }),

/***/ "./src/misc/logger.ts":
/*!****************************!*\
  !*** ./src/misc/logger.ts ***!
  \****************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Logger used througouht the application to allow configuration of
 * the log level required for the messages.
 */
class Logger {
    static _AddLogEntry(entry) {
        Logger._LogCache = entry + Logger._LogCache;
        if (Logger.OnNewCacheEntry) {
            Logger.OnNewCacheEntry(entry);
        }
    }
    static _FormatMessage(message) {
        var padStr = (i) => (i < 10 ? "0" + i : "" + i);
        var date = new Date();
        return "[" + padStr(date.getHours()) + ":" + padStr(date.getMinutes()) + ":" + padStr(date.getSeconds()) + "]: " + message;
    }
    static _LogDisabled(message) {
        // nothing to do
    }
    static _LogEnabled(message) {
        var formattedMessage = Logger._FormatMessage(message);
        console.log("lmgl - " + formattedMessage);
        // var entry = "<div style='color:white'>" + formattedMessage + "</div><br>";
        // Logger._AddLogEntry(entry);
    }
    static _WarnDisabled(message) {
        // nothing to do
    }
    static _WarnEnabled(message) {
        var formattedMessage = Logger._FormatMessage(message);
        console.warn("lmgl - " + formattedMessage);
        // var entry = "<div style='color:orange'>" + formattedMessage + "</div><br>";
        // Logger._AddLogEntry(entry);
    }
    static _ErrorDisabled(message) {
        // nothing to do
    }
    static _ErrorEnabled(message) {
        Logger.errorsCount++;
        var formattedMessage = Logger._FormatMessage(message);
        console.error("lmgl - " + formattedMessage);
        // var entry = "<div style='color:red'>" + formattedMessage + "</div><br>";
        // Logger._AddLogEntry(entry);
    }
    /**
     * Gets current log cache (list of logs)
     */
    static get LogCache() {
        return Logger._LogCache;
    }
    /**
     * Clears the log cache
     */
    static ClearLogCache() {
        Logger._LogCache = "";
        Logger.errorsCount = 0;
    }
    /**
     * Sets the current log level (MessageLogLevel / WarningLogLevel / ErrorLogLevel)
     */
    static set LogLevels(level) {
        if ((level & Logger.MessageLogLevel) === Logger.MessageLogLevel) {
            Logger.Log = Logger._LogEnabled;
        }
        else {
            Logger.Log = Logger._LogDisabled;
        }
        if ((level & Logger.WarningLogLevel) === Logger.WarningLogLevel) {
            Logger.Warn = Logger._WarnEnabled;
        }
        else {
            Logger.Warn = Logger._WarnDisabled;
        }
        if ((level & Logger.ErrorLogLevel) === Logger.ErrorLogLevel) {
            Logger.Error = Logger._ErrorEnabled;
        }
        else {
            Logger.Error = Logger._ErrorDisabled;
        }
    }
    /**
     * Assertion error message. If the assertion is false, the error message is written to the log.
     *
     * @param {boolean} assertion - The assertion to check.
     * @param {...*} args - The values to be written to the log.
     */
    static Assert(assertion, ...args) {
        if (!assertion) {
            console.error("ASSERT FAILED: ", ...args);
        }
    }
}
/**
 * No log
 */
Logger.NoneLogLevel = 0;
/**
 * Only message logs
 */
Logger.MessageLogLevel = 1;
/**
 * Only warning logs
 */
Logger.WarningLogLevel = 2;
/**
 * Only error logs
 */
Logger.ErrorLogLevel = 4;
/**
 * All logs
 */
Logger.AllLogLevel = 7;
Logger._LogCache = "";
/**
 * Gets a value indicating the number of loading errors
 * @ignorenaming
 */
Logger.errorsCount = 0;
/**
 * Log a message to the console
 */
Logger.Log = Logger._LogEnabled;
/**
 * Write a warning message to the console
 */
Logger.Warn = Logger._WarnEnabled;
/**
 * Write an error message to the console
 */
Logger.Error = Logger._ErrorEnabled;


/***/ }),

/***/ "./src/misc/shaderProcess.ts":
/*!***********************************!*\
  !*** ./src/misc/shaderProcess.ts ***!
  \***********************************/
/*! exports provided: ShaderProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderProcess", function() { return ShaderProcess; });
class ShaderProcess {
    static generateDefines(defines) {
        if (defines == undefined)
            return "";
        const chunks = [];
        for (const name in defines) {
            const value = defines[name];
            if (value === false)
                continue;
            chunks.push("#define " + name + " " + value);
        }
        chunks.push("\r\n");
        return chunks.join("\n");
    }
    static getHead() {
        const header = `#version 300 es
precision highp float;
    `;
        return header;
    }
}


/***/ }),

/***/ "./src/misc/showHelper.ts":
/*!********************************!*\
  !*** ./src/misc/showHelper.ts ***!
  \********************************/
/*! exports provided: showImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showImage", function() { return showImage; });
function downLoad(blob) {
    let url = "";
    let fileReader = new FileReader();
    fileReader.readAsDataURL(blob); //读取文件保存在result中
    fileReader.onload = function (e) {
        url = e.target.result; //读取的结果在result中
        if (url.length < 6) {
            return;
        }
        let domA = document.createElement("a");
        domA.download = new Date().getTime() + ".jpg";
        domA.href = url;
        document.body.appendChild(domA);
        domA.click();
        domA.remove();
    };
}
function showImage(texture) {
    var canvas = document.createElement("canvas");
    canvas.width = texture.width;
    canvas.height = texture.height;
    var ctx = canvas.getContext("2d");
    var imgData = ctx.createImageData(texture.width, texture.height);
    for (var i = 0; i < texture.source.length; i += 4) {
        imgData.data[i + 0] = texture.source[i + 0];
        imgData.data[i + 1] = texture.source[i + 1];
        imgData.data[i + 2] = texture.source[i + 2];
        imgData.data[i + 3] = texture.source[i + 3];
    }
    ctx.putImageData(imgData, 0, 0);
    canvas.toBlob((blob) => {
        downLoad(blob);
    });
}


/***/ }),

/***/ "./src/misc/tool.ts":
/*!**************************!*\
  !*** ./src/misc/tool.ts ***!
  \**************************/
/*! exports provided: addProxy, cloneUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProxy", function() { return addProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneUniforms", function() { return cloneUniforms; });
function addProxy(proxyObj, setCb, getCb) {
    const handler = {
        get(target, key) {
            let result = target[key];
            getCb && getCb(result);
            return result;
        },
        set(target, key, value) {
            target[key] = value;
            setCb && setCb(this);
            return this;
        },
    };
    return new Proxy(proxyObj, handler);
}
function cloneUniforms(src) {
    const dst = {};
    for (const u in src) {
        dst[u] = {};
        for (const p in src[u]) {
            const property = src[u][p];
            if (property &&
                (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
                dst[u][p] = property.clone();
            }
            else if (Array.isArray(property)) {
                dst[u][p] = property.slice();
            }
            else {
                dst[u][p] = property;
            }
        }
    }
    return dst;
}


/***/ }),

/***/ "./src/misc/typeStore.ts":
/*!*******************************!*\
  !*** ./src/misc/typeStore.ts ***!
  \*******************************/
/*! exports provided: _TypeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TypeStore", function() { return _TypeStore; });
/** @hidden */
class _TypeStore {
    /** @hidden */
    static GetClass(fqdn) {
        if (this.RegisteredTypes && this.RegisteredTypes[fqdn]) {
            return this.RegisteredTypes[fqdn];
        }
        return null;
    }
}
/** @hidden */
_TypeStore.RegisteredTypes = {};


/***/ }),

/***/ "./src/object3D.ts":
/*!*************************!*\
  !*** ./src/object3D.ts ***!
  \*************************/
/*! exports provided: Object3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return Object3D; });
/* harmony import */ var _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maths/math.mat4 */ "./src/maths/math.mat4.ts");
/* harmony import */ var _maths_math_mat3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maths/math.mat3 */ "./src/maths/math.mat3.ts");
/* harmony import */ var _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maths/math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maths/math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _maths_math_quat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maths/math.quat */ "./src/maths/math.quat.ts");
/* harmony import */ var _maths_math_euler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maths/math.euler */ "./src/maths/math.euler.ts");





// import { EventDispatcher } from "./EventDispatcher.js";

// import { Layers } from './Layers.js';
// import { Matrix3 } from "../math/Matrix3.js";
// import * as MathUtils from "../math/MathUtils.js";
let _object3DId = 0;
const _v1 = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"]();
const _q1 = /*@__PURE__*/ new _maths_math_quat__WEBPACK_IMPORTED_MODULE_4__["Quat"]();
const _m1 = /*@__PURE__*/ new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
const _target = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"]();
const _position = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"]();
const _scale = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"]();
const _quaternion = /*@__PURE__*/ new _maths_math_quat__WEBPACK_IMPORTED_MODULE_4__["Quat"]();
const _xAxis = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"](1, 0, 0);
const _yAxis = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"](0, 1, 0);
const _zAxis = /*@__PURE__*/ new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"](0, 0, 1);
const _addedEvent = { type: "added" };
const _removedEvent = { type: "removed" };
class Object3D {
    constructor() {
        // Object.defineProperty(this, "id", { value: _object3DId++ });
        this.uuid = _maths_math_tool__WEBPACK_IMPORTED_MODULE_2__["MathTool"].generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = Object3D.DefaultUp.clone();
        const position = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"]();
        const rotation = new _maths_math_euler__WEBPACK_IMPORTED_MODULE_5__["Euler"]();
        const quaternion = new _maths_math_quat__WEBPACK_IMPORTED_MODULE_4__["Quat"]();
        const scale = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"](1, 1, 1);
        function onRotationChange() {
            quaternion.setFromEuler(rotation);
        }
        Object.defineProperties(this, {
            position: {
                configurable: true,
                enumerable: true,
                value: position,
            },
            rotation: {
                configurable: true,
                enumerable: true,
                value: rotation,
            },
            quaternion: {
                configurable: true,
                enumerable: true,
                value: quaternion,
            },
            scale: {
                configurable: true,
                enumerable: true,
                value: scale,
            },
            modelViewMatrix: {
                value: new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"](),
            },
            normalMatrix: {
                value: new _maths_math_mat3__WEBPACK_IMPORTED_MODULE_1__["Mat3"](),
            },
        });
        this.matrix = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.matrixWorld = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_0__["Mat4"]();
        this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = false;
        // this.layers = new Layers();
        this.visible = true;
        this.castShadow = false;
        this.receiveShadow = false;
        this.frustumCulled = true;
        this.renderOrder = 0;
        this.animations = [];
        this.userData = {};
    }
    copy(source, recursive) {
        throw new Error("Method not implemented.");
    }
    onBeforeRender() { }
    onAfterRender() { }
    applyMatrix4(matrix) {
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        this.matrix.mul(matrix);
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(q) {
        this.quaternion.mul(q);
        return this;
    }
    setRotationFromAxisAngle(axis, angle) {
        // assumes axis is normalized
        this.quaternion.setFromAxisAngle(axis, angle);
    }
    setRotationFromEuler(euler) {
        this.quaternion.setFromEuler(euler);
    }
    setRotationFromMatrix(m) {
        // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
        this.quaternion.setFromMat4(m);
    }
    setRotationFromQuaternion(q) {
        // assumes q is normalized
        this.quaternion.copy(q);
    }
    rotateOnAxis(axis, angle) {
        // rotate object on axis in object space
        // axis is assumed to be normalized
        _q1.setFromAxisAngle(axis, angle);
        this.quaternion.mul(_q1);
        return this;
    }
    rotateOnWorldAxis(axis, angle) {
        // rotate object on axis in world space
        // axis is assumed to be normalized
        // method assumes no rotated parent
        _q1.setFromAxisAngle(axis, angle);
        this.quaternion.mul(_q1);
        return this;
    }
    rotateX(angle) {
        return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
        return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
        return this.rotateOnAxis(_zAxis, angle);
    }
    translateOnAxis(axis, distance) {
        // translate object by distance along axis in object space
        // axis is assumed to be normalized
        _v1.copy(axis).applyQuaternion(this.quaternion);
        this.position.add(_v1.multiplyScalar(distance));
        return this;
    }
    translateX(distance) {
        return this.translateOnAxis(_xAxis, distance);
    }
    translateY(distance) {
        return this.translateOnAxis(_yAxis, distance);
    }
    translateZ(distance) {
        return this.translateOnAxis(_zAxis, distance);
    }
    localToWorld(vector) {
        return vector.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(vector) {
        return vector.applyMatrix4(_m1.copy(this.matrixWorld).invert());
    }
    lookAt(x) {
        // This method does not support objects having non-uniformly-scaled parent(s)
        _target.copy(x);
        const parent = this.parent;
        this.updateWorldMatrix(true, false);
        _position.setFromMatrixPosition(this.matrixWorld);
        if (this.isCamera || this.isLight) {
            _m1.setLookAt(_position, _target, this.up);
        }
        else {
            _m1.setLookAt(_target, _position, this.up);
        }
        this.quaternion.setFromMat4(_m1);
        // if (parent) {
        //     _m1.extractRotation(parent.matrixWorld);
        //     _q1.setFromMat4(_m1);
        //     this.quaternion.mul(_q1.invert());
        // }
    }
    getWorldPosition(target) {
        this.updateWorldMatrix(true, false);
        return target.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(target) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(_position, target, _scale);
        return target;
    }
    getWorldScale(target) {
        this.updateWorldMatrix(true, false);
        this.matrixWorld.decompose(_position, _quaternion, target);
        return target;
    }
    getWorldDirection(target) {
        this.updateWorldMatrix(true, false);
        const e = this.matrixWorld.data;
        return target.set(e[8], e[9], e[10]).normalize();
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        if (this.matrixWorldNeedsUpdate || force) {
            if (this.parent === null) {
                this.matrixWorld.copy(this.matrix);
            }
            else {
                this.matrixWorld.mul2(this.parent.matrixWorld, this.matrix);
            }
            this.matrixWorldNeedsUpdate = false;
            force = true;
        }
        // update children
        // const children = this.children;
        // for (let i = 0, l = children.length; i < l; i++) {
        //     children[i].updateMatrixWorld(force);
        // }
    }
    updateWorldMatrix(updateParents, updateChildren) {
        const parent = this.parent;
        if (updateParents === true && parent !== null) {
            parent.updateWorldMatrix(true, false);
        }
        if (this.matrixAutoUpdate)
            this.updateMatrix();
        if (this.parent === null) {
            this.matrixWorld.copy(this.matrix);
        }
        else {
            this.matrixWorld.mul2(this.parent.matrixWorld, this.matrix);
        }
        // update children
        if (updateChildren === true) {
            const children = this.children;
            for (let i = 0, l = children.length; i < l; i++) {
                children[i].updateWorldMatrix(false, true);
            }
        }
    }
}
Object3D.DefaultUp = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_3__["Vec3"](0, 1, 0);
Object3D.DefaultMatrixAutoUpdate = true;
Object3D.prototype.isObject3D = true;



/***/ }),

/***/ "./src/particles/index.ts":
/*!********************************!*\
  !*** ./src/particles/index.ts ***!
  \********************************/
/*! exports provided: ParticleSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _particle_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.system */ "./src/particles/particle.system.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return _particle_system__WEBPACK_IMPORTED_MODULE_0__["ParticleSystem"]; });




/***/ }),

/***/ "./src/particles/particle.system.ts":
/*!******************************************!*\
  !*** ./src/particles/particle.system.ts ***!
  \******************************************/
/*! exports provided: ParticleSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return ParticleSystem; });
/* harmony import */ var _engines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines */ "./src/engines/index.ts");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry */ "./src/geometry/index.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particle */ "./src/particles/particle.ts");
/* harmony import */ var _shaders_particles_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/particles.vert */ "./src/shaders/particles.vert");
/* harmony import */ var _shaders_particles_frag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/particles.frag */ "./src/shaders/particles.frag");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material */ "./src/material/index.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mesh */ "./src/mesh/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maths */ "./src/maths/index.ts");









class ParticleSystem {
    constructor(engine, options) {
        /**
         * You can use gravity if you want to give an orientation to your particles.
         */
        this.gravity = _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"].Zero();
        this._particles = new Array();
        this._stockParticles = new Array();
        /**
         * "Recycles" one of the particle by copying it back to the "stock" of particles and removing it from the active list.
         * Its lifetime will start back at 0.
         */
        this.recycleParticle = particle => {
            // move particle from activeParticle list to stock particles
            // var lastParticle = <Particle>this._particles.pop();
            // if (lastParticle !== particle) {
            //     lastParticle.copyTo(particle);
            // }
            this._stockParticles.push(particle);
        };
        this._createParticle = () => {
            var particle;
            // if (this._stockParticles.length !== 0) {
            //     particle = <Particle>this._stockParticles.pop();
            //     particle.reset();
            // } else {
            // }
            particle = new _particle__WEBPACK_IMPORTED_MODULE_3__["Particle"](this);
            particle.position.x = Math.random() * 20 - 10;
            particle.position.y = -Math.random() * 10;
            return particle;
        };
        this.name = options.name !== undefined ? options.name : "default";
        this._capacity = options.capacity !== undefined ? options.capacity : 200;
        this.size = options.size !== undefined ? options.size : new _maths__WEBPACK_IMPORTED_MODULE_8__["Vec2"](1, 1);
        this._engine = engine;
        // this._vertexBufferSize = 10;
        this.visible = true;
        this.material = null;
        this.emitRate = 1;
    }
    getClassName() {
        return "ParticleSystem";
    }
    isReady() {
        if (!this.particleTexture || !this.particleTexture.needsUpload) {
            return false;
        }
        if (!this.material) {
            this.material = new _material__WEBPACK_IMPORTED_MODULE_6__["Material"](this._engine, {
                fragmentShader: _shaders_particles_frag__WEBPACK_IMPORTED_MODULE_5__["default"],
                vertexShader: _shaders_particles_vert__WEBPACK_IMPORTED_MODULE_4__["default"],
                uniforms: {
                    uSize: { type: _engines__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Vec2, value: this.size },
                    uTexture: { type: _engines__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Texture, value: this.particleTexture },
                },
            });
            this.material.blendType = _engines__WEBPACK_IMPORTED_MODULE_0__["BlendType"].BLEND_ADDITIVEALPHA;
        }
        if (!this.geometry) {
            this.geometry = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"](this._engine, {
                instanceCount: this._capacity,
                attributes: [
                    {
                        name: "position",
                        value: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
                        itemSize: 3,
                        usage: _engines__WEBPACK_IMPORTED_MODULE_0__["BufferStore"].BUFFER_DYNAMIC,
                    },
                    {
                        name: "aUv",
                        value: [0, 0, 0, 1, 1, 1, 0, 1],
                        itemSize: 2,
                    },
                    {
                        name: "offsets",
                        value: new Array(3 * this._capacity).fill(0),
                        itemSize: 3,
                        usage: _engines__WEBPACK_IMPORTED_MODULE_0__["BufferStore"].BUFFER_DYNAMIC,
                        divisor: 1,
                    },
                ],
                drawType: _engines__WEBPACK_IMPORTED_MODULE_0__["PrimitiveType"].PRIMITIVE_TRIFAN,
            });
        }
        if (!this.mesh) {
            this.mesh = new _mesh__WEBPACK_IMPORTED_MODULE_7__["Mesh"](this._engine, this.geometry, this.material);
        }
        return true;
    }
    _setAttributeXYZ(name, index, value) {
        if (!this.isReady())
            return;
        const attribute = this.mesh.geometry.getAttribute(name);
        index *= attribute.itemSize;
        attribute.value[index + 0] = value.x;
        attribute.value[index + 1] = value.y;
        attribute.value[index + 2] = value.z;
        this.mesh.geometry.updateAttribure(name);
    }
    updateFunction(particles) {
        let scaledUpdateSpeed = 0.1;
        for (var index = 0; index < particles.length; index++) {
            var particle = particles[index];
            particle.age += scaledUpdateSpeed;
            particle.position.y += 0.01;
            if (particle.position.y > 10) {
                particle.position.y = -5;
            }
            // Evaluate step to death
            // if (particle.age > particle.lifeTime) {
            //     particle.age = particle.lifeTime;
            //     this.recycleParticle(particle);
            // }
        }
    }
    _update(newParticles) {
        this.updateFunction(this._particles);
        var particle;
        for (var index = 0; index < newParticles; index++) {
            if (this._particles.length === this._capacity) {
                break;
            }
            particle = this._createParticle();
            this._particles.push(particle);
        }
    }
    animate() {
        if (!this.isReady()) {
            return;
        }
        // let rate = this.emitRate;
        let newParticles = 1;
        this._update(newParticles);
        this._particles.forEach((item, index) => {
            this._setAttributeXYZ("offsets", index, item.position);
        });
    }
}


/***/ }),

/***/ "./src/particles/particle.ts":
/*!***********************************!*\
  !*** ./src/particles/particle.ts ***!
  \***********************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var _maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maths/math.color */ "./src/maths/math.color.ts");
/* harmony import */ var _maths_math_vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/math.vec2 */ "./src/maths/math.vec2.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.vec3 */ "./src/maths/math.vec3.ts");



class Particle {
    constructor(particleSystem) {
        this.position = _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"].Zero();
        this.direction = _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"].Zero();
        this.color = new _maths_math_color__WEBPACK_IMPORTED_MODULE_0__["Color4"](0, 0, 0, 0);
        this.colorStep = new _maths_math_color__WEBPACK_IMPORTED_MODULE_0__["Color4"](0, 0, 0, 0);
        this.lifeTime = 1.0;
        this.age = 0;
        this.size = 0;
        this.scale = new _maths_math_vec2__WEBPACK_IMPORTED_MODULE_1__["Vec2"](1, 1);
        this.speed = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_2__["Vec3"](0, 0, 0);
        this.particleSystem = particleSystem;
    }
    reset() {
        this.age = 0;
    }
}


/***/ }),

/***/ "./src/pbr/env-lighting.ts":
/*!*********************************!*\
  !*** ./src/pbr/env-lighting.ts ***!
  \*********************************/
/*! exports provided: EnvLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvLighting", function() { return EnvLighting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@2.3.1@tslib/tslib.es6.js");
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _maths_math_vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.vec4 */ "./src/maths/math.vec4.ts");
/* harmony import */ var _texture_texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../texture/texture */ "./src/texture/texture.ts");
/* harmony import */ var _shaders_reproject_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/reproject.frag */ "./src/shaders/reproject.frag");
/* harmony import */ var _shaders_reproject_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/reproject.vert */ "./src/shaders/reproject.vert");
/* harmony import */ var _postprocessing_postprocessing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../postprocessing/postprocessing */ "./src/postprocessing/postprocessing.ts");
/* harmony import */ var _renderer_render_target__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/render.target */ "./src/renderer/render.target.ts");
/* harmony import */ var _maths_math_vec3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maths/math.vec3 */ "./src/maths/math.vec3.ts");
/* harmony import */ var _maths_math_random__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../maths/math.random */ "./src/maths/math.random.ts");






// import reprojectFrag from "../../public/case/shaders/test.frag";
// import reprojectVert from "../../public/case/shaders/test.vert";




// calculate the number of mipmap levels given texture dimensions
const calcLevels = (width, height) => {
    return 1 + Math.floor(Math.log2(Math.max(width, height)));
};
// get a coding string for texture based on its type and pixel format.
const getCoding = (texture) => {
    switch (texture.type) {
        case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURETYPE_RGBM:
            return "RGBM";
        case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURETYPE_RGBE:
            return "RGBE";
        default:
            switch (texture.format) {
                case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGB16F:
                case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGB32F:
                case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGBA16F:
                case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_RGBA32F:
                    return "Linear";
                default:
                    return "Gamma";
            }
    }
};
const getProjectionName = (projection) => {
    // default to equirect if not specified
    if (projection === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_NONE) {
        projection = _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_EQUIRECT;
    }
    switch (projection) {
        case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_CUBE:
            return "Cubemap";
        case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_EQUIRECT:
            return "Equirect";
        case _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_OCTAHEDRAL:
            return "Octahedral";
    }
};
// print to the console the required samples table for GGX reflection convolution
// console.log(calculateRequiredSamplesGGX());
// this is a table with pre-calculated number of samples required for GGX.
// the table is generated by calculateRequiredSamplesGGX()
// the table is organized by [numSamples][specularPower]
//
// we use a repeatable pseudo-random sequence of numbers when generating samples
// for use in prefiltering GGX reflections. however not all the random samples
// will be valid. this is because some resulting reflection vectors will be below
// the hemisphere. this is especially apparent when calculating vectors for the
// higher roughnesses. (since vectors are more wild, more of them are invalid).
// for example, specularPower 2 results in half the generated vectors being
// invalid. (meaning the GPU would spend half the time on vectors that don't
// contribute to the final result).
//
// calculating how many samples are required to generate 'n' valid samples is a
// slow operation, so this table stores the pre-calculated numbers of samples
// required for the sets of (numSamples, specularPowers) pairs we expect to
// encounter at runtime.
const requiredSamplesGGX = {
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
const getRequiredSamplesGGX = (numSamples, specularPower) => {
    const table = requiredSamplesGGX[numSamples];
    return (table && table[specularPower]) || numSamples;
};
// generate a vector on the hemisphere with GGX distribution.
// a is linear roughness^2
const hemisphereSampleGGX = (dstVec, x, y, a) => {
    const phi = y * 2 * Math.PI;
    const cosTheta = Math.sqrt((1 - x) / (1 + (a * a - 1) * x));
    const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
    dstVec.set(Math.cos(phi) * sinTheta, Math.sin(phi) * sinTheta, cosTheta).normalize();
};
const D_GGX = (NoH, linearRoughness) => {
    const a = NoH * linearRoughness;
    const k = linearRoughness / (1.0 - NoH * NoH + a * a);
    return k * k * (1 / Math.PI);
};
// generate precomputed GGX samples
const generateGGXSamples = (numSamples, specularPower, sourceTotalPixels) => {
    const pixelsPerSample = sourceTotalPixels / numSamples;
    const roughness = 1 - Math.log2(specularPower) / 11.0;
    const a = roughness * roughness;
    const H = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_8__["Vec3"]();
    const L = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_8__["Vec3"]();
    const N = new _maths_math_vec3__WEBPACK_IMPORTED_MODULE_8__["Vec3"](0, 0, 1);
    const result = [];
    const requiredSamples = getRequiredSamplesGGX(numSamples, specularPower);
    for (let i = 0; i < requiredSamples; ++i) {
        hemisphereSampleGGX(H, i / requiredSamples, _maths_math_random__WEBPACK_IMPORTED_MODULE_9__["random"].radicalInverse(i), a);
        const NoH = H.z; // since N is (0, 0, 1)
        L.set(H.x, H.y, H.z).mulScalar(2 * NoH).sub(N);
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
const generateGGXSamplesTex = (device, numSamples, specularPower, sourceTotalPixels) => {
    const a = generateGGXSamples(numSamples, specularPower, sourceTotalPixels);
    const b = createSamplesTex(device, "123", a);
    return b;
};
// pack a 32bit floating point value into RGBA8
const packFloat32ToRGBA8 = (value, array, offset) => {
    if (value <= 0) {
        array[offset + 0] = 0;
        array[offset + 1] = 0;
        array[offset + 2] = 0;
        array[offset + 3] = 0;
    }
    else if (value >= 1.0) {
        array[offset + 0] = 255;
        array[offset + 1] = 0;
        array[offset + 2] = 0;
        array[offset + 3] = 0;
    }
    else {
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
const packSamples = (samples) => {
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
const createSamplesTex = (device, name, samples) => {
    const packedSamples = packSamples(samples);
    return new _texture_texture__WEBPACK_IMPORTED_MODULE_3__["Texture"](device, {
        name: name,
        width: packedSamples.width,
        height: packedSamples.height,
        mipmaps: false,
        minFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_NEAREST,
        magFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_NEAREST
        // levels: [packedSamples.data]
    });
};
class EnvLighting {
    constructor(app) {
        this._app = app;
        this._engine = app.engine;
        this._engine = app.engine;
        this.isReady = false;
    }
    getCubeTexture(urls) {
        return new Promise((resolve, reject) => {
            const lightingTexture = new _texture_texture__WEBPACK_IMPORTED_MODULE_3__["Texture"](this._engine, {
                name: "cube_map_faces",
                urls: urls,
                mipmaps: true,
                minFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_LINEAR_MIPMAP_LINEAR,
                magFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_LINEAR,
                addressU: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                addressV: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                onLoad: () => {
                    resolve(lightingTexture);
                },
                projection: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_CUBE,
                fixCubemapSeams: false,
                flipY: false,
            });
        });
    }
    reprojectTexture(source, target, options) {
        // table of distribution -> function name
        const funcNames = {
            none: "reproject",
            lambert: "prefilterSamplesUnweighted",
            phong: "prefilterSamplesUnweighted",
            ggx: "prefilterSamples"
        };
        const specularPower = options.hasOwnProperty("specularPower") ? options.specularPower : 1;
        const face = options.hasOwnProperty("face") ? options.face : null;
        const distribution = options.hasOwnProperty("distribution") ? options.distribution : specularPower === 1 ? "none" : "phong";
        const processFunc = funcNames[distribution];
        const decodeFunc = `decode${getCoding(source)}`;
        const encodeFunc = `encode${getCoding(target)}`;
        const sourceFunc = `sample${getProjectionName(source.projection)}`;
        const targetFunc = `getDirection${getProjectionName(target.projection)}`;
        const numSamples = options.hasOwnProperty("numSamples") ? options.numSamples : 1024;
        const defines = `#define PROCESS_FUNC ${processFunc}\n` +
            `#define DECODE_FUNC ${decodeFunc}\n` +
            `#define ENCODE_FUNC ${encodeFunc}\n` +
            `#define SOURCE_FUNC ${sourceFunc}\n` +
            `#define TARGET_FUNC ${targetFunc}\n` +
            `#define NUM_SAMPLES ${numSamples}\n` +
            `#define SUPPORTS_TEXLOD\n`;
        const post = new _postprocessing_postprocessing__WEBPACK_IMPORTED_MODULE_6__["Postprocessing"](this._app);
        post.createProgram({
            programName: "envPre",
            vertexShader: _shaders_reproject_vert__WEBPACK_IMPORTED_MODULE_5__["default"],
            fragmentShader: `${_shaders_reproject_frag__WEBPACK_IMPORTED_MODULE_4__["default"]}`,
            uniforms: {
                uvMod: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec4,
                    value: null
                },
                params: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec4,
                    value: null
                },
                params2: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec2,
                    value: null
                },
                samplesTexInverseSize: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Vec2,
                    value: null
                },
                sourceCube: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Texture,
                    value: this.cubeMapTexture
                },
                samplesTex: {
                    type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["UniformsType"].Texture,
                    value: this.cubeMapTexture
                }
            }
        });
        post.useProgram("envPre");
        if (options === null || options === void 0 ? void 0 : options.seamPixels) {
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
        }
        else {
            post.setUniform("uvMod", { x: 1, y: 1, z: 0, w: 0 });
        }
        const params = [
            0,
            specularPower,
            source.fixCubemapSeams ? 1.0 / source.width : 0.0,
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
        const viewport = options === null || options === void 0 ? void 0 : options.rect;
        // for (let f = 0; f < (target.cubemap ? 6 : 1); f++) {
        for (let f = 0; f < 1; f++) {
            if (face === null || f === face) {
                const renderTarget = new _renderer_render_target__WEBPACK_IMPORTED_MODULE_7__["RenderTarget"](this._engine, {
                    bufferType: _renderer_render_target__WEBPACK_IMPORTED_MODULE_7__["RenderTargetBufferType"].colorBuffer,
                    name: "renderTarget",
                    depth: false,
                    colorBuffer: target
                });
                params[0] = f;
                post.setRenderTarget(null)
                    .setUniform("params", { x: params[0], y: params[1], z: params[2], w: params[3] })
                    .setUniform("params2", { x: params2[0], y: params2[1] })
                    .viewport({ x: viewport.x, y: viewport.y, width: viewport.z, height: viewport.w })
                    .render();
                renderTarget.destroy();
            }
        }
    }
    gen(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = new _texture_texture__WEBPACK_IMPORTED_MODULE_3__["Texture"](this._engine, {
                name: "envAtlas",
                width: 512,
                height: 512,
                format: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"].PIXELFORMAT_R8_G8_B8_A8,
                type: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureType"].TEXTURETYPE_RGBM,
                projection: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureProjection"].TEXTUREPROJECTION_EQUIRECT,
                addressU: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                addressV: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                minFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_LINEAR,
                magFilter: _engines_engine_enum__WEBPACK_IMPORTED_MODULE_1__["TextureFilter"].FILTER_LINEAR,
                mipmaps: false
            });
            this.result = result;
            const rect = new _maths_math_vec4__WEBPACK_IMPORTED_MODULE_2__["Vec4"](0, 0, 512, 256);
            const levels = 1; //calcLevels(result.width, result.height);
            const lightingTexture = (yield this.getCubeTexture(options.urls));
            this.cubeMapTexture = lightingTexture;
            for (let i = 0; i < levels; ++i) {
                this.reprojectTexture(lightingTexture, result, {
                    numSamples: 1,
                    rect: rect,
                    seamPixels: 1
                });
                rect.x += rect.w;
                rect.y += rect.w;
                rect.z = Math.max(1, Math.floor(rect.z * 0.5));
                rect.w = Math.max(1, Math.floor(rect.w * 0.5));
            }
            // rect.set(0, 256, 256, 128);
            // for (let i = 1; i < 7; ++i) {
            //     this.reprojectTexture(lightingTexture, result, {
            //         numSamples: 1024,
            //         distribution: "ggx",
            //         specularPower: Math.max(1, 2048 >> (i * 2)),
            //         rect: rect,
            //         seamPixels: 1
            //     });
            //     rect.y += rect.w;
            //     rect.z = Math.max(1, Math.floor(rect.z * 0.5));
            //     rect.w = Math.max(1, Math.floor(rect.w * 0.5));
            // }
            // this.isReady = true;
            options.cb(result);
        });
    }
}


/***/ }),

/***/ "./src/pbr/index.ts":
/*!**************************!*\
  !*** ./src/pbr/index.ts ***!
  \**************************/
/*! exports provided: EnvLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_lighting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env-lighting */ "./src/pbr/env-lighting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvLighting", function() { return _env_lighting__WEBPACK_IMPORTED_MODULE_0__["EnvLighting"]; });




/***/ }),

/***/ "./src/postprocessing/index.ts":
/*!*************************************!*\
  !*** ./src/postprocessing/index.ts ***!
  \*************************************/
/*! exports provided: Postprocessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postprocessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postprocessing */ "./src/postprocessing/postprocessing.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Postprocessing", function() { return _postprocessing__WEBPACK_IMPORTED_MODULE_0__["Postprocessing"]; });




/***/ }),

/***/ "./src/postprocessing/postprocessing.ts":
/*!**********************************************!*\
  !*** ./src/postprocessing/postprocessing.ts ***!
  \**********************************************/
/*! exports provided: Postprocessing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postprocessing", function() { return Postprocessing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@2.3.1@tslib/tslib.es6.js");
/* harmony import */ var _engines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engines */ "./src/engines/index.ts");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry */ "./src/geometry/index.ts");
/* harmony import */ var _loader_shader_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/shader.loader */ "./src/loader/shader.loader.ts");
/* harmony import */ var _maths_math_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maths/math.color */ "./src/maths/math.color.ts");





class Postprocessing {
    constructor(app) {
        this._engine = app.engine;
        this._camera = app.camera;
        this._programs = new Map();
        this._rootPath = "/";
        const model = Object(_geometry__WEBPACK_IMPORTED_MODULE_2__["planeBuilder"])(2, 2);
        const geoInfo = {
            indices: {
                value: model.indices
            },
            attributes: [
                {
                    name: "aPosition",
                    value: model.positions,
                    itemSize: 3
                }
            ]
        };
        this._geometry = new _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"](this._engine, geoInfo);
        this._activeProgram = null;
        this.clearColor = new _maths_math_color__WEBPACK_IMPORTED_MODULE_4__["Color4"](0.2, 0.19, 0.3, 1.0);
    }
    get uniforms() {
        var _a;
        return ((_a = this._activeProgram) === null || _a === void 0 ? void 0 : _a.uniforms) || {};
    }
    setRootPath(v) {
        this._rootPath = v;
        return this;
    }
    createProgram(options) {
        // const { program, vertexShader, fragmentShader } =
        const programInfo = this._engine.enginePrograms.createProgram({
            vertexShader: options.vertexShader,
            fragmentShader: options.fragmentShader,
            defines: options.defines
        });
        const uniformBlock = {
            blockCatch: new Map(),
            blockIndex: 0
        };
        this._programs.set(options.programName, {
            vertexShader: programInfo.vertexShader,
            fragmentShader: programInfo.fragmentShader,
            program: programInfo.program,
            uniforms: options.uniforms || {},
            uniformBlock
        });
    }
    _createProgramFromFiles(programName, vertexShaderPath, fragmentShaderPath, uniforms, defines) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const vsPaths = Array.isArray(vertexShaderPath) ? vertexShaderPath : [vertexShaderPath];
                const fsPaths = Array.isArray(fragmentShaderPath) ? fragmentShaderPath : [fragmentShaderPath];
                new _loader_shader_loader__WEBPACK_IMPORTED_MODULE_3__["ShaderLoader"](this._engine)
                    .setPath(this._rootPath)
                    .load({
                    vsPaths: vsPaths,
                    fsPaths: fsPaths
                })
                    .then((shader) => {
                    this.createProgram({
                        vertexShader: shader.vertexShader,
                        fragmentShader: shader.fragmentShader,
                        defines: defines,
                        uniforms: uniforms,
                        programName
                    });
                    resolve({});
                });
            });
        });
    }
    createProgramsFromFiles(programParameters) {
        return new Promise((resolve, reject) => {
            for (var programName in programParameters) {
                var parameters = programParameters[programName];
                this._createProgramFromFiles(programName, parameters.vertexShader, parameters.fragmentShader, parameters.uniforms, parameters.defines).then(() => {
                    const total = Object.keys(programParameters).length;
                    if (this._programs.size === total) {
                        return resolve(total);
                    }
                });
            }
        });
    }
    // createPrograms() {}
    setRenderTarget(target) {
        this._engine.engineRenderTarget.setRenderTarget(target);
        this._engine.engineRenderTarget.updateBegin();
        return this;
    }
    clear() {
        this._engine.engineState.clear({
            color: this.clearColor
        });
        return this;
    }
    viewport(viewport) {
        const width = this._engine.renderingCanvas.clientWidth;
        const height = this._engine.renderingCanvas.clientHeight;
        this._engine.engineViewPort.setViewport(viewport || {
            x: 0,
            y: 0,
            width,
            height
        });
        return this;
    }
    useProgram(programName) {
        this._activeProgram = this._programs.get(programName);
        if (this._activeProgram) {
            this._engine.enginePrograms.useProgram(this._activeProgram.program);
        }
        else {
            console.error("fail...," + `${programName}`);
        }
        return this;
    }
    render() {
        if (!this._activeProgram)
            return this;
        const { program, uniforms, uniformBlock } = this._activeProgram;
        this._engine.enginePrograms.useProgram(program);
        this._geometry.setBuffers(this._activeProgram.program);
        if (uniforms) {
            this._engine.engineUniform.handleUniform(program, uniforms, uniformBlock);
        }
        this._camera.updateMatrix();
        this._camera.updateMatrixWorld();
        this._camera.updateProjectionMatrix();
        this._engine.engineUniform.setSystemUniform(program, this._camera);
        const oldBlending = this._engine.engineState.getBlending();
        const oldDepthTest = this._engine.engineState.getDepthTest();
        const oldDepthWrite = this._engine.engineState.getDepthWrite();
        const oldCullMode = this._engine.engineState.getCullMode();
        this._engine.engineState.setBlending(false);
        this._engine.engineState.setDepthTest(false);
        this._engine.engineState.setDepthWrite(false);
        this._engine.engineState.setCullMode(_engines__WEBPACK_IMPORTED_MODULE_1__["CullFace"].CULLFACE_NONE);
        this._engine.engineDraw.draw(this._geometry.getDrawInfo());
        this._engine.engineState.setBlending(oldBlending);
        this._engine.engineState.setDepthTest(oldDepthTest);
        this._engine.engineState.setDepthWrite(oldDepthWrite);
        this._engine.engineState.setCullMode(oldCullMode);
        this._engine.engineRenderTarget.setRenderTarget(null);
        return this;
    }
    setUniform(name, value) {
        if (this._activeProgram && this._activeProgram.uniforms && this._activeProgram.uniforms[name]) {
            this._activeProgram.uniforms[name].value = value;
        }
        else {
            console.error(`不存在,${name}, 需要先定义`);
        }
        return this;
    }
}


/***/ }),

/***/ "./src/renderer/index.ts":
/*!*******************************!*\
  !*** ./src/renderer/index.ts ***!
  \*******************************/
/*! exports provided: RenderTargetBufferType, RenderTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.target */ "./src/renderer/render.target.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTargetBufferType", function() { return _render_target__WEBPACK_IMPORTED_MODULE_0__["RenderTargetBufferType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return _render_target__WEBPACK_IMPORTED_MODULE_0__["RenderTarget"]; });

/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer/renderer.ts");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/renderer/render.target.ts":
/*!***************************************!*\
  !*** ./src/renderer/render.target.ts ***!
  \***************************************/
/*! exports provided: RenderTargetBufferType, RenderTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTargetBufferType", function() { return RenderTargetBufferType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return RenderTarget; });
/* harmony import */ var _engines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines */ "./src/engines/index.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../texture */ "./src/texture/index.ts");


var RenderTargetBufferType;
(function (RenderTargetBufferType) {
    RenderTargetBufferType[RenderTargetBufferType["colorBuffer"] = 0] = "colorBuffer";
    RenderTargetBufferType[RenderTargetBufferType["depthBuffer"] = 1] = "depthBuffer";
})(RenderTargetBufferType || (RenderTargetBufferType = {}));
class RenderTarget {
    constructor(engine, options) {
        this._engine = engine;
        this.glFrameBuffer = null;
        this.glDepthBuffer = null;
        this.name = options.name;
        this.colorBuffer = options.colorBuffer
            ? options.colorBuffer
            : new _texture__WEBPACK_IMPORTED_MODULE_1__["Texture"](engine, {
                width: options.width,
                height: options.height,
                format: options.colorBufferFormat ? options.colorBufferFormat : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"].PIXELFORMAT_R8_G8_B8_A8,
                addressU: _engines__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                addressV: _engines__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_CLAMP_TO_EDGE,
                minFilter: options.colorBufferMinFilter ? options.colorBufferMinFilter : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_LINEAR,
                magFilter: options.colorBufferMagFilter ? options.colorBufferMagFilter : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_LINEAR
            });
        this.colorBuffer.needsUpload = true;
        if (options.bufferType == RenderTargetBufferType.depthBuffer) {
            this.depthBuffer = new _texture__WEBPACK_IMPORTED_MODULE_1__["Texture"](engine, {
                width: options.width,
                height: options.height,
                format: options.depthBufferFormat ? options.depthBufferFormat : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"].PIXELFORMAT_DEPTH,
                addressU: _engines__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_REPEAT,
                addressV: _engines__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_REPEAT,
                minFilter: options.depthBufferMinFilter ? options.depthBufferMinFilter : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_NEAREST,
                magFilter: options.depthBufferMagFilter ? options.depthBufferMagFilter : _engines__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_NEAREST
            });
            this.depthBuffer.needsUpload = true;
        }
        this.depth = options.depth !== undefined ? options.depth : false;
        if (this.depth) {
        }
        else {
            this.stencil = options.stencil !== undefined ? options.stencil : false;
        }
        this.samples = options.samples !== undefined ? Math.min(options.samples, this._engine.capabilities.maxSamples) : 1;
        this._face = options.face !== undefined ? options.face : _engines__WEBPACK_IMPORTED_MODULE_0__["CubeFace"].CUBEFACE_POSX;
    }
    /**
     * Width of the render target in pixels.
     *
     * @type {number}
     */
    get width() {
        return this.colorBuffer ? this.colorBuffer.width : this.depthBuffer.width;
    }
    /**
     * Height of the render target in pixels.
     *
     * @type {number}
     */
    get height() {
        return this.colorBuffer ? this.colorBuffer.height : this.depthBuffer.height;
    }
    /**
     * If the render target is bound to a cubemap, this property specifies which face of the
     * cubemap is rendered to. Can be:
     */
    get face() {
        return this._face;
    }
    destroy() {
        const gl = this._engine.gl;
        if (this.glFrameBuffer) {
            gl.deleteFramebuffer(this.glFrameBuffer);
            this.glFrameBuffer = null;
        }
        if (this.glDepthBuffer) {
            gl.deleteRenderbuffer(this.glDepthBuffer);
            this.glDepthBuffer = null;
        }
    }
}


/***/ }),

/***/ "./src/renderer/renderer.ts":
/*!**********************************!*\
  !*** ./src/renderer/renderer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/math.color */ "./src/maths/math.color.ts");
/* harmony import */ var _maths_math_mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maths/math.mat4 */ "./src/maths/math.mat4.ts");
// WebGLIndexedBufferRenderer.js



class Renderer {
    constructor(engine) {
        this._engine = engine;
        this.currentPrograme = null;
        this.currentRenderTarget = null;
        this.clearColor = new _maths_math_color__WEBPACK_IMPORTED_MODULE_1__["Color4"](0.2, 0.19, 0.3, 1.0);
    }
    /**
     * 更新内置的uniform
     * @param program
     * @param mesh
     * @param camera
     */
    _setMeshUniform(program, mesh, camera) {
        camera.updateMatrix();
        camera.updateMatrixWorld();
        camera.updateProjectionMatrix();
        mesh.updateMatrix();
        this._engine.engineUniform.setUniform(program, "projectionMatrix", camera.projectionMatrix.data, _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat4);
        const modelViewMatrix = new _maths_math_mat4__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
        modelViewMatrix.mul2(camera.matrixWorldInverse, mesh.matrix);
        this._engine.engineUniform.setUniform(program, "modelViewMatrix", modelViewMatrix.data, _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat4);
        this._engine.engineUniform.setUniform(program, "world", mesh.matrix.data, _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat4);
        // 法线: world -> eye
        mesh.normalMatrix.getNormalMatrix(modelViewMatrix);
        this._engine.engineUniform.setUniform(program, "normalMatrix", mesh.normalMatrix.data, _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat4);
        this._engine.engineUniform.setUniform(program, "modelMatrix", mesh.matrix.data, _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["UniformsType"].Mat4);
        // 与mesh无关的uniform变量
        this._engine.engineUniform.setSystemUniform(program, camera);
    }
    renderMesh(mesh, camera) {
        if (mesh.visible == false)
            return;
        if (!mesh.material.program)
            return;
        const { geometry, material } = mesh;
        const program = material.program;
        mesh.setBuffers();
        this._engine.enginePrograms.useProgram(program);
        this._setMeshUniform(program, mesh, camera);
        material.setUniform();
        this._engine.engineDraw.readMaterial(material);
        this._engine.engineDraw.draw(geometry.getDrawInfo());
    }
    setRenderTarget(target) {
        this._target = target;
        this._engine.engineRenderTarget.setRenderTarget(target);
    }
    clear() {
        this._engine.engineState.clear({
            color: this.clearColor
        });
    }
    viewport() {
        let width = this._engine.renderingCanvas.clientWidth;
        let height = this._engine.renderingCanvas.clientHeight;
        if (this._target) {
            width = this._target.width;
            height = this._target.height;
        }
        this._engine.engineViewPort.setViewport({
            x: 0,
            y: 0,
            width,
            height
        });
    }
    renderScene(scene, camera) {
        this.clear();
        this.viewport();
        for (let i = 0; i < scene.childrenMesh.length; i++) {
            const child = scene.childrenMesh[i];
            this.renderMesh(child, camera);
        }
        for (let i = 0; i < scene.childrenParticleSystem.length; i++) {
            const child = scene.childrenParticleSystem[i];
            this.renderParticleSystem(child, camera);
        }
    }
    renderParticleSystem(particleSystem, camera) {
        if (particleSystem.visible == false)
            return;
        if (!particleSystem.isReady())
            return;
        const { geometry, material } = particleSystem.mesh;
        const program = material.program;
        particleSystem.mesh.setBuffers();
        this._setMeshUniform(program, particleSystem.mesh, camera);
        this._engine.engineDraw.readMaterial(material);
        this._engine.engineDraw.draw(geometry.getDrawInfo());
    }
}


/***/ }),

/***/ "./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/scene/scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]; });




/***/ }),

/***/ "./src/scene/scene.ts":
/*!****************************!*\
  !*** ./src/scene/scene.ts ***!
  \****************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
class Scene {
    constructor(engine) {
        this._engine = engine;
        this.childrenMesh = [];
        this.childrenParticleSystem = [];
    }
    add(object) {
        if (object.getClassName() === "Mesh")
            this.childrenMesh.push(object);
        if (object.getClassName() === "ParticleSystem")
            this.childrenParticleSystem.push(object);
    }
    remove(object) {
        let findArr = [];
        if (object.getClassName() === "Mesh")
            findArr = this.childrenMesh;
        if (object.getClassName() === "ParticleSystem")
            findArr = this.childrenParticleSystem;
        const index = findArr.indexOf(object);
        if (index !== -1) {
            findArr.splice(index, 1);
        }
    }
}


/***/ }),

/***/ "./src/shaders/gles3.frag":
/*!********************************!*\
  !*** ./src/shaders/gles3.frag ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define varying in\nout highp vec4 pc_fragColor;\n#define gl_FragColor pc_fragColor\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad\n#define GL2\n#define SUPPORTS_TEXLOD\n");

/***/ }),

/***/ "./src/shaders/particles.frag":
/*!************************************!*\
  !*** ./src/shaders/particles.frag ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("uniform vec4 uColor;\nin vec2 vUv;\nuniform sampler2D uTexture;\n\nout vec4 FragColor;\n\nvoid main() {\n    FragColor = texture(uTexture, vUv);\n}\n");

/***/ }),

/***/ "./src/shaders/particles.vert":
/*!************************************!*\
  !*** ./src/shaders/particles.vert ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("in vec3 position;\nin vec3 offsets;\nin vec2 aUv;\nout vec2 vUv;\n\nuniform float rotation;\nuniform vec2 uSize;\nuniform mat4 modelViewMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {\n    vec3 tempPosotion = position + offsets;\n\n    vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n    vec2 scale = vec2(1.,1.) * uSize;\n    vec2 center = vec2(0.5,0.5);\n    vec2 alignedPosition = ( tempPosotion.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n    vec2 rotatedPosition;\n    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n    mvPosition.xy += rotatedPosition;\n    vUv = aUv;\n    gl_Position = projectionMatrix * mvPosition;\n}\n");

/***/ }),

/***/ "./src/shaders/reproject.frag":
/*!************************************!*\
  !*** ./src/shaders/reproject.frag ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#define varying in\nout highp vec4 pc_fragColor;\n#define gl_FragColor pc_fragColor\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad\n#define GL2\n#define SUPPORTS_TEXLOD\nprecision highp float;\n#ifdef GL2\nprecision highp sampler2DShadow;\n#endif\n\n#define PROCESS_FUNC reproject\n#define DECODE_FUNC decodeGamma\n#define ENCODE_FUNC encodeGamma\n#define SOURCE_FUNC sampleCubemap\n#define TARGET_FUNC getDirectionEquirect\n#define NUM_SAMPLES 1\n#define SUPPORTS_TEXLOD\n\n\n// This shader requires the following #DEFINEs:\n//\n// PROCESS_FUNC - must be one of reproject, prefilter\n// DECODE_FUNC - must be one of decodeRGBM, decodeRGBE, decodeGamma or decodeLinear\n// ENCODE_FUNC - must be one of encodeRGBM, encodeRGBE, encideGamma or encodeLinear\n// SOURCE_FUNC - must be one of sampleCubemap, sampleEquirect, sampleOctahedral\n// TARGET_FUNC - must be one of getDirectionCubemap, getDirectionEquirect, getDirectionOctahedral\n//\n// When filtering:\n// NUM_SAMPLES - number of samples\n//\n// SUPPORTS_TEXLOD - whether supports texlod is supported\n\nvarying vec2 vUv0;\n\n// source\nuniform sampler2D sourceTex;\nuniform samplerCube sourceCube;\n\n// samples\nuniform sampler2D samplesTex;\nuniform vec2 samplesTexInverseSize;\n\n// params:\n// x - target cubemap face 0..6\n// y - specular power (when prefiltering)\n// z - source cubemap seam scale (0 to disable)\n// w - target cubemap size for seam calc (0 to disable)\nuniform vec4 params;\n\n// params2:\n// x - target image total pixels\n// y - source cubemap size\nuniform vec2 params2;\n\nfloat targetFace() { return params.x; }\nfloat specularPower() { return params.y; }\nfloat sourceCubeSeamScale() { return params.z; }\nfloat targetCubeSeamScale() { return params.w; }\n\nfloat targetTotalPixels() { return params2.x; }\nfloat sourceTotalPixels() { return params2.y; }\n\nfloat PI = 3.141592653589793;\n\nfloat saturate(float x) {\n    return clamp(x, 0.0, 1.0);\n}\n\n//-- supported codings\n\nvec3 decodeLinear(vec4 source) {\n    return source.rgb;\n}\n\nvec4 encodeLinear(vec3 source) {\n    return vec4(source, 1.0);\n}\n\nvec3 decodeGamma(vec4 source) {\n    return pow(source.xyz, vec3(2.2));\n}\n\nvec4 encodeGamma(vec3 source) {\n    return vec4(pow(source + 0.0000001, vec3(1.0 / 2.2)), 1.0);\n}\n\nvec3 decodeRGBM(vec4 rgbm) {\n    vec3 color = (8.0 * rgbm.a) * rgbm.rgb;\n    return color * color;\n}\n\nvec4 encodeRGBM(vec3 source) { // modified RGBM\n    vec4 result;\n    result.rgb = pow(source.rgb, vec3(0.5));\n    result.rgb *= 1.0 / 8.0;\n\n    result.a = saturate( max( max( result.r, result.g ), max( result.b, 1.0 / 255.0 ) ) );\n    result.a = ceil(result.a * 255.0) / 255.0;\n\n    result.rgb /= result.a;\n    return result;\n}\n\nvec3 decodeRGBE(vec4 source) {\n    if (source.a == 0.0) {\n        return vec3(0.0, 0.0, 0.0);\n    } else {\n        return source.xyz * pow(2.0, source.w * 255.0 - 128.0);\n    }\n}\n\nvec4 encodeRGBE(vec3 source) {\n    float maxVal = max(source.x, max(source.y, source.z));\n    if (maxVal < 1e-32) {\n        return vec4(0, 0, 0, 0);\n    } else {\n        float e = ceil(log2(maxVal));\n        return vec4(source / pow(2.0, e), (e + 128.0) / 255.0);\n    }\n}\n\n//-- supported projections\n\nvec3 modifySeams(vec3 dir, float scale) {\n    vec3 adir = abs(dir);\n    float M = max(max(adir.x, adir.y), adir.z);\n    return dir / M * vec3(\n        adir.x == M ? 1.0 : scale,\n        adir.y == M ? 1.0 : scale,\n        adir.z == M ? 1.0 : scale\n    );\n}\n\nvec2 toSpherical(vec3 dir) {\n    return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));\n}\n\nvec3 fromSpherical(vec2 uv) {\n    return vec3(cos(uv.y) * sin(uv.x),\n                sin(uv.y),\n                cos(uv.y) * cos(uv.x));\n}\n\nvec3 getDirectionEquirect() {\n    return fromSpherical((vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0) * vec2(PI, PI * 0.5));\n}\n\nvec4 sampleEquirect(vec2 sph) {\n    vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;\n    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));\n}\n\nvec4 sampleEquirect(vec3 dir) {\n    return sampleEquirect(toSpherical(dir));\n}\n\nvec4 sampleCubemap(vec3 dir) {\n    return textureCube(sourceCube, modifySeams(dir, 1.0 - sourceCubeSeamScale()));\n}\n\nvec4 sampleCubemap(vec2 sph) {\n    return sampleCubemap(fromSpherical(sph));\n}\n\nvec4 sampleEquirect(vec2 sph, float mipLevel) {\n    vec2 uv = sph / vec2(PI * 2.0, PI) + 0.5;\n#ifdef SUPPORTS_TEXLOD\n    return texture2DLodEXT(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);\n#else\n    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));\n#endif\n}\n\nvec4 sampleEquirect(vec3 dir, float mipLevel) {\n    return sampleEquirect(toSpherical(dir), mipLevel);\n}\n\nvec4 sampleCubemap(vec3 dir, float mipLevel) {\n#ifdef SUPPORTS_TEXLOD\n    return textureCubeLodEXT(sourceCube, modifySeams(dir, 1.0 - exp2(mipLevel) * sourceCubeSeamScale()), mipLevel);\n#else\n    return textureCube(sourceCube, modifySeams(dir, 1.0 - exp2(mipLevel) * sourceCubeSeamScale()));\n#endif\n}\n\nvec4 sampleCubemap(vec2 sph, float mipLevel) {\n    return sampleCubemap(fromSpherical(sph), mipLevel);\n}\n\n// octahedral code, based on http://jcgt.org/published/0003/02/01\n// \"Survey of Efficient Representations for Independent Unit Vectors\" by Cigolle, Donow, Evangelakos, Mara, McGuire, Meyer\n\nfloat signNotZero(float k){\n    return(k >= 0.0) ? 1.0 : -1.0;\n}\n\nvec2 signNotZero(vec2 v) {\n    return vec2(signNotZero(v.x), signNotZero(v.y));\n}\n\n// Returns a unit vector. Argument o is an octahedral vector packed via octEncode, on the [-1, +1] square\nvec3 octDecode(vec2 o) {\n    vec3 v = vec3(o.x, 1.0 - abs(o.x) - abs(o.y), o.y);\n    if (v.y < 0.0) {\n        v.xz = (1.0 - abs(v.zx)) * signNotZero(v.xz);\n    }\n    return normalize(v);\n}\n\nvec3 getDirectionOctahedral() {\n    return octDecode(vec2(vUv0.x, 1.0 - vUv0.y) * 2.0 - 1.0);\n}\n\n// Assumes that v is a unit vector. The result is an octahedral vector on the [-1, +1] square\nvec2 octEncode(in vec3 v) {\n    float l1norm = abs(v.x) + abs(v.y) + abs(v.z);\n    vec2 result = v.xz * (1.0 / l1norm);\n    if (v.y < 0.0) {\n        result = (1.0 - abs(result.yx)) * signNotZero(result.xy);\n    }\n    return result;\n}\n\nvec4 sampleOctahedral(vec3 dir) {\n    vec2 uv = octEncode(dir) * 0.5 + 0.5;\n    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));\n}\n\nvec4 sampleOctahedral(vec2 sph) {\n    return sampleOctahedral(fromSpherical(sph));\n}\n\nvec4 sampleOctahedral(vec3 dir, float mipLevel) {\n    vec2 uv = octEncode(dir) * 0.5 + 0.5;\n#ifdef SUPPORTS_TEXLOD\n    return texture2DLodEXT(sourceTex, vec2(uv.x, 1.0 - uv.y), mipLevel);\n#else\n    return texture2D(sourceTex, vec2(uv.x, 1.0 - uv.y));\n#endif\n}\n\nvec4 sampleOctahedral(vec2 sph, float mipLevel) {\n    return sampleOctahedral(fromSpherical(sph), mipLevel);\n}\n\n/////////////////////////////////////////////////////////////////////\n\nvec3 getDirectionCubemap() {\n    vec2 st = vUv0 * 2.0 - 1.0;\n    float face = targetFace();\n\n    vec3 vec;\n    if (face == 0.0) {\n        vec = vec3(1, -st.y, -st.x);\n    } else if (face == 1.0) {\n        vec = vec3(-1, -st.y, st.x);\n    } else if (face == 2.0) {\n        vec = vec3(st.x, 1, st.y);\n    } else if (face == 3.0) {\n        vec = vec3(st.x, -1, -st.y);\n    } else if (face == 4.0) {\n        vec = vec3(st.x, -st.y, 1);\n    } else {\n        vec = vec3(-st.x, -st.y, -1);\n    }\n\n    return normalize(modifySeams(vec, 1.0 / (1.0 - targetCubeSeamScale())));\n}\n\nmat3 matrixFromVector(vec3 n) { // frisvad\n    float a = 1.0 / (1.0 + n.z);\n    float b = -n.x * n.y * a;\n    vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);\n    vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);\n    return mat3(b1, b2, n);\n}\n\nmat3 matrixFromVectorSlow(vec3 n) {\n    vec3 up = (1.0 - abs(n.y) <= 0.0000001) ? vec3(0.0, 0.0, n.y > 0.0 ? 1.0 : -1.0) : vec3(0.0, 1.0, 0.0);\n    vec3 x = normalize(cross(up, n));\n    vec3 y = cross(n, x);\n    return mat3(x, y, n);\n}\n\nvec4 reproject() {\n    if (NUM_SAMPLES <= 1) {\n        // single sample\n        return ENCODE_FUNC(DECODE_FUNC(SOURCE_FUNC(TARGET_FUNC())));\n    } else {\n        // multi sample\n        vec2 sph = toSpherical(TARGET_FUNC());\n        vec2 sphu = dFdx(sph);\n        vec2 sphv = dFdy(sph);\n\n        // TODO: check this declaration works on old devices.\n        // might need to be placed globally or be made a #define\n        const float NUM_SAMPLES_SQRT = sqrt(float(NUM_SAMPLES));\n\n        vec3 result = vec3(0.0);\n        for (float u = 0.0; u < NUM_SAMPLES_SQRT; ++u) {\n            for (float v = 0.0; v < NUM_SAMPLES_SQRT; ++v) {\n                result += DECODE_FUNC(SOURCE_FUNC(sph +\n                                                  sphu * (u / NUM_SAMPLES_SQRT - 0.5) +\n                                                  sphv * (v / NUM_SAMPLES_SQRT - 0.5)));\n            }\n        }\n        return ENCODE_FUNC(result / (NUM_SAMPLES_SQRT * NUM_SAMPLES_SQRT));\n    }\n}\n\nvec4 unpackFloat = vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0);\n\nvoid unpackSample(int i, out vec3 L, out float mipLevel) {\n    float u = (float(i * 4) + 0.5) * samplesTexInverseSize.x;\n    float v = (floor(u) + 0.5) * samplesTexInverseSize.y;\n\n    vec4 raw;\n    raw.x = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;\n    raw.y = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;\n    raw.z = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat); u += samplesTexInverseSize.x;\n    raw.w = dot(texture2D(samplesTex, vec2(u, v)), unpackFloat);\n\n    L.xyz = raw.xyz * 2.0 - 1.0;\n    mipLevel = raw.w * 8.0;\n}\n\n// convolve an environment given pre-generated samples\nvec4 prefilterSamples() {\n    // construct vector space given target direction\n    mat3 vecSpace = matrixFromVectorSlow(TARGET_FUNC());\n\n    vec3 L;\n    float mipLevel;\n\n    vec3 result = vec3(0.0);\n    float totalWeight = 0.0;\n    for (int i = 0; i < NUM_SAMPLES; ++i) {\n        unpackSample(i, L, mipLevel);\n        result += DECODE_FUNC(SOURCE_FUNC(vecSpace * L, mipLevel)) * L.z;\n        totalWeight += L.z;\n    }\n\n    return ENCODE_FUNC(result / totalWeight);\n}\n\n// unweighted version of prefilterSamples\nvec4 prefilterSamplesUnweighted() {\n    // construct vector space given target direction\n    mat3 vecSpace = matrixFromVectorSlow(TARGET_FUNC());\n\n    vec3 L;\n    float mipLevel;\n\n    vec3 result = vec3(0.0);\n    float totalWeight = 0.0;\n    for (int i = 0; i < NUM_SAMPLES; ++i) {\n        unpackSample(i, L, mipLevel);\n        result += DECODE_FUNC(SOURCE_FUNC(vecSpace * L, mipLevel));\n    }\n\n    return ENCODE_FUNC(result / float(NUM_SAMPLES));\n}\n\nvoid main(void) {\n    gl_FragColor = PROCESS_FUNC();\n}\n\n");

/***/ }),

/***/ "./src/shaders/reproject.vert":
/*!************************************!*\
  !*** ./src/shaders/reproject.vert ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("in vec2 aPosition;\nout vec2 vUv0;\n\nuniform vec4 uvMod;\n\nvoid main(void) {\n    // aPosition: -1~1\n    // uvMod: [1.0001, 1.00001, -0.0000, -0.00001]\n    gl_Position = vec4(aPosition, 0.5, 1.0);\n    vUv0 = (aPosition.xy * 0.5 + 0.5) * uvMod.xy + uvMod.zw;\n}\n");

/***/ }),

/***/ "./src/shaders/skybox.frag":
/*!*********************************!*\
  !*** ./src/shaders/skybox.frag ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n#ifdef GL2\nprecision highp sampler2DShadow;\n#endif\n\nvec3 processEnvironment(vec3 color) {\n    return color;\n}\n\nvec3 gammaCorrectInput(vec3 color) {\n    return pow(color, vec3(2.2));\n}\n\nfloat gammaCorrectInput(float color) {\n    return pow(color, 2.2);\n}\n\nvec4 gammaCorrectInput(vec4 color) {\n    return vec4(pow(color.rgb, vec3(2.2)), color.a);\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv) {\n    vec4 rgba = texture2D(tex, uv);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec4 texture2DSRGB(sampler2D tex, vec2 uv, float bias) {\n    vec4 rgba = texture2D(tex, uv, bias);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec4 textureCubeSRGB(samplerCube tex, vec3 uvw) {\n    vec4 rgba = textureCube(tex, uvw);\n    rgba.rgb = gammaCorrectInput(rgba.rgb);\n    return rgba;\n}\n\nvec3 gammaCorrectOutput(vec3 color) {\n    #ifdef HDR\n    return color;\n    #else\n    color += vec3(0.0000001);\n    return pow(color, vec3(0.45));\n    #endif\n}\n\nuniform float exposure;\n\nvec3 toneMap(vec3 color) {\n    return color * exposure;\n}\n\nvec3 decodeLinear(vec4 raw) {\n    return raw.rgb;\n}\n\nvec3 decodeGamma(vec4 raw) {\n    return pow(raw.xyz, vec3(2.2));\n}\n\nvec3 decodeRGBM(vec4 raw) {\n    vec3 color = (8.0 * raw.a) * raw.rgb;\n    return color * color;\n}\n\nvec3 decodeRGBE(vec4 raw) {\n    if (raw.a == 0.0) {\n        return vec3(0.0, 0.0, 0.0);\n    } else {\n        return raw.xyz * pow(2.0, raw.w * 255.0 - 128.0);\n    }\n}\n\nconst float PI = 3.141592653589793;\n\nvec2 toSpherical(vec3 dir) {\n    return vec2(dir.xz == vec2(0.0) ? 0.0 : atan(dir.x, dir.z), asin(dir.y));\n}\n\nvec2 toSphericalUv(vec3 dir) {\n    vec2 uv = toSpherical(dir) / vec2(PI * 2.0, PI) + 0.5;\n    return vec2(uv.x, 1.0 - uv.y);\n}\n\n// equirectangular helper functions\n\n// envAtlas is fixed at 512 pixels. every equirect is generated with 1 pixel boundary.\nconst float atlasSize = 512.0;\nconst float seamSize = 1.0 / atlasSize;\n\n// map a normalized equirect UV to the given rectangle (taking 1 pixel seam into account).\nvec2 mapUv(vec2 uv, vec4 rect) {\n    return vec2(mix(rect.x + seamSize, rect.x + rect.z - seamSize, uv.x),\n                mix(rect.y + seamSize, rect.y + rect.w - seamSize, uv.y));\n}\n\n// map a normalized equirect UV and roughness level to the correct atlas rect.\nvec2 mapRoughnessUv(vec2 uv, float level) {\n    float t = 1.0 / exp2(level);\n    return mapUv(uv, vec4(0, 1.0 - t, t, t * 0.5));\n}\n\n//\nvec2 mapMip(vec2 uv, float level) {\n    float t = 1.0 / exp2(level);\n    return mapUv(uv, vec4(1.0 - t, 1.0 - t, t, t * 0.5));\n}\n\nvarying vec3 vViewDir;\n\nuniform sampler2D texture_envAtlas;\nuniform float mipLevel;\n\nvoid main(void) {\n    vec3 dir = vViewDir * vec3(-1.0, 1.0, 1.0);\n    vec2 uv = toSphericalUv(normalize(dir));\n\n    vec3 linear = decodeGamma(texture2D(texture_envAtlas, mapRoughnessUv(uv, mipLevel)));\n\n    gl_FragColor = vec4(gammaCorrectOutput(toneMap(processEnvironment(linear))), 1.0);\n}\n\n");

/***/ }),

/***/ "./src/shaders/skybox.vert":
/*!*********************************!*\
  !*** ./src/shaders/skybox.vert ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("in vec3 aPosition;\n\nout vec3 vViewDir;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 cubeMapRotationMatrix;\n\nvoid main(void) {\n    mat4 view = viewMatrix;\n    // 相机的位置\n    view[3][0] = view[3][1] = view[3][2] = 0.0;\n    gl_Position = projectionMatrix * view * vec4(aPosition, 1.0);\n\n    // Force skybox to far Z, regardless of the clip planes on the camera\n    // Subtract a tiny fudge factor to ensure floating point errors don't\n    // still push pixels beyond far Z. See:\n    // http://www.opengl.org/discussion_boards/showthread.php/171867-skybox-problem\n\n    gl_Position.z = gl_Position.w - 0.00001;\n    vViewDir = aPosition * cubeMapRotationMatrix;\n}\n");

/***/ }),

/***/ "./src/texture/index.ts":
/*!******************************!*\
  !*** ./src/texture/index.ts ***!
  \******************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texture */ "./src/texture/texture.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _texture__WEBPACK_IMPORTED_MODULE_0__["Texture"]; });




/***/ }),

/***/ "./src/texture/texture.ts":
/*!********************************!*\
  !*** ./src/texture/texture.ts ***!
  \********************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
/* harmony import */ var _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/engine.enum */ "./src/engines/engine.enum.ts");
/* harmony import */ var _maths_math_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/math.tool */ "./src/maths/math.tool.ts");
/* harmony import */ var _misc_fileTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/fileTools */ "./src/misc/fileTools.ts");
/* harmony import */ var _misc_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../misc/logger */ "./src/misc/logger.ts");
/* harmony import */ var _misc_event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../misc/event.handler */ "./src/misc/event.handler.ts");





let id = 0;
class Texture extends _misc_event_handler__WEBPACK_IMPORTED_MODULE_4__["EventHandler"] {
    constructor(engine, options) {
        super();
        this.uuid = id++;
        this._compareOnRead = false;
        this._cubemap = false;
        this._volume = false;
        this._engine = engine;
        this.needsUpload = false;
        if (!options) {
            options = {};
        }
        this._mipmaps = true;
        this._source = null;
        this._minFilter = options.minFilter !== undefined ? options.minFilter : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_LINEAR_MIPMAP_LINEAR;
        this._magFilter = options.magFilter !== undefined ? options.magFilter : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureFilter"].FILTER_LINEAR;
        this._addressU = options.addressU !== undefined ? options.addressU : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_REPEAT;
        this._addressV = options.addressV !== undefined ? options.addressV : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_REPEAT;
        this._addressW = options.addressW !== undefined ? options.addressW : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureAddress"].ADDRESS_REPEAT;
        this._flipY = options.flipY !== undefined ? options.flipY : true;
        this._format = options.format !== undefined ? options.format : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"].PIXELFORMAT_R8_G8_B8_A8;
        this._compareOnRead = options.compareOnRead !== undefined ? options.compareOnRead : false;
        this._compareFunc = options.compareFunc !== undefined ? options.compareFunc : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["CompareFunc"].FUNC_LESS;
        this._type = options.type !== undefined ? options.type : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureType"].TEXTURETYPE_DEFAULT;
        this._premultiplyAlpha = options.premultiplyAlpha !== undefined ? options.premultiplyAlpha : false;
        this._fixCubemapSeams = options.fixCubemapSeams !== undefined ? options.fixCubemapSeams : false;
        this._projection = options.projection !== undefined ? options.projection : _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureProjection"].TEXTUREPROJECTION_NONE;
        this._width = options.width !== undefined ? options.width : 0;
        this._height = options.height !== undefined ? options.height : 0;
        this._anisotropy = options.anisotropy !== undefined ? options.anisotropy : 1;
        if (options.url) {
            _misc_fileTools__WEBPACK_IMPORTED_MODULE_2__["FileTools"].LoadImage({
                url: options.url,
                onLoad: (img) => {
                    this.source = img;
                    (options === null || options === void 0 ? void 0 : options.onLoad) && options.onLoad();
                    this.fire("loaded");
                },
                onError: (msg) => {
                    (options === null || options === void 0 ? void 0 : options.onError) && options.onError();
                }
            });
            this._cubemap = false;
        }
        else if (options.urls) {
            this._cubemap = true;
            _misc_fileTools__WEBPACK_IMPORTED_MODULE_2__["FileTools"].LoadCubeImages({
                urls: options.urls,
                onLoad: (img) => {
                    this.source = img;
                    (options === null || options === void 0 ? void 0 : options.onLoad) && options.onLoad();
                    this.fire("loaded");
                },
                onError: (msg) => {
                    (options === null || options === void 0 ? void 0 : options.onError) && options.onError();
                }
            });
        }
        this.name = options.name !== undefined ? options.name : "default";
        this._mipmaps = options.mipmaps !== undefined ? options.mipmaps : true;
        this.dirtyAll();
    }
    get anisotropy() {
        return this._anisotropy;
    }
    /**
     * Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no
     * anisotropic filtering) to the {@link GraphicsDevice} property maxAnisotropy.
     */
    set anisotropy(v) {
        if (this._anisotropy !== v) {
            this._anisotropy = v;
            this._parameterFlags |= 128;
        }
    }
    set mipmaps(v) {
        if (this._mipmaps !== v) {
            this._mipmaps = v;
            if (v)
                this._needsMipmapsUpload = true;
        }
    }
    get mipmaps() {
        return this._mipmaps;
    }
    get projection() {
        return this._projection;
    }
    get fixCubemapSeams() {
        return this._fixCubemapSeams;
    }
    get type() {
        return this._type;
    }
    get parameterFlags() {
        return this._parameterFlags;
    }
    set parameterFlags(v) {
        this._parameterFlags = v;
    }
    get cubemap() {
        return this._cubemap;
    }
    get volume() {
        return this._volume;
    }
    get flipY() {
        return this._flipY;
    }
    set flipY(v) {
        this._flipY = v;
    }
    set premultiplyAlpha(premultiplyAlpha) {
        if (this._premultiplyAlpha !== premultiplyAlpha) {
            this._premultiplyAlpha = premultiplyAlpha;
            this.needsUpload = true;
        }
    }
    get premultiplyAlpha() {
        return this._premultiplyAlpha;
    }
    get minFilter() {
        return this._minFilter;
    }
    set minFilter(v) {
        this._minFilter = v;
        this._parameterFlags |= 1;
    }
    get magFilter() {
        return this._magFilter;
    }
    set magFilter(v) {
        this._magFilter = v;
        this._parameterFlags |= 2;
    }
    get addressU() {
        return this._addressU;
    }
    set addressU(v) {
        this._addressU = v;
        this._parameterFlags |= 4;
    }
    get addressV() {
        return this._addressV;
    }
    set addressV(v) {
        this._addressV = v;
        this._parameterFlags |= 8;
    }
    /**
     * The addressing mode to be applied to the 3D texture depth (WebGL2 only). Can be:
     *
     * - {@link ADDRESS_REPEAT}
     * - {@link ADDRESS_CLAMP_TO_EDGE}
     * - {@link ADDRESS_MIRRORED_REPEAT}
     *
     * @type {number}
     */
    set addressW(addressW) {
        if (!this._engine.webgl2)
            return;
        if (!this._volume) {
            _misc_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"].Warn("pc.Texture#addressW: Can't set W addressing mode for a non-3D texture.");
            return;
        }
        if (addressW !== this._addressW) {
            this._addressW = addressW;
            this._parameterFlags |= 16;
        }
    }
    get addressW() {
        return this._addressW;
    }
    get format() {
        return this._format;
    }
    set format(v) {
        this._format = v;
    }
    /**
     * Returns true if all dimensions of the texture are power of two, and false otherwise.
     *
     * @type {boolean}
     */
    get pot() {
        return _maths_math_tool__WEBPACK_IMPORTED_MODULE_1__["MathTool"].powerOfTwo(this._width) && _maths_math_tool__WEBPACK_IMPORTED_MODULE_1__["MathTool"].powerOfTwo(this._height);
    }
    /**
     * When enabled, and if texture format is {@link PIXELFORMAT_DEPTH} or
     * {@link PIXELFORMAT_DEPTHSTENCIL}, hardware PCF is enabled for this texture, and you can get
     * filtered results of comparison using texture() in your shader (WebGL2 only).
     *
     * @type {boolean}
     */
    set compareOnRead(v) {
        if (this._compareOnRead !== v) {
            this._compareOnRead = v;
            this._parameterFlags |= 32;
        }
    }
    get compareOnRead() {
        return this._compareOnRead;
    }
    set compareFunc(v) {
        if (this._compareFunc !== v) {
            this._compareFunc = v;
            this._parameterFlags |= 64;
        }
    }
    get compareFunc() {
        return this._compareFunc;
    }
    get source() {
        return this._source;
    }
    get width() {
        return this._width;
    }
    set width(v) {
        this._width = v;
    }
    get height() {
        return this._height;
    }
    set height(v) {
        this._height = v;
    }
    get needsMipmapsUpload() {
        return this._needsMipmapsUpload;
    }
    get mipmapsUploaded() {
        return this._mipmapsUploaded;
    }
    set source(v) {
        this._source = null;
        this._source = v;
        if (Array.isArray(v)) {
            this._width = v[0].width;
            this._height = v[0].height;
        }
        else if (v) {
            this._width = v.width;
            this._height = v.height;
        }
        this.upload();
    }
    // Force a full resubmission of the texture to WebGL (used on a context restore event)
    dirtyAll() {
        // this._levelsUpdated = this._cubemap ? [[true, true, true, true, true, true]] : [true];
        this.needsUpload = true;
        this._needsMipmapsUpload = this._mipmaps;
        this._mipmapsUploaded = false;
        this._parameterFlags = 255; // 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128
    }
    /**
     * Forces a reupload of the textures pixel data to graphics memory. Ordinarily, this function
     * is called by internally by {@link Texture#setSource} and {@link Texture#unlock}. However, it
     * still needs to be called explicitly in the case where an HTMLVideoElement is set as the
     * source of the texture.  Normally, this is done once every frame before video textured
     * geometry is rendered.
     */
    upload() {
        this.needsUpload = true;
        this._needsMipmapsUpload = this._mipmaps;
    }
    // get the texture's encoding type
    get encoding() {
        if (this.type === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureType"].TEXTURETYPE_RGBM) {
            return "rgbm";
        }
        if (this.type === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureType"].TEXTURETYPE_RGBE) {
            return "rgbe";
        }
        if (this.format === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"].PIXELFORMAT_RGBA16F || this.format === _engines_engine_enum__WEBPACK_IMPORTED_MODULE_0__["TextureFormat"].PIXELFORMAT_RGBA32F) {
            return "linear";
        }
        return "srgb";
    }
    syncWait() {
        return new Promise((resolve, reject) => {
            this.once("loaded", resolve);
        });
    }
    distory() {
        this.off("loaded");
    }
}


/***/ })

/******/ });
//# sourceMappingURL=lmgl.max.js.map