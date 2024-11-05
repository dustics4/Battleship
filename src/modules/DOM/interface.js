import Gameboard from "../gameboard.js"

const Interface = (() => {
    console.log("test");
    function createBoardElement(playerType){
        //boardContainer variable / use playertype within this
        let boardContainer = document.querySelector(`#${playerType}-board`);
        console.log(boardContainer);

        boardContainer.innerHTML = '';

        //user for loop i <10 - double for loop
        //what is a cell variable
        //add a class to the cell
        // what is cell.dataset
    }

    function renderBoard(board, playerType){

    }

    function addBoardClickListener(board){ //When a cell is clicked, it should send the coordinates to main.js for processing (i.e., sending them to the receiveAttack() method).

    }

    return {createBoardElement, renderBoard, addBoardClickListener};
})();

export default Interface;