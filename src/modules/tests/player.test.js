import Player from "../player.js";
import Gameboard from "../gameboard.js";
import { afterEach, jest } from "@jest/globals";

jest.mock("../gameboard.js");


describe("Player class test ", () => {
    let player , gameboard;
    beforeEach(() => {
        player = new Player(false);
        enemyBoard = new Gameboard;

        jest.spyOn(enemyBoard, "receiveAttack");
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    describe("Attack Enemy", () => {
        
    })

    describe("Random Attack ", () => {
        
    })
})

describe("Random Attack ", () => {
    beforeEach(() => {

    })
})