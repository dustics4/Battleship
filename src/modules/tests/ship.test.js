import Ship from "../ship.js"


describe("Ship class" , ()=> {
    test('should initialize with correct length and hits', () => {
        let ship = new Ship(4);
        console.log(ship);

        expect(typeof ship.length).toBe('number');
        expect(typeof ship.hits).toBe('number');

        expect(ship.length).toBe(4);

        expect(ship.hits).toBe(0);
    })

    test('Should show correct hit amount ', () => {
        let ship = new Ship(4);

        ship.hit();
        expect(ship.hits).toBe(1);
    })

    test('Should show if ship is sunk', () => {
        let ship = new Ship(4);

    })

    test('Should show true if ship is sunk' , () => {
        let ship = new Ship(2);

        ship.hit()
        ship.hit()

        expect(ship.isSunk()).toBe(true);
    })

    //next we test the isshipsunk function
})