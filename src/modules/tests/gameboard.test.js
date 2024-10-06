import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe('Gameboard Class', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard;
        jest.spyOn(console, 'log').mockImplementation(() => {});
    })

    afterEach(() => {
        console.log.mockRestore();
    })

    test('should place a ship on the board' , () => {
        //test the coordinates it will be placed on
        const gameboard = new Gameboard();
        const mockShip = { length: 3, hit: jest.fn() }; // Mock ship with a length of 3
        const coordinates = [[0, 0], [0, 1], [0, 2]];   // Coordinates for a horizontal ship
        
        // Call the method
        gameboard.placeShip(mockShip, coordinates);

        // Check if the ship is placed correctly on the board
        expect(gameboard.board[0][0]).toBe(mockShip);
        expect(gameboard.board[0][1]).toBe(mockShip);
        expect(gameboard.board[0][2]).toBe(mockShip);
    })

    test('Placement shouldnt allow to touch another ship ', () => {
        const gameboard = new Gameboard;
        const mockShip1 = {length : 3 , hit: jest.fn()};
        const mockShip2 = {length : 4 , hit: jest.fn()};

        const coordinates1 = [[0, 0], [0, 1], [0, 2]];
        const coordinates2 = [[0, 0], [0, 1], [0, 2], [0,3]];

        gameboard.placeShip(mockShip1, coordinates1);

        expect(() => {
            gameboard.placeShip(mockShip2, coordinates2);
        }).toThrow('Invalid Placement : ship overlaps with another ship');
    })

    test('Attack received returns true' , ()=> {
        //how to test when attack is received
        const gameboard = new Gameboard;
        const mockShip1 = {length: 4 , hit: jest.fn()};
        const coordinates = [[0, 0], [0, 1], [0, 2]];


        gameboard.placeShip(mockShip1 , coordinates);
        const result = gameboard.receiveAttack(0,1);

        expect(result).toBe(true);
    })

    test("Attack missed to be true" , () => {
        const gameboard = new Gameboard;
        const mockShip1 = {length: 4 , hit: jest.fn()};
        const coordinates = [[0, 0], [0, 1], [0, 2]];

        gameboard.placeShip(mockShip1, coordinates);
        const result = gameboard.receiveAttack(0,3);

        expect(result).toBe(false);
    })

    test("All ships sunk to be true" , () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        const coordinates = [[0, 0], [0, 1], [0, 2]];

        gameboard.placeShip(ship, coordinates);
        gameboard.receiveAttack(0,0);
        gameboard.receiveAttack(0,1);
        gameboard.receiveAttack(0,2);

        expect(gameboard.allShipsSunk()).toBe(true);
    })

    test("No ships are sunk" , () => {
        const gameboard = new Gameboard;
        const ship = new Ship(3);
        const ship2 = new Ship(2);
        const coordinates = [[0, 0], [0, 1], [0, 2]];
        const coordinates2= [[0, 5], [0, 6]];


        gameboard.placeShip(ship, coordinates);
        gameboard.placeShip(ship2, coordinates2);
        gameboard.receiveAttack(0,0);
        gameboard.receiveAttack(0,1);

        expect(gameboard.allShipsSunk()).toBe(false);
    })

    test("should render an empty board on console as '~' ", () => {
        gameboard.renderBoard()

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("~"))
    })

    test("Should show 'S' in console when ship is placed on board ", () => {
        const ship = new Ship(3);
        const coordinates = [[0, 0], [0, 1], [0, 2]];
        gameboard.placeShip(ship, coordinates);
        gameboard.renderBoard()

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("S"))
    })


    test("Should show 'X' in console when ship is placed on board ", () => {
        const ship = new Ship(3);
        const coordinates = [[0, 0], [0, 1], [0, 2]];
        gameboard.placeShip(ship, coordinates);
        gameboard.receiveAttack(0,0);
        gameboard.renderBoard()

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("X"))
    })
})