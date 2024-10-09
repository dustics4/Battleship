import { describe } from "@jest/globals";
import Interface from "./interface.js";

describe("Interface Test " , () => {
    test("Should create 10x10 board ", () => {
        document.body.innerHTML = `
        <div id = "player-board">
        <div class = "gameboard"> </div>
        </div>
        `
    })
})  