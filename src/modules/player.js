import Gameboard from "./gameboard.js";

class Player {
    constructor(isComputer){
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
    }

    attackEnemy(enemyBoard , coordinates){ //human

        try{
            const [x, y] = coordinates; 
            enemyBoard.receiveAttack(x,y);
        }catch(error){
            console.log("Error during attack : ", error.message);

            if(error.message.includes("Invalid Placement: Attack is out of bounds")){
                console.log("Invalid attack: Please choose coordinates within the game board.");
            }else if (error.message.includes("Invalid Placement: Already attacked")) {
                console.log("Invalid attack: You've already attacked this position.");
            } else {
                console.log("An unexpected error occurred. Please try again.");
            }
        }
        
    }

    randomAttack(enemyBoard){ //computerAtack
        //math.random for attack on x,y
    }
}

class isComputer extends Player{
    constructor(){
        super(true);
    }

    randomAttack(enemyBoard){

    }
}

export default Player;