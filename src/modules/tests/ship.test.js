import Ship from "../ship.js"


describe("Ship class" , ()=> {
    test('should initialize with correct length and hits', () => {
        let ship = new Ship(4);

        expect(ship.length).toBe(4);

        expect(ship.hit).toBe(0);
    })
})