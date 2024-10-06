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
            let x = 2;
            let y = 3;
            const coordinates = [x,y];  

            player.attackEnemy(enemyBoard, coordinates);
            expect(enemyBoard.receiveAttack).toHaveBeenCalledWith(x,y);
        })
    })

    describe("Random Attack ", () => {
        
    })
})