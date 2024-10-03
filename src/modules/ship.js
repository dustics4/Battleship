class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
    }

    hit(){ //function increases the number of hits on a ship
        this.hits++;
    }

    isSunk(){ //function caclulates if the ship has been sunk , based on the length and number of times it has been hit
        return this.length === this.hits;
    }

}

export default Ship;