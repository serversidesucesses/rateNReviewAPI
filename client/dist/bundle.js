/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/kesang/Desktop/HackReactor/FEC/Atelier/client/src/index.jsx: Unexpected token (11:2)\n\n\u001b[0m \u001b[90m  9 |\u001b[39m   \u001b[36mreturn\u001b[39m(\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 |\u001b[39m   )\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mQuestionList\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m rootElement)\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:359:12)\n    at Object.raise (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:3339:19)\n    at Object.unexpected (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:3377:16)\n    at Object.parseParenAndDistinguishExpression (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:13426:12)\n    at Object.parseExprAtom (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:12976:23)\n    at Object.parseExprAtom (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:8039:20)\n    at Object.parseExprSubscripts (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:12648:23)\n    at Object.parseUpdate (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:12627:21)\n    at Object.parseMaybeUnary (/Users/kesang/Desktop/HackReactor/FEC/Atelier/node_modules/@babel/parser/lib/index.js:12598:23)");

/***/ })

/******/ 	});
/************************************************************************/
<<<<<<< HEAD
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Components_Ratings_Reviews_ratingsreviews_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Ratings&Reviews/ratingsreviews.jsx */ "./client/src/Components/Ratings&Reviews/ratingsreviews.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_Ratings_Reviews_ratingsreviews_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {}), document.getElementById('root'));
})();

=======
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/index.jsx"]();
/******/
>>>>>>> main
/******/ })()
;
//# sourceMappingURL=bundle.js.map