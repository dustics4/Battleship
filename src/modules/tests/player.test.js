import Player from "../player.js";
import Gameboard from "../gameboard.js";
import { afterEach, describe, expect, jest, test } from "@jest/globals";


describe("Player class test ", () => {
    let player , enemyBoard;
    beforeEach(() => {
        player = new Player(false);
        enemyBoard = new Gameboard();

        jest.spyOn(enemyBoard, "receiveAttack");
    })

    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    })

    describe("Attack Enemy", () => {
        test("Should call receive attack on the enemy board with correct coordinates ", () =>{
            let x = 2;
            let y = 3;
            const coordinates = [x,y];  

            player.attackEnemy(enemyBoard, coordinates);
            expect(enemyBoard.receiveAttack).toHaveBeenCalledWith(x,y);
            
            expect(() => {
                player.attackEnemy(enemyBoard, coordinates);
            }).toThrow("Invalid Attack: Already attacked");
        })
    })

    describe("Random Attack ", () => {

        test("Should call receive Attack with coordiantes between 0 and 9" , () => {
            jest.spyOn(Math, "random").mockImplementationOnce(0.2).mockReturnValue(0.8);

            player.randomAttack(enemyBoard);
            expect(enemyBoard.receiveAtack).toHaveBeenCalledWith(2,8);
            expect(enemyBoard.rceiveAttack).toHaveBeenCalledTimes(1);
        });

        
    })
})