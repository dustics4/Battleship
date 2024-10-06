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
            let str = "";
            for(let j = 0; j < this.board.length; j++){
                if(this.board[i][j] === null){
                    str += "~" + "|";
                }else if(this.board[i][j] instanceof Ship){
                    str += "S" + "|";
                }else if(this.board[i][j] === "hit"){
                    str += "X" + "|";
                }else{
                    str += "O" + "|";
                }
                
            }
            console.log(str);
        }
    }

    allShipsSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}
const ship = new Ship(3);
const ship2 = new Ship(4);
const coordinates = [[0, 0], [0, 1], [0, 2]];
const coordinates2 = [[9, 0], [9, 1], [9, 2], [9,3]];

const gameboard = new Gameboard;
gameboard.placeShip(ship, coordinates);
gameboard.placeShip(ship2, coordinates2);
gameboard.receiveAttack(0,0);
gameboard.receiveAttack(0,3);
gameboard.receiveAttack(6,3);

gameboard.renderBoard()
console.log(gameboard.missedAttacks);

export default Gameboard;