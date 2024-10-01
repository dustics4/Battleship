class Gameboard {
    constructor(){
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
        this.missedAttacks = [];
        this.ships = [];
    }

    placeShip(ship, coordinates){
        for(let [x,y] of coordinates){
            if(x < 0 || x >= 10 || y < 0 || y >= 10){
                throw new Error ('Invalid Placement: Ship is out of bounds');
            }
            if(this.board[x][y] !== null){
                throw new Error ('Invalid Placement : ship overlaps with another ship');
            }
        }

        this.ships.push(ship);
        coordinates.forEach(([x,y]) => {
            this.board[x][y] = ship;
        });
    }

    receiveAttack(x,y){

    }

    renderBoard(){

    }

    allShipsSunk(){

    }
}

export default Gameboard;