import Interface from "./modules/DOM/interface.js";
import Player from "./modules/player.js";
import Gameboard from "./modules/gameboard.js";

Interface.createBoardElement("player");
Interface.createBoardElement("computer");
const playerGameboard = new Gameboard;
const computerGameboard = new Gameboard;
Interface.renderBoard(playerGameboard, "player");
console.log(playerGameboard);