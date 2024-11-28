import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";
import Ship from "./modules/ship.js";

const player = new Player(false);
const computer = new Player(true);

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
Interface.renderShips();
Interface.enableStartButton();
Interface.enableDragAndDrop(player.gameboard);




Interface.renderBoard(player.gameboard, "player");
Interface.renderBoard(computer.gameboard, "computer");

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
