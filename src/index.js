import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
const player = new Player(false);
const computer = new Player(true);
Interface.renderBoard(player, player);

player.attackEnemy(computer.gameboard, [0,0])