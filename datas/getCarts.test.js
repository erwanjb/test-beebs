const getCarts = require('./getCarts');
const axios = require('axios');

jest.mock('axios');

test('test carts', async() => {

    const resp = {data: {
        success: true,
        data: [
            { id: 1, products: [{ price: 10, weight: 500 }], userId: 1 },
            { id: 2, products: [], userId: 1 },
            { id: 3, products: [
                { price: 10, weight: 500 },
                { price: 5, weight: 200 },
                { price: 10.2, weight: 200 },
                { price: 1.25, weight: 50 }
            ], userId: 1 },
            { id: 4, products: [
                { price: 10, weight: 500 },
                { price: 5, weight: 200 },
                { price: 15, weight: 200 },
                { price: 9.95, weight: 50 },
                { price: 5.95, weight: 150 }
            ], userId: 1 },
            { id: 5, products: [
                { price: 15, weight: 200 },
                { price: 9.95, weight: 50 },
                { price: 4.95, weight: 150 }
            ], userId: 2 },
            { id: 6, products: [
                { price: 15, weight: 200 },
                { price: 19.95, weight: 50 },
                { price: 4.95, weight: 150 }
            ], userId: 2 },
            { id: 8, products: [
                { price: 15, weight: 200 },
                { price: 9.95, weight: 50 },
                { price: 4.95, weight: 150 }
            ], userId: 3 },
            { id: 9, products: [
                { price: 15, weight: 200 },
                { price: 9.95, weight: 50 },
                { price: 4.95, weight: 150 }
            ], userId: 4 },
            { id: 10, products: [
                { price: 15, weight: 200 },
                { price: 9.95, weight: 50 },
                { price: 5.95, weight: 150 }
            ], userId: 4 },
            { id: 11, products: [{ price: 5.95, weight: 150 }], userId: 4 }
        ]
    }};
    axios.get.mockResolvedValue(resp);
    
    expect(await getCarts()).toBe(resp.data.data);

})