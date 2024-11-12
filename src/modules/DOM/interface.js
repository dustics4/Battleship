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

        if(playerType === "player"){ // checks to see if playertype is player
            playerType = new Player;
            playerType = false;
            console.log(playerType.board);
            console.log(playerType); 
        }else if (playerType === "computer"){ //checks to see if its a computer
            playerType = new Player;
            playerType = true;
        }
        /*if(playerType(false)){
            playerType = "player";
            playerType.board = board;
        }else{
            playerType = "computer"
        }
        console.log(playerType);
        console.log(Player);*/
    }

    function addBoardClickListener(board){ //When a cell is clicked, it should send the coordinates to main.js for processing (i.e., sending them to the receiveAttack() method).

    }

    return {createBoardElement, renderBoard, addBoardClickListener};
})();

export default Interface;