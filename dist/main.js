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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM/interface.js */ \"./src/modules/DOM/interface.js\");\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/interface.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/interface.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nconst Interface = (() => {\n    console.log(\"test\");\n    function createBoardElement(playerType){\n        \n    }\n\n    function renderBoard(board, playerType){\n\n    }\n\n    function addBoardClickListener(board){ //When a cell is clicked, it should send the coordinates to main.js for processing (i.e., sending them to the receiveAttack() method).\n\n    }\n\n    return {createBoardElement, renderBoard, addBoardClickListener};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);\n\n//# sourceURL=webpack://battleship/./src/modules/DOM/interface.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\nclass Gameboard {\n    constructor(){\n        this.board = Array(10).fill(null).map(() => Array(10).fill(null));\n        this.missedAttacks = [];\n        this.ships = [];\n    }\n\n    placeShip(ship, coordinates){\n        for(let [x,y] of coordinates){\n            if(x < 0 || x >= 10 || y < 0 || y >= 10){\n                throw new Error ('Invalid Placement: Ship is out of bounds');\n            }\n            if(this.board[x][y] !== null){\n                throw new Error ('Invalid Placement : ship overlaps with another ship');\n            }\n        }\n\n        this.ships.push(ship);\n        coordinates.forEach(([x,y]) => {\n            this.board[x][y] = ship;\n        });\n    }\n\n    receiveAttack(x,y){\n        if(x < 0 || x >= 10 || y < 0 || y >= 10){\n            throw new Error ('Invalid Placement: Attack is out of bounds');\n        }\n        if(this.board[x][y] === 'hit' || this.board[x][y] === 'miss'){\n            throw new Error ('Invalid Attack: Already attacked');\n        }       \n        \n        let target = this.board[x][y];\n        if(target){\n            target.hit();\n            this.board[x][y] = \"hit\";\n            return true;\n        }else {\n            this.board[x][y] = \"miss\";\n            this.missedAttacks.push([x, y]);\n            return false;\n        }\n    }\n\n    renderBoard(){\n\n        for(let i = 0; i < this.board.length; i++){\n            let str = \"\";\n            for(let j = 0; j < this.board.length; j++){\n                if(this.board[i][j] === null){\n                    str += \"~\" + \"|\";\n                }else if(this.board[i][j] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\n                    str += \"S\" + \"|\";\n                }else if(this.board[i][j] === \"hit\"){\n                    str += \"X\" + \"|\";\n                }else{\n                    str += \"O\" + \"|\";\n                }\n                \n            }\n            console.log(str);\n        }\n    }\n\n    allShipsSunk(){\n        return this.ships.every(ship => ship.isSunk());\n    }\n}\nconst ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\nconst ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\nconst coordinates = [[0, 0], [0, 1], [0, 2]];\nconst coordinates2 = [[9, 0], [9, 1], [9, 2], [9,3]];\n\nconst gameboard = new Gameboard;\ngameboard.placeShip(ship, coordinates);\ngameboard.placeShip(ship2, coordinates2);\ngameboard.receiveAttack(0,0);\ngameboard.receiveAttack(0,3);\ngameboard.receiveAttack(6,3);\n\ngameboard.renderBoard()\nconsole.log(\"Missed Attacks : \" , gameboard.missedAttacks);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(length){\n        this.length = length;\n        this.hits = 0;\n    }\n\n    hit(){ //function increases the number of hits on a ship\n        this.hits++;\n    }\n\n    isSunk(){ //function caclulates if the ship has been sunk , based on the length and number of times it has been hit\n        return this.length === this.hits;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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