import Gameboard from "./gameboard.js";

class Player {
    constructor(isComputer){
        this.gameboard = new Gameboard();
        this.isComputer = isComputer;
        this.attackedPosition = new Set();
    }

    attackEnemy(enemyBoard , coordinates){ //human
        try {
            const [x, y] = coordinates; 
            const coordKey = `${x},${y}`; // Create a unique key for the position

            // Check if the position has already been attacked
            if (this.attackedPosition.has(coordKey)) {
                console.log("Position already attacked. Choose another target.");
                return false; // Indicate the attack was not performed
            }

            enemyBoard.receiveAttack(x, y);
            this.attackedPosition.add(coordKey); // Mark this position as attacked
            return true; // Indicate the attack was successful
        } catch (error) {
            console.log("Error during attack: ", error.message);
            throw error;
        }
        
    }

    randomAttack(enemyBoard){ //computerAtack
        //math.random for attack on x,y
        try{
            let x,y, coordKey;

            do{
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
                coordKey = `${x},${y}`;
            }while(this.attackedPosition.has(coordKey));

            enemyBoard.receiveAttack(x,y)
            this.attackedPosition.add(coordKey);
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