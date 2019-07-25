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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/main.bundle.css\";\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var i = 0;\r\nvar images = [\"img/events.jpg\", \"img/events-1.jpg\", \"img/events-3.jpg\"];\r\nvar time = 3000;\r\n\r\nfunction changeImg(){\r\n    document.slide.src = images[i];\r\n\r\n    if (i < images.length - 1){\r\n        i++;\r\n    } else {\r\n        i = 0;\r\n    }\r\n\r\n    setTimeout(\"changeImg()\", time);\r\n}\r\n\r\nwindow.onload = changeImg;\r\n\r\n\r\n(function() {\r\n\tscrollTo();\r\n})();\r\n\r\nfunction scrollTo() {\r\n\tconst links = document.querySelectorAll('.nav__link');\r\n\tlinks.forEach(each => (each.onclick = scrollAnchors));\r\n}\r\n\r\nfunction scrollAnchors(e, respond = null) {\r\n\tconst distanceToTop = el => Math.floor(el.getBoundingClientRect().top);\r\n\te.preventDefault();\r\n\tvar targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');\r\n\tconst targetAnchor = document.querySelector(targetID);\r\n\tif (!targetAnchor) return;\r\n\tconst originalTop = distanceToTop(targetAnchor);\r\n\twindow.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });\r\n\tconst checkIfDone = setInterval(function() {\r\n\t\tconst atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;\r\n\t\tif (distanceToTop(targetAnchor) === 0 || atBottom) {\r\n\t\t\ttargetAnchor.tabIndex = '-1';\r\n\t\t\ttargetAnchor.focus();\r\n\t\t\twindow.history.pushState('', '', targetID);\r\n\t\t\tclearInterval(checkIfDone);\r\n\t\t}\r\n\t}, 100);\r\n}\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./script.js ./sass/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./script.js */\"./script.js\");\nmodule.exports = __webpack_require__(/*! ./sass/main.scss */\"./sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./script.js_./sass/main.scss?");

/***/ })

/******/ });