import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";
import Ship from "./modules/ship.js";

const player = new Player(false);
const computer = new Player(true);

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
Interface.renderShips();
Interface.enableStartButton(player);
Interface.enableDragAndDrop(player.gameboard);

Interface.renderBoard(player.gameboard, "player");
Interface.renderBoard(computer.gameboard, "computer");

const shipsToPlace = [
    { id: "submarine", length: 1 },
    { id: "patrolBoat", length: 2 },
    { id: "destroyer", length: 3 },
    { id: "battleship", length: 4 },
    { id: "carrier", length: 5 },
];

function randomlyPlaceShips(gameboard, boardType) {
    shipsToPlace.forEach((shipData) => {
        let placed = false;

        while (!placed) {
            const x = Math.floor(Math.random() * 10); 
            const y = Math.floor(Math.random() * 10); 
            const orientation = Math.random() > 0.5 ? "horizontal" : "vertical"; 

            if (Interface.isPlacementValid(x, y, shipData.length, orientation, boardType)) {
                Interface.placeShipOnBoard(x, y, shipData.length, orientation, gameboard, boardType);
                placed = true; 
            }
        }
    });

    // Render the board after placing all ships
    Interface.renderBoard(gameboard, boardType);
}

randomlyPlaceShips(computer.gameboard, "computer")
let gameStarted;
function checkGameOver() {
    if (computer.gameboard.allShipsSunk()) {
        alert("You win! All computer ships are sunk.");
        gameStarted = false;
        return true; // Game over
    } else if (player.gameboard.allShipsSunk()) {
        alert("Game Over! The computer wins.");
        gameStarted = false;
        return true; // Game over
    }
    return false;
}

Interface.addBoardClickListener((coordinates) => {
    const playerAttackSuccessful = player.attackEnemy(computer.gameboard, coordinates);
    console.log("Player attacked at:", coordinates)
    
    if (playerAttackSuccessful) {
        Interface.renderBoard(computer.gameboard, "computer");
        Interface.toggleActiveBoard(false); // Switch to computer's turn

        // Simulate computer's turn after a short delay for realism
        setTimeout(() => {
            computer.randomAttack(player.gameboard);
            Interface.renderBoard(player.gameboard, "player");
            Interface.toggleActiveBoard(true); // Switch back to player's turn
        }, 1000);
    } else {
        console.log("Invalid move. You already attacked this position.");
    }
});
