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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPageModule = function(){\n\n    const content = document.querySelector(\"#content\");\n    \n    buttonDiv.remove();\n    homeDiv.remove();\n    \n    const buttonDivMenu = document.createElement(\"div\");\n    buttonDivMenu.id = 'buttonDiv'\n    content.appendChild(buttonDivMenu)\n\n    const buttonOneMenu = document.createElement(\"button\");\n    buttonOneMenu.id = 'home'\n    buttonOneMenu.className = 'buttonBar'\n    buttonOneMenu.innerHTML = \"Home\"\n    buttonDiv.appendChild(buttonOneMenu)\n\n    const buttonTwo = document.createElement(\"button\");\n    buttonTwo.id = 'menu'\n    buttonTwo.className = 'buttonBar'\n    buttonTwo.innerHTML = \"Menu\"\n    buttonDiv.appendChild(buttonTwo)\n\n    const buttonThree = document.createElement(\"button\");\n    buttonThree.id = 'contacts'\n    buttonThree.className = 'buttonBar'\n    buttonThree.innerHTML = \"Contact\"\n    buttonDiv.appendChild(buttonThree)\n\n    // contact Box 1\n    const contactBox = document.createElement(\"div\");\n    contactBox.id=\"contactBox\";\n    content.appendChild(contactBox);\n\n    const contactItemHeaderOne = document.createElement(\"h3\");\n    contactItemHeaderOne.id=\"contactItemHeader\";\n    contactItemHeaderOne.innerHTML = \"Contact Information\"\n    contactBox.appendChild(contactItemHeaderOne);\n\n\n    const contactItemText = document.createElement(\"p\");\n    contactItemText.id=\"contactItemText\";\n    contactItemText.innerHTML = \"Actually, nevermind.\"\n    contactBox.appendChild(contactItemText);\n\n\n    \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageModule);\n\n//# sourceURL=webpack://pak/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n  const homePageModule = function(){\n    const content = document.querySelector(\"#content\");\n\n    const title = document.createElement(\"h1\");\n    title.id=\"restaurantTitle\";\n    title.innerHTML = \"Fresh Pressed Juice Co.\"\n    content.appendChild(title);\n\n    const imageBanner = document.createElement(\"img\");\n    imageBanner.id = \"imageBanner\"\n    content.appendChild(imageBanner)\n\n    const buttonDiv = document.createElement(\"div\");\n    buttonDiv.id = 'buttonDiv'\n    content.appendChild(buttonDiv)\n\n    const buttonOne = document.createElement(\"button\");\n    buttonOne.id = 'home'\n    buttonOne.className = 'buttonBar'\n    buttonOne.innerHTML = \"Home\"\n    buttonDiv.appendChild(buttonOne)\n\n    const buttonTwo = document.createElement(\"button\");\n    buttonTwo.id = 'menu'\n    buttonTwo.className = 'buttonBar'\n    buttonTwo.innerHTML = \"Menu\"\n    buttonDiv.appendChild(buttonTwo)\n\n    const buttonThree = document.createElement(\"button\");\n    buttonThree.id = 'contact'\n    buttonThree.className = 'buttonBar'\n    buttonThree.innerHTML = \"Contact\"\n    buttonDiv.appendChild(buttonThree)\n\n    const homeDiv = document.createElement(\"div\");\n    homeDiv.id = 'homeDiv'\n    content.appendChild(homeDiv)\n\n    const homeMiddleTitle = document.createElement(\"h3\");\n    homeMiddleTitle.id = 'homeMiddleTitle'\n    homeMiddleTitle.innerHTML = \"The most fresh juices and smoothies in town!\"\n    homeDiv.appendChild(homeMiddleTitle)\n\n    const homeMiddleText = document.createElement(\"p\");\n    homeMiddleText.id = 'homeMiddleText'\n    homeMiddleText.innerHTML = \"We were established in 2005 with the idea that no one would provide more robust and healthy smoothies and juices in the Coffee County Area. We work really hard with our produce and fruit vendors to ensure the ingredients we use on a daily basis are second to none! Come on out and support a local business with the best intentions around.\"\n    homeDiv.appendChild(homeMiddleText)\n\n    //Add two line breaks to space center image\n    const breakOne = document.createElement(\"br\");\n    homeDiv.appendChild(breakOne)\n    const breakTwo = document.createElement(\"br\");\n    homeDiv.appendChild(breakTwo)\n\n    // Big Middle Image\n    const imageMiddle = document.createElement(\"img\");\n    imageMiddle.id = 'imageMiddle'\n    homeDiv.appendChild(imageMiddle)\n\n}\n\nhomePageModule();\n\nconst menuButton = document.querySelector(\"#menu\")\n\nmenuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst contactButton = document.querySelector(\"#contact\")\n\ncontactButton.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n\n\n//# sourceURL=webpack://pak/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPageModule = function(){\n\n    const content = document.querySelector(\"#content\");\n    \n    buttonDiv.remove();\n    homeDiv.remove();\n    \n    const buttonDivMenu = document.createElement(\"div\");\n    buttonDivMenu.id = 'buttonDiv'\n    content.appendChild(buttonDivMenu)\n\n    const buttonOneMenu = document.createElement(\"button\");\n    buttonOneMenu.id = 'home'\n    buttonOneMenu.className = 'buttonBar'\n    buttonOneMenu.innerHTML = \"Home\"\n    buttonDiv.appendChild(buttonOneMenu)\n\n    const buttonTwo = document.createElement(\"button\");\n    buttonTwo.id = 'menu'\n    buttonTwo.className = 'buttonBar'\n    buttonTwo.innerHTML = \"Menu\"\n    buttonDiv.appendChild(buttonTwo)\n\n    const buttonThree = document.createElement(\"button\");\n    buttonThree.id = 'menu'\n    buttonThree.className = 'buttonBar'\n    buttonThree.innerHTML = \"Contact\"\n    buttonDiv.appendChild(buttonThree)\n\n    // Menu Box 1\n    const menuBox = document.createElement(\"div\");\n    menuBox.id=\"menuBox\";\n    content.appendChild(menuBox);\n\n    const menuItemHeaderOne = document.createElement(\"h3\");\n    menuItemHeaderOne.id=\"menuItemHeader\";\n    menuItemHeaderOne.innerHTML = \"Green Machine\"\n    menuBox.appendChild(menuItemHeaderOne);\n\n\n    const ingredients = document.createElement(\"span\");\n    ingredients.id=\"menuItemText\";\n    ingredients.innerHTML = \"Ingredients:\"\n    menuBox.appendChild(ingredients);\n\n    const menuItemText = document.createElement(\"p\");\n    menuItemText.id=\"menuItemText\";\n    menuItemText.innerHTML = \"Lime, Lemon, Ginger, Spinach, Kale, and Pineapple\"\n    menuBox.appendChild(menuItemText);\n\n     // Menu Box 2\n     const menuBox2 = document.createElement(\"div\");\n     menuBox2.id=\"menuBox\";\n     content.appendChild(menuBox2);\n \n     const menuItemHeaderTwo = document.createElement(\"h3\");\n     menuItemHeaderTwo.id=\"menuItemHeader\";\n     menuItemHeaderTwo.innerHTML = \"Peach Fuzzy\"\n     menuBox2.appendChild(menuItemHeaderTwo);\n \n \n     const ingredientsTwo = document.createElement(\"span\");\n     ingredientsTwo.id=\"menuItemText\";\n     ingredientsTwo.innerHTML = \"Ingredients:\"\n     menuBox2.appendChild(ingredientsTwo);\n \n     const menuItemTextTwo = document.createElement(\"p\");\n     menuItemTextTwo.id=\"menuItemText\";\n     menuItemTextTwo.innerHTML = \"Apple, Orange, Ginger, Spinach, Kale, and Pineapple\"\n     menuBox2.appendChild(menuItemTextTwo);\n\n    \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageModule);\n\n//# sourceURL=webpack://pak/./src/menu.js?");

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