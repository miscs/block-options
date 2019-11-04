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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-scroll-into-view/dist-web/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/dist-web/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX;

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop + which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  }

  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay(elem) {
  var val;
  var args = arguments; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
}); // 设置 elem 相对 elem.ownerDocument 的坐标

function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current;
  var key;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }

  css(elem, ret);
}

var util = _objectSpread2({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (var _i in obj) {
        if (obj.hasOwnProperty(_i)) {
          ret.overflow[_i] = obj.overflow[_i];
        }
      }
    }

    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }

      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }

      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }

      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }

      w.scrollTop = v;
    }
  },
  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

function scrollIntoView(elem, container, config) {
  config = config || {}; // document 归一化到 window

  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;
  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset;
  var ch;
  var cw;
  var containerScroll;
  var diffTop;
  var diffBottom;
  var win;
  var winScroll;
  var ww;
  var wh;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    }; // elem 相对 container 可视视窗的距离

    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    }; // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点

    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;

      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;

        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-character-map/dist/component/chars.json":
/*!********************************************************************!*\
  !*** ./node_modules/react-character-map/dist/component/chars.json ***!
  \********************************************************************/
/*! exports provided: Misc, Math, Latin, Arrows, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Misc\":[{\"entity\":\"&trade;\",\"hex\":\"&#2122;\",\"name\":\"TRADEMARK SIGN\",\"char\":\"™\"},{\"entity\":\"&copy;\",\"hex\":\"&#00A9;\",\"name\":\"COPYRIGHT SIGN\",\"char\":\"©\"},{\"entity\":\"&reg;\",\"hex\":\"&#00AE;\",\"name\":\"REGISTERED SIGN\",\"char\":\"®\"},{\"hex\":\"&#0024;\",\"name\":\"DOLLAR SIGN\",\"char\":\"$\"},{\"hex\":\"&#20AC;\",\"name\":\"EURO SIGN\",\"char\":\"€\"},{\"entity\":\"&cent;\",\"hex\":\"&#00A2;\",\"name\":\"CENT SIGN\",\"char\":\"¢\"},{\"entity\":\"&pound;\",\"hex\":\"&#00A3;\",\"name\":\"POUND SIGN\",\"char\":\"£\"},{\"entity\":\"&curren;\",\"hex\":\"&#00A4;\",\"name\":\"CURRENCY SIGN\",\"char\":\"¤\"},{\"entity\":\"&yen;\",\"hex\":\"&#00A5;\",\"name\":\"YEN SIGN\",\"char\":\"¥\"},{\"entity\":\"&para;\",\"hex\":\"&#00B6;\",\"name\":\"PILCROW SIGN\",\"char\":\"¶\"},{\"entity\":\"&sect;\",\"hex\":\"&#00A7;\",\"name\":\"SECTION SIGN\",\"char\":\"§\"},{\"hex\":\"&#275D;\",\"name\":\"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❝\"},{\"hex\":\"&#275E;\",\"name\":\"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❞\"},{\"entity\":\"&infin;\",\"hex\":\"&#221E;\",\"name\":\"INFINITY\",\"char\":\"∞\"},{\"entity\":\"&oslash;\",\"hex\":\"&#00F8;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE\",\"char\":\"ø\"},{\"entity\":\"&ne;\",\"hex\":\"&#2260;\",\"name\":\"NOT EQUAL TO\",\"char\":\"≠\"},{\"hex\":\"&#0025;\",\"name\":\"PERCENT SIGN\",\"char\":\"%\"},{\"entity\":\"&hellip;\",\"hex\":\"&#2026;\",\"name\":\"HORIZONTAL ELLIPSIS\",\"char\":\"…\"},{\"entity\":\"&int;\",\"hex\":\"&#222B;\",\"name\":\"INTEGRAL\",\"char\":\"∫\"},{\"entity\":\"&asymp;\",\"hex\":\"&#2248;\",\"name\":\"ALMOST EQUAL TO\",\"char\":\"≈\"},{\"entity\":\"&there4;\",\"hex\":\"&#2234;\",\"name\":\"THEREFORE\",\"char\":\"∴\"},{\"entity\":\"&prop;\",\"hex\":\"&#221D;\",\"name\":\"PROPORTIONAL TO\",\"char\":\"∝\"},{\"entity\":\"&micro;\",\"hex\":\"&#00B5;\",\"name\":\"MICRO SIGN\",\"char\":\"µ\"},{\"entity\":\"&part;\",\"hex\":\"&#2202;\",\"name\":\"PARTIAL DIFFERENTIAL\",\"char\":\"∂\"},{\"entity\":\"&Omega;\",\"hex\":\"&#03A9;\",\"name\":\"GREEK CAPITAL LETTER OMEGA\",\"char\":\"Ω\"},{\"entity\":\"&Phi;\",\"hex\":\"&#03A6;\",\"name\":\"GREEK CAPITAL LETTER PHI\",\"char\":\"Φ\"},{\"entity\":\"&Psi;\",\"hex\":\"&#03A8;\",\"name\":\"GREEK CAPITAL LETTER PSI\",\"char\":\"Ψ\"},{\"entity\":\"&lambda;\",\"hex\":\"&#03BB;\",\"name\":\"GREEK SMALL LETTER LAMDA\",\"char\":\"λ\"},{\"hex\":\"&#03F4;\",\"name\":\"GREEK CAPITAL THETA SYMBOL\",\"char\":\"ϴ\"},{\"entity\":\"&omega;\",\"hex\":\"&#03C9;\",\"name\":\"GREEK SMALL LETTER OMEGA\",\"char\":\"ω\"},{\"hex\":\"&#A74F;\",\"name\":\"LATIN SMALL LETTER OO\",\"char\":\"ꝏ\"},{\"hex\":\"&#1D60;\",\"name\":\"MODIFIER LETTER SMALL GREEK PHI\",\"char\":\"ᵠ\"},{\"hex\":\"&#2103;\",\"name\":\"DEGREE CELSIUS\",\"char\":\"℃\"},{\"hex\":\"&#2109;\",\"name\":\"DEGREE FAHRENHEIT\",\"char\":\"℉\"},{\"hex\":\"&#2691;\",\"name\":\"BLACK FLAG\",\"char\":\"⚑\"},{\"hex\":\"&#2690;\",\"name\":\"WHITE FLAG\",\"char\":\"⚐\"},{\"hex\":\"&#2766;\",\"name\":\"FLORAL HEART\",\"char\":\"❦\"},{\"hex\":\"&#2619;\",\"name\":\"REVERSED ROTATED FLORAL HEART BULLET\",\"char\":\"☙\"},{\"hex\":\"&#2668;\",\"name\":\"HOT SPRINGS EMOJI\",\"char\":\"♨\"},{\"hex\":\"&#2601;\",\"name\":\"CLOUD\",\"char\":\"☁\"},{\"hex\":\"&#2696;\",\"name\":\"SCALES EMOJI\",\"char\":\"⚖\"},{\"entity\":\"&uml;\",\"hex\":\"&#00A8;\",\"name\":\"DIAERESIS\",\"char\":\"¨\"},{\"entity\":\"&not;\",\"hex\":\"&#00AC;\",\"name\":\"NOT SIGN\",\"char\":\"¬\"},{\"entity\":\"&macr;\",\"hex\":\"&#00AF;\",\"name\":\"MACRON\",\"char\":\"¯\"},{\"entity\":\"&acute;\",\"hex\":\"&#00B4;\",\"name\":\"ACUTE ACCENT\",\"char\":\"´\"},{\"entity\":\"&micro;\",\"hex\":\"&#00B5;\",\"name\":\"MICRO SIGN\",\"char\":\"µ\"},{\"entity\":\"&middot;\",\"hex\":\"&#00B7;\",\"name\":\"MIDDLE DOT\",\"char\":\"·\"},{\"entity\":\"&cedil;\",\"hex\":\"&#00B8;\",\"name\":\"CEDILLA\",\"char\":\"¸\"},{\"entity\":\"&plusmn;\",\"hex\":\"&#00B1;\",\"name\":\"PLUS-MINUS SIGN\",\"char\":\"±\"},{\"entity\":\"&sup1;\",\"hex\":\"&#00B9;\",\"name\":\"SUPERSCRIPT ONE\",\"char\":\"¹\"},{\"entity\":\"&sup2;\",\"hex\":\"&#00B2;\",\"name\":\"SUPERSCRIPT TWO\",\"char\":\"²\"},{\"entity\":\"&sup3;\",\"hex\":\"&#00B3;\",\"name\":\"SUPERSCRIPT THREE\",\"char\":\"³\"},{\"entity\":\"&deg;\",\"hex\":\"&#00B0;\",\"name\":\"DEGREE SIGN\",\"char\":\"°\"},{\"entity\":\"&ordf;\",\"hex\":\"&#00AA;\",\"name\":\"FEMININE ORDINAL INDICATOR\",\"char\":\"ª\"},{\"entity\":\"&ordm;\",\"hex\":\"&#00BA;\",\"name\":\"MASCULINE ORDINAL INDICATOR\",\"char\":\"º\"},{\"entity\":\"&frac14;\",\"hex\":\"&#00BC;\",\"name\":\"VULGAR FRACTION ONE QUARTER\",\"char\":\"¼\"},{\"entity\":\"&frac12;\",\"hex\":\"&#00BD;\",\"name\":\"VULGAR FRACTION ONE HALF\",\"char\":\"½\"},{\"entity\":\"&frac34;\",\"hex\":\"&#00BE;\",\"name\":\"VULGAR FRACTION THREE QUARTERS\",\"char\":\"¾\"},{\"entity\":\"&iquest;\",\"hex\":\"&#00BF;\",\"name\":\"INVERTED QUESTION MARK\",\"char\":\"¿\"},{\"entity\":\"&iexcl;\",\"hex\":\"&#00A1;\",\"name\":\"INVERTED EXCLAMATION MARK\",\"char\":\"¡\"},{\"entity\":\"&brvbar;\",\"hex\":\"&#00A6;\",\"name\":\"BROKEN BAR\",\"char\":\"¦\"},{\"entity\":\"&laquo;\",\"hex\":\"&#00AB;\",\"name\":\"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK\",\"char\":\"«\"},{\"entity\":\"&raquo;\",\"hex\":\"&#00BB;\",\"name\":\"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK\",\"char\":\"»\"},{\"hex\":\"&#25A0;\",\"name\":\"BLACK SQUARE\",\"char\":\"■\"},{\"hex\":\"&#25A1;\",\"name\":\"WHITE SQUARE\",\"char\":\"□\"},{\"hex\":\"&#25A2;\",\"name\":\"WHITE SQUARE WITH ROUNDED CORNERS\",\"char\":\"▢\"},{\"hex\":\"&#25A3;\",\"name\":\"WHITE SQUARE CONTAINING BLACK SMALL SQUARE\",\"char\":\"▣\"},{\"hex\":\"&#25A4;\",\"name\":\"SQUARE WITH HORIZONTAL FILL\",\"char\":\"▤\"},{\"hex\":\"&#25A5;\",\"name\":\"SQUARE WITH VERTICAL FILL\",\"char\":\"▥\"},{\"hex\":\"&#25A6;\",\"name\":\"SQUARE WITH ORTHOGONAL CROSSHATCH FILL\",\"char\":\"▦\"},{\"hex\":\"&#25A7;\",\"name\":\"SQUARE WITH UPPER LEFT TO LOWER RIGHT FILL\",\"char\":\"▧\"},{\"hex\":\"&#25A8;\",\"name\":\"SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL\",\"char\":\"▨\"},{\"hex\":\"&#25A9;\",\"name\":\"SQUARE WITH DIAGONAL CROSSHATCH FILL\",\"char\":\"▩\"},{\"hex\":\"&#25AA;\",\"name\":\"BLACK SMALL SQUARE\",\"char\":\"▪\"},{\"hex\":\"&#25AB;\",\"name\":\"WHITE SMALL SQUARE\",\"char\":\"▫\"},{\"hex\":\"&#25AC;\",\"name\":\"BLACK RECTANGLE\",\"char\":\"▬\"},{\"hex\":\"&#25AD;\",\"name\":\"WHITE RECTANGLE\",\"char\":\"▭\"},{\"hex\":\"&#25AE;\",\"name\":\"BLACK VERTICAL RECTANGLE\",\"char\":\"▮\"},{\"hex\":\"&#25AF;\",\"name\":\"WHITE VERTICAL RECTANGLE\",\"char\":\"▯\"},{\"hex\":\"&#25B0;\",\"name\":\"BLACK PARALLELOGRAM\",\"char\":\"▰\"},{\"hex\":\"&#25B1;\",\"name\":\"WHITE PARALLELOGRAM\",\"char\":\"▱\"},{\"hex\":\"&#25B2;\",\"name\":\"BLACK UP-POINTING TRIANGLE\",\"char\":\"▲\"},{\"hex\":\"&#25B3;\",\"name\":\"WHITE UP-POINTING TRIANGLE\",\"char\":\"△\"},{\"hex\":\"&#25B4;\",\"name\":\"BLACK UP-POINTING SMALL TRIANGLE\",\"char\":\"▴\"},{\"hex\":\"&#25B5;\",\"name\":\"WHITE UP-POINTING SMALL TRIANGLE\",\"char\":\"▵\"},{\"hex\":\"&#25B6;\",\"name\":\"BLACK RIGHT-POINTING TRIANGLE\",\"char\":\"▶\"},{\"hex\":\"&#25B7;\",\"name\":\"WHITE RIGHT-POINTING TRIANGLE\",\"char\":\"▷\"},{\"hex\":\"&#25B8;\",\"name\":\"BLACK RIGHT-POINTING SMALL TRIANGLE\",\"char\":\"▸\"},{\"hex\":\"&#25B9;\",\"name\":\"WHITE RIGHT-POINTING SMALL TRIANGLE\",\"char\":\"▹\"},{\"hex\":\"&#25BA;\",\"name\":\"BLACK RIGHT-POINTING POINTER\",\"char\":\"►\"},{\"hex\":\"&#25BB;\",\"name\":\"WHITE RIGHT-POINTING POINTER\",\"char\":\"▻\"},{\"hex\":\"&#25BC;\",\"name\":\"BLACK DOWN-POINTING TRIANGLE\",\"char\":\"▼\"},{\"hex\":\"&#25BD;\",\"name\":\"WHITE DOWN-POINTING TRIANGLE\",\"char\":\"▽\"},{\"hex\":\"&#25BE;\",\"name\":\"BLACK DOWN-POINTING SMALL TRIANGLE\",\"char\":\"▾\"},{\"hex\":\"&#25BF;\",\"name\":\"WHITE DOWN-POINTING SMALL TRIANGLE\",\"char\":\"▿\"},{\"hex\":\"&#25C0;\",\"name\":\"BLACK LEFT-POINTING TRIANGLE\",\"char\":\"◀\"},{\"hex\":\"&#25C1;\",\"name\":\"WHITE LEFT-POINTING TRIANGLE\",\"char\":\"◁\"},{\"hex\":\"&#25C2;\",\"name\":\"BLACK LEFT-POINTING SMALL TRIANGLE\",\"char\":\"◂\"},{\"hex\":\"&#25C3;\",\"name\":\"WHITE LEFT-POINTING SMALL TRIANGLE\",\"char\":\"◃\"},{\"hex\":\"&#25C4;\",\"name\":\"BLACK LEFT-POINTING POINTER\",\"char\":\"◄\"},{\"hex\":\"&#25C5;\",\"name\":\"WHITE LEFT-POINTING POINTER\",\"char\":\"◅\"},{\"hex\":\"&#25C6;\",\"name\":\"BLACK DIAMOND\",\"char\":\"◆\"},{\"hex\":\"&#25C7;\",\"name\":\"WHITE DIAMOND\",\"char\":\"◇\"},{\"hex\":\"&#25C8;\",\"name\":\"WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND\",\"char\":\"◈\"},{\"hex\":\"&#25C9;\",\"name\":\"FISHEYE\",\"char\":\"◉\"},{\"entity\":\"&loz;\",\"hex\":\"&#25CA;\",\"name\":\"LOZENGE\",\"char\":\"◊\"},{\"hex\":\"&#25CB;\",\"name\":\"WHITE CIRCLE\",\"char\":\"○\"},{\"hex\":\"&#25CC;\",\"name\":\"DOTTED CIRCLE\",\"char\":\"◌\"},{\"hex\":\"&#25CD;\",\"name\":\"CIRCLE WITH VERTICAL FILL\",\"char\":\"◍\"},{\"hex\":\"&#25CE;\",\"name\":\"BULLSEYE\",\"char\":\"◎\"},{\"hex\":\"&#25CF;\",\"name\":\"BLACK CIRCLE\",\"char\":\"●\"},{\"hex\":\"&#25D0;\",\"name\":\"CIRCLE WITH LEFT HALF BLACK\",\"char\":\"◐\"},{\"hex\":\"&#25D1;\",\"name\":\"CIRCLE WITH RIGHT HALF BLACK\",\"char\":\"◑\"},{\"hex\":\"&#25D2;\",\"name\":\"CIRCLE WITH LOWER HALF BLACK\",\"char\":\"◒\"},{\"hex\":\"&#25D3;\",\"name\":\"CIRCLE WITH UPPER HALF BLACK\",\"char\":\"◓\"},{\"hex\":\"&#25D4;\",\"name\":\"CIRCLE WITH UPPER RIGHT QUADRANT BLACK\",\"char\":\"◔\"},{\"hex\":\"&#25D5;\",\"name\":\"CIRCLE WITH ALL BUT UPPER LEFT QUADRANT BLACK\",\"char\":\"◕\"},{\"hex\":\"&#25D6;\",\"name\":\"LEFT HALF BLACK CIRCLE\",\"char\":\"◖\"},{\"hex\":\"&#25D7;\",\"name\":\"RIGHT HALF BLACK CIRCLE\",\"char\":\"◗\"},{\"hex\":\"&#25D8;\",\"name\":\"INVERSE BULLET\",\"char\":\"◘\"},{\"hex\":\"&#25D9;\",\"name\":\"INVERSE WHITE CIRCLE\",\"char\":\"◙\"},{\"hex\":\"&#25DA;\",\"name\":\"UPPER HALF INVERSE WHITE CIRCLE\",\"char\":\"◚\"},{\"hex\":\"&#25DB;\",\"name\":\"LOWER HALF INVERSE WHITE CIRCLE\",\"char\":\"◛\"},{\"hex\":\"&#25DC;\",\"name\":\"UPPER LEFT QUADRANT CIRCULAR ARC\",\"char\":\"◜\"},{\"hex\":\"&#25DD;\",\"name\":\"UPPER RIGHT QUADRANT CIRCULAR ARC\",\"char\":\"◝\"},{\"hex\":\"&#25DE;\",\"name\":\"LOWER RIGHT QUADRANT CIRCULAR ARC\",\"char\":\"◞\"},{\"hex\":\"&#25DF;\",\"name\":\"LOWER LEFT QUADRANT CIRCULAR ARC\",\"char\":\"◟\"},{\"hex\":\"&#25E0;\",\"name\":\"UPPER HALF CIRCLE\",\"char\":\"◠\"},{\"hex\":\"&#25E1;\",\"name\":\"LOWER HALF CIRCLE\",\"char\":\"◡\"},{\"hex\":\"&#25E2;\",\"name\":\"BLACK LOWER RIGHT TRIANGLE\",\"char\":\"◢\"},{\"hex\":\"&#25E3;\",\"name\":\"BLACK LOWER LEFT TRIANGLE\",\"char\":\"◣\"},{\"hex\":\"&#25E4;\",\"name\":\"BLACK UPPER LEFT TRIANGLE\",\"char\":\"◤\"},{\"hex\":\"&#25E5;\",\"name\":\"BLACK UPPER RIGHT TRIANGLE\",\"char\":\"◥\"},{\"hex\":\"&#25E6;\",\"name\":\"WHITE BULLET\",\"char\":\"◦\"},{\"hex\":\"&#25E7;\",\"name\":\"SQUARE WITH LEFT HALF BLACK\",\"char\":\"◧\"},{\"hex\":\"&#25E8;\",\"name\":\"SQUARE WITH RIGHT HALF BLACK\",\"char\":\"◨\"},{\"hex\":\"&#25E9;\",\"name\":\"SQUARE WITH UPPER LEFT DIAGONAL HALF BLACK\",\"char\":\"◩\"},{\"hex\":\"&#25EA;\",\"name\":\"SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK\",\"char\":\"◪\"},{\"hex\":\"&#25EB;\",\"name\":\"WHITE SQUARE WITH VERTICAL BISECTING LINE\",\"char\":\"◫\"},{\"hex\":\"&#25EC;\",\"name\":\"WHITE UP-POINTING TRIANGLE WITH DOT\",\"char\":\"◬\"},{\"hex\":\"&#25ED;\",\"name\":\"UP-POINTING TRIANGLE WITH LEFT HALF BLACK\",\"char\":\"◭\"},{\"hex\":\"&#25EE;\",\"name\":\"UP-POINTING TRIANGLE WITH RIGHT HALF BLACK\",\"char\":\"◮\"},{\"hex\":\"&#25EF;\",\"name\":\"LARGE CIRCLE\",\"char\":\"◯\"},{\"hex\":\"&#25F0;\",\"name\":\"WHITE SQUARE WITH UPPER LEFT QUADRANT\",\"char\":\"◰\"},{\"hex\":\"&#25F1;\",\"name\":\"WHITE SQUARE WITH LOWER LEFT QUADRANT\",\"char\":\"◱\"},{\"hex\":\"&#25F2;\",\"name\":\"WHITE SQUARE WITH LOWER RIGHT QUADRANT\",\"char\":\"◲\"},{\"hex\":\"&#25F3;\",\"name\":\"WHITE SQUARE WITH UPPER RIGHT QUADRANT\",\"char\":\"◳\"},{\"hex\":\"&#25F4;\",\"name\":\"WHITE CIRCLE WITH UPPER LEFT QUADRANT\",\"char\":\"◴\"},{\"hex\":\"&#25F5;\",\"name\":\"WHITE CIRCLE WITH LOWER LEFT QUADRANT\",\"char\":\"◵\"},{\"hex\":\"&#25F6;\",\"name\":\"WHITE CIRCLE WITH LOWER RIGHT QUADRANT\",\"char\":\"◶\"},{\"hex\":\"&#25F7;\",\"name\":\"WHITE CIRCLE WITH UPPER RIGHT QUADRANT\",\"char\":\"◷\"},{\"hex\":\"&#25F8;\",\"name\":\"UPPER LEFT TRIANGLE\",\"char\":\"◸\"},{\"hex\":\"&#25F9;\",\"name\":\"UPPER RIGHT TRIANGLE\",\"char\":\"◹\"},{\"hex\":\"&#25FA;\",\"name\":\"LOWER LEFT TRIANGLE\",\"char\":\"◺\"},{\"hex\":\"&#25FB;\",\"name\":\"WHITE MEDIUM SQUARE\",\"char\":\"◻\"},{\"hex\":\"&#25FC;\",\"name\":\"BLACK MEDIUM SQUARE\",\"char\":\"◼\"},{\"hex\":\"&#25FD;\",\"name\":\"WHITE MEDIUM SMALL SQUARE\",\"char\":\"◽\"},{\"hex\":\"&#25FE;\",\"name\":\"BLACK MEDIUM SMALL SQUARE\",\"char\":\"◾\"},{\"hex\":\"&#25FF;\",\"name\":\"LOWER RIGHT TRIANGLE\",\"char\":\"◿\"},{\"hex\":\"&#2B12;\",\"name\":\"SQUARE WITH TOP HALF BLACK\",\"char\":\"⬒\"},{\"hex\":\"&#2B13;\",\"name\":\"SQUARE WITH BOTTOM HALF BLACK\",\"char\":\"⬓\"},{\"hex\":\"&#2B14;\",\"name\":\"SQUARE WITH UPPER RIGHT DIAGONAL HALF BLACK\",\"char\":\"⬔\"},{\"hex\":\"&#2B15;\",\"name\":\"SQUARE WITH LOWER LEFT DIAGONAL HALF BLACK\",\"char\":\"⬕\"},{\"hex\":\"&#2B16;\",\"name\":\"DIAMOND WITH LEFT HALF BLACK\",\"char\":\"⬖\"},{\"hex\":\"&#2B17;\",\"name\":\"DIAMOND WITH RIGHT HALF BLACK\",\"char\":\"⬗\"},{\"hex\":\"&#2B18;\",\"name\":\"DIAMOND WITH TOP HALF BLACK\",\"char\":\"⬘\"},{\"hex\":\"&#2B19;\",\"name\":\"DIAMOND WITH BOTTOM HALF BLACK\",\"char\":\"⬙\"},{\"hex\":\"&#2B1A;\",\"name\":\"DOTTED SQUARE\",\"char\":\"⬚\"},{\"hex\":\"&#2B1F;\",\"name\":\"BLACK PENTAGON\",\"char\":\"⬟\"},{\"hex\":\"&#2B20;\",\"name\":\"WHITE PENTAGON\",\"char\":\"⬠\"},{\"hex\":\"&#2B21;\",\"name\":\"WHITE HEXAGON\",\"char\":\"⬡\"},{\"hex\":\"&#2B22;\",\"name\":\"BLACK HEXAGON\",\"char\":\"⬢\"},{\"hex\":\"&#2B23;\",\"name\":\"HORIZONTAL BLACK HEXAGON\",\"char\":\"⬣\"},{\"hex\":\"&#2B24;\",\"name\":\"BLACK LARGE CIRCLE\",\"char\":\"⬤\"},{\"hex\":\"&#2B53;\",\"name\":\"BLACK RIGHT-POINTING PENTAGON\",\"char\":\"⭓\"},{\"hex\":\"&#2B54;\",\"name\":\"WHITE RIGHT-POINTING PENTAGON\",\"char\":\"⭔\"},{\"hex\":\"&#2600;\",\"name\":\"BLACK SUN WITH RAYS\",\"char\":\"☀\"},{\"hex\":\"&#2601;\",\"name\":\"CLOUD\",\"char\":\"☁\"},{\"hex\":\"&#2602;\",\"name\":\"UMBRELLA\",\"char\":\"☂\"},{\"hex\":\"&#2603;\",\"name\":\"SNOWMAN\",\"char\":\"☃\"},{\"hex\":\"&#2604;\",\"name\":\"COMET\",\"char\":\"☄\"},{\"hex\":\"&#2605;\",\"name\":\"BLACK STAR\",\"char\":\"★\"},{\"hex\":\"&#2606;\",\"name\":\"WHITE STAR\",\"char\":\"☆\"},{\"hex\":\"&#2607;\",\"name\":\"LIGHTNING\",\"char\":\"☇\"},{\"hex\":\"&#2608;\",\"name\":\"THUNDERSTORM\",\"char\":\"☈\"},{\"hex\":\"&#2609;\",\"name\":\"SUN\",\"char\":\"☉\"},{\"hex\":\"&#260A;\",\"name\":\"ASCENDING NODE\",\"char\":\"☊\"},{\"hex\":\"&#260B;\",\"name\":\"DESCENDING NODE\",\"char\":\"☋\"},{\"hex\":\"&#260C;\",\"name\":\"CONJUNCTION\",\"char\":\"☌\"},{\"hex\":\"&#260D;\",\"name\":\"OPPOSITION\",\"char\":\"☍\"},{\"hex\":\"&#260E;\",\"name\":\"BLACK TELEPHONE\",\"char\":\"☎\"},{\"hex\":\"&#260F;\",\"name\":\"WHITE TELEPHONE\",\"char\":\"☏\"},{\"hex\":\"&#2610;\",\"name\":\"BALLOT BOX\",\"char\":\"☐\"},{\"hex\":\"&#2611;\",\"name\":\"BALLOT BOX WITH CHECK\",\"char\":\"☑\"},{\"hex\":\"&#2612;\",\"name\":\"BALLOT BOX WITH X\",\"char\":\"☒\"},{\"hex\":\"&#2613;\",\"name\":\"SALTIRE\",\"char\":\"☓\"},{\"hex\":\"&#2614;\",\"name\":\"UMBRELLA WITH RAIN DROPS\",\"char\":\"☔\"},{\"hex\":\"&#2615;\",\"name\":\"HOT BEVERAGE\",\"char\":\"☕\"},{\"hex\":\"&#2616;\",\"name\":\"WHITE SHOGI PIECE\",\"char\":\"☖\"},{\"hex\":\"&#2617;\",\"name\":\"BLACK SHOGI PIECE\",\"char\":\"☗\"},{\"hex\":\"&#2618;\",\"name\":\"SHAMROCK\",\"char\":\"☘\"},{\"hex\":\"&#2619;\",\"name\":\"REVERSED ROTATED FLORAL HEART BULLET\",\"char\":\"☙\"},{\"hex\":\"&#261A;\",\"name\":\"BLACK LEFT POINTING INDEX\",\"char\":\"☚\"},{\"hex\":\"&#261B;\",\"name\":\"BLACK RIGHT POINTING INDEX\",\"char\":\"☛\"},{\"hex\":\"&#261C;\",\"name\":\"WHITE LEFT POINTING INDEX\",\"char\":\"☜\"},{\"hex\":\"&#261D;\",\"name\":\"WHITE UP POINTING INDEX\",\"char\":\"☝\"},{\"hex\":\"&#261E;\",\"name\":\"WHITE RIGHT POINTING INDEX\",\"char\":\"☞\"},{\"hex\":\"&#261F;\",\"name\":\"WHITE DOWN POINTING INDEX\",\"char\":\"☟\"},{\"hex\":\"&#2620;\",\"name\":\"SKULL AND CROSSBONES\",\"char\":\"☠\"},{\"hex\":\"&#2621;\",\"name\":\"CAUTION SIGN\",\"char\":\"☡\"},{\"hex\":\"&#2622;\",\"name\":\"RADIOACTIVE SIGN\",\"char\":\"☢\"},{\"hex\":\"&#2623;\",\"name\":\"BIOHAZARD SIGN\",\"char\":\"☣\"},{\"hex\":\"&#2624;\",\"name\":\"CADUCEUS\",\"char\":\"☤\"},{\"hex\":\"&#2625;\",\"name\":\"ANKH\",\"char\":\"☥\"},{\"hex\":\"&#2626;\",\"name\":\"ORTHODOX CROSS\",\"char\":\"☦\"},{\"hex\":\"&#2627;\",\"name\":\"CHI RHO\",\"char\":\"☧\"},{\"hex\":\"&#2628;\",\"name\":\"CROSS OF LORRAINE\",\"char\":\"☨\"},{\"hex\":\"&#2629;\",\"name\":\"CROSS OF JERUSALEM\",\"char\":\"☩\"},{\"hex\":\"&#262A;\",\"name\":\"STAR AND CRESCENT\",\"char\":\"☪\"},{\"hex\":\"&#262B;\",\"name\":\"FARSI SYMBOL\",\"char\":\"☫\"},{\"hex\":\"&#262C;\",\"name\":\"ADI SHAKTI\",\"char\":\"☬\"},{\"hex\":\"&#262D;\",\"name\":\"HAMMER AND SICKLE\",\"char\":\"☭\"},{\"hex\":\"&#262E;\",\"name\":\"PEACE SYMBOL\",\"char\":\"☮\"},{\"hex\":\"&#262F;\",\"name\":\"YIN YANG\",\"char\":\"☯\"},{\"hex\":\"&#2630;\",\"name\":\"TRIGRAM FOR HEAVEN\",\"char\":\"☰\"},{\"hex\":\"&#2631;\",\"name\":\"TRIGRAM FOR LAKE\",\"char\":\"☱\"},{\"hex\":\"&#2632;\",\"name\":\"TRIGRAM FOR FIRE\",\"char\":\"☲\"},{\"hex\":\"&#2633;\",\"name\":\"TRIGRAM FOR THUNDER\",\"char\":\"☳\"},{\"hex\":\"&#2634;\",\"name\":\"TRIGRAM FOR WIND\",\"char\":\"☴\"},{\"hex\":\"&#2635;\",\"name\":\"TRIGRAM FOR WATER\",\"char\":\"☵\"},{\"hex\":\"&#2636;\",\"name\":\"TRIGRAM FOR MOUNTAIN\",\"char\":\"☶\"},{\"hex\":\"&#2637;\",\"name\":\"TRIGRAM FOR EARTH\",\"char\":\"☷\"},{\"hex\":\"&#2638;\",\"name\":\"WHEEL OF DHARMA\",\"char\":\"☸\"},{\"hex\":\"&#2639;\",\"name\":\"WHITE FROWNING FACE\",\"char\":\"☹\"},{\"hex\":\"&#263A;\",\"name\":\"WHITE SMILING FACE\",\"char\":\"☺\"},{\"hex\":\"&#263B;\",\"name\":\"BLACK SMILING FACE\",\"char\":\"☻\"},{\"hex\":\"&#263C;\",\"name\":\"WHITE SUN WITH RAYS\",\"char\":\"☼\"},{\"hex\":\"&#263D;\",\"name\":\"FIRST QUARTER MOON\",\"char\":\"☽\"},{\"hex\":\"&#263E;\",\"name\":\"LAST QUARTER MOON\",\"char\":\"☾\"},{\"hex\":\"&#263F;\",\"name\":\"MERCURY\",\"char\":\"☿\"},{\"hex\":\"&#2640;\",\"name\":\"FEMALE SIGN\",\"char\":\"♀\"},{\"hex\":\"&#2641;\",\"name\":\"EARTH\",\"char\":\"♁\"},{\"hex\":\"&#2642;\",\"name\":\"MALE SIGN\",\"char\":\"♂\"},{\"hex\":\"&#2643;\",\"name\":\"JUPITER\",\"char\":\"♃\"},{\"hex\":\"&#2644;\",\"name\":\"SATURN\",\"char\":\"♄\"},{\"hex\":\"&#2645;\",\"name\":\"URANUS\",\"char\":\"♅\"},{\"hex\":\"&#2646;\",\"name\":\"NEPTUNE\",\"char\":\"♆\"},{\"hex\":\"&#2647;\",\"name\":\"PLUTO\",\"char\":\"♇\"},{\"hex\":\"&#2648;\",\"name\":\"ARIES\",\"char\":\"♈\"},{\"hex\":\"&#2649;\",\"name\":\"TAURUS\",\"char\":\"♉\"},{\"hex\":\"&#264A;\",\"name\":\"GEMINI\",\"char\":\"♊\"},{\"hex\":\"&#264B;\",\"name\":\"CANCER\",\"char\":\"♋\"},{\"hex\":\"&#264C;\",\"name\":\"LEO\",\"char\":\"♌\"},{\"hex\":\"&#264D;\",\"name\":\"VIRGO\",\"char\":\"♍\"},{\"hex\":\"&#264E;\",\"name\":\"LIBRA\",\"char\":\"♎\"},{\"hex\":\"&#264F;\",\"name\":\"SCORPIUS\",\"char\":\"♏\"},{\"hex\":\"&#2650;\",\"name\":\"SAGITTARIUS\",\"char\":\"♐\"},{\"hex\":\"&#2651;\",\"name\":\"CAPRICORN\",\"char\":\"♑\"},{\"hex\":\"&#2652;\",\"name\":\"AQUARIUS\",\"char\":\"♒\"},{\"hex\":\"&#2653;\",\"name\":\"PISCES\",\"char\":\"♓\"},{\"hex\":\"&#2654;\",\"name\":\"WHITE CHESS KING\",\"char\":\"♔\"},{\"hex\":\"&#2655;\",\"name\":\"WHITE CHESS QUEEN\",\"char\":\"♕\"},{\"hex\":\"&#2656;\",\"name\":\"WHITE CHESS ROOK\",\"char\":\"♖\"},{\"hex\":\"&#2657;\",\"name\":\"WHITE CHESS BISHOP\",\"char\":\"♗\"},{\"hex\":\"&#2658;\",\"name\":\"WHITE CHESS KNIGHT\",\"char\":\"♘\"},{\"hex\":\"&#2659;\",\"name\":\"WHITE CHESS PAWN\",\"char\":\"♙\"},{\"hex\":\"&#265A;\",\"name\":\"BLACK CHESS KING\",\"char\":\"♚\"},{\"hex\":\"&#265B;\",\"name\":\"BLACK CHESS QUEEN\",\"char\":\"♛\"},{\"hex\":\"&#265C;\",\"name\":\"BLACK CHESS ROOK\",\"char\":\"♜\"},{\"hex\":\"&#265D;\",\"name\":\"BLACK CHESS BISHOP\",\"char\":\"♝\"},{\"hex\":\"&#265E;\",\"name\":\"BLACK CHESS KNIGHT\",\"char\":\"♞\"},{\"hex\":\"&#265F;\",\"name\":\"BLACK CHESS PAWN\",\"char\":\"♟\"},{\"hex\":\"&#2660;\",\"entity\":\"&spades;\",\"name\":\"BLACK SPADE SUIT\",\"char\":\"♠\"},{\"hex\":\"&#2661;\",\"name\":\"WHITE HEART SUIT\",\"char\":\"♡\"},{\"hex\":\"&#2662;\",\"name\":\"WHITE DIAMOND SUIT\",\"char\":\"♢\"},{\"hex\":\"&#2663;\",\"entity\":\"&clubs;\",\"name\":\"BLACK CLUB SUIT\",\"char\":\"♣\"},{\"hex\":\"&#2664;\",\"name\":\"WHITE SPADE SUIT\",\"char\":\"♤\"},{\"hex\":\"&#2665;\",\"entity\":\"&hearts;\",\"name\":\"BLACK HEART SUIT\",\"char\":\"♥\"},{\"hex\":\"&#2666;\",\"entity\":\"&diams;\",\"name\":\"BLACK DIAMOND SUIT\",\"char\":\"♦\"},{\"hex\":\"&#2667;\",\"name\":\"WHITE CLUB SUIT\",\"char\":\"♧\"},{\"hex\":\"&#2668;\",\"name\":\"HOT SPRINGS\",\"char\":\"♨\"},{\"hex\":\"&#2669;\",\"name\":\"QUARTER NOTE\",\"char\":\"♩\"},{\"hex\":\"&#266A;\",\"name\":\"EIGHTH NOTE\",\"char\":\"♪\"},{\"hex\":\"&#266B;\",\"name\":\"BEAMED EIGHTH NOTES\",\"char\":\"♫\"},{\"hex\":\"&#266C;\",\"name\":\"BEAMED SIXTEENTH NOTES\",\"char\":\"♬\"},{\"hex\":\"&#266D;\",\"name\":\"MUSIC FLAT SIGN\",\"char\":\"♭\"},{\"hex\":\"&#266E;\",\"name\":\"MUSIC NATURAL SIGN\",\"char\":\"♮\"},{\"hex\":\"&#266F;\",\"name\":\"MUSIC SHARP SIGN\",\"char\":\"♯\"},{\"hex\":\"&#2670;\",\"name\":\"WEST SYRIAC CROSS\",\"char\":\"♰\"},{\"hex\":\"&#2671;\",\"name\":\"EAST SYRIAC CROSS\",\"char\":\"♱\"},{\"hex\":\"&#2672;\",\"name\":\"UNIVERSAL RECYCLING SYMBOL\",\"char\":\"♲\"},{\"hex\":\"&#2673;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-1 PLASTICS\",\"char\":\"♳\"},{\"hex\":\"&#2674;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-2 PLASTICS\",\"char\":\"♴\"},{\"hex\":\"&#2675;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-3 PLASTICS\",\"char\":\"♵\"},{\"hex\":\"&#2676;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-4 PLASTICS\",\"char\":\"♶\"},{\"hex\":\"&#2677;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-5 PLASTICS\",\"char\":\"♷\"},{\"hex\":\"&#2678;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-6 PLASTICS\",\"char\":\"♸\"},{\"hex\":\"&#2679;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-7 PLASTICS\",\"char\":\"♹\"},{\"hex\":\"&#267A;\",\"name\":\"RECYCLING SYMBOL FOR GENERIC MATERIALS\",\"char\":\"♺\"},{\"hex\":\"&#267B;\",\"name\":\"BLACK UNIVERSAL RECYCLING SYMBOL\",\"char\":\"♻\"},{\"hex\":\"&#267C;\",\"name\":\"RECYCLED PAPER SYMBOL\",\"char\":\"♼\"},{\"hex\":\"&#267D;\",\"name\":\"PARTIALLY-RECYCLED PAPER SYMBOL\",\"char\":\"♽\"},{\"hex\":\"&#267E;\",\"name\":\"PERMANENT PAPER SIGN\",\"char\":\"♾\"},{\"hex\":\"&#267F;\",\"name\":\"WHEELCHAIR SYMBOL\",\"char\":\"♿\"},{\"hex\":\"&#2680;\",\"name\":\"DIE FACE-1\",\"char\":\"⚀\"},{\"hex\":\"&#2681;\",\"name\":\"DIE FACE-2\",\"char\":\"⚁\"},{\"hex\":\"&#2682;\",\"name\":\"DIE FACE-3\",\"char\":\"⚂\"},{\"hex\":\"&#2683;\",\"name\":\"DIE FACE-4\",\"char\":\"⚃\"},{\"hex\":\"&#2684;\",\"name\":\"DIE FACE-5\",\"char\":\"⚄\"},{\"hex\":\"&#2685;\",\"name\":\"DIE FACE-6\",\"char\":\"⚅\"},{\"hex\":\"&#2686;\",\"name\":\"WHITE CIRCLE WITH DOT RIGHT\",\"char\":\"⚆\"},{\"hex\":\"&#2687;\",\"name\":\"WHITE CIRCLE WITH TWO DOTS\",\"char\":\"⚇\"},{\"hex\":\"&#2688;\",\"name\":\"BLACK CIRCLE WITH WHITE DOT RIGHT\",\"char\":\"⚈\"},{\"hex\":\"&#2689;\",\"name\":\"BLACK CIRCLE WITH TWO WHITE DOTS\",\"char\":\"⚉\"},{\"hex\":\"&#268A;\",\"name\":\"MONOGRAM FOR YANG\",\"char\":\"⚊\"},{\"hex\":\"&#268B;\",\"name\":\"MONOGRAM FOR YIN\",\"char\":\"⚋\"},{\"hex\":\"&#268C;\",\"name\":\"DIGRAM FOR GREATER YANG\",\"char\":\"⚌\"},{\"hex\":\"&#268D;\",\"name\":\"DIGRAM FOR LESSER YIN\",\"char\":\"⚍\"},{\"hex\":\"&#268E;\",\"name\":\"DIGRAM FOR LESSER YANG\",\"char\":\"⚎\"},{\"hex\":\"&#268F;\",\"name\":\"DIGRAM FOR GREATER YIN\",\"char\":\"⚏\"},{\"hex\":\"&#2690;\",\"name\":\"WHITE FLAG\",\"char\":\"⚐\"},{\"hex\":\"&#2691;\",\"name\":\"BLACK FLAG\",\"char\":\"⚑\"},{\"hex\":\"&#2692;\",\"name\":\"HAMMER AND PICK\",\"char\":\"⚒\"},{\"hex\":\"&#2693;\",\"name\":\"ANCHOR\",\"char\":\"⚓\"},{\"hex\":\"&#2694;\",\"name\":\"CROSSED SWORDS\",\"char\":\"⚔\"},{\"hex\":\"&#2695;\",\"name\":\"STAFF OF AESCULAPIUS\",\"char\":\"⚕\"},{\"hex\":\"&#2696;\",\"name\":\"SCALES\",\"char\":\"⚖\"},{\"hex\":\"&#2697;\",\"name\":\"ALEMBIC\",\"char\":\"⚗\"},{\"hex\":\"&#2698;\",\"name\":\"FLOWER\",\"char\":\"⚘\"},{\"hex\":\"&#2699;\",\"name\":\"GEAR\",\"char\":\"⚙\"},{\"hex\":\"&#269A;\",\"name\":\"STAFF OF HERMES\",\"char\":\"⚚\"},{\"hex\":\"&#269B;\",\"name\":\"ATOM SYMBOL\",\"char\":\"⚛\"},{\"hex\":\"&#269C;\",\"name\":\"FLEUR-DE-LIS\",\"char\":\"⚜\"},{\"hex\":\"&#26A0;\",\"name\":\"WARNING SIGN\",\"char\":\"⚠\"},{\"hex\":\"&#26A1;\",\"name\":\"HIGH VOLTAGE SIGN\",\"char\":\"⚡\"},{\"hex\":\"&#26A2;\",\"name\":\"DOUBLED FEMALE SIGN\",\"char\":\"⚢\"},{\"hex\":\"&#26A3;\",\"name\":\"DOUBLED MALE SIGN\",\"char\":\"⚣\"},{\"hex\":\"&#26A4;\",\"name\":\"INTERLOCKED FEMALE AND MALE SIGN\",\"char\":\"⚤\"},{\"hex\":\"&#26A5;\",\"name\":\"MALE AND FEMALE SIGN\",\"char\":\"⚥\"},{\"hex\":\"&#26A6;\",\"name\":\"MALE WITH STROKE SIGN\",\"char\":\"⚦\"},{\"hex\":\"&#26A7;\",\"name\":\"MALE WITH STROKE AND MALE AND FEMALE SIGN\",\"char\":\"⚧\"},{\"hex\":\"&#26A8;\",\"name\":\"VERTICAL MALE WITH STROKE SIGN\",\"char\":\"⚨\"},{\"hex\":\"&#26A9;\",\"name\":\"HORIZONTAL MALE WITH STROKE SIGN\",\"char\":\"⚩\"},{\"hex\":\"&#26AA;\",\"name\":\"MEDIUM WHITE CIRCLE\",\"char\":\"⚪\"},{\"hex\":\"&#26AB;\",\"name\":\"MEDIUM BLACK CIRCLE\",\"char\":\"⚫\"},{\"hex\":\"&#26AC;\",\"name\":\"MEDIUM SMALL WHITE CIRCLE\",\"char\":\"⚬\"},{\"hex\":\"&#26AD;\",\"name\":\"MARRIAGE SYMBOL\",\"char\":\"⚭\"},{\"hex\":\"&#26AE;\",\"name\":\"DIVORCE SYMBOL\",\"char\":\"⚮\"},{\"hex\":\"&#26AF;\",\"name\":\"UNMARRIED PARTNERSHIP SYMBOL\",\"char\":\"⚯\"},{\"hex\":\"&#26B0;\",\"name\":\"COFFIN\",\"char\":\"⚰\"},{\"hex\":\"&#26B1;\",\"name\":\"FUNERAL URN\",\"char\":\"⚱\"},{\"hex\":\"&#26B2;\",\"name\":\"NEUTER\",\"char\":\"⚲\"},{\"entity\":\"&#9907;\",\"hex\":\"&#26B3;\",\"name\":\"CERES\",\"char\":\"⚳\"},{\"hex\":\"&#26B4;\",\"name\":\"PALLAS\",\"char\":\"⚴\"},{\"hex\":\"&#26B5;\",\"name\":\"JUNO\",\"char\":\"⚵\"},{\"hex\":\"&#26B6;\",\"name\":\"VESTA\",\"char\":\"⚶\"},{\"hex\":\"&#26B7;\",\"name\":\"CHIRON\",\"char\":\"⚷\"},{\"hex\":\"&#26B8;\",\"name\":\"BLACK MOON LILITH\",\"char\":\"⚸\"},{\"hex\":\"&#2701;\",\"name\":\"UPPER BLADE SCISSORS\",\"char\":\"✁\"},{\"hex\":\"&#2702;\",\"name\":\"BLACK SCISSORS\",\"char\":\"✂\"},{\"hex\":\"&#2703;\",\"name\":\"LOWER BLADE SCISSORS\",\"char\":\"✃\"},{\"hex\":\"&#2704;\",\"name\":\"WHITE SCISSORS\",\"char\":\"✄\"},{\"hex\":\"&#2706;\",\"name\":\"TELEPHONE LOCATION SIGN\",\"char\":\"✆\"},{\"hex\":\"&#2707;\",\"name\":\"TAPE DRIVE\",\"char\":\"✇\"},{\"hex\":\"&#2708;\",\"name\":\"AIRPLANE\",\"char\":\"✈\"},{\"hex\":\"&#2709;\",\"name\":\"ENVELOPE\",\"char\":\"✉\"},{\"hex\":\"&#270C;\",\"name\":\"VICTORY HAND\",\"char\":\"✌\"},{\"hex\":\"&#270D;\",\"name\":\"WRITING HAND\",\"char\":\"✍\"},{\"hex\":\"&#270E;\",\"name\":\"LOWER RIGHT PENCIL\",\"char\":\"✎\"},{\"hex\":\"&#270F;\",\"name\":\"PENCIL\",\"char\":\"✏\"},{\"hex\":\"&#2710;\",\"name\":\"UPPER RIGHT PENCIL\",\"char\":\"✐\"},{\"hex\":\"&#2711;\",\"name\":\"WHITE NIB\",\"char\":\"✑\"},{\"hex\":\"&#2712;\",\"name\":\"BLACK NIB\",\"char\":\"✒\"},{\"hex\":\"&#2713;\",\"name\":\"CHECK MARK\",\"char\":\"✓\"},{\"hex\":\"&#2714;\",\"name\":\"HEAVY CHECK MARK\",\"char\":\"✔\"},{\"hex\":\"&#2715;\",\"name\":\"MULTIPLICATION X\",\"char\":\"✕\"},{\"hex\":\"&#2716;\",\"name\":\"HEAVY MULTIPLICATION X\",\"char\":\"✖\"},{\"hex\":\"&#2717;\",\"name\":\"BALLOT X\",\"char\":\"✗\"},{\"hex\":\"&#2718;\",\"name\":\"HEAVY BALLOT X\",\"char\":\"✘\"},{\"hex\":\"&#2719;\",\"name\":\"OUTLINED GREEK CROSS\",\"char\":\"✙\"},{\"hex\":\"&#271A;\",\"name\":\"HEAVY GREEK CROSS\",\"char\":\"✚\"},{\"hex\":\"&#271B;\",\"name\":\"OPEN CENTRE CROSS\",\"char\":\"✛\"},{\"hex\":\"&#271C;\",\"name\":\"HEAVY OPEN CENTRE CROSS\",\"char\":\"✜\"},{\"hex\":\"&#271D;\",\"name\":\"LATIN CROSS\",\"char\":\"✝\"},{\"hex\":\"&#271E;\",\"name\":\"SHADOWED WHITE LATIN CROSS\",\"char\":\"✞\"},{\"hex\":\"&#271F;\",\"name\":\"OUTLINED LATIN CROSS\",\"char\":\"✟\"},{\"hex\":\"&#2720;\",\"name\":\"MALTESE CROSS\",\"char\":\"✠\"},{\"hex\":\"&#2721;\",\"name\":\"STAR OF DAVID\",\"char\":\"✡\"},{\"hex\":\"&#2722;\",\"name\":\"FOUR TEARDROP-SPOKED ASTERISK\",\"char\":\"✢\"},{\"hex\":\"&#2723;\",\"name\":\"FOUR BALLOON-SPOKED ASTERISK\",\"char\":\"✣\"},{\"hex\":\"&#2724;\",\"name\":\"HEAVY FOUR BALLOON-SPOKED ASTERISK\",\"char\":\"✤\"},{\"hex\":\"&#2725;\",\"name\":\"FOUR CLUB-SPOKED ASTERISK\",\"char\":\"✥\"},{\"hex\":\"&#2726;\",\"name\":\"BLACK FOUR POINTED STAR\",\"char\":\"✦\"},{\"hex\":\"&#2727;\",\"name\":\"WHITE FOUR POINTED STAR\",\"char\":\"✧\"},{\"hex\":\"&#2729;\",\"name\":\"STRESS OUTLINED WHITE STAR\",\"char\":\"✩\"},{\"hex\":\"&#272A;\",\"name\":\"CIRCLED WHITE STAR\",\"char\":\"✪\"},{\"hex\":\"&#272B;\",\"name\":\"OPEN CENTRE BLACK STAR\",\"char\":\"✫\"},{\"hex\":\"&#272C;\",\"name\":\"BLACK CENTRE WHITE STAR\",\"char\":\"✬\"},{\"hex\":\"&#272D;\",\"name\":\"OUTLINED BLACK STAR\",\"char\":\"✭\"},{\"hex\":\"&#272E;\",\"name\":\"HEAVY OUTLINED BLACK STAR\",\"char\":\"✮\"},{\"hex\":\"&#272F;\",\"name\":\"PINWHEEL STAR\",\"char\":\"✯\"},{\"hex\":\"&#2730;\",\"name\":\"SHADOWED WHITE STAR\",\"char\":\"✰\"},{\"hex\":\"&#2731;\",\"name\":\"HEAVY ASTERISK\",\"char\":\"✱\"},{\"hex\":\"&#2732;\",\"name\":\"OPEN CENTRE ASTERISK\",\"char\":\"✲\"},{\"hex\":\"&#2733;\",\"name\":\"EIGHT SPOKED ASTERISK\",\"char\":\"✳\"},{\"hex\":\"&#2734;\",\"name\":\"EIGHT POINTED BLACK STAR\",\"char\":\"✴\"},{\"hex\":\"&#2735;\",\"name\":\"EIGHT POINTED PINWHEEL STAR\",\"char\":\"✵\"},{\"hex\":\"&#2736;\",\"name\":\"SIX POINTED BLACK STAR\",\"char\":\"✶\"},{\"hex\":\"&#2737;\",\"name\":\"EIGHT POINTED RECTILINEAR BLACK STAR\",\"char\":\"✷\"},{\"hex\":\"&#2738;\",\"name\":\"HEAVY EIGHT POINTED RECTILINEAR BLACK STAR\",\"char\":\"✸\"},{\"hex\":\"&#2739;\",\"name\":\"TWELVE POINTED BLACK STAR\",\"char\":\"✹\"},{\"hex\":\"&#273A;\",\"name\":\"SIXTEEN POINTED ASTERISK\",\"char\":\"✺\"},{\"hex\":\"&#273B;\",\"name\":\"TEARDROP-SPOKED ASTERISK\",\"char\":\"✻\"},{\"hex\":\"&#273C;\",\"name\":\"OPEN CENTRE TEARDROP-SPOKED ASTERISK\",\"char\":\"✼\"},{\"hex\":\"&#273D;\",\"name\":\"HEAVY TEARDROP-SPOKED ASTERISK\",\"char\":\"✽\"},{\"hex\":\"&#273E;\",\"name\":\"SIX PETALLED BLACK AND WHITE FLORETTE\",\"char\":\"✾\"},{\"hex\":\"&#273F;\",\"name\":\"BLACK FLORETTE\",\"char\":\"✿\"},{\"hex\":\"&#2740;\",\"name\":\"WHITE FLORETTE\",\"char\":\"❀\"},{\"hex\":\"&#2741;\",\"name\":\"EIGHT PETALLED OUTLINED BLACK FLORETTE\",\"char\":\"❁\"},{\"hex\":\"&#2742;\",\"name\":\"CIRCLED OPEN CENTRE EIGHT POINTED STAR\",\"char\":\"❂\"},{\"hex\":\"&#2743;\",\"name\":\"HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK\",\"char\":\"❃\"},{\"hex\":\"&#2744;\",\"name\":\"SNOWFLAKE\",\"char\":\"❄\"},{\"hex\":\"&#2745;\",\"name\":\"TIGHT TRIFOLIATE SNOWFLAKE\",\"char\":\"❅\"},{\"hex\":\"&#2746;\",\"name\":\"HEAVY CHEVRON SNOWFLAKE\",\"char\":\"❆\"},{\"hex\":\"&#2747;\",\"name\":\"SPARKLE\",\"char\":\"❇\"},{\"hex\":\"&#2748;\",\"name\":\"HEAVY SPARKLE\",\"char\":\"❈\"},{\"hex\":\"&#2749;\",\"name\":\"BALLOON-SPOKED ASTERISK\",\"char\":\"❉\"},{\"hex\":\"&#274A;\",\"name\":\"EIGHT TEARDROP-SPOKED PROPELLER ASTERISK\",\"char\":\"❊\"},{\"hex\":\"&#274B;\",\"name\":\"HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK\",\"char\":\"❋\"},{\"hex\":\"&#274D;\",\"name\":\"SHADOWED WHITE CIRCLE\",\"char\":\"❍\"},{\"hex\":\"&#274F;\",\"name\":\"LOWER RIGHT DROP-SHADOWED WHITE SQUARE\",\"char\":\"❏\"},{\"hex\":\"&#2750;\",\"name\":\"UPPER RIGHT DROP-SHADOWED WHITE SQUARE\",\"char\":\"❐\"},{\"hex\":\"&#2751;\",\"name\":\"LOWER RIGHT SHADOWED WHITE SQUARE\",\"char\":\"❑\"},{\"hex\":\"&#2752;\",\"name\":\"UPPER RIGHT SHADOWED WHITE SQUARE\",\"char\":\"❒\"},{\"hex\":\"&#2756;\",\"name\":\"BLACK DIAMOND MINUS WHITE X\",\"char\":\"❖\"},{\"hex\":\"&#2758;\",\"name\":\"LIGHT VERTICAL BAR\",\"char\":\"❘\"},{\"hex\":\"&#2759;\",\"name\":\"MEDIUM VERTICAL BAR\",\"char\":\"❙\"},{\"hex\":\"&#275A;\",\"name\":\"HEAVY VERTICAL BAR\",\"char\":\"❚\"},{\"hex\":\"&#275B;\",\"name\":\"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❛\"},{\"hex\":\"&#275C;\",\"name\":\"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❜\"},{\"hex\":\"&#275D;\",\"name\":\"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❝\"},{\"hex\":\"&#275E;\",\"name\":\"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❞\"},{\"hex\":\"&#2761;\",\"name\":\"CURVED STEM PARAGRAPH SIGN ORNAMENT\",\"char\":\"❡\"},{\"hex\":\"&#2762;\",\"name\":\"HEAVY EXCLAMATION MARK ORNAMENT\",\"char\":\"❢\"},{\"hex\":\"&#2763;\",\"name\":\"HEAVY HEART EXCLAMATION MARK ORNAMENT\",\"char\":\"❣\"},{\"hex\":\"&#2764;\",\"name\":\"HEAVY BLACK HEART\",\"char\":\"❤\"},{\"hex\":\"&#2765;\",\"name\":\"ROTATED HEAVY BLACK HEART BULLET\",\"char\":\"❥\"},{\"hex\":\"&#2766;\",\"name\":\"FLORAL HEART\",\"char\":\"❦\"},{\"hex\":\"&#2767;\",\"name\":\"ROTATED FLORAL HEART BULLET\",\"char\":\"❧\"},{\"hex\":\"&#2768;\",\"name\":\"MEDIUM LEFT PARENTHESIS ORNAMENT\",\"char\":\"❨\"},{\"hex\":\"&#2769;\",\"name\":\"MEDIUM RIGHT PARENTHESIS ORNAMENT\",\"char\":\"❩\"},{\"hex\":\"&#276A;\",\"name\":\"MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT\",\"char\":\"❪\"},{\"hex\":\"&#276B;\",\"name\":\"MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT\",\"char\":\"❫\"},{\"hex\":\"&#276C;\",\"name\":\"MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❬\"},{\"hex\":\"&#276D;\",\"name\":\"MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❭\"},{\"hex\":\"&#276E;\",\"name\":\"HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT\",\"char\":\"❮\"},{\"hex\":\"&#276F;\",\"name\":\"HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT\",\"char\":\"❯\"},{\"hex\":\"&#2770;\",\"name\":\"HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❰\"},{\"hex\":\"&#2771;\",\"name\":\"HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❱\"},{\"hex\":\"&#2772;\",\"name\":\"LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT\",\"char\":\"❲\"},{\"hex\":\"&#2773;\",\"name\":\"LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT\",\"char\":\"❳\"},{\"hex\":\"&#2774;\",\"name\":\"MEDIUM LEFT CURLY BRACKET ORNAMENT\",\"char\":\"❴\"},{\"hex\":\"&#2775;\",\"name\":\"MEDIUM RIGHT CURLY BRACKET ORNAMENT\",\"char\":\"❵\"},{\"hex\":\"&#2776;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT ONE\",\"char\":\"❶\"},{\"hex\":\"&#2777;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT TWO\",\"char\":\"❷\"},{\"hex\":\"&#2778;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT THREE\",\"char\":\"❸\"},{\"hex\":\"&#2779;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT FOUR\",\"char\":\"❹\"},{\"hex\":\"&#277A;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT FIVE\",\"char\":\"❺\"},{\"hex\":\"&#277B;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT SIX\",\"char\":\"❻\"},{\"hex\":\"&#277C;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT SEVEN\",\"char\":\"❼\"},{\"hex\":\"&#277D;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT EIGHT\",\"char\":\"❽\"},{\"hex\":\"&#277E;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT NINE\",\"char\":\"❾\"},{\"hex\":\"&#277F;\",\"name\":\"DINGBAT NEGATIVE CIRCLED NUMBER TEN\",\"char\":\"❿\"},{\"hex\":\"&#2780;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT ONE\",\"char\":\"➀\"},{\"hex\":\"&#2781;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT TWO\",\"char\":\"➁\"},{\"hex\":\"&#2782;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT THREE\",\"char\":\"➂\"},{\"hex\":\"&#2783;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT FOUR\",\"char\":\"➃\"},{\"hex\":\"&#2784;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT FIVE\",\"char\":\"➄\"},{\"hex\":\"&#2785;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT SIX\",\"char\":\"➅\"},{\"hex\":\"&#2786;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN\",\"char\":\"➆\"},{\"hex\":\"&#2787;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT\",\"char\":\"➇\"},{\"hex\":\"&#2788;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT NINE\",\"char\":\"➈\"},{\"hex\":\"&#2789;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF NUMBER TEN\",\"char\":\"➉\"},{\"hex\":\"&#278A;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE\",\"char\":\"➊\"},{\"hex\":\"&#278B;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO\",\"char\":\"➋\"},{\"hex\":\"&#278C;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE\",\"char\":\"➌\"},{\"hex\":\"&#278D;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR\",\"char\":\"➍\"},{\"hex\":\"&#278E;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE\",\"char\":\"➎\"},{\"hex\":\"&#278F;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX\",\"char\":\"➏\"},{\"hex\":\"&#2790;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN\",\"char\":\"➐\"},{\"hex\":\"&#2791;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT\",\"char\":\"➑\"},{\"hex\":\"&#2792;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE\",\"char\":\"➒\"},{\"hex\":\"&#2793;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN\",\"char\":\"➓\"}],\"Math\":[{\"hex\":\"&#2200;\",\"entity\":\"&forall;\",\"name\":\"FOR ALL\",\"char\":\"∀\"},{\"hex\":\"&#2201;\",\"name\":\"COMPLEMENT\",\"char\":\"∁\"},{\"hex\":\"&#2202;\",\"entity\":\"&part;\",\"name\":\"PARTIAL DIFFERENTIAL\",\"char\":\"∂\"},{\"hex\":\"&#2203;\",\"entity\":\"&exist;\",\"name\":\"THERE EXISTS\",\"char\":\"∃\"},{\"hex\":\"&#2204;\",\"name\":\"THERE DOES NOT EXIST\",\"char\":\"∄\"},{\"hex\":\"&#2205;\",\"entity\":\"&empty;\",\"name\":\"EMPTY SET\",\"char\":\"∅\"},{\"hex\":\"&#2206;\",\"name\":\"INCREMENT\",\"char\":\"∆\"},{\"hex\":\"&#2207;\",\"entity\":\"&nabla;\",\"name\":\"NABLA\",\"char\":\"∇\"},{\"hex\":\"&#2208;\",\"entity\":\"&isin;\",\"name\":\"ELEMENT OF\",\"char\":\"∈\"},{\"hex\":\"&#2209;\",\"entity\":\"&notin;\",\"name\":\"NOT AN ELEMENT OF\",\"char\":\"∉\"},{\"hex\":\"&#220A;\",\"name\":\"SMALL ELEMENT OF\",\"char\":\"∊\"},{\"hex\":\"&#220B;\",\"entity\":\"&ni;\",\"name\":\"CONTAINS AS MEMBER\",\"char\":\"∋\"},{\"hex\":\"&#220C;\",\"name\":\"DOES NOT CONTAIN AS MEMBER\",\"char\":\"∌\"},{\"hex\":\"&#220D;\",\"name\":\"SMALL CONTAINS AS MEMBER\",\"char\":\"∍\"},{\"hex\":\"&#220E;\",\"name\":\"END OF PROOF\",\"char\":\"∎\"},{\"hex\":\"&#220F;\",\"entity\":\"&prod;\",\"name\":\"N-ARY PRODUCT\",\"char\":\"∏\"},{\"hex\":\"&#2210;\",\"name\":\"N-ARY COPRODUCT\",\"char\":\"∐\"},{\"hex\":\"&#2211;\",\"entity\":\"&sum;\",\"name\":\"N-ARY SUMMATION\",\"char\":\"∑\"},{\"hex\":\"&#2212;\",\"entity\":\"&minus;\",\"name\":\"MINUS SIGN\",\"char\":\"−\"},{\"hex\":\"&#2213;\",\"name\":\"MINUS-OR-PLUS SIGN\",\"char\":\"∓\"},{\"hex\":\"&#2214;\",\"name\":\"DOT PLUS\",\"char\":\"∔\"},{\"hex\":\"&#2215;\",\"name\":\"DIVISION SLASH\",\"char\":\"∕\"},{\"hex\":\"&#2216;\",\"name\":\"SET MINUS\",\"char\":\"∖\"},{\"hex\":\"&#2217;\",\"entity\":\"&lowast;\",\"name\":\"ASTERISK OPERATOR\",\"char\":\"∗\"},{\"hex\":\"&#2218;\",\"name\":\"RING OPERATOR\",\"char\":\"∘\"},{\"hex\":\"&#2219;\",\"name\":\"BULLET OPERATOR\",\"char\":\"∙\"},{\"hex\":\"&#221A;\",\"entity\":\"&radic;\",\"name\":\"SQUARE ROOT\",\"char\":\"√\"},{\"hex\":\"&#221B;\",\"name\":\"CUBE ROOT\",\"char\":\"∛\"},{\"hex\":\"&#221C;\",\"name\":\"FOURTH ROOT\",\"char\":\"∜\"},{\"hex\":\"&#221D;\",\"entity\":\"&prop;\",\"name\":\"PROPORTIONAL TO\",\"char\":\"∝\"},{\"hex\":\"&#221E;\",\"entity\":\"&infin;\",\"name\":\"INFINITY\",\"char\":\"∞\"},{\"hex\":\"&#221F;\",\"name\":\"RIGHT ANGLE\",\"char\":\"∟\"},{\"hex\":\"&#2220;\",\"entity\":\"&ang;\",\"name\":\"ANGLE\",\"char\":\"∠\"},{\"hex\":\"&#2221;\",\"name\":\"MEASURED ANGLE\",\"char\":\"∡\"},{\"hex\":\"&#2222;\",\"name\":\"SPHERICAL ANGLE\",\"char\":\"∢\"},{\"hex\":\"&#2223;\",\"name\":\"DIVIDES\",\"char\":\"∣\"},{\"hex\":\"&#2224;\",\"name\":\"DOES NOT DIVIDE\",\"char\":\"∤\"},{\"hex\":\"&#2225;\",\"name\":\"PARALLEL TO\",\"char\":\"∥\"},{\"hex\":\"&#2226;\",\"name\":\"NOT PARALLEL TO\",\"char\":\"∦\"},{\"hex\":\"&#2227;\",\"entity\":\"&and;\",\"name\":\"LOGICAL AND\",\"char\":\"∧\"},{\"hex\":\"&#2228;\",\"entity\":\"&or;\",\"name\":\"LOGICAL OR\",\"char\":\"∨\"},{\"hex\":\"&#2229;\",\"entity\":\"&cap;\",\"name\":\"INTERSECTION\",\"char\":\"∩\"},{\"hex\":\"&#222A;\",\"entity\":\"&cup;\",\"name\":\"UNION\",\"char\":\"∪\"},{\"hex\":\"&#222B;\",\"entity\":\"&int;\",\"name\":\"INTEGRAL\",\"char\":\"∫\"},{\"hex\":\"&#222C;\",\"name\":\"DOUBLE INTEGRAL\",\"char\":\"∬\"},{\"hex\":\"&#222D;\",\"name\":\"TRIPLE INTEGRAL\",\"char\":\"∭\"},{\"hex\":\"&#222E;\",\"name\":\"CONTOUR INTEGRAL\",\"char\":\"∮\"},{\"hex\":\"&#222F;\",\"name\":\"SURFACE INTEGRAL\",\"char\":\"∯\"},{\"hex\":\"&#2230;\",\"name\":\"VOLUME INTEGRAL\",\"char\":\"∰\"},{\"hex\":\"&#2231;\",\"name\":\"CLOCKWISE INTEGRAL\",\"char\":\"∱\"},{\"hex\":\"&#2232;\",\"name\":\"CLOCKWISE CONTOUR INTEGRAL\",\"char\":\"∲\"},{\"hex\":\"&#2233;\",\"name\":\"ANTICLOCKWISE CONTOUR INTEGRAL\",\"char\":\"∳\"},{\"hex\":\"&#2234;\",\"entity\":\"&there4;\",\"name\":\"THEREFORE\",\"char\":\"∴\"},{\"hex\":\"&#2235;\",\"name\":\"BECAUSE\",\"char\":\"∵\"},{\"hex\":\"&#2236;\",\"name\":\"RATIO\",\"char\":\"∶\"},{\"hex\":\"&#2237;\",\"name\":\"PROPORTION\",\"char\":\"∷\"},{\"hex\":\"&#2238;\",\"name\":\"DOT MINUS\",\"char\":\"∸\"},{\"hex\":\"&#2239;\",\"name\":\"EXCESS\",\"char\":\"∹\"},{\"hex\":\"&#223A;\",\"name\":\"GEOMETRIC PROPORTION\",\"char\":\"∺\"},{\"hex\":\"&#223B;\",\"name\":\"HOMOTHETIC\",\"char\":\"∻\"},{\"hex\":\"&#223C;\",\"entity\":\"&sim;\",\"name\":\"TILDE OPERATOR\",\"char\":\"∼\"},{\"hex\":\"&#223D;\",\"name\":\"REVERSED TILDE\",\"char\":\"∽\"},{\"hex\":\"&#223E;\",\"name\":\"INVERTED LAZY S\",\"char\":\"∾\"},{\"hex\":\"&#223F;\",\"name\":\"SINE WAVE\",\"char\":\"∿\"},{\"hex\":\"&#2240;\",\"name\":\"WREATH PRODUCT\",\"char\":\"≀\"},{\"hex\":\"&#2241;\",\"name\":\"NOT TILDE\",\"char\":\"≁\"},{\"hex\":\"&#2242;\",\"name\":\"MINUS TILDE\",\"char\":\"≂\"},{\"hex\":\"&#2243;\",\"name\":\"ASYMPTOTICALLY EQUAL TO\",\"char\":\"≃\"},{\"hex\":\"&#2244;\",\"name\":\"NOT ASYMPTOTICALLY EQUAL TO\",\"char\":\"≄\"},{\"hex\":\"&#2245;\",\"entity\":\"&cong;\",\"name\":\"APPROXIMATELY EQUAL TO\",\"char\":\"≅\"},{\"hex\":\"&#2246;\",\"name\":\"APPROXIMATELY BUT NOT ACTUALLY EQUAL TO\",\"char\":\"≆\"},{\"hex\":\"&#2247;\",\"name\":\"NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO\",\"char\":\"≇\"},{\"hex\":\"&#2248;\",\"entity\":\"&asymp;\",\"name\":\"ALMOST EQUAL TO\",\"char\":\"≈\"},{\"hex\":\"&#2249;\",\"name\":\"NOT ALMOST EQUAL TO\",\"char\":\"≉\"},{\"hex\":\"&#224A;\",\"name\":\"ALMOST EQUAL OR EQUAL TO\",\"char\":\"≊\"},{\"hex\":\"&#224B;\",\"name\":\"TRIPLE TILDE\",\"char\":\"≋\"},{\"hex\":\"&#224C;\",\"name\":\"ALL EQUAL TO\",\"char\":\"≌\"},{\"hex\":\"&#224D;\",\"name\":\"EQUIVALENT TO\",\"char\":\"≍\"},{\"hex\":\"&#224E;\",\"name\":\"GEOMETRICALLY EQUIVALENT TO\",\"char\":\"≎\"},{\"hex\":\"&#224F;\",\"name\":\"DIFFERENCE BETWEEN\",\"char\":\"≏\"},{\"hex\":\"&#2250;\",\"name\":\"APPROACHES THE LIMIT\",\"char\":\"≐\"},{\"hex\":\"&#2251;\",\"name\":\"GEOMETRICALLY EQUAL TO\",\"char\":\"≑\"},{\"hex\":\"&#2252;\",\"name\":\"APPROXIMATELY EQUAL TO OR THE IMAGE OF\",\"char\":\"≒\"},{\"hex\":\"&#2253;\",\"name\":\"IMAGE OF OR APPROXIMATELY EQUAL TO\",\"char\":\"≓\"},{\"hex\":\"&#2254;\",\"name\":\"COLON EQUALS\",\"char\":\"≔\"},{\"hex\":\"&#2255;\",\"name\":\"EQUALS COLON\",\"char\":\"≕\"},{\"hex\":\"&#2256;\",\"name\":\"RING IN EQUAL TO\",\"char\":\"≖\"},{\"hex\":\"&#2257;\",\"name\":\"RING EQUAL TO\",\"char\":\"≗\"},{\"hex\":\"&#2258;\",\"name\":\"CORRESPONDS TO\",\"char\":\"≘\"},{\"hex\":\"&#2259;\",\"name\":\"ESTIMATES\",\"char\":\"≙\"},{\"hex\":\"&#225A;\",\"name\":\"EQUIANGULAR TO\",\"char\":\"≚\"},{\"hex\":\"&#225B;\",\"name\":\"STAR EQUALS\",\"char\":\"≛\"},{\"hex\":\"&#225C;\",\"name\":\"DELTA EQUAL TO\",\"char\":\"≜\"},{\"hex\":\"&#225D;\",\"name\":\"EQUAL TO BY DEFINITION\",\"char\":\"≝\"},{\"hex\":\"&#225E;\",\"name\":\"MEASURED BY\",\"char\":\"≞\"},{\"hex\":\"&#225F;\",\"name\":\"QUESTIONED EQUAL TO\",\"char\":\"≟\"},{\"hex\":\"&#2260;\",\"entity\":\"&ne;\",\"name\":\"NOT EQUAL TO\",\"char\":\"≠\"},{\"hex\":\"&#2261;\",\"entity\":\"&equiv;\",\"name\":\"IDENTICAL TO\",\"char\":\"≡\"},{\"hex\":\"&#2262;\",\"name\":\"NOT IDENTICAL TO\",\"char\":\"≢\"},{\"hex\":\"&#2263;\",\"name\":\"STRICTLY EQUIVALENT TO\",\"char\":\"≣\"},{\"hex\":\"&#2264;\",\"entity\":\"&le;\",\"name\":\"LESS-THAN OR EQUAL TO\",\"char\":\"≤\"},{\"hex\":\"&#2265;\",\"entity\":\"&ge;\",\"name\":\"GREATER-THAN OR EQUAL TO\",\"char\":\"≥\"},{\"hex\":\"&#2266;\",\"name\":\"LESS-THAN OVER EQUAL TO\",\"char\":\"≦\"},{\"hex\":\"&#2267;\",\"name\":\"GREATER-THAN OVER EQUAL TO\",\"char\":\"≧\"},{\"hex\":\"&#2268;\",\"name\":\"LESS-THAN BUT NOT EQUAL TO\",\"char\":\"≨\"},{\"hex\":\"&#2269;\",\"name\":\"GREATER-THAN BUT NOT EQUAL TO\",\"char\":\"≩\"},{\"hex\":\"&#226A;\",\"name\":\"MUCH LESS-THAN\",\"char\":\"≪\"},{\"hex\":\"&#226B;\",\"name\":\"MUCH GREATER-THAN\",\"char\":\"≫\"},{\"hex\":\"&#226C;\",\"name\":\"BETWEEN\",\"char\":\"≬\"},{\"hex\":\"&#226D;\",\"name\":\"NOT EQUIVALENT TO\",\"char\":\"≭\"},{\"hex\":\"&#226E;\",\"name\":\"NOT LESS-THAN\",\"char\":\"≮\"},{\"hex\":\"&#226F;\",\"name\":\"NOT GREATER-THAN\",\"char\":\"≯\"},{\"hex\":\"&#2270;\",\"name\":\"NEITHER LESS-THAN NOR EQUAL TO\",\"char\":\"≰\"},{\"hex\":\"&#2271;\",\"name\":\"NEITHER GREATER-THAN NOR EQUAL TO\",\"char\":\"≱\"},{\"hex\":\"&#2272;\",\"name\":\"LESS-THAN OR EQUIVALENT TO\",\"char\":\"≲\"},{\"hex\":\"&#2273;\",\"name\":\"GREATER-THAN OR EQUIVALENT TO\",\"char\":\"≳\"},{\"hex\":\"&#2274;\",\"name\":\"NEITHER LESS-THAN NOR EQUIVALENT TO\",\"char\":\"≴\"},{\"hex\":\"&#2275;\",\"name\":\"NEITHER GREATER-THAN NOR EQUIVALENT TO\",\"char\":\"≵\"},{\"hex\":\"&#2276;\",\"name\":\"LESS-THAN OR GREATER-THAN\",\"char\":\"≶\"},{\"hex\":\"&#2277;\",\"name\":\"GREATER-THAN OR LESS-THAN\",\"char\":\"≷\"},{\"hex\":\"&#2278;\",\"name\":\"NEITHER LESS-THAN NOR GREATER-THAN\",\"char\":\"≸\"},{\"hex\":\"&#2279;\",\"name\":\"NEITHER GREATER-THAN NOR LESS-THAN\",\"char\":\"≹\"},{\"hex\":\"&#227A;\",\"name\":\"PRECEDES\",\"char\":\"≺\"},{\"hex\":\"&#227B;\",\"name\":\"SUCCEEDS\",\"char\":\"≻\"},{\"hex\":\"&#227C;\",\"name\":\"PRECEDES OR EQUAL TO\",\"char\":\"≼\"},{\"hex\":\"&#227D;\",\"name\":\"SUCCEEDS OR EQUAL TO\",\"char\":\"≽\"},{\"hex\":\"&#227E;\",\"name\":\"PRECEDES OR EQUIVALENT TO\",\"char\":\"≾\"},{\"hex\":\"&#227F;\",\"name\":\"SUCCEEDS OR EQUIVALENT TO\",\"char\":\"≿\"},{\"hex\":\"&#2280;\",\"name\":\"DOES NOT PRECEDE\",\"char\":\"⊀\"},{\"hex\":\"&#2281;\",\"name\":\"DOES NOT SUCCEED\",\"char\":\"⊁\"},{\"hex\":\"&#2282;\",\"entity\":\"&sub;\",\"name\":\"SUBSET OF\",\"char\":\"⊂\"},{\"hex\":\"&#2283;\",\"entity\":\"&sup;\",\"name\":\"SUPERSET OF\",\"char\":\"⊃\"},{\"hex\":\"&#2284;\",\"entity\":\"&nsub;\",\"name\":\"NOT A SUBSET OF\",\"char\":\"⊄\"},{\"hex\":\"&#2285;\",\"name\":\"NOT A SUPERSET OF\",\"char\":\"⊅\"},{\"hex\":\"&#2286;\",\"entity\":\"&sube;\",\"name\":\"SUBSET OF OR EQUAL TO\",\"char\":\"⊆\"},{\"hex\":\"&#2287;\",\"entity\":\"&supe;\",\"name\":\"SUPERSET OF OR EQUAL TO\",\"char\":\"⊇\"},{\"hex\":\"&#2288;\",\"name\":\"NEITHER A SUBSET OF NOR EQUAL TO\",\"char\":\"⊈\"},{\"hex\":\"&#2289;\",\"name\":\"NEITHER A SUPERSET OF NOR EQUAL TO\",\"char\":\"⊉\"},{\"hex\":\"&#228A;\",\"name\":\"SUBSET OF WITH NOT EQUAL TO\",\"char\":\"⊊\"},{\"hex\":\"&#228B;\",\"name\":\"SUPERSET OF WITH NOT EQUAL TO\",\"char\":\"⊋\"},{\"hex\":\"&#228C;\",\"name\":\"MULTISET\",\"char\":\"⊌\"},{\"hex\":\"&#228D;\",\"name\":\"MULTISET MULTIPLICATION\",\"char\":\"⊍\"},{\"hex\":\"&#228E;\",\"name\":\"MULTISET UNION\",\"char\":\"⊎\"},{\"hex\":\"&#228F;\",\"name\":\"SQUARE IMAGE OF\",\"char\":\"⊏\"},{\"hex\":\"&#2290;\",\"name\":\"SQUARE ORIGINAL OF\",\"char\":\"⊐\"},{\"hex\":\"&#2291;\",\"name\":\"SQUARE IMAGE OF OR EQUAL TO\",\"char\":\"⊑\"},{\"hex\":\"&#2292;\",\"name\":\"SQUARE ORIGINAL OF OR EQUAL TO\",\"char\":\"⊒\"},{\"hex\":\"&#2293;\",\"name\":\"SQUARE CAP\",\"char\":\"⊓\"},{\"hex\":\"&#2294;\",\"name\":\"SQUARE CUP\",\"char\":\"⊔\"},{\"hex\":\"&#2295;\",\"entity\":\"&oplus;\",\"name\":\"CIRCLED PLUS\",\"char\":\"⊕\"},{\"hex\":\"&#2296;\",\"name\":\"CIRCLED MINUS\",\"char\":\"⊖\"},{\"hex\":\"&#2297;\",\"entity\":\"&otimes;\",\"name\":\"CIRCLED TIMES\",\"char\":\"⊗\"},{\"hex\":\"&#2298;\",\"name\":\"CIRCLED DIVISION SLASH\",\"char\":\"⊘\"},{\"hex\":\"&#2299;\",\"name\":\"CIRCLED DOT OPERATOR\",\"char\":\"⊙\"},{\"hex\":\"&#229A;\",\"name\":\"CIRCLED RING OPERATOR\",\"char\":\"⊚\"},{\"hex\":\"&#229B;\",\"name\":\"CIRCLED ASTERISK OPERATOR\",\"char\":\"⊛\"},{\"hex\":\"&#229C;\",\"name\":\"CIRCLED EQUALS\",\"char\":\"⊜\"},{\"hex\":\"&#229D;\",\"name\":\"CIRCLED DASH\",\"char\":\"⊝\"},{\"hex\":\"&#229E;\",\"name\":\"SQUARED PLUS\",\"char\":\"⊞\"},{\"hex\":\"&#229F;\",\"name\":\"SQUARED MINUS\",\"char\":\"⊟\"},{\"hex\":\"&#22A0;\",\"name\":\"SQUARED TIMES\",\"char\":\"⊠\"},{\"hex\":\"&#22A1;\",\"name\":\"SQUARED DOT OPERATOR\",\"char\":\"⊡\"},{\"hex\":\"&#22A2;\",\"name\":\"RIGHT TACK\",\"char\":\"⊢\"},{\"hex\":\"&#22A3;\",\"name\":\"LEFT TACK\",\"char\":\"⊣\"},{\"hex\":\"&#22A4;\",\"name\":\"DOWN TACK\",\"char\":\"⊤\"},{\"hex\":\"&#22A5;\",\"entity\":\"&perp;\",\"name\":\"UP TACK\",\"char\":\"⊥\"},{\"hex\":\"&#22A6;\",\"name\":\"ASSERTION\",\"char\":\"⊦\"},{\"hex\":\"&#22A7;\",\"name\":\"MODELS\",\"char\":\"⊧\"},{\"hex\":\"&#22A8;\",\"name\":\"TRUE\",\"char\":\"⊨\"},{\"hex\":\"&#22A9;\",\"name\":\"FORCES\",\"char\":\"⊩\"},{\"hex\":\"&#22AA;\",\"name\":\"TRIPLE VERTICAL BAR RIGHT TURNSTILE\",\"char\":\"⊪\"},{\"hex\":\"&#22AB;\",\"name\":\"DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE\",\"char\":\"⊫\"},{\"hex\":\"&#22AC;\",\"name\":\"DOES NOT PROVE\",\"char\":\"⊬\"},{\"hex\":\"&#22AD;\",\"name\":\"NOT TRUE\",\"char\":\"⊭\"},{\"hex\":\"&#22AE;\",\"name\":\"DOES NOT FORCE\",\"char\":\"⊮\"},{\"hex\":\"&#22AF;\",\"name\":\"NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE\",\"char\":\"⊯\"},{\"hex\":\"&#22B0;\",\"name\":\"PRECEDES UNDER RELATION\",\"char\":\"⊰\"},{\"hex\":\"&#22B1;\",\"name\":\"SUCCEEDS UNDER RELATION\",\"char\":\"⊱\"},{\"hex\":\"&#22B2;\",\"name\":\"NORMAL SUBGROUP OF\",\"char\":\"⊲\"},{\"hex\":\"&#22B3;\",\"name\":\"CONTAINS AS NORMAL SUBGROUP\",\"char\":\"⊳\"},{\"hex\":\"&#22B4;\",\"name\":\"NORMAL SUBGROUP OF OR EQUAL TO\",\"char\":\"⊴\"},{\"hex\":\"&#22B5;\",\"name\":\"CONTAINS AS NORMAL SUBGROUP OR EQUAL TO\",\"char\":\"⊵\"},{\"hex\":\"&#22B6;\",\"name\":\"ORIGINAL OF\",\"char\":\"⊶\"},{\"hex\":\"&#22B7;\",\"name\":\"IMAGE OF\",\"char\":\"⊷\"},{\"hex\":\"&#22B8;\",\"name\":\"MULTIMAP\",\"char\":\"⊸\"},{\"hex\":\"&#22B9;\",\"name\":\"HERMITIAN CONJUGATE MATRIX\",\"char\":\"⊹\"},{\"hex\":\"&#22BA;\",\"name\":\"INTERCALATE\",\"char\":\"⊺\"},{\"hex\":\"&#22BB;\",\"name\":\"XOR\",\"char\":\"⊻\"},{\"hex\":\"&#22BC;\",\"name\":\"NAND\",\"char\":\"⊼\"},{\"hex\":\"&#22BD;\",\"name\":\"NOR\",\"char\":\"⊽\"},{\"hex\":\"&#22BE;\",\"name\":\"RIGHT ANGLE WITH ARC\",\"char\":\"⊾\"},{\"hex\":\"&#22BF;\",\"name\":\"RIGHT TRIANGLE\",\"char\":\"⊿\"},{\"hex\":\"&#22C0;\",\"name\":\"N-ARY LOGICAL AND\",\"char\":\"⋀\"},{\"hex\":\"&#22C1;\",\"name\":\"N-ARY LOGICAL OR\",\"char\":\"⋁\"},{\"hex\":\"&#22C2;\",\"name\":\"N-ARY INTERSECTION\",\"char\":\"⋂\"},{\"hex\":\"&#22C3;\",\"name\":\"N-ARY UNION\",\"char\":\"⋃\"},{\"hex\":\"&#22C4;\",\"name\":\"DIAMOND OPERATOR\",\"char\":\"⋄\"},{\"hex\":\"&#22C5;\",\"entity\":\"&sdot;\",\"name\":\"DOT OPERATOR\",\"char\":\"⋅\"},{\"hex\":\"&#22C6;\",\"name\":\"STAR OPERATOR\",\"char\":\"⋆\"},{\"hex\":\"&#22C7;\",\"name\":\"DIVISION TIMES\",\"char\":\"⋇\"},{\"hex\":\"&#22C8;\",\"name\":\"BOWTIE\",\"char\":\"⋈\"},{\"hex\":\"&#22C9;\",\"name\":\"LEFT NORMAL FACTOR SEMIDIRECT PRODUCT\",\"char\":\"⋉\"},{\"hex\":\"&#22CA;\",\"name\":\"RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT\",\"char\":\"⋊\"},{\"hex\":\"&#22CB;\",\"name\":\"LEFT SEMIDIRECT PRODUCT\",\"char\":\"⋋\"},{\"hex\":\"&#22CC;\",\"name\":\"RIGHT SEMIDIRECT PRODUCT\",\"char\":\"⋌\"},{\"hex\":\"&#22CD;\",\"name\":\"REVERSED TILDE EQUALS\",\"char\":\"⋍\"},{\"hex\":\"&#22CE;\",\"name\":\"CURLY LOGICAL OR\",\"char\":\"⋎\"},{\"hex\":\"&#22CF;\",\"name\":\"CURLY LOGICAL AND\",\"char\":\"⋏\"},{\"hex\":\"&#22D0;\",\"name\":\"DOUBLE SUBSET\",\"char\":\"⋐\"},{\"hex\":\"&#22D1;\",\"name\":\"DOUBLE SUPERSET\",\"char\":\"⋑\"},{\"hex\":\"&#22D2;\",\"name\":\"DOUBLE INTERSECTION\",\"char\":\"⋒\"},{\"hex\":\"&#22D3;\",\"name\":\"DOUBLE UNION\",\"char\":\"⋓\"},{\"hex\":\"&#22D4;\",\"name\":\"PITCHFORK\",\"char\":\"⋔\"},{\"hex\":\"&#22D5;\",\"name\":\"EQUAL AND PARALLEL TO\",\"char\":\"⋕\"},{\"hex\":\"&#22D6;\",\"name\":\"LESS-THAN WITH DOT\",\"char\":\"⋖\"},{\"hex\":\"&#22D7;\",\"name\":\"GREATER-THAN WITH DOT\",\"char\":\"⋗\"},{\"hex\":\"&#22D8;\",\"name\":\"VERY MUCH LESS-THAN\",\"char\":\"⋘\"},{\"hex\":\"&#22D9;\",\"name\":\"VERY MUCH GREATER-THAN\",\"char\":\"⋙\"},{\"hex\":\"&#22DA;\",\"name\":\"LESS-THAN EQUAL TO OR GREATER-THAN\",\"char\":\"⋚\"},{\"hex\":\"&#22DB;\",\"name\":\"GREATER-THAN EQUAL TO OR LESS-THAN\",\"char\":\"⋛\"},{\"hex\":\"&#22DC;\",\"name\":\"EQUAL TO OR LESS-THAN\",\"char\":\"⋜\"},{\"hex\":\"&#22DD;\",\"name\":\"EQUAL TO OR GREATER-THAN\",\"char\":\"⋝\"},{\"hex\":\"&#22DE;\",\"name\":\"EQUAL TO OR PRECEDES\",\"char\":\"⋞\"},{\"hex\":\"&#22DF;\",\"name\":\"EQUAL TO OR SUCCEEDS\",\"char\":\"⋟\"},{\"hex\":\"&#22E0;\",\"name\":\"DOES NOT PRECEDE OR EQUAL\",\"char\":\"⋠\"},{\"hex\":\"&#22E1;\",\"name\":\"DOES NOT SUCCEED OR EQUAL\",\"char\":\"⋡\"},{\"hex\":\"&#22E2;\",\"name\":\"NOT SQUARE IMAGE OF OR EQUAL TO\",\"char\":\"⋢\"},{\"hex\":\"&#22E3;\",\"name\":\"NOT SQUARE ORIGINAL OF OR EQUAL TO\",\"char\":\"⋣\"},{\"hex\":\"&#22E4;\",\"name\":\"SQUARE IMAGE OF OR NOT EQUAL TO\",\"char\":\"⋤\"},{\"hex\":\"&#22E5;\",\"name\":\"SQUARE ORIGINAL OF OR NOT EQUAL TO\",\"char\":\"⋥\"},{\"hex\":\"&#22E6;\",\"name\":\"LESS-THAN BUT NOT EQUIVALENT TO\",\"char\":\"⋦\"},{\"hex\":\"&#22E7;\",\"name\":\"GREATER-THAN BUT NOT EQUIVALENT TO\",\"char\":\"⋧\"},{\"hex\":\"&#22E8;\",\"name\":\"PRECEDES BUT NOT EQUIVALENT TO\",\"char\":\"⋨\"},{\"hex\":\"&#22E9;\",\"name\":\"SUCCEEDS BUT NOT EQUIVALENT TO\",\"char\":\"⋩\"},{\"hex\":\"&#22EA;\",\"name\":\"NOT NORMAL SUBGROUP OF\",\"char\":\"⋪\"},{\"hex\":\"&#22EB;\",\"name\":\"DOES NOT CONTAIN AS NORMAL SUBGROUP\",\"char\":\"⋫\"},{\"hex\":\"&#22EC;\",\"name\":\"NOT NORMAL SUBGROUP OF OR EQUAL TO\",\"char\":\"⋬\"},{\"hex\":\"&#22ED;\",\"name\":\"DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL\",\"char\":\"⋭\"},{\"hex\":\"&#22EE;\",\"name\":\"VERTICAL ELLIPSIS\",\"char\":\"⋮\"},{\"hex\":\"&#22EF;\",\"name\":\"MIDLINE HORIZONTAL ELLIPSIS\",\"char\":\"⋯\"},{\"hex\":\"&#22F0;\",\"name\":\"UP RIGHT DIAGONAL ELLIPSIS\",\"char\":\"⋰\"},{\"hex\":\"&#22F1;\",\"name\":\"DOWN RIGHT DIAGONAL ELLIPSIS\",\"char\":\"⋱\"},{\"hex\":\"&#22F2;\",\"name\":\"ELEMENT OF WITH LONG HORIZONTAL STROKE\",\"char\":\"⋲\"},{\"hex\":\"&#22F3;\",\"name\":\"ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋳\"},{\"hex\":\"&#22F4;\",\"name\":\"SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋴\"},{\"hex\":\"&#22F5;\",\"name\":\"ELEMENT OF WITH DOT ABOVE\",\"char\":\"⋵\"},{\"hex\":\"&#22F6;\",\"name\":\"ELEMENT OF WITH OVERBAR\",\"char\":\"⋶\"},{\"hex\":\"&#22F7;\",\"name\":\"SMALL ELEMENT OF WITH OVERBAR\",\"char\":\"⋷\"},{\"hex\":\"&#22F8;\",\"name\":\"ELEMENT OF WITH UNDERBAR\",\"char\":\"⋸\"},{\"hex\":\"&#22F9;\",\"name\":\"ELEMENT OF WITH TWO HORIZONTAL STROKES\",\"char\":\"⋹\"},{\"hex\":\"&#22FA;\",\"name\":\"CONTAINS WITH LONG HORIZONTAL STROKE\",\"char\":\"⋺\"},{\"hex\":\"&#22FB;\",\"name\":\"CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋻\"},{\"hex\":\"&#22FC;\",\"name\":\"SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋼\"},{\"hex\":\"&#22FD;\",\"name\":\"CONTAINS WITH OVERBAR\",\"char\":\"⋽\"},{\"hex\":\"&#22FE;\",\"name\":\"SMALL CONTAINS WITH OVERBAR\",\"char\":\"⋾\"},{\"hex\":\"&#22FF;\",\"name\":\"Z NOTATION BAG MEMBERSHIP\",\"char\":\"⋿\"},{\"hex\":\"&#2153;\",\"name\":\"VULGAR FRACTION ONE THIRD\",\"char\":\"⅓\"},{\"hex\":\"&#2154;\",\"name\":\"VULGAR FRACTION TWO THIRDS\",\"char\":\"⅔\"},{\"hex\":\"&#2155;\",\"name\":\"VULGAR FRACTION ONE FIFTH\",\"char\":\"⅕\"},{\"hex\":\"&#2156;\",\"name\":\"VULGAR FRACTION TWO FIFTHS\",\"char\":\"⅖\"},{\"hex\":\"&#2157;\",\"name\":\"VULGAR FRACTION THREE FIFTHS\",\"char\":\"⅗\"},{\"hex\":\"&#2158;\",\"name\":\"VULGAR FRACTION FOUR FIFTHS\",\"char\":\"⅘\"},{\"hex\":\"&#2159;\",\"name\":\"VULGAR FRACTION ONE SIXTH\",\"char\":\"⅙\"},{\"hex\":\"&#215A;\",\"name\":\"VULGAR FRACTION FIVE SIXTHS\",\"char\":\"⅚\"},{\"hex\":\"&#215B;\",\"name\":\"VULGAR FRACTION ONE EIGHTH (present in WGL4)\",\"char\":\"⅛\"},{\"hex\":\"&#215C;\",\"name\":\"VULGAR FRACTION THREE EIGHTHS (present in WGL4)\",\"char\":\"⅜\"},{\"hex\":\"&#215D;\",\"name\":\"VULGAR FRACTION FIVE EIGHTHS (present in WGL4)\",\"char\":\"⅝\"},{\"hex\":\"&#215E;\",\"name\":\"VULGAR FRACTION SEVEN EIGHTHS (present in WGL4)\",\"char\":\"⅞\"},{\"hex\":\"&#215F;\",\"name\":\"FRACTION NUMERATOR ONE\",\"char\":\"⅟\"},{\"hex\":\"&#2160;\",\"name\":\"ROMAN NUMERAL ONE\",\"char\":\"Ⅰ\"},{\"hex\":\"&#2161;\",\"name\":\"ROMAN NUMERAL TWO\",\"char\":\"Ⅱ\"},{\"hex\":\"&#2162;\",\"name\":\"ROMAN NUMERAL THREE\",\"char\":\"Ⅲ\"},{\"hex\":\"&#2163;\",\"name\":\"ROMAN NUMERAL FOUR\",\"char\":\"Ⅳ\"},{\"hex\":\"&#2164;\",\"name\":\"ROMAN NUMERAL FIVE\",\"char\":\"Ⅴ\"},{\"hex\":\"&#2165;\",\"name\":\"ROMAN NUMERAL SIX\",\"char\":\"Ⅵ\"},{\"hex\":\"&#2166;\",\"name\":\"ROMAN NUMERAL SEVEN\",\"char\":\"Ⅶ\"},{\"hex\":\"&#2167;\",\"name\":\"ROMAN NUMERAL EIGHT\",\"char\":\"Ⅷ\"},{\"hex\":\"&#2168;\",\"name\":\"ROMAN NUMERAL NINE\",\"char\":\"Ⅸ\"},{\"hex\":\"&#2169;\",\"name\":\"ROMAN NUMERAL TEN\",\"char\":\"Ⅹ\"},{\"hex\":\"&#216A;\",\"name\":\"ROMAN NUMERAL ELEVEN\",\"char\":\"Ⅺ\"},{\"hex\":\"&#216B;\",\"name\":\"ROMAN NUMERAL TWELVE\",\"char\":\"Ⅻ\"},{\"hex\":\"&#216C;\",\"name\":\"ROMAN NUMERAL FIFTY\",\"char\":\"Ⅼ\"},{\"hex\":\"&#216D;\",\"name\":\"ROMAN NUMERAL ONE HUNDRED\",\"char\":\"Ⅽ\"},{\"hex\":\"&#216E;\",\"name\":\"ROMAN NUMERAL FIVE HUNDRED\",\"char\":\"Ⅾ\"},{\"hex\":\"&#216F;\",\"name\":\"ROMAN NUMERAL ONE THOUSAND\",\"char\":\"Ⅿ\"},{\"hex\":\"&#2170;\",\"name\":\"SMALL ROMAN NUMERAL ONE\",\"char\":\"ⅰ\"},{\"hex\":\"&#2171;\",\"name\":\"SMALL ROMAN NUMERAL TWO\",\"char\":\"ⅱ\"},{\"hex\":\"&#2172;\",\"name\":\"SMALL ROMAN NUMERAL THREE\",\"char\":\"ⅲ\"},{\"hex\":\"&#2173;\",\"name\":\"SMALL ROMAN NUMERAL FOUR\",\"char\":\"ⅳ\"},{\"hex\":\"&#2174;\",\"name\":\"SMALL ROMAN NUMERAL FIVE\",\"char\":\"ⅴ\"},{\"hex\":\"&#2175;\",\"name\":\"SMALL ROMAN NUMERAL SIX\",\"char\":\"ⅵ\"},{\"hex\":\"&#2176;\",\"name\":\"SMALL ROMAN NUMERAL SEVEN\",\"char\":\"ⅶ\"},{\"hex\":\"&#2177;\",\"name\":\"SMALL ROMAN NUMERAL EIGHT\",\"char\":\"ⅷ\"},{\"hex\":\"&#2178;\",\"name\":\"SMALL ROMAN NUMERAL NINE\",\"char\":\"ⅸ\"},{\"hex\":\"&#2179;\",\"name\":\"SMALL ROMAN NUMERAL TEN\",\"char\":\"ⅹ\"},{\"hex\":\"&#217A;\",\"name\":\"SMALL ROMAN NUMERAL ELEVEN\",\"char\":\"ⅺ\"},{\"hex\":\"&#217B;\",\"name\":\"SMALL ROMAN NUMERAL TWELVE\",\"char\":\"ⅻ\"},{\"hex\":\"&#217C;\",\"name\":\"SMALL ROMAN NUMERAL FIFTY\",\"char\":\"ⅼ\"},{\"hex\":\"&#217D;\",\"name\":\"SMALL ROMAN NUMERAL ONE HUNDRED\",\"char\":\"ⅽ\"},{\"hex\":\"&#217E;\",\"name\":\"SMALL ROMAN NUMERAL FIVE HUNDRED\",\"char\":\"ⅾ\"},{\"hex\":\"&#217F;\",\"name\":\"SMALL ROMAN NUMERAL ONE THOUSAND\",\"char\":\"ⅿ\"},{\"hex\":\"&#2180;\",\"name\":\"ROMAN NUMERAL ONE THOUSAND C D\",\"char\":\"ↀ\"},{\"hex\":\"&#2181;\",\"name\":\"ROMAN NUMERAL FIVE THOUSAND\",\"char\":\"ↁ\"},{\"hex\":\"&#2182;\",\"name\":\"ROMAN NUMERAL TEN THOUSAND\",\"char\":\"ↂ\"},{\"hex\":\"&#2183;\",\"name\":\"ROMAN NUMERAL REVERSED ONE HUNDRED\",\"char\":\"Ↄ\"},{\"hex\":\"&#2184;\",\"name\":\"LATIN SMALL LETTER REVERSED C\",\"char\":\"ↄ\"},{\"hex\":\"&#2A00;\",\"name\":\"N-ARY CIRCLED DOT OPERATOR\",\"char\":\"⨀\"},{\"hex\":\"&#2A01;\",\"name\":\"N-ARY CIRCLED PLUS OPERATOR\",\"char\":\"⨁\"},{\"hex\":\"&#2A02;\",\"name\":\"N-ARY CIRCLED TIMES OPERATOR\",\"char\":\"⨂\"},{\"hex\":\"&#2A0C;\",\"name\":\"QUADRUPLE INTEGRAL OPERATOR\",\"char\":\"⨌\"},{\"hex\":\"&#2A0D;\",\"name\":\"FINITE PART INTEGRAL\",\"char\":\"⨍\"},{\"hex\":\"&#2A0E;\",\"name\":\"INTEGRAL WITH DOUBLE STROKE\",\"char\":\"⨎\"},{\"hex\":\"&#2A0F;\",\"name\":\"INTEGRAL AVERAGE WITH SLASH\",\"char\":\"⨏\"},{\"hex\":\"&#2A10;\",\"name\":\"CIRCULATION FUNCTION\",\"char\":\"⨐\"},{\"hex\":\"&#2A11;\",\"name\":\"ANTICLOCKWISE INTEGRATION\",\"char\":\"⨑\"},{\"hex\":\"&#2A12;\",\"name\":\"LINE INTEGRATION WITH RECTANGULAR PATH AROUND POLE\",\"char\":\"⨒\"},{\"hex\":\"&#2A13;\",\"name\":\"LINE INTEGRATION WITH SEMICIRCULAR PATH AROUND POLE\",\"char\":\"⨓\"},{\"hex\":\"&#2A14;\",\"name\":\"LINE INTEGRATION NOT INCLUDING THE POLE\",\"char\":\"⨔\"},{\"hex\":\"&#2A15;\",\"name\":\"INTEGRAL AROUND A POINT OPERATOR\",\"char\":\"⨕\"},{\"hex\":\"&#2A16;\",\"name\":\"QUATERNION INTEGRAL OPERATOR\",\"char\":\"⨖\"},{\"hex\":\"&#2A17;\",\"name\":\"INTEGRAL WITH LEFTWARDS ARROW WITH HOOK\",\"char\":\"⨗\"},{\"hex\":\"&#2A18;\",\"name\":\"INTEGRAL WITH TIMES SIGN\",\"char\":\"⨘\"},{\"hex\":\"&#2A19;\",\"name\":\"INTEGRAL WITH INTERSECTION\",\"char\":\"⨙\"},{\"hex\":\"&#2A1A;\",\"name\":\"INTEGRAL WITH UNION\",\"char\":\"⨚\"},{\"hex\":\"&#2A1B;\",\"name\":\"INTEGRAL WITH OVERBAR\",\"char\":\"⨛\"},{\"hex\":\"&#2A1C;\",\"name\":\"INTEGRAL WITH UNDERBAR\",\"char\":\"⨜\"},{\"hex\":\"&#2A2F;\",\"name\":\"VECTOR OR CROSS PRODUCT\",\"char\":\"⨯\"},{\"hex\":\"&#2A7D;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO\",\"char\":\"⩽\"},{\"hex\":\"&#2A7E;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO\",\"char\":\"⩾\"},{\"hex\":\"&#2A7F;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT INSIDE\",\"char\":\"⩿\"},{\"hex\":\"&#2A80;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT INSIDE\",\"char\":\"⪀\"},{\"hex\":\"&#2A81;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE\",\"char\":\"⪁\"},{\"hex\":\"&#2A82;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE\",\"char\":\"⪂\"},{\"hex\":\"&#2A83;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE RIGHT\",\"char\":\"⪃\"},{\"hex\":\"&#2A84;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE LEFT\",\"char\":\"⪄\"},{\"hex\":\"&#2A85;\",\"name\":\"LESS-THAN OR APPROXIMATE\",\"char\":\"⪅\"},{\"hex\":\"&#2A86;\",\"name\":\"GREATER-THAN OR APPROXIMATE\",\"char\":\"⪆\"},{\"hex\":\"&#2A87;\",\"name\":\"LESS-THAN AND SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪇\"},{\"hex\":\"&#2A88;\",\"name\":\"GREATER-THAN AND SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪈\"},{\"hex\":\"&#2A89;\",\"name\":\"LESS-THAN AND NOT APPROXIMATE\",\"char\":\"⪉\"},{\"hex\":\"&#2A8A;\",\"name\":\"GREATER-THAN AND NOT APPROXIMATE\",\"char\":\"⪊\"},{\"hex\":\"&#2A8B;\",\"name\":\"LESS-THAN ABOVE DOUBLE-LINE EQUAL ABOVE GREATER-THAN\",\"char\":\"⪋\"},{\"hex\":\"&#2A8C;\",\"name\":\"GREATER-THAN ABOVE DOUBLE-LINE EQUAL ABOVE LESS-THAN\",\"char\":\"⪌\"},{\"hex\":\"&#2A8D;\",\"name\":\"LESS-THAN ABOVE SIMILAR OR EQUAL\",\"char\":\"⪍\"},{\"hex\":\"&#2A8E;\",\"name\":\"GREATER-THAN ABOVE SIMILAR OR EQUAL\",\"char\":\"⪎\"},{\"hex\":\"&#2A8F;\",\"name\":\"LESS-THAN ABOVE SIMILAR ABOVE GREATER-THAN\",\"char\":\"⪏\"},{\"hex\":\"&#2A90;\",\"name\":\"GREATER-THAN ABOVE SIMILAR ABOVE LESS-THAN\",\"char\":\"⪐\"},{\"hex\":\"&#2A91;\",\"name\":\"LESS-THAN ABOVE GREATER-THAN ABOVE DOUBLE-LINE EQUAL\",\"char\":\"⪑\"},{\"hex\":\"&#2A92;\",\"name\":\"GREATER-THAN ABOVE LESS-THAN ABOVE DOUBLE-LINE EQUAL\",\"char\":\"⪒\"},{\"hex\":\"&#2A93;\",\"name\":\"LESS-THAN ABOVE SLANTED EQUAL ABOVE GREATER-THAN ABOVE SLANTED EQUAL\",\"char\":\"⪓\"},{\"hex\":\"&#2A94;\",\"name\":\"GREATER-THAN ABOVE SLANTED EQUAL ABOVE LESS-THAN ABOVE SLANTED EQUAL\",\"char\":\"⪔\"},{\"hex\":\"&#2A95;\",\"name\":\"SLANTED EQUAL TO OR LESS-THAN\",\"char\":\"⪕\"},{\"hex\":\"&#2A96;\",\"name\":\"SLANTED EQUAL TO OR GREATER-THAN\",\"char\":\"⪖\"},{\"hex\":\"&#2A97;\",\"name\":\"SLANTED EQUAL TO OR LESS-THAN WITH DOT INSIDE\",\"char\":\"⪗\"},{\"hex\":\"&#2A98;\",\"name\":\"SLANTED EQUAL TO OR GREATER-THAN WITH DOT INSIDE\",\"char\":\"⪘\"},{\"hex\":\"&#2A99;\",\"name\":\"DOUBLE-LINE EQUAL TO OR LESS-THAN\",\"char\":\"⪙\"},{\"hex\":\"&#2A9A;\",\"name\":\"DOUBLE-LINE EQUAL TO OR GREATER-THAN\",\"char\":\"⪚\"},{\"hex\":\"&#2A9B;\",\"name\":\"DOUBLE-LINE SLANTED EQUAL TO OR LESS-THAN\",\"char\":\"⪛\"},{\"hex\":\"&#2A9C;\",\"name\":\"DOUBLE-LINE SLANTED EQUAL TO OR GREATER-THAN\",\"char\":\"⪜\"},{\"hex\":\"&#2A9D;\",\"name\":\"SIMILAR OR LESS-THAN\",\"char\":\"⪝\"},{\"hex\":\"&#2A9E;\",\"name\":\"SIMILAR OR GREATER-THAN\",\"char\":\"⪞\"},{\"hex\":\"&#2A9F;\",\"name\":\"SIMILAR ABOVE LESS-THAN ABOVE EQUALS SIGN\",\"char\":\"⪟\"},{\"hex\":\"&#2AA0;\",\"name\":\"SIMILAR ABOVE GREATER-THAN ABOVE EQUALS SIGN\",\"char\":\"⪠\"},{\"hex\":\"&#2AAE;\",\"name\":\"EQUALS SIGN WITH BUMPY ABOVE\",\"char\":\"⪮\"},{\"hex\":\"&#2AAF;\",\"name\":\"PRECEDES ABOVE SINGLE-LINE EQUALS SIGN\",\"char\":\"⪯\"},{\"hex\":\"&#2AB0;\",\"name\":\"SUCCEEDS ABOVE SINGLE-LINE EQUALS SIGN\",\"char\":\"⪰\"},{\"hex\":\"&#2AB1;\",\"name\":\"PRECEDES ABOVE SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪱\"},{\"hex\":\"&#2AB2;\",\"name\":\"SUCCEEDS ABOVE SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪲\"},{\"hex\":\"&#2AB3;\",\"name\":\"PRECEDES ABOVE EQUALS SIGN\",\"char\":\"⪳\"},{\"hex\":\"&#2AB4;\",\"name\":\"SUCCEEDS ABOVE EQUALS SIGN\",\"char\":\"⪴\"},{\"hex\":\"&#2AB5;\",\"name\":\"PRECEDES ABOVE NOT EQUAL TO\",\"char\":\"⪵\"},{\"hex\":\"&#2AB6;\",\"name\":\"SUCCEEDS ABOVE NOT EQUAL TO\",\"char\":\"⪶\"},{\"hex\":\"&#2AB7;\",\"name\":\"PRECEDES ABOVE ALMOST EQUAL TO\",\"char\":\"⪷\"},{\"hex\":\"&#2AB8;\",\"name\":\"SUCCEEDS ABOVE ALMOST EQUAL TO\",\"char\":\"⪸\"},{\"hex\":\"&#2AB9;\",\"name\":\"PRECEDES ABOVE NOT ALMOST EQUAL TO\",\"char\":\"⪹\"},{\"hex\":\"&#2ABA;\",\"name\":\"SUCCEEDS ABOVE NOT ALMOST EQUAL TO\",\"char\":\"⪺\"},{\"hex\":\"&#2AF9;\",\"name\":\"DOUBLE-LINE SLANTED LESS-THAN OR EQUAL TO\",\"char\":\"⫹\"},{\"hex\":\"&#2AFA;\",\"name\":\"DOUBLE-LINE SLANTED GREATER-THAN OR EQUAL TO\",\"char\":\"⫺\"},{\"hex\":\"&#2460;\",\"name\":\"CIRCLED DIGIT ONE\",\"char\":\"①\"},{\"hex\":\"&#2461;\",\"name\":\"CIRCLED DIGIT TWO\",\"char\":\"②\"},{\"hex\":\"&#2462;\",\"name\":\"CIRCLED DIGIT THREE\",\"char\":\"③\"},{\"hex\":\"&#2463;\",\"name\":\"CIRCLED DIGIT FOUR\",\"char\":\"④\"},{\"hex\":\"&#2464;\",\"name\":\"CIRCLED DIGIT FIVE\",\"char\":\"⑤\"},{\"hex\":\"&#2465;\",\"name\":\"CIRCLED DIGIT SIX\",\"char\":\"⑥\"},{\"hex\":\"&#2466;\",\"name\":\"CIRCLED DIGIT SEVEN\",\"char\":\"⑦\"},{\"hex\":\"&#2467;\",\"name\":\"CIRCLED DIGIT EIGHT\",\"char\":\"⑧\"},{\"hex\":\"&#2468;\",\"name\":\"CIRCLED DIGIT NINE\",\"char\":\"⑨\"},{\"hex\":\"&#2469;\",\"name\":\"CIRCLED NUMBER TEN\",\"char\":\"⑩\"},{\"hex\":\"&#246A;\",\"name\":\"CIRCLED NUMBER ELEVEN\",\"char\":\"⑪\"},{\"hex\":\"&#246B;\",\"name\":\"CIRCLED NUMBER TWELVE\",\"char\":\"⑫\"},{\"hex\":\"&#246C;\",\"name\":\"CIRCLED NUMBER THIRTEEN\",\"char\":\"⑬\"},{\"hex\":\"&#246D;\",\"name\":\"CIRCLED NUMBER FOURTEEN\",\"char\":\"⑭\"},{\"hex\":\"&#246E;\",\"name\":\"CIRCLED NUMBER FIFTEEN\",\"char\":\"⑮\"},{\"hex\":\"&#246F;\",\"name\":\"CIRCLED NUMBER SIXTEEN\",\"char\":\"⑯\"},{\"hex\":\"&#2470;\",\"name\":\"CIRCLED NUMBER SEVENTEEN\",\"char\":\"⑰\"},{\"hex\":\"&#2471;\",\"name\":\"CIRCLED NUMBER EIGHTEEN\",\"char\":\"⑱\"},{\"hex\":\"&#2472;\",\"name\":\"CIRCLED NUMBER NINETEEN\",\"char\":\"⑲\"},{\"hex\":\"&#2473;\",\"name\":\"CIRCLED NUMBER TWENTY\",\"char\":\"⑳\"},{\"hex\":\"&#2474;\",\"name\":\"PARENTHESIZED DIGIT ONE\",\"char\":\"⑴\"},{\"hex\":\"&#2475;\",\"name\":\"PARENTHESIZED DIGIT TWO\",\"char\":\"⑵\"},{\"hex\":\"&#2476;\",\"name\":\"PARENTHESIZED DIGIT THREE\",\"char\":\"⑶\"},{\"hex\":\"&#2477;\",\"name\":\"PARENTHESIZED DIGIT FOUR\",\"char\":\"⑷\"},{\"hex\":\"&#2478;\",\"name\":\"PARENTHESIZED DIGIT FIVE\",\"char\":\"⑸\"},{\"hex\":\"&#2479;\",\"name\":\"PARENTHESIZED DIGIT SIX\",\"char\":\"⑹\"},{\"hex\":\"&#247A;\",\"name\":\"PARENTHESIZED DIGIT SEVEN\",\"char\":\"⑺\"},{\"hex\":\"&#247B;\",\"name\":\"PARENTHESIZED DIGIT EIGHT\",\"char\":\"⑻\"},{\"hex\":\"&#247C;\",\"name\":\"PARENTHESIZED DIGIT NINE\",\"char\":\"⑼\"},{\"hex\":\"&#247D;\",\"name\":\"PARENTHESIZED NUMBER TEN\",\"char\":\"⑽\"},{\"hex\":\"&#247E;\",\"name\":\"PARENTHESIZED NUMBER ELEVEN\",\"char\":\"⑾\"},{\"hex\":\"&#247F;\",\"name\":\"PARENTHESIZED NUMBER TWELVE\",\"char\":\"⑿\"},{\"hex\":\"&#2480;\",\"name\":\"PARENTHESIZED NUMBER THIRTEEN\",\"char\":\"⒀\"},{\"hex\":\"&#2481;\",\"name\":\"PARENTHESIZED NUMBER FOURTEEN\",\"char\":\"⒁\"},{\"hex\":\"&#2482;\",\"name\":\"PARENTHESIZED NUMBER FIFTEEN\",\"char\":\"⒂\"},{\"hex\":\"&#2483;\",\"name\":\"PARENTHESIZED NUMBER SIXTEEN\",\"char\":\"⒃\"},{\"hex\":\"&#2484;\",\"name\":\"PARENTHESIZED NUMBER SEVENTEEN\",\"char\":\"⒄\"},{\"hex\":\"&#2485;\",\"name\":\"PARENTHESIZED NUMBER EIGHTEEN\",\"char\":\"⒅\"},{\"hex\":\"&#2486;\",\"name\":\"PARENTHESIZED NUMBER NINETEEN\",\"char\":\"⒆\"},{\"hex\":\"&#2487;\",\"name\":\"PARENTHESIZED NUMBER TWENTY\",\"char\":\"⒇\"},{\"hex\":\"&#2488;\",\"name\":\"DIGIT ONE FULL STOP\",\"char\":\"⒈\"},{\"hex\":\"&#2489;\",\"name\":\"DIGIT TWO FULL STOP\",\"char\":\"⒉\"},{\"hex\":\"&#248A;\",\"name\":\"DIGIT THREE FULL STOP\",\"char\":\"⒊\"},{\"hex\":\"&#248B;\",\"name\":\"DIGIT FOUR FULL STOP\",\"char\":\"⒋\"},{\"hex\":\"&#248C;\",\"name\":\"DIGIT FIVE FULL STOP\",\"char\":\"⒌\"},{\"hex\":\"&#248D;\",\"name\":\"DIGIT SIX FULL STOP\",\"char\":\"⒍\"},{\"hex\":\"&#248E;\",\"name\":\"DIGIT SEVEN FULL STOP\",\"char\":\"⒎\"},{\"hex\":\"&#248F;\",\"name\":\"DIGIT EIGHT FULL STOP\",\"char\":\"⒏\"},{\"hex\":\"&#2490;\",\"name\":\"DIGIT NINE FULL STOP\",\"char\":\"⒐\"},{\"hex\":\"&#2491;\",\"name\":\"NUMBER TEN FULL STOP\",\"char\":\"⒑\"},{\"hex\":\"&#2492;\",\"name\":\"NUMBER ELEVEN FULL STOP\",\"char\":\"⒒\"},{\"hex\":\"&#2493;\",\"name\":\"NUMBER TWELVE FULL STOP\",\"char\":\"⒓\"},{\"hex\":\"&#2494;\",\"name\":\"NUMBER THIRTEEN FULL STOP\",\"char\":\"⒔\"},{\"hex\":\"&#2495;\",\"name\":\"NUMBER FOURTEEN FULL STOP\",\"char\":\"⒕\"},{\"hex\":\"&#2496;\",\"name\":\"NUMBER FIFTEEN FULL STOP\",\"char\":\"⒖\"},{\"hex\":\"&#2497;\",\"name\":\"NUMBER SIXTEEN FULL STOP\",\"char\":\"⒗\"},{\"hex\":\"&#2498;\",\"name\":\"NUMBER SEVENTEEN FULL STOP\",\"char\":\"⒘\"},{\"hex\":\"&#2499;\",\"name\":\"NUMBER EIGHTEEN FULL STOP\",\"char\":\"⒙\"},{\"hex\":\"&#249A;\",\"name\":\"NUMBER NINETEEN FULL STOP\",\"char\":\"⒚\"},{\"hex\":\"&#249B;\",\"name\":\"NUMBER TWENTY FULL STOP\",\"char\":\"⒛\"},{\"hex\":\"&#249C;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER A\",\"char\":\"⒜\"},{\"hex\":\"&#249D;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER B\",\"char\":\"⒝\"},{\"hex\":\"&#249E;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER C\",\"char\":\"⒞\"},{\"hex\":\"&#249F;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER D\",\"char\":\"⒟\"},{\"hex\":\"&#24A0;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER E\",\"char\":\"⒠\"},{\"hex\":\"&#24A1;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER F\",\"char\":\"⒡\"},{\"hex\":\"&#24A2;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER G\",\"char\":\"⒢\"},{\"hex\":\"&#24A3;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER H\",\"char\":\"⒣\"},{\"hex\":\"&#24A4;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER I\",\"char\":\"⒤\"},{\"hex\":\"&#24A5;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER J\",\"char\":\"⒥\"},{\"hex\":\"&#24A6;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER K\",\"char\":\"⒦\"},{\"hex\":\"&#24A7;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER L\",\"char\":\"⒧\"},{\"hex\":\"&#24A8;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER M\",\"char\":\"⒨\"},{\"hex\":\"&#24A9;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER N\",\"char\":\"⒩\"},{\"hex\":\"&#24AA;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER O\",\"char\":\"⒪\"},{\"hex\":\"&#24AB;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER P\",\"char\":\"⒫\"},{\"hex\":\"&#24AC;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Q\",\"char\":\"⒬\"},{\"hex\":\"&#24AD;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER R\",\"char\":\"⒭\"},{\"hex\":\"&#24AE;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER S\",\"char\":\"⒮\"},{\"hex\":\"&#24AF;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER T\",\"char\":\"⒯\"},{\"hex\":\"&#24B0;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER U\",\"char\":\"⒰\"},{\"hex\":\"&#24B1;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER V\",\"char\":\"⒱\"},{\"hex\":\"&#24B2;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER W\",\"char\":\"⒲\"},{\"hex\":\"&#24B3;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER X\",\"char\":\"⒳\"},{\"hex\":\"&#24B4;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Y\",\"char\":\"⒴\"},{\"hex\":\"&#24B5;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Z\",\"char\":\"⒵\"},{\"hex\":\"&#24B6;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER A\",\"char\":\"Ⓐ\"},{\"hex\":\"&#24B7;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER B\",\"char\":\"Ⓑ\"},{\"hex\":\"&#24B8;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER C\",\"char\":\"Ⓒ\"},{\"hex\":\"&#24B9;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER D\",\"char\":\"Ⓓ\"},{\"hex\":\"&#24BA;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER E\",\"char\":\"Ⓔ\"},{\"hex\":\"&#24BB;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER F\",\"char\":\"Ⓕ\"},{\"hex\":\"&#24BC;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER G\",\"char\":\"Ⓖ\"},{\"hex\":\"&#24BD;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER H\",\"char\":\"Ⓗ\"},{\"hex\":\"&#24BE;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER I\",\"char\":\"Ⓘ\"},{\"hex\":\"&#24BF;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER J\",\"char\":\"Ⓙ\"},{\"hex\":\"&#24C0;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER K\",\"char\":\"Ⓚ\"},{\"hex\":\"&#24C1;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER L\",\"char\":\"Ⓛ\"},{\"hex\":\"&#24C2;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER M\",\"char\":\"Ⓜ\"},{\"hex\":\"&#24C3;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER N\",\"char\":\"Ⓝ\"},{\"hex\":\"&#24C4;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER O\",\"char\":\"Ⓞ\"},{\"hex\":\"&#24C5;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER P\",\"char\":\"Ⓟ\"},{\"hex\":\"&#24C6;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Q\",\"char\":\"Ⓠ\"},{\"hex\":\"&#24C7;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER R\",\"char\":\"Ⓡ\"},{\"hex\":\"&#24C8;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER S\",\"char\":\"Ⓢ\"},{\"hex\":\"&#24C9;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER T\",\"char\":\"Ⓣ\"},{\"hex\":\"&#24CA;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER U\",\"char\":\"Ⓤ\"},{\"hex\":\"&#24CB;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER V\",\"char\":\"Ⓥ\"},{\"hex\":\"&#24CC;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER W\",\"char\":\"Ⓦ\"},{\"hex\":\"&#24CD;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER X\",\"char\":\"Ⓧ\"},{\"hex\":\"&#24CE;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Y\",\"char\":\"Ⓨ\"},{\"hex\":\"&#24CF;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Z\",\"char\":\"Ⓩ\"},{\"hex\":\"&#24D0;\",\"name\":\"CIRCLED LATIN SMALL LETTER A\",\"char\":\"ⓐ\"},{\"hex\":\"&#24D1;\",\"name\":\"CIRCLED LATIN SMALL LETTER B\",\"char\":\"ⓑ\"},{\"hex\":\"&#24D2;\",\"name\":\"CIRCLED LATIN SMALL LETTER C\",\"char\":\"ⓒ\"},{\"hex\":\"&#24D3;\",\"name\":\"CIRCLED LATIN SMALL LETTER D\",\"char\":\"ⓓ\"},{\"hex\":\"&#24D4;\",\"name\":\"CIRCLED LATIN SMALL LETTER E\",\"char\":\"ⓔ\"},{\"hex\":\"&#24D5;\",\"name\":\"CIRCLED LATIN SMALL LETTER F\",\"char\":\"ⓕ\"},{\"hex\":\"&#24D6;\",\"name\":\"CIRCLED LATIN SMALL LETTER G\",\"char\":\"ⓖ\"},{\"hex\":\"&#24D7;\",\"name\":\"CIRCLED LATIN SMALL LETTER H\",\"char\":\"ⓗ\"},{\"hex\":\"&#24D8;\",\"name\":\"CIRCLED LATIN SMALL LETTER I\",\"char\":\"ⓘ\"},{\"hex\":\"&#24D9;\",\"name\":\"CIRCLED LATIN SMALL LETTER J\",\"char\":\"ⓙ\"},{\"hex\":\"&#24DA;\",\"name\":\"CIRCLED LATIN SMALL LETTER K\",\"char\":\"ⓚ\"},{\"hex\":\"&#24DB;\",\"name\":\"CIRCLED LATIN SMALL LETTER L\",\"char\":\"ⓛ\"},{\"hex\":\"&#24DC;\",\"name\":\"CIRCLED LATIN SMALL LETTER M\",\"char\":\"ⓜ\"},{\"hex\":\"&#24DD;\",\"name\":\"CIRCLED LATIN SMALL LETTER N\",\"char\":\"ⓝ\"},{\"hex\":\"&#24DE;\",\"name\":\"CIRCLED LATIN SMALL LETTER O\",\"char\":\"ⓞ\"},{\"hex\":\"&#24DF;\",\"name\":\"CIRCLED LATIN SMALL LETTER P\",\"char\":\"ⓟ\"},{\"hex\":\"&#24E0;\",\"name\":\"CIRCLED LATIN SMALL LETTER Q\",\"char\":\"ⓠ\"},{\"hex\":\"&#24E1;\",\"name\":\"CIRCLED LATIN SMALL LETTER R\",\"char\":\"ⓡ\"},{\"hex\":\"&#24E2;\",\"name\":\"CIRCLED LATIN SMALL LETTER S\",\"char\":\"ⓢ\"},{\"hex\":\"&#24E3;\",\"name\":\"CIRCLED LATIN SMALL LETTER T\",\"char\":\"ⓣ\"},{\"hex\":\"&#24E4;\",\"name\":\"CIRCLED LATIN SMALL LETTER U\",\"char\":\"ⓤ\"},{\"hex\":\"&#24E5;\",\"name\":\"CIRCLED LATIN SMALL LETTER V\",\"char\":\"ⓥ\"},{\"hex\":\"&#24E6;\",\"name\":\"CIRCLED LATIN SMALL LETTER W\",\"char\":\"ⓦ\"},{\"hex\":\"&#24E7;\",\"name\":\"CIRCLED LATIN SMALL LETTER X\",\"char\":\"ⓧ\"},{\"hex\":\"&#24E8;\",\"name\":\"CIRCLED LATIN SMALL LETTER Y\",\"char\":\"ⓨ\"},{\"hex\":\"&#24E9;\",\"name\":\"CIRCLED LATIN SMALL LETTER Z\",\"char\":\"ⓩ\"},{\"hex\":\"&#24EA;\",\"name\":\"CIRCLED DIGIT ZERO\",\"char\":\"⓪\"},{\"hex\":\"&#2070;\",\"name\":\"SUPERSCRIPT ZERO\",\"char\":\"⁰\"},{\"hex\":\"&#2071;\",\"name\":\"SUPERSCRIPT LATIN SMALL LETTER I\",\"char\":\"ⁱ\"},{\"hex\":\"&#2074;\",\"name\":\"SUPERSCRIPT FOUR\",\"char\":\"⁴\"},{\"hex\":\"&#2075;\",\"name\":\"SUPERSCRIPT FIVE\",\"char\":\"⁵\"},{\"hex\":\"&#2076;\",\"name\":\"SUPERSCRIPT SIX\",\"char\":\"⁶\"},{\"hex\":\"&#2077;\",\"name\":\"SUPERSCRIPT SEVEN\",\"char\":\"⁷\"},{\"hex\":\"&#2078;\",\"name\":\"SUPERSCRIPT EIGHT\",\"char\":\"⁸\"},{\"hex\":\"&#2079;\",\"name\":\"SUPERSCRIPT NINE\",\"char\":\"⁹\"},{\"hex\":\"&#207A;\",\"name\":\"SUPERSCRIPT PLUS SIGN\",\"char\":\"⁺\"},{\"hex\":\"&#207B;\",\"name\":\"SUPERSCRIPT MINUS\",\"char\":\"⁻\"},{\"hex\":\"&#207C;\",\"name\":\"SUPERSCRIPT EQUALS SIGN\",\"char\":\"⁼\"},{\"hex\":\"&#207D;\",\"name\":\"SUPERSCRIPT LEFT PARENTHESIS\",\"char\":\"⁽\"},{\"hex\":\"&#207E;\",\"name\":\"SUPERSCRIPT RIGHT PARENTHESIS\",\"char\":\"⁾\"},{\"hex\":\"&#207F;\",\"name\":\"SUPERSCRIPT LATIN SMALL LETTER N (present in WGL4)\",\"char\":\"ⁿ\"},{\"hex\":\"&#2080;\",\"name\":\"SUBSCRIPT ZERO\",\"char\":\"₀\"},{\"hex\":\"&#2081;\",\"name\":\"SUBSCRIPT ONE\",\"char\":\"₁\"},{\"hex\":\"&#2082;\",\"name\":\"SUBSCRIPT TWO\",\"char\":\"₂\"},{\"hex\":\"&#2083;\",\"name\":\"SUBSCRIPT THREE\",\"char\":\"₃\"},{\"hex\":\"&#2084;\",\"name\":\"SUBSCRIPT FOUR\",\"char\":\"₄\"},{\"hex\":\"&#2085;\",\"name\":\"SUBSCRIPT FIVE\",\"char\":\"₅\"},{\"hex\":\"&#2086;\",\"name\":\"SUBSCRIPT SIX\",\"char\":\"₆\"},{\"hex\":\"&#2087;\",\"name\":\"SUBSCRIPT SEVEN\",\"char\":\"₇\"},{\"hex\":\"&#2088;\",\"name\":\"SUBSCRIPT EIGHT\",\"char\":\"₈\"},{\"hex\":\"&#2089;\",\"name\":\"SUBSCRIPT NINE\",\"char\":\"₉\"},{\"hex\":\"&#208A;\",\"name\":\"SUBSCRIPT PLUS SIGN\",\"char\":\"₊\"},{\"hex\":\"&#208B;\",\"name\":\"SUBSCRIPT MINUS\",\"char\":\"₋\"},{\"hex\":\"&#208C;\",\"name\":\"SUBSCRIPT EQUALS SIGN\",\"char\":\"₌\"},{\"hex\":\"&#208D;\",\"name\":\"SUBSCRIPT LEFT PARENTHESIS\",\"char\":\"₍\"},{\"hex\":\"&#208E;\",\"name\":\"SUBSCRIPT RIGHT PARENTHESIS\",\"char\":\"₎\"},{\"hex\":\"&#2090;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER A\",\"char\":\"ₐ\"},{\"hex\":\"&#2091;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER E\",\"char\":\"ₑ\"},{\"hex\":\"&#2092;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER O\",\"char\":\"ₒ\"},{\"hex\":\"&#2093;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER X\",\"char\":\"ₓ\"},{\"hex\":\"&#2094;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER SCHWA\",\"char\":\"ₔ\"}],\"Latin\":[{\"entity\":\"&Agrave;\",\"hex\":\"&#00C0;\",\"name\":\"LATIN CAPITAL LETTER A WITH GRAVE\",\"char\":\"À\"},{\"entity\":\"&Aacute;\",\"hex\":\"&#00C1;\",\"name\":\"LATIN CAPITAL LETTER A WITH ACUTE\",\"char\":\"Á\"},{\"entity\":\"&Acirc;\",\"hex\":\"&#00C2;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX\",\"char\":\"Â\"},{\"entity\":\"&Atilde;\",\"hex\":\"&#00C3;\",\"name\":\"LATIN CAPITAL LETTER A WITH TILDE\",\"char\":\"Ã\"},{\"entity\":\"&Auml;\",\"hex\":\"&#00C4;\",\"name\":\"LATIN CAPITAL LETTER A WITH DIAERESIS\",\"char\":\"Ä\"},{\"entity\":\"&Aring;\",\"hex\":\"&#00C5;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING ABOVE\",\"char\":\"Å\"},{\"entity\":\"&AElig;\",\"hex\":\"&#00C6;\",\"name\":\"LATIN CAPITAL LETTER AE\",\"char\":\"Æ\"},{\"entity\":\"&Ccedil;\",\"hex\":\"&#00C7;\",\"name\":\"LATIN CAPITAL LETTER C WITH CEDILLA\",\"char\":\"Ç\"},{\"entity\":\"&Egrave;\",\"hex\":\"&#00C8;\",\"name\":\"LATIN CAPITAL LETTER E WITH GRAVE\",\"char\":\"È\"},{\"entity\":\"&Eacute;\",\"hex\":\"&#00C9;\",\"name\":\"LATIN CAPITAL LETTER E WITH ACUTE\",\"char\":\"É\"},{\"entity\":\"&Ecirc;\",\"hex\":\"&#00CA;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX\",\"char\":\"Ê\"},{\"entity\":\"&Euml;\",\"hex\":\"&#00CB;\",\"name\":\"LATIN CAPITAL LETTER E WITH DIAERESIS\",\"char\":\"Ë\"},{\"entity\":\"&Igrave;\",\"hex\":\"&#00CC;\",\"name\":\"LATIN CAPITAL LETTER I WITH GRAVE\",\"char\":\"Ì\"},{\"entity\":\"&Iacute;\",\"hex\":\"&#00CD;\",\"name\":\"LATIN CAPITAL LETTER I WITH ACUTE\",\"char\":\"Í\"},{\"entity\":\"&Icirc;\",\"hex\":\"&#00CE;\",\"name\":\"LATIN CAPITAL LETTER I WITH CIRCUMFLEX\",\"char\":\"Î\"},{\"entity\":\"&Iuml;\",\"hex\":\"&#00CF;\",\"name\":\"LATIN CAPITAL LETTER I WITH DIAERESIS\",\"char\":\"Ï\"},{\"entity\":\"&ETH;\",\"hex\":\"&#00D0;\",\"name\":\"LATIN CAPITAL LETTER ETH\",\"char\":\"Ð\"},{\"entity\":\"&Ntilde;\",\"hex\":\"&#00D1;\",\"name\":\"LATIN CAPITAL LETTER N WITH TILDE\",\"char\":\"Ñ\"},{\"entity\":\"&Ograve;\",\"hex\":\"&#00D2;\",\"name\":\"LATIN CAPITAL LETTER O WITH GRAVE\",\"char\":\"Ò\"},{\"entity\":\"&Oacute;\",\"hex\":\"&#00D3;\",\"name\":\"LATIN CAPITAL LETTER O WITH ACUTE\",\"char\":\"Ó\"},{\"entity\":\"&Ocirc;\",\"hex\":\"&#00D4;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX\",\"char\":\"Ô\"},{\"entity\":\"&Otilde;\",\"hex\":\"&#00D5;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE\",\"char\":\"Õ\"},{\"entity\":\"&Ouml;\",\"hex\":\"&#00D6;\",\"name\":\"LATIN CAPITAL LETTER O WITH DIAERESIS\",\"char\":\"Ö\"},{\"entity\":\"&times;\",\"hex\":\"&#00D7;\",\"name\":\"MULTIPLICATION SIGN\",\"char\":\"×\"},{\"entity\":\"&Oslash;\",\"hex\":\"&#00D8;\",\"name\":\"LATIN CAPITAL LETTER O WITH STROKE\",\"char\":\"Ø\"},{\"entity\":\"&Ugrave;\",\"hex\":\"&#00D9;\",\"name\":\"LATIN CAPITAL LETTER U WITH GRAVE\",\"char\":\"Ù\"},{\"entity\":\"&Uacute;\",\"hex\":\"&#00DA;\",\"name\":\"LATIN CAPITAL LETTER U WITH ACUTE\",\"char\":\"Ú\"},{\"entity\":\"&Ucirc;\",\"hex\":\"&#00DB;\",\"name\":\"LATIN CAPITAL LETTER U WITH CIRCUMFLEX\",\"char\":\"Û\"},{\"entity\":\"&Uuml;\",\"hex\":\"&#00DC;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS\",\"char\":\"Ü\"},{\"entity\":\"&Yacute;\",\"hex\":\"&#00DD;\",\"name\":\"LATIN CAPITAL LETTER Y WITH ACUTE\",\"char\":\"Ý\"},{\"entity\":\"&THORN;\",\"hex\":\"&#00DE;\",\"name\":\"LATIN CAPITAL LETTER THORN\",\"char\":\"Þ\"},{\"entity\":\"&szlig;\",\"hex\":\"&#00DF;\",\"name\":\"LATIN SMALL LETTER SHARP S\",\"char\":\"ß\"},{\"entity\":\"&agrave;\",\"hex\":\"&#00E0;\",\"name\":\"LATIN SMALL LETTER A WITH GRAVE\",\"char\":\"à\"},{\"entity\":\"&aacute;\",\"hex\":\"&#00E1;\",\"name\":\"LATIN SMALL LETTER A WITH ACUTE\",\"char\":\"á\"},{\"entity\":\"&acirc;\",\"hex\":\"&#00E2;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX\",\"char\":\"â\"},{\"entity\":\"&atilde;\",\"hex\":\"&#00E3;\",\"name\":\"LATIN SMALL LETTER A WITH TILDE\",\"char\":\"ã\"},{\"entity\":\"&auml;\",\"hex\":\"&#00E4;\",\"name\":\"LATIN SMALL LETTER A WITH DIAERESIS\",\"char\":\"ä\"},{\"entity\":\"&aring;\",\"hex\":\"&#00E5;\",\"name\":\"LATIN SMALL LETTER A WITH RING ABOVE\",\"char\":\"å\"},{\"entity\":\"&aelig;\",\"hex\":\"&#00E6;\",\"name\":\"LATIN SMALL LETTER AE\",\"char\":\"æ\"},{\"entity\":\"&ccedil;\",\"hex\":\"&#00E7;\",\"name\":\"LATIN SMALL LETTER C WITH CEDILLA\",\"char\":\"ç\"},{\"entity\":\"&egrave;\",\"hex\":\"&#00E8;\",\"name\":\"LATIN SMALL LETTER E WITH GRAVE\",\"char\":\"è\"},{\"entity\":\"&eacute;\",\"hex\":\"&#00E9;\",\"name\":\"LATIN SMALL LETTER E WITH ACUTE\",\"char\":\"é\"},{\"entity\":\"&ecirc;\",\"hex\":\"&#00EA;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX\",\"char\":\"ê\"},{\"entity\":\"&euml;\",\"hex\":\"&#00EB;\",\"name\":\"LATIN SMALL LETTER E WITH DIAERESIS\",\"char\":\"ë\"},{\"entity\":\"&igrave;\",\"hex\":\"&#00EC;\",\"name\":\"LATIN SMALL LETTER I WITH GRAVE\",\"char\":\"ì\"},{\"entity\":\"&iacute;\",\"hex\":\"&#00ED;\",\"name\":\"LATIN SMALL LETTER I WITH ACUTE\",\"char\":\"í\"},{\"entity\":\"&icirc;\",\"hex\":\"&#00EE;\",\"name\":\"LATIN SMALL LETTER I WITH CIRCUMFLEX\",\"char\":\"î\"},{\"entity\":\"&iuml;\",\"hex\":\"&#00EF;\",\"name\":\"LATIN SMALL LETTER I WITH DIAERESIS\",\"char\":\"ï\"},{\"entity\":\"&eth;\",\"hex\":\"&#00F0;\",\"name\":\"LATIN SMALL LETTER ETH\",\"char\":\"ð\"},{\"entity\":\"&ntilde;\",\"hex\":\"&#00F1;\",\"name\":\"LATIN SMALL LETTER N WITH TILDE\",\"char\":\"ñ\"},{\"entity\":\"&ograve;\",\"hex\":\"&#00F2;\",\"name\":\"LATIN SMALL LETTER O WITH GRAVE\",\"char\":\"ò\"},{\"entity\":\"&oacute;\",\"hex\":\"&#00F3;\",\"name\":\"LATIN SMALL LETTER O WITH ACUTE\",\"char\":\"ó\"},{\"entity\":\"&ocirc;\",\"hex\":\"&#00F4;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX\",\"char\":\"ô\"},{\"entity\":\"&otilde;\",\"hex\":\"&#00F5;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE\",\"char\":\"õ\"},{\"entity\":\"&ouml;\",\"hex\":\"&#00F6;\",\"name\":\"LATIN SMALL LETTER O WITH DIAERESIS\",\"char\":\"ö\"},{\"entity\":\"&divide;\",\"hex\":\"&#00F7;\",\"name\":\"DIVISION SIGN\",\"char\":\"÷\"},{\"entity\":\"&oslash;\",\"hex\":\"&#00F8;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE\",\"char\":\"ø\"},{\"entity\":\"&ugrave;\",\"hex\":\"&#00F9;\",\"name\":\"LATIN SMALL LETTER U WITH GRAVE\",\"char\":\"ù\"},{\"entity\":\"&uacute;\",\"hex\":\"&#00FA;\",\"name\":\"LATIN SMALL LETTER U WITH ACUTE\",\"char\":\"ú\"},{\"entity\":\"&ucirc;\",\"hex\":\"&#00FB;\",\"name\":\"LATIN SMALL LETTER U WITH CIRCUMFLEX\",\"char\":\"û\"},{\"entity\":\"&uuml;\",\"hex\":\"&#00FC;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS\",\"char\":\"ü\"},{\"entity\":\"&yacute;\",\"hex\":\"&#00FD;\",\"name\":\"LATIN SMALL LETTER Y WITH ACUTE\",\"char\":\"ý\"},{\"entity\":\"&thorn;\",\"hex\":\"&#00FE;\",\"name\":\"LATIN SMALL LETTER THORN\",\"char\":\"þ\"},{\"entity\":\"&yuml;\",\"hex\":\"&#00FF;\",\"name\":\"LATIN SMALL LETTER Y WITH DIAERESIS\",\"char\":\"ÿ\"},{\"hex\":\"&#0100;\",\"name\":\"LATIN CAPITAL LETTER A WITH MACRON\",\"char\":\"Ā\"},{\"hex\":\"&#0101;\",\"name\":\"LATIN SMALL LETTER A WITH MACRON\",\"char\":\"ā\"},{\"hex\":\"&#0102;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE\",\"char\":\"Ă\"},{\"hex\":\"&#0103;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE\",\"char\":\"ă\"},{\"hex\":\"&#0104;\",\"name\":\"LATIN CAPITAL LETTER A WITH OGONEK\",\"char\":\"Ą\"},{\"hex\":\"&#0105;\",\"name\":\"LATIN SMALL LETTER A WITH OGONEK\",\"char\":\"ą\"},{\"hex\":\"&#0106;\",\"name\":\"LATIN CAPITAL LETTER C WITH ACUTE\",\"char\":\"Ć\"},{\"hex\":\"&#0107;\",\"name\":\"LATIN SMALL LETTER C WITH ACUTE\",\"char\":\"ć\"},{\"hex\":\"&#0108;\",\"name\":\"LATIN CAPITAL LETTER C WITH CIRCUMFLEX\",\"char\":\"Ĉ\"},{\"hex\":\"&#0109;\",\"name\":\"LATIN SMALL LETTER C WITH CIRCUMFLEX\",\"char\":\"ĉ\"},{\"hex\":\"&#010A;\",\"name\":\"LATIN CAPITAL LETTER C WITH DOT ABOVE\",\"char\":\"Ċ\"},{\"hex\":\"&#010B;\",\"name\":\"LATIN SMALL LETTER C WITH DOT ABOVE\",\"char\":\"ċ\"},{\"hex\":\"&#010C;\",\"name\":\"LATIN CAPITAL LETTER C WITH CARON\",\"char\":\"Č\"},{\"hex\":\"&#010D;\",\"name\":\"LATIN SMALL LETTER C WITH CARON\",\"char\":\"č\"},{\"hex\":\"&#010E;\",\"name\":\"LATIN CAPITAL LETTER D WITH CARON\",\"char\":\"Ď\"},{\"hex\":\"&#010F;\",\"name\":\"LATIN SMALL LETTER D WITH CARON\",\"char\":\"ď\"},{\"hex\":\"&#0110;\",\"name\":\"LATIN CAPITAL LETTER D WITH STROKE\",\"char\":\"Đ\"},{\"hex\":\"&#0111;\",\"name\":\"LATIN SMALL LETTER D WITH STROKE\",\"char\":\"đ\"},{\"hex\":\"&#0112;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON\",\"char\":\"Ē\"},{\"hex\":\"&#0113;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON\",\"char\":\"ē\"},{\"hex\":\"&#0114;\",\"name\":\"LATIN CAPITAL LETTER E WITH BREVE\",\"char\":\"Ĕ\"},{\"hex\":\"&#0115;\",\"name\":\"LATIN SMALL LETTER E WITH BREVE\",\"char\":\"ĕ\"},{\"hex\":\"&#0116;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOT ABOVE\",\"char\":\"Ė\"},{\"hex\":\"&#0117;\",\"name\":\"LATIN SMALL LETTER E WITH DOT ABOVE\",\"char\":\"ė\"},{\"hex\":\"&#0118;\",\"name\":\"LATIN CAPITAL LETTER E WITH OGONEK\",\"char\":\"Ę\"},{\"hex\":\"&#0119;\",\"name\":\"LATIN SMALL LETTER E WITH OGONEK\",\"char\":\"ę\"},{\"hex\":\"&#011A;\",\"name\":\"LATIN CAPITAL LETTER E WITH CARON\",\"char\":\"Ě\"},{\"hex\":\"&#011B;\",\"name\":\"LATIN SMALL LETTER E WITH CARON\",\"char\":\"ě\"},{\"hex\":\"&#011C;\",\"name\":\"LATIN CAPITAL LETTER G WITH CIRCUMFLEX\",\"char\":\"Ĝ\"},{\"hex\":\"&#011D;\",\"name\":\"LATIN SMALL LETTER G WITH CIRCUMFLEX\",\"char\":\"ĝ\"},{\"hex\":\"&#011E;\",\"name\":\"LATIN CAPITAL LETTER G WITH BREVE\",\"char\":\"Ğ\"},{\"hex\":\"&#011F;\",\"name\":\"LATIN SMALL LETTER G WITH BREVE\",\"char\":\"ğ\"},{\"hex\":\"&#0120;\",\"name\":\"LATIN CAPITAL LETTER G WITH DOT ABOVE\",\"char\":\"Ġ\"},{\"hex\":\"&#0121;\",\"name\":\"LATIN SMALL LETTER G WITH DOT ABOVE\",\"char\":\"ġ\"},{\"hex\":\"&#0122;\",\"name\":\"LATIN CAPITAL LETTER G WITH CEDILLA\",\"char\":\"Ģ\"},{\"hex\":\"&#0123;\",\"name\":\"LATIN SMALL LETTER G WITH CEDILLA\",\"char\":\"ģ\"},{\"hex\":\"&#0124;\",\"name\":\"LATIN CAPITAL LETTER H WITH CIRCUMFLEX\",\"char\":\"Ĥ\"},{\"hex\":\"&#0125;\",\"name\":\"LATIN SMALL LETTER H WITH CIRCUMFLEX\",\"char\":\"ĥ\"},{\"hex\":\"&#0126;\",\"name\":\"LATIN CAPITAL LETTER H WITH STROKE\",\"char\":\"Ħ\"},{\"hex\":\"&#0127;\",\"name\":\"LATIN SMALL LETTER H WITH STROKE\",\"char\":\"ħ\"},{\"hex\":\"&#0128;\",\"name\":\"LATIN CAPITAL LETTER I WITH TILDE\",\"char\":\"Ĩ\"},{\"hex\":\"&#0129;\",\"name\":\"LATIN SMALL LETTER I WITH TILDE\",\"char\":\"ĩ\"},{\"hex\":\"&#012A;\",\"name\":\"LATIN CAPITAL LETTER I WITH MACRON\",\"char\":\"Ī\"},{\"hex\":\"&#012B;\",\"name\":\"LATIN SMALL LETTER I WITH MACRON\",\"char\":\"ī\"},{\"hex\":\"&#012C;\",\"name\":\"LATIN CAPITAL LETTER I WITH BREVE\",\"char\":\"Ĭ\"},{\"hex\":\"&#012D;\",\"name\":\"LATIN SMALL LETTER I WITH BREVE\",\"char\":\"ĭ\"},{\"hex\":\"&#012E;\",\"name\":\"LATIN CAPITAL LETTER I WITH OGONEK\",\"char\":\"Į\"},{\"hex\":\"&#012F;\",\"name\":\"LATIN SMALL LETTER I WITH OGONEK\",\"char\":\"į\"},{\"hex\":\"&#0130;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOT ABOVE\",\"char\":\"İ\"},{\"hex\":\"&#0131;\",\"name\":\"LATIN SMALL LETTER DOTLESS I\",\"char\":\"ı\"},{\"hex\":\"&#0132;\",\"name\":\"LATIN CAPITAL LIGATURE IJ\",\"char\":\"Ĳ\"},{\"hex\":\"&#0133;\",\"name\":\"LATIN SMALL LIGATURE IJ\",\"char\":\"ĳ\"},{\"hex\":\"&#0134;\",\"name\":\"LATIN CAPITAL LETTER J WITH CIRCUMFLEX\",\"char\":\"Ĵ\"},{\"hex\":\"&#0135;\",\"name\":\"LATIN SMALL LETTER J WITH CIRCUMFLEX\",\"char\":\"ĵ\"},{\"hex\":\"&#0136;\",\"name\":\"LATIN CAPITAL LETTER K WITH CEDILLA\",\"char\":\"Ķ\"},{\"hex\":\"&#0137;\",\"name\":\"LATIN SMALL LETTER K WITH CEDILLA\",\"char\":\"ķ\"},{\"hex\":\"&#0138;\",\"name\":\"LATIN SMALL LETTER KRA\",\"char\":\"ĸ\"},{\"hex\":\"&#0139;\",\"name\":\"LATIN CAPITAL LETTER L WITH ACUTE\",\"char\":\"Ĺ\"},{\"hex\":\"&#013A;\",\"name\":\"LATIN SMALL LETTER L WITH ACUTE\",\"char\":\"ĺ\"},{\"hex\":\"&#013B;\",\"name\":\"LATIN CAPITAL LETTER L WITH CEDILLA\",\"char\":\"Ļ\"},{\"hex\":\"&#013C;\",\"name\":\"LATIN SMALL LETTER L WITH CEDILLA\",\"char\":\"ļ\"},{\"hex\":\"&#013D;\",\"name\":\"LATIN CAPITAL LETTER L WITH CARON\",\"char\":\"Ľ\"},{\"hex\":\"&#013E;\",\"name\":\"LATIN SMALL LETTER L WITH CARON\",\"char\":\"ľ\"},{\"hex\":\"&#013F;\",\"name\":\"LATIN CAPITAL LETTER L WITH MIDDLE DOT\",\"char\":\"Ŀ\"},{\"hex\":\"&#0140;\",\"name\":\"LATIN SMALL LETTER L WITH MIDDLE DOT\",\"char\":\"ŀ\"},{\"hex\":\"&#0141;\",\"name\":\"LATIN CAPITAL LETTER L WITH STROKE\",\"char\":\"Ł\"},{\"hex\":\"&#0142;\",\"name\":\"LATIN SMALL LETTER L WITH STROKE\",\"char\":\"ł\"},{\"hex\":\"&#0143;\",\"name\":\"LATIN CAPITAL LETTER N WITH ACUTE\",\"char\":\"Ń\"},{\"hex\":\"&#0144;\",\"name\":\"LATIN SMALL LETTER N WITH ACUTE\",\"char\":\"ń\"},{\"hex\":\"&#0145;\",\"name\":\"LATIN CAPITAL LETTER N WITH CEDILLA\",\"char\":\"Ņ\"},{\"hex\":\"&#0146;\",\"name\":\"LATIN SMALL LETTER N WITH CEDILLA\",\"char\":\"ņ\"},{\"hex\":\"&#0147;\",\"name\":\"LATIN CAPITAL LETTER N WITH CARON\",\"char\":\"Ň\"},{\"hex\":\"&#0148;\",\"name\":\"LATIN SMALL LETTER N WITH CARON\",\"char\":\"ň\"},{\"hex\":\"&#0149;\",\"name\":\"LATIN SMALL LETTER N PRECEDED BY APOSTROPHE\",\"char\":\"ŉ\"},{\"hex\":\"&#014A;\",\"name\":\"LATIN CAPITAL LETTER ENG\",\"char\":\"Ŋ\"},{\"hex\":\"&#014B;\",\"name\":\"LATIN SMALL LETTER ENG\",\"char\":\"ŋ\"},{\"hex\":\"&#014C;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON\",\"char\":\"Ō\"},{\"hex\":\"&#014D;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON\",\"char\":\"ō\"},{\"hex\":\"&#014E;\",\"name\":\"LATIN CAPITAL LETTER O WITH BREVE\",\"char\":\"Ŏ\"},{\"hex\":\"&#014F;\",\"name\":\"LATIN SMALL LETTER O WITH BREVE\",\"char\":\"ŏ\"},{\"hex\":\"&#0150;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOUBLE ACUTE\",\"char\":\"Ő\"},{\"hex\":\"&#0151;\",\"name\":\"LATIN SMALL LETTER O WITH DOUBLE ACUTE\",\"char\":\"ő\"},{\"entity\":\"&OElig;\",\"hex\":\"&#0152;\",\"name\":\"LATIN CAPITAL LIGATURE OE\",\"char\":\"Œ\"},{\"entity\":\"&oelig;\",\"hex\":\"&#0153;\",\"name\":\"LATIN SMALL LIGATURE OE\",\"char\":\"œ\"},{\"hex\":\"&#0154;\",\"name\":\"LATIN CAPITAL LETTER R WITH ACUTE\",\"char\":\"Ŕ\"},{\"hex\":\"&#0155;\",\"name\":\"LATIN SMALL LETTER R WITH ACUTE\",\"char\":\"ŕ\"},{\"hex\":\"&#0156;\",\"name\":\"LATIN CAPITAL LETTER R WITH CEDILLA\",\"char\":\"Ŗ\"},{\"hex\":\"&#0157;\",\"name\":\"LATIN SMALL LETTER R WITH CEDILLA\",\"char\":\"ŗ\"},{\"hex\":\"&#0158;\",\"name\":\"LATIN CAPITAL LETTER R WITH CARON\",\"char\":\"Ř\"},{\"hex\":\"&#0159;\",\"name\":\"LATIN SMALL LETTER R WITH CARON\",\"char\":\"ř\"},{\"hex\":\"&#015A;\",\"name\":\"LATIN CAPITAL LETTER S WITH ACUTE\",\"char\":\"Ś\"},{\"hex\":\"&#015B;\",\"name\":\"LATIN SMALL LETTER S WITH ACUTE\",\"char\":\"ś\"},{\"hex\":\"&#015C;\",\"name\":\"LATIN CAPITAL LETTER S WITH CIRCUMFLEX\",\"char\":\"Ŝ\"},{\"hex\":\"&#015D;\",\"name\":\"LATIN SMALL LETTER S WITH CIRCUMFLEX\",\"char\":\"ŝ\"},{\"hex\":\"&#015E;\",\"name\":\"LATIN CAPITAL LETTER S WITH CEDILLA\",\"char\":\"Ş\"},{\"hex\":\"&#015F;\",\"name\":\"LATIN SMALL LETTER S WITH CEDILLA\",\"char\":\"ş\"},{\"entity\":\"&Scaron;\",\"hex\":\"&#0160;\",\"name\":\"LATIN CAPITAL LETTER S WITH CARON\",\"char\":\"Š\"},{\"entity\":\"&scaron;\",\"hex\":\"&#0161;\",\"name\":\"LATIN SMALL LETTER S WITH CARON\",\"char\":\"š\"},{\"hex\":\"&#0162;\",\"name\":\"LATIN CAPITAL LETTER T WITH CEDILLA\",\"char\":\"Ţ\"},{\"hex\":\"&#0163;\",\"name\":\"LATIN SMALL LETTER T WITH CEDILLA\",\"char\":\"ţ\"},{\"hex\":\"&#0164;\",\"name\":\"LATIN CAPITAL LETTER T WITH CARON\",\"char\":\"Ť\"},{\"hex\":\"&#0165;\",\"name\":\"LATIN SMALL LETTER T WITH CARON\",\"char\":\"ť\"},{\"hex\":\"&#0166;\",\"name\":\"LATIN CAPITAL LETTER T WITH STROKE\",\"char\":\"Ŧ\"},{\"hex\":\"&#0167;\",\"name\":\"LATIN SMALL LETTER T WITH STROKE\",\"char\":\"ŧ\"},{\"hex\":\"&#0168;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE\",\"char\":\"Ũ\"},{\"hex\":\"&#0169;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE\",\"char\":\"ũ\"},{\"hex\":\"&#016A;\",\"name\":\"LATIN CAPITAL LETTER U WITH MACRON\",\"char\":\"Ū\"},{\"hex\":\"&#016B;\",\"name\":\"LATIN SMALL LETTER U WITH MACRON\",\"char\":\"ū\"},{\"hex\":\"&#016C;\",\"name\":\"LATIN CAPITAL LETTER U WITH BREVE\",\"char\":\"Ŭ\"},{\"hex\":\"&#016D;\",\"name\":\"LATIN SMALL LETTER U WITH BREVE\",\"char\":\"ŭ\"},{\"hex\":\"&#016E;\",\"name\":\"LATIN CAPITAL LETTER U WITH RING ABOVE\",\"char\":\"Ů\"},{\"hex\":\"&#016F;\",\"name\":\"LATIN SMALL LETTER U WITH RING ABOVE\",\"char\":\"ů\"},{\"hex\":\"&#0170;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOUBLE ACUTE\",\"char\":\"Ű\"},{\"hex\":\"&#0171;\",\"name\":\"LATIN SMALL LETTER U WITH DOUBLE ACUTE\",\"char\":\"ű\"},{\"hex\":\"&#0172;\",\"name\":\"LATIN CAPITAL LETTER U WITH OGONEK\",\"char\":\"Ų\"},{\"hex\":\"&#0173;\",\"name\":\"LATIN SMALL LETTER U WITH OGONEK\",\"char\":\"ų\"},{\"hex\":\"&#0174;\",\"name\":\"LATIN CAPITAL LETTER W WITH CIRCUMFLEX\",\"char\":\"Ŵ\"},{\"hex\":\"&#0175;\",\"name\":\"LATIN SMALL LETTER W WITH CIRCUMFLEX\",\"char\":\"ŵ\"},{\"hex\":\"&#0176;\",\"name\":\"LATIN CAPITAL LETTER Y WITH CIRCUMFLEX\",\"char\":\"Ŷ\"},{\"hex\":\"&#0177;\",\"name\":\"LATIN SMALL LETTER Y WITH CIRCUMFLEX\",\"char\":\"ŷ\"},{\"entity\":\"&Yuml;\",\"hex\":\"&#0178;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DIAERESIS\",\"char\":\"Ÿ\"},{\"hex\":\"&#0179;\",\"name\":\"LATIN CAPITAL LETTER Z WITH ACUTE\",\"char\":\"Ź\"},{\"hex\":\"&#017A;\",\"name\":\"LATIN SMALL LETTER Z WITH ACUTE\",\"char\":\"ź\"},{\"hex\":\"&#017B;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DOT ABOVE\",\"char\":\"Ż\"},{\"hex\":\"&#017C;\",\"name\":\"LATIN SMALL LETTER Z WITH DOT ABOVE\",\"char\":\"ż\"},{\"hex\":\"&#017D;\",\"name\":\"LATIN CAPITAL LETTER Z WITH CARON\",\"char\":\"Ž\"},{\"hex\":\"&#017E;\",\"name\":\"LATIN SMALL LETTER Z WITH CARON\",\"char\":\"ž\"},{\"hex\":\"&#017F;\",\"name\":\"LATIN SMALL LETTER LONG S\",\"char\":\"ſ\"},{\"hex\":\"&#0180;\",\"name\":\"LATIN SMALL LETTER B WITH STROKE\",\"char\":\"ƀ\"},{\"hex\":\"&#0181;\",\"name\":\"LATIN CAPITAL LETTER B WITH HOOK\",\"char\":\"Ɓ\"},{\"hex\":\"&#0182;\",\"name\":\"LATIN CAPITAL LETTER B WITH TOPBAR\",\"char\":\"Ƃ\"},{\"hex\":\"&#0183;\",\"name\":\"LATIN SMALL LETTER B WITH TOPBAR\",\"char\":\"ƃ\"},{\"hex\":\"&#0184;\",\"name\":\"LATIN CAPITAL LETTER TONE SIX\",\"char\":\"Ƅ\"},{\"hex\":\"&#0185;\",\"name\":\"LATIN SMALL LETTER TONE SIX\",\"char\":\"ƅ\"},{\"hex\":\"&#0186;\",\"name\":\"LATIN CAPITAL LETTER OPEN O\",\"char\":\"Ɔ\"},{\"hex\":\"&#0187;\",\"name\":\"LATIN CAPITAL LETTER C WITH HOOK\",\"char\":\"Ƈ\"},{\"hex\":\"&#0188;\",\"name\":\"LATIN SMALL LETTER C WITH HOOK\",\"char\":\"ƈ\"},{\"hex\":\"&#0189;\",\"name\":\"LATIN CAPITAL LETTER AFRICAN D\",\"char\":\"Ɖ\"},{\"hex\":\"&#018A;\",\"name\":\"LATIN CAPITAL LETTER D WITH HOOK\",\"char\":\"Ɗ\"},{\"hex\":\"&#018B;\",\"name\":\"LATIN CAPITAL LETTER D WITH TOPBAR\",\"char\":\"Ƌ\"},{\"hex\":\"&#018C;\",\"name\":\"LATIN SMALL LETTER D WITH TOPBAR\",\"char\":\"ƌ\"},{\"hex\":\"&#018D;\",\"name\":\"LATIN SMALL LETTER TURNED DELTA\",\"char\":\"ƍ\"},{\"hex\":\"&#018E;\",\"name\":\"LATIN CAPITAL LETTER REVERSED E\",\"char\":\"Ǝ\"},{\"hex\":\"&#018F;\",\"name\":\"LATIN CAPITAL LETTER SCHWA\",\"char\":\"Ə\"},{\"hex\":\"&#0190;\",\"name\":\"LATIN CAPITAL LETTER OPEN E\",\"char\":\"Ɛ\"},{\"hex\":\"&#0191;\",\"name\":\"LATIN CAPITAL LETTER F WITH HOOK\",\"char\":\"Ƒ\"},{\"entity\":\"&fnof;\",\"hex\":\"&#0192;\",\"name\":\"LATIN SMALL LETTER F WITH HOOK\",\"char\":\"ƒ\"},{\"hex\":\"&#0193;\",\"name\":\"LATIN CAPITAL LETTER G WITH HOOK\",\"char\":\"Ɠ\"},{\"hex\":\"&#0194;\",\"name\":\"LATIN CAPITAL LETTER GAMMA\",\"char\":\"Ɣ\"},{\"hex\":\"&#0195;\",\"name\":\"LATIN SMALL LETTER HV\",\"char\":\"ƕ\"},{\"hex\":\"&#0196;\",\"name\":\"LATIN CAPITAL LETTER IOTA\",\"char\":\"Ɩ\"},{\"hex\":\"&#0197;\",\"name\":\"LATIN CAPITAL LETTER I WITH STROKE\",\"char\":\"Ɨ\"},{\"hex\":\"&#0198;\",\"name\":\"LATIN CAPITAL LETTER K WITH HOOK\",\"char\":\"Ƙ\"},{\"hex\":\"&#0199;\",\"name\":\"LATIN SMALL LETTER K WITH HOOK\",\"char\":\"ƙ\"},{\"hex\":\"&#019A;\",\"name\":\"LATIN SMALL LETTER L WITH BAR\",\"char\":\"ƚ\"},{\"hex\":\"&#019B;\",\"name\":\"LATIN SMALL LETTER LAMBDA WITH STROKE\",\"char\":\"ƛ\"},{\"hex\":\"&#019C;\",\"name\":\"LATIN CAPITAL LETTER TURNED M\",\"char\":\"Ɯ\"},{\"hex\":\"&#019D;\",\"name\":\"LATIN CAPITAL LETTER N WITH LEFT HOOK\",\"char\":\"Ɲ\"},{\"hex\":\"&#019E;\",\"name\":\"LATIN SMALL LETTER N WITH LONG RIGHT LEG\",\"char\":\"ƞ\"},{\"hex\":\"&#019F;\",\"name\":\"LATIN CAPITAL LETTER O WITH MIDDLE TILDE\",\"char\":\"Ɵ\"},{\"hex\":\"&#01A0;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN\",\"char\":\"Ơ\"},{\"hex\":\"&#01A1;\",\"name\":\"LATIN SMALL LETTER O WITH HORN\",\"char\":\"ơ\"},{\"hex\":\"&#01A2;\",\"name\":\"LATIN CAPITAL LETTER OI\",\"char\":\"Ƣ\"},{\"hex\":\"&#01A3;\",\"name\":\"LATIN SMALL LETTER OI\",\"char\":\"ƣ\"},{\"hex\":\"&#01A4;\",\"name\":\"LATIN CAPITAL LETTER P WITH HOOK\",\"char\":\"Ƥ\"},{\"hex\":\"&#01A5;\",\"name\":\"LATIN SMALL LETTER P WITH HOOK\",\"char\":\"ƥ\"},{\"hex\":\"&#01A6;\",\"name\":\"LATIN LETTER YR\",\"char\":\"Ʀ\"},{\"hex\":\"&#01A7;\",\"name\":\"LATIN CAPITAL LETTER TONE TWO\",\"char\":\"Ƨ\"},{\"hex\":\"&#01A8;\",\"name\":\"LATIN SMALL LETTER TONE TWO\",\"char\":\"ƨ\"},{\"hex\":\"&#01A9;\",\"name\":\"LATIN CAPITAL LETTER ESH\",\"char\":\"Ʃ\"},{\"hex\":\"&#01AA;\",\"name\":\"LATIN LETTER REVERSED ESH LOOP\",\"char\":\"ƪ\"},{\"hex\":\"&#01AB;\",\"name\":\"LATIN SMALL LETTER T WITH PALATAL HOOK\",\"char\":\"ƫ\"},{\"hex\":\"&#01AC;\",\"name\":\"LATIN CAPITAL LETTER T WITH HOOK\",\"char\":\"Ƭ\"},{\"hex\":\"&#01AD;\",\"name\":\"LATIN SMALL LETTER T WITH HOOK\",\"char\":\"ƭ\"},{\"hex\":\"&#01AE;\",\"name\":\"LATIN CAPITAL LETTER T WITH RETROFLEX HOOK\",\"char\":\"Ʈ\"},{\"hex\":\"&#01AF;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN\",\"char\":\"Ư\"},{\"hex\":\"&#01B0;\",\"name\":\"LATIN SMALL LETTER U WITH HORN\",\"char\":\"ư\"},{\"hex\":\"&#01B1;\",\"name\":\"LATIN CAPITAL LETTER UPSILON\",\"char\":\"Ʊ\"},{\"hex\":\"&#01B2;\",\"name\":\"LATIN CAPITAL LETTER V WITH HOOK\",\"char\":\"Ʋ\"},{\"hex\":\"&#01B3;\",\"name\":\"LATIN CAPITAL LETTER Y WITH HOOK\",\"char\":\"Ƴ\"},{\"hex\":\"&#01B4;\",\"name\":\"LATIN SMALL LETTER Y WITH HOOK\",\"char\":\"ƴ\"},{\"hex\":\"&#01B5;\",\"name\":\"LATIN CAPITAL LETTER Z WITH STROKE\",\"char\":\"Ƶ\"},{\"hex\":\"&#01B6;\",\"name\":\"LATIN SMALL LETTER Z WITH STROKE\",\"char\":\"ƶ\"},{\"hex\":\"&#01B7;\",\"name\":\"LATIN CAPITAL LETTER EZH\",\"char\":\"Ʒ\"},{\"hex\":\"&#01B8;\",\"name\":\"LATIN CAPITAL LETTER EZH REVERSED\",\"char\":\"Ƹ\"},{\"hex\":\"&#01B9;\",\"name\":\"LATIN SMALL LETTER EZH REVERSED\",\"char\":\"ƹ\"},{\"hex\":\"&#01BA;\",\"name\":\"LATIN SMALL LETTER EZH WITH TAIL\",\"char\":\"ƺ\"},{\"hex\":\"&#01BB;\",\"name\":\"LATIN LETTER TWO WITH STROKE\",\"char\":\"ƻ\"},{\"hex\":\"&#01BC;\",\"name\":\"LATIN CAPITAL LETTER TONE FIVE\",\"char\":\"Ƽ\"},{\"hex\":\"&#01BD;\",\"name\":\"LATIN SMALL LETTER TONE FIVE\",\"char\":\"ƽ\"},{\"hex\":\"&#01BE;\",\"name\":\"LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE\",\"char\":\"ƾ\"},{\"hex\":\"&#01BF;\",\"name\":\"LATIN LETTER WYNN\",\"char\":\"ƿ\"},{\"hex\":\"&#01C0;\",\"name\":\"LATIN LETTER DENTAL CLICK\",\"char\":\"ǀ\"},{\"hex\":\"&#01C1;\",\"name\":\"LATIN LETTER LATERAL CLICK\",\"char\":\"ǁ\"},{\"hex\":\"&#01C2;\",\"name\":\"LATIN LETTER ALVEOLAR CLICK\",\"char\":\"ǂ\"},{\"hex\":\"&#01C3;\",\"name\":\"LATIN LETTER RETROFLEX CLICK\",\"char\":\"ǃ\"},{\"hex\":\"&#01C4;\",\"name\":\"LATIN CAPITAL LETTER DZ WITH CARON\",\"char\":\"Ǆ\"},{\"hex\":\"&#01C5;\",\"name\":\"LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON\",\"char\":\"ǅ\"},{\"hex\":\"&#01C6;\",\"name\":\"LATIN SMALL LETTER DZ WITH CARON\",\"char\":\"ǆ\"},{\"hex\":\"&#01C7;\",\"name\":\"LATIN CAPITAL LETTER LJ\",\"char\":\"Ǉ\"},{\"hex\":\"&#01C8;\",\"name\":\"LATIN CAPITAL LETTER L WITH SMALL LETTER J\",\"char\":\"ǈ\"},{\"hex\":\"&#01C9;\",\"name\":\"LATIN SMALL LETTER LJ\",\"char\":\"ǉ\"},{\"hex\":\"&#01CA;\",\"name\":\"LATIN CAPITAL LETTER NJ\",\"char\":\"Ǌ\"},{\"hex\":\"&#01CB;\",\"name\":\"LATIN CAPITAL LETTER N WITH SMALL LETTER J\",\"char\":\"ǋ\"},{\"hex\":\"&#01CC;\",\"name\":\"LATIN SMALL LETTER NJ\",\"char\":\"ǌ\"},{\"hex\":\"&#01CD;\",\"name\":\"LATIN CAPITAL LETTER A WITH CARON\",\"char\":\"Ǎ\"},{\"hex\":\"&#01CE;\",\"name\":\"LATIN SMALL LETTER A WITH CARON\",\"char\":\"ǎ\"},{\"hex\":\"&#01CF;\",\"name\":\"LATIN CAPITAL LETTER I WITH CARON\",\"char\":\"Ǐ\"},{\"hex\":\"&#01D0;\",\"name\":\"LATIN SMALL LETTER I WITH CARON\",\"char\":\"ǐ\"},{\"hex\":\"&#01D1;\",\"name\":\"LATIN CAPITAL LETTER O WITH CARON\",\"char\":\"Ǒ\"},{\"hex\":\"&#01D2;\",\"name\":\"LATIN SMALL LETTER O WITH CARON\",\"char\":\"ǒ\"},{\"hex\":\"&#01D3;\",\"name\":\"LATIN CAPITAL LETTER U WITH CARON\",\"char\":\"Ǔ\"},{\"hex\":\"&#01D4;\",\"name\":\"LATIN SMALL LETTER U WITH CARON\",\"char\":\"ǔ\"},{\"hex\":\"&#01D5;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND MACRON\",\"char\":\"Ǖ\"},{\"hex\":\"&#01D6;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND MACRON\",\"char\":\"ǖ\"},{\"hex\":\"&#01D7;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND ACUTE\",\"char\":\"Ǘ\"},{\"hex\":\"&#01D8;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE\",\"char\":\"ǘ\"},{\"hex\":\"&#01D9;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND CARON\",\"char\":\"Ǚ\"},{\"hex\":\"&#01DA;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND CARON\",\"char\":\"ǚ\"},{\"hex\":\"&#01DB;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND GRAVE\",\"char\":\"Ǜ\"},{\"hex\":\"&#01DC;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE\",\"char\":\"ǜ\"},{\"hex\":\"&#01DD;\",\"name\":\"LATIN SMALL LETTER TURNED E\",\"char\":\"ǝ\"},{\"hex\":\"&#01DE;\",\"name\":\"LATIN CAPITAL LETTER A WITH DIAERESIS AND MACRON\",\"char\":\"Ǟ\"},{\"hex\":\"&#01DF;\",\"name\":\"LATIN SMALL LETTER A WITH DIAERESIS AND MACRON\",\"char\":\"ǟ\"},{\"hex\":\"&#01E0;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT ABOVE AND MACRON\",\"char\":\"Ǡ\"},{\"hex\":\"&#01E1;\",\"name\":\"LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON\",\"char\":\"ǡ\"},{\"hex\":\"&#01E2;\",\"name\":\"LATIN CAPITAL LETTER AE WITH MACRON\",\"char\":\"Ǣ\"},{\"hex\":\"&#01E3;\",\"name\":\"LATIN SMALL LETTER AE WITH MACRON\",\"char\":\"ǣ\"},{\"hex\":\"&#01E4;\",\"name\":\"LATIN CAPITAL LETTER G WITH STROKE\",\"char\":\"Ǥ\"},{\"hex\":\"&#01E5;\",\"name\":\"LATIN SMALL LETTER G WITH STROKE\",\"char\":\"ǥ\"},{\"hex\":\"&#01E6;\",\"name\":\"LATIN CAPITAL LETTER G WITH CARON\",\"char\":\"Ǧ\"},{\"hex\":\"&#01E7;\",\"name\":\"LATIN SMALL LETTER G WITH CARON\",\"char\":\"ǧ\"},{\"hex\":\"&#01E8;\",\"name\":\"LATIN CAPITAL LETTER K WITH CARON\",\"char\":\"Ǩ\"},{\"hex\":\"&#01E9;\",\"name\":\"LATIN SMALL LETTER K WITH CARON\",\"char\":\"ǩ\"},{\"hex\":\"&#01EA;\",\"name\":\"LATIN CAPITAL LETTER O WITH OGONEK\",\"char\":\"Ǫ\"},{\"hex\":\"&#01EB;\",\"name\":\"LATIN SMALL LETTER O WITH OGONEK\",\"char\":\"ǫ\"},{\"hex\":\"&#01EC;\",\"name\":\"LATIN CAPITAL LETTER O WITH OGONEK AND MACRON\",\"char\":\"Ǭ\"},{\"hex\":\"&#01ED;\",\"name\":\"LATIN SMALL LETTER O WITH OGONEK AND MACRON\",\"char\":\"ǭ\"},{\"hex\":\"&#01EE;\",\"name\":\"LATIN CAPITAL LETTER EZH WITH CARON\",\"char\":\"Ǯ\"},{\"hex\":\"&#01EF;\",\"name\":\"LATIN SMALL LETTER EZH WITH CARON\",\"char\":\"ǯ\"},{\"hex\":\"&#01F0;\",\"name\":\"LATIN SMALL LETTER J WITH CARON\",\"char\":\"ǰ\"},{\"hex\":\"&#01F1;\",\"name\":\"LATIN CAPITAL LETTER DZ\",\"char\":\"Ǳ\"},{\"hex\":\"&#01F2;\",\"name\":\"LATIN CAPITAL LETTER D WITH SMALL LETTER Z\",\"char\":\"ǲ\"},{\"hex\":\"&#01F3;\",\"name\":\"LATIN SMALL LETTER DZ\",\"char\":\"ǳ\"},{\"hex\":\"&#01F4;\",\"name\":\"LATIN CAPITAL LETTER G WITH ACUTE\",\"char\":\"Ǵ\"},{\"hex\":\"&#01F5;\",\"name\":\"LATIN SMALL LETTER G WITH ACUTE\",\"char\":\"ǵ\"},{\"hex\":\"&#01F6;\",\"name\":\"LATIN CAPITAL LETTER HWAIR\",\"char\":\"Ƕ\"},{\"hex\":\"&#01F7;\",\"name\":\"LATIN CAPITAL LETTER WYNN\",\"char\":\"Ƿ\"},{\"hex\":\"&#01F8;\",\"name\":\"LATIN CAPITAL LETTER N WITH GRAVE\",\"char\":\"Ǹ\"},{\"hex\":\"&#01F9;\",\"name\":\"LATIN SMALL LETTER N WITH GRAVE\",\"char\":\"ǹ\"},{\"hex\":\"&#01FA;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)\",\"char\":\"Ǻ\"},{\"hex\":\"&#01FB;\",\"name\":\"LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)\",\"char\":\"ǻ\"},{\"hex\":\"&#01FC;\",\"name\":\"LATIN CAPITAL LETTER AE WITH ACUTE (present in WGL4)\",\"char\":\"Ǽ\"},{\"hex\":\"&#01FD;\",\"name\":\"LATIN SMALL LETTER AE WITH ACUTE (present in WGL4)\",\"char\":\"ǽ\"},{\"hex\":\"&#01FE;\",\"name\":\"LATIN CAPITAL LETTER O WITH STROKE AND ACUTE (present in WGL4)\",\"char\":\"Ǿ\"},{\"hex\":\"&#01FF;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE AND ACUTE (present in WGL4)\",\"char\":\"ǿ\"},{\"hex\":\"&#0200;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOUBLE GRAVE\",\"char\":\"Ȁ\"},{\"hex\":\"&#0201;\",\"name\":\"LATIN SMALL LETTER A WITH DOUBLE GRAVE\",\"char\":\"ȁ\"},{\"hex\":\"&#0202;\",\"name\":\"LATIN CAPITAL LETTER A WITH INVERTED BREVE\",\"char\":\"Ȃ\"},{\"hex\":\"&#0203;\",\"name\":\"LATIN SMALL LETTER A WITH INVERTED BREVE\",\"char\":\"ȃ\"},{\"hex\":\"&#0204;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOUBLE GRAVE\",\"char\":\"Ȅ\"},{\"hex\":\"&#0205;\",\"name\":\"LATIN SMALL LETTER E WITH DOUBLE GRAVE\",\"char\":\"ȅ\"},{\"hex\":\"&#0206;\",\"name\":\"LATIN CAPITAL LETTER E WITH INVERTED BREVE\",\"char\":\"Ȇ\"},{\"hex\":\"&#0207;\",\"name\":\"LATIN SMALL LETTER E WITH INVERTED BREVE\",\"char\":\"ȇ\"},{\"hex\":\"&#0208;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOUBLE GRAVE\",\"char\":\"Ȉ\"},{\"hex\":\"&#0209;\",\"name\":\"LATIN SMALL LETTER I WITH DOUBLE GRAVE\",\"char\":\"ȉ\"},{\"hex\":\"&#020A;\",\"name\":\"LATIN CAPITAL LETTER I WITH INVERTED BREVE\",\"char\":\"Ȋ\"},{\"hex\":\"&#020B;\",\"name\":\"LATIN SMALL LETTER I WITH INVERTED BREVE\",\"char\":\"ȋ\"},{\"hex\":\"&#020C;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOUBLE GRAVE\",\"char\":\"Ȍ\"},{\"hex\":\"&#020D;\",\"name\":\"LATIN SMALL LETTER O WITH DOUBLE GRAVE\",\"char\":\"ȍ\"},{\"hex\":\"&#020E;\",\"name\":\"LATIN CAPITAL LETTER O WITH INVERTED BREVE\",\"char\":\"Ȏ\"},{\"hex\":\"&#020F;\",\"name\":\"LATIN SMALL LETTER O WITH INVERTED BREVE\",\"char\":\"ȏ\"},{\"hex\":\"&#0210;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOUBLE GRAVE\",\"char\":\"Ȑ\"},{\"hex\":\"&#0211;\",\"name\":\"LATIN SMALL LETTER R WITH DOUBLE GRAVE\",\"char\":\"ȑ\"},{\"hex\":\"&#0212;\",\"name\":\"LATIN CAPITAL LETTER R WITH INVERTED BREVE\",\"char\":\"Ȓ\"},{\"hex\":\"&#0213;\",\"name\":\"LATIN SMALL LETTER R WITH INVERTED BREVE\",\"char\":\"ȓ\"},{\"hex\":\"&#0214;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOUBLE GRAVE\",\"char\":\"Ȕ\"},{\"hex\":\"&#0215;\",\"name\":\"LATIN SMALL LETTER U WITH DOUBLE GRAVE\",\"char\":\"ȕ\"},{\"hex\":\"&#0216;\",\"name\":\"LATIN CAPITAL LETTER U WITH INVERTED BREVE\",\"char\":\"Ȗ\"},{\"hex\":\"&#0217;\",\"name\":\"LATIN SMALL LETTER U WITH INVERTED BREVE\",\"char\":\"ȗ\"},{\"hex\":\"&#0218;\",\"name\":\"LATIN CAPITAL LETTER S WITH COMMA BELOW\",\"char\":\"Ș\"},{\"hex\":\"&#0219;\",\"name\":\"LATIN SMALL LETTER S WITH COMMA BELOW\",\"char\":\"ș\"},{\"hex\":\"&#021A;\",\"name\":\"LATIN CAPITAL LETTER T WITH COMMA BELOW\",\"char\":\"Ț\"},{\"hex\":\"&#021B;\",\"name\":\"LATIN SMALL LETTER T WITH COMMA BELOW\",\"char\":\"ț\"},{\"hex\":\"&#021C;\",\"name\":\"LATIN CAPITAL LETTER YOGH\",\"char\":\"Ȝ\"},{\"hex\":\"&#021D;\",\"name\":\"LATIN SMALL LETTER YOGH\",\"char\":\"ȝ\"},{\"hex\":\"&#021E;\",\"name\":\"LATIN CAPITAL LETTER H WITH CARON\",\"char\":\"Ȟ\"},{\"hex\":\"&#021F;\",\"name\":\"LATIN SMALL LETTER H WITH CARON\",\"char\":\"ȟ\"},{\"hex\":\"&#0220;\",\"name\":\"LATIN CAPITAL LETTER N WITH LONG RIGHT LEG\",\"char\":\"Ƞ\"},{\"hex\":\"&#0221;\",\"name\":\"LATIN SMALL LETTER D WITH CURL\",\"char\":\"ȡ\"},{\"hex\":\"&#0222;\",\"name\":\"LATIN CAPITAL LETTER OU\",\"char\":\"Ȣ\"},{\"hex\":\"&#0223;\",\"name\":\"LATIN SMALL LETTER OU\",\"char\":\"ȣ\"},{\"hex\":\"&#0224;\",\"name\":\"LATIN CAPITAL LETTER Z WITH HOOK\",\"char\":\"Ȥ\"},{\"hex\":\"&#0225;\",\"name\":\"LATIN SMALL LETTER Z WITH HOOK\",\"char\":\"ȥ\"},{\"hex\":\"&#0226;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT ABOVE\",\"char\":\"Ȧ\"},{\"hex\":\"&#0227;\",\"name\":\"LATIN SMALL LETTER A WITH DOT ABOVE\",\"char\":\"ȧ\"},{\"hex\":\"&#0228;\",\"name\":\"LATIN CAPITAL LETTER E WITH CEDILLA\",\"char\":\"Ȩ\"},{\"hex\":\"&#0229;\",\"name\":\"LATIN SMALL LETTER E WITH CEDILLA\",\"char\":\"ȩ\"},{\"hex\":\"&#022A;\",\"name\":\"LATIN CAPITAL LETTER O WITH DIAERESIS AND MACRON\",\"char\":\"Ȫ\"},{\"hex\":\"&#022B;\",\"name\":\"LATIN SMALL LETTER O WITH DIAERESIS AND MACRON\",\"char\":\"ȫ\"},{\"hex\":\"&#022C;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND MACRON\",\"char\":\"Ȭ\"},{\"hex\":\"&#022D;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND MACRON\",\"char\":\"ȭ\"},{\"hex\":\"&#022E;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT ABOVE\",\"char\":\"Ȯ\"},{\"hex\":\"&#022F;\",\"name\":\"LATIN SMALL LETTER O WITH DOT ABOVE\",\"char\":\"ȯ\"},{\"hex\":\"&#0230;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT ABOVE AND MACRON\",\"char\":\"Ȱ\"},{\"hex\":\"&#0231;\",\"name\":\"LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON\",\"char\":\"ȱ\"},{\"hex\":\"&#0232;\",\"name\":\"LATIN CAPITAL LETTER Y WITH MACRON\",\"char\":\"Ȳ\"},{\"hex\":\"&#0233;\",\"name\":\"LATIN SMALL LETTER Y WITH MACRON\",\"char\":\"ȳ\"},{\"hex\":\"&#0234;\",\"name\":\"LATIN SMALL LETTER L WITH CURL\",\"char\":\"ȴ\"},{\"hex\":\"&#0235;\",\"name\":\"LATIN SMALL LETTER N WITH CURL\",\"char\":\"ȵ\"},{\"hex\":\"&#0236;\",\"name\":\"LATIN SMALL LETTER T WITH CURL\",\"char\":\"ȶ\"},{\"hex\":\"&#0237;\",\"name\":\"LATIN SMALL LETTER DOTLESS J\",\"char\":\"ȷ\"},{\"hex\":\"&#0238;\",\"name\":\"LATIN SMALL LETTER DB DIGRAPH\",\"char\":\"ȸ\"},{\"hex\":\"&#0239;\",\"name\":\"LATIN SMALL LETTER QP DIGRAPH\",\"char\":\"ȹ\"},{\"hex\":\"&#023A;\",\"name\":\"LATIN CAPITAL LETTER A WITH STROKE\",\"char\":\"Ⱥ\"},{\"hex\":\"&#023B;\",\"name\":\"LATIN CAPITAL LETTER C WITH STROKE\",\"char\":\"Ȼ\"},{\"hex\":\"&#023C;\",\"name\":\"LATIN SMALL LETTER C WITH STROKE\",\"char\":\"ȼ\"},{\"hex\":\"&#023D;\",\"name\":\"LATIN CAPITAL LETTER L WITH BAR\",\"char\":\"Ƚ\"},{\"hex\":\"&#023E;\",\"name\":\"LATIN CAPITAL LETTER T WITH DIAGONAL STROKE\",\"char\":\"Ⱦ\"},{\"hex\":\"&#023F;\",\"name\":\"LATIN SMALL LETTER S WITH SWASH TAIL\",\"char\":\"ȿ\"},{\"hex\":\"&#0240;\",\"name\":\"LATIN SMALL LETTER Z WITH SWASH TAIL\",\"char\":\"ɀ\"},{\"hex\":\"&#0241;\",\"name\":\"LATIN CAPITAL LETTER GLOTTAL STOP\",\"char\":\"Ɂ\"},{\"hex\":\"&#0242;\",\"name\":\"LATIN SMALL LETTER GLOTTAL STOP\",\"char\":\"ɂ\"},{\"hex\":\"&#0243;\",\"name\":\"LATIN CAPITAL LETTER B WITH STROKE\",\"char\":\"Ƀ\"},{\"hex\":\"&#0244;\",\"name\":\"LATIN CAPITAL LETTER U BAR\",\"char\":\"Ʉ\"},{\"hex\":\"&#0245;\",\"name\":\"LATIN CAPITAL LETTER TURNED V\",\"char\":\"Ʌ\"},{\"hex\":\"&#0246;\",\"name\":\"LATIN CAPITAL LETTER E WITH STROKE\",\"char\":\"Ɇ\"},{\"hex\":\"&#0247;\",\"name\":\"LATIN SMALL LETTER E WITH STROKE\",\"char\":\"ɇ\"},{\"hex\":\"&#0248;\",\"name\":\"LATIN CAPITAL LETTER J WITH STROKE\",\"char\":\"Ɉ\"},{\"hex\":\"&#0249;\",\"name\":\"LATIN SMALL LETTER J WITH STROKE\",\"char\":\"ɉ\"},{\"hex\":\"&#024A;\",\"name\":\"LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL\",\"char\":\"Ɋ\"},{\"hex\":\"&#024B;\",\"name\":\"LATIN SMALL LETTER Q WITH HOOK TAIL\",\"char\":\"ɋ\"},{\"hex\":\"&#024C;\",\"name\":\"LATIN CAPITAL LETTER R WITH STROKE\",\"char\":\"Ɍ\"},{\"hex\":\"&#024D;\",\"name\":\"LATIN SMALL LETTER R WITH STROKE\",\"char\":\"ɍ\"},{\"hex\":\"&#024E;\",\"name\":\"LATIN CAPITAL LETTER Y WITH STROKE\",\"char\":\"Ɏ\"},{\"hex\":\"&#024F;\",\"name\":\"LATIN SMALL LETTER Y WITH STROKE\",\"char\":\"ɏ\"},{\"hex\":\"&#2C60;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOUBLE BAR\",\"char\":\"Ⱡ\"},{\"hex\":\"&#2C61;\",\"name\":\"LATIN SMALL LETTER L WITH DOUBLE BAR\",\"char\":\"ⱡ\"},{\"hex\":\"&#2C62;\",\"name\":\"LATIN CAPITAL LETTER L WITH MIDDLE TILDE\",\"char\":\"Ɫ\"},{\"hex\":\"&#2C63;\",\"name\":\"LATIN CAPITAL LETTER P WITH STROKE\",\"char\":\"Ᵽ\"},{\"hex\":\"&#2C64;\",\"name\":\"LATIN CAPITAL LETTER R WITH TAIL\",\"char\":\"Ɽ\"},{\"hex\":\"&#2C65;\",\"name\":\"LATIN SMALL LETTER A WITH STROKE\",\"char\":\"ⱥ\"},{\"hex\":\"&#2C66;\",\"name\":\"LATIN SMALL LETTER T WITH DIAGONAL STROKE\",\"char\":\"ⱦ\"},{\"hex\":\"&#2C67;\",\"name\":\"LATIN CAPITAL LETTER H WITH DESCENDER\",\"char\":\"Ⱨ\"},{\"hex\":\"&#2C68;\",\"name\":\"LATIN SMALL LETTER H WITH DESCENDER\",\"char\":\"ⱨ\"},{\"hex\":\"&#2C69;\",\"name\":\"LATIN CAPITAL LETTER K WITH DESCENDER\",\"char\":\"Ⱪ\"},{\"hex\":\"&#2C6A;\",\"name\":\"LATIN SMALL LETTER K WITH DESCENDER\",\"char\":\"ⱪ\"},{\"hex\":\"&#2C6B;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DESCENDER\",\"char\":\"Ⱬ\"},{\"hex\":\"&#2C6C;\",\"name\":\"LATIN SMALL LETTER Z WITH DESCENDER\",\"char\":\"ⱬ\"},{\"hex\":\"&#2C6D;\",\"name\":\"LATIN CAPITAL LETTER ALPHA\",\"char\":\"Ɑ\"},{\"hex\":\"&#2C6E;\",\"name\":\"LATIN CAPITAL LETTER M WITH HOOK\",\"char\":\"Ɱ\"},{\"hex\":\"&#2C6F;\",\"name\":\"LATIN CAPITAL LETTER TURNED A\",\"char\":\"Ɐ\"},{\"hex\":\"&#2C70;\",\"name\":\"LATIN CAPITAL LETTER TURNED ALPHA\",\"char\":\"Ɒ\"},{\"hex\":\"&#2C71;\",\"name\":\"LATIN SMALL LETTER V WITH RIGHT HOOK\",\"char\":\"ⱱ\"},{\"hex\":\"&#2C72;\",\"name\":\"LATIN CAPITAL LETTER W WITH HOOK\",\"char\":\"Ⱳ\"},{\"hex\":\"&#2C73;\",\"name\":\"LATIN SMALL LETTER W WITH HOOK\",\"char\":\"ⱳ\"},{\"hex\":\"&#2C74;\",\"name\":\"LATIN SMALL LETTER V WITH CURL\",\"char\":\"ⱴ\"},{\"hex\":\"&#2C75;\",\"name\":\"LATIN CAPITAL LETTER HALF H\",\"char\":\"Ⱶ\"},{\"hex\":\"&#2C76;\",\"name\":\"LATIN SMALL LETTER HALF H\",\"char\":\"ⱶ\"},{\"hex\":\"&#2C77;\",\"name\":\"LATIN SMALL LETTER TAILLESS PHI\",\"char\":\"ⱷ\"},{\"hex\":\"&#2C78;\",\"name\":\"LATIN SMALL LETTER E WITH NOTCH\",\"char\":\"ⱸ\"},{\"hex\":\"&#2C79;\",\"name\":\"LATIN SMALL LETTER TURNED R WITH TAIL\",\"char\":\"ⱹ\"},{\"hex\":\"&#2C7A;\",\"name\":\"LATIN SMALL LETTER O WITH LOW RING INSIDE\",\"char\":\"ⱺ\"},{\"hex\":\"&#2C7B;\",\"name\":\"LATIN LETTER SMALL CAPITAL TURNED E\",\"char\":\"ⱻ\"},{\"hex\":\"&#2C7C;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER J\",\"char\":\"ⱼ\"},{\"hex\":\"&#2C7D;\",\"name\":\"MODIFIER LETTER CAPITAL V\",\"char\":\"ⱽ\"},{\"hex\":\"&#2C7E;\",\"name\":\"LATIN CAPITAL LETTER S WITH SWASH TAIL\",\"char\":\"Ȿ\"},{\"hex\":\"&#2C7F;\",\"name\":\"LATIN CAPITAL LETTER Z WITH SWASH TAIL\",\"char\":\"Ɀ\"},{\"hex\":\"&#A720;\",\"name\":\"MODIFIER LETTER STRESS AND HIGH TONE\",\"char\":\"꜠\"},{\"hex\":\"&#A721;\",\"name\":\"MODIFIER LETTER STRESS AND LOW TONE\",\"char\":\"꜡\"},{\"hex\":\"&#A722;\",\"name\":\"LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF\",\"char\":\"Ꜣ\"},{\"hex\":\"&#A723;\",\"name\":\"LATIN SMALL LETTER EGYPTOLOGICAL ALEF\",\"char\":\"ꜣ\"},{\"hex\":\"&#A724;\",\"name\":\"LATIN CAPITAL LETTER EGYPTOLOGICAL AIN\",\"char\":\"Ꜥ\"},{\"hex\":\"&#A725;\",\"name\":\"LATIN SMALL LETTER EGYPTOLOGICAL AIN\",\"char\":\"ꜥ\"},{\"hex\":\"&#A726;\",\"name\":\"LATIN CAPITAL LETTER HENG\",\"char\":\"Ꜧ\"},{\"hex\":\"&#A727;\",\"name\":\"LATIN SMALL LETTER HENG\",\"char\":\"ꜧ\"},{\"hex\":\"&#A728;\",\"name\":\"LATIN CAPITAL LETTER TZ\",\"char\":\"Ꜩ\"},{\"hex\":\"&#A729;\",\"name\":\"LATIN SMALL LETTER TZ\",\"char\":\"ꜩ\"},{\"hex\":\"&#A72A;\",\"name\":\"LATIN CAPITAL LETTER TRESILLO\",\"char\":\"Ꜫ\"},{\"hex\":\"&#A72B;\",\"name\":\"LATIN SMALL LETTER TRESILLO\",\"char\":\"ꜫ\"},{\"hex\":\"&#A72C;\",\"name\":\"LATIN CAPITAL LETTER CUATRILLO\",\"char\":\"Ꜭ\"},{\"hex\":\"&#A72D;\",\"name\":\"LATIN SMALL LETTER CUATRILLO\",\"char\":\"ꜭ\"},{\"hex\":\"&#A72E;\",\"name\":\"LATIN CAPITAL LETTER CUATRILLO WITH COMMA\",\"char\":\"Ꜯ\"},{\"hex\":\"&#A72F;\",\"name\":\"LATIN SMALL LETTER CUATRILLO WITH COMMA\",\"char\":\"ꜯ\"},{\"hex\":\"&#A730;\",\"name\":\"LATIN LETTER SMALL CAPITAL F\",\"char\":\"ꜰ\"},{\"hex\":\"&#A731;\",\"name\":\"LATIN LETTER SMALL CAPITAL S\",\"char\":\"ꜱ\"},{\"hex\":\"&#A732;\",\"name\":\"LATIN CAPITAL LETTER AA\",\"char\":\"Ꜳ\"},{\"hex\":\"&#A733;\",\"name\":\"LATIN SMALL LETTER AA\",\"char\":\"ꜳ\"},{\"hex\":\"&#A734;\",\"name\":\"LATIN CAPITAL LETTER AO\",\"char\":\"Ꜵ\"},{\"hex\":\"&#A735;\",\"name\":\"LATIN SMALL LETTER AO\",\"char\":\"ꜵ\"},{\"hex\":\"&#A736;\",\"name\":\"LATIN CAPITAL LETTER AU\",\"char\":\"Ꜷ\"},{\"hex\":\"&#A737;\",\"name\":\"LATIN SMALL LETTER AU\",\"char\":\"ꜷ\"},{\"hex\":\"&#A738;\",\"name\":\"LATIN CAPITAL LETTER AV\",\"char\":\"Ꜹ\"},{\"hex\":\"&#A739;\",\"name\":\"LATIN SMALL LETTER AV\",\"char\":\"ꜹ\"},{\"hex\":\"&#A73A;\",\"name\":\"LATIN CAPITAL LETTER AV WITH HORIZONTAL BAR\",\"char\":\"Ꜻ\"},{\"hex\":\"&#A73B;\",\"name\":\"LATIN SMALL LETTER AV WITH HORIZONTAL BAR\",\"char\":\"ꜻ\"},{\"hex\":\"&#A73C;\",\"name\":\"LATIN CAPITAL LETTER AY\",\"char\":\"Ꜽ\"},{\"hex\":\"&#A73D;\",\"name\":\"LATIN SMALL LETTER AY\",\"char\":\"ꜽ\"},{\"hex\":\"&#A73E;\",\"name\":\"LATIN CAPITAL LETTER REVERSED C WITH DOT\",\"char\":\"Ꜿ\"},{\"hex\":\"&#A73F;\",\"name\":\"LATIN SMALL LETTER REVERSED C WITH DOT\",\"char\":\"ꜿ\"},{\"hex\":\"&#A740;\",\"name\":\"LATIN CAPITAL LETTER K WITH STROKE\",\"char\":\"Ꝁ\"},{\"hex\":\"&#A741;\",\"name\":\"LATIN SMALL LETTER K WITH STROKE\",\"char\":\"ꝁ\"},{\"hex\":\"&#A742;\",\"name\":\"LATIN CAPITAL LETTER K WITH DIAGONAL STROKE\",\"char\":\"Ꝃ\"},{\"hex\":\"&#A743;\",\"name\":\"LATIN SMALL LETTER K WITH DIAGONAL STROKE\",\"char\":\"ꝃ\"},{\"hex\":\"&#A744;\",\"name\":\"LATIN CAPITAL LETTER K WITH STROKE AND DIAGONAL STROKE\",\"char\":\"Ꝅ\"},{\"hex\":\"&#A745;\",\"name\":\"LATIN SMALL LETTER K WITH STROKE AND DIAGONAL STROKE\",\"char\":\"ꝅ\"},{\"hex\":\"&#A746;\",\"name\":\"LATIN CAPITAL LETTER BROKEN L\",\"char\":\"Ꝇ\"},{\"hex\":\"&#A747;\",\"name\":\"LATIN SMALL LETTER BROKEN L\",\"char\":\"ꝇ\"},{\"hex\":\"&#A748;\",\"name\":\"LATIN CAPITAL LETTER L WITH HIGH STROKE\",\"char\":\"Ꝉ\"},{\"hex\":\"&#A749;\",\"name\":\"LATIN SMALL LETTER L WITH HIGH STROKE\",\"char\":\"ꝉ\"},{\"hex\":\"&#A74A;\",\"name\":\"LATIN CAPITAL LETTER O WITH LONG STROKE OVERLAY\",\"char\":\"Ꝋ\"},{\"hex\":\"&#A74B;\",\"name\":\"LATIN SMALL LETTER O WITH LONG STROKE OVERLAY\",\"char\":\"ꝋ\"},{\"hex\":\"&#A74C;\",\"name\":\"LATIN CAPITAL LETTER O WITH LOOP\",\"char\":\"Ꝍ\"},{\"hex\":\"&#A74D;\",\"name\":\"LATIN SMALL LETTER O WITH LOOP\",\"char\":\"ꝍ\"},{\"hex\":\"&#A74E;\",\"name\":\"LATIN CAPITAL LETTER OO\",\"char\":\"Ꝏ\"},{\"hex\":\"&#A74F;\",\"name\":\"LATIN SMALL LETTER OO\",\"char\":\"ꝏ\"},{\"hex\":\"&#A750;\",\"name\":\"LATIN CAPITAL LETTER P WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝑ\"},{\"hex\":\"&#A751;\",\"name\":\"LATIN SMALL LETTER P WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝑ\"},{\"hex\":\"&#A752;\",\"name\":\"LATIN CAPITAL LETTER P WITH FLOURISH\",\"char\":\"Ꝓ\"},{\"hex\":\"&#A753;\",\"name\":\"LATIN SMALL LETTER P WITH FLOURISH\",\"char\":\"ꝓ\"},{\"hex\":\"&#A754;\",\"name\":\"LATIN CAPITAL LETTER P WITH SQUIRREL TAIL\",\"char\":\"Ꝕ\"},{\"hex\":\"&#A755;\",\"name\":\"LATIN SMALL LETTER P WITH SQUIRREL TAIL\",\"char\":\"ꝕ\"},{\"hex\":\"&#A756;\",\"name\":\"LATIN CAPITAL LETTER Q WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝗ\"},{\"hex\":\"&#A757;\",\"name\":\"LATIN SMALL LETTER Q WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝗ\"},{\"hex\":\"&#A758;\",\"name\":\"LATIN CAPITAL LETTER Q WITH DIAGONAL STROKE\",\"char\":\"Ꝙ\"},{\"hex\":\"&#A759;\",\"name\":\"LATIN SMALL LETTER Q WITH DIAGONAL STROKE\",\"char\":\"ꝙ\"},{\"hex\":\"&#A75A;\",\"name\":\"LATIN CAPITAL LETTER R ROTUNDA\",\"char\":\"Ꝛ\"},{\"hex\":\"&#A75B;\",\"name\":\"LATIN SMALL LETTER R ROTUNDA\",\"char\":\"ꝛ\"},{\"hex\":\"&#A75C;\",\"name\":\"LATIN CAPITAL LETTER RUM ROTUNDA\",\"char\":\"Ꝝ\"},{\"hex\":\"&#A75D;\",\"name\":\"LATIN SMALL LETTER RUM ROTUNDA\",\"char\":\"ꝝ\"},{\"hex\":\"&#A75E;\",\"name\":\"LATIN CAPITAL LETTER V WITH DIAGONAL STROKE\",\"char\":\"Ꝟ\"},{\"hex\":\"&#A75F;\",\"name\":\"LATIN SMALL LETTER V WITH DIAGONAL STROKE\",\"char\":\"ꝟ\"},{\"hex\":\"&#A760;\",\"name\":\"LATIN CAPITAL LETTER VY\",\"char\":\"Ꝡ\"},{\"hex\":\"&#A761;\",\"name\":\"LATIN SMALL LETTER VY\",\"char\":\"ꝡ\"},{\"hex\":\"&#A762;\",\"name\":\"LATIN CAPITAL LETTER VISIGOTHIC Z\",\"char\":\"Ꝣ\"},{\"hex\":\"&#A763;\",\"name\":\"LATIN SMALL LETTER VISIGOTHIC Z\",\"char\":\"ꝣ\"},{\"hex\":\"&#A764;\",\"name\":\"LATIN CAPITAL LETTER THORN WITH STROKE\",\"char\":\"Ꝥ\"},{\"hex\":\"&#A765;\",\"name\":\"LATIN SMALL LETTER THORN WITH STROKE\",\"char\":\"ꝥ\"},{\"hex\":\"&#A766;\",\"name\":\"LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝧ\"},{\"hex\":\"&#A767;\",\"name\":\"LATIN SMALL LETTER THORN WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝧ\"},{\"hex\":\"&#A768;\",\"name\":\"LATIN CAPITAL LETTER VEND\",\"char\":\"Ꝩ\"},{\"hex\":\"&#A769;\",\"name\":\"LATIN SMALL LETTER VEND\",\"char\":\"ꝩ\"},{\"hex\":\"&#A76A;\",\"name\":\"LATIN CAPITAL LETTER ET\",\"char\":\"Ꝫ\"},{\"hex\":\"&#A76B;\",\"name\":\"LATIN SMALL LETTER ET\",\"char\":\"ꝫ\"},{\"hex\":\"&#A76C;\",\"name\":\"LATIN CAPITAL LETTER IS\",\"char\":\"Ꝭ\"},{\"hex\":\"&#A76D;\",\"name\":\"LATIN SMALL LETTER IS\",\"char\":\"ꝭ\"},{\"hex\":\"&#A76E;\",\"name\":\"LATIN CAPITAL LETTER CON\",\"char\":\"Ꝯ\"},{\"hex\":\"&#A76F;\",\"name\":\"LATIN SMALL LETTER CON\",\"char\":\"ꝯ\"},{\"hex\":\"&#A770;\",\"name\":\"MODIFIER LETTER US\",\"char\":\"ꝰ\"},{\"hex\":\"&#A771;\",\"name\":\"LATIN SMALL LETTER DUM\",\"char\":\"ꝱ\"},{\"hex\":\"&#A772;\",\"name\":\"LATIN SMALL LETTER LUM\",\"char\":\"ꝲ\"},{\"hex\":\"&#A773;\",\"name\":\"LATIN SMALL LETTER MUM\",\"char\":\"ꝳ\"},{\"hex\":\"&#A774;\",\"name\":\"LATIN SMALL LETTER NUM\",\"char\":\"ꝴ\"},{\"hex\":\"&#A775;\",\"name\":\"LATIN SMALL LETTER RUM\",\"char\":\"ꝵ\"},{\"hex\":\"&#A776;\",\"name\":\"LATIN LETTER SMALL CAPITAL RUM\",\"char\":\"ꝶ\"},{\"hex\":\"&#A777;\",\"name\":\"LATIN SMALL LETTER TUM\",\"char\":\"ꝷ\"},{\"hex\":\"&#A778;\",\"name\":\"LATIN SMALL LETTER UM\",\"char\":\"ꝸ\"},{\"hex\":\"&#A779;\",\"name\":\"LATIN CAPITAL LETTER INSULAR D\",\"char\":\"Ꝺ\"},{\"hex\":\"&#A77A;\",\"name\":\"LATIN SMALL LETTER INSULAR D\",\"char\":\"ꝺ\"},{\"hex\":\"&#A77B;\",\"name\":\"LATIN CAPITAL LETTER INSULAR F\",\"char\":\"Ꝼ\"},{\"hex\":\"&#A77C;\",\"name\":\"LATIN SMALL LETTER INSULAR F\",\"char\":\"ꝼ\"},{\"hex\":\"&#A77D;\",\"name\":\"LATIN CAPITAL LETTER INSULAR G\",\"char\":\"Ᵹ\"},{\"hex\":\"&#A77E;\",\"name\":\"LATIN CAPITAL LETTER TURNED INSULAR G\",\"char\":\"Ꝿ\"},{\"hex\":\"&#A77F;\",\"name\":\"LATIN SMALL LETTER TURNED INSULAR G\",\"char\":\"ꝿ\"},{\"hex\":\"&#A780;\",\"name\":\"LATIN CAPITAL LETTER TURNED L\",\"char\":\"Ꞁ\"},{\"hex\":\"&#A781;\",\"name\":\"LATIN SMALL LETTER TURNED L\",\"char\":\"ꞁ\"},{\"hex\":\"&#A782;\",\"name\":\"LATIN CAPITAL LETTER INSULAR R\",\"char\":\"Ꞃ\"},{\"hex\":\"&#A783;\",\"name\":\"LATIN SMALL LETTER INSULAR R\",\"char\":\"ꞃ\"},{\"hex\":\"&#A784;\",\"name\":\"LATIN CAPITAL LETTER INSULAR S\",\"char\":\"Ꞅ\"},{\"hex\":\"&#A785;\",\"name\":\"LATIN SMALL LETTER INSULAR S\",\"char\":\"ꞅ\"},{\"hex\":\"&#A786;\",\"name\":\"LATIN CAPITAL LETTER INSULAR T\",\"char\":\"Ꞇ\"},{\"hex\":\"&#A787;\",\"name\":\"LATIN SMALL LETTER INSULAR T\",\"char\":\"ꞇ\"},{\"hex\":\"&#A788;\",\"name\":\"MODIFIER LETTER LOW CIRCUMFLEX ACCENT\",\"char\":\"ꞈ\"},{\"hex\":\"&#A789;\",\"name\":\"MODIFIER LETTER COLON\",\"char\":\"꞉\"},{\"hex\":\"&#A78A;\",\"name\":\"MODIFIER LETTER SHORT EQUALS SIGN\",\"char\":\"꞊\"},{\"hex\":\"&#A78B;\",\"name\":\"LATIN CAPITAL LETTER SALTILLO\",\"char\":\"Ꞌ\"},{\"hex\":\"&#A78C;\",\"name\":\"LATIN SMALL LETTER SALTILLO\",\"char\":\"ꞌ\"},{\"hex\":\"&#A78D;\",\"name\":\"LATIN CAPITAL LETTER TURNED H\",\"char\":\"Ɥ\"},{\"hex\":\"&#A78E;\",\"name\":\"LATIN SMALL LETTER L WITH RETROFLEX HOOK AND BELT\",\"char\":\"ꞎ\"},{\"hex\":\"&#A790;\",\"name\":\"LATIN CAPITAL LETTER N WITH DESCENDER\",\"char\":\"Ꞑ\"},{\"hex\":\"&#A791;\",\"name\":\"LATIN SMALL LETTER N WITH DESCENDER\",\"char\":\"ꞑ\"},{\"hex\":\"&#A7A0;\",\"name\":\"LATIN CAPITAL LETTER G WITH OBLIQUE STROKE\",\"char\":\"Ꞡ\"},{\"hex\":\"&#A7A1;\",\"name\":\"LATIN SMALL LETTER G WITH OBLIQUE STROKE\",\"char\":\"ꞡ\"},{\"hex\":\"&#A7A2;\",\"name\":\"LATIN CAPITAL LETTER K WITH OBLIQUE STROKE\",\"char\":\"Ꞣ\"},{\"hex\":\"&#A7A3;\",\"name\":\"LATIN SMALL LETTER K WITH OBLIQUE STROKE\",\"char\":\"ꞣ\"},{\"hex\":\"&#A7A4;\",\"name\":\"LATIN CAPITAL LETTER N WITH OBLIQUE STROKE\",\"char\":\"Ꞥ\"},{\"hex\":\"&#A7A5;\",\"name\":\"LATIN SMALL LETTER N WITH OBLIQUE STROKE\",\"char\":\"ꞥ\"},{\"hex\":\"&#A7A6;\",\"name\":\"LATIN CAPITAL LETTER R WITH OBLIQUE STROKE\",\"char\":\"Ꞧ\"},{\"hex\":\"&#A7A7;\",\"name\":\"LATIN SMALL LETTER R WITH OBLIQUE STROKE\",\"char\":\"ꞧ\"},{\"hex\":\"&#A7A8;\",\"name\":\"LATIN CAPITAL LETTER S WITH OBLIQUE STROKE\",\"char\":\"Ꞩ\"},{\"hex\":\"&#A7A9;\",\"name\":\"LATIN SMALL LETTER S WITH OBLIQUE STROKE\",\"char\":\"ꞩ\"},{\"hex\":\"&#A7FA;\",\"name\":\"LATIN LETTER SMALL CAPITAL TURNED M\",\"char\":\"ꟺ\"},{\"hex\":\"&#A7FB;\",\"name\":\"LATIN EPIGRAPHIC LETTER REVERSED F\",\"char\":\"ꟻ\"},{\"hex\":\"&#A7FC;\",\"name\":\"LATIN EPIGRAPHIC LETTER REVERSED P\",\"char\":\"ꟼ\"},{\"hex\":\"&#A7FD;\",\"name\":\"LATIN EPIGRAPHIC LETTER INVERTED M\",\"char\":\"ꟽ\"},{\"hex\":\"&#A7FE;\",\"name\":\"LATIN EPIGRAPHIC LETTER I LONGA\",\"char\":\"ꟾ\"},{\"hex\":\"&#A7FF;\",\"name\":\"LATIN EPIGRAPHIC LETTER ARCHAIC M\",\"char\":\"ꟿ\"},{\"hex\":\"&#1E00;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING BELOW\",\"char\":\"Ḁ\"},{\"hex\":\"&#1E01;\",\"name\":\"LATIN SMALL LETTER A WITH RING BELOW\",\"char\":\"ḁ\"},{\"hex\":\"&#1E02;\",\"name\":\"LATIN CAPITAL LETTER B WITH DOT ABOVE\",\"char\":\"Ḃ\"},{\"hex\":\"&#1E03;\",\"name\":\"LATIN SMALL LETTER B WITH DOT ABOVE\",\"char\":\"ḃ\"},{\"hex\":\"&#1E04;\",\"name\":\"LATIN CAPITAL LETTER B WITH DOT BELOW\",\"char\":\"Ḅ\"},{\"hex\":\"&#1E05;\",\"name\":\"LATIN SMALL LETTER B WITH DOT BELOW\",\"char\":\"ḅ\"},{\"hex\":\"&#1E06;\",\"name\":\"LATIN CAPITAL LETTER B WITH LINE BELOW\",\"char\":\"Ḇ\"},{\"hex\":\"&#1E07;\",\"name\":\"LATIN SMALL LETTER B WITH LINE BELOW\",\"char\":\"ḇ\"},{\"hex\":\"&#1E08;\",\"name\":\"LATIN CAPITAL LETTER C WITH CEDILLA AND ACUTE\",\"char\":\"Ḉ\"},{\"hex\":\"&#1E09;\",\"name\":\"LATIN SMALL LETTER C WITH CEDILLA AND ACUTE\",\"char\":\"ḉ\"},{\"hex\":\"&#1E0A;\",\"name\":\"LATIN CAPITAL LETTER D WITH DOT ABOVE\",\"char\":\"Ḋ\"},{\"hex\":\"&#1E0B;\",\"name\":\"LATIN SMALL LETTER D WITH DOT ABOVE\",\"char\":\"ḋ\"},{\"hex\":\"&#1E0C;\",\"name\":\"LATIN CAPITAL LETTER D WITH DOT BELOW\",\"char\":\"Ḍ\"},{\"hex\":\"&#1E0D;\",\"name\":\"LATIN SMALL LETTER D WITH DOT BELOW\",\"char\":\"ḍ\"},{\"hex\":\"&#1E0E;\",\"name\":\"LATIN CAPITAL LETTER D WITH LINE BELOW\",\"char\":\"Ḏ\"},{\"hex\":\"&#1E0F;\",\"name\":\"LATIN SMALL LETTER D WITH LINE BELOW\",\"char\":\"ḏ\"},{\"hex\":\"&#1E10;\",\"name\":\"LATIN CAPITAL LETTER D WITH CEDILLA\",\"char\":\"Ḑ\"},{\"hex\":\"&#1E11;\",\"name\":\"LATIN SMALL LETTER D WITH CEDILLA\",\"char\":\"ḑ\"},{\"hex\":\"&#1E12;\",\"name\":\"LATIN CAPITAL LETTER D WITH CIRCUMFLEX BELOW\",\"char\":\"Ḓ\"},{\"hex\":\"&#1E13;\",\"name\":\"LATIN SMALL LETTER D WITH CIRCUMFLEX BELOW\",\"char\":\"ḓ\"},{\"hex\":\"&#1E14;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON AND GRAVE\",\"char\":\"Ḕ\"},{\"hex\":\"&#1E15;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON AND GRAVE\",\"char\":\"ḕ\"},{\"hex\":\"&#1E16;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON AND ACUTE\",\"char\":\"Ḗ\"},{\"hex\":\"&#1E17;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON AND ACUTE\",\"char\":\"ḗ\"},{\"hex\":\"&#1E18;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX BELOW\",\"char\":\"Ḙ\"},{\"hex\":\"&#1E19;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX BELOW\",\"char\":\"ḙ\"},{\"hex\":\"&#1E1A;\",\"name\":\"LATIN CAPITAL LETTER E WITH TILDE BELOW\",\"char\":\"Ḛ\"},{\"hex\":\"&#1E1B;\",\"name\":\"LATIN SMALL LETTER E WITH TILDE BELOW\",\"char\":\"ḛ\"},{\"hex\":\"&#1E1C;\",\"name\":\"LATIN CAPITAL LETTER E WITH CEDILLA AND BREVE\",\"char\":\"Ḝ\"},{\"hex\":\"&#1E1D;\",\"name\":\"LATIN SMALL LETTER E WITH CEDILLA AND BREVE\",\"char\":\"ḝ\"},{\"hex\":\"&#1E1E;\",\"name\":\"LATIN CAPITAL LETTER F WITH DOT ABOVE\",\"char\":\"Ḟ\"},{\"hex\":\"&#1E1F;\",\"name\":\"LATIN SMALL LETTER F WITH DOT ABOVE\",\"char\":\"ḟ\"},{\"hex\":\"&#1E20;\",\"name\":\"LATIN CAPITAL LETTER G WITH MACRON\",\"char\":\"Ḡ\"},{\"hex\":\"&#1E21;\",\"name\":\"LATIN SMALL LETTER G WITH MACRON\",\"char\":\"ḡ\"},{\"hex\":\"&#1E22;\",\"name\":\"LATIN CAPITAL LETTER H WITH DOT ABOVE\",\"char\":\"Ḣ\"},{\"hex\":\"&#1E23;\",\"name\":\"LATIN SMALL LETTER H WITH DOT ABOVE\",\"char\":\"ḣ\"},{\"hex\":\"&#1E24;\",\"name\":\"LATIN CAPITAL LETTER H WITH DOT BELOW\",\"char\":\"Ḥ\"},{\"hex\":\"&#1E25;\",\"name\":\"LATIN SMALL LETTER H WITH DOT BELOW\",\"char\":\"ḥ\"},{\"hex\":\"&#1E26;\",\"name\":\"LATIN CAPITAL LETTER H WITH DIAERESIS\",\"char\":\"Ḧ\"},{\"hex\":\"&#1E27;\",\"name\":\"LATIN SMALL LETTER H WITH DIAERESIS\",\"char\":\"ḧ\"},{\"hex\":\"&#1E28;\",\"name\":\"LATIN CAPITAL LETTER H WITH CEDILLA\",\"char\":\"Ḩ\"},{\"hex\":\"&#1E29;\",\"name\":\"LATIN SMALL LETTER H WITH CEDILLA\",\"char\":\"ḩ\"},{\"hex\":\"&#1E2A;\",\"name\":\"LATIN CAPITAL LETTER H WITH BREVE BELOW\",\"char\":\"Ḫ\"},{\"hex\":\"&#1E2B;\",\"name\":\"LATIN SMALL LETTER H WITH BREVE BELOW\",\"char\":\"ḫ\"},{\"hex\":\"&#1E2C;\",\"name\":\"LATIN CAPITAL LETTER I WITH TILDE BELOW\",\"char\":\"Ḭ\"},{\"hex\":\"&#1E2D;\",\"name\":\"LATIN SMALL LETTER I WITH TILDE BELOW\",\"char\":\"ḭ\"},{\"hex\":\"&#1E2E;\",\"name\":\"LATIN CAPITAL LETTER I WITH DIAERESIS AND ACUTE\",\"char\":\"Ḯ\"},{\"hex\":\"&#1E2F;\",\"name\":\"LATIN SMALL LETTER I WITH DIAERESIS AND ACUTE\",\"char\":\"ḯ\"},{\"hex\":\"&#1E30;\",\"name\":\"LATIN CAPITAL LETTER K WITH ACUTE\",\"char\":\"Ḱ\"},{\"hex\":\"&#1E31;\",\"name\":\"LATIN SMALL LETTER K WITH ACUTE\",\"char\":\"ḱ\"},{\"hex\":\"&#1E32;\",\"name\":\"LATIN CAPITAL LETTER K WITH DOT BELOW\",\"char\":\"Ḳ\"},{\"hex\":\"&#1E33;\",\"name\":\"LATIN SMALL LETTER K WITH DOT BELOW\",\"char\":\"ḳ\"},{\"hex\":\"&#1E34;\",\"name\":\"LATIN CAPITAL LETTER K WITH LINE BELOW\",\"char\":\"Ḵ\"},{\"hex\":\"&#1E35;\",\"name\":\"LATIN SMALL LETTER K WITH LINE BELOW\",\"char\":\"ḵ\"},{\"hex\":\"&#1E36;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOT BELOW\",\"char\":\"Ḷ\"},{\"hex\":\"&#1E37;\",\"name\":\"LATIN SMALL LETTER L WITH DOT BELOW\",\"char\":\"ḷ\"},{\"hex\":\"&#1E38;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOT BELOW AND MACRON\",\"char\":\"Ḹ\"},{\"hex\":\"&#1E39;\",\"name\":\"LATIN SMALL LETTER L WITH DOT BELOW AND MACRON\",\"char\":\"ḹ\"},{\"hex\":\"&#1E3A;\",\"name\":\"LATIN CAPITAL LETTER L WITH LINE BELOW\",\"char\":\"Ḻ\"},{\"hex\":\"&#1E3B;\",\"name\":\"LATIN SMALL LETTER L WITH LINE BELOW\",\"char\":\"ḻ\"},{\"hex\":\"&#1E3C;\",\"name\":\"LATIN CAPITAL LETTER L WITH CIRCUMFLEX BELOW\",\"char\":\"Ḽ\"},{\"hex\":\"&#1E3D;\",\"name\":\"LATIN SMALL LETTER L WITH CIRCUMFLEX BELOW\",\"char\":\"ḽ\"},{\"hex\":\"&#1E3E;\",\"name\":\"LATIN CAPITAL LETTER M WITH ACUTE\",\"char\":\"Ḿ\"},{\"hex\":\"&#1E3F;\",\"name\":\"LATIN SMALL LETTER M WITH ACUTE\",\"char\":\"ḿ\"},{\"hex\":\"&#1E40;\",\"name\":\"LATIN CAPITAL LETTER M WITH DOT ABOVE\",\"char\":\"Ṁ\"},{\"hex\":\"&#1E41;\",\"name\":\"LATIN SMALL LETTER M WITH DOT ABOVE\",\"char\":\"ṁ\"},{\"hex\":\"&#1E42;\",\"name\":\"LATIN CAPITAL LETTER M WITH DOT BELOW\",\"char\":\"Ṃ\"},{\"hex\":\"&#1E43;\",\"name\":\"LATIN SMALL LETTER M WITH DOT BELOW\",\"char\":\"ṃ\"},{\"hex\":\"&#1E44;\",\"name\":\"LATIN CAPITAL LETTER N WITH DOT ABOVE\",\"char\":\"Ṅ\"},{\"hex\":\"&#1E45;\",\"name\":\"LATIN SMALL LETTER N WITH DOT ABOVE\",\"char\":\"ṅ\"},{\"hex\":\"&#1E46;\",\"name\":\"LATIN CAPITAL LETTER N WITH DOT BELOW\",\"char\":\"Ṇ\"},{\"hex\":\"&#1E47;\",\"name\":\"LATIN SMALL LETTER N WITH DOT BELOW\",\"char\":\"ṇ\"},{\"hex\":\"&#1E48;\",\"name\":\"LATIN CAPITAL LETTER N WITH LINE BELOW\",\"char\":\"Ṉ\"},{\"hex\":\"&#1E49;\",\"name\":\"LATIN SMALL LETTER N WITH LINE BELOW\",\"char\":\"ṉ\"},{\"hex\":\"&#1E4A;\",\"name\":\"LATIN CAPITAL LETTER N WITH CIRCUMFLEX BELOW\",\"char\":\"Ṋ\"},{\"hex\":\"&#1E4B;\",\"name\":\"LATIN SMALL LETTER N WITH CIRCUMFLEX BELOW\",\"char\":\"ṋ\"},{\"hex\":\"&#1E4C;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND ACUTE\",\"char\":\"Ṍ\"},{\"hex\":\"&#1E4D;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND ACUTE\",\"char\":\"ṍ\"},{\"hex\":\"&#1E4E;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND DIAERESIS\",\"char\":\"Ṏ\"},{\"hex\":\"&#1E4F;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND DIAERESIS\",\"char\":\"ṏ\"},{\"hex\":\"&#1E50;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON AND GRAVE\",\"char\":\"Ṑ\"},{\"hex\":\"&#1E51;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON AND GRAVE\",\"char\":\"ṑ\"},{\"hex\":\"&#1E52;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON AND ACUTE\",\"char\":\"Ṓ\"},{\"hex\":\"&#1E53;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON AND ACUTE\",\"char\":\"ṓ\"},{\"hex\":\"&#1E54;\",\"name\":\"LATIN CAPITAL LETTER P WITH ACUTE\",\"char\":\"Ṕ\"},{\"hex\":\"&#1E55;\",\"name\":\"LATIN SMALL LETTER P WITH ACUTE\",\"char\":\"ṕ\"},{\"hex\":\"&#1E56;\",\"name\":\"LATIN CAPITAL LETTER P WITH DOT ABOVE\",\"char\":\"Ṗ\"},{\"hex\":\"&#1E57;\",\"name\":\"LATIN SMALL LETTER P WITH DOT ABOVE\",\"char\":\"ṗ\"},{\"hex\":\"&#1E58;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT ABOVE\",\"char\":\"Ṙ\"},{\"hex\":\"&#1E59;\",\"name\":\"LATIN SMALL LETTER R WITH DOT ABOVE\",\"char\":\"ṙ\"},{\"hex\":\"&#1E5A;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT BELOW\",\"char\":\"Ṛ\"},{\"hex\":\"&#1E5B;\",\"name\":\"LATIN SMALL LETTER R WITH DOT BELOW\",\"char\":\"ṛ\"},{\"hex\":\"&#1E5C;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT BELOW AND MACRON\",\"char\":\"Ṝ\"},{\"hex\":\"&#1E5D;\",\"name\":\"LATIN SMALL LETTER R WITH DOT BELOW AND MACRON\",\"char\":\"ṝ\"},{\"hex\":\"&#1E5E;\",\"name\":\"LATIN CAPITAL LETTER R WITH LINE BELOW\",\"char\":\"Ṟ\"},{\"hex\":\"&#1E5F;\",\"name\":\"LATIN SMALL LETTER R WITH LINE BELOW\",\"char\":\"ṟ\"},{\"hex\":\"&#1E60;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT ABOVE\",\"char\":\"Ṡ\"},{\"hex\":\"&#1E61;\",\"name\":\"LATIN SMALL LETTER S WITH DOT ABOVE\",\"char\":\"ṡ\"},{\"hex\":\"&#1E62;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT BELOW\",\"char\":\"Ṣ\"},{\"hex\":\"&#1E63;\",\"name\":\"LATIN SMALL LETTER S WITH DOT BELOW\",\"char\":\"ṣ\"},{\"hex\":\"&#1E64;\",\"name\":\"LATIN CAPITAL LETTER S WITH ACUTE AND DOT ABOVE\",\"char\":\"Ṥ\"},{\"hex\":\"&#1E65;\",\"name\":\"LATIN SMALL LETTER S WITH ACUTE AND DOT ABOVE\",\"char\":\"ṥ\"},{\"hex\":\"&#1E66;\",\"name\":\"LATIN CAPITAL LETTER S WITH CARON AND DOT ABOVE\",\"char\":\"Ṧ\"},{\"hex\":\"&#1E67;\",\"name\":\"LATIN SMALL LETTER S WITH CARON AND DOT ABOVE\",\"char\":\"ṧ\"},{\"hex\":\"&#1E68;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT BELOW AND DOT ABOVE\",\"char\":\"Ṩ\"},{\"hex\":\"&#1E69;\",\"name\":\"LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE\",\"char\":\"ṩ\"},{\"hex\":\"&#1E6A;\",\"name\":\"LATIN CAPITAL LETTER T WITH DOT ABOVE\",\"char\":\"Ṫ\"},{\"hex\":\"&#1E6B;\",\"name\":\"LATIN SMALL LETTER T WITH DOT ABOVE\",\"char\":\"ṫ\"},{\"hex\":\"&#1E6C;\",\"name\":\"LATIN CAPITAL LETTER T WITH DOT BELOW\",\"char\":\"Ṭ\"},{\"hex\":\"&#1E6D;\",\"name\":\"LATIN SMALL LETTER T WITH DOT BELOW\",\"char\":\"ṭ\"},{\"hex\":\"&#1E6E;\",\"name\":\"LATIN CAPITAL LETTER T WITH LINE BELOW\",\"char\":\"Ṯ\"},{\"hex\":\"&#1E6F;\",\"name\":\"LATIN SMALL LETTER T WITH LINE BELOW\",\"char\":\"ṯ\"},{\"hex\":\"&#1E70;\",\"name\":\"LATIN CAPITAL LETTER T WITH CIRCUMFLEX BELOW\",\"char\":\"Ṱ\"},{\"hex\":\"&#1E71;\",\"name\":\"LATIN SMALL LETTER T WITH CIRCUMFLEX BELOW\",\"char\":\"ṱ\"},{\"hex\":\"&#1E72;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS BELOW\",\"char\":\"Ṳ\"},{\"hex\":\"&#1E73;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS BELOW\",\"char\":\"ṳ\"},{\"hex\":\"&#1E74;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE BELOW\",\"char\":\"Ṵ\"},{\"hex\":\"&#1E75;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE BELOW\",\"char\":\"ṵ\"},{\"hex\":\"&#1E76;\",\"name\":\"LATIN CAPITAL LETTER U WITH CIRCUMFLEX BELOW\",\"char\":\"Ṷ\"},{\"hex\":\"&#1E77;\",\"name\":\"LATIN SMALL LETTER U WITH CIRCUMFLEX BELOW\",\"char\":\"ṷ\"},{\"hex\":\"&#1E78;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE AND ACUTE\",\"char\":\"Ṹ\"},{\"hex\":\"&#1E79;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE AND ACUTE\",\"char\":\"ṹ\"},{\"hex\":\"&#1E7A;\",\"name\":\"LATIN CAPITAL LETTER U WITH MACRON AND DIAERESIS\",\"char\":\"Ṻ\"},{\"hex\":\"&#1E7B;\",\"name\":\"LATIN SMALL LETTER U WITH MACRON AND DIAERESIS\",\"char\":\"ṻ\"},{\"hex\":\"&#1E7C;\",\"name\":\"LATIN CAPITAL LETTER V WITH TILDE\",\"char\":\"Ṽ\"},{\"hex\":\"&#1E7D;\",\"name\":\"LATIN SMALL LETTER V WITH TILDE\",\"char\":\"ṽ\"},{\"hex\":\"&#1E7E;\",\"name\":\"LATIN CAPITAL LETTER V WITH DOT BELOW\",\"char\":\"Ṿ\"},{\"hex\":\"&#1E7F;\",\"name\":\"LATIN SMALL LETTER V WITH DOT BELOW\",\"char\":\"ṿ\"},{\"hex\":\"&#1E80;\",\"name\":\"LATIN CAPITAL LETTER W WITH GRAVE (present in WGL4)\",\"char\":\"Ẁ\"},{\"hex\":\"&#1E81;\",\"name\":\"LATIN SMALL LETTER W WITH GRAVE (present in WGL4)\",\"char\":\"ẁ\"},{\"hex\":\"&#1E82;\",\"name\":\"LATIN CAPITAL LETTER W WITH ACUTE (present in WGL4)\",\"char\":\"Ẃ\"},{\"hex\":\"&#1E83;\",\"name\":\"LATIN SMALL LETTER W WITH ACUTE (present in WGL4)\",\"char\":\"ẃ\"},{\"hex\":\"&#1E84;\",\"name\":\"LATIN CAPITAL LETTER W WITH DIAERESIS (present in WGL4)\",\"char\":\"Ẅ\"},{\"hex\":\"&#1E85;\",\"name\":\"LATIN SMALL LETTER W WITH DIAERESIS (present in WGL4)\",\"char\":\"ẅ\"},{\"hex\":\"&#1E86;\",\"name\":\"LATIN CAPITAL LETTER W WITH DOT ABOVE\",\"char\":\"Ẇ\"},{\"hex\":\"&#1E87;\",\"name\":\"LATIN SMALL LETTER W WITH DOT ABOVE\",\"char\":\"ẇ\"},{\"hex\":\"&#1E88;\",\"name\":\"LATIN CAPITAL LETTER W WITH DOT BELOW\",\"char\":\"Ẉ\"},{\"hex\":\"&#1E89;\",\"name\":\"LATIN SMALL LETTER W WITH DOT BELOW\",\"char\":\"ẉ\"},{\"hex\":\"&#1E8A;\",\"name\":\"LATIN CAPITAL LETTER X WITH DOT ABOVE\",\"char\":\"Ẋ\"},{\"hex\":\"&#1E8B;\",\"name\":\"LATIN SMALL LETTER X WITH DOT ABOVE\",\"char\":\"ẋ\"},{\"hex\":\"&#1E8C;\",\"name\":\"LATIN CAPITAL LETTER X WITH DIAERESIS\",\"char\":\"Ẍ\"},{\"hex\":\"&#1E8D;\",\"name\":\"LATIN SMALL LETTER X WITH DIAERESIS\",\"char\":\"ẍ\"},{\"hex\":\"&#1E8E;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DOT ABOVE\",\"char\":\"Ẏ\"},{\"hex\":\"&#1E8F;\",\"name\":\"LATIN SMALL LETTER Y WITH DOT ABOVE\",\"char\":\"ẏ\"},{\"hex\":\"&#1E90;\",\"name\":\"LATIN CAPITAL LETTER Z WITH CIRCUMFLEX\",\"char\":\"Ẑ\"},{\"hex\":\"&#1E91;\",\"name\":\"LATIN SMALL LETTER Z WITH CIRCUMFLEX\",\"char\":\"ẑ\"},{\"hex\":\"&#1E92;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DOT BELOW\",\"char\":\"Ẓ\"},{\"hex\":\"&#1E93;\",\"name\":\"LATIN SMALL LETTER Z WITH DOT BELOW\",\"char\":\"ẓ\"},{\"hex\":\"&#1E94;\",\"name\":\"LATIN CAPITAL LETTER Z WITH LINE BELOW\",\"char\":\"Ẕ\"},{\"hex\":\"&#1E95;\",\"name\":\"LATIN SMALL LETTER Z WITH LINE BELOW\",\"char\":\"ẕ\"},{\"hex\":\"&#1E96;\",\"name\":\"LATIN SMALL LETTER H WITH LINE BELOW\",\"char\":\"ẖ\"},{\"hex\":\"&#1E97;\",\"name\":\"LATIN SMALL LETTER T WITH DIAERESIS\",\"char\":\"ẗ\"},{\"hex\":\"&#1E98;\",\"name\":\"LATIN SMALL LETTER W WITH RING ABOVE\",\"char\":\"ẘ\"},{\"hex\":\"&#1E99;\",\"name\":\"LATIN SMALL LETTER Y WITH RING ABOVE\",\"char\":\"ẙ\"},{\"hex\":\"&#1E9A;\",\"name\":\"LATIN SMALL LETTER A WITH RIGHT HALF RING\",\"char\":\"ẚ\"},{\"hex\":\"&#1E9B;\",\"name\":\"LATIN SMALL LETTER LONG S WITH DOT ABOVE\",\"char\":\"ẛ\"},{\"hex\":\"&#1E9C;\",\"name\":\"LATIN SMALL LETTER LONG S WITH DIAGONAL STROKE\",\"char\":\"ẜ\"},{\"hex\":\"&#1E9D;\",\"name\":\"LATIN SMALL LETTER LONG S WITH HIGH STROKE\",\"char\":\"ẝ\"},{\"hex\":\"&#1E9E;\",\"name\":\"LATIN CAPITAL LETTER SHARP S\",\"char\":\"ẞ\"},{\"hex\":\"&#1E9F;\",\"name\":\"LATIN SMALL LETTER DELTA\",\"char\":\"ẟ\"},{\"hex\":\"&#1EA0;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT BELOW\",\"char\":\"Ạ\"},{\"hex\":\"&#1EA1;\",\"name\":\"LATIN SMALL LETTER A WITH DOT BELOW\",\"char\":\"ạ\"},{\"hex\":\"&#1EA2;\",\"name\":\"LATIN CAPITAL LETTER A WITH HOOK ABOVE\",\"char\":\"Ả\"},{\"hex\":\"&#1EA3;\",\"name\":\"LATIN SMALL LETTER A WITH HOOK ABOVE\",\"char\":\"ả\"},{\"hex\":\"&#1EA4;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ấ\"},{\"hex\":\"&#1EA5;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ấ\"},{\"hex\":\"&#1EA6;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ầ\"},{\"hex\":\"&#1EA7;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ầ\"},{\"hex\":\"&#1EA8;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ẩ\"},{\"hex\":\"&#1EA9;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ẩ\"},{\"hex\":\"&#1EAA;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ẫ\"},{\"hex\":\"&#1EAB;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE\",\"char\":\"ẫ\"},{\"hex\":\"&#1EAC;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ậ\"},{\"hex\":\"&#1EAD;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ậ\"},{\"hex\":\"&#1EAE;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND ACUTE\",\"char\":\"Ắ\"},{\"hex\":\"&#1EAF;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND ACUTE\",\"char\":\"ắ\"},{\"hex\":\"&#1EB0;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND GRAVE\",\"char\":\"Ằ\"},{\"hex\":\"&#1EB1;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND GRAVE\",\"char\":\"ằ\"},{\"hex\":\"&#1EB2;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE\",\"char\":\"Ẳ\"},{\"hex\":\"&#1EB3;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE\",\"char\":\"ẳ\"},{\"hex\":\"&#1EB4;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND TILDE\",\"char\":\"Ẵ\"},{\"hex\":\"&#1EB5;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND TILDE\",\"char\":\"ẵ\"},{\"hex\":\"&#1EB6;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW\",\"char\":\"Ặ\"},{\"hex\":\"&#1EB7;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND DOT BELOW\",\"char\":\"ặ\"},{\"hex\":\"&#1EB8;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOT BELOW\",\"char\":\"Ẹ\"},{\"hex\":\"&#1EB9;\",\"name\":\"LATIN SMALL LETTER E WITH DOT BELOW\",\"char\":\"ẹ\"},{\"hex\":\"&#1EBA;\",\"name\":\"LATIN CAPITAL LETTER E WITH HOOK ABOVE\",\"char\":\"Ẻ\"},{\"hex\":\"&#1EBB;\",\"name\":\"LATIN SMALL LETTER E WITH HOOK ABOVE\",\"char\":\"ẻ\"},{\"hex\":\"&#1EBC;\",\"name\":\"LATIN CAPITAL LETTER E WITH TILDE\",\"char\":\"Ẽ\"},{\"hex\":\"&#1EBD;\",\"name\":\"LATIN SMALL LETTER E WITH TILDE\",\"char\":\"ẽ\"},{\"hex\":\"&#1EBE;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ế\"},{\"hex\":\"&#1EBF;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ế\"},{\"hex\":\"&#1EC0;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ề\"},{\"hex\":\"&#1EC1;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ề\"},{\"hex\":\"&#1EC2;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ể\"},{\"hex\":\"&#1EC3;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ể\"},{\"hex\":\"&#1EC4;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ễ\"},{\"hex\":\"&#1EC5;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE\",\"char\":\"ễ\"},{\"hex\":\"&#1EC6;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ệ\"},{\"hex\":\"&#1EC7;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ệ\"},{\"hex\":\"&#1EC8;\",\"name\":\"LATIN CAPITAL LETTER I WITH HOOK ABOVE\",\"char\":\"Ỉ\"},{\"hex\":\"&#1EC9;\",\"name\":\"LATIN SMALL LETTER I WITH HOOK ABOVE\",\"char\":\"ỉ\"},{\"hex\":\"&#1ECA;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOT BELOW\",\"char\":\"Ị\"},{\"hex\":\"&#1ECB;\",\"name\":\"LATIN SMALL LETTER I WITH DOT BELOW\",\"char\":\"ị\"},{\"hex\":\"&#1ECC;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT BELOW\",\"char\":\"Ọ\"},{\"hex\":\"&#1ECD;\",\"name\":\"LATIN SMALL LETTER O WITH DOT BELOW\",\"char\":\"ọ\"},{\"hex\":\"&#1ECE;\",\"name\":\"LATIN CAPITAL LETTER O WITH HOOK ABOVE\",\"char\":\"Ỏ\"},{\"hex\":\"&#1ECF;\",\"name\":\"LATIN SMALL LETTER O WITH HOOK ABOVE\",\"char\":\"ỏ\"},{\"hex\":\"&#1ED0;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ố\"},{\"hex\":\"&#1ED1;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ố\"},{\"hex\":\"&#1ED2;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ồ\"},{\"hex\":\"&#1ED3;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ồ\"},{\"hex\":\"&#1ED4;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ổ\"},{\"hex\":\"&#1ED5;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ổ\"},{\"hex\":\"&#1ED6;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ỗ\"},{\"hex\":\"&#1ED7;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE\",\"char\":\"ỗ\"},{\"hex\":\"&#1ED8;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ộ\"},{\"hex\":\"&#1ED9;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ộ\"},{\"hex\":\"&#1EDA;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND ACUTE\",\"char\":\"Ớ\"},{\"hex\":\"&#1EDB;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND ACUTE\",\"char\":\"ớ\"},{\"hex\":\"&#1EDC;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND GRAVE\",\"char\":\"Ờ\"},{\"hex\":\"&#1EDD;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND GRAVE\",\"char\":\"ờ\"},{\"hex\":\"&#1EDE;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE\",\"char\":\"Ở\"},{\"hex\":\"&#1EDF;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE\",\"char\":\"ở\"},{\"hex\":\"&#1EE0;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND TILDE\",\"char\":\"Ỡ\"},{\"hex\":\"&#1EE1;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND TILDE\",\"char\":\"ỡ\"},{\"hex\":\"&#1EE2;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW\",\"char\":\"Ợ\"},{\"hex\":\"&#1EE3;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND DOT BELOW\",\"char\":\"ợ\"},{\"hex\":\"&#1EE4;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOT BELOW\",\"char\":\"Ụ\"},{\"hex\":\"&#1EE5;\",\"name\":\"LATIN SMALL LETTER U WITH DOT BELOW\",\"char\":\"ụ\"},{\"hex\":\"&#1EE6;\",\"name\":\"LATIN CAPITAL LETTER U WITH HOOK ABOVE\",\"char\":\"Ủ\"},{\"hex\":\"&#1EE7;\",\"name\":\"LATIN SMALL LETTER U WITH HOOK ABOVE\",\"char\":\"ủ\"},{\"hex\":\"&#1EE8;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND ACUTE\",\"char\":\"Ứ\"},{\"hex\":\"&#1EE9;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND ACUTE\",\"char\":\"ứ\"},{\"hex\":\"&#1EEA;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND GRAVE\",\"char\":\"Ừ\"},{\"hex\":\"&#1EEB;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND GRAVE\",\"char\":\"ừ\"},{\"hex\":\"&#1EEC;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE\",\"char\":\"Ử\"},{\"hex\":\"&#1EED;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE\",\"char\":\"ử\"},{\"hex\":\"&#1EEE;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND TILDE\",\"char\":\"Ữ\"},{\"hex\":\"&#1EEF;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND TILDE\",\"char\":\"ữ\"},{\"hex\":\"&#1EF0;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW\",\"char\":\"Ự\"},{\"hex\":\"&#1EF1;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND DOT BELOW\",\"char\":\"ự\"},{\"hex\":\"&#1EF2;\",\"name\":\"LATIN CAPITAL LETTER Y WITH GRAVE (present in WGL4)\",\"char\":\"Ỳ\"},{\"hex\":\"&#1EF3;\",\"name\":\"LATIN SMALL LETTER Y WITH GRAVE (present in WGL4)\",\"char\":\"ỳ\"},{\"hex\":\"&#1EF4;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DOT BELOW\",\"char\":\"Ỵ\"},{\"hex\":\"&#1EF5;\",\"name\":\"LATIN SMALL LETTER Y WITH DOT BELOW\",\"char\":\"ỵ\"},{\"hex\":\"&#1EF6;\",\"name\":\"LATIN CAPITAL LETTER Y WITH HOOK ABOVE\",\"char\":\"Ỷ\"},{\"hex\":\"&#1EF7;\",\"name\":\"LATIN SMALL LETTER Y WITH HOOK ABOVE\",\"char\":\"ỷ\"},{\"hex\":\"&#1EF8;\",\"name\":\"LATIN CAPITAL LETTER Y WITH TILDE\",\"char\":\"Ỹ\"},{\"hex\":\"&#1EF9;\",\"name\":\"LATIN SMALL LETTER Y WITH TILDE\",\"char\":\"ỹ\"},{\"hex\":\"&#1EFA;\",\"name\":\"LATIN CAPITAL LETTER MIDDLE-WELSH LL\",\"char\":\"Ỻ\"},{\"hex\":\"&#1EFB;\",\"name\":\"LATIN SMALL LETTER MIDDLE-WELSH LL\",\"char\":\"ỻ\"},{\"hex\":\"&#1EFC;\",\"name\":\"LATIN CAPITAL LETTER MIDDLE-WELSH V\",\"char\":\"Ỽ\"},{\"hex\":\"&#1EFD;\",\"name\":\"LATIN SMALL LETTER MIDDLE-WELSH V\",\"char\":\"ỽ\"},{\"hex\":\"&#1EFE;\",\"name\":\"LATIN CAPITAL LETTER Y WITH LOOP\",\"char\":\"Ỿ\"},{\"hex\":\"&#1EFF;\",\"name\":\"LATIN SMALL LETTER Y WITH LOOP\",\"char\":\"ỿ\"}],\"Arrows\":[{\"entity\":\"&larr;\",\"hex\":\"&#2190;\",\"name\":\"LEFTWARDS ARROW\",\"char\":\"←\"},{\"entity\":\"&uarr;\",\"hex\":\"&#2191;\",\"name\":\"UPWARDS ARROW\",\"char\":\"↑\"},{\"entity\":\"&rarr;\",\"hex\":\"&#2192;\",\"name\":\"RIGHTWARDS ARROW\",\"char\":\"→\"},{\"entity\":\"&darr;\",\"hex\":\"&#2193;\",\"name\":\"DOWNWARDS ARROW\",\"char\":\"↓\"},{\"entity\":\"&harr;\",\"hex\":\"&#2194;\",\"name\":\"LEFT RIGHT ARROW\",\"char\":\"↔\"},{\"hex\":\"&#2195;\",\"name\":\"UP DOWN ARROW\",\"char\":\"↕\"},{\"hex\":\"&#2196;\",\"name\":\"NORTH WEST ARROW\",\"char\":\"↖\"},{\"hex\":\"&#2197;\",\"name\":\"NORTH EAST ARROW\",\"char\":\"↗\"},{\"hex\":\"&#2198;\",\"name\":\"SOUTH EAST ARROW\",\"char\":\"↘\"},{\"hex\":\"&#2199;\",\"name\":\"SOUTH WEST ARROW\",\"char\":\"↙\"},{\"hex\":\"&#219A;\",\"name\":\"LEFTWARDS ARROW WITH STROKE\",\"char\":\"↚\"},{\"hex\":\"&#219B;\",\"name\":\"RIGHTWARDS ARROW WITH STROKE\",\"char\":\"↛\"},{\"hex\":\"&#219C;\",\"name\":\"LEFTWARDS WAVE ARROW\",\"char\":\"↜\"},{\"hex\":\"&#219D;\",\"name\":\"RIGHTWARDS WAVE ARROW\",\"char\":\"↝\"},{\"hex\":\"&#219E;\",\"name\":\"LEFTWARDS TWO HEADED ARROW\",\"char\":\"↞\"},{\"hex\":\"&#219F;\",\"name\":\"UPWARDS TWO HEADED ARROW\",\"char\":\"↟\"},{\"hex\":\"&#21A0;\",\"name\":\"RIGHTWARDS TWO HEADED ARROW\",\"char\":\"↠\"},{\"hex\":\"&#21A1;\",\"name\":\"DOWNWARDS TWO HEADED ARROW\",\"char\":\"↡\"},{\"hex\":\"&#21A2;\",\"name\":\"LEFTWARDS ARROW WITH TAIL\",\"char\":\"↢\"},{\"hex\":\"&#21A3;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL\",\"char\":\"↣\"},{\"hex\":\"&#21A4;\",\"name\":\"LEFTWARDS ARROW FROM BAR\",\"char\":\"↤\"},{\"hex\":\"&#21A5;\",\"name\":\"UPWARDS ARROW FROM BAR\",\"char\":\"↥\"},{\"hex\":\"&#21A6;\",\"name\":\"RIGHTWARDS ARROW FROM BAR\",\"char\":\"↦\"},{\"hex\":\"&#21A7;\",\"name\":\"DOWNWARDS ARROW FROM BAR\",\"char\":\"↧\"},{\"hex\":\"&#21A8;\",\"name\":\"UP DOWN ARROW WITH BASE\",\"char\":\"↨\"},{\"hex\":\"&#21A9;\",\"name\":\"LEFTWARDS ARROW WITH HOOK\",\"char\":\"↩\"},{\"hex\":\"&#21AA;\",\"name\":\"RIGHTWARDS ARROW WITH HOOK\",\"char\":\"↪\"},{\"hex\":\"&#21AB;\",\"name\":\"LEFTWARDS ARROW WITH LOOP\",\"char\":\"↫\"},{\"hex\":\"&#21AC;\",\"name\":\"RIGHTWARDS ARROW WITH LOOP\",\"char\":\"↬\"},{\"hex\":\"&#21AD;\",\"name\":\"LEFT RIGHT WAVE ARROW\",\"char\":\"↭\"},{\"hex\":\"&#21AE;\",\"name\":\"LEFT RIGHT ARROW WITH STROKE\",\"char\":\"↮\"},{\"hex\":\"&#21AF;\",\"name\":\"DOWNWARDS ZIGZAG ARROW\",\"char\":\"↯\"},{\"hex\":\"&#21B0;\",\"name\":\"UPWARDS ARROW WITH TIP LEFTWARDS\",\"char\":\"↰\"},{\"hex\":\"&#21B1;\",\"name\":\"UPWARDS ARROW WITH TIP RIGHTWARDS\",\"char\":\"↱\"},{\"hex\":\"&#21B2;\",\"name\":\"DOWNWARDS ARROW WITH TIP LEFTWARDS\",\"char\":\"↲\"},{\"hex\":\"&#21B3;\",\"name\":\"DOWNWARDS ARROW WITH TIP RIGHTWARDS\",\"char\":\"↳\"},{\"hex\":\"&#21B4;\",\"name\":\"RIGHTWARDS ARROW WITH CORNER DOWNWARDS\",\"char\":\"↴\"},{\"entity\":\"&crarr;\",\"hex\":\"&#21B5;\",\"name\":\"DOWNWARDS ARROW WITH CORNER LEFTWARDS\",\"char\":\"↵\"},{\"hex\":\"&#21B6;\",\"name\":\"ANTICLOCKWISE TOP SEMICIRCLE ARROW\",\"char\":\"↶\"},{\"hex\":\"&#21B7;\",\"name\":\"CLOCKWISE TOP SEMICIRCLE ARROW\",\"char\":\"↷\"},{\"hex\":\"&#21B8;\",\"name\":\"NORTH WEST ARROW TO LONG BAR\",\"char\":\"↸\"},{\"hex\":\"&#21B9;\",\"name\":\"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR\",\"char\":\"↹\"},{\"hex\":\"&#21BA;\",\"name\":\"ANTICLOCKWISE OPEN CIRCLE ARROW\",\"char\":\"↺\"},{\"hex\":\"&#21BB;\",\"name\":\"CLOCKWISE OPEN CIRCLE ARROW\",\"char\":\"↻\"},{\"hex\":\"&#21BC;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UPWARDS\",\"char\":\"↼\"},{\"hex\":\"&#21BD;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWNWARDS\",\"char\":\"↽\"},{\"hex\":\"&#21BE;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHTWARDS\",\"char\":\"↾\"},{\"hex\":\"&#21BF;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFTWARDS\",\"char\":\"↿\"},{\"hex\":\"&#21C0;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UPWARDS\",\"char\":\"⇀\"},{\"hex\":\"&#21C1;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWNWARDS\",\"char\":\"⇁\"},{\"hex\":\"&#21C2;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHTWARDS\",\"char\":\"⇂\"},{\"hex\":\"&#21C3;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFTWARDS\",\"char\":\"⇃\"},{\"hex\":\"&#21C4;\",\"name\":\"RIGHTWARDS ARROW OVER LEFTWARDS ARROW\",\"char\":\"⇄\"},{\"hex\":\"&#21C5;\",\"name\":\"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW\",\"char\":\"⇅\"},{\"hex\":\"&#21C6;\",\"name\":\"LEFTWARDS ARROW OVER RIGHTWARDS ARROW\",\"char\":\"⇆\"},{\"hex\":\"&#21C7;\",\"name\":\"LEFTWARDS PAIRED ARROWS\",\"char\":\"⇇\"},{\"hex\":\"&#21C8;\",\"name\":\"UPWARDS PAIRED ARROWS\",\"char\":\"⇈\"},{\"hex\":\"&#21C9;\",\"name\":\"RIGHTWARDS PAIRED ARROWS\",\"char\":\"⇉\"},{\"hex\":\"&#21CA;\",\"name\":\"DOWNWARDS PAIRED ARROWS\",\"char\":\"⇊\"},{\"hex\":\"&#21CB;\",\"name\":\"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON\",\"char\":\"⇋\"},{\"hex\":\"&#21CC;\",\"name\":\"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON\",\"char\":\"⇌\"},{\"hex\":\"&#21CD;\",\"name\":\"LEFTWARDS DOUBLE ARROW WITH STROKE\",\"char\":\"⇍\"},{\"hex\":\"&#21CE;\",\"name\":\"LEFT RIGHT DOUBLE ARROW WITH STROKE\",\"char\":\"⇎\"},{\"hex\":\"&#21CF;\",\"name\":\"RIGHTWARDS DOUBLE ARROW WITH STROKE\",\"char\":\"⇏\"},{\"entity\":\"&lArr;\",\"hex\":\"&#21D0;\",\"name\":\"LEFTWARDS DOUBLE ARROW\",\"char\":\"⇐\"},{\"entity\":\"&uArr;\",\"hex\":\"&#21D1;\",\"name\":\"UPWARDS DOUBLE ARROW\",\"char\":\"⇑\"},{\"entity\":\"&rArr;\",\"hex\":\"&#21D2;\",\"name\":\"RIGHTWARDS DOUBLE ARROW\",\"char\":\"⇒\"},{\"entity\":\"&dArr;\",\"hex\":\"&#21D3;\",\"name\":\"DOWNWARDS DOUBLE ARROW\",\"char\":\"⇓\"},{\"entity\":\"&hArr;\",\"hex\":\"&#21D4;\",\"name\":\"LEFT RIGHT DOUBLE ARROW\",\"char\":\"⇔\"},{\"hex\":\"&#21D5;\",\"name\":\"UP DOWN DOUBLE ARROW\",\"char\":\"⇕\"},{\"hex\":\"&#21D6;\",\"name\":\"NORTH WEST DOUBLE ARROW\",\"char\":\"⇖\"},{\"hex\":\"&#21D7;\",\"name\":\"NORTH EAST DOUBLE ARROW\",\"char\":\"⇗\"},{\"hex\":\"&#21D8;\",\"name\":\"SOUTH EAST DOUBLE ARROW\",\"char\":\"⇘\"},{\"hex\":\"&#21D9;\",\"name\":\"SOUTH WEST DOUBLE ARROW\",\"char\":\"⇙\"},{\"hex\":\"&#21DA;\",\"name\":\"LEFTWARDS TRIPLE ARROW\",\"char\":\"⇚\"},{\"hex\":\"&#21DB;\",\"name\":\"RIGHTWARDS TRIPLE ARROW\",\"char\":\"⇛\"},{\"hex\":\"&#21DC;\",\"name\":\"LEFTWARDS SQUIGGLE ARROW\",\"char\":\"⇜\"},{\"hex\":\"&#21DD;\",\"name\":\"RIGHTWARDS SQUIGGLE ARROW\",\"char\":\"⇝\"},{\"hex\":\"&#21DE;\",\"name\":\"UPWARDS ARROW WITH DOUBLE STROKE\",\"char\":\"⇞\"},{\"hex\":\"&#21DF;\",\"name\":\"DOWNWARDS ARROW WITH DOUBLE STROKE\",\"char\":\"⇟\"},{\"hex\":\"&#21E0;\",\"name\":\"LEFTWARDS DASHED ARROW\",\"char\":\"⇠\"},{\"hex\":\"&#21E1;\",\"name\":\"UPWARDS DASHED ARROW\",\"char\":\"⇡\"},{\"hex\":\"&#21E2;\",\"name\":\"RIGHTWARDS DASHED ARROW\",\"char\":\"⇢\"},{\"hex\":\"&#21E3;\",\"name\":\"DOWNWARDS DASHED ARROW\",\"char\":\"⇣\"},{\"hex\":\"&#21E4;\",\"name\":\"LEFTWARDS ARROW TO BAR\",\"char\":\"⇤\"},{\"hex\":\"&#21E5;\",\"name\":\"RIGHTWARDS ARROW TO BAR\",\"char\":\"⇥\"},{\"hex\":\"&#21E6;\",\"name\":\"LEFTWARDS WHITE ARROW\",\"char\":\"⇦\"},{\"hex\":\"&#21E7;\",\"name\":\"UPWARDS WHITE ARROW\",\"char\":\"⇧\"},{\"hex\":\"&#21E8;\",\"name\":\"RIGHTWARDS WHITE ARROW\",\"char\":\"⇨\"},{\"hex\":\"&#21E9;\",\"name\":\"DOWNWARDS WHITE ARROW\",\"char\":\"⇩\"},{\"hex\":\"&#21EA;\",\"name\":\"UPWARDS WHITE ARROW FROM BAR\",\"char\":\"⇪\"},{\"hex\":\"&#21EB;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL\",\"char\":\"⇫\"},{\"hex\":\"&#21EC;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR\",\"char\":\"⇬\"},{\"hex\":\"&#21ED;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR\",\"char\":\"⇭\"},{\"hex\":\"&#21EE;\",\"name\":\"UPWARDS WHITE DOUBLE ARROW\",\"char\":\"⇮\"},{\"hex\":\"&#21EF;\",\"name\":\"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL\",\"char\":\"⇯\"},{\"hex\":\"&#21F0;\",\"name\":\"RIGHTWARDS WHITE ARROW FROM WALL\",\"char\":\"⇰\"},{\"hex\":\"&#21F1;\",\"name\":\"NORTH WEST ARROW TO CORNER\",\"char\":\"⇱\"},{\"hex\":\"&#21F2;\",\"name\":\"SOUTH EAST ARROW TO CORNER\",\"char\":\"⇲\"},{\"hex\":\"&#21F3;\",\"name\":\"UP DOWN WHITE ARROW\",\"char\":\"⇳\"},{\"hex\":\"&#21F4;\",\"name\":\"RIGHT ARROW WITH SMALL CIRCLE\",\"char\":\"⇴\"},{\"hex\":\"&#21F5;\",\"name\":\"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW\",\"char\":\"⇵\"},{\"hex\":\"&#21F6;\",\"name\":\"THREE RIGHTWARDS ARROWS\",\"char\":\"⇶\"},{\"hex\":\"&#21F7;\",\"name\":\"LEFTWARDS ARROW WITH VERTICAL STROKE\",\"char\":\"⇷\"},{\"hex\":\"&#21F8;\",\"name\":\"RIGHTWARDS ARROW WITH VERTICAL STROKE\",\"char\":\"⇸\"},{\"hex\":\"&#21F9;\",\"name\":\"LEFT RIGHT ARROW WITH VERTICAL STROKE\",\"char\":\"⇹\"},{\"hex\":\"&#21FA;\",\"name\":\"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇺\"},{\"hex\":\"&#21FB;\",\"name\":\"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇻\"},{\"hex\":\"&#21FC;\",\"name\":\"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇼\"},{\"hex\":\"&#21FD;\",\"name\":\"LEFTWARDS OPEN-HEADED ARROW\",\"char\":\"⇽\"},{\"hex\":\"&#21FE;\",\"name\":\"RIGHTWARDS OPEN-HEADED ARROW\",\"char\":\"⇾\"},{\"hex\":\"&#21FF;\",\"name\":\"\",\"char\":\"⇿\"},{\"hex\":\"&#2B00;\",\"name\":\"NORTH EAST WHITE ARROW\",\"char\":\"⬀\"},{\"hex\":\"&#2B01;\",\"name\":\"NORTH WEST WHITE ARROW\",\"char\":\"⬁\"},{\"hex\":\"&#2B02;\",\"name\":\"SOUTH EAST WHITE ARROW\",\"char\":\"⬂\"},{\"hex\":\"&#2B03;\",\"name\":\"SOUTH WEST WHITE ARROW\",\"char\":\"⬃\"},{\"hex\":\"&#2B04;\",\"name\":\"LEFT RIGHT WHITE ARROW\",\"char\":\"⬄\"},{\"hex\":\"&#2B05;\",\"name\":\"LEFTWARDS BLACK ARROW\",\"char\":\"⬅\"},{\"hex\":\"&#2B06;\",\"name\":\"UPWARDS BLACK ARROW\",\"char\":\"⬆\"},{\"hex\":\"&#2B07;\",\"name\":\"DOWNWARDS BLACK ARROW\",\"char\":\"⬇\"},{\"hex\":\"&#2B08;\",\"name\":\"NORTH EAST BLACK ARROW\",\"char\":\"⬈\"},{\"hex\":\"&#2B09;\",\"name\":\"NORTH WEST BLACK ARROW\",\"char\":\"⬉\"},{\"hex\":\"&#2B0A;\",\"name\":\"SOUTH EAST BLACK ARROW\",\"char\":\"⬊\"},{\"hex\":\"&#2B0B;\",\"name\":\"SOUTH WEST BLACK ARROW\",\"char\":\"⬋\"},{\"hex\":\"&#2B0C;\",\"name\":\"LEFT RIGHT BLACK ARROW\",\"char\":\"⬌\"},{\"hex\":\"&#2B0D;\",\"name\":\"UP DOWN BLACK ARROW\",\"char\":\"⬍\"},{\"hex\":\"&#2B0E;\",\"name\":\"RIGHTWARDS ARROW WITH TIP DOWNWARDS\",\"char\":\"⬎\"},{\"hex\":\"&#2B0F;\",\"name\":\"RIGHTWARDS ARROW WITH TIP UPWARDS\",\"char\":\"⬏\"},{\"hex\":\"&#2B10;\",\"name\":\"LEFTWARDS ARROW WITH TIP DOWNWARDS\",\"char\":\"⬐\"},{\"hex\":\"&#2B11;\",\"name\":\"LEFTWARDS ARROW WITH TIP UPWARDS\",\"char\":\"⬑\"},{\"hex\":\"&#2794;\",\"name\":\"HEAVY WIDE-HEADED RIGHTWARDS ARROW\",\"char\":\"➔\"},{\"hex\":\"&#2798;\",\"name\":\"HEAVY SOUTH EAST ARROW\",\"char\":\"➘\"},{\"hex\":\"&#2799;\",\"name\":\"HEAVY RIGHTWARDS ARROW\",\"char\":\"➙\"},{\"hex\":\"&#279A;\",\"name\":\"HEAVY NORTH EAST ARROW\",\"char\":\"➚\"},{\"hex\":\"&#279B;\",\"name\":\"DRAFTING POINT RIGHTWARDS ARROW\",\"char\":\"➛\"},{\"hex\":\"&#279C;\",\"name\":\"HEAVY ROUND-TIPPED RIGHTWARDS ARROW\",\"char\":\"➜\"},{\"hex\":\"&#279D;\",\"name\":\"TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➝\"},{\"hex\":\"&#279E;\",\"name\":\"HEAVY TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➞\"},{\"hex\":\"&#279F;\",\"name\":\"DASHED TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➟\"},{\"hex\":\"&#27A0;\",\"name\":\"HEAVY DASHED TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➠\"},{\"hex\":\"&#27A1;\",\"name\":\"BLACK RIGHTWARDS ARROW\",\"char\":\"➡\"},{\"hex\":\"&#27A2;\",\"name\":\"THREE-D TOP-LIGHTED RIGHTWARDS ARROWHEAD\",\"char\":\"➢\"},{\"hex\":\"&#27A3;\",\"name\":\"THREE-D BOTTOM-LIGHTED RIGHTWARDS ARROWHEAD\",\"char\":\"➣\"},{\"hex\":\"&#27A4;\",\"name\":\"BLACK RIGHTWARDS ARROWHEAD\",\"char\":\"➤\"},{\"hex\":\"&#27A5;\",\"name\":\"HEAVY BLACK CURVED DOWNWARDS AND RIGHTWARDS ARROW\",\"char\":\"➥\"},{\"hex\":\"&#27A6;\",\"name\":\"HEAVY BLACK CURVED UPWARDS AND RIGHTWARDS ARROW\",\"char\":\"➦\"},{\"hex\":\"&#27A7;\",\"name\":\"SQUAT BLACK RIGHTWARDS ARROW\",\"char\":\"➧\"},{\"hex\":\"&#27A8;\",\"name\":\"HEAVY CONCAVE-POINTED BLACK RIGHTWARDS ARROW\",\"char\":\"➨\"},{\"hex\":\"&#27A9;\",\"name\":\"RIGHT-SHADED WHITE RIGHTWARDS ARROW\",\"char\":\"➩\"},{\"hex\":\"&#27AA;\",\"name\":\"LEFT-SHADED WHITE RIGHTWARDS ARROW\",\"char\":\"➪\"},{\"hex\":\"&#27AB;\",\"name\":\"BACK-TILTED SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➫\"},{\"hex\":\"&#27AC;\",\"name\":\"FRONT-TILTED SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➬\"},{\"hex\":\"&#27AD;\",\"name\":\"HEAVY LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➭\"},{\"hex\":\"&#27AE;\",\"name\":\"HEAVY UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➮\"},{\"hex\":\"&#27AF;\",\"name\":\"NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➯\"},{\"hex\":\"&#27B1;\",\"name\":\"NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➱\"},{\"hex\":\"&#27B2;\",\"name\":\"CIRCLED HEAVY WHITE RIGHTWARDS ARROW\",\"char\":\"➲\"},{\"hex\":\"&#27B3;\",\"name\":\"WHITE-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➳\"},{\"hex\":\"&#27B4;\",\"name\":\"BLACK-FEATHERED SOUTH EAST ARROW\",\"char\":\"➴\"},{\"hex\":\"&#27B5;\",\"name\":\"BLACK-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➵\"},{\"hex\":\"&#27B6;\",\"name\":\"BLACK-FEATHERED NORTH EAST ARROW\",\"char\":\"➶\"},{\"hex\":\"&#27B7;\",\"name\":\"HEAVY BLACK-FEATHERED SOUTH EAST ARROW\",\"char\":\"➷\"},{\"hex\":\"&#27B8;\",\"name\":\"HEAVY BLACK-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➸\"},{\"hex\":\"&#27B9;\",\"name\":\"HEAVY BLACK-FEATHERED NORTH EAST ARROW\",\"char\":\"➹\"},{\"hex\":\"&#27BA;\",\"name\":\"TEARDROP-BARBED RIGHTWARDS ARROW\",\"char\":\"➺\"},{\"hex\":\"&#27BB;\",\"name\":\"HEAVY TEARDROP-SHANKED RIGHTWARDS ARROW\",\"char\":\"➻\"},{\"hex\":\"&#27BC;\",\"name\":\"WEDGE-TAILED RIGHTWARDS ARROW\",\"char\":\"➼\"},{\"hex\":\"&#27BD;\",\"name\":\"HEAVY WEDGE-TAILED RIGHTWARDS ARROW\",\"char\":\"➽\"},{\"hex\":\"&#27BE;\",\"name\":\"OPEN-OUTLINED RIGHTWARDS ARROW\",\"char\":\"➾\"},{\"hex\":\"&#27F0;\",\"name\":\"UPWARDS QUADRUPLE ARROW\",\"char\":\"⟰\"},{\"hex\":\"&#27F1;\",\"name\":\"DOWNWARDS QUADRUPLE ARROW\",\"char\":\"⟱\"},{\"hex\":\"&#27F2;\",\"name\":\"ANTICLOCKWISE GAPPED CIRCLE ARROW\",\"char\":\"⟲\"},{\"hex\":\"&#27F3;\",\"name\":\"CLOCKWISE GAPPED CIRCLE ARROW\",\"char\":\"⟳\"},{\"hex\":\"&#27F4;\",\"name\":\"RIGHT ARROW WITH CIRCLED PLUS\",\"char\":\"⟴\"},{\"hex\":\"&#27F5;\",\"name\":\"LONG LEFTWARDS ARROW\",\"char\":\"⟵\"},{\"hex\":\"&#27F6;\",\"name\":\"LONG RIGHTWARDS ARROW\",\"char\":\"⟶\"},{\"hex\":\"&#27F7;\",\"name\":\"LONG LEFT RIGHT ARROW\",\"char\":\"⟷\"},{\"hex\":\"&#27F8;\",\"name\":\"LONG LEFTWARDS DOUBLE ARROW\",\"char\":\"⟸\"},{\"hex\":\"&#27F9;\",\"name\":\"LONG RIGHTWARDS DOUBLE ARROW\",\"char\":\"⟹\"},{\"hex\":\"&#27FA;\",\"name\":\"LONG LEFT RIGHT DOUBLE ARROW\",\"char\":\"⟺\"},{\"hex\":\"&#27FB;\",\"name\":\"LONG LEFTWARDS ARROW FROM BAR\",\"char\":\"⟻\"},{\"hex\":\"&#27FC;\",\"name\":\"LONG RIGHTWARDS ARROW FROM BAR\",\"char\":\"⟼\"},{\"hex\":\"&#27FD;\",\"name\":\"LONG LEFTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⟽\"},{\"hex\":\"&#27FE;\",\"name\":\"LONG RIGHTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⟾\"},{\"hex\":\"&#27FF;\",\"name\":\"LONG RIGHTWARDS SQUIGGLE ARROW\",\"char\":\"⟿\"},{\"hex\":\"&#2900;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH VERTICAL STROKE\",\"char\":\"⤀\"},{\"hex\":\"&#2901;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤁\"},{\"hex\":\"&#2902;\",\"name\":\"LEFTWARDS DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤂\"},{\"hex\":\"&#2903;\",\"name\":\"RIGHTWARDS DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤃\"},{\"hex\":\"&#2904;\",\"name\":\"LEFT RIGHT DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤄\"},{\"hex\":\"&#2905;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW FROM BAR\",\"char\":\"⤅\"},{\"hex\":\"&#2906;\",\"name\":\"LEFTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⤆\"},{\"hex\":\"&#2907;\",\"name\":\"RIGHTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⤇\"},{\"hex\":\"&#2908;\",\"name\":\"DOWNWARDS ARROW WITH HORIZONTAL STROKE\",\"char\":\"⤈\"},{\"hex\":\"&#2909;\",\"name\":\"UPWARDS ARROW WITH HORIZONTAL STROKE\",\"char\":\"⤉\"},{\"hex\":\"&#290A;\",\"name\":\"UPWARDS TRIPLE ARROW\",\"char\":\"⤊\"},{\"hex\":\"&#290B;\",\"name\":\"DOWNWARDS TRIPLE ARROW\",\"char\":\"⤋\"},{\"hex\":\"&#290C;\",\"name\":\"LEFTWARDS DOUBLE DASH ARROW\",\"char\":\"⤌\"},{\"hex\":\"&#290D;\",\"name\":\"RIGHTWARDS DOUBLE DASH ARROW\",\"char\":\"⤍\"},{\"hex\":\"&#290E;\",\"name\":\"LEFTWARDS TRIPLE DASH ARROW\",\"char\":\"⤎\"},{\"hex\":\"&#290F;\",\"name\":\"RIGHTWARDS TRIPLE DASH ARROW\",\"char\":\"⤏\"},{\"hex\":\"&#2910;\",\"name\":\"RIGHTWARDS TWO-HEADED TRIPLE DASH ARROW\",\"char\":\"⤐\"},{\"hex\":\"&#2911;\",\"name\":\"RIGHTWARDS ARROW WITH DOTTED STEM\",\"char\":\"⤑\"},{\"hex\":\"&#2912;\",\"name\":\"UPWARDS ARROW TO BAR\",\"char\":\"⤒\"},{\"hex\":\"&#2913;\",\"name\":\"DOWNWARDS ARROW TO BAR\",\"char\":\"⤓\"},{\"hex\":\"&#2914;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL WITH VERTICAL STROKE\",\"char\":\"⤔\"},{\"hex\":\"&#2915;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤕\"},{\"hex\":\"&#2916;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL\",\"char\":\"⤖\"},{\"hex\":\"&#2917;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH VERTICAL STROKE\",\"char\":\"⤗\"},{\"hex\":\"&#2918;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤘\"},{\"hex\":\"&#2919;\",\"name\":\"LEFTWARDS ARROW-TAIL\",\"char\":\"⤙\"},{\"hex\":\"&#291A;\",\"name\":\"RIGHTWARDS ARROW-TAIL\",\"char\":\"⤚\"},{\"hex\":\"&#291B;\",\"name\":\"LEFTWARDS DOUBLE ARROW-TAIL\",\"char\":\"⤛\"},{\"hex\":\"&#291C;\",\"name\":\"RIGHTWARDS DOUBLE ARROW-TAIL\",\"char\":\"⤜\"},{\"hex\":\"&#291D;\",\"name\":\"LEFTWARDS ARROW TO BLACK DIAMOND\",\"char\":\"⤝\"},{\"hex\":\"&#291E;\",\"name\":\"RIGHTWARDS ARROW TO BLACK DIAMOND\",\"char\":\"⤞\"},{\"hex\":\"&#291F;\",\"name\":\"LEFTWARDS ARROW FROM BAR TO BLACK DIAMOND\",\"char\":\"⤟\"},{\"hex\":\"&#2920;\",\"name\":\"RIGHTWARDS ARROW FROM BAR TO BLACK DIAMOND\",\"char\":\"⤠\"},{\"hex\":\"&#2921;\",\"name\":\"NORTH WEST AND SOUTH EAST ARROW\",\"char\":\"⤡\"},{\"hex\":\"&#2922;\",\"name\":\"NORTH EAST AND SOUTH WEST ARROW\",\"char\":\"⤢\"},{\"hex\":\"&#2923;\",\"name\":\"NORTH WEST ARROW WITH HOOK\",\"char\":\"⤣\"},{\"hex\":\"&#2924;\",\"name\":\"NORTH EAST ARROW WITH HOOK\",\"char\":\"⤤\"},{\"hex\":\"&#2925;\",\"name\":\"SOUTH EAST ARROW WITH HOOK\",\"char\":\"⤥\"},{\"hex\":\"&#2926;\",\"name\":\"SOUTH WEST ARROW WITH HOOK\",\"char\":\"⤦\"},{\"hex\":\"&#2927;\",\"name\":\"NORTH WEST ARROW AND NORTH EAST ARROW\",\"char\":\"⤧\"},{\"hex\":\"&#2928;\",\"name\":\"NORTH EAST ARROW AND SOUTH EAST ARROW\",\"char\":\"⤨\"},{\"hex\":\"&#2929;\",\"name\":\"SOUTH EAST ARROW AND SOUTH WEST ARROW\",\"char\":\"⤩\"},{\"hex\":\"&#292A;\",\"name\":\"SOUTH WEST ARROW AND NORTH WEST ARROW\",\"char\":\"⤪\"},{\"hex\":\"&#292B;\",\"name\":\"RISING DIAGONAL CROSSING FALLING DIAGONAL\",\"char\":\"⤫\"},{\"hex\":\"&#292C;\",\"name\":\"FALLING DIAGONAL CROSSING RISING DIAGONAL\",\"char\":\"⤬\"},{\"hex\":\"&#292D;\",\"name\":\"SOUTH EAST ARROW CROSSING NORTH EAST ARROW\",\"char\":\"⤭\"},{\"hex\":\"&#292E;\",\"name\":\"NORTH EAST ARROW CROSSING SOUTH EAST ARROW\",\"char\":\"⤮\"},{\"hex\":\"&#292F;\",\"name\":\"FALLING DIAGONAL CROSSING NORTH EAST ARROW\",\"char\":\"⤯\"},{\"hex\":\"&#2930;\",\"name\":\"RISING DIAGONAL CROSSING SOUTH EAST ARROW\",\"char\":\"⤰\"},{\"hex\":\"&#2931;\",\"name\":\"NORTH EAST ARROW CROSSING NORTH WEST ARROW\",\"char\":\"⤱\"},{\"hex\":\"&#2932;\",\"name\":\"NORTH WEST ARROW CROSSING NORTH EAST ARROW\",\"char\":\"⤲\"},{\"hex\":\"&#2933;\",\"name\":\"WAVE ARROW POINTING DIRECTLY RIGHT\",\"char\":\"⤳\"},{\"hex\":\"&#2934;\",\"name\":\"ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS\",\"char\":\"⤴\"},{\"hex\":\"&#2935;\",\"name\":\"ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS\",\"char\":\"⤵\"},{\"hex\":\"&#2936;\",\"name\":\"ARROW POINTING DOWNWARDS THEN CURVING LEFTWARDS\",\"char\":\"⤶\"},{\"hex\":\"&#2937;\",\"name\":\"ARROW POINTING DOWNWARDS THEN CURVING RIGHTWARDS\",\"char\":\"⤷\"},{\"hex\":\"&#2938;\",\"name\":\"RIGHT-SIDE ARC CLOCKWISE ARROW\",\"char\":\"⤸\"},{\"hex\":\"&#2939;\",\"name\":\"LEFT-SIDE ARC ANTICLOCKWISE ARROW\",\"char\":\"⤹\"},{\"hex\":\"&#293A;\",\"name\":\"TOP ARC ANTICLOCKWISE ARROW\",\"char\":\"⤺\"},{\"hex\":\"&#293B;\",\"name\":\"BOTTOM ARC ANTICLOCKWISE ARROW\",\"char\":\"⤻\"},{\"hex\":\"&#293C;\",\"name\":\"TOP ARC CLOCKWISE ARROW WITH MINUS\",\"char\":\"⤼\"},{\"hex\":\"&#293D;\",\"name\":\"TOP ARC ANTICLOCKWISE ARROW WITH PLUS\",\"char\":\"⤽\"},{\"hex\":\"&#293E;\",\"name\":\"LOWER RIGHT SEMICIRCULAR CLOCKWISE ARROW\",\"char\":\"⤾\"},{\"hex\":\"&#293F;\",\"name\":\"LOWER LEFT SEMICIRCULAR ANTICLOCKWISE ARROW\",\"char\":\"⤿\"},{\"hex\":\"&#2940;\",\"name\":\"ANTICLOCKWISE CLOSED CIRCLE ARROW\",\"char\":\"⥀\"},{\"hex\":\"&#2941;\",\"name\":\"CLOCKWISE CLOSED CIRCLE ARROW\",\"char\":\"⥁\"},{\"hex\":\"&#2942;\",\"name\":\"RIGHTWARDS ARROW ABOVE SHORT LEFTWARDS ARROW\",\"char\":\"⥂\"},{\"hex\":\"&#2943;\",\"name\":\"LEFTWARDS ARROW ABOVE SHORT RIGHTWARDS ARROW\",\"char\":\"⥃\"},{\"hex\":\"&#2944;\",\"name\":\"SHORT RIGHTWARDS ARROW ABOVE LEFTWARDS ARROW\",\"char\":\"⥄\"},{\"hex\":\"&#2945;\",\"name\":\"RIGHTWARDS ARROW WITH PLUS BELOW\",\"char\":\"⥅\"},{\"hex\":\"&#2946;\",\"name\":\"LEFTWARDS ARROW WITH PLUS BELOW\",\"char\":\"⥆\"},{\"hex\":\"&#2947;\",\"name\":\"RIGHTWARDS ARROW THROUGH X\",\"char\":\"⥇\"},{\"hex\":\"&#2948;\",\"name\":\"LEFT RIGHT ARROW THROUGH SMALL CIRCLE\",\"char\":\"⥈\"},{\"hex\":\"&#2949;\",\"name\":\"UPWARDS TWO-HEADED ARROW FROM SMALL CIRCLE\",\"char\":\"⥉\"},{\"hex\":\"&#294A;\",\"name\":\"LEFT BARB UP RIGHT BARB DOWN HARPOON\",\"char\":\"⥊\"},{\"hex\":\"&#294B;\",\"name\":\"LEFT BARB DOWN RIGHT BARB UP HARPOON\",\"char\":\"⥋\"},{\"hex\":\"&#294C;\",\"name\":\"UP BARB RIGHT DOWN BARB LEFT HARPOON\",\"char\":\"⥌\"},{\"hex\":\"&#294D;\",\"name\":\"UP BARB LEFT DOWN BARB RIGHT HARPOON\",\"char\":\"⥍\"},{\"hex\":\"&#294E;\",\"name\":\"LEFT BARB UP RIGHT BARB UP HARPOON\",\"char\":\"⥎\"},{\"hex\":\"&#294F;\",\"name\":\"UP BARB RIGHT DOWN BARB RIGHT HARPOON\",\"char\":\"⥏\"},{\"hex\":\"&#2950;\",\"name\":\"LEFT BARB DOWN RIGHT BARB DOWN HARPOON\",\"char\":\"⥐\"},{\"hex\":\"&#2951;\",\"name\":\"UP BARB LEFT DOWN BARB LEFT HARPOON\",\"char\":\"⥑\"},{\"hex\":\"&#2952;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP TO BAR\",\"char\":\"⥒\"},{\"hex\":\"&#2953;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP TO BAR\",\"char\":\"⥓\"},{\"hex\":\"&#2954;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHT TO BAR\",\"char\":\"⥔\"},{\"hex\":\"&#2955;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHT TO BAR\",\"char\":\"⥕\"},{\"hex\":\"&#2956;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN TO BAR\",\"char\":\"⥖\"},{\"hex\":\"&#2957;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN TO BAR\",\"char\":\"⥗\"},{\"hex\":\"&#2958;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT TO BAR\",\"char\":\"⥘\"},{\"hex\":\"&#2959;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT TO BAR\",\"char\":\"⥙\"},{\"hex\":\"&#295A;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP FROM BAR\",\"char\":\"⥚\"},{\"hex\":\"&#295B;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP FROM BAR\",\"char\":\"⥛\"},{\"hex\":\"&#295C;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHT FROM BAR\",\"char\":\"⥜\"},{\"hex\":\"&#295D;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHT FROM BAR\",\"char\":\"⥝\"},{\"hex\":\"&#295E;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN FROM BAR\",\"char\":\"⥞\"},{\"hex\":\"&#295F;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN FROM BAR\",\"char\":\"⥟\"},{\"hex\":\"&#2960;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT FROM BAR\",\"char\":\"⥠\"},{\"hex\":\"&#2961;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT FROM BAR\",\"char\":\"⥡\"},{\"hex\":\"&#2962;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥢\"},{\"hex\":\"&#2963;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥣\"},{\"hex\":\"&#2964;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥤\"},{\"hex\":\"&#2965;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥥\"},{\"hex\":\"&#2966;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB UP\",\"char\":\"⥦\"},{\"hex\":\"&#2967;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN ABOVE RIGHTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥧\"},{\"hex\":\"&#2968;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB UP\",\"char\":\"⥨\"},{\"hex\":\"&#2969;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN ABOVE LEFTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥩\"},{\"hex\":\"&#296A;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE LONG DASH\",\"char\":\"⥪\"},{\"hex\":\"&#296B;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH\",\"char\":\"⥫\"},{\"hex\":\"&#296C;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE LONG DASH\",\"char\":\"⥬\"},{\"hex\":\"&#296D;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH\",\"char\":\"⥭\"},{\"hex\":\"&#296E;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥮\"},{\"hex\":\"&#296F;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥯\"},{\"hex\":\"&#2970;\",\"name\":\"RIGHT DOUBLE ARROW WITH ROUNDED HEAD\",\"char\":\"⥰\"},{\"hex\":\"&#2971;\",\"name\":\"EQUALS SIGN ABOVE RIGHTWARDS ARROW\",\"char\":\"⥱\"},{\"hex\":\"&#2972;\",\"name\":\"TILDE OPERATOR ABOVE RIGHTWARDS ARROW\",\"char\":\"⥲\"},{\"hex\":\"&#2973;\",\"name\":\"LEFTWARDS ARROW ABOVE TILDE OPERATOR\",\"char\":\"⥳\"},{\"hex\":\"&#2974;\",\"name\":\"RIGHTWARDS ARROW ABOVE TILDE OPERATOR\",\"char\":\"⥴\"},{\"hex\":\"&#2975;\",\"name\":\"RIGHTWARDS ARROW ABOVE ALMOST EQUAL TO\",\"char\":\"⥵\"},{\"hex\":\"&#2976;\",\"name\":\"LESS-THAN ABOVE LEFTWARDS ARROW\",\"char\":\"⥶\"},{\"hex\":\"&#2977;\",\"name\":\"LEFTWARDS ARROW THROUGH LESS-THAN\",\"char\":\"⥷\"},{\"hex\":\"&#2978;\",\"name\":\"GREATER-THAN ABOVE RIGHTWARDS ARROW\",\"char\":\"⥸\"},{\"hex\":\"&#2979;\",\"name\":\"SUBSET ABOVE RIGHTWARDS ARROW\",\"char\":\"⥹\"},{\"hex\":\"&#297A;\",\"name\":\"LEFTWARDS ARROW THROUGH SUBSET\",\"char\":\"⥺\"},{\"hex\":\"&#297B;\",\"name\":\"SUPERSET ABOVE LEFTWARDS ARROW\",\"char\":\"⥻\"},{\"hex\":\"&#297C;\",\"name\":\"LEFT FISH TAIL\",\"char\":\"⥼\"},{\"hex\":\"&#297D;\",\"name\":\"RIGHT FISH TAIL\",\"char\":\"⥽\"},{\"hex\":\"&#297E;\",\"name\":\"UP FISH TAIL\",\"char\":\"⥾\"},{\"hex\":\"&#297F;\",\"name\":\"DOWN FISH TAIL\",\"char\":\"⥿\"}]}");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var VALIDATOR_ARG_ERROR_MESSAGE='The typeValidator argument must be a function with the signature function(props, propName, componentName).',MESSAGE_ARG_ERROR_MESSAGE='The error message is optional, but must be a string if provided.',propIsRequired=function propIsRequired(a,b,c,d){if('boolean'==typeof a)return a;return'function'==typeof a?a(b,c,d):!(!0!==!!a)&&!!a},propExists=function propExists(a,b){return Object.hasOwnProperty.call(a,b)},missingPropError=function missingPropError(a,b,c,d){return d?new Error(d):new Error('Required '+a[b]+' `'+b+'`'+(' was not specified in `'+c+'`.'))},guardAgainstInvalidArgTypes=function guardAgainstInvalidArgTypes(a,b){if('function'!=typeof a)throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);if(!!b&&'string'!=typeof b)throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE)},isRequiredIf=function isRequiredIf(a,b,c){return guardAgainstInvalidArgTypes(a,c),function(d,e,f){for(var _len=arguments.length,g=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++)g[_key-3]=arguments[_key];return propIsRequired(b,d,e,f)?propExists(d,e)?a.apply(void 0,[d,e,f].concat(g)):missingPropError(d,e,f,c):a.apply(void 0,[d,e,f].concat(g));// Is not required, so just run typeValidator.
}};exports.default=isRequiredIf;



/***/ }),

/***/ "./node_modules/react-twitter-embed/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-twitter-embed/dist/index.es.js ***!
  \***********************************************************/
/*! exports provided: TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTimelineEmbed", function() { return TwitterTimelineEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return TwitterShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterFollowButton", function() { return TwitterFollowButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterHashtagButton", function() { return TwitterHashtagButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMentionButton", function() { return TwitterMentionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterTweetEmbed", function() { return TwitterTweetEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterMomentShare", function() { return TwitterMomentShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterDMButton", function() { return TwitterDMButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterVideoEmbed", function() { return TwitterVideoEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterOnAirButton", function() { return TwitterOnAirButton; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-proptype-conditional-require */ "./node_modules/react-proptype-conditional-require/dist/isRequiredIf.js");
/* harmony import */ var react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");
/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_9__);











var twitter_widget_js = 'https://platform.twitter.com/widgets.js';

var TwitterTimelineEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTimelineEmbed, _Component);

  function TwitterTimelineEmbed() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTimelineEmbed);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTimelineEmbed).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTimelineEmbed, [{
    key: "buildChromeOptions",
    value: function buildChromeOptions(options) {
      options.chrome = '';

      if (this.props.noHeader) {
        options.chrome = options.chrome + ' noheader';
      }

      if (this.props.noFooter) {
        options.chrome = options.chrome + ' nofooter';
      }

      if (this.props.noBorders) {
        options.chrome = options.chrome + ' noborders';
      }

      if (this.props.noScrollbar) {
        options.chrome = options.chrome + ' noscrollbar';
      }

      if (this.props.transparent) {
        options.chrome = options.chrome + ' transparent';
      }

      return options;
    }
  }, {
    key: "buildOptions",
    value: function buildOptions() {
      var options = Object.assign({}, this.props.options);

      if (this.props.autoHeight) {
        options.height = this.refs.embedContainer.parentNode.offsetHeight;
      }

      options = Object.assign({}, options, {
        theme: this.props.theme,
        linkColor: this.props.linkColor,
        borderColor: this.props.borderColor,
        lang: this.props.lang
      });
      return options;
    }
  }, {
    key: "renderWidget",
    value: function renderWidget(options) {
      if (!this.isMountCanceled) {
        window.twttr.widgets.createTimeline({
          sourceType: this.props.sourceType,
          screenName: this.props.screenName,
          userId: this.props.userId,
          ownerScreenName: this.props.ownerScreenName,
          slug: this.props.slug,
          id: this.props.id || this.props.widgetId,
          url: this.props.url
        }, this.refs.embedContainer, options);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterTimelineEmbed, aborting load.');
            return;
          }

          var options = _this.buildOptions();
          /** Append chrome options */


          options = _this.buildChromeOptions(options);

          _this.renderWidget(options);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterTimelineEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTimelineEmbed, "propTypes", {
  /**
       * This can be either of profile, likes, list, collection, URL, widget
       */
  sourceType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['profile', 'likes', 'list', 'collection', 'URL', 'widget']).isRequired,

  /**
       * username of twitter handle as String
       */
  screenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return !props.hasOwnProperty('userId') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * UserId of twitter handle as number
       */
  userId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, function (props) {
    return !props.hasOwnProperty('screenName') && (props.sourceType === 'profile' || props.sourceType === 'likes');
  }),

  /**
       * To show list, used along with slug
       */
  ownerScreenName: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, used along with ownerScreenName
       */
  slug: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('id');
  }),

  /**
       * To show list, unique list id
       * Also used with collections, in that case its valid collection id
       */
  id: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]), function (props) {
    return props.sourceType === 'list' && !props.hasOwnProperty('ownerScreenName') && !props.hasOwnProperty('slug') || props.sourceType === 'collection';
  }),

  /**
       * To show twitter content with url.
       * Supported content includes profiles, likes, lists, and collections.
       */
  url: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'url';
  }),

  /**
       * To show custom widget
       */
  widgetId: react_proptype_conditional_require__WEBPACK_IMPORTED_MODULE_8___default()(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, function (props) {
    return props.sourceType === 'widget';
  }),

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
       * Automatically fit into parent container height
       */
  autoHeight: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * With dark or light theme
       */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['dark', 'light']),

  /**
       * With custom link colors. Note: Only Hex colors are supported.
       */
  linkColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * With custom border colors. Note: Only Hex colors are supported.
       */
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
       * Hide the header from timeline
       */
  noHeader: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the footer from timeline
       */
  noFooter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the border from timeline
       */
  noBorders: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Hide the scrollbars
       */
  noScrollbar: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Enable Transparancy
       */
  transparent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
       * Custom language code. Supported codes here: https://developer.twitter.com/en/docs/twitter-for-websites/twitter-for-websites-supported-languages/overview.html
       */
  lang: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

var TwitterShareButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterShareButton, _Component);

  function TwitterShareButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterShareButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterShareButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterShareButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterShareButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createShareButton(_this.props.url, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterShareButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterShareButton, "propTypes", {
  /**
  * Url for sharing
  */
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
  * Additional options for overriding config. Details at : https://dev.twitter.com/web/tweet-button/parameters
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterFollowButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterFollowButton, _Component);

  function TwitterFollowButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterFollowButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterFollowButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterFollowButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterFollowButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createFollowButton(_this.props.screenName, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterFollowButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterFollowButton, "propTypes", {
  /**
       * Username of twitter user which will be followed on click
       */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterHashtagButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterHashtagButton, _Component);

  function TwitterHashtagButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterHashtagButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterHashtagButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterHashtagButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterHashtagButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createHashtagButton(_this.props.tag, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterHashtagButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterHashtagButton, "propTypes", {
  /**
       * Tag name for hashtag button
       */
  tag: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to be added to the button
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterMentionButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMentionButton, _Component);

  function TwitterMentionButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMentionButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMentionButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMentionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMentionButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createMentionButton(_this.props.screenName, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterMentionButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMentionButton, "propTypes", {
  /**
   * Username to which you will need to tweet
   */
  screenName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterTweetEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterTweetEmbed, _Component);

  function TwitterTweetEmbed() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterTweetEmbed);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterTweetEmbed).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterTweetEmbed, [{
    key: "renderWidget",
    value: function renderWidget() {
      var _this = this;

      if (!window.twttr) {
        console.error('Failure to load window.twttr in TwitterTweetEmbed, aborting load.');
        return;
      }

      if (!this.isMountCanceled) {
        window.twttr.widgets.createTweet(this.props.tweetId, this.refs.embedContainer, this.props.options).then(function (el) {
          if (_this.props.onLoaded) {
            _this.props.onLoaded(el);
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          _this2.renderWidget();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterTweetEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterTweetEmbed, "propTypes", {
  /**
       * Tweet id that needs to be shown
       */
  tweetId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
       * Additional options to pass to twitter widget plugin
       */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
       * Callback to call when the widget is loaded
       */
  onLoaded: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
});

var TwitterMomentShare =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterMomentShare, _Component);

  function TwitterMomentShare() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterMomentShare);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterMomentShare).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterMomentShare, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterMomentShare, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createMoment(_this.props.momentId, _this.refs.shareMoment, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "shareMoment"
      });
    }
  }]);

  return TwitterMomentShare;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterMomentShare, "propTypes", {
  /**
   * id of Twitter moment to show
   */
  momentId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterDMButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterDMButton, _Component);

  function TwitterDMButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterDMButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterDMButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterDMButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterDMButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createDMButton(_this.props.id, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterDMButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterDMButton, "propTypes", {
  /**
  * Twitter user id for DM button
  */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,

  /**
  * Additional options to be added to the button
  */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});

var TwitterVideoEmbed =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterVideoEmbed, _Component);

  function TwitterVideoEmbed() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterVideoEmbed);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterVideoEmbed).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterVideoEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterVideoEmbed, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createVideo(_this.props.id, _this.refs.embedContainer);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterVideoEmbed;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterVideoEmbed, "propTypes", {
  /**
       * Id of video tweet.
       */
  id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
});

var TwitterOnAirButton =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TwitterOnAirButton, _Component);

  function TwitterOnAirButton() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TwitterOnAirButton);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TwitterOnAirButton).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TwitterOnAirButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (exenv__WEBPACK_IMPORTED_MODULE_9___default.a.canUseDOM) {
        var script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

        script(twitter_widget_js, 'twitter-embed', function () {
          if (!window.twttr) {
            console.error('Failure to load window.twttr in TwitterOnAirButton, aborting load.');
            return;
          }

          if (!_this.isMountCanceled) {
            window.twttr.widgets.createPeriscopeOnAirButton(_this.props.username, _this.refs.embedContainer, _this.props.options);
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMountCanceled = true;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        ref: "embedContainer"
      });
    }
  }]);

  return TwitterOnAirButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TwitterOnAirButton, "propTypes", {
  /**
   * Username for which you require periscope on air button
   */
  username: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,

  /**
   * Additional options for overriding config.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
});




/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extensions_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extensions/attributes */ "./src/extensions/attributes/index.js");
/* harmony import */ var _extensions_advanced_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/advanced-controls */ "./src/extensions/advanced-controls/index.js");
/* harmony import */ var _extensions_page_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/page-template */ "./src/extensions/page-template/index.js");
/* harmony import */ var _extensions_page_template__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_extensions_page_template__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extensions_disable_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/disable-title */ "./src/extensions/disable-title/index.js");
/* harmony import */ var _extensions_components_autosave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extensions/components/autosave */ "./src/extensions/components/autosave/index.js");
/* harmony import */ var _extensions_components_guidelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extensions/components/guidelines */ "./src/extensions/components/guidelines/index.js");
/* harmony import */ var _extensions_components_editor_height__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensions/components/editor-height */ "./src/extensions/components/editor-height/index.js");
/* harmony import */ var _extensions_components_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extensions/components/markdown */ "./src/extensions/components/markdown/index.js");
/* harmony import */ var _extensions_components_scroll_down__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extensions/components/scroll-down */ "./src/extensions/components/scroll-down/index.js");
/* harmony import */ var _extensions_components_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extensions/components/manager */ "./src/extensions/components/manager/index.js");
/* harmony import */ var _extensions_components_code_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extensions/components/code-editor */ "./src/extensions/components/code-editor/index.js");
/* harmony import */ var _extensions_components_heading_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extensions/components/heading-label */ "./src/extensions/components/heading-label/index.js");
/* harmony import */ var _extensions_components_featured_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extensions/components/featured-image */ "./src/extensions/components/featured-image/index.js");
/* harmony import */ var _extensions_components_reading_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./extensions/components/reading-time */ "./src/extensions/components/reading-time/index.js");
/* harmony import */ var _extensions_components_help_tips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extensions/components/help-tips */ "./src/extensions/components/help-tips/index.js");
/* harmony import */ var _extensions_components_selected_block__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extensions/components/selected-block */ "./src/extensions/components/selected-block/index.js");
/* harmony import */ var _extensions_block_settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extensions/block-settings */ "./src/extensions/block-settings/index.js");
/* harmony import */ var _extensions_formats___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/formats/ */ "./src/extensions/formats/index.js");
/* harmony import */ var _extensions_block_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extensions/block-toolbar */ "./src/extensions/block-toolbar/index.js");
/* harmony import */ var _extensions_transform_empty_paragraphs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extensions/transform/empty-paragraphs */ "./src/extensions/transform/empty-paragraphs/index.js");
/* harmony import */ var _extensions_block_styles___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./extensions/block-styles/ */ "./src/extensions/block-styles/index.js");
/* harmony import */ var _extensions_shortcuts_select_parent_block__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./extensions/shortcuts/select-parent-block */ "./src/extensions/shortcuts/select-parent-block/index.js");
/* harmony import */ var _blocks_import__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/import */ "./src/blocks/import/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType; // Extensions

/**
 * Internal dependencies
 */




 //Components on Dropdown Menu












 //Block Settings

 // Formats

 //Block Toolbar

 // Block Transformation

 // Styles

 // Shortcuts

 // Register Blocks


function registerBlocks() {
  [_blocks_import__WEBPACK_IMPORTED_MODULE_23__].forEach(function (block) {
    if (!block) {
      return;
    }

    var name = block.name,
        settings = block.settings;
    registerBlockType("editorskit/".concat(name), _objectSpread({
      category: 'common'
    }, settings));
  });
}
registerBlocks();

/***/ }),

/***/ "./src/blocks/import/components/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/import/components/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_import__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/import */ "./src/blocks/import/utils/import.js");








/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var withInstanceId = wp.compose.withInstanceId;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$blocks = wp.blocks,
    parse = _wp$blocks.parse,
    createBlock = _wp$blocks.createBlock;
var MediaUploadCheck = wp.blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    DropZone = _wp$components.DropZone,
    FormFileUpload = _wp$components.FormFileUpload,
    Placeholder = _wp$components.Placeholder,
    Notice = _wp$components.Notice;
var ALLOWED_BG_MEDIA_TYPES = ['json'];
/**
 * Block edit function
 */

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.state = {
      isLoading: false,
      error: null
    };
    _this.isStillMounted = true;
    _this.addFile = _this.addFile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var file = this.props.attributes.file;

      if (file) {
        this.setState({
          isLoading: true
        });
        this.addFile(file);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "insertImportedBlocks",
    value: function insertImportedBlocks(blocks) {
      var onClose = this.props.onClose;
      blocks = parse(blocks);
      var toSelect = [];
      var blockIndex = select('core/block-editor').getBlockInsertionPoint();

      if (blocks.length > 0) {
        for (var block in blocks) {
          var created = createBlock(blocks[block].name, blocks[block].attributes, blocks[block].innerBlocks);
          dispatch('core/block-editor').insertBlocks(created, parseInt(blockIndex.index) + parseInt(block));

          if (typeof created !== 'undefined') {
            toSelect.push(created.clientId);
          }
        } //remove insertion point if empty


        dispatch('core/block-editor').removeBlock(this.props.clientId); //select inserted blocks

        if (toSelect.length > 0) {
          dispatch('core/block-editor').multiSelect(toSelect[0], toSelect.reverse()[0]);
        }
      }

      onClose();
    }
  }, {
    key: "addFile",
    value: function addFile(files) {
      var _this2 = this;

      var file = files[0];

      if (files.target) {
        file = event.target.files[0];
      }

      if (!file) {
        return;
      }

      this.setState({
        isLoading: true
      });
      Object(_utils_import__WEBPACK_IMPORTED_MODULE_7__["default"])(file).then(function (reusableBlock) {
        if (!_this2.isStillMounted) {
          return;
        }

        _this2.setState({
          isLoading: false
        });

        _this2.insertImportedBlocks(reusableBlock);
      }).catch(function (error) {
        if (!_this2.isStillMounted) {
          return;
        }

        var uiMessage;

        switch (error.message) {
          case 'Invalid JSON file':
            uiMessage = __('Invalid JSON file', 'block-options');
            break;

          case 'Invalid Reusable Block JSON file':
            uiMessage = __('Invalid Reusable Block JSON file', 'block-options');
            break;

          default:
            uiMessage = __('Unknown error', 'block-options');
        }

        _this2.setState({
          isLoading: false,
          error: uiMessage
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          error = _this$state.error;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Placeholder, {
        icon: "download",
        label: __('Import from JSON', 'block-options'),
        instructions: __('Drag a file or upload a new one from your device.', 'block-options'),
        className: "editor-media-placeholder",
        notices: error && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Notice, {
          status: "error"
        }, error)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(DropZone, {
        onFilesDrop: this.addFile,
        label: __('Import from JSON', 'block-options')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(FormFileUpload, {
        isLarge: true,
        className: "editor-media-placeholder__button",
        onChange: this.addFile,
        accept: ALLOWED_BG_MEDIA_TYPES,
        isBusy: isLoading,
        disabled: isLoading,
        multiple: false
      }, __('Upload', 'block-options')))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(Edit));

/***/ }),

/***/ "./src/blocks/import/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/import/icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var SVG = wp.components.SVG;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
})));

/***/ }),

/***/ "./src/blocks/import/index.js":
/*!************************************!*\
  !*** ./src/blocks/import/index.js ***!
  \************************************/
/*! exports provided: name, title, icon, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/import/components/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/blocks/import/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms */ "./src/blocks/import/transforms.js");
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
/**
 * Block constants
 */

var name = 'import';

var title = __('Import', 'block-options');

var keywords = [__('import', 'block-options'), __('download', 'block-options'), __('migrate', 'block-options')];
var blockAttributes = {
  file: {
    type: 'object'
  }
};
var settings = {
  title: title,
  description: __('Import blocks exported using EditorsKit plugin.', 'block-options'),
  keywords: keywords,
  attributes: blockAttributes,
  supports: {
    align: true,
    alignWide: false,
    alignFull: false,
    customClassName: false,
    className: false,
    html: false
  },
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/import/transforms.js":
/*!*****************************************!*\
  !*** ./src/blocks/import/transforms.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var createBlock = wp.blocks.createBlock;
var transforms = {
  from: [{
    type: 'files',
    isMatch: function isMatch(files) {
      return files[0].type === 'application/json';
    },
    // We define a lower priorty (higher number) than the default of 10. This
    // ensures that the Import block is only created as a fallback.
    priority: 14,
    transform: function transform(files) {
      var blocks = [];
      blocks.push(createBlock('editorskit/import', {
        file: files
      }));
      return blocks;
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/blocks/import/utils/file.js":
/*!*****************************************!*\
  !*** ./src/blocks/import/utils/file.js ***!
  \*****************************************/
/*! exports provided: readTextFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTextFile", function() { return readTextFile; });
/**
 * Reads the textual content of the given file.
 *
 * @param  {File} file        File.
 * @return {Promise<string>}  Content of the file.
 */
function readTextFile(file) {
  var reader = new window.FileReader();
  return new Promise(function (resolve) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.readAsText(file);
  });
}

/***/ }),

/***/ "./src/blocks/import/utils/import.js":
/*!*******************************************!*\
  !*** ./src/blocks/import/utils/import.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file */ "./src/blocks/import/utils/file.js");



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Import a reusable block from a JSON file.
 *
 * @param {File}     file File.
 * @return {Promise} Promise returning the imported reusable block.
 */

function importReusableBlock(_x) {
  return _importReusableBlock.apply(this, arguments);
}

function _importReusableBlock() {
  _importReusableBlock = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
    var fileContent, parsedContent, postType, reusableBlock;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_file__WEBPACK_IMPORTED_MODULE_3__["readTextFile"])(file);

          case 2:
            fileContent = _context.sent;
            _context.prev = 3;
            parsedContent = JSON.parse(fileContent);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](3);
            throw new Error('Invalid JSON file');

          case 10:
            if (!(parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(parsedContent.title) || !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(parsedContent.content))) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", importCoreBlocks(parsedContent));

          case 12:
            _context.next = 14;
            return wp.apiFetch({
              path: "/wp/v2/types/wp_block"
            });

          case 14:
            postType = _context.sent;
            _context.next = 17;
            return wp.apiFetch({
              path: "/wp/v2/".concat(postType.rest_base),
              data: {
                title: parsedContent.title,
                content: parsedContent.content,
                status: 'publish'
              },
              method: 'POST'
            });

          case 17:
            reusableBlock = _context.sent;

            if (!reusableBlock.id) {
              _context.next = 20;
              break;
            }

            return _context.abrupt("return", '<!-- wp:block {"ref":' + reusableBlock.id + '} /-->');

          case 20:
            throw new Error('Invalid Reusable Block JSON file contents');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 7]]);
  }));
  return _importReusableBlock.apply(this, arguments);
}

function importCoreBlocks(parsedContent) {
  if (parsedContent.__file !== 'core_block' || !parsedContent.content || !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(parsedContent.content)) {
    throw new Error('Invalid JSON file');
  }

  return parsedContent.content;
}

/* harmony default export */ __webpack_exports__["default"] = (importReusableBlock);

/***/ }),

/***/ "./src/extensions/advanced-controls/custom-class-name/index.js":
/*!*********************************************************************!*\
  !*** ./src/extensions/advanced-controls/custom-class-name/index.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var _wp$hooks = wp.hooks,
    addFilter = _wp$hooks.addFilter,
    removeFilter = _wp$hooks.removeFilter;
var Fragment = wp.element.Fragment;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent,
    withState = _wp$compose.withState;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var InspectorAdvancedControls = wp.blockEditor.InspectorAdvancedControls;
var FormTokenField = wp.components.FormTokenField;
var enhance = compose(withState({
  customClassNames: []
}), withSelect(function (selectFn, block) {
  var selectedBlock = selectFn('core/block-editor').getSelectedBlock();
  var getClasses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(selectedBlock, 'attributes.className');

  if (getClasses) {
    getClasses = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["replace"])(getClasses, ',', ' ');
  }

  if (selectedBlock && getClasses && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["join"])(block.customClassNames, ' ') !== getClasses) {
    //apply to selected block only
    if (block.clientId === selectedBlock.clientId) {
      // props.attributes.className || ''
      block.setState({
        customClassNames: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["split"])(getClasses, ' ')
      });
    }
  }

  return {
    suggestions: selectFn('core/editor').getEditorSettings().editorskitCustomClassNames
  };
}));
/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */

var withInspectorControl = createHigherOrderComponent(function (BlockEdit) {
  return enhance(function (_ref) {
    var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    var hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);
    var customClassNames = props.customClassNames,
        suggestions = props.suggestions,
        setState = props.setState;

    if (hasCustomClassName && props.isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FormTokenField, {
        label: __('Additional CSS Class(es)', 'block-options'),
        value: customClassNames,
        suggestions: suggestions,
        maxSuggestions: 20,
        onChange: function onChange(nextValue) {
          props.setAttributes({
            className: nextValue !== '' ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["join"])(nextValue, ' ') : undefined
          });
          setState({
            customClassNames: nextValue !== '' ? nextValue : undefined
          });
        }
      })));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
  });
}, 'withInspectorControl');

function applyFilters() {
  if (!select('core/edit-post').isFeatureActive('disableEditorsKitCustomClassNamesTools')) {
    removeFilter('editor.BlockEdit', 'core/editor/custom-class-name/with-inspector-control');
    addFilter('editor.BlockEdit', 'editorskit/custom-class-name/with-inspector-control', withInspectorControl);
  }
}

applyFilters();

/***/ }),

/***/ "./src/extensions/advanced-controls/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/advanced-controls/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_class_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-class-name */ "./src/extensions/advanced-controls/custom-class-name/index.js");
/* harmony import */ var _options_devices___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/devices/ */ "./src/extensions/advanced-controls/options/devices/index.js");
/* harmony import */ var _options_state___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/state/ */ "./src/extensions/advanced-controls/options/state/index.js");
/* harmony import */ var _options_height___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/height/ */ "./src/extensions/advanced-controls/options/height/index.js");



/**
 * Internal dependencies
 */




/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var _wp$blockEditor = wp.blockEditor,
    InspectorAdvancedControls = _wp$blockEditor.InspectorAdvancedControls,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var PanelBody = wp.components.PanelBody;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var restrictedBlocks = ['core/block', 'core/freeform', 'core/shortcode', 'core/template', 'core/nextpage', 'editorskit/import'];
var enhance = compose(withSelect(function () {
  return {
    isDisabledDevices: select('core/edit-post').isFeatureActive('disableEditorsKitDevicesVisibility'),
    isDisabledUserState: select('core/edit-post').isFeatureActive('disableEditorsKitUserStateVisibility')
  };
}));
/**
 * Add custom CoBlocks attributes to selected blocks
 *
 * @param {Function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */

var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return enhance(function (_ref) {
    var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        isDisabledDevices = props.isDisabledDevices,
        isDisabledUserState = props.isDisabledUserState;
    var editorskit = attributes.editorskit,
        blockOpts = attributes.blockOpts;
    var withFullScreenHeight = hasBlockSupport(name, 'hasHeightFullScreen'); //compatibility with version 1

    if (typeof editorskit !== 'undefined' && !editorskit.migrated && blockOpts) {
      props.attributes.editorskit = Object.assign(props.attributes.editorskit, {
        devices: false,
        desktop: blockOpts.devices === 'show' && blockOpts.desktop !== 'on' || blockOpts.devices === 'hide' && blockOpts.desktop === 'on' ? false : true,
        tablet: blockOpts.devices === 'show' && blockOpts.tablet !== 'on' || blockOpts.devices === 'hide' && blockOpts.tablet === 'on' ? false : true,
        mobile: blockOpts.devices === 'show' && blockOpts.mobile !== 'on' || blockOpts.devices === 'hide' && blockOpts.mobile === 'on' ? false : true,
        loggedin: blockOpts.state === 'out' && blockOpts.state !== 'in' ? false : true,
        loggedout: blockOpts.state === 'in' && blockOpts.state !== 'out' ? false : true,
        acf_visibility: blockOpts.acf_visibility ? blockOpts.acf_visibility : '',
        acf_field: blockOpts.acf_field ? blockOpts.acf_field : '',
        acf_condition: blockOpts.acf_condition ? blockOpts.acf_condition : '',
        acf_value: blockOpts.acf_value ? blockOpts.acf_value : '',
        logic: blockOpts.logic ? blockOpts.logic : '',
        migrated: true
      }); //remove unnecessary classes

      if (!props.attributes.className) {
        props.attributes.className = '';
      }

      var newClassNames = props.attributes.className.replace('b' + blockOpts.id, '').replace('blockopts-show', '').replace('blockopts-hide', '').replace('blockopts-desktop', '').replace('blockopts-tablet', '').replace('blockopts-mobile', '');
      newClassNames = newClassNames.trim();
      props.attributes.className = newClassNames;
      setAttributes({
        editorskit: props.attributes.editorskit,
        className: newClassNames
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), withFullScreenHeight && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, Object(_options_height___WEBPACK_IMPORTED_MODULE_5__["default"])(props)), isSelected && !isDisabledDevices && !restrictedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Responsive', 'block-options'),
      initialOpen: false,
      className: "editorskit-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("small", null, __('Attention: The display settings (show/hide for mobile, tablet or desktop) will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'block-options')), Object(_options_devices___WEBPACK_IMPORTED_MODULE_3__["default"])(props))), isSelected && !restrictedBlocks.includes(name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorAdvancedControls, null, !isDisabledUserState && Object(_options_state___WEBPACK_IMPORTED_MODULE_4__["default"])(props)));
  });
}, 'withAdvancedControls');
addFilter('editor.BlockEdit', 'editorskit/advanced', withAdvancedControls);

/***/ }),

/***/ "./src/extensions/advanced-controls/options/acf/api.js":
/*!*************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/acf/api.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Use withSelect instead of withAPIData
 */
var _wp = wp,
    apiFetch = _wp.apiFetch;
var registerStore = wp.data.registerStore;
var actions = {
  setACFields: function setACFields(ACFfields) {
    return {
      type: 'SET_ACF_FIELDS',
      ACFfields: ACFfields
    };
  },
  receiveACFields: function receiveACFields(path) {
    return {
      type: 'RECEIVE_ACF_FIELDS',
      path: path
    };
  },
  fetchFromAPI: function fetchFromAPI(path) {
    return {
      type: 'FETCH_FROM_API',
      path: path
    };
  }
};
registerStore('editorskit/acf', {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      ACFfields: {}
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_ACF_FIELDS':
        return _objectSpread({}, state, {
          ACFfields: action.ACFfields
        });

      case 'RECEIVE_ACF_FIELDS':
        return action.ACFfields;
    }

    return state;
  },
  actions: actions,
  selectors: {
    receiveACFields: function receiveACFields(state) {
      var ACFfields = state.ACFfields;
      return ACFfields;
    }
  },
  controls: {
    FETCH_FROM_API: function FETCH_FROM_API(action) {
      return apiFetch({
        path: action.path
      });
    }
  },
  resolvers: {
    receiveACFields:
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function receiveACFields() {
      var path, ACFfields;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function receiveACFields$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              path = '/editorskit/v1/acf';
              _context.next = 3;
              return actions.fetchFromAPI(path);

            case 3:
              ACFfields = _context.sent;
              _context.next = 6;
              return actions.setACFields(ACFfields);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, receiveACFields);
    })
  }
});

/***/ }),

/***/ "./src/extensions/advanced-controls/options/acf/index.js":
/*!***************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/acf/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api.js */ "./src/extensions/advanced-controls/options/acf/api.js");








/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress Dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextareaControl = _wp$components.TextareaControl;

var ACFOptions =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ACFOptions, _Component);

  function ACFOptions() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ACFOptions);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ACFOptions).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ACFOptions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          acf = _this$props.acf,
          selectedBlock = _this$props.selectedBlock;
      var clientId = selectedBlock.clientId,
          attributes = selectedBlock.attributes,
          reloadModal = selectedBlock.reloadModal;
      var editorskit = attributes.editorskit;

      var onSelectFields = function onSelectFields(key, value) {
        delete editorskit[key];
        var blockOptions = Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, value), editorskit);
        dispatch('core/block-editor').updateBlockAttributes(clientId, {
          editorskit: blockOptions
        });

        if (reloadModal) {
          reloadModal();
        }
      };

      var acfFields = [{
        label: __('Select Field', 'block-options'),
        value: ''
      }];

      if (!acf) {
        return;
      }

      if (typeof acf !== 'undefined') {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(acf)) {
          var acfFlds = acf;

          for (var acfFld in acfFlds) {
            acfFields.push({
              label: acfFlds[acfFld],
              value: acfFld
            });
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "editorskit-button-group-container editorskit-button-group-acf"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
            className: "components-base-control__label"
          }, __('Advanced Custom Fields', 'block-options')), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
            value: typeof editorskit.acf_visibility !== 'undefined' && editorskit.acf_visibility !== '' ? editorskit.acf_visibility : '',
            options: [{
              label: __('Select Visibility Option', 'block-options'),
              value: 'none'
            }, {
              label: __('Hide when Condition\'s met', 'block-options'),
              value: 'hide'
            }, {
              label: __('Show when Condition\'s met', 'block-options'),
              value: 'show'
            }],
            onChange: function onChange(n) {
              return onSelectFields('acf_visibility', n);
            }
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
            value: typeof editorskit.acf_field !== 'undefined' && editorskit.acf_field !== '' ? editorskit.acf_field : '',
            options: acfFields,
            onChange: function onChange(n) {
              return onSelectFields('acf_field', n);
            }
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(SelectControl, {
            value: typeof editorskit.acf_condition !== 'undefined' && editorskit.acf_condition !== '' ? editorskit.acf_condition : '',
            options: [{
              label: __('Select Condition', 'block-options'),
              value: 'none'
            }, {
              label: __('Is Equal to', 'block-options'),
              value: 'equal'
            }, {
              label: __('Is Not Equal to', 'block-options'),
              value: 'not_equal'
            }, {
              label: __('Contains', 'block-options'),
              value: 'contains'
            }, {
              label: __('Does Not Contain', 'block-options'),
              value: 'not_contains'
            }, {
              label: __('Is Empty', 'block-options'),
              value: 'empty'
            }, {
              label: __('Is Not Empty', 'block-options'),
              value: 'not_empty'
            }],
            onChange: function onChange(n) {
              return onSelectFields('acf_condition', n);
            }
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TextareaControl, {
            label: __('Conditional Value', 'block-options'),
            rows: "3",
            value: editorskit.acf_value,
            onChange: function onChange(n) {
              return onSelectFields('acf_value', n);
            },
            help: __('Additional support for Advanced Custom Fields plugin. Will automatically show when you have the plugin installed and activated.', 'block-options')
          })));
        }
      }

      return null;
    }
  }]);

  return ACFOptions;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  return {
    acf: select('editorskit/acf').receiveACFields()
  };
})(ACFOptions));

/***/ }),

/***/ "./src/extensions/advanced-controls/options/devices/index.js":
/*!*******************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/devices/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress Dependencies
 */
var __ = wp.i18n.__;
var dispatch = wp.data.dispatch;
var Fragment = wp.element.Fragment;
var ToggleControl = wp.components.ToggleControl;

var DevicesOptions = function DevicesOptions(props) {
  var clientId = props.clientId,
      attributes = props.attributes,
      reloadModal = props.reloadModal;
  var editorskit = attributes.editorskit;

  var onSelectDevice = function onSelectDevice(device) {
    var newValue = !editorskit[device];
    delete editorskit[device];
    var blockOptions = Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, device, newValue), editorskit);
    dispatch('core/block-editor').updateBlockAttributes(clientId, {
      editorskit: blockOptions
    });

    if (reloadModal) {
      reloadModal();
    }
  };

  if (typeof editorskit === 'undefined') {
    return;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Hide on Desktop', 'block-options'),
    checked: typeof editorskit.desktop !== 'undefined' && !editorskit.desktop,
    onChange: function onChange() {
      return onSelectDevice('desktop');
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Hide on Tablet', 'block-options'),
    checked: typeof editorskit.tablet !== 'undefined' && !editorskit.tablet,
    onChange: function onChange() {
      return onSelectDevice('tablet');
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Hide on Mobile', 'block-options'),
    checked: typeof editorskit.mobile !== 'undefined' && !editorskit.mobile,
    onChange: function onChange() {
      return onSelectDevice('mobile');
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DevicesOptions);

/***/ }),

/***/ "./src/extensions/advanced-controls/options/height/index.js":
/*!******************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/height/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress Dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var ToggleControl = wp.components.ToggleControl;

var VerticalHeightToggle = function VerticalHeightToggle(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var isHeightFullScreen = attributes.isHeightFullScreen;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Full Screen Height', 'block-options'),
    checked: !!isHeightFullScreen,
    onChange: function onChange() {
      return setAttributes({
        isHeightFullScreen: !isHeightFullScreen
      });
    },
    help: isHeightFullScreen ? __('Full screen height is enabled.', 'block-options') : __('Toggle to display this block\'s height full screen of the browser viewport.', 'block-options')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VerticalHeightToggle);

/***/ }),

/***/ "./src/extensions/advanced-controls/options/logic/index.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/logic/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress Dependencies
 */
var __ = wp.i18n.__;
var dispatch = wp.data.dispatch;
var Fragment = wp.element.Fragment;
var TextareaControl = wp.components.TextareaControl;

var LogicOptions = function LogicOptions(props) {
  var clientId = props.clientId,
      attributes = props.attributes,
      reloadModal = props.reloadModal;
  var editorskit = attributes.editorskit;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editorskit-button-group-container editorskit-button-group-logic"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextareaControl, {
    rows: "2",
    label: __('Conditional Logic', 'block-options'),
    help: __('Add valid PHP conditional tags for custom & advanced visibility options.', 'block-options'),
    value: editorskit.logic ? editorskit.logic : null,
    onChange: function onChange(newValue) {
      delete editorskit.logic;
      var blockOptions = Object.assign({
        logic: newValue
      }, editorskit);
      dispatch('core/block-editor').updateBlockAttributes(clientId, {
        editorskit: blockOptions
      });

      if (reloadModal) {
        reloadModal();
      }
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LogicOptions);

/***/ }),

/***/ "./src/extensions/advanced-controls/options/state/index.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/advanced-controls/options/state/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress Dependencies
 */
var __ = wp.i18n.__;
var dispatch = wp.data.dispatch;
var Fragment = wp.element.Fragment;
var ToggleControl = wp.components.ToggleControl;

var UserStateOptions = function UserStateOptions(props) {
  var clientId = props.clientId,
      attributes = props.attributes,
      reloadModal = props.reloadModal;
  var editorskit = attributes.editorskit;

  var onSelectUser = function onSelectUser(state) {
    var newValue = !editorskit[state];
    delete editorskit[state];
    var blockOptions = Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, state, newValue), editorskit);
    dispatch('core/block-editor').updateBlockAttributes(clientId, {
      editorskit: blockOptions
    });

    if (reloadModal) {
      reloadModal();
    }
  };

  if (typeof editorskit === 'undefined') {
    return;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "editorskit-user-state-controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", {
    className: "editorskit-divider"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Hide on Loggedin Users', 'block-options'),
    help: !editorskit.loggedin ? __('Hidden when users are logged in.', 'block-options') : __('Toggle to hide this block when users are not logged in.', 'block-options'),
    checked: typeof editorskit.loggedin !== 'undefined' && !editorskit.loggedin,
    onChange: function onChange() {
      return onSelectUser('loggedin');
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Hide on Loggedout Users', 'block-options'),
    help: !editorskit.loggedout ? __('Hidden on guests or logged out users.', 'block-options') : __('Toggle to hide this block when users are guests or logged out.', 'block-options'),
    checked: typeof editorskit.loggedout !== 'undefined' && !editorskit.loggedout,
    onChange: function onChange() {
      return onSelectUser('loggedout');
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserStateOptions);

/***/ }),

/***/ "./src/extensions/attributes/index.js":
/*!********************************************!*\
  !*** ./src/extensions/attributes/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress Dependencies
 */

var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var restrictedBlocks = ['core/freeform', 'core/shortcode', 'core/nextpage'];
var blocksWithFullScreen = ['core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text'];
/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function addAttributes(settings) {
  if (typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      editorskit: {
        type: 'object',
        default: {
          devices: false,
          desktop: true,
          tablet: true,
          mobile: true,
          loggedin: true,
          loggedout: true,
          acf_visibility: '',
          acf_field: '',
          acf_condition: '',
          acf_value: '',
          migrated: false
        }
      }
    }); //for version 1 compatibility and migration

    settings.attributes = Object.assign(settings.attributes, {
      blockOpts: {
        type: 'object'
      }
    }); //Add vertical full screen support

    if (blocksWithFullScreen.includes(settings.name)) {
      if (!settings.supports) {
        settings.supports = {};
      }

      settings.supports = Object.assign(settings.supports, {
        hasHeightFullScreen: true
      });
    }

    if (hasBlockSupport(settings, 'hasHeightFullScreen')) {
      if (typeof settings.attributes !== 'undefined') {
        if (!settings.attributes.isHeightFullScreen) {
          settings.attributes = Object.assign(settings.attributes, {
            isHeightFullScreen: {
              type: 'boolean',
              default: false
            }
          });
        }
      }
    }
  }

  return settings;
}
/**
 * Add custom EditorsKit attributes to selected blocks
 *
 * @param {Function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */


var withAttributes = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var attributes = props.attributes;

    if (typeof attributes.editorskit === 'undefined') {
      attributes.editorskit = [];
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockEdit, props));
  };
}, 'withAttributes');
/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function applyExtraClass(extraProps, blockType, attributes) {
  var editorskit = attributes.editorskit,
      isHeightFullScreen = attributes.isHeightFullScreen;

  if (typeof editorskit !== 'undefined' && !restrictedBlocks.includes(blockType.name)) {
    if (typeof editorskit.id !== 'undefined') {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(extraProps.className, editorskit.id);
    }

    if (typeof editorskit.desktop !== 'undefined' && !editorskit.desktop) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(extraProps.className, 'editorskit-no-desktop');
    }

    if (typeof editorskit.tablet !== 'undefined' && !editorskit.tablet) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(extraProps.className, 'editorskit-no-tablet');
    }

    if (typeof editorskit.mobile !== 'undefined' && !editorskit.mobile) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(extraProps.className, 'editorskit-no-mobile');
    }
  }

  if (hasBlockSupport(blockType.name, 'hasHeightFullScreen') && isHeightFullScreen) {
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(extraProps.className, 'h-screen');
  }

  return extraProps;
}

var addEditorBlockAttributes = createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes;
    var isHeightFullScreen = attributes.isHeightFullScreen;
    var wrapperProps = props.wrapperProps;
    var customData = {};

    if (hasBlockSupport(name, 'hasHeightFullScreen') && isHeightFullScreen) {
      customData = Object.assign(customData, {
        'data-editorskit-h-screen': 1
      });
    }

    wrapperProps = _objectSpread({}, wrapperProps, {}, customData);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      wrapperProps: wrapperProps
    }));
  };
}, 'addEditorBlockAttributes');
addFilter('blocks.registerBlockType', 'editorskit/custom/attributes', addAttributes);
addFilter('editor.BlockEdit', 'editorskit/attributes', withAttributes);
addFilter('blocks.getSaveContent.extraProps', 'editorskit/applyExtraClass', applyExtraClass);
addFilter('editor.BlockListBlock', 'editorskit/addEditorBlockAttributes', addEditorBlockAttributes);

/***/ }),

/***/ "./src/extensions/block-navigation/list.js":
/*!*************************************************!*\
  !*** ./src/extensions/block-navigation/list.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockNavigationList; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var Button = wp.components.Button;
var getBlockType = wp.blocks.getBlockType;
var __ = wp.i18n.__;
var BlockIcon = wp.blockEditor.BlockIcon;
function BlockNavigationList(_ref) {
  var blocks = _ref.blocks,
      selectedBlockClientId = _ref.selectedBlockClientId,
      selectBlock = _ref.selectBlock,
      showNestedBlocks = _ref.showNestedBlocks;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "editor-block-navigation__list block-editor-block-navigation__list",
      role: "list"
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(blocks, function (block) {
      var blockType = getBlockType(block.name);
      var isSelected = block.clientId === selectedBlockClientId;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
        key: block.clientId
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "editor-block-navigation__item block-editor-block-navigation__item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('editor-block-navigation__item-button block-editor-block-navigation__item-button', {
          'is-selected': isSelected
        }),
        onClick: function onClick() {
          return selectBlock(block.clientId);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockIcon, {
        icon: blockType.icon,
        showColors: true
      }), blockType.title, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "screen-reader-text"
      }, __('(selected block)')))), showNestedBlocks && !!block.innerBlocks && !!block.innerBlocks.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockNavigationList, {
        blocks: block.innerBlocks,
        selectedBlockClientId: selectedBlockClientId,
        selectBlock: selectBlock,
        showNestedBlocks: true
      }));
    }))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/***/ }),

/***/ "./src/extensions/block-settings/clear-formatting/components/controls.js":
/*!*******************************************************************************!*\
  !*** ./src/extensions/block-settings/clear-formatting/components/controls.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var withSpokenMessages = wp.components.withSpokenMessages;
var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$richText = wp.richText,
    create = _wp$richText.create,
    toHTMLString = _wp$richText.toHTMLString;
var allowedBlocks = ['core/paragraph', 'core/heading'];
/**
 * Render plugin
 */

var ClearBlockFormatting =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ClearBlockFormatting, _Component);

  function ClearBlockFormatting() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ClearBlockFormatting);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ClearBlockFormatting).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ClearBlockFormatting, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blockId = _this$props.blockId,
          blockName = _this$props.blockName,
          blockContent = _this$props.blockContent,
          clearBlockFormatting = _this$props.clearBlockFormatting;
      var record = create({
        html: blockContent
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginBlockSettingsMenuItem, {
        icon: "editor-removeformatting",
        label: __('Clear Block Formatting', 'block-options'),
        onClick: function onClick() {
          clearBlockFormatting(blockId, blockName, toHTMLString({
            value: _objectSpread({}, record, {
              formats: Array(record.formats.length)
            })
          }));
        }
      }));
    }
  }]);

  return ClearBlockFormatting;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    blockId: selectedBlock.clientId,
    blockName: selectedBlock.name,
    blockContent: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(selectedBlock, 'attributes.content'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitClearFormattingFormats')
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  return {
    clearBlockFormatting: function clearBlockFormatting(blockId, blockName, blockContent) {
      updateBlockAttributes(blockId, {
        content: blockContent
      });
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled && allowedBlocks.includes(props.blockName);
}), withSpokenMessages)(ClearBlockFormatting));

/***/ }),

/***/ "./src/extensions/block-settings/clear-formatting/index.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/block-settings/clear-formatting/index.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/block-settings/clear-formatting/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-block-clear-formatting', {
  icon: 'editor-removeformatting',
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/block-settings/copy/components/controls.js":
/*!*******************************************************************!*\
  !*** ./src/extensions/block-settings/copy/components/controls.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _copy_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../copy/icon */ "./src/extensions/block-settings/copy/icon.js");








/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    ClipboardButton = _wp$components.ClipboardButton;
var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var serialize = wp.blocks.serialize;
/**
 * Render plugin
 */

var CopyBlocks =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CopyBlocks, _Component);

  function CopyBlocks() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CopyBlocks);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CopyBlocks).apply(this, arguments));
    _this.getSelection = _this.getSelection.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CopyBlocks, [{
    key: "getSelection",
    value: function getSelection() {
      var _this$props = this.props,
          selectedBlockCount = _this$props.selectedBlockCount,
          selectedBlock = _this$props.selectedBlock;
      var cloned;
      var selectedBlocks = select('core/block-editor').getMultiSelectedBlocks();

      if (selectedBlockCount === 1) {
        cloned = serialize(selectedBlock);
      }

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(selectedBlocks) > 0) {
        cloned = serialize(selectedBlocks);
      }

      return cloned;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onCopy = _this$props2.onCopy,
          selectedBlock = _this$props2.selectedBlock;
      var selectedBlocks = select('core/block-editor').getMultiSelectedBlocks();

      if (!selectedBlock && Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(selectedBlocks) < 1) {
        return false;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginBlockSettingsMenuItem, {
        icon: null,
        label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ClipboardButton, {
          text: this.getSelection(),
          icon: _copy_icon__WEBPACK_IMPORTED_MODULE_8__["default"].copy,
          onCopy: onCopy
        }, __('Copy', 'block-options')),
        onClick: function onClick() {}
      }));
    }
  }]);

  return CopyBlocks;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var _select = select('core/block-editor'),
      getSelectedBlockCount = _select.getSelectedBlockCount,
      getSelectedBlock = _select.getSelectedBlock,
      getMultiSelectedBlocks = _select.getMultiSelectedBlocks;

  if (!getSelectedBlock()) {
    return {};
  }

  return {
    selectedBlockCount: getSelectedBlockCount(),
    selectedBlock: getSelectedBlock(),
    selectedBlocks: getMultiSelectedBlocks(),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitCopyOptions')
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/notices'),
      createNotice = _dispatch.createNotice;

  return {
    onCopy: function onCopy() {
      var selectedBlocks = select('core/block-editor').getMultiSelectedBlocks();

      var notice = __('Selected block copied.', 'block-options');

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["size"])(selectedBlocks) > 0) {
        notice = __('Selected blocks copied.', 'block-options');
      }

      createNotice('info', notice, {
        isDismissible: true,
        type: 'snackbar'
      });
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(CopyBlocks));

/***/ }),

/***/ "./src/extensions/block-settings/copy/icon.js":
/*!****************************************************!*\
  !*** ./src/extensions/block-settings/copy/icon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.copy = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/block-settings/copy/index.js":
/*!*****************************************************!*\
  !*** ./src/extensions/block-settings/copy/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/extensions/block-settings/copy/icon.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/block-settings/copy/components/controls.js");
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-copy', {
  icon: _icon__WEBPACK_IMPORTED_MODULE_0__["default"].copy,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/extensions/block-settings/export/components/export.js":
/*!*******************************************************************!*\
  !*** ./src/extensions/block-settings/export/components/export.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_export__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/export */ "./src/extensions/block-settings/export/utils/export.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/file */ "./src/extensions/block-settings/export/utils/file.js");








/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
var withSpokenMessages = wp.components.withSpokenMessages;
var serialize = wp.blocks.serialize;
/**
 * Render plugin
 */

var ExportManager =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ExportManager, _Component);

  function ExportManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExportManager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ExportManager).apply(this, arguments));
    _this.saveAsJSON = _this.saveAsJSON.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExportManager, [{
    key: "saveAsJSON",
    value: function saveAsJSON() {
      var _this$props = this.props,
          selectedBlockCount = _this$props.selectedBlockCount,
          selectedBlock = _this$props.selectedBlock,
          selectedBlocks = _this$props.selectedBlocks;

      if (selectedBlockCount < 1) {
        return;
      }

      var blocks;
      var title = 'editorskit/export';

      if (selectedBlockCount === 1) {
        //export as reusable when reusable is selected
        if (selectedBlock.name === 'core/block') {
          Object(_utils_export__WEBPACK_IMPORTED_MODULE_8__["default"])(selectedBlock.attributes.ref);
          return;
        }

        blocks = serialize(selectedBlock);
      }

      if (selectedBlockCount > 1) {
        blocks = serialize(selectedBlocks);
      } //do export magic


      var fileContent = JSON.stringify({
        __file: 'core_block',
        content: blocks
      }, null, 2);
      var fileName = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["kebabCase"])(title) + '.json';
      Object(_utils_file__WEBPACK_IMPORTED_MODULE_9__["download"])(fileName, fileContent, 'application/json');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginBlockSettingsMenuItem, {
        icon: "share-alt2",
        label: __('Export as JSON', 'block-options'),
        onClick: this.saveAsJSON
      }));
    }
  }]);

  return ExportManager;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  var _select = select('core/block-editor'),
      getSelectedBlockCount = _select.getSelectedBlockCount,
      getSelectedBlock = _select.getSelectedBlock,
      getMultiSelectedBlocks = _select.getMultiSelectedBlocks;

  var _select2 = select('core/block-editor'),
      getBlock = _select2.getBlock;

  return {
    selectedBlockCount: getSelectedBlockCount(),
    selectedBlock: getSelectedBlock(),
    selectedBlocks: getMultiSelectedBlocks(),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitExportOptions'),
    getBlock: getBlock
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages])(ExportManager));

/***/ }),

/***/ "./src/extensions/block-settings/export/index.js":
/*!*******************************************************!*\
  !*** ./src/extensions/block-settings/export/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ "./src/extensions/block-settings/export/components/export.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-features-import-export', {
  icon: false,
  render: _components_export__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/block-settings/export/utils/export.js":
/*!**************************************************************!*\
  !*** ./src/extensions/block-settings/export/utils/export.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file */ "./src/extensions/block-settings/export/utils/file.js");



/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Export a reusable block as a JSON file.
 *
 * @param {number} id
 */

function exportReusableBlock(_x) {
  return _exportReusableBlock.apply(this, arguments);
}

function _exportReusableBlock() {
  _exportReusableBlock = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var postType, post, title, content, fileContent, fileName;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return wp.apiFetch({
              path: "/wp/v2/types/wp_block"
            });

          case 2:
            postType = _context.sent;
            _context.next = 5;
            return wp.apiFetch({
              path: "/wp/v2/".concat(postType.rest_base, "/").concat(id, "?context=edit")
            });

          case 5:
            post = _context.sent;
            title = post.title.raw;
            content = post.content.raw;
            fileContent = JSON.stringify({
              __file: 'wp_block',
              title: title,
              content: content
            }, null, 2);
            fileName = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(title) + '.json';
            Object(_file__WEBPACK_IMPORTED_MODULE_3__["download"])(fileName, fileContent, 'application/json');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _exportReusableBlock.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (exportReusableBlock);

/***/ }),

/***/ "./src/extensions/block-settings/export/utils/file.js":
/*!************************************************************!*\
  !*** ./src/extensions/block-settings/export/utils/file.js ***!
  \************************************************************/
/*! exports provided: download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/**
 * Downloads a file.
 *
 * @param {string} fileName    File Name.
 * @param {string} content     File Content.
 * @param {string} contentType File mime type.
 */
function download(fileName, content, contentType) {
  var file = new window.Blob([content], {
    type: contentType
  }); // IE11 can't use the click to download technique
  // we use a specific IE11 technique instead.

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, fileName);
  } else {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

/***/ }),

/***/ "./src/extensions/block-settings/index.js":
/*!************************************************!*\
  !*** ./src/extensions/block-settings/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_as_featured__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-as-featured */ "./src/extensions/block-settings/set-as-featured/index.js");
/* harmony import */ var _clear_formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear-formatting */ "./src/extensions/block-settings/clear-formatting/index.js");
/* harmony import */ var _visibility_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visibility-settings */ "./src/extensions/block-settings/visibility-settings/index.js");
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./export */ "./src/extensions/block-settings/export/index.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copy */ "./src/extensions/block-settings/copy/index.js");
/**
 * Internal dependencies
 */






/***/ }),

/***/ "./src/extensions/block-settings/set-as-featured/components/controls.js":
/*!******************************************************************************!*\
  !*** ./src/extensions/block-settings/set-as-featured/components/controls.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var withSpokenMessages = wp.components.withSpokenMessages;
var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var allowedBlocks = ['core/image'];
/**
 * Render plugin
 */

var SetAsFeatImageured =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SetAsFeatImageured, _Component);

  function SetAsFeatImageured() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SetAsFeatImageured);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SetAsFeatImageured).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SetAsFeatImageured, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageID = _this$props.imageID,
          featuredImageID = _this$props.featuredImageID,
          onUpdateImage = _this$props.onUpdateImage,
          onRemoveImage = _this$props.onRemoveImage;

      var label = function label() {
        return imageID === featuredImageID ? __('Remove as Featured Image', 'block-options') : __('Set as Featured Image', 'block-options');
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginBlockSettingsMenuItem, {
        icon: "format-image",
        label: label(),
        onClick: function onClick() {
          if (imageID === featuredImageID) {
            onRemoveImage();
          } else {
            onUpdateImage(imageID);
          }
        }
      }));
    }
  }]);

  return SetAsFeatImageured;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    featuredImageID: select('core/editor').getEditedPostAttribute('featured_media'),
    blockName: selectedBlock.name,
    imageID: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(selectedBlock, 'attributes.id'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitSetAsFeaturedOptions')
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  var _dispatch2 = dispatch('core/notices'),
      createNotice = _dispatch2.createNotice;

  return {
    onUpdateImage: function onUpdateImage(imageID) {
      editPost({
        featured_media: imageID
      });
      createNotice('info', __('Image Set as Featured.', 'block-options'), {
        isDismissible: true,
        type: 'snackbar'
      });
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
      createNotice('info', __('Featured Image Removed.', 'block-options'), {
        isDismissible: true,
        type: 'snackbar'
      });
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled && allowedBlocks.includes(props.blockName) && typeof props.imageID !== 'undefined';
}), withSpokenMessages)(SetAsFeatImageured));

/***/ }),

/***/ "./src/extensions/block-settings/set-as-featured/index.js":
/*!****************************************************************!*\
  !*** ./src/extensions/block-settings/set-as-featured/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/block-settings/set-as-featured/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-set-as-featured-image', {
  icon: 'format-image',
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/block-settings/visibility-settings/components/modal.js":
/*!*******************************************************************************!*\
  !*** ./src/extensions/block-settings/visibility-settings/components/modal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _advanced_controls_options_devices___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../advanced-controls/options/devices/ */ "./src/extensions/advanced-controls/options/devices/index.js");
/* harmony import */ var _advanced_controls_options_state___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../advanced-controls/options/state/ */ "./src/extensions/advanced-controls/options/state/index.js");
/* harmony import */ var _advanced_controls_options_logic___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../advanced-controls/options/logic/ */ "./src/extensions/advanced-controls/options/logic/index.js");
/* harmony import */ var _advanced_controls_options_acf___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../advanced-controls/options/acf/ */ "./src/extensions/advanced-controls/options/acf/index.js");








/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    Modal = _wp$components.Modal,
    TabPanel = _wp$components.TabPanel,
    withSpokenMessages = _wp$components.withSpokenMessages;
var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
var compose = wp.compose.compose;
var restrictedBlocks = ['core/freeform', 'core/shortcode', 'core/block', 'core/template', 'editorskit/import'];
/**
 * Render plugin
 */

var BlockSettings =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BlockSettings, _Component);

  function BlockSettings() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockSettings);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BlockSettings).apply(this, arguments));
    _this.reloadModal = _this.reloadModal.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      settings: '',
      isOpen: false,
      reload: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockSettings, [{
    key: "reloadModal",
    value: function reloadModal() {
      this.setState({
        reload: !this.state.reload
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isDisabledDevices = _this$props.isDisabledDevices,
          isDisabledUserState = _this$props.isDisabledUserState,
          isDisabledLogic = _this$props.isDisabledLogic,
          isDisabledACF = _this$props.isDisabledACF;
      var selectedBlock = this.props.selectedBlock;
      selectedBlock = Object.assign({
        reloadModal: this.reloadModal
      }, selectedBlock);

      var closeModal = function closeModal() {
        return _this2.setState({
          isOpen: false
        });
      };

      var tabs = [];

      if (!isDisabledDevices || !isDisabledUserState) {
        tabs.push({
          name: 'default',
          title: __('Default', 'block-options'),
          className: 'editorskit-default'
        });
      }

      if (!isDisabledLogic || !isDisabledACF) {
        tabs.push({
          name: 'advanced',
          title: __('Advanced', 'block-options'),
          className: 'editorskit-advanced'
        });
      } //if all options are disabled return nothing


      if (isDisabledDevices && isDisabledUserState && isDisabledLogic && isDisabledACF) {
        return null;
      } //return nothing if restricted


      if (typeof selectedBlock.name !== 'undefined' && restrictedBlocks.includes(selectedBlock.name)) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginBlockSettingsMenuItem, {
        icon: "visibility",
        label: __('Visibility Settings', 'block-options'),
        onClick: function onClick() {
          _this2.setState({
            isOpen: true
          });
        }
      }), this.state.isOpen && typeof selectedBlock.name !== 'undefined' && !restrictedBlocks.includes(selectedBlock.name) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Modal, {
        title: __('Visibility Settings', 'block-options'),
        onRequestClose: function onRequestClose() {
          return closeModal();
        },
        closeLabel: __('Close', 'block-options'),
        className: "editorskit-components-modal__content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(TabPanel, {
        className: "editorskit-tab-panel",
        activeClass: "is-active",
        tabs: tabs
      }, function (tab) {
        switch (tab.name) {
          case 'advanced':
            return [!isDisabledLogic && Object(_advanced_controls_options_logic___WEBPACK_IMPORTED_MODULE_9__["default"])(selectedBlock), !isDisabledACF && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_advanced_controls_options_acf___WEBPACK_IMPORTED_MODULE_10__["default"], {
              selectedBlock: selectedBlock
            })];

          default:
            return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("small", null, __('Attention: The display settings (show/hide for mobile, tablet, desktop or users) will only take effect once you are on the live page, and not while you\'re editing in Gutenberg.', 'block-options')),
            /* eslint-disable-line react/jsx-key */
            !isDisabledDevices && Object(_advanced_controls_options_devices___WEBPACK_IMPORTED_MODULE_7__["default"])(selectedBlock), !isDisabledUserState && Object(_advanced_controls_options_state___WEBPACK_IMPORTED_MODULE_8__["default"])(selectedBlock)];
        }
      })) : null);
    }
  }]);

  return BlockSettings;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    selectedBlock: selectedBlock,
    isDisabledDevices: select('core/edit-post').isFeatureActive('disableEditorsKitDevicesVisibility'),
    isDisabledUserState: select('core/edit-post').isFeatureActive('disableEditorsKitUserStateVisibility'),
    isDisabledLogic: select('core/edit-post').isFeatureActive('disableEditorsKitLogicVisibility'),
    isDisabledACF: select('core/edit-post').isFeatureActive('disableEditorsKitAcfVisibility')
  };
}), withSpokenMessages)(BlockSettings));

/***/ }),

/***/ "./src/extensions/block-settings/visibility-settings/index.js":
/*!********************************************************************!*\
  !*** ./src/extensions/block-settings/visibility-settings/index.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "./src/extensions/block-settings/visibility-settings/components/modal.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-block-settings', {
  icon: 'visibility',
  render: _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/block-styles/image/index.js":
/*!****************************************************!*\
  !*** ./src/extensions/block-styles/image/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var registerBlockStyle = wp.blocks.registerBlockStyle;

function registerStyles() {
  ['core/image', 'core/cover'].forEach(function (block) {
    registerBlockStyle(block, {
      name: 'default',
      label: __('Default', 'block-options'),
      isDefault: true
    });
    registerBlockStyle(block, {
      name: 'editorskit-circular',
      label: __('Circular', 'block-options'),
      isDefault: false
    });
    registerBlockStyle(block, {
      name: 'editorskit-rounded',
      label: __('Rounded Corners', 'block-options'),
      isDefault: false
    });
    registerBlockStyle(block, {
      name: 'editorskit-diagonal',
      label: __('Diagonal', 'block-options'),
      isDefault: false
    });
    registerBlockStyle(block, {
      name: 'editorskit-inverted-diagonal',
      label: __('Inverted Diagonal', 'block-options'),
      isDefault: false
    });
    registerBlockStyle(block, {
      name: 'editorskit-shadow',
      label: __('Shadow', 'block-options'),
      isDefault: false
    });
  });
}

registerStyles();

/***/ }),

/***/ "./src/extensions/block-styles/index.js":
/*!**********************************************!*\
  !*** ./src/extensions/block-styles/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/index.js */ "./src/extensions/block-styles/image/index.js");
/* harmony import */ var _image_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_image_index_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Internal dependencies
 */


/***/ }),

/***/ "./src/extensions/block-toolbar/block-navigator/components/controls.js":
/*!*****************************************************************************!*\
  !*** ./src/extensions/block-toolbar/block-navigator/components/controls.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_navigation_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../block-navigation/list */ "./src/extensions/block-navigation/list.js");







/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var BlockControls = wp.blockEditor.BlockControls;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    withSpokenMessages = _wp$components.withSpokenMessages,
    IconButton = _wp$components.IconButton,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path,
    Modal = _wp$components.Modal;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
/**
 * Internal dependencies
 */


var NavigatorIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "20",
  height: "20"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Path, {
  d: "M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z"
}));

var NavigatorToolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NavigatorToolbar, _Component);

  function NavigatorToolbar() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NavigatorToolbar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NavigatorToolbar).apply(this, arguments));
    _this.state = {
      isNavigationListOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NavigatorToolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          block = _this$props.block,
          selectBlock = _this$props.selectBlock,
          selectedBlockClientId = _this$props.selectedBlockClientId;
      var navigatorToolbarButton = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
        className: "components-toolbar__control",
        label: __('Open block navigator'),
        onClick: function onClick() {
          return _this2.setState({
            isNavigationListOpen: true
          });
        },
        icon: NavigatorIcon
      });
      var navigatorModal = this.state.isNavigationListOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Modal, {
        title: __('Block Navigator'),
        closeLabel: __('Close'),
        onRequestClose: function onRequestClose() {
          _this2.setState({
            isNavigationListOpen: false
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_block_navigation_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
        blocks: [block],
        selectedBlockClientId: selectedBlockClientId,
        selectBlock: selectBlock,
        showNestedBlocks: true
      }));
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Toolbar, null, navigatorToolbarButton)), navigatorModal);
    }
  }]);

  return NavigatorToolbar;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;

  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlock = _select.getBlock;

  return {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId,
    block: getBlock(clientId),
    selectedBlockClientId: getSelectedBlockClientId(),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitNavigatorOptions')
  };
}), withDispatch(function (dispatch) {
  return {
    selectBlock: dispatch('core/block-editor').selectBlock
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(NavigatorToolbar));

/***/ }),

/***/ "./src/extensions/block-toolbar/block-navigator/index.js":
/*!***************************************************************!*\
  !*** ./src/extensions/block-toolbar/block-navigator/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/block-toolbar/block-navigator/components/controls.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress Dependencies
 */

var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var allowedBlocks = ['core/columns', 'core/column', 'core/group'];
/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */

var withNavigator = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), props.isSelected && (allowedBlocks.includes(props.name) || hasBlockSupport(props.name, 'editorsKitBlockNavigator')) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_controls__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props)));
  };
}, 'withNavigator');
addFilter('editor.BlockEdit', 'editorskit/media-text-link', withNavigator);

/***/ }),

/***/ "./src/extensions/block-toolbar/index.js":
/*!***********************************************!*\
  !*** ./src/extensions/block-toolbar/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_text_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-text-card */ "./src/extensions/block-toolbar/media-text-card/index.js");
/* harmony import */ var _media_text_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-text-link */ "./src/extensions/block-toolbar/media-text-link/index.js");
/* harmony import */ var _block_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-navigator */ "./src/extensions/block-toolbar/block-navigator/index.js");
/**
 * Internal dependencies
 */




/***/ }),

/***/ "./src/extensions/block-toolbar/media-text-card/components/toolbar.js":
/*!****************************************************************************!*\
  !*** ./src/extensions/block-toolbar/media-text-card/components/toolbar.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var BlockControls = wp.blockEditor.BlockControls;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    withSpokenMessages = _wp$components.withSpokenMessages;

var ToolbarControls =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ToolbarControls, _Component);

  function ToolbarControls() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ToolbarControls);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ToolbarControls).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ToolbarControls, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var mediaPosition = attributes.mediaPosition,
          className = attributes.className;

      if (!['top', 'bottom'].includes(mediaPosition) && className) {
        setAttributes({
          className: this.removeTopBottom()
        });
      }
    }
  }, {
    key: "removeTopBottom",
    value: function removeTopBottom() {
      var attributes = this.props.attributes;
      var className = attributes.className;
      var newClassName = '';

      if (className) {
        newClassName = className.replace('has-media-on-the-bottom', '').replace('has-media-on-the-top', '').trim();
        newClassName = newClassName.replace(/\s+/g, ' ').trim();
      }

      return newClassName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes,
          isDisabled = _this$props2.isDisabled;
      var mediaPosition = attributes.mediaPosition;

      if (isDisabled) {
        return null;
      }

      var toolbarControls = [{
        className: 'align-pull-top',
        icon: 'align-pull-left',
        title: __('Show media on top'),
        isActive: mediaPosition === 'top',
        onClick: function onClick() {
          setAttributes({
            mediaPosition: 'top',
            className: _this.removeTopBottom() + ' has-media-on-the-top',
            align: ''
          });
        }
      }, {
        className: 'align-pull-bottom',
        icon: 'align-pull-right',
        title: __('Show media on bottom'),
        isActive: mediaPosition === 'bottom',
        onClick: function onClick() {
          setAttributes({
            mediaPosition: 'bottom',
            className: _this.removeTopBottom() + ' has-media-on-the-bottom',
            align: ''
          });
        }
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Toolbar, {
        className: "editorskit-media-text-card-controls",
        controls: toolbarControls
      })));
    }
  }]);

  return ToolbarControls;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitMediaTextLayoutOptions')
  };
}), withSpokenMessages)(ToolbarControls));

/***/ }),

/***/ "./src/extensions/block-toolbar/media-text-card/index.js":
/*!***************************************************************!*\
  !*** ./src/extensions/block-toolbar/media-text-card/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar */ "./src/extensions/block-toolbar/media-text-card/components/toolbar.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress Dependencies
 */

var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var allowedBlocks = ['core/media-text'];
/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */

var withControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, props.isSelected && allowedBlocks.includes(props.name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props));
  };
}, 'withControls');
addFilter('editor.BlockEdit', 'editorskit/media-text-link', withControls);

/***/ }),

/***/ "./src/extensions/block-toolbar/media-text-link/components/controls.js":
/*!*****************************************************************************!*\
  !*** ./src/extensions/block-toolbar/media-text-link/components/controls.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useCallback = _wp$element.useCallback,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef;
var withSelect = wp.data.withSelect;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$keycodes = wp.keycodes,
    LEFT = _wp$keycodes.LEFT,
    RIGHT = _wp$keycodes.RIGHT,
    UP = _wp$keycodes.UP,
    DOWN = _wp$keycodes.DOWN,
    BACKSPACE = _wp$keycodes.BACKSPACE,
    ENTER = _wp$keycodes.ENTER;
var URLPopover = wp.blockEditor.URLPopover;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    IconButton = _wp$components.IconButton,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG,
    NavigableMenu = _wp$components.NavigableMenu,
    MenuItem = _wp$components.MenuItem,
    withSpokenMessages = _wp$components.withSpokenMessages;
/**
 * Module constants
 */

var LINK_DESTINATION_NONE = 'none';
var LINK_DESTINATION_MEDIA = 'media';
var LINK_DESTINATION_ATTACHMENT = 'attachment';
var LINK_DESTINATION_CUSTOM = 'custom';

var stopPropagation = function stopPropagation(event) {
  event.stopPropagation();
};

var stopPropagationRelevantKeys = function stopPropagationRelevantKeys(event) {
  if ([LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER].indexOf(event.keyCode) > -1) {
    // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
    event.stopPropagation();
  }
};

var ImageURLInputUI = function ImageURLInputUI(_ref) {
  var advancedOptions = _ref.advancedOptions,
      linkDestination = _ref.linkDestination,
      mediaLinks = _ref.mediaLinks,
      onChangeUrl = _ref.onChangeUrl,
      url = _ref.url;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var openLinkUI = useCallback(function () {
    setIsOpen(true);
  });

  var _useState3 = useState(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState3, 2),
      isEditingLink = _useState4[0],
      setIsEditingLink = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_useState5, 2),
      urlInput = _useState6[0],
      setUrlInput = _useState6[1];

  var startEditLink = useCallback(function () {
    if (linkDestination === LINK_DESTINATION_MEDIA || linkDestination === LINK_DESTINATION_ATTACHMENT) {
      setUrlInput('');
    }

    setIsEditingLink(true);
  });
  var stopEditLink = useCallback(function () {
    setIsEditingLink(false);
  });
  var closeLinkUI = useCallback(function () {
    setUrlInput(null);
    stopEditLink();
    setIsOpen(false);
  });
  var autocompleteRef = useRef(null);
  var onClickOutside = useCallback(function () {
    return function (event) {
      // The autocomplete suggestions list renders in a separate popover (in a portal),
      // so onClickOutside fails to detect that a click on a suggestion occurred in the
      // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
      // return to avoid the popover being closed.
      var autocompleteElement = autocompleteRef.current;

      if (autocompleteElement && autocompleteElement.contains(event.target)) {
        return;
      }

      setIsOpen(false);
      setUrlInput(null);
      stopEditLink();
    };
  });
  var onSubmitLinkChange = useCallback(function () {
    return function (event) {
      if (urlInput) {
        onChangeUrl(urlInput);
      }

      stopEditLink();
      setUrlInput(null);
      event.preventDefault();
    };
  });
  var onLinkRemove = useCallback(function () {
    onChangeUrl('');
  });
  var linkEditorValue = urlInput !== null ? urlInput : url;
  var urlLabel = (find(mediaLinks, ['linkDestination', linkDestination]) || {}).title;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
    icon: "admin-links",
    className: "components-toolbar__control",
    label: url ? __('Edit Media Link', 'block-options') : __('Media Link', 'block-options'),
    "aria-expanded": isOpen,
    onClick: openLinkUI
  }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover, {
    onClickOutside: onClickOutside(),
    onClose: closeLinkUI,
    renderSettings: function renderSettings() {
      return advancedOptions;
    },
    additionalControls: !linkEditorValue && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(NavigableMenu, null, Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(mediaLinks, function (link) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(MenuItem, {
        key: link.linkDestination,
        icon: link.icon,
        onClick: function onClick() {
          setUrlInput(null);
          onChangeUrl(link.url);
          stopEditLink();
        }
      }, link.title);
    }))
  }, (!url || isEditingLink) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover.LinkEditor, {
    className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
    value: linkEditorValue,
    onChangeInputValue: setUrlInput,
    onKeyDown: stopPropagationRelevantKeys,
    onKeyPress: stopPropagation,
    onSubmit: onSubmitLinkChange(),
    autocompleteRef: autocompleteRef
  }), url && !isEditingLink && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(URLPopover.LinkViewer, {
    className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
    onKeyPress: stopPropagation,
    url: url,
    onEditLinkClick: startEditLink,
    urlLabel: urlLabel
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(IconButton, {
    icon: "no",
    label: __('Remove Link', 'block-options'),
    onClick: onLinkRemove
  }))));
};
/**
 * Typography Component
 */


var Controls =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Controls, _Component);

  function Controls() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Controls);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Controls).apply(this, arguments));
    _this.onSetNewTab = _this.onSetNewTab.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.getLinkDestinations = _this.getLinkDestinations.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSetHref = _this.onSetHref.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Controls, [{
    key: "onSetHref",
    value: function onSetHref(value) {
      var attributes = this.props.attributes;
      var linkDestination = attributes.linkDestination;
      var linkDestinations = this.getLinkDestinations();
      var linkDestinationInput;

      if (!value) {
        linkDestinationInput = LINK_DESTINATION_NONE;
      } else {
        linkDestinationInput = (find(linkDestinations, function (destination) {
          return destination.url === value;
        }) || {
          linkDestination: LINK_DESTINATION_CUSTOM
        }).linkDestination;
      }

      if (linkDestination !== linkDestinationInput) {
        this.props.setAttributes({
          linkDestination: linkDestinationInput,
          href: value
        });
        return;
      }

      this.props.setAttributes({
        href: value
      });
    }
  }, {
    key: "onSetNewTab",
    value: function onSetNewTab(value) {
      var linkTarget = value ? '_blank' : undefined;
      this.props.setAttributes({
        linkTarget: linkTarget
      });
    }
  }, {
    key: "getLinkDestinations",
    value: function getLinkDestinations() {
      var image = this.props.image;
      return [{
        linkDestination: LINK_DESTINATION_MEDIA,
        title: __('Media File'),
        url: image.source_url,
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SVG, {
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
          d: "M0,0h24v24H0V0z",
          fill: "none"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
          d: "m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
          d: "m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"
        }))
      }, {
        linkDestination: LINK_DESTINATION_ATTACHMENT,
        title: __('Attachment Page'),
        url: image.link,
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(SVG, {
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
          d: "M0 0h24v24H0V0z",
          fill: "none"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Path, {
          d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
        }))
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var href = attributes.href,
          linkDestination = attributes.linkDestination,
          linkTarget = attributes.linkTarget,
          linkNoFollow = attributes.linkNoFollow,
          linkSponsored = attributes.linkSponsored,
          linkFullBlock = attributes.linkFullBlock;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ImageURLInputUI, {
        url: href || '',
        onChangeUrl: this.onSetHref,
        mediaLinks: this.getLinkDestinations(),
        linkDestination: linkDestination,
        advancedOptions: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
          label: __('Open in New Tab', 'block-options'),
          onChange: this.onSetNewTab,
          checked: linkTarget === '_blank'
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
          label: __('No follow', 'block-options'),
          onChange: function onChange() {
            setAttributes({
              linkNoFollow: !linkNoFollow
            });
          },
          checked: !!linkNoFollow
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
          label: __('Sponsored', 'block-options'),
          onChange: function onChange() {
            setAttributes({
              linkSponsored: !linkSponsored
            });
          },
          checked: !!linkSponsored
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(ToggleControl, {
          label: __('Apply link to whole block', 'block-options'),
          onChange: function onChange() {
            setAttributes({
              linkFullBlock: !linkFullBlock
            });
          },
          checked: !!linkFullBlock
        }))
      }));
    }
  }]);

  return Controls;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var mediaId = props.attributes.mediaId;
  return {
    image: mediaId ? getMedia(mediaId) : null,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitMediaTextLinkOptions')
  };
}), ifCondition(function (props) {
  return !props.isDisabled && props.image && props.attributes.mediaType === 'image' && URLPopover.LinkEditor !== undefined;
}), withSpokenMessages)(Controls));

/***/ }),

/***/ "./src/extensions/block-toolbar/media-text-link/components/toolbar.js":
/*!****************************************************************************!*\
  !*** ./src/extensions/block-toolbar/media-text-link/components/toolbar.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls */ "./src/extensions/block-toolbar/media-text-link/components/controls.js");







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var BlockControls = wp.blockEditor.BlockControls;
var Toolbar = wp.components.Toolbar;

var LinkToolbar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LinkToolbar, _Component);

  function LinkToolbar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LinkToolbar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LinkToolbar).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LinkToolbar, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Toolbar, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_6__["default"], this.props))));
    }
  }]);

  return LinkToolbar;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (LinkToolbar);

/***/ }),

/***/ "./src/extensions/block-toolbar/media-text-link/index.js":
/*!***************************************************************!*\
  !*** ./src/extensions/block-toolbar/media-text-link/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar */ "./src/extensions/block-toolbar/media-text-link/components/toolbar.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress Dependencies
 */

var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var allowedBlocks = ['core/media-text'];
/**
 * Filters registered block settings, extending attributes with settings
 *
 * @param {Object} settings Original block settings.
 * @return {Object} Filtered block settings.
 */

function addAttributes(settings) {
  // Use Lodash's assign to gracefully handle if attributes are undefined
  if (allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, {
      href: {
        type: 'string'
      },
      linkDestination: {
        type: 'string',
        default: 'none'
      },
      linkTarget: {
        type: 'string',
        default: 'none'
      },
      linkNoFollow: {
        type: 'boolean',
        default: false
      },
      linkSponsored: {
        type: 'boolean',
        default: false
      },
      linkFullBlock: {
        type: 'boolean',
        default: false
      }
    });
  }

  return settings;
}
/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */


var withControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), props.isSelected && allowedBlocks.includes(props.name) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props)));
  };
}, 'withControls');
addFilter('blocks.registerBlockType', 'editorskit/media-text-link/attributes', addAttributes);
addFilter('editor.BlockEdit', 'editorskit/media-text-link', withControls);

/***/ }),

/***/ "./src/extensions/components/autosave/components/menu.js":
/*!***************************************************************!*\
  !*** ./src/extensions/components/autosave/components/menu.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    dispatch = _wp$data.dispatch,
    select = _wp$data.select;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var ManageAutoSave =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ManageAutoSave, _Component);

  function ManageAutoSave() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ManageAutoSave);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ManageAutoSave).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ManageAutoSave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var editorHeader = document.querySelector('.edit-post-header__settings');
      var prompt = '<span class="editorskit-auto-save-disabled--label">' + __('Auto Save Disabled', 'block-options') + '</span>'; //insert prompt on header

      editorHeader.insertAdjacentHTML('afterbegin', prompt);
      this.sync();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var _this$props = this.props,
          isAvailable = _this$props.isAvailable,
          isActive = _this$props.isActive,
          isDisabled = _this$props.isDisabled,
          editorSettings = _this$props.editorSettings;
      var autosaveInterval = 60;
      var prompt = document.querySelector('.editorskit-auto-save-disabled--label'); //update autosave interval

      if (!isActive && !isDisabled && typeof isAvailable !== 'undefined') {
        autosaveInterval = 259200; // 3days in seconds
      }

      if (editorSettings.autosaveInterval !== autosaveInterval) {
        var newEditorSettings = Object.assign(this.props.editorSettings, {
          autosaveInterval: autosaveInterval
        });
        dispatch('core/editor').updateEditorSettings(newEditorSettings);
        dispatch('core/editor').refreshPost();
      } //show prompt


      prompt.className = 'editorskit-auto-save-disabled--label editorskit-auto-save-disabled--' + autosaveInterval;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isDisabled = _this$props2.isDisabled,
          onToggle = _this$props2.onToggle,
          editorSettings = _this$props2.editorSettings;

      if (isDisabled) {
        return null;
      }

      var isActive = this.props.isActive;

      if (editorSettings.autosaveInterval !== 259200) {
        isActive = true;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginMoreMenuItem, {
        icon: isActive && 'yes',
        role: "menuitemcheckbox",
        info: __('Toggle to disable or enable editor autosaving feature.', 'block-options'),
        onClick: onToggle
      }, __('Auto Save', 'block-options', 'block-options')));
    }
  }]);

  return ManageAutoSave;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  return {
    isAvailable: select('core/edit-post').getPreference('features').editorskitAutoSave,
    isActive: select('core/edit-post').isFeatureActive('editorskitAutoSave'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitAutosaveTools'),
    editorSettings: select('core/editor').getEditorSettings()
  };
}), withDispatch(function () {
  return {
    onToggle: function onToggle() {
      dispatch('core/edit-post').toggleFeature('editorskitAutoSave');
    }
  };
}), withSpokenMessages])(ManageAutoSave));

/***/ }),

/***/ "./src/extensions/components/autosave/index.js":
/*!*****************************************************!*\
  !*** ./src/extensions/components/autosave/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/extensions/components/autosave/components/menu.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-editor-autosave', {
  icon: false,
  render: _components_menu__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/code-editor/components/code-editor.js":
/*!*************************************************************************!*\
  !*** ./src/extensions/components/code-editor/components/code-editor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);






/**
 * WordPress dependencies
 */
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;
var compose = wp.compose.compose;
var parse = wp.blocks.parse;
var Component = wp.element.Component;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var CodeEditor =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CodeEditor, _Component);

  function CodeEditor() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CodeEditor);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CodeEditor).apply(this, arguments)); // this.addCodeMirror = this.addCodeMirror.bind( this );

    _this.state = {
      isLoaded: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CodeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addCodeMirror();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.addCodeMirror();
    }
  }, {
    key: "addCodeMirror",
    value: function addCodeMirror() {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          editorMode = _this$props.editorMode;

      if (isDisabled) {
        return null;
      }

      if (editorMode === 'text' && !this.state.isLoaded) {
        var editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {}; //add placeholder class

        document.body.classList.add('editorskit-editor-loaded');
        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, {
          mode: 'text/html',
          lineNumbers: true,
          indentUnit: 2,
          tabSize: 2,
          height: 'auto',
          lineWrapping: true,
          scrollbarStyle: 'null'
        });
        var textEditor = document.querySelector('.editor-post-text-editor');
        var checkChanges = wp.codeEditor.initialize(textEditor, editorSettings);
        checkChanges.codemirror.on('change', function (params) {
          var content = params.getValue();
          textEditor.innerHTML = content;
          dispatch('core/editor').editPost({
            content: content
          });
        });
        checkChanges.codemirror.on('blur', function (params) {
          var content = params.getValue();
          var blocks = parse(content);
          dispatch('core/editor').resetEditorBlocks(blocks);
        });
        this.setState({
          isLoaded: true
        });
      } else if (editorMode === 'visual' && this.state.isLoaded) {
        this.setState({
          isLoaded: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return CodeEditor;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    readyState: document.readyState,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitCodeHighlightTools'),
    editorMode: select('core/edit-post').getEditorMode()
  };
}), withSpokenMessages])(CodeEditor));

/***/ }),

/***/ "./src/extensions/components/code-editor/index.js":
/*!********************************************************!*\
  !*** ./src/extensions/components/code-editor/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_code_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/code-editor */ "./src/extensions/components/code-editor/components/code-editor.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-code-editor', {
  icon: false,
  render: _components_code_editor__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/editor-height/components/height.js":
/*!**********************************************************************!*\
  !*** ./src/extensions/components/editor-height/components/height.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var EditorMinHeight =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(EditorMinHeight, _Component);

  function EditorMinHeight() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditorMinHeight);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(EditorMinHeight).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditorMinHeight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sync();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var _this$props = this.props,
          isActive = _this$props.isActive,
          isDisabled = _this$props.isDisabled;

      if (isActive && !isDisabled) {
        document.body.classList.add('is-editorkit-height-on');
      } else {
        document.body.classList.remove('is-editorkit-height-on');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isActive = _this$props2.isActive,
          onToggle = _this$props2.onToggle,
          isDisabled = _this$props2.isDisabled;

      if (isDisabled) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginMoreMenuItem, {
        icon: isActive && 'yes',
        role: "menuitemcheckbox",
        info: __('Toggle to change editor min-height similar to browser viewport.', 'block-options'),
        onClick: onToggle
      }, __('Editor Height', 'block-options')));
    }
  }]);

  return EditorMinHeight;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    isActive: select('core/edit-post').isFeatureActive('editorMinHeight'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHeightTools')
  };
}), withDispatch(function (dispatch) {
  return {
    onToggle: function onToggle() {
      dispatch('core/edit-post').toggleFeature('editorMinHeight');
    }
  };
}), withSpokenMessages])(EditorMinHeight));

/***/ }),

/***/ "./src/extensions/components/editor-height/index.js":
/*!**********************************************************!*\
  !*** ./src/extensions/components/editor-height/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/height */ "./src/extensions/components/editor-height/components/height.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-editor-height', {
  icon: false,
  render: _components_height__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/featured-image/components/controls.js":
/*!*************************************************************************!*\
  !*** ./src/extensions/components/featured-image/components/controls.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropzone */ "./src/extensions/components/featured-image/components/dropzone.js");


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var PostFeaturedImageCheck = wp.editor.PostFeaturedImageCheck;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Spinner = _wp$components.Spinner,
    ResponsiveWrapper = _wp$components.ResponsiveWrapper;
var ALLOWED_MEDIA_TYPES = ['image']; // Used when labels from post type were not yet loaded or when they are not present.

var DEFAULT_FEATURE_IMAGE_LABEL = __('Featured Image', 'block-options');

var DEFAULT_SET_FEATURE_IMAGE_LABEL = __('Set Featured Image', 'block-options');

var DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = __('Remove Image', 'block-options');

var PostFeaturedImage = function PostFeaturedImage(_ref) {
  var currentPostId = _ref.currentPostId,
      featuredImageId = _ref.featuredImageId,
      onUpdateImage = _ref.onUpdateImage,
      onRemoveImage = _ref.onRemoveImage,
      media = _ref.media,
      postType = _ref.postType;
  var postLabel = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(postType, ['labels'], {});
  var instructions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('To edit the featured image, you need permission to upload media.'));
  var mediaWidth, mediaHeight, mediaSourceUrl;

  if (media) {
    var mediaSize = applyFilters('editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["has"])(media, ['media_details', 'sizes', mediaSize])) {
      mediaWidth = media.media_details.sizes[mediaSize].width;
      mediaHeight = media.media_details.sizes[mediaSize].height;
      mediaSourceUrl = media.media_details.sizes[mediaSize].source_url;
    } else {
      mediaWidth = media.media_details.width;
      mediaHeight = media.media_details.height;
      mediaSourceUrl = media.source_url;
    }
  }

  var dropZone = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_dropzone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Upload Featured Image', 'block-options')
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PostFeaturedImageCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-featured-image editorskit-post-featured-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, {
    fallback: instructions
  }, dropZone, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editorskit-post-featured-spinner"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: !featuredImageId ? 'editor-post-featured-image__media-modal' : 'editor-post-featured-image__media-modal',
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        className: !featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open,
        "aria-label": !featuredImageId ? null : __('Edit or update the image')
      }, !!featuredImageId && media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ResponsiveWrapper, {
        naturalWidth: mediaWidth,
        naturalHeight: mediaHeight
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: mediaSourceUrl,
        alt: ""
      })), !!featuredImageId && !media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null), !featuredImageId && (postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL));
    },
    value: featuredImageId
  })), !!featuredImageId && media && !media.isLoading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    title: postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL,
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    modalClass: "editor-post-featured-image__media-modal",
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        onClick: open,
        isDefault: true,
        isLarge: true
      }, __('Replace Image'));
    }
  })), !!featuredImageId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostFeaturedImage);

/***/ }),

/***/ "./src/extensions/components/featured-image/components/dropzone.js":
/*!*************************************************************************!*\
  !*** ./src/extensions/components/featured-image/components/dropzone.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);









/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var mediaUpload = wp.editor.mediaUpload;
var compose = wp.compose.compose;
var _wp$components = wp.components,
    DropZone = _wp$components.DropZone,
    withSpokenMessages = _wp$components.withSpokenMessages;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var ALLOWED_MEDIA_TYPES = ['image'];

var BackgroundDropZone =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BackgroundDropZone, _Component);

  function BackgroundDropZone() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BackgroundDropZone);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BackgroundDropZone).apply(this, arguments));
    _this.addFile = _this.addFile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onSelectFile = _this.onSelectFile.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BackgroundDropZone, [{
    key: "addFile",
    value: function addFile(files) {
      var _this2 = this;

      document.body.classList.add('is-editorskit-uploading-featured');
      mediaUpload({
        allowedTypes: ALLOWED_MEDIA_TYPES,
        filesList: files,
        onFileChange: function onFileChange(_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
              media = _ref2[0];

          return _this2.onSelectFile(media);
        }
      });
    }
  }, {
    key: "onSelectFile",
    value: function onSelectFile(media) {
      if (media && media.url) {
        this.props.onUpdateImage(media);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(DropZone, {
        onFilesDrop: this.addFile,
        label: this.props.label
      }));
    }
  }]);

  return BackgroundDropZone;
}(Component);

var applyWithDispatch = withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateImage: function onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
      var featuredImageId = select('core/editor').getEditedPostAttribute('featured_media');

      if (featuredImageId === image.id) {
        document.body.classList.remove('is-editorskit-uploading-featured');
      }
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (compose(applyWithDispatch, withSpokenMessages)(BackgroundDropZone));

/***/ }),

/***/ "./src/extensions/components/featured-image/index.js":
/*!***********************************************************!*\
  !*** ./src/extensions/components/featured-image/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/components/featured-image/components/controls.js");



/**
 * WordPress dependencies
 */
var addFilter = wp.hooks.addFilter;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    createHigherOrderComponent = _wp$compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var withSpokenMessages = wp.components.withSpokenMessages;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
/**
 * Internal dependencies
 */


var applyWithSelect = withSelect(function (select) {
  var _select = select('core'),
      getMedia = _select.getMedia,
      getPostType = _select.getPostType;

  var _select2 = select('core/editor'),
      getCurrentPostId = _select2.getCurrentPostId,
      getEditedPostAttribute = _select2.getEditedPostAttribute;

  var featuredImageId = getEditedPostAttribute('featured_media');
  return {
    media: featuredImageId ? getMedia(featuredImageId) : null,
    currentPostId: getCurrentPostId(),
    postType: getPostType(getEditedPostAttribute('type')),
    featuredImageId: featuredImageId,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitDragAndDropFeaturedTools')
  };
});
var applyWithDispatch = withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    onUpdateImage: function onUpdateImage(image) {
      editPost({
        featured_media: image.id
      });
    },
    onRemoveImage: function onRemoveImage() {
      editPost({
        featured_media: 0
      });
    }
  };
});
var enhance = compose(applyWithSelect, applyWithDispatch, withSpokenMessages);
var withDragandDropFeaturedImage = createHigherOrderComponent(function (OriginalComponent) {
  return enhance(function (_ref) {
    var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    var isDisabled = props.isDisabled;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, !isDisabled ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_controls__WEBPACK_IMPORTED_MODULE_2__["default"], props) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalComponent, props));
  });
}, 'withDragandDropFeaturedImage');
addFilter('editor.PostFeaturedImage', 'editorskit/post-featured-image', withDragandDropFeaturedImage);

/***/ }),

/***/ "./src/extensions/components/guidelines/components/menu.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/components/guidelines/components/menu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var BlockGuideLines =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BlockGuideLines, _Component);

  function BlockGuideLines() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BlockGuideLines);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BlockGuideLines).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BlockGuideLines, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sync();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var _this$props = this.props,
          isActive = _this$props.isActive,
          isDisabled = _this$props.isDisabled;

      if (isActive && !isDisabled) {
        document.body.classList.add('is-guide-lines-on');
      } else {
        document.body.classList.remove('is-guide-lines-on');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isActive = _this$props2.isActive,
          onToggle = _this$props2.onToggle,
          isDisabled = _this$props2.isDisabled;

      if (isDisabled) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginMoreMenuItem, {
        icon: isActive && 'yes',
        role: "menuitemcheckbox",
        info: __('Show visible guide lines on title and blocks', 'block-options'),
        onClick: onToggle
      }, __('Block Guide Lines', 'block-options')));
    }
  }]);

  return BlockGuideLines;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    isActive: select('core/edit-post').isFeatureActive('blockGuideLines'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitGuidelinesTools')
  };
}), withDispatch(function (dispatch) {
  return {
    onToggle: function onToggle() {
      dispatch('core/edit-post').toggleFeature('blockGuideLines');
    }
  };
}), withSpokenMessages])(BlockGuideLines));

/***/ }),

/***/ "./src/extensions/components/guidelines/index.js":
/*!*******************************************************!*\
  !*** ./src/extensions/components/guidelines/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/extensions/components/guidelines/components/menu.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-block-guidelines', {
  icon: false,
  render: _components_menu__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/heading-label/components/controls.js":
/*!************************************************************************!*\
  !*** ./src/extensions/components/heading-label/components/controls.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var Component = wp.element.Component;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var HeadingLabel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HeadingLabel, _Component);

  function HeadingLabel() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HeadingLabel);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HeadingLabel).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HeadingLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.sync();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var isDisabled = this.props.isDisabled;

      if (!isDisabled) {
        document.body.classList.add('is-editorskit-heading-label-on');
      } else {
        document.body.classList.remove('is-editorskit-heading-label-on');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return HeadingLabel;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHeadingLabelWriting')
  };
}), withSpokenMessages])(HeadingLabel));

/***/ }),

/***/ "./src/extensions/components/heading-label/index.js":
/*!**********************************************************!*\
  !*** ./src/extensions/components/heading-label/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/components/heading-label/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-heading-label', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/help-tips/components/about.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/components/help-tips/components/about.js ***!
  \*****************************************************************/
/*! exports provided: AboutGutenbergEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutGutenbergEditor", function() { return AboutGutenbergEditor; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var RawHTML = wp.element.RawHTML;
var Modal = wp.components.Modal;
function AboutGutenbergEditor(_ref) {
  var closeModal = _ref.closeModal;
  var _window$editorskitInf = window.editorskitInfo,
      core = _window$editorskitInf.core,
      editor = _window$editorskitInf.editor,
      plugin = _window$editorskitInf.plugin;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Modal, {
    title: __('About Gutenberg Block Editor', 'block-options'),
    shouldCloseOnClickOutside: false,
    onRequestClose: function onRequestClose() {
      return closeModal();
    },
    closeLabel: __('Close', 'block-options'),
    icon: null,
    className: "editorskit-modal-component components-modal--editorskit-overview"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, __('Version', 'block-options'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, editor.version)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, editor.is_core ? sprintf(__('You are using the new block editor bundled on WordPress core %s', 'block-options'), core.version) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, sprintf(__('You are using the new block editor powered by the %sGutenberg Plugin%s.', 'block-options'), '<a href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noreferrer noopener nofollow">', '</a>'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RawHTML, null, sprintf(__(' Want to help? %sGet involved or report an issue%s.', 'block-options'), '<a href="https://github.com/WordPress/gutenberg/issues" target="_blank" rel="noreferrer noopener nofollow">', '</a>'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "editorskit-version-small"
  }, sprintf(__('EditorsKit %s', 'block-options'), plugin.version)));
}

/***/ }),

/***/ "./src/extensions/components/help-tips/components/controls.js":
/*!********************************************************************!*\
  !*** ./src/extensions/components/help-tips/components/controls.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-twitter-embed */ "./node_modules/react-twitter-embed/dist/index.es.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./src/extensions/components/help-tips/components/about.js");







/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var DOWN = wp.keycodes.DOWN;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    Dropdown = _wp$components.Dropdown,
    NavigableMenu = _wp$components.NavigableMenu;
var tweets = ['1178226931277287425', '1177555440638382080', '1179365591553118227', '1177920047546650624', '1177461678004293637', '1178693225923497984', '1179727978353135616', '1180455552079425537', '1178929974247448576', '1176395801888604161', '1181217763844509696', '1177202169310658560'];
/**
 * Render plugin
 */

var HelpControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HelpControl, _Component);

  function HelpControl() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HelpControl);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HelpControl).apply(this, arguments));
    _this.state = {
      isOpen: false,
      isAboutOpen: false,
      isLoaded: false,
      tweetId: 0
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HelpControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var helpButton = document.querySelector('.editorskit-component-help-tips');

      if (helpButton) {
        helpButton.parentElement.style.display = 'block';
      }
    }
  }, {
    key: "routeChange",
    value: function routeChange(path) {
      var win = window.open(path, '_blank');
      win.focus();
    }
  }, {
    key: "tweetLoaded",
    value: function tweetLoaded() {
      this.setState({
        isLoaded: true
      });
    }
  }, {
    key: "nextTweet",
    value: function nextTweet() {
      this.setState({
        tweetId: this.state.tweetId + 1,
        isOpen: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.tweetId > 0 && !this.state.isOpen) {
        this.setState({
          isOpen: true,
          isLoaded: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onDisable = this.props.onDisable;

      var closeModal = function closeModal() {
        return _this2.setState({
          isOpen: false,
          isAboutOpen: false,
          tweetId: 0,
          isLoaded: false
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Dropdown, {
        className: "editorskit-component-help-tips",
        renderToggle: function renderToggle(_ref) {
          var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;

          var openOnArrowDown = function openOnArrowDown(event) {
            if (!isOpen && event.keyCode === DOWN) {
              event.preventDefault();
              event.stopPropagation();
              onToggle();
            }
          };

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            className: "components-dropdown-menu__toggle",
            icon: "editor-help",
            onClick: onToggle,
            onKeyDown: openOnArrowDown,
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            label: __('Help, tips and tricks'),
            tooltip: __('Help, tips and tricks')
          });
        },
        renderContent: function renderContent(_ref2) {
          var onClose = _ref2.onClose;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(NavigableMenu, {
            className: "editorskit-menu-help-tips",
            role: "menu"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            icon: "info",
            onClick: function onClick() {
              onClose();

              _this2.setState({
                isAboutOpen: true
              });
            }
          }, __('About')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            icon: "sos",
            onClick: function onClick() {
              onClose();

              _this2.setState({
                isOpen: true
              });
            }
          }, __('Tips and Tricks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            icon: "admin-site-alt3",
            onClick: function onClick() {
              _this2.routeChange("https://www.facebook.com/groups/editorskit/");
            }
          }, __('EditorsKit Community Help')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "editor-block-settings-menu__separator block-editor-block-settings-menu__separator"
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            icon: "dismiss",
            onClick: onDisable
          }, __('Remove/Disable Help Button')));
        }
      }), this.state.isOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Modal, {
        title: __('Tips and Tricks', 'block-options'),
        shouldCloseOnClickOutside: false,
        onRequestClose: function onRequestClose() {
          return closeModal();
        },
        closeLabel: __('Close', 'block-options'),
        icon: null,
        className: "editorskit-modal-component components-modal--editorskit-help-tips"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__["TwitterTweetEmbed"], {
        tweetId: tweets[this.state.tweetId],
        options: {
          align: 'center',
          theme: 'dark',
          conversation: 'none',
          dnt: true
        },
        onLoaded: function onLoaded() {
          _this2.tweetLoaded();
        }
      }), this.state.isLoaded ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "components-modal--editorskit-help-tips-buttons"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
        isPrimary: true,
        isLarge: true,
        icon: "twitter",
        onClick: function onClick() {
          _this2.routeChange("https://twitter.com/i/moments/1177466596219949057");
        }
      }, __('View All Tips and Tricks', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Button, {
        isDefault: true,
        isLarge: true,
        onClick: function onClick() {
          _this2.nextTweet();
        }
      }, __('Next', 'block-options'))) : __('Fetching...', 'block-options')) : null, this.state.isAboutOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_about__WEBPACK_IMPORTED_MODULE_7__["AboutGutenbergEditor"], {
        closeModal: closeModal
      }) : null);
    }
  }]);

  return HelpControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHelpTools')
  };
}), withDispatch(function (dispatch) {
  return {
    onDisable: function onDisable() {
      dispatch('core/edit-post').toggleFeature('disableEditorsKitHelpTools');
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages])(HelpControl));

/***/ }),

/***/ "./src/extensions/components/help-tips/index.js":
/*!******************************************************!*\
  !*** ./src/extensions/components/help-tips/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/components/help-tips/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-help-tips', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/manager/components/manager.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/components/manager/components/manager.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Modal = _wp$components.Modal,
    CheckboxControl = _wp$components.CheckboxControl;

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Render plugin
 */


var FeaturesManager =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FeaturesManager, _Component);

  function FeaturesManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FeaturesManager);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FeaturesManager).apply(this, arguments));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FeaturesManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editorSettings = _this$props.editorSettings,
          onToggle = _this$props.onToggle;

      var closeModal = function closeModal() {
        return _this2.setState({
          isOpen: false
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginMoreMenuItem, {
        icon: null,
        role: "menuitemcheckbox",
        onClick: function onClick() {
          _this2.setState({
            isOpen: true
          });
        }
      }, __('EditorsKit Settings', 'block-options')), this.state.isOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Modal, {
        title: __('EditorsKit Features Manager', 'block-options'),
        onRequestClose: function onRequestClose() {
          return closeModal();
        },
        closeLabel: __('Close', 'block-options'),
        icon: null,
        className: "editorskit-modal-component components-modal--editorskit-features-manager"
      }, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(editorSettings.editorskit, function (category) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("section", {
          className: "edit-post-options-modal__section"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", {
          className: "edit-post-options-modal__section-title"
        }, category.label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", {
          className: "edit-post-editorskit-manager-modal__checklist"
        }, lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(category.items, function (item) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
            className: "edit-post-editorskit-manager-modal__checklist-item"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(CheckboxControl, {
            className: "edit-post-options-modal__option",
            label: item.label,
            checked: !select('core/edit-post').isFeatureActive('disableEditorsKit' + capitalize(item.name) + capitalize(category.name)),
            onChange: function onChange() {
              return onToggle(category.name, item.name);
            }
          }));
        })));
      })) : null);
    }
  }]);

  return FeaturesManager;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  return {
    editorSettings: select('core/editor').getEditorSettings(),
    preferences: select('core/edit-post').getPreferences()
  };
}), withDispatch(function (dispatch) {
  return {
    onToggle: function onToggle(category, item) {
      dispatch('core/edit-post').toggleFeature('disableEditorsKit' + capitalize(item) + capitalize(category));
    }
  };
}), withSpokenMessages])(FeaturesManager));

/***/ }),

/***/ "./src/extensions/components/manager/index.js":
/*!****************************************************!*\
  !*** ./src/extensions/components/manager/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/manager */ "./src/extensions/components/manager/components/manager.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-features-manager', {
  icon: false,
  render: _components_manager__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/markdown/components/config.js":
/*!*****************************************************************!*\
  !*** ./src/extensions/components/markdown/components/config.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var markdownShortcuts = {
  title: __('Markdown Formatting', 'block-options'),
  shortcuts: [{
    keyCombination: ['##', 'SPACE'],
    description: __('Large header (h2)', 'block-options')
  }, {
    keyCombination: ['###', 'SPACE'],
    description: __('Medium header (h3)', 'block-options')
  }, {
    keyCombination: ['####', 'SPACE'],
    description: __('Small header (h4)', 'block-options')
  }, {
    keyCombination: ['1.', 'SPACE'],
    description: __('Numbered list', 'block-options')
  }, {
    keyCombination: ['*', 'SPACE'],
    description: __('Bulleted list', 'block-options')
  }, {
    keyCombination: ['>', 'SPACE'],
    description: __('Blockquote', 'block-options')
  }, {
    keyCombination: ['_italic_'],
    description: __('Italic', 'block-options')
  }, {
    keyCombination: ['*bold*'],
    description: __('Bold', 'block-options')
  }, {
    keyCombination: ['~Strikethrough~'],
    description: __('Strikethrough', 'block-options')
  }, {
    keyCombination: ['`code`'],
    description: __('Code', 'block-options')
  }]
};
/* harmony default export */ __webpack_exports__["default"] = ([markdownShortcuts]);

/***/ }),

/***/ "./src/extensions/components/markdown/components/menu.js":
/*!***************************************************************!*\
  !*** ./src/extensions/components/markdown/components/menu.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ "./src/extensions/components/markdown/components/config.js");








/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Modal = _wp$components.Modal;
/**
 * Render plugin
 */

var MarkdownFormatting =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MarkdownFormatting, _Component);

  function MarkdownFormatting() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MarkdownFormatting);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MarkdownFormatting).apply(this, arguments));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MarkdownFormatting, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var closeModal = function closeModal() {
        return _this2.setState({
          isOpen: false
        });
      };

      var mapKeyCombination = function mapKeyCombination(keyCombination) {
        return keyCombination.map(function (character, index) {
          if (character === '+') {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, {
              key: index
            }, character);
          }

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("kbd", {
            key: index,
            className: "edit-post-keyboard-shortcut-help__shortcut-key"
          }, character);
        });
      };

      var ShortcutList = function ShortcutList(_ref) {
        var shortcuts = _ref.shortcuts;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("dl", {
          className: "edit-post-keyboard-shortcut-help__shortcut-list"
        }, shortcuts.map(function (_ref2, index) {
          var keyCombination = _ref2.keyCombination,
              description = _ref2.description,
              ariaLabel = _ref2.ariaLabel;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "edit-post-keyboard-shortcut-help__shortcut",
            key: index
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "edit-post-keyboard-shortcut-help__shortcut-description"
          }, description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "edit-post-keyboard-shortcut-help__shortcut-term"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("kbd", {
            className: "edit-post-keyboard-shortcut-help__shortcut-key-combination",
            "aria-label": ariaLabel
          }, mapKeyCombination(Object(lodash__WEBPACK_IMPORTED_MODULE_7__["castArray"])(keyCombination)))));
        }));
      };

      var ShortcutSection = function ShortcutSection(_ref3) {
        var title = _ref3.title,
            shortcuts = _ref3.shortcuts;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("section", {
          className: "edit-post-keyboard-shortcut-help__section"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", {
          className: "edit-post-keyboard-shortcut-help__section-title"
        }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ShortcutList, {
          shortcuts: shortcuts
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginMoreMenuItem, {
        icon: null,
        role: "menuitemcheckbox",
        onClick: function onClick() {
          _this2.setState({
            isOpen: true
          });
        }
      }, __('Markdown Formatting', 'block-options')), this.state.isOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Modal, {
        title: __('Keyboard Shortcuts', 'block-options'),
        onRequestClose: function onRequestClose() {
          return closeModal();
        },
        closeLabel: __('Close', 'block-options'),
        icon: null,
        className: "editorskit-modal-component components-modal--editorskit-markdown"
      }, _config__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (config, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ShortcutSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: index
        }, config));
      })) : null);
    }
  }]);

  return MarkdownFormatting;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitMarkdownWriting')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(MarkdownFormatting));

/***/ }),

/***/ "./src/extensions/components/markdown/index.js":
/*!*****************************************************!*\
  !*** ./src/extensions/components/markdown/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/extensions/components/markdown/components/menu.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-markdown-formatting', {
  icon: false,
  render: _components_menu__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/reading-time/components/controls.js":
/*!***********************************************************************!*\
  !*** ./src/extensions/components/reading-time/components/controls.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/wordcount */ "@wordpress/wordcount");
/* harmony import */ var _wordpress_wordcount__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select,
    subscribe = _wp$data.subscribe;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var Component = wp.element.Component;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var withSpokenMessages = wp.components.withSpokenMessages;
var mediaBlocks = ['core/image', 'core/gallery', 'core/cover'];
/**
 * Render plugin
 */

var ReadingTime =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ReadingTime, _Component);

  function ReadingTime() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReadingTime);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ReadingTime).apply(this, arguments));
    _this.updateMeta = _this.updateMeta.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.calculateReadingTime = _this.calculateReadingTime.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.handleButtonClick = _this.handleButtonClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      readingTime: 0
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReadingTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateMeta();
      document.addEventListener('mousedown', this.handleButtonClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleButtonClick);
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      var button = document.querySelector('.table-of-contents button').getAttribute('aria-expanded');

      if (document.querySelector('.table-of-contents').contains(event.target) && button === 'false') {
        var estimated = this.calculateReadingTime();
        var checkExist = setInterval(function () {
          if (document.querySelector('.table-of-contents__popover')) {
            document.querySelector('.table-of-contents__counts').insertAdjacentHTML('beforeend', "<li class=\"table-of-contents__count table-of-contents__wordcount\">".concat(__('Reading Time', 'block-options'), "<span class=\"table-of-contents__number\">").concat(estimated, " min</span></li>"));
            clearInterval(checkExist);
          }
        }, 100); // check every 100ms
      }
    }
  }, {
    key: "calculateReadingTime",
    value: function calculateReadingTime() {
      var _this$props = this.props,
          content = _this$props.content,
          blocks = _this$props.blocks;
      var words = Object(_wordpress_wordcount__WEBPACK_IMPORTED_MODULE_6__["count"])(content, 'words', {});
      var estimated = words / 275 * 60; //get time on seconds

      if (blocks) {
        var i = 12;
        Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(blocks, function (block) {
          if (mediaBlocks.includes(block.name) || hasBlockSupport(block.name, 'editorsKitWordCount')) {
            estimated = estimated + i;

            if (i > 3) {
              i--;
            }
          }
        });
      }

      estimated = estimated / 60; //convert to minutes
      //do not show zero

      if (estimated < 1) {
        estimated = 1;
      }

      return estimated.toFixed();
    }
  }, {
    key: "updateMeta",
    value: function updateMeta() {
      var _this2 = this;

      var updateReadingTime = this.props.updateReadingTime;
      var unssubscribe = subscribe(function () {
        var isSavingPost = select('core/editor').isSavingPost();
        var isAutosavingPost = select('core/editor').isAutosavingPost();

        if (isSavingPost && !isAutosavingPost) {
          var calculatedTime = _this2.calculateReadingTime();

          if (calculatedTime !== _this2.state.readingTime) {
            _this2.setState({
              readingTime: calculatedTime
            });

            updateReadingTime(parseInt(calculatedTime));
          }
        }
      });
      return unssubscribe;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ReadingTime;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  return {
    content: select('core/editor').getEditedPostAttribute('content'),
    blocks: select('core/editor').getEditedPostAttribute('blocks'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitReadingTimeWriting')
  };
}), withDispatch(function (dispatch) {
  return {
    updateReadingTime: function updateReadingTime(estimated) {
      dispatch('core/editor').editPost({
        meta: {
          _editorskit_reading_time: estimated
        }
      });
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages])(ReadingTime));

/***/ }),

/***/ "./src/extensions/components/reading-time/index.js":
/*!*********************************************************!*\
  !*** ./src/extensions/components/reading-time/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/components/reading-time/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-reading-time', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/scroll-down/components/scrolldown.js":
/*!************************************************************************!*\
  !*** ./src/extensions/components/scroll-down/components/scrolldown.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
var withSpokenMessages = wp.components.withSpokenMessages;
/**
 * Render plugin
 */

var ScrollDown =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollDown, _Component);

  function ScrollDown() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScrollDown);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ScrollDown).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScrollDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isActive = _this$props.isActive,
          isDisabled = _this$props.isDisabled;

      if (!isActive || isDisabled) {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PluginMoreMenuItem, {
        role: "menuitemcheckbox",
        onClick: function onClick() {
          var metaboxes = document.querySelectorAll('.edit-post-layout__metaboxes');

          if (metaboxes[0]) {
            metaboxes[0].scrollIntoView();
          }
        }
      }, __('View Custom Fields', 'block-options')));
    }
  }]);

  return ScrollDown;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select) {
  return {
    isActive: select('core/editor').getEditorSettings().enableCustomFields,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitScrollDownTools')
  };
}), withSpokenMessages])(ScrollDown));

/***/ }),

/***/ "./src/extensions/components/scroll-down/index.js":
/*!********************************************************!*\
  !*** ./src/extensions/components/scroll-down/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_scrolldown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrolldown */ "./src/extensions/components/scroll-down/components/scrolldown.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-scrolldown', {
  icon: false,
  render: _components_scrolldown__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/components/selected-block/components/controls.js":
/*!*************************************************************************!*\
  !*** ./src/extensions/components/selected-block/components/controls.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies
 */
var Component = wp.element.Component;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var withSpokenMessages = wp.components.withSpokenMessages;

var AddSelectedBlockClass =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AddSelectedBlockClass, _Component);

  function AddSelectedBlockClass() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AddSelectedBlockClass);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(AddSelectedBlockClass).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AddSelectedBlockClass, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _document$body$classL;

      var blockName = this.props.blockName;

      if (!blockName) {
        return null;
      }

      var regx = new RegExp('\\beditorskit-selected--.*?\\b', 'g');
      var bodyClasses = document.body.classList;
      var addedClasses = bodyClasses.value.split(/\s+/).filter(function (el) {
        return regx.test(el);
      });

      (_document$body$classL = document.body.classList).remove.apply(_document$body$classL, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(addedClasses));

      document.body.classList.add('editorskit-selected--' + blockName.replace('/', '-'));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return AddSelectedBlockClass;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    blockName: selectedBlock.name
  };
}), withSpokenMessages)(AddSelectedBlockClass));

/***/ }),

/***/ "./src/extensions/components/selected-block/index.js":
/*!***********************************************************!*\
  !*** ./src/extensions/components/selected-block/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/components/selected-block/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-selected-block', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/disable-title/controls.js":
/*!**************************************************!*\
  !*** ./src/extensions/disable-title/controls.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);








/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    CheckboxControl = _wp$components.CheckboxControl;

var DisableTitle =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DisableTitle, _Component);

  function DisableTitle() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DisableTitle);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DisableTitle).apply(this, arguments));
    _this.initialize = _this.initialize.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DisableTitle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.initialize();
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          postmeta = _this$props.postmeta;
      var titleBlock = document.querySelector('.editor-post-title__block');

      if (titleBlock) {
        var isHidden = typeof postmeta !== 'undefined' && typeof postmeta._editorskit_title_hidden !== 'undefined' ? postmeta._editorskit_title_hidden : false;
        var bodyClass = isHidden ? 'editorskit-title-hidden' : 'editorskit-title-visible'; //remove existing class

        if (isHidden) {
          document.body.classList.remove('editorskit-title-visible');
        } else {
          document.body.classList.remove('editorskit-title-hidden');
        }

        document.body.classList.add(bodyClass); //hide if disabled

        if (isDisabled) {
          document.body.classList.add('editorskit-title-visible-disabled');
        } else {
          document.body.classList.remove('editorskit-title-visible-disabled');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onToggle = _this$props2.onToggle,
          postmeta = _this$props2.postmeta,
          posttype = _this$props2.posttype;

      if (['wp_block'].includes(posttype)) {
        return false;
      }

      var isHidden = typeof postmeta !== 'undefined' && typeof postmeta._editorskit_title_hidden !== 'undefined' ? postmeta._editorskit_title_hidden : false;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(PluginPostStatusInfo, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(CheckboxControl, {
        className: "editorskit-hide-title-label",
        label: __('Hide ' + posttype + ' Title', 'block-options'),
        checked: isHidden,
        onChange: onToggle,
        help: isHidden ? __('Title is hidden on your website.', 'block-options') : null
      }));
    }
  }]);

  return DisableTitle;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    posttype: select('core/editor').getEditedPostAttribute('type'),
    postmeta: select('core/editor').getEditedPostAttribute('meta'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitToggleTitleTools')
  };
}), withDispatch(function (dispatch, ownProps) {
  var metavalue;

  if (typeof ownProps.postmeta !== 'undefined' && typeof ownProps.postmeta._editorskit_title_hidden !== 'undefined') {
    metavalue = ownProps.postmeta._editorskit_title_hidden;
  }

  return {
    onToggle: function onToggle() {
      dispatch('core/editor').editPost({
        meta: {
          _editorskit_title_hidden: !metavalue
        }
      });
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(DisableTitle));

/***/ }),

/***/ "./src/extensions/disable-title/index.js":
/*!***********************************************!*\
  !*** ./src/extensions/disable-title/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./src/extensions/disable-title/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-disable-title', {
  icon: false,
  render: _controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/formats/alignment/attributes.js":
/*!********************************************************!*\
  !*** ./src/extensions/formats/alignment/attributes.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * WordPress Dependencies
 */
var addFilter = wp.hooks.addFilter;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var allowedBlocks = ['core/image', 'core/gallery', 'core/video', 'core/audio', 'core-embed', 'core-embed/youtube', 'core-embed/twitter', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker-deck', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv', 'core-embed/amazon-kindle'];
/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */

function addAttributes(settings) {
  if (typeof settings.attributes !== 'undefined') {
    if (allowedBlocks.includes(settings.name) || hasBlockSupport(settings.name, 'editorsKitCaptionAlignment')) {
      settings.attributes = Object.assign(settings.attributes, {
        captionAlignment: {
          type: 'string'
        }
      });
    }
  }

  return settings;
}

addFilter('blocks.registerBlockType', 'editorskit/alignment/attributes', addAttributes);

/***/ }),

/***/ "./src/extensions/formats/alignment/components/control.js":
/*!****************************************************************!*\
  !*** ./src/extensions/formats/alignment/components/control.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var Toolbar = wp.components.Toolbar;
var hasBlockSupport = wp.blocks.hasBlockSupport;
var ALLOWED_BLOCKS = ['core/image', 'core/gallery', 'core/video', 'core/audio', 'core-embed', 'core-embed/youtube', 'core-embed/twitter', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker-deck', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv', 'core-embed/amazon-kindle'];
var ALIGNMENT_CONTROLS = [{
  icon: 'editor-alignleft',
  title: __('Align caption left', 'block-options'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: __('Align caption center', 'block-options'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: __('Align caption right', 'block-options'),
  align: 'right'
}];

var AlignmentControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AlignmentControl, _Component);

  function AlignmentControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AlignmentControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AlignmentControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AlignmentControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blockId = _this$props.blockId,
          blockName = _this$props.blockName,
          blockClassName = _this$props.blockClassName,
          blockCaptionAlignment = _this$props.blockCaptionAlignment,
          updateBlockAttributes = _this$props.updateBlockAttributes;

      var clearClassName = function clearClassName(nextAlign) {
        var newClassName = '';

        if (blockClassName) {
          newClassName = blockClassName.replace('caption-align-default', '').replace('caption-align-center', '').replace('caption-align-right', '').replace('caption-align-left', '').trim();
        }

        if (nextAlign) {
          newClassName = "caption-align-".concat(nextAlign, " ") + newClassName;
        }

        newClassName = newClassName.replace(/\s+/g, ' ').trim();

        if (!newClassName) {
          newClassName = 'caption-align-default';
        }

        return newClassName;
      };

      if (ALLOWED_BLOCKS.includes(blockName) || hasBlockSupport(blockName, 'editorsKitCaptionAlignment')) {//continue
      } else {
        return null;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Toolbar, {
        className: "editorskit-components-alignment-toolbar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(AlignmentToolbar, {
        value: blockCaptionAlignment,
        onChange: function onChange(nextAlign) {
          updateBlockAttributes(blockId, {
            captionAlignment: nextAlign,
            className: clearClassName(nextAlign)
          });
        },
        alignmentControls: ALIGNMENT_CONTROLS
      }))));
    }
  }]);

  return AlignmentControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    blockId: selectedBlock.clientId,
    blockName: selectedBlock.name,
    blockClassName: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(selectedBlock, 'attributes.className'),
    blockCaptionAlignment: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(selectedBlock, 'attributes.captionAlignment'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitCaptionAlignmentFormats')
  };
}), withDispatch(function (dispatch) {
  return {
    updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(AlignmentControl));

/***/ }),

/***/ "./src/extensions/formats/alignment/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/formats/alignment/index.js ***!
  \***************************************************/
/*! exports provided: alignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignment", function() { return alignment; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/extensions/formats/alignment/attributes.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_attributes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/control */ "./src/extensions/formats/alignment/components/control.js");


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/alignment';
var alignment = {
  name: name,
  title: __('Change Caption Alignment', 'block-options'),
  tagName: 'figcaption',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/background-color/components/edit.js":
/*!********************************************************************!*\
  !*** ./src/extensions/formats/background-color/components/edit.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "./src/extensions/formats/background-color/icon.js");








/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var BlockControls = wp.blockEditor.BlockControls;
var _wp$richText = wp.richText,
    applyFormat = _wp$richText.applyFormat,
    removeFormat = _wp$richText.removeFormat,
    getActiveFormat = _wp$richText.getActiveFormat;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    Popover = _wp$components.Popover,
    ColorPalette = _wp$components.ColorPalette;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var name = 'editorskit/background';

var title = __('Highlight Color', 'block-options');

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.toggle = _this.toggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          value = _this$props.value,
          _onChange = _this$props.onChange,
          isActive = _this$props.isActive;
      var activeColor;
      var definedColors = [{
        name: __('Orange Sunrise', 'block-options'),
        slug: 'orange-sunrise',
        color: '#f7cc62'
      }, {
        name: __('Pink Flamingo', 'block-options'),
        slug: 'pink-flamingo',
        color: '#ffbfb5'
      }, {
        name: __('Spring Green', 'block-options'),
        slug: 'spring-green',
        color: '#b5dcaf'
      }, {
        name: __('Blue Moon', 'block-options'),
        slug: 'blue-moon',
        color: '#d6e8fa'
      }, {
        name: __('Purple Mist', 'block-options'),
        slug: 'purple-mist',
        color: '#d8c3ff'
      }];
      var colors = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(select('core/block-editor').getSettings(), ['colors'], definedColors);
      var activeColorFormat = getActiveFormat(value, name);

      if (activeColorFormat) {
        var styleColor = activeColorFormat.attributes.style;

        if (styleColor) {
          activeColor = styleColor.replace(new RegExp("^background-color:\\s*"), '');
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Toolbar, {
        className: "editorskit-components-toolbar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('components-button components-icon-button components-editorskit-toolbar__control components-toolbar__control components-editorskit-background-format', {
          'is-active': isActive
        }),
        icon: _icon__WEBPACK_IMPORTED_MODULE_9__["default"].highlighter,
        "aria-haspopup": "true",
        tooltip: title,
        onClick: this.toggle
      }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
        position: "bottom center",
        className: "components-editorskit__inline-color-popover",
        focusOnMount: "container",
        onClickOutside: function onClickOutside(_onClickOutside) {
          if (!_onClickOutside.target.classList.contains('components-editorskit-background-format') && !document.querySelector('.components-editorskit-background-format').contains(_onClickOutside.target) && (!document.querySelector('.components-color-palette__picker') || document.querySelector('.components-color-palette__picker') && !document.querySelector('.components-color-palette__picker').contains(_onClickOutside.target))) {
            _this2.setState({
              isOpen: !isOpen
            });
          }
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ColorPalette, {
        colors: colors,
        value: activeColor,
        onChange: function onChange(color) {
          if (color) {
            _onChange(applyFormat(value, {
              type: name,
              attributes: {
                style: "background-color:".concat(color)
              }
            }));
          } else {
            _onChange(removeFormat(value, name));
          }
        }
      })))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHighlightFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(Edit));

/***/ }),

/***/ "./src/extensions/formats/background-color/icon.js":
/*!*********************************************************!*\
  !*** ./src/extensions/formats/background-color/icon.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.highlighter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "300",
  width: "300",
  viewBox: "0 0 512 512"
}, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M240.2,369.1 C244.39999999999998,373.3 251.2,373 255.10000000000002,368.6 L465.7,125.4 C474.5,115.3 474,100.2 464.5,90.7 L426.3,52.5 C416.8,43 401.7,42.5 391.6,51.3 L148.4,262 C143.9,265.9 143.7,272.7 147.9,276.9 L240.2,369.1 z",
  id: "svg_2"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M48.2,449.7 L86.5,462.5 L104.5,444.5 L172.1,444.5 C174.8,444.5 177.4,443.4 179.3,441.5 L205.1,415.7 C209.1,411.7 209.1,405.3 205.1,401.3 L111.6,308 C107.6,304 101.19999999999999,304 97.19999999999999,308 L71.4,333.8 C69.5,335.7 68.4,338.3 68.4,341 L68.4,404.4 C68.4,407.1 67.3,409.7 65.4,411.6 L44.099999999999994,432.9 C38.900000000000006,438.2 41.099999999999994,447.3 48.2,449.7 z",
  id: "svg_3"
}), " ");
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/formats/background-color/index.js":
/*!**********************************************************!*\
  !*** ./src/extensions/formats/background-color/index.js ***!
  \**********************************************************/
/*! exports provided: backgroundColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor", function() { return backgroundColor; });
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/extensions/formats/background-color/components/edit.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
/**
 * Block constants
 */

var name = 'editorskit/background';
var backgroundColor = {
  name: name,
  title: __('Background Color', 'block-options'),
  tagName: 'span',
  className: 'has-inline-background',
  attributes: {
    style: 'style'
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/extensions/formats/character-map/components/controls.js":
/*!*********************************************************************!*\
  !*** ./src/extensions/formats/character-map/components/controls.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_react_character_map_dist_component_chars_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/react-character-map/dist/component/chars.json */ "./node_modules/react-character-map/dist/component/chars.json");
var _node_modules_react_character_map_dist_component_chars_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../node_modules/react-character-map/dist/component/chars.json */ "./node_modules/react-character-map/dist/component/chars.json", 1);








/**
 * External dependencies
 */
 // import { CharacterMap } from 'react-character-map';


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var getRectangleFromRange = wp.dom.getRectangleFromRange;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
var _wp$richText = wp.richText,
    applyFormat = _wp$richText.applyFormat,
    removeFormat = _wp$richText.removeFormat,
    getActiveFormat = _wp$richText.getActiveFormat;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    Popover = _wp$components.Popover,
    ColorPalette = _wp$components.ColorPalette;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var name = 'editorskit/character-map';

var title = __('Special Characters', 'block-options');

var CharacterMapControls =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CharacterMapControls, _Component);

  function CharacterMapControls() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CharacterMapControls);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CharacterMapControls).apply(this, arguments));
    _this.toggle = _this.toggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CharacterMapControls, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          isActive = _this$props.isActive,
          onToggle = _this$props.onToggle;
      console.log(isOpen);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichTextToolbarButton, {
        icon: "editor-customchar",
        title: title,
        onClick: this.toggle // isActive={isBlockJustified}

      }), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
        position: "bottom center",
        className: "components-editorskit__inline-character-map",
        focusOnMount: "container",
        expandOnMobile: true,
        key: "charmap-popover"
      }, "asdfasd"));
    }
  }]);

  return CharacterMapControls;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    formatTypes: select('core/rich-text').getFormatTypes(),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitColorsFormats')
  };
}), ifCondition(function (props) {
  var checkFormats = props.formatTypes.filter(function (formats) {
    return formats.name === 'special-characters/insertspecialcharacters';
  });
  return !props.isDisabled && checkFormats.length === 0;
}))(CharacterMapControls));

/***/ }),

/***/ "./src/extensions/formats/character-map/index.js":
/*!*******************************************************!*\
  !*** ./src/extensions/formats/character-map/index.js ***!
  \*******************************************************/
/*! exports provided: characterMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterMap", function() { return characterMap; });
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/formats/character-map/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
/**
 * Block constants
 */

var name = 'editorskit/character-map';
var characterMap = {
  name: name,
  title: __('Special Characters', 'block-options'),
  tagName: 'editorskitspecialcharacters',
  className: null,
  edit: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/extensions/formats/clear/controls.js":
/*!**************************************************!*\
  !*** ./src/extensions/formats/clear/controls.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
var removeFormat = wp.richText.removeFormat;

var ClearFormatting =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ClearFormatting, _Component);

  function ClearFormatting() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ClearFormatting);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ClearFormatting).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ClearFormatting, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          isActive = _this$props.isActive,
          onChange = _this$props.onChange;

      var onToggle = function onToggle() {
        var formatTypes = select('core/rich-text').getFormatTypes();

        if (formatTypes.length > 0) {
          var newValue = value;
          lodash_map__WEBPACK_IMPORTED_MODULE_7___default()(formatTypes, function (activeFormat) {
            newValue = removeFormat(newValue, activeFormat.name);
          });
          onChange(_objectSpread({}, newValue));
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichTextToolbarButton, {
        icon: "editor-removeformatting",
        title: __('Clear Formatting', 'block-options'),
        onClick: onToggle,
        isActive: isActive
      });
    }
  }]);

  return ClearFormatting;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitClearFormattingFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(ClearFormatting));

/***/ }),

/***/ "./src/extensions/formats/clear/index.js":
/*!***********************************************!*\
  !*** ./src/extensions/formats/clear/index.js ***!
  \***********************************************/
/*! exports provided: clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/clear/controls.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/clear-formatting';
var clear = {
  name: name,
  title: __('Clear Formatting', 'block-options'),
  tagName: 'span',
  className: 'editorskit-clear-formatting',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/index.js":
/*!*****************************************!*\
  !*** ./src/extensions/formats/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _underline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underline */ "./src/extensions/formats/underline/index.js");
/* harmony import */ var _justify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./justify */ "./src/extensions/formats/justify/index.js");
/* harmony import */ var _text_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-color */ "./src/extensions/formats/text-color/index.js");
/* harmony import */ var _background_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-color */ "./src/extensions/formats/background-color/index.js");
/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdown */ "./src/extensions/formats/markdown/index.js");
/* harmony import */ var _subscript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscript */ "./src/extensions/formats/subscript/index.js");
/* harmony import */ var _superscript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./superscript */ "./src/extensions/formats/superscript/index.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clear */ "./src/extensions/formats/clear/index.js");
/* harmony import */ var _uppercase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uppercase */ "./src/extensions/formats/uppercase/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./link */ "./src/extensions/formats/link/index.js");
/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./alignment */ "./src/extensions/formats/alignment/index.js");
/* harmony import */ var _nbsp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nbsp */ "./src/extensions/formats/nbsp/index.js");
/* harmony import */ var _character_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./character-map */ "./src/extensions/formats/character-map/index.js");


/**
 * Internal dependencies
 */













/**
 * WordPress dependencies
 */

var registerFormatType = wp.richText.registerFormatType;
var select = wp.data.select;
var isDisabled = select('core/edit-post').isFeatureActive('disableEditorsKitLinkFormats');

function registerEditorsKitFormats() {
  [_underline__WEBPACK_IMPORTED_MODULE_1__["underline"], _justify__WEBPACK_IMPORTED_MODULE_2__["justify"], _text_color__WEBPACK_IMPORTED_MODULE_3__["textColor"], _background_color__WEBPACK_IMPORTED_MODULE_4__["backgroundColor"], _markdown__WEBPACK_IMPORTED_MODULE_5__["markdown"], _subscript__WEBPACK_IMPORTED_MODULE_6__["subscript"], _superscript__WEBPACK_IMPORTED_MODULE_7__["superscript"], _clear__WEBPACK_IMPORTED_MODULE_8__["clear"], _uppercase__WEBPACK_IMPORTED_MODULE_9__["uppercase"], _alignment__WEBPACK_IMPORTED_MODULE_11__["alignment"], _nbsp__WEBPACK_IMPORTED_MODULE_12__["nbsp"], !isDisabled ? _link__WEBPACK_IMPORTED_MODULE_10__["link"] : [], _character_map__WEBPACK_IMPORTED_MODULE_13__["characterMap"]].forEach(function (_ref) {
    var name = _ref.name,
        settings = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["name"]);

    if (name) {
      registerFormatType(name, settings);
    }
  });
}

wp.domReady(registerEditorsKitFormats);

/***/ }),

/***/ "./src/extensions/formats/justify/controls.js":
/*!****************************************************!*\
  !*** ./src/extensions/formats/justify/controls.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;

var JustifyControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(JustifyControl, _Component);

  function JustifyControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, JustifyControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(JustifyControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(JustifyControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blockId = _this$props.blockId,
          isBlockJustified = _this$props.isBlockJustified,
          isDisabled = _this$props.isDisabled,
          updateBlockAttributes = _this$props.updateBlockAttributes;

      if (isDisabled) {
        return null;
      }

      var onToggle = function onToggle() {
        updateBlockAttributes(blockId, {
          align: isBlockJustified ? null : 'justify'
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextToolbarButton, {
        icon: "editor-justify",
        title: __('Justify', 'block-options'),
        onClick: onToggle,
        isActive: isBlockJustified
      });
    }
  }]);

  return JustifyControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var selectedBlock = select('core/block-editor').getSelectedBlock();

  if (!selectedBlock) {
    return {};
  }

  return {
    blockId: selectedBlock.clientId,
    blockName: selectedBlock.name,
    isBlockJustified: 'justify' === Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(selectedBlock, 'attributes.align'),
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitJustifyFormats'),
    formatTypes: select('core/rich-text').getFormatTypes()
  };
}), withDispatch(function (dispatch) {
  return {
    updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes
  };
}), ifCondition(function (props) {
  var checkFormats = props.formatTypes.filter(function (formats) {
    return formats.name === 'wpcom/justify';
  });
  return 'core/paragraph' === props.blockName && checkFormats.length === 0;
}))(JustifyControl));

/***/ }),

/***/ "./src/extensions/formats/justify/index.js":
/*!*************************************************!*\
  !*** ./src/extensions/formats/justify/index.js ***!
  \*************************************************/
/*! exports provided: justify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justify", function() { return justify; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/justify/controls.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/justify';
var justify = {
  name: name,
  title: __('Align text justify', 'block-options'),
  tagName: 'p',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/link/components/edit.js":
/*!********************************************************!*\
  !*** ./src/extensions/formats/link/components/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inline */ "./src/extensions/formats/link/components/inline.js");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var _wp$richText = wp.richText,
    getTextContent = _wp$richText.getTextContent,
    applyFormat = _wp$richText.applyFormat,
    removeFormat = _wp$richText.removeFormat,
    slice = _wp$richText.slice,
    getActiveFormat = _wp$richText.getActiveFormat;
var isURL = wp.url.isURL;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    withSpokenMessages = _wp$components.withSpokenMessages;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
/**
 * Internal dependencies
 */


var name = 'editorskit/link';

var title = __('Add Link', 'block-options');

var EMAIL_REGEXP = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i;

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).apply(this, arguments));
    _this.isEmail = _this.isEmail.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.addLink = _this.addLink.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.stopAddingLink = _this.stopAddingLink.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.onRemoveFormat = _this.onRemoveFormat.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.state = {
      addingLink: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var oldFormat = select('core/rich-text').getFormatType('core/link');

      if (oldFormat) {
        oldFormat.edit = null;
        dispatch('core/rich-text').addFormatTypes(oldFormat);
      }
    }
  }, {
    key: "isEmail",
    value: function isEmail(email) {
      return EMAIL_REGEXP.test(email);
    }
  }, {
    key: "addLink",
    value: function addLink() {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var text = getTextContent(slice(value));

      if (text && isURL(text)) {
        onChange(applyFormat(value, {
          type: name,
          attributes: {
            url: text
          }
        }));
      } else if (text && this.isEmail(text)) {
        onChange(applyFormat(value, {
          type: name,
          attributes: {
            url: "mailto:".concat(text)
          }
        }));
      } else {
        this.setState({
          addingLink: true
        });
      }
    }
  }, {
    key: "stopAddingLink",
    value: function stopAddingLink() {
      this.setState({
        addingLink: false
      });
    }
  }, {
    key: "onRemoveFormat",
    value: function onRemoveFormat() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          speak = _this$props2.speak;
      var newValue = value;
      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(['core/link', 'editorskit/link'], function (linkFormat) {
        newValue = removeFormat(newValue, linkFormat);
      });
      onChange(_objectSpread({}, newValue));
      speak(__('Link removed.', 'block-options'), 'assertive');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          activeAttributes = _this$props3.activeAttributes,
          onChange = _this$props3.onChange;
      var _this$props4 = this.props,
          isActive = _this$props4.isActive,
          value = _this$props4.value;
      var activeFormat = getActiveFormat(value, 'core/link');

      if (activeFormat) {
        activeFormat.type = name;
        var newValue = value;
        newValue = applyFormat(newValue, activeFormat);
        newValue = removeFormat(newValue, 'core/link');
        onChange(_objectSpread({}, newValue));
        value = newValue;
        isActive = true;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Toolbar, {
        className: "editorskit-components-toolbar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichTextShortcut, {
        type: "primary",
        character: "k",
        onUse: this.addLink
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichTextShortcut, {
        type: "primaryShift",
        character: "k",
        onUse: this.onRemoveFormat
      }), isActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichTextToolbarButton, {
        name: "link",
        icon: "editor-unlink",
        title: __('Unlink', 'block-options'),
        onClick: this.onRemoveFormat,
        isActive: isActive,
        shortcutType: "primaryShift",
        shortcutCharacter: "k"
      }), !isActive && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(RichTextToolbarButton, {
        name: "link",
        icon: "admin-links",
        title: title,
        onClick: this.addLink,
        isActive: isActive,
        shortcutType: "primary",
        shortcutCharacter: "k"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_inline__WEBPACK_IMPORTED_MODULE_9__["default"], {
        addingLink: this.state.addingLink,
        stopAddingLink: this.stopAddingLink,
        isActive: isActive,
        activeAttributes: activeAttributes,
        value: value,
        onChange: onChange
      }))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitLinkFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(Edit));

/***/ }),

/***/ "./src/extensions/formats/link/components/inline.js":
/*!**********************************************************!*\
  !*** ./src/extensions/formats/link/components/inline.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/extensions/formats/link/components/utils.js");
/* harmony import */ var _positioned_at_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./positioned-at-selection */ "./src/extensions/formats/link/components/positioned-at-selection.js");
/* harmony import */ var _link_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./link-editor */ "./src/extensions/formats/link/components/link-editor.js");
/* harmony import */ var _link_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link-viewer */ "./src/extensions/formats/link/components/link-viewer.js");










/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    createRef = _wp$element.createRef,
    useMemo = _wp$element.useMemo,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    withSpokenMessages = _wp$components.withSpokenMessages;
var _wp$keycodes = wp.keycodes,
    LEFT = _wp$keycodes.LEFT,
    RIGHT = _wp$keycodes.RIGHT,
    UP = _wp$keycodes.UP,
    DOWN = _wp$keycodes.DOWN,
    BACKSPACE = _wp$keycodes.BACKSPACE,
    ENTER = _wp$keycodes.ENTER,
    ESCAPE = _wp$keycodes.ESCAPE;
var getRectangleFromRange = wp.dom.getRectangleFromRange;
var prependHTTP = wp.url.prependHTTP;
var _wp$richText = wp.richText,
    create = _wp$richText.create,
    insert = _wp$richText.insert,
    isCollapsed = _wp$richText.isCollapsed,
    applyFormat = _wp$richText.applyFormat,
    getTextContent = _wp$richText.getTextContent,
    slice = _wp$richText.slice;
var URLPopover = wp.blockEditor.URLPopover;
/**
 * Internal dependencies
 */






var stopKeyPropagation = function stopKeyPropagation(event) {
  return event.stopPropagation();
};

function isShowingInput(props, state) {
  return props.addingLink || state.editLink;
}

var URLPopoverAtLink = function URLPopoverAtLink(_ref) {
  var isActive = _ref.isActive,
      addingLink = _ref.addingLink,
      value = _ref.value,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default()(_ref, ["isActive", "addingLink", "value"]);

  var anchorRect = useMemo(function () {
    var selection = window.getSelection();
    var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (!range) {
      return;
    }

    if (addingLink) {
      return getRectangleFromRange(range);
    }

    var element = range.startContainer; // If the caret is right before the element, select the next element.

    element = element.nextElementSibling || element;

    while (element.nodeType !== window.Node.ELEMENT_NODE) {
      element = element.parentNode;
    }

    var closest = element.closest('a');

    if (closest) {
      return closest.getBoundingClientRect();
    }
  }, [isActive, addingLink, value.start, value.end]);

  if (!anchorRect) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(URLPopover, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({
    anchorRect: anchorRect
  }, props));
};

var InlineLinkUI =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InlineLinkUI, _Component);

  function InlineLinkUI() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InlineLinkUI);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InlineLinkUI).apply(this, arguments));
    _this.editLink = _this.editLink.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.submitLink = _this.submitLink.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onChangeInputValue = _this.onChangeInputValue.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setLinkTarget = _this.setLinkTarget.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setNoFollow = _this.setNoFollow.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setSponsored = _this.setSponsored.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onFocusOutside = _this.onFocusOutside.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.resetState = _this.resetState.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.autocompleteRef = createRef();
    _this.state = {
      opensInNewWindow: false,
      noFollow: false,
      sponsored: false,
      inputValue: ''
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InlineLinkUI, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if ([LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER].indexOf(event.keyCode) > -1) {
        // Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
        event.stopPropagation();
      }

      if ([ESCAPE].indexOf(event.keyCode) > -1) {
        this.resetState();
      }
    }
  }, {
    key: "onChangeInputValue",
    value: function onChangeInputValue(inputValue) {
      this.setState({
        inputValue: inputValue
      });
    }
  }, {
    key: "setLinkTarget",
    value: function setLinkTarget(opensInNewWindow) {
      var _this$props = this.props,
          _this$props$activeAtt = _this$props.activeAttributes.url,
          url = _this$props$activeAtt === void 0 ? '' : _this$props$activeAtt,
          value = _this$props.value,
          onChange = _this$props.onChange;
      this.setState({
        opensInNewWindow: opensInNewWindow
      }); // Apply now if URL is not being edited.

      if (!isShowingInput(this.props, this.state)) {
        var selectedText = getTextContent(slice(value));
        onChange(applyFormat(value, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createLinkFormat"])({
          url: url,
          opensInNewWindow: opensInNewWindow,
          noFollow: this.state.noFollow,
          sponsored: this.state.sponsored,
          text: selectedText
        })));
      }
    }
  }, {
    key: "setNoFollow",
    value: function setNoFollow(noFollow) {
      var _this$props2 = this.props,
          _this$props2$activeAt = _this$props2.activeAttributes.url,
          url = _this$props2$activeAt === void 0 ? '' : _this$props2$activeAt,
          value = _this$props2.value,
          onChange = _this$props2.onChange;
      this.setState({
        noFollow: noFollow
      }); // Apply now if URL is not being edited.

      if (!isShowingInput(this.props, this.state)) {
        var selectedText = getTextContent(slice(value));
        onChange(applyFormat(value, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createLinkFormat"])({
          url: url,
          opensInNewWindow: this.state.opensInNewWindow,
          noFollow: noFollow,
          sponsored: this.state.sponsored,
          text: selectedText
        })));
      }
    }
  }, {
    key: "setSponsored",
    value: function setSponsored(sponsored) {
      var _this$props3 = this.props,
          _this$props3$activeAt = _this$props3.activeAttributes.url,
          url = _this$props3$activeAt === void 0 ? '' : _this$props3$activeAt,
          value = _this$props3.value,
          onChange = _this$props3.onChange;
      this.setState({
        sponsored: sponsored
      }); // Apply now if URL is not being edited.

      if (!isShowingInput(this.props, this.state)) {
        var selectedText = getTextContent(slice(value));
        onChange(applyFormat(value, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createLinkFormat"])({
          url: url,
          opensInNewWindow: this.state.opensInNewWindow,
          noFollow: this.state.noFollow,
          sponsored: sponsored,
          text: selectedText
        })));
      }
    }
  }, {
    key: "editLink",
    value: function editLink(event) {
      this.setState({
        editLink: true
      });
      event.preventDefault();
    }
  }, {
    key: "submitLink",
    value: function submitLink(event) {
      var _this$props4 = this.props,
          isActive = _this$props4.isActive,
          value = _this$props4.value,
          onChange = _this$props4.onChange,
          speak = _this$props4.speak;
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          opensInNewWindow = _this$state.opensInNewWindow;
      var url = prependHTTP(inputValue);
      var selectedText = getTextContent(slice(value));
      var format = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createLinkFormat"])({
        url: url,
        opensInNewWindow: opensInNewWindow,
        text: selectedText
      });
      event.preventDefault();

      if (isCollapsed(value) && !isActive) {
        var toInsert = applyFormat(create({
          text: url
        }), format, 0, url.length);
        onChange(insert(value, toInsert));
      } else {
        onChange(applyFormat(value, format));
      }

      this.resetState();

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidHref"])(url)) {
        speak(__('Warning: the link has been inserted but may have errors. Please test it.', 'block-options'), 'assertive');
      } else if (isActive) {
        speak(__('Link edited.', 'block-options'), 'assertive');
      } else {
        speak(__('Link inserted.', 'block-options'), 'assertive');
      }
    }
  }, {
    key: "onFocusOutside",
    value: function onFocusOutside() {
      // The autocomplete suggestions list renders in a separate popover (in a portal),
      // so onClickOutside fails to detect that a click on a suggestion occured in the
      // LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
      // return to avoid the popover being closed.
      var autocompleteElement = this.autocompleteRef.current;

      if (autocompleteElement && autocompleteElement.contains(event.target)) {
        return;
      }

      this.resetState();
    }
  }, {
    key: "resetState",
    value: function resetState() {
      this.props.stopAddingLink();
      this.setState({
        editLink: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          isActive = _this$props5.isActive,
          _this$props5$activeAt = _this$props5.activeAttributes,
          url = _this$props5$activeAt.url,
          target = _this$props5$activeAt.target,
          rel = _this$props5$activeAt.rel,
          addingLink = _this$props5.addingLink,
          value = _this$props5.value;

      if (!isActive && !addingLink) {
        return null;
      }

      var _this$state2 = this.state,
          inputValue = _this$state2.inputValue,
          opensInNewWindow = _this$state2.opensInNewWindow,
          noFollow = _this$state2.noFollow,
          sponsored = _this$state2.sponsored;
      var showInput = isShowingInput(this.props, this.state);

      if (!opensInNewWindow && target === '_blank') {
        this.setState({
          opensInNewWindow: true
        });
      }

      if (typeof rel === 'string') {
        var relNoFollow = rel.split(' ').includes('nofollow');
        var relSponsored = rel.split(' ').includes('sponsored');

        if (relNoFollow !== noFollow) {
          this.setState({
            noFollow: relNoFollow
          });
        }

        if (relSponsored !== sponsored) {
          this.setState({
            sponsored: relSponsored
          });
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_positioned_at_selection__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: "".concat(value.start).concat(value.end)
        /* Used to force rerender on selection change */

      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(URLPopoverAtLink, {
        value: value,
        isActive: isActive,
        addingLink: addingLink,
        onFocusOutside: this.onFocusOutside,
        onClose: function onClose() {
          if (!inputValue) {
            _this2.resetState();
          }
        },
        focusOnMount: showInput ? 'firstElement' : false,
        renderSettings: function renderSettings() {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ToggleControl, {
            label: __('Open in New Tab', 'block-options'),
            checked: opensInNewWindow,
            onChange: _this2.setLinkTarget
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ToggleControl, {
            label: __('No Follow', 'block-options'),
            checked: noFollow,
            onChange: _this2.setNoFollow
          }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ToggleControl, {
            label: __('Sponsored', 'block-options'),
            checked: sponsored,
            onChange: _this2.setSponsored
          }));
        }
      }, showInput ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_link_editor__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
        value: inputValue,
        onChangeInputValue: this.onChangeInputValue,
        onKeyDown: this.onKeyDown,
        onKeyPress: stopKeyPropagation,
        onSubmit: this.submitLink,
        autocompleteRef: this.autocompleteRef
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_link_viewer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content",
        onKeyPress: stopKeyPropagation,
        url: url,
        onEditLinkClick: this.editLink,
        linkClassName: url && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidHref"])(prependHTTP(url)) ? undefined : 'has-invalid-link'
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var _props$activeAttribut = props.activeAttributes,
          url = _props$activeAttribut.url,
          target = _props$activeAttribut.target,
          rel = _props$activeAttribut.rel;
      var opensInNewWindow = target === '_blank';

      if (!isShowingInput(props, state)) {
        if (url !== state.inputValue) {
          return {
            inputValue: url
          };
        }

        if (opensInNewWindow !== state.opensInNewWindow) {
          return {
            opensInNewWindow: opensInNewWindow
          };
        }

        if (typeof rel === 'string') {
          var noFollow = rel.split(' ').includes('nofollow');
          var sponsored = rel.split(' ').includes('sponsored');

          if (noFollow !== state.noFollow) {
            return {
              noFollow: noFollow
            };
          }

          if (sponsored !== state.sponsored) {
            return {
              sponsored: sponsored
            };
          }
        }
      }

      return null;
    }
  }]);

  return InlineLinkUI;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSpokenMessages(InlineLinkUI));

/***/ }),

/***/ "./src/extensions/formats/link/components/link-editor.js":
/*!***************************************************************!*\
  !*** ./src/extensions/formats/link/components/link-editor.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkEditor; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _url_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url-input */ "./src/extensions/formats/link/components/url-input.js");




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var IconButton = wp.components.IconButton;
/**
 * Internal dependencies
 */


function LinkEditor(_ref) {
  var autocompleteRef = _ref.autocompleteRef,
      className = _ref.className,
      onChangeInputValue = _ref.onChangeInputValue,
      value = _ref.value,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["autocompleteRef", "className", "onChangeInputValue", "value"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("form", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('block-editor-url-popover__link-editor', className)
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_url_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: value,
    onChange: onChangeInputValue,
    autocompleteRef: autocompleteRef
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(IconButton, {
    icon: "editor-break",
    label: __('Apply', 'block-options'),
    type: "submit"
  }));
}

/***/ }),

/***/ "./src/extensions/formats/link/components/link-viewer.js":
/*!***************************************************************!*\
  !*** ./src/extensions/formats/link/components/link-viewer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkViewer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    ExternalLink = _wp$components.ExternalLink,
    IconButton = _wp$components.IconButton;
var _wp$url = wp.url,
    safeDecodeURI = _wp$url.safeDecodeURI,
    filterURLForDisplay = _wp$url.filterURLForDisplay;

function LinkViewerUrl(_ref) {
  var url = _ref.url,
      urlLabel = _ref.urlLabel,
      className = _ref.className;
  var linkClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'block-editor-url-popover__link-viewer-url');

  if (!url) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
      className: linkClassName
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ExternalLink, {
    className: linkClassName,
    href: url
  }, urlLabel || filterURLForDisplay(safeDecodeURI(url)));
}

function LinkViewer(_ref2) {
  var className = _ref2.className,
      linkClassName = _ref2.linkClassName,
      onEditLinkClick = _ref2.onEditLinkClick,
      url = _ref2.url,
      urlLabel = _ref2.urlLabel,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["className", "linkClassName", "onEditLinkClick", "url", "urlLabel"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('block-editor-url-popover__link-viewer', className)
  }, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(LinkViewerUrl, {
    url: url,
    urlLabel: urlLabel,
    className: linkClassName
  }), onEditLinkClick && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(IconButton, {
    icon: "edit",
    label: __('Edit', 'block-options'),
    onClick: onEditLinkClick
  }));
}

/***/ }),

/***/ "./src/extensions/formats/link/components/positioned-at-selection.js":
/*!***************************************************************************!*\
  !*** ./src/extensions/formats/link/components/positioned-at-selection.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







/**
 * WordPress dependencies
 */
var Component = wp.element.Component;
var _wp$dom = wp.dom,
    getOffsetParent = _wp$dom.getOffsetParent,
    getRectangleFromRange = _wp$dom.getRectangleFromRange;
/**
 * Returns a style object for applying as `position: absolute` for an element
 * relative to the bottom-center of the current selection. Includes `top` and
 * `left` style properties.
 *
 * @return {Object} Style object.
 */

function getCurrentCaretPositionStyle() {
  var selection = window.getSelection(); // Unlikely, but in the case there is no selection, return empty styles so
  // as to avoid a thrown error by `Selection#getRangeAt` on invalid index.

  if (selection.rangeCount === 0) {
    return {};
  } // Get position relative viewport.


  var rect = getRectangleFromRange(selection.getRangeAt(0));
  var top = rect.top + rect.height;
  var left = rect.left + rect.width / 2; // Offset by positioned parent, if one exists.

  var offsetParent = getOffsetParent(selection.anchorNode);

  if (offsetParent) {
    var parentRect = offsetParent.getBoundingClientRect();
    top -= parentRect.top;
    left -= parentRect.left;
  }

  return {
    top: top,
    left: left
  };
}
/**
 * Component which renders itself positioned under the current caret selection.
 * The position is calculated at the time of the component being mounted, so it
 * should only be mounted after the desired selection has been made.
 *
 * @type {WPComponent}
 */


var PositionedAtSelection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PositionedAtSelection, _Component);

  function PositionedAtSelection() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PositionedAtSelection);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PositionedAtSelection).apply(this, arguments));
    _this.state = {
      style: getCurrentCaretPositionStyle()
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PositionedAtSelection, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var style = this.state.style;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "editor-format-toolbar__selection-position",
        style: style
      }, children);
    }
  }]);

  return PositionedAtSelection;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PositionedAtSelection);

/***/ }),

/***/ "./src/extensions/formats/link/components/url-input.js":
/*!*************************************************************!*\
  !*** ./src/extensions/formats/link/components/url-input.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-scroll-into-view */ "./node_modules/dom-scroll-into-view/dist-web/index.js");








/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf,
    _n = _wp$i18n._n;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    createRef = _wp$element.createRef;
var decodeEntities = wp.htmlEntities.decodeEntities;
var _wp$keycodes = wp.keycodes,
    UP = _wp$keycodes.UP,
    DOWN = _wp$keycodes.DOWN,
    ENTER = _wp$keycodes.ENTER,
    TAB = _wp$keycodes.TAB;
var _wp$components = wp.components,
    Spinner = _wp$components.Spinner,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Popover = _wp$components.Popover;
var withInstanceId = wp.compose.withInstanceId;
var apiFetch = wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs; // Since URLInput is rendered in the context of other inputs, but should be
// considered a separate modal node, prevent keyboard events from propagating
// as being considered from the input.

var stopEventPropagation = function stopEventPropagation(event) {
  return event.stopPropagation();
};

var URLInput =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(URLInput, _Component);

  function URLInput(_ref) {
    var _this;

    var autocompleteRef = _ref.autocompleteRef;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, URLInput);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(URLInput).apply(this, arguments));
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.autocompleteRef = autocompleteRef || createRef();
    _this.inputRef = createRef();
    _this.updateSuggestions = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["throttle"])(_this.updateSuggestions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), 200);
    _this.suggestionNodes = [];
    _this.state = {
      posts: [],
      showSuggestions: false,
      selectedSuggestion: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(URLInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var _this$state = this.state,
          showSuggestions = _this$state.showSuggestions,
          selectedSuggestion = _this$state.selectedSuggestion; // only have to worry about scrolling selected suggestion into view
      // when already expanded

      if (showSuggestions && selectedSuggestion !== null && !this.scrollingIntoView) {
        this.scrollingIntoView = true;
        Object(dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__["default"])(this.suggestionNodes[selectedSuggestion], this.autocompleteRef.current, {
          onlyScrollIfNeeded: true
        });
        setTimeout(function () {
          _this2.scrollingIntoView = false;
        }, 100);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.suggestionsRequest;
    }
  }, {
    key: "bindSuggestionNode",
    value: function bindSuggestionNode(index) {
      var _this3 = this;

      return function (ref) {
        _this3.suggestionNodes[index] = ref;
      };
    }
  }, {
    key: "updateSuggestions",
    value: function updateSuggestions(value) {
      var _this4 = this;

      // Show the suggestions after typing at least 2 characters
      // and also for URLs
      if (value.length < 2 || /^https?:/.test(value)) {
        this.setState({
          showSuggestions: false,
          selectedSuggestion: null,
          loading: false
        });
        return;
      }

      this.setState({
        showSuggestions: true,
        selectedSuggestion: null,
        loading: true
      });
      var request = apiFetch({
        path: addQueryArgs('/wp/v2/search', {
          search: value,
          per_page: 20,
          type: 'post'
        })
      });
      request.then(function (posts) {
        // A fetch Promise doesn't have an abort option. It's mimicked by
        // comparing the request reference in on the instance, which is
        // reset or deleted on subsequent requests or unmounting.
        if (_this4.suggestionsRequest !== request) {
          return;
        }

        _this4.setState({
          posts: posts,
          loading: false
        });

        if (posts.length) {
          _this4.props.debouncedSpeak(sprintf(_n('%d result found, use up and down arrow keys to navigate.', '%d results found, use up and down arrow keys to navigate.', posts.length), posts.length), 'assertive');
        } else {
          _this4.props.debouncedSpeak(__('No results.', 'block-options'), 'assertive');
        }
      }).catch(function () {
        if (_this4.suggestionsRequest === request) {
          _this4.setState({
            loading: false
          });
        }
      });
      this.suggestionsRequest = request;
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var inputValue = event.target.value;
      this.props.onChange(inputValue);
      this.updateSuggestions(inputValue);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this$state2 = this.state,
          showSuggestions = _this$state2.showSuggestions,
          selectedSuggestion = _this$state2.selectedSuggestion,
          posts = _this$state2.posts,
          loading = _this$state2.loading; // If the suggestions are not shown or loading, we shouldn't handle the arrow keys
      // We shouldn't preventDefault to allow block arrow keys navigation

      if (!showSuggestions || !posts.length || loading) {
        // In the Windows version of Firefox the up and down arrows don't move the caret
        // within an input field like they do for Mac Firefox/Chrome/Safari. This causes
        // a form of focus trapping that is disruptive to the user experience. This disruption
        // only happens if the caret is not in the first or last position in the text input.
        // See: https://github.com/WordPress/gutenberg/issues/5693#issuecomment-436684747
        switch (event.keyCode) {
          // When UP is pressed, if the caret is at the start of the text, move it to the 0
          // position.
          case UP:
            {
              if (0 !== event.target.selectionStart) {
                event.stopPropagation();
                event.preventDefault(); // Set the input caret to position 0

                event.target.setSelectionRange(0, 0);
              }

              break;
            }
          // When DOWN is pressed, if the caret is not at the end of the text, move it to the
          // last position.

          case DOWN:
            {
              if (this.props.value.length !== event.target.selectionStart) {
                event.stopPropagation();
                event.preventDefault(); // Set the input caret to the last position

                event.target.setSelectionRange(this.props.value.length, this.props.value.length);
              }

              break;
            }
        }

        return;
      }

      var post = this.state.posts[this.state.selectedSuggestion];

      switch (event.keyCode) {
        case UP:
          {
            event.stopPropagation();
            event.preventDefault();
            var previousIndex = !selectedSuggestion ? posts.length - 1 : selectedSuggestion - 1;
            this.setState({
              selectedSuggestion: previousIndex
            });
            break;
          }

        case DOWN:
          {
            event.stopPropagation();
            event.preventDefault();
            var nextIndex = selectedSuggestion === null || selectedSuggestion === posts.length - 1 ? 0 : selectedSuggestion + 1;
            this.setState({
              selectedSuggestion: nextIndex
            });
            break;
          }

        case TAB:
          {
            if (this.state.selectedSuggestion !== null) {
              this.selectLink(post); // Announce a link has been selected when tabbing away from the input field.

              this.props.speak(__('Link selected.', 'block-options'));
            }

            break;
          }

        case ENTER:
          {
            if (this.state.selectedSuggestion !== null) {
              event.stopPropagation();
              this.selectLink(post);
            }

            break;
          }
      }
    }
  }, {
    key: "selectLink",
    value: function selectLink(post) {
      this.props.onChange(post.url, post);
      this.setState({
        selectedSuggestion: null,
        showSuggestions: false
      });
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(post) {
      this.selectLink(post); // Move focus to the input field when a link suggestion is clicked.

      this.inputRef.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? '' : _this$props$value,
          _this$props$autoFocus = _this$props.autoFocus,
          autoFocus = _this$props$autoFocus === void 0 ? true : _this$props$autoFocus,
          instanceId = _this$props.instanceId,
          className = _this$props.className;
      var _this$state3 = this.state,
          showSuggestions = _this$state3.showSuggestions,
          posts = _this$state3.posts,
          selectedSuggestion = _this$state3.selectedSuggestion,
          loading = _this$state3.loading;
      /* eslint-disable jsx-a11y/no-autofocus */

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('editor-url-input block-editor-url-input', className)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
        autoFocus: autoFocus,
        type: "text",
        "aria-label": __('URL', 'block-options'),
        required: true,
        value: value,
        onChange: this.onChange,
        onInput: stopEventPropagation,
        placeholder: __('Paste URL or type to search', 'block-options'),
        onKeyDown: this.onKeyDown,
        role: "combobox",
        "aria-expanded": showSuggestions,
        "aria-autocomplete": "list",
        "aria-owns": "editor-url-input-suggestions-".concat(instanceId),
        "aria-activedescendant": selectedSuggestion !== null ? "editor-url-input-suggestion-".concat(instanceId, "-").concat(selectedSuggestion) : undefined,
        ref: this.inputRef
      }), loading && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Spinner, null), showSuggestions && !!posts.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
        position: "bottom",
        noArrow: true,
        focusOnMount: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('editor-url-input__suggestions', 'block-editor-url-input__suggestions', "".concat(className, "__suggestions")),
        id: "editor-url-input-suggestions-".concat(instanceId),
        ref: this.autocompleteRef,
        role: "listbox"
      }, posts.map(function (post, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
          key: post.id,
          role: "option",
          tabIndex: "-1",
          id: "editor-url-input-suggestion-".concat(instanceId, "-").concat(index),
          ref: _this5.bindSuggestionNode(index),
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('editor-url-input__suggestion block-editor-url-input__suggestion', {
            'is-selected': index === selectedSuggestion
          }),
          onClick: function onClick() {
            return _this5.handleOnClick(post);
          },
          "aria-selected": index === selectedSuggestion
        }, decodeEntities(post.title) || __('(no title)', 'block-options'));
      }))));
      /* eslint-enable jsx-a11y/no-autofocus */
    }
  }]);

  return URLInput;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (withSpokenMessages(withInstanceId(URLInput)));

/***/ }),

/***/ "./src/extensions/formats/link/components/utils.js":
/*!*********************************************************!*\
  !*** ./src/extensions/formats/link/components/utils.js ***!
  \*********************************************************/
/*! exports provided: isValidHref, createLinkFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidHref", function() { return isValidHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLinkFormat", function() { return createLinkFormat; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _wp$url = wp.url,
    getProtocol = _wp$url.getProtocol,
    isValidProtocol = _wp$url.isValidProtocol,
    getAuthority = _wp$url.getAuthority,
    isValidAuthority = _wp$url.isValidAuthority,
    getPath = _wp$url.getPath,
    isValidPath = _wp$url.isValidPath,
    getQueryString = _wp$url.getQueryString,
    isValidQueryString = _wp$url.isValidQueryString,
    getFragment = _wp$url.getFragment,
    isValidFragment = _wp$url.isValidFragment;
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
/**
 * Check for issues with the provided href.
 *
 * @param {string} href The href.
 *
 * @return {boolean} Is the href invalid?
 */

function isValidHref(href) {
  if (!href) {
    return false;
  }

  var trimmedHref = href.trim();

  if (!trimmedHref) {
    return false;
  } // Does the href start with something that looks like a URL protocol?


  if (/^\S+:/.test(trimmedHref)) {
    var protocol = getProtocol(trimmedHref);

    if (!isValidProtocol(protocol)) {
      return false;
    } // Add some extra checks for http(s) URIs, since these are the most common use-case.
    // This ensures URIs with an http protocol have exactly two forward slashes following the protocol.
    // eslint-disable-next-line no-useless-escape


    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(protocol, 'http') && !/^https?:\/\/[^\/\s]/i.test(trimmedHref)) {
      return false;
    }

    var authority = getAuthority(trimmedHref);

    if (!isValidAuthority(authority)) {
      return false;
    }

    var path = getPath(trimmedHref);

    if (path && !isValidPath(path)) {
      return false;
    }

    var queryString = getQueryString(trimmedHref);

    if (queryString && !isValidQueryString(queryString)) {
      return false;
    }

    var fragment = getFragment(trimmedHref);

    if (fragment && !isValidFragment(fragment)) {
      return false;
    }
  } // Validate anchor links.


  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(trimmedHref, '#') && !isValidFragment(trimmedHref)) {
    return false;
  }

  return true;
}
/**
 * Generates the format object that will be applied to the link text.
 *
 * @param {Object}  options
 * @param {string}  options.url              The href of the link.
 * @param {boolean} options.opensInNewWindow Whether this link will open in a new window.
 * @param {Object}  options.text             The text that is being hyperlinked.
 *
 * @return {Object} The final format object.
 */

function createLinkFormat(_ref) {
  var url = _ref.url,
      opensInNewWindow = _ref.opensInNewWindow,
      noFollow = _ref.noFollow,
      sponsored = _ref.sponsored,
      text = _ref.text;
  var format = {
    type: 'editorskit/link',
    attributes: {
      url: url
    }
  };
  var relAttributes = [];

  if (opensInNewWindow) {
    // translators: accessibility label for external links, where the argument is the link text
    var label = sprintf(__('%s (opens in a new tab)', 'block-options'), text);
    format.attributes.target = '_blank';
    format.attributes['aria-label'] = label;
    relAttributes.push('noreferrer noopener');
  }

  if (noFollow) {
    relAttributes.push('nofollow');
  }

  if (sponsored) {
    relAttributes.push('sponsored');
  }

  if (relAttributes.length > 0) {
    format.attributes.rel = relAttributes.join(' ');
  }

  return format;
}

/***/ }),

/***/ "./src/extensions/formats/link/index.js":
/*!**********************************************!*\
  !*** ./src/extensions/formats/link/index.js ***!
  \**********************************************/
/*! exports provided: link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/extensions/formats/link/components/edit.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$richText = wp.richText,
    applyFormat = _wp$richText.applyFormat,
    isCollapsed = _wp$richText.isCollapsed;
var decodeEntities = wp.htmlEntities.decodeEntities;
var isURL = wp.url.isURL;
/**
 * Block constants
 */

var name = 'editorskit/link';
var link = {
  name: name,
  title: __('Link', 'block-options'),
  tagName: 'a',
  className: 'ek-link',
  attributes: {
    url: 'href',
    target: 'target',
    rel: 'rel'
  },
  __unstablePasteRule: function __unstablePasteRule(value, _ref) {
    var html = _ref.html,
        plainText = _ref.plainText;

    if (isCollapsed(value)) {
      return value;
    }

    var pastedText = (html || plainText).replace(/<[^>]+>/g, '').trim(); // A URL was pasted, turn the selection into a link

    if (!isURL(pastedText)) {
      return value;
    } // Allows us to ask for this information when we get a report.


    window.console.log('Created link:\n\n', pastedText);
    return applyFormat(value, {
      type: name,
      attributes: {
        url: decodeEntities(pastedText)
      }
    });
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/extensions/formats/markdown/controls.js":
/*!*****************************************************!*\
  !*** ./src/extensions/formats/markdown/controls.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _get_active_formats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-active-formats */ "./src/extensions/formats/markdown/get-active-formats.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

var Component = wp.element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$richText = wp.richText,
    applyFormat = _wp$richText.applyFormat,
    getTextContent = _wp$richText.getTextContent,
    remove = _wp$richText.remove;
var withSpokenMessages = wp.components.withSpokenMessages;

var MarkdownControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MarkdownControl, _Component);

  function MarkdownControl() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MarkdownControl);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MarkdownControl).apply(this, arguments));
    _this.state = {
      start: null,
      end: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MarkdownControl, [{
    key: "_experimentalMarkdown",
    value: function _experimentalMarkdown(record, onChange, markdown, format) {
      var _record = record,
          start = _record.start;
      var text = getTextContent(record); // console.log( record );

      var checkMarkdown = text.slice(start - 1, start); // Quick check the text for the necessary character.

      if (checkMarkdown !== markdown) {
        return record;
      }

      var textBefore = text.slice(0, start - 1);
      var indexBefore = textBefore.lastIndexOf(markdown);

      if (indexBefore === -1) {
        return record;
      }

      var startIndex = indexBefore;
      var endIndex = start - 2;

      if (startIndex === endIndex) {
        return record;
      } //return if text contains newline(↵)


      var characterInside = text.slice(startIndex, endIndex + 1);
      var splitNewlines = characterInside.split('\n');

      if (splitNewlines.length > 1) {
        return record;
      } //return if inside code format


      var activeFormats = Object(_get_active_formats__WEBPACK_IMPORTED_MODULE_7__["getActiveFormats"])(record);

      if (activeFormats.length > 0) {
        if (activeFormats.filter(function (formatActive) {
          return formatActive.type === 'core/code';
        })) {
          return record;
        }
      }

      var characterBefore = text.slice(startIndex - 1, startIndex); //continue if character before is a letter

      if (characterBefore.length === 1 && characterBefore.match(/[A-Z|a-z]/i)) {
        return record;
      } //do not apply markdown when next character is SPACE


      var characterAfter = text.slice(startIndex + 1, startIndex + 2);

      if (characterAfter === ' ') {
        return record;
      }

      record = remove(record, startIndex, startIndex + 1);
      record = remove(record, endIndex, endIndex + 1);
      record = applyFormat(record, {
        type: format
      }, startIndex, endIndex); // onSelectionChange( startIndex, endIndex );

      wp.data.dispatch('core/block-editor').stopTyping();
      this.setState({
        start: startIndex,
        end: endIndex
      });
      record.activeFormats = [];
      onChange(_objectSpread({}, record, {
        needsSelectionUpdate: true
      }));
      return record;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var markdowns = {
        bold: {
          markdown: '*',
          format: 'core/bold'
        },
        italic: {
          markdown: '_',
          format: 'core/italic'
        },
        strikethrough: {
          markdown: '~',
          format: 'core/strikethrough'
        }
      };
      lodash_map__WEBPACK_IMPORTED_MODULE_6___default()(markdowns, function (markdown) {
        _this2._experimentalMarkdown(value, onChange, markdown.markdown, markdown.format);
      });
      return null;
    }
  }]);

  return MarkdownControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitMarkdownWriting')
  };
}), withDispatch(function (dispatch, _ref) {
  var clientId = _ref.clientId,
      instanceId = _ref.instanceId,
      _ref$identifier = _ref.identifier,
      identifier = _ref$identifier === void 0 ? instanceId : _ref$identifier;

  var _dispatch = dispatch('core/block-editor'),
      selectionChange = _dispatch.selectionChange;

  return {
    onSelectionChange: function onSelectionChange(start, end) {
      selectionChange(clientId, identifier, start, end);
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(MarkdownControl));

/***/ }),

/***/ "./src/extensions/formats/markdown/get-active-formats.js":
/*!***************************************************************!*\
  !*** ./src/extensions/formats/markdown/get-active-formats.js ***!
  \***************************************************************/
/*! exports provided: getActiveFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveFormats", function() { return getActiveFormats; });
/**
 * Gets the all format objects at the start of the selection.
 *
 * @param {Object} value Value to inspect.
 *
 * @return {?Object} Active format objects.
 */
function getActiveFormats(_ref) {
  var formats = _ref.formats,
      start = _ref.start,
      end = _ref.end,
      activeFormats = _ref.activeFormats;

  if (start === undefined) {
    return [];
  }

  if (start === end) {
    // For a collapsed caret, it is possible to override the active formats.
    if (activeFormats) {
      return activeFormats;
    }

    var formatsBefore = formats[start - 1] || [];
    var formatsAfter = formats[start] || []; // By default, select the lowest amount of formats possible (which means
    // the caret is positioned outside the format boundary). The user can
    // then use arrow keys to define `activeFormats`.

    if (formatsBefore.length < formatsAfter.length) {
      return formatsBefore;
    }

    return formatsAfter;
  }

  return formats[start] || [];
}

/***/ }),

/***/ "./src/extensions/formats/markdown/index.js":
/*!**************************************************!*\
  !*** ./src/extensions/formats/markdown/index.js ***!
  \**************************************************/
/*! exports provided: markdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdown", function() { return markdown; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/markdown/controls.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/markdown';
var markdown = {
  name: name,
  title: __('Underline', 'block-options'),
  tagName: 'p',
  className: 'editorskit-markdown',
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/nbsp/components/edit.js":
/*!********************************************************!*\
  !*** ./src/extensions/formats/nbsp/components/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./src/extensions/formats/nbsp/icons.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var _wp$richText = wp.richText,
    insert = _wp$richText.insert,
    getTextContent = _wp$richText.getTextContent;
var _wp$blockEditor = wp.blockEditor,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton;
var withSpokenMessages = wp.components.withSpokenMessages;
var UNICODE = "\xA0";

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Edit);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Edit).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;

      var onToggle = function onToggle() {
        var beforeText = getTextContent(value).slice(0, value.start);
        var previousLineSeparatorIndex = beforeText.lastIndexOf(UNICODE);
        var previousLineSeparatorFormats = value.replacements[previousLineSeparatorIndex];
        var replacements = [,]; // eslint-disable-line no-sparse-arrays

        if (previousLineSeparatorFormats) {
          replacements = [previousLineSeparatorFormats];
        }

        var valueToInsert = {
          formats: [,],
          // eslint-disable-line no-sparse-arrays
          replacements: replacements,
          text: UNICODE
        };
        var record = insert(value, valueToInsert, value.start, value.end);
        onChange(_objectSpread({}, record, {
          needsSelectionUpdate: true
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichTextShortcut, {
        type: "primaryShift",
        character: "SPACE",
        onUse: onToggle
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichTextToolbarButton, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].spacebar,
        title: __('Nonbreaking space', 'block-options'),
        onClick: onToggle
      }));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitNonbreakingSpaceFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(Edit));

/***/ }),

/***/ "./src/extensions/formats/nbsp/icons.js":
/*!**********************************************!*\
  !*** ./src/extensions/formats/nbsp/icons.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.spacebar = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M18 9v4H6V9H4v6h16V9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/formats/nbsp/index.js":
/*!**********************************************!*\
  !*** ./src/extensions/formats/nbsp/index.js ***!
  \**********************************************/
/*! exports provided: nbsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbsp", function() { return nbsp; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit */ "./src/extensions/formats/nbsp/components/edit.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/nbsp';
var nbsp = {
  name: name,
  title: __('Nonbreaking Space', 'block-options'),
  tagName: 'span',
  className: 'nbsp',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_edit__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/subscript/controls.js":
/*!******************************************************!*\
  !*** ./src/extensions/formats/subscript/controls.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/extensions/formats/subscript/icons.js");







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var _wp$richText = wp.richText,
    toggleFormat = _wp$richText.toggleFormat,
    removeFormat = _wp$richText.removeFormat;

var SubscriptControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SubscriptControl, _Component);

  function SubscriptControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SubscriptControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SubscriptControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SubscriptControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value,
          isActive = _this$props.isActive,
          onChange = _this$props.onChange;

      var onToggle = function onToggle() {
        //remove superscript format if applied
        var record = removeFormat(value, 'editorskit/superscript');
        onChange(toggleFormat(record, {
          type: name
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextShortcut, {
        type: "primary",
        character: ",",
        onUse: onToggle
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextToolbarButton, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_6__["default"].subscript,
        title: __('Subscript', 'block-options'),
        onClick: onToggle,
        isActive: isActive
      }));
    }
  }]);

  return SubscriptControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitSubscriptFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(SubscriptControl));

/***/ }),

/***/ "./src/extensions/formats/subscript/icons.js":
/*!***************************************************!*\
  !*** ./src/extensions/formats/subscript/icons.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.subscript = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  viewBox: "-85 -975 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  transform: "scale(1, -1)",
  translate: "(0, -960)",
  d: "M768 50v-50h128v-64h-192v146l128 60v50h-128v64h192v-146zM676 704h-136l-188-188-188 188h-136l256-256-256-256h136l188 188 188-188h136l-256 256z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/formats/subscript/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/formats/subscript/index.js ***!
  \***************************************************/
/*! exports provided: subscript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscript", function() { return subscript; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/subscript/controls.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/subscript';
var subscript = {
  name: name,
  title: __('Subscript', 'block-options'),
  tagName: 'sub',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/superscript/controls.js":
/*!********************************************************!*\
  !*** ./src/extensions/formats/superscript/controls.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/extensions/formats/superscript/icons.js");







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var _wp$richText = wp.richText,
    toggleFormat = _wp$richText.toggleFormat,
    removeFormat = _wp$richText.removeFormat;

var SuperscriptControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SuperscriptControl, _Component);

  function SuperscriptControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SuperscriptControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SuperscriptControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SuperscriptControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value,
          isActive = _this$props.isActive,
          onChange = _this$props.onChange;

      var onToggle = function onToggle() {
        //remove subscript format if applied
        var record = removeFormat(value, 'editorskit/subscript');
        onChange(toggleFormat(record, {
          type: name
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextShortcut, {
        type: "primary",
        character: ".",
        onUse: onToggle
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextToolbarButton, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_6__["default"].superscript,
        title: __('Superscript', 'block-options'),
        onClick: onToggle,
        isActive: isActive
      }));
    }
  }]);

  return SuperscriptControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitSuperscriptFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(SuperscriptControl));

/***/ }),

/***/ "./src/extensions/formats/superscript/icons.js":
/*!*****************************************************!*\
  !*** ./src/extensions/formats/superscript/icons.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.superscript = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  viewBox: "-85 -985 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  transform: "scale(1, -1)",
  translate: "(0, -960)",
  d: "M768 754v-50h128v-64h-192v146l128 60v50h-128v64h192v-146zM676 704h-136l-188-188-188 188h-136l256-256-256-256h136l188 188 188-188h136l-256 256z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/formats/superscript/index.js":
/*!*****************************************************!*\
  !*** ./src/extensions/formats/superscript/index.js ***!
  \*****************************************************/
/*! exports provided: superscript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superscript", function() { return superscript; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/superscript/controls.js");


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
/**
 * Block constants
 */

var name = 'editorskit/superscript';
var superscript = {
  name: name,
  title: __('Superscript', 'block-options'),
  tagName: 'sup',
  className: null,
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/text-color/components/edit.js":
/*!**************************************************************!*\
  !*** ./src/extensions/formats/text-color/components/edit.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
var BlockControls = wp.blockEditor.BlockControls;
var _wp$richText = wp.richText,
    applyFormat = _wp$richText.applyFormat,
    removeFormat = _wp$richText.removeFormat,
    getActiveFormat = _wp$richText.getActiveFormat;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    Popover = _wp$components.Popover,
    ColorPalette = _wp$components.ColorPalette;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var name = 'editorskit/color';

var title = __('Text Color', 'block-options');

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).apply(this, arguments));
    _this.toggle = _this.toggle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          value = _this$props.value,
          _onChange = _this$props.onChange;
      var activeColor;
      var colors = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["get"])(select('core/block-editor').getSettings(), ['colors'], []);
      var activeColorFormat = getActiveFormat(value, name);

      if (activeColorFormat) {
        var styleColor = activeColorFormat.attributes.style;

        if (styleColor) {
          activeColor = styleColor.replace(new RegExp("^color:\\s*"), '');
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Toolbar, {
        className: "editorskit-components-toolbar"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        className: "components-button components-icon-button components-editorskit-toolbar__control components-toolbar__control components-editorskit-color-format",
        icon: "editor-textcolor",
        "aria-haspopup": "true",
        tooltip: title,
        onClick: this.toggle
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: "components-editorskit-inline-color__indicator",
        style: {
          backgroundColor: activeColor
        }
      })), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
        position: "bottom center",
        className: "components-editorskit__inline-color-popover",
        focusOnMount: "container",
        onClickOutside: function onClickOutside(_onClickOutside) {
          if (!_onClickOutside.target.classList.contains('components-editorskit-color-format') && !document.querySelector('.components-editorskit-color-format').contains(_onClickOutside.target) && (!document.querySelector('.components-color-palette__picker') || document.querySelector('.components-color-palette__picker') && !document.querySelector('.components-color-palette__picker').contains(_onClickOutside.target))) {
            _this2.setState({
              isOpen: !isOpen
            });
          }
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(ColorPalette, {
        colors: colors,
        value: activeColor,
        onChange: function onChange(color) {
          if (color) {
            _onChange(applyFormat(value, {
              type: name,
              attributes: {
                style: "color:".concat(color)
              }
            }));
          } else {
            _onChange(removeFormat(value, name));
          }
        }
      })))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitColorsFormats')
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}))(Edit));

/***/ }),

/***/ "./src/extensions/formats/text-color/index.js":
/*!****************************************************!*\
  !*** ./src/extensions/formats/text-color/index.js ***!
  \****************************************************/
/*! exports provided: textColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return textColor; });
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/extensions/formats/text-color/components/edit.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
/**
 * Block constants
 */

var name = 'editorskit/color';
var textColor = {
  name: name,
  title: __('Text Color', 'block-options'),
  tagName: 'span',
  className: 'has-inline-color',
  attributes: {
    style: 'style'
  },
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/extensions/formats/underline/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/formats/underline/index.js ***!
  \***************************************************/
/*! exports provided: underline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underline", function() { return underline; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var toggleFormat = wp.richText.toggleFormat;
var _wp$blockEditor = wp.blockEditor,
    RichTextToolbarButton = _wp$blockEditor.RichTextToolbarButton,
    RichTextShortcut = _wp$blockEditor.RichTextShortcut;
var select = wp.data.select;
/**
 * Block constants
 */

var name = 'editorskit/underline';
var underline = {
  name: name,
  title: __('Underline', 'block-options'),
  tagName: 'span',
  className: null,
  attributes: {
    style: 'style'
  },
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;
    var isDisabled = select('core/edit-post').isFeatureActive('disableEditorsKitUnderlineFormats');
    var formatTypes = select('core/rich-text').getFormatTypes();
    var checkFormats = formatTypes.filter(function (formats) {
      return formats.name === 'wpcom/underline';
    });

    var onToggle = function onToggle() {
      onChange(toggleFormat(value, {
        type: name,
        attributes: {
          style: 'text-decoration: underline;'
        }
      }));
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextShortcut, {
      type: "primary",
      character: "u",
      onUse: onToggle
    }), !isDisabled && checkFormats.length === 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichTextToolbarButton, {
      icon: "editor-underline",
      title: __('Underline', 'block-options'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "u"
    }));
  }
};

/***/ }),

/***/ "./src/extensions/formats/uppercase/controls.js":
/*!******************************************************!*\
  !*** ./src/extensions/formats/uppercase/controls.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/extensions/formats/uppercase/icon.js");







/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var withSelect = wp.data.withSelect;
var RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;
var toggleFormat = wp.richText.toggleFormat;

var UppercaseControl =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UppercaseControl, _Component);

  function UppercaseControl() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UppercaseControl);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UppercaseControl).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UppercaseControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          isActive = _this$props.isActive,
          value = _this$props.value,
          name = _this$props.name;

      var onToggle = function onToggle() {
        onChange(toggleFormat(value, {
          type: name
        }));
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RichTextToolbarButton, {
        icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"].uppercase,
        title: __('Uppercase', 'block-options'),
        onClick: onToggle,
        isActive: isActive
      });
    }
  }]);

  return UppercaseControl;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  return {
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitUppercaseFormats'),
    formatTypes: select('core/rich-text').getFormatTypes()
  };
}), ifCondition(function (props) {
  var checkFormats = props.formatTypes.filter(function (formats) {
    return formats.name === 'coblocks/uppercase';
  });
  return !props.isDisabled && checkFormats.length === 0;
}))(UppercaseControl));

/***/ }),

/***/ "./src/extensions/formats/uppercase/icon.js":
/*!**************************************************!*\
  !*** ./src/extensions/formats/uppercase/icon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom icon
 */
var icon = {};
icon.uppercase = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "300",
  width: "300",
  version: "1",
  viewBox: "0 0 24 24"
}, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M22,7.7h-4V19h-2.1V7.7H13V6h9V7.7z"
}), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M11,7.7H8V19H5.9V7.7H2V6h9V7.7z"
}), " ");
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/extensions/formats/uppercase/index.js":
/*!***************************************************!*\
  !*** ./src/extensions/formats/uppercase/index.js ***!
  \***************************************************/
/*! exports provided: uppercase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/extensions/formats/uppercase/controls.js");


/**
 * Internal dependencies
 */
 // eslint-disable-line no-unused-vars

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment; // eslint-disable-line no-unused-vars

/**
 * Block constants
 */

var name = 'editorskit/uppercase';
var uppercase = {
  name: name,
  title: __('Uppercase', 'block-options'),
  tagName: 'span',
  className: 'uppercase',
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange,
        activeAttributes = _ref.activeAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      isActive: isActive,
      value: value,
      onChange: onChange,
      activeAttributes: activeAttributes
    }));
  }
};

/***/ }),

/***/ "./src/extensions/page-template/index.js":
/*!***********************************************!*\
  !*** ./src/extensions/page-template/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * WordPress dependencies
 */
var select = wp.data.select;

function PageTemplateBodyClass() {
  if (document.body.classList.contains('editorskit-body-class-on')) {
    var templateSelector = document.querySelector('.editor-page-attributes__template select');
    var genesisLayoutSelector = document.querySelectorAll('.genesis-layout-selector input');
    var postType = select('core/editor').getEditedPostAttribute('type');
    var prefix = postType + '-template-';

    if (templateSelector) {
      templateSelector.addEventListener('change', function () {
        var classes = document.body.className.split(' ').filter(function (c) {
          return !c.startsWith(prefix);
        });
        var selected = templateSelector.options[templateSelector.selectedIndex].value;

        if (!selected) {
          selected = 'default';
        }

        selected = selected.split('/').join('-');
        document.body.className = classes.join(' ').trim();
        document.body.classList.add(prefix + selected.split('.').join('-'));
      });
    } //add support for Genesis Framework Layouts


    if (genesisLayoutSelector) {
      (function () {
        var selectedLayout = 'default-layout';
        var prefixLayout = postType + '-layout-';

        for (var i = 0, len = genesisLayoutSelector.length; i < len; i++) {
          genesisLayoutSelector[i].addEventListener('change', function () {
            if (this.getAttribute('id') !== selectedLayout) {
              var bodyClasses = document.body.className.split(' ').filter(function (c) {
                return !c.startsWith(prefixLayout);
              });
              selectedLayout = this.getAttribute('id');
              document.body.className = bodyClasses.join(' ').trim();
              document.body.classList.add(prefixLayout + selectedLayout.split('.').join('-'));
            }
          });
        }
      })();
    }
  }
}

wp.domReady(PageTemplateBodyClass);

/***/ }),

/***/ "./src/extensions/shortcuts/select-parent-block/components/controls.js":
/*!*****************************************************************************!*\
  !*** ./src/extensions/shortcuts/select-parent-block/components/controls.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);









/**
 * WordPress dependencies
 */
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var rawShortcut = wp.keycodes.rawShortcut;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    KeyboardShortcuts = _wp$components.KeyboardShortcuts;
/**
 * Render plugin
 */

var RegisterShortcut =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(RegisterShortcut, _Component);

  function RegisterShortcut() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RegisterShortcut);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RegisterShortcut).apply(this, arguments));
    _this.triggerShortcut = _this.triggerShortcut.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RegisterShortcut, [{
    key: "triggerShortcut",
    value: function triggerShortcut(event) {
      var _this$props = this.props,
          parentBlockId = _this$props.parentBlockId,
          onSelect = _this$props.onSelect;
      onSelect(parentBlockId);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var parentBlockId = this.props.parentBlockId;

      if (!parentBlockId) {
        return false;
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(KeyboardShortcuts, {
        bindGlobal: true,
        shortcuts: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, rawShortcut.primaryShift('.'), this.triggerShortcut)
      }));
    }
  }]);

  return RegisterShortcut;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function () {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockRootClientId = _select.getBlockRootClientId;

  var selectedBlockId = getSelectedBlockClientId();

  if (!selectedBlockId) {
    return {};
  }

  var parentBlockId = getBlockRootClientId(selectedBlockId);
  return {
    selectedBlockId: selectedBlockId,
    parentBlockId: parentBlockId,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitSelectParentShortcuts')
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      selectBlock = _dispatch.selectBlock;

  return {
    onSelect: function onSelect(clientId) {
      selectBlock(clientId);
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages])(RegisterShortcut));

/***/ }),

/***/ "./src/extensions/shortcuts/select-parent-block/index.js":
/*!***************************************************************!*\
  !*** ./src/extensions/shortcuts/select-parent-block/index.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/shortcuts/select-parent-block/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-shortcuts-select-parent', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/extensions/transform/empty-paragraphs/components/controls.js":
/*!**************************************************************************!*\
  !*** ./src/extensions/transform/empty-paragraphs/components/controls.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    createRef = _wp$element.createRef;
var _focus = wp.dom.focus;
var createBlock = wp.blocks.createBlock;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    ifCondition = _wp$compose.ifCondition;
var _wp$data = wp.data,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    dispatch = _wp$data.dispatch;
var _wp$components = wp.components,
    withSpokenMessages = _wp$components.withSpokenMessages,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button;

var TransformControls =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TransformControls, _Component);

  function TransformControls() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TransformControls);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TransformControls).apply(this, arguments));
    _this.nameInput = createRef();
    _this.focus = _this.focus.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TransformControls, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.nameInput.current !== null) {
        var tabbables = _focus.tabbable.find(document.querySelector('.components-modal--editorskit-transform-empty'));

        if (tabbables.length) {
          document.activeElement.blur();
          tabbables[0].focus();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          getBlocks = _this$props.getBlocks,
          getBlockIndex = _this$props.getBlockIndex,
          createSpacer = _this$props.createSpacer,
          onToggle = _this$props.onToggle,
          isPrompted = _this$props.isPrompted;
      var isValid = getBlockIndex - 3;

      var closeModal = function closeModal() {
        onToggle(1);
      };

      if (isValid < 0) {
        return null;
      }

      var getFirst = getBlocks[isValid];
      var getSecond = getBlocks[isValid + 1];
      var getThird = getBlocks[isValid + 2];
      var getFourth = getBlocks[isValid + 3];

      if (getFirst.name !== 'core/paragraph' || getSecond.name !== 'core/paragraph' || getThird.name !== 'core/paragraph' || getFourth.name !== 'core/paragraph') {
        return null;
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(getFirst.attributes.content) || !Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(getSecond.attributes.content) || !Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(getThird.attributes.content) || !Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(getFourth.attributes.content)) {
        return null;
      }

      if (!isPrompted) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Modal, {
          title: __('Enable Shortcut', 'block-options'),
          onRequestClose: function onRequestClose() {
            return closeModal();
          },
          shouldCloseOnClickOutside: false,
          closeLabel: __('Close', 'block-options'),
          icon: null,
          className: "editorskit-modal-component components-modal--editorskit-transform-empty"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, __('Do you want to automatically transform four(4) consecutive empty paragraphs into Spacer Block?', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
          isPrimary: true,
          isLarge: true,
          onClick: function onClick() {
            onToggle(0);
            createSpacer(getFirst.clientId, getSecond.clientId, getThird.clientId, getFourth.clientId);
          },
          ref: this.nameInput
        }, __('Yes Enable', 'block-options')), "\xA0", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
          isDefault: true,
          isLarge: true,
          onClick: function onClick() {
            return closeModal();
          }
        }, __('No, Thanks', 'block-options')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("small", null, __('This prompt will only be shown once and will remember your preference. Thanks!', 'block-options')))));
      }

      createSpacer(getFirst.clientId, getSecond.clientId, getThird.clientId, getFourth.clientId);
      return null;
    }
  }]);

  return TransformControls;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function () {
  var _select = select('core/block-editor'),
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlockRootClientId = _select.getBlockRootClientId,
      getBlocks = _select.getBlocks,
      getBlockIndex = _select.getBlockIndex,
      getBlocksByClientId = _select.getBlocksByClientId;

  var selectedId = getSelectedBlockClientId();
  var selectedParent = getBlockRootClientId(selectedId);
  var getAllBlocks = getBlocks();
  var getSelectedBlockIndex = getBlockIndex(selectedId);

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(selectedParent)) {
    getAllBlocks = getBlocksByClientId(selectedParent)[0].innerBlocks;
    getSelectedBlockIndex = getBlockIndex(selectedId, selectedParent);
  }

  return {
    getBlocks: getAllBlocks,
    getBlockIndex: getSelectedBlockIndex,
    isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitTransformEmptyWriting'),
    isPrompted: select('core/edit-post').isFeatureActive('editorsKitTransformEmptyWriting')
  };
}), withDispatch(function () {
  return {
    createSpacer: function createSpacer(getFirst, getSecond, getThird, getFourth) {
      var _dispatch = dispatch('core/block-editor'),
          selectBlock = _dispatch.selectBlock,
          replaceBlock = _dispatch.replaceBlock,
          removeBlocks = _dispatch.removeBlocks;

      var createSpacer = createBlock('core/spacer', {});
      removeBlocks([getFirst, getSecond, getThird]);
      replaceBlock(getFourth, createSpacer);
      selectBlock(createSpacer.clientId);
    },
    onToggle: function onToggle(disabled) {
      dispatch('core/edit-post').toggleFeature('editorsKitTransformEmptyWriting');

      if (disabled) {
        dispatch('core/edit-post').toggleFeature('disableEditorsKitTransformEmptyWriting');
      }
    }
  };
}), ifCondition(function (props) {
  return !props.isDisabled;
}), withSpokenMessages)(TransformControls));

/***/ }),

/***/ "./src/extensions/transform/empty-paragraphs/index.js":
/*!************************************************************!*\
  !*** ./src/extensions/transform/empty-paragraphs/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/controls */ "./src/extensions/transform/empty-paragraphs/components/controls.js");
/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var registerPlugin = wp.plugins.registerPlugin;
registerPlugin('editorskit-empty-to-spacer', {
  icon: false,
  render: _components_controls__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/wordcount":
/*!********************************************!*\
  !*** external {"this":["wp","wordcount"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["wordcount"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map