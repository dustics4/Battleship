import { describe, expect, test } from "@jest/globals";
import Interface from "./interface.js";
import Gameboard from "../gameboard.js";

describe("Interface Test " , () => {
    test("Should create 10x10 board ", () => {
        document.body.innerHTML = `
        <div id = "player-board">
        <div class = "gameboard"> </div>
        </div>
        `;
        
        console.log(Interface);   
        Interface.createBoardElement('player');   
        
        const cells = document.querySelectorAll('.cell');
        expect(cells.length).toBe(100);
    })

    test("Should render the abord correctly based on the game state", () => {
        document.body.innerHTML = `
        <div id = "player-board">
            <div class = "gameboard"> </div>
        </div>`

        const mockGameboard = new Gameboard();

        mockGameboard.board[0][0] = "hit";
        mockGameboard.board[1][1] = "miss";
        mockGameboard.board[2][2] = {};

        Interface.createBoardElement("player");

        Interface.renderBoard(mockGameboard, "player");

        const hitCell = document.querySelector(`.cell[data-x="0"][data-y="0"]`);
        const missCell = document.querySelector(`.cell[data-x="1"][data-y="1"]`);
        const shipCell = document.querySelector(`.cell[data-x="2"][data-y="2"]`);

        expect(hitCell.classList.contains("hit")).toBe(true); // Should have "hit" class
        expect(missCell.classList.contains("miss")).toBe(true); // Should have "hit" class
        expect(shipCell.classList.contains("ship")).toBe(true); // Should have "hit" class
    })
})  