import Player from "../player.js";
import Gameboard from "../gameboard.js";
import { afterEach, jest } from "@jest/globals";

jest.mock("../gameboard.js");


describe("Player class test ", () => {
    let player , enemyBoard;
    beforeEach(() => {
        player = new Player(false);
        enemyBoard = new Gameboard;

        jest.spyOn(enemyBoard, "receiveAttack");
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    describe("Attack Enemy", () => {
        test("Should call receive attack on the enemy board with correct coordinates ", () =>{
            const coordinates = [2,3];

            player.attackEnemy(enemyBoard, coordinates );
            expect(enemyBoard.receiveAttack).toHaveBeenCalledWith(coordinates);
        })
    })

    describe("Random Attack ", () => {
        
    })
})