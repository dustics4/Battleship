import Ship from "./ship.js";

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
            this.board[x][y] = "hit";
            return true;
        }else {
            this.board[x][y] = "miss";
            this.missedAttacks.push([x, y]);
            return false;
        }
    }

    renderBoard(){

        for(let i = 0; i < this.board.length; i++){
            //console.log("");
            for(let j = 0; j < this.board.length; j++){
                //console.log("~"); //row
                if(this.board[i][j] === null){
                    console.log("~");
                }else if(this.board[i][j] instanceof Ship){
                    console.log("S");
                }
                /*if(this.board[i][j] instanceof Ship){
                    this.board[i][j] = "S";
                }*/
                console.log("\n")
            }
        }
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}
const ship = new Ship(3);
const mockShip = ship;
const coordinates = [[0, 0], [0, 1], [0, 2]];
const gameboard = new Gameboard;
gameboard.placeShip(ship, coordinates);
gameboard.renderBoard();


export default Gameboard;