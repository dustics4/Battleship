import Gameboard from "../gameboard.js"
import Player from "../player.js";
import Ship from "../ship.js";

const Interface = (() => {
    let gameStarted = false;
    let defaultOrientation = "horizontal";

    function createBoardElement(playerType){
        //boardContainer variable / use playertype within this
        let boardContainer = document.querySelector(`#${playerType}-board`);        

        for(let i = 0; i < 10; i++){ //first loop to iterate over x coordinates
            for(let j = 0; j < 10; j++){ //second loop to iterate over y coordinates
                const cell = document.createElement('div'); //creating a div
                cell.classList.add('cell'); //adding class cell to the div
                cell.dataset.board = `${playerType}`;
                cell.dataset.x = i; //indexing x
                cell.dataset.y = j; //indexing y
                boardContainer.appendChild(cell); //appending to the container
            }
        }
    }

    function renderBoard(gameboard, playerType){
        const cells = document.querySelectorAll(`[data-board="${playerType}"]`);
        const boardState = gameboard.board;
    
        cells.forEach((cell) => {
            const x = parseInt(cell.dataset.x, 10);
            const y = parseInt(cell.dataset.y, 10);
    
            if (boardState[x][y] instanceof Ship) {
                cell.classList.add("ship");
            } else if (boardState[x][y] === "miss") {
                cell.classList.add("miss");
                cell.innerHTML = "X";
            } else if (boardState[x][y] === "hit") {
                cell.classList.add("hit");
                cell.innerHTML = "X";
            } else {
                cell.classList.remove("ship", "miss", "hit");
                cell.innerHTML = ""; 
            }
        });
    }

    function renderShips(){
        const playerShipsContainer = document.querySelector('.player-ships');
        let ships = [
            {id: 'submarine', length: 1},
            {id: 'patrolBoat', length: 2},
            {id: 'destroyer', length: 3},
            {id: 'battleship', length: 4},
            {id: 'carrier', length: 5}
        ]

        ships.forEach(ship => {
            const shipDiv = document.createElement('div');
            shipDiv.classList.add('ship');
            shipDiv.id = ship.id;
            shipDiv.dataset.length = ship.length;
            shipDiv.draggable = true;

            for(let i = 0; i < ship.length; i++){
                let cell = document.createElement('div');
                cell.classList.add('cell', 'ship-cell');
                shipDiv.appendChild(cell);
            }

            shipDiv.addEventListener('click', () => {
                const currentOrientation = shipDiv.classList.contains('horizontal') ? 'horizontal' : 'vertical';
                const newOrientation = currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    
                const x = parseInt(shipDiv.dataset.x || 0, 10);
                const y = parseInt(shipDiv.dataset.y || 0, 10);
    
                if (isPlacementValid(x, y, shipDiv.dataset.length, newOrientation)) {
                    shipDiv.classList.remove(currentOrientation);
                    shipDiv.classList.add(newOrientation);
                } else {
                    alert('Invalid orientation change!');
                }
            });

            playerShipsContainer.appendChild(shipDiv);
        })

    }

    function enableStartButton() {
        const startButton = document.getElementById("start-game");
        startButton.addEventListener("click", () => {
            gameStarted = true;
            startButton.disabled = true; // Disable the button after starting
            console.log("Game started!");
            toggleActiveBoard(true); // Player starts the game
        });
    }
    
    function addBoardClickListener(callback) {
       const boardContainer = document.getElementById('computer-board');
       let cells  = boardContainer.querySelectorAll('.cell');
       cells.forEach((cell) => {
            cell.addEventListener('click', () =>{
                if(!gameStarted){
                    console.log("start the game first!");
                    return
                }
                const x = cell.dataset.x;
                const y = cell.dataset.y;
                callback([parseInt(x),parseInt(y)]);
            })
       })
    }

    function toggleActiveBoard(isPlayerTurn) {
        const playerBoard = document.getElementById("player-board");
        const computerBoard = document.getElementById("computer-board");
    
        if (isPlayerTurn) {
            playerBoard.classList.add("inactive");
            computerBoard.classList.remove("inactive");
        } else {
            playerBoard.classList.remove("inactive");
            computerBoard.classList.add("inactive");
        }
    }

    
    function enableDragAndDrop(gameboard){
        let boardContainer = document.getElementById("player-board");
        let cells  = boardContainer.querySelectorAll('.cell');

        let draggedShip = null;

        let ships = document.querySelectorAll('.ship');
        ships.forEach((ship) => {
            ship.addEventListener("dragstart", (event) => {
                draggedShip = event.target;
                console.log(draggedShip);
                event.target.classList.add("dragging");
            })
            
            ship.addEventListener("dragend", (event) => {
                event.target.classList.remove("dragging");
                draggedShip = null;
            })
        })


        cells.forEach((cell) => {
            cell.addEventListener("dragover", (event) => {
                event.preventDefault();
            })

            cell.addEventListener("drop", (e) => {
                e.preventDefault();

                if(!draggedShip) return;

                const x = parseInt(cell.dataset.x , 10);
                const y = parseInt(cell.dataset.y , 10);

                let shipLength = parseInt(draggedShip.dataset.length, 10);
                const orientation = "horizontal";

                if(isPlacementValid(x,y, shipLength, defaultOrientation)){
                    placeShipOnBoard(x,y,shipLength, defaultOrientation, gameboard);
                    draggedShip.remove();
                }else{
                    alert("Invalid ship placement");
                }
                
            })
        })
        
    }
    
    function isPlacementValid(x, y, shipLength, orientation ){
        let board = document.getElementById("player-board");
        for(let i = 0; i < shipLength; i++){
            let cellX = orientation === "horizontal" ? x : x + i;
            let cellY = orientation === "horizontal" ? y + i : y;
    
            if(cellX >= 10 || cellY >= 10 || cellX < 0 || cellY < 0) return false;
    
            const cell = board.querySelector(`[data-x="${cellX}"][data-y="${cellY}"]`);
            if (!cell || cell.classList.contains("ship")) return false;
    
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    let checkX = cellX + dx;
                    let checkY = cellY + dy;
                    if (checkX >= 0 && checkX < 10 && checkY >= 0 && checkY < 10) {
                        let adjacentCell = board.querySelector(`[data-x="${checkX}"][data-y="${checkY}"]`);
                        if (adjacentCell && adjacentCell.classList.contains("ship")) return false;
                    }
                }
            }
        }
        return true
    }

    function placeShipOnBoard(x, y, length, orientation = defaultOrientation, gameboard) {
        const shipCoordinates = [];
        const ship = new Ship(length);
    
        // Log the ship's starting coordinates and orientation
        console.log(`Placing ship at (${x}, ${y}) with orientation: ${orientation}`);
    
        // Add a class based on the orientation for visual representation
        let shipDiv = document.querySelector(`#${ship.id}`);
        if (orientation === "horizontal") {
            shipDiv.classList.add("horizontal");
            shipDiv.classList.remove("vertical");
        } else {
            shipDiv.classList.add("vertical");
            shipDiv.classList.remove("horizontal");
        }
    
        for (let i = 0; i < length; i++) {
            let cellX = orientation === "horizontal" ? x + i : x;
            let cellY = orientation === "horizontal" ? y : y + i;
    
            // Log the coordinates for debugging
            console.log(`Attempting to access cell at (${cellX}, ${cellY})`);
    
            // Update the DOM to reflect ship placement
            const cell = document.querySelector(`[data-x="${cellX}"][data-y="${cellY}"]`);
    
            // Check if the cell exists before adding the class
            if (cell) {
                cell.classList.add("ship");
            } else {
                console.error(`Cell with coordinates (${cellX}, ${cellY}) does not exist!`);
            }
    
            // Add the coordinates to the ship's placement
            shipCoordinates.push([cellX, cellY]);
        }
    
        try {
            gameboard.placeShip(ship, shipCoordinates);
        } catch (error) {
            console.error("Error placing ship on the gameboard:", error.message);
        }
    }
    

    function enableOrentationToggle(){
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle Orientation";
        document.getElementById("controls").appendChild(toggleButton);

        toggleButton.addEventListener("click", () => {
            defaultOrientation = defaultOrientation === "horizontal" ? "vertical" : "horizontal";
            toggleButton.textContent = `Orientation: ${defaultOrientation}`;
        });
    }

    return {createBoardElement, renderBoard, addBoardClickListener, renderShips,enableStartButton, toggleActiveBoard, enableDragAndDrop, enableOrentationToggle};
})();

export default Interface;



