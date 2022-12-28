/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n// import contactPageModule from './contact.js';\r\n\r\n\r\n\r\n  const homePageModule = function(){\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.id=\"restaurantTitle\";\r\n    title.innerHTML = \"Fresh Pressed Juice Co.\"\r\n    content.appendChild(title);\r\n\r\n    const imageBanner = document.createElement(\"img\");\r\n    imageBanner.id = \"imageBanner\"\r\n    content.appendChild(imageBanner)\r\n\r\n    const buttonDiv = document.createElement(\"div\");\r\n    buttonDiv.id = 'buttonDiv'\r\n    content.appendChild(buttonDiv)\r\n\r\n    const buttonOne = document.createElement(\"button\");\r\n    buttonOne.id = 'home'\r\n    buttonOne.className = 'buttonBar'\r\n    buttonOne.innerHTML = \"Home\"\r\n    buttonDiv.appendChild(buttonOne)\r\n\r\n    const buttonTwo = document.createElement(\"button\");\r\n    buttonTwo.id = 'menu'\r\n    buttonTwo.className = 'buttonBar'\r\n    buttonTwo.innerHTML = \"Menu\"\r\n    buttonDiv.appendChild(buttonTwo)\r\n\r\n    const buttonThree = document.createElement(\"button\");\r\n    buttonThree.id = 'menu'\r\n    buttonThree.className = 'buttonBar'\r\n    buttonThree.innerHTML = \"Contact\"\r\n    buttonDiv.appendChild(buttonThree)\r\n\r\n    const homeDiv = document.createElement(\"div\");\r\n    homeDiv.id = 'homeDiv'\r\n    content.appendChild(homeDiv)\r\n\r\n    const homeMiddleTitle = document.createElement(\"h3\");\r\n    homeMiddleTitle.id = 'homeMiddleTitle'\r\n    homeMiddleTitle.innerHTML = \"The most fresh juices and smoothies in town!\"\r\n    homeDiv.appendChild(homeMiddleTitle)\r\n\r\n    const homeMiddleText = document.createElement(\"p\");\r\n    homeMiddleText.id = 'homeMiddleText'\r\n    homeMiddleText.innerHTML = \"We were established in 2005 with the idea that no one would provide more robust and healthy smoothies and juices in the Coffee County Area. We work really hard with our produce and fruit vendors to ensure the ingredients we use on a daily basis are second to none! Come on out and support a local business with the best intentions around.\"\r\n    homeDiv.appendChild(homeMiddleText)\r\n\r\n    //Add two line breaks to space center image\r\n    const breakOne = document.createElement(\"br\");\r\n    homeDiv.appendChild(breakOne)\r\n    const breakTwo = document.createElement(\"br\");\r\n    homeDiv.appendChild(breakTwo)\r\n\r\n    // Big Middle Image\r\n    const imageMiddle = document.createElement(\"img\");\r\n    imageMiddle.id = 'imageMiddle'\r\n    homeDiv.appendChild(imageMiddle)\r\n\r\n}\r\n\r\nhomePageModule();\r\n\r\nconst menuButton = document.querySelector(\"#menu\")\r\n\r\nmenuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://npm-install-webpack-webpack-cli---save-dev/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPageModule = function(){\r\n    \r\n    const content = document.querySelector(\"#content\");\r\n    \r\n    buttonDiv.remove();\r\n    homeDiv.remove();\r\n    \r\n    const buttonDivMenu = document.createElement(\"div\");\r\n    buttonDivMenu.id = 'buttonDiv'\r\n    content.appendChild(buttonDivMenu)\r\n\r\n    const buttonOneMenu = document.createElement(\"button\");\r\n    buttonOneMenu.id = 'home'\r\n    buttonOneMenu.className = 'buttonBar'\r\n    buttonOneMenu.innerHTML = \"Home\"\r\n    buttonDiv.appendChild(buttonOneMenu)\r\n\r\n    const buttonTwo = document.createElement(\"button\");\r\n    buttonTwo.id = 'menu'\r\n    buttonTwo.className = 'buttonBar'\r\n    buttonTwo.innerHTML = \"Menu\"\r\n    buttonDiv.appendChild(buttonTwo)\r\n\r\n    const buttonThree = document.createElement(\"button\");\r\n    buttonThree.id = 'menu'\r\n    buttonThree.className = 'buttonBar'\r\n    buttonThree.innerHTML = \"Contact\"\r\n    buttonDiv.appendChild(buttonThree)\r\n\r\n    const menuBox = document.createElement(\"div\");\r\n    menuBox.id=\"menuBox\";\r\n    menuBox.innerHTML = \"Menu Item 1\"\r\n    content.appendChild(menuBox);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageModule);\n\n//# sourceURL=webpack://npm-install-webpack-webpack-cli---save-dev/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;