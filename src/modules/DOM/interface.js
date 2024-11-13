import Gameboard from "../gameboard.js"
import Player from "../player.js";

const Interface = (() => {
    console.log("test");
    function createBoardElement(playerType){
        //boardContainer variable / use playertype within this
        let boardContainer = document.querySelector(`#${playerType}-board`);
        console.log(boardContainer);

        for(let i = 0; i < 10; i++){ //first loop to iterate over x coordinates
            for(let j = 0; j < 10; j++){ //second loop to iterate over y coordinates
                const cell = document.createElement('div'); //creating a div
                cell.classList.add('cell'); //adding class cell to the div
                cell.dataset.x = i; //indexing x
                cell.dataset.y = j; //indexing y
                boardContainer.appendChild(cell); //appending to the container
            }
        }
    }

    function renderBoard(board, playerType){
        //for tomorrow, don't need if statements
        // think about rendering board only.
        const cell = document.querySelectorAll(".cell");
        let newBoard = board.board;
        for(let i = 0; i < cell.length; i++){
            console.log(cell[i]);
            if(newBoard[x][y] === "hit"){
                const hit = document.createElement("div");
                hit.classList.add("hit");
                hit.innerHTML = "hit";
                cell.appendChild(hit);
            }
        }
         //loop through whole gameboard. Apply i,j in for loop to x,y of the datasets. 
         // Then prcoeed wit the logic.
    }

    function addBoardClickListener(board){ //When a cell is clicked, it should send the coordinates to main.js for processing (i.e., sending them to the receiveAttack() method).

    }

    return {createBoardElement, renderBoard, addBoardClickListener};
})();

export default Interface;