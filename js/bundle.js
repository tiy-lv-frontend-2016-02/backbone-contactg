/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(1);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _module2.default)();
	
	// var $ = require('jquery');
	// import Router from 'js/routes/router';

	// $(document).ready(function(){
	//   var Router = require('./routes/router');

	//   $('body').on('click', 'a', function (e){
	//     e.preventDefault();
	//     var href = $(this).attr('href').substr(1);
	//     Router.navigate(href, {trigger:true});
	//   });
	// });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doStuff;
	
	var _functions = __webpack_require__(2);
	
	var _functions2 = _interopRequireDefault(_functions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function doStuff() {
	  console.log(_functions2.default.add());
	  console.log(_functions2.default.subtract());
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.add = add;
	exports.subtract = subtract;
	function add() {
	  var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  return x + y;
	}
	
	function subtract() {
	  var x = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
	  return x - y;
	}
	
	exports.default = {
	  add: add,
	  subtract: subtract
	};

/***/ }
/******/ ]);
//# sourceMappingURL=../bundle.map