import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";
import Ship from "./modules/ship.js";

let submarine = new Ship(1);
let patrolBoat = new Ship(2);
let destroyer = new Ship(3);
let battleship = new Ship(4);
let carrier = new Ship(5);

// to drag and drop you will need to premake the ships. In a different grid.
// You will then need to assign them to a player
// Need to think of a way to drag and drop, so that you don't need to use the console and its webbased

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
Interface.renderShips();
const player = new Player(false);
const computer = new Player(true);


computer.attackEnemy(player.gameboard, [0,0])

//console.log(player.gameboard);
//player.gameboard.renderBoard();
Interface.renderBoard(player.gameboard, "player");
