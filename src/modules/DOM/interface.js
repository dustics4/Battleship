import Gameboard from "../gameboard.js"
import Player from "../player.js";

const Interface = (() => {
    function createBoardElement(playerType){
        //boardContainer variable / use playertype within this
        let boardContainer = document.querySelector(`#${playerType}-board`);
        console.log(boardContainer);
        

        for(let i = 0; i < 10; i++){ //first loop to iterate over x coordinates
            for(let j = 0; j < 10; j++){ //second loop to iterate over y coordinates
                const cell = document.createElement('div'); //creating a div
                cell.classList.add('cell'); //adding class cell to the div
                cell.dataset.board = `${playerType}`;
                cell.dataset.x = i; //indexing x
                cell.dataset.y = j; //indexing y
                boardContainer.appendChild(cell); //appending to the container
            }
        }
        console.log(document.querySelectorAll('[data-board="player"]'))
    }

    function renderBoard(gameboard, playerType){
        let cell = document.querySelectorAll(`[data-board="${playerType}"]`);
        console.log(cell);
        let newBoard = gameboard.board;
        let datasetX;
        let datasetY;

        console.log(newBoard);


        cell.forEach((cell) =>{
            datasetX =  parseInt(cell.dataset.x);
            datasetY =  parseInt(cell.dataset.y);

            newBoard[datasetX][datasetY];
            if(newBoard[datasetX][datasetY] ===  "miss"){
                cell.innerHTML = "miss";
            } 
           
            console.log(newBoard[datasetX][datasetY]);
            
        })
      
    }

    function addBoardClickListener(board){ //When a cell is clicked, it should send the coordinates to main.js for processing (i.e., sending them to the receiveAttack() method).

    }

    return {createBoardElement, renderBoard, addBoardClickListener};
})();

export default Interface;