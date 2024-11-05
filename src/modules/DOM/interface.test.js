import { describe, expect } from "@jest/globals";
import Interface from "./interface.js";

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
})  