const getParams = require('./getParams');
const axios = require('axios');

jest.mock('axios');

test('test params', async() => {

    const resp = {
        data: {
            success: true,
            data: {
                FREE_SHIPPING_MIN_AMOUNT: 30,
                FIXED_BUYER_FEE: 0.7,
                VARIABLE_BUYER_FEE: 5
            }
        }
    };

    axios.get.mockResolvedValue(resp);
    
    expect(await getParams()).toBe(resp.data.data);
})