const getInfosUser = require('./getInfosUser');
const axios = require('axios');

jest.mock('axios');

test('test infos user', async() => {

    const resp = {
        data: {
            success: true,
            data: {
                id: 4, shippingCredit: 1, walletBalance: 15.25
            }
        }
    };

    axios.get.mockResolvedValue(resp);
    
    expect(await getInfosUser(4)).toBe(resp.data.data);
})