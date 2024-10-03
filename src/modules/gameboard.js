import Ship from "./ship";

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
        //create target variable
        //if target
        //run hit function from ship
        //else
        //add the xy coordinates into the missed ships
        //return false
        let target = this.board[x][y];
        if(target){
            target.hit();
            return true;
        }else {
            this.missedAttacks.push([x, y]);
            return false;
        }
    }

    renderBoard(){

        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.board.length; j++){
                console.log("~");
                console.log(i);
                console.log(j);
            }
        }
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}

export default Gameboard;