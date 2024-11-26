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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM/interface.js */ \"./src/modules/DOM/interface.js\");\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameboard.js */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ship.js */ \"./src/modules/ship.js\");\n\n\n\n\n\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBoardElement(\"player\");\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBoardElement(\"computer\");\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderShips();\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableStartButton();\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableDragAndDrop();\n\nconst player = new _modules_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](false);\nconst computer = new _modules_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](true);\n\n\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(player.gameboard, \"player\");\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(computer.gameboard, \"computer\");\n\n_modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBoardClickListener((coordinates) => {\n    const playerAttackSuccessful = player.attackEnemy(computer.gameboard, coordinates);\n    console.log(\"Player attacked at:\", coordinates)\n    \n    if (playerAttackSuccessful) {\n        _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(computer.gameboard, \"computer\");\n        _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleActiveBoard(false); // Switch to computer's turn\n\n        // Simulate computer's turn after a short delay for realism\n        setTimeout(() => {\n            computer.randomAttack(player.gameboard);\n            _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(player.gameboard, \"player\");\n            _modules_DOM_interface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleActiveBoard(true); // Switch back to player's turn\n        }, 1000);\n    } else {\n        console.log(\"Invalid move. You already attacked this position.\");\n    }\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/interface.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/interface.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard.js */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ship.js */ \"./src/modules/ship.js\");\n\n\n\n\nconst Interface = (() => {\n    let gameStarted = false;\n\n    function createBoardElement(playerType){\n        //boardContainer variable / use playertype within this\n        let boardContainer = document.querySelector(`#${playerType}-board`);        \n\n        for(let i = 0; i < 10; i++){ //first loop to iterate over x coordinates\n            for(let j = 0; j < 10; j++){ //second loop to iterate over y coordinates\n                const cell = document.createElement('div'); //creating a div\n                cell.classList.add('cell'); //adding class cell to the div\n                cell.dataset.board = `${playerType}`;\n                cell.dataset.x = i; //indexing x\n                cell.dataset.y = j; //indexing y\n                boardContainer.appendChild(cell); //appending to the container\n            }\n        }\n    }\n\n    function renderBoard(gameboard, playerType){\n        let cell = document.querySelectorAll(`[data-board=\"${playerType}\"]`);\n        let newBoard = gameboard.board;\n        let datasetX;\n        let datasetY;\n\n        cell.forEach((cell) =>{\n            datasetX =  parseInt(cell.dataset.x);\n            datasetY =  parseInt(cell.dataset.y);\n\n            newBoard[datasetX][datasetY];\n            if(newBoard[datasetX][datasetY] ===  \"miss\"){\n                cell.innerHTML = \"X\";\n                cell.classList.add(\"miss\");\n            }else if(newBoard[datasetX][datasetY] ===  \"hit\"){\n                cell.innerHTML = \"X\";\n                cell.classList.add(\"hit\");\n            }else if(newBoard[datasetX][datasetY] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){\n                cell.classList.add(\"ship\");\n            }\n                       \n        })\n      \n    }\n\n    function renderShips(){\n        const playerShipsContainer = document.querySelector('.player-ships');\n        let ships = [\n            {id: 'submarine', length: 1},\n            {id: 'patrolBoat', length: 2},\n            {id: 'destroyer', length: 3},\n            {id: 'battleship', length: 4},\n            {id: 'carrier', length: 5}\n        ]\n\n        ships.forEach(ship => {\n            const shipDiv = document.createElement('div');\n            shipDiv.classList.add('ship');\n            shipDiv.id = ship.id;\n            shipDiv.dataset.length = ship.length;\n            shipDiv.draggable = true;\n\n            for(let i = 0; i < ship.length; i++){\n                let cell = document.createElement('div');\n                cell.classList.add('cell', 'ship-cell');\n                shipDiv.appendChild(cell);\n            }\n            playerShipsContainer.appendChild(shipDiv);\n        })\n    }\n\n    function enableStartButton() {\n        const startButton = document.getElementById(\"start-game\");\n        startButton.addEventListener(\"click\", () => {\n            gameStarted = true;\n            startButton.disabled = true; // Disable the button after starting\n            console.log(\"Game started!\");\n            toggleActiveBoard(true); // Player starts the game\n        });\n    }\n    \n    function addBoardClickListener(callback) {\n       const boardContainer = document.getElementById('computer-board');\n       let cells  = boardContainer.querySelectorAll('.cell');\n       cells.forEach((cell) => {\n            cell.addEventListener('click', () =>{\n                if(!gameStarted){\n                    console.log(\"start the game first!\");\n                    return\n                }\n                const x = cell.dataset.x;\n                const y = cell.dataset.y;\n                callback([parseInt(x),parseInt(y)]);\n            })\n       })\n    }\n\n    function toggleActiveBoard(isPlayerTurn) {\n        const playerBoard = document.getElementById(\"player-board\");\n        const computerBoard = document.getElementById(\"computer-board\");\n    \n        if (isPlayerTurn) {\n            playerBoard.classList.add(\"inactive\");\n            computerBoard.classList.remove(\"inactive\");\n        } else {\n            playerBoard.classList.remove(\"inactive\");\n            computerBoard.classList.add(\"inactive\");\n        }\n    }\n\n    \n    function enableDragAndDrop(){\n        let boardContainer = document.getElementById(\"player-board\");\n\n        let ships = document.querySelectorAll('.ship');\n        ships.forEach((ship) => {\n            console.log(ship);\n            ship.addEventListener(\"dragstart\", (event) => {\n                event.target.classList.add(\"dragging\");\n            })\n            \n            ship.addEventListener(\"dragend\", (event) => {\n                event.target.classList.remove(\"dragging\");\n            })\n        })\n\n        \n    }\n    \n    function isPlacementValid(){\n\n    }\n    \n    function placeShipOnBoard(){\n    \n    }\n\n    function enableOrentationToggle(){\n    \n    }\n\n    return {createBoardElement, renderBoard, addBoardClickListener, renderShips,enableStartButton, toggleActiveBoard, enableDragAndDrop};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interface);\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/DOM/interface.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\nclass Gameboard {\n    constructor(){\n        this.board = Array(10).fill(null).map(() => Array(10).fill(null));\n        this.missedAttacks = [];\n        this.ships = [];\n    }\n\n    placeShip(ship, coordinates){\n        for(let [x,y] of coordinates){\n            if(x < 0 || x >= 10 || y < 0 || y >= 10){\n                throw new Error ('Invalid Placement: Ship is out of bounds');\n            }\n            if(this.board[x][y] !== null){\n                throw new Error ('Invalid Placement : ship overlaps with another ship');\n            }\n        }\n\n        this.ships.push(ship);\n        coordinates.forEach(([x,y]) => {\n            this.board[x][y] = ship;\n        });\n    }\n\n    receiveAttack(x,y){\n        if(x < 0 || x >= 10 || y < 0 || y >= 10){\n            throw new Error ('Invalid Placement: Attack is out of bounds');\n        }\n        if(this.board[x][y] === 'hit' || this.board[x][y] === 'miss'){\n            throw new Error ('Invalid Attack: Already attacked');\n        }       \n        \n        let target = this.board[x][y];\n        if(target){\n            target.hit();\n            this.board[x][y] = \"hit\";\n            return true;\n        }else {\n            this.board[x][y] = \"miss\";\n            this.missedAttacks.push([x, y]);\n            return false;\n        }\n    }\n\n    renderBoard(){\n\n        for(let i = 0; i < this.board.length; i++){\n            let str = \"\";\n            for(let j = 0; j < this.board.length; j++){\n                if(this.board[i][j] === null){\n                    str += \"~\" + \"|\";\n                }else if(this.board[i][j] instanceof _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\n                    str += \"S\" + \"|\";\n                }else if(this.board[i][j] === \"hit\"){\n                    str += \"X\" + \"|\";\n                }else{\n                    str += \"O\" + \"|\";\n                }\n                \n            }\n            console.log(str);\n        }\n    }\n\n    allShipsSunk(){\n        return this.ships.every(ship => ship.isSunk());\n    }\n}\nconst ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\nconst ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\nconst coordinates = [[0, 0], [0, 1], [0, 2]];\nconst coordinates2 = [[9, 0], [9, 1], [9, 2], [9,3]];\n\nconst gameboard = new Gameboard;\ngameboard.placeShip(ship, coordinates);\ngameboard.placeShip(ship2, coordinates2);\ngameboard.receiveAttack(0,0);\ngameboard.receiveAttack(0,3);\ngameboard.receiveAttack(6,3);\n\ngameboard.renderBoard()\ngameboard.missedAttacks.forEach(([x,y]) => {\n    console.log(`- Missed coordinates: (${x}, ${y})`);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nclass Player {\n    constructor(isComputer){\n        this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.isComputer = isComputer;\n        this.attackedPosition = new Set();\n    }\n\n    attackEnemy(enemyBoard , coordinates){ //human\n        try {\n            const [x, y] = coordinates; \n            const coordKey = `${x},${y}`; // Create a unique key for the position\n\n            // Check if the position has already been attacked\n            if (this.attackedPosition.has(coordKey)) {\n                console.log(\"Position already attacked. Choose another target.\");\n                return false; // Indicate the attack was not performed\n            }\n\n            enemyBoard.receiveAttack(x, y);\n            this.attackedPosition.add(coordKey); // Mark this position as attacked\n            return true; // Indicate the attack was successful\n        } catch (error) {\n            console.log(\"Error during attack: \", error.message);\n            throw error;\n        }\n        \n    }\n\n    randomAttack(enemyBoard){ //computerAtack\n        //math.random for attack on x,y\n        try{\n            let x,y, coordKey;\n\n            do{\n                x = Math.floor(Math.random() * 10);\n                y = Math.floor(Math.random() * 10);\n                coordKey = `${x},${y}`;\n            }while(this.attackedPosition.has(coordKey));\n\n            enemyBoard.receiveAttack(x,y)\n            this.attackedPosition.add(coordKey);\n        }catch(error){\n            console.log(\"Error during attack : \", error.message);\n            throw error;\n        }\n    }\n}\n\nclass isComputer extends Player{\n    constructor(){\n        super(true);\n    }\n\n    randomAttack(enemyBoard){\n        super.randomAttack(enemyBoard);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

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