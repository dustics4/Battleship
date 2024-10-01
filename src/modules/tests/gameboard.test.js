import Gameboard from "../gameboard";

describe('Gameboard Class', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard;
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
})