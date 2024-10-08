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
            throw error;
        }
        
    }

    randomAttack(enemyBoard){ //computerAtack
        //math.random for attack on x,y
        try{
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);

            enemyBoard.receiveAttack(x,y)
        }catch(error){
            console.log("Error during attack : ", error.message);
            throw error;
        }
    }
}

class isComputer extends Player{
    constructor(){
        super(true);
    }

    randomAttack(enemyBoard){
        super.randomAttack(enemyBoard);
    }
}

export default Player;