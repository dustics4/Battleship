class Gameboard {
    constructor(){
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
        this.missedAttacks = [];
        this.ships = [];
    }

    placeShip(ship, coordinates){
    }

    receiveAttack(x,y){

    }

    renderBoard(){

    }

    allShipsSunk(){

    }
}

export default Gameboard;