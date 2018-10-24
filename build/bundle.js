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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n// Export Config Variables\r\nconst port = process.env.PORT || 5000;\r\n\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, engines, scripts, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"server\",\"version\":\"1.0.0\",\"description\":\"MERN Stack Boilerplate Setup\",\"main\":\"server.js\",\"engines\":{\"node\":\"10.9.0\",\"npm\":\"6.4.1\"},\"scripts\":{\"start\":\"node server.js\",\"dev\":\"webpack ./server.js --mode=development --watch\",\"prod\":\"webpack ./server.js --mode=production\",\"back-server\":\"node-dev --notify=false ./build/bundle.js\",\"dev-server\":\"npm-run-all -p dev back-server\",\"install-all\":\"npm install && npm install --prefix=client\",\"client-server\":\"npm start --prefix=client\",\"server\":\"npm-run-all -p dev-server client-server\"},\"author\":\"Mehedi Hassan Shifat\",\"license\":\"ISC\",\"dependencies\":{\"body-parser\":\"^1.18.3\",\"colors\":\"^1.3.2\",\"cors\":\"^2.8.4\",\"dotenv\":\"^6.1.0\",\"express\":\"^4.16.4\",\"express-fileupload\":\"^1.0.0\",\"helmet\":\"^3.14.0\",\"mongoose\":\"^5.3.6\",\"morgan\":\"^1.9.1\"},\"devDependencies\":{\"node-dev\":\"^3.1.3\",\"npm-run-all\":\"^4.1.3\",\"webpack\":\"^4.19.1\",\"webpack-cli\":\"^3.1.2\",\"webpack-node-externals\":\"^1.7.2\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./package.json */ \"./package.json\", 1);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n// Import Dependencies\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Import Package.json\r\n\r\n\r\n// Import Config Variables\r\n\r\n\r\n// Initialize Express App\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n// Use Middlewares\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\r\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()(\"tiny\"));\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({ extended: true }));\r\n\r\n// Setup Routes\r\napp.get(\"/api\", (req, res) => {\r\n  res.status(200).json({\r\n    name: _package_json__WEBPACK_IMPORTED_MODULE_6__[\"name\"],\r\n    version: _package_json__WEBPACK_IMPORTED_MODULE_6__[\"version\"],\r\n    description: _package_json__WEBPACK_IMPORTED_MODULE_6__[\"description\"]\r\n  });\r\n});\r\n\r\n// Listening For Port\r\napp.listen(_config_config__WEBPACK_IMPORTED_MODULE_7__[\"port\"], () => {\r\n  console.log(\r\n    colors__WEBPACK_IMPORTED_MODULE_1___default.a.green(`==> The server is running on http://localhost:${_config_config__WEBPACK_IMPORTED_MODULE_7__[\"port\"]}`)\r\n  );\r\n});\r\n\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ })

/******/ });