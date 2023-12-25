const { getUsers } = require('../services/CRUDservice');

describe('CRUDservice', () => {
    describe('getUsers', () => {
        it('should return an array of users', async () => {
            // Mock any necessary dependencies or setup here

            // Call the getUsers function
            const result = await getUsers();

            // Assert the result
            expect(Array.isArray(result)).toBe(true);
        });

        // Add more test cases for different scenarios if needed
    });
});
