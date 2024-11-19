import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";
import Ship from "./modules/ship.js";

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
const player = new Player(false);
const computer = new Player(true);
const ship = new Ship(1);
player.gameboard.placeShip(ship, [[0,0]]);

computer.attackEnemy(player.gameboard, [0,0])

//console.log(player.gameboard);
//player.gameboard.renderBoard();
Interface.renderBoard(player.gameboard, "player");
