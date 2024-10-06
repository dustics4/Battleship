import Gameboard from "./gameboard.js";

class Player {
    constructor(isComputer){
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
    }

    attackEnemy(enemyBoard , coordinates){ //human
        const [x, y] = coordinates; 
        enemyBoard.receiveAttack(x,y);
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