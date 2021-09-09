const getBuyerProtectionCost = require('./getBuyerProtectionCost');
const getParams = require('../datas/getParams');

jest.mock('../datas/getParams');

test('getBuyerProtectionCost(0)', async() => {

    const resp = { 
        FIXED_BUYER_FEE: 0.7,
        VARIABLE_BUYER_FEE: 5 
    };
    getParams.mockResolvedValue(resp);

    expect(await getBuyerProtectionCost(0)).toBe(0.7);
});

test('getBuyerProtectionCost(30)', async () => {

    const resp = { 
        FIXED_BUYER_FEE: 0.7,
        VARIABLE_BUYER_FEE: 5 
    };
    getParams.mockResolvedValue(resp);

    expect(await getBuyerProtectionCost(30)).toBe(2.2);
});