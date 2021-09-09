const getShippingCost = require('./getShippingCost');

const getParams = require('../datas/getParams');
const getPricingByWeight = require('../datas/getPricingByWeight');
const getInfosUser = require('../datas/getInfosUser');

jest.mock('../datas/getParams');
jest.mock('../datas/getPricingByWeight');
jest.mock('../datas/getInfosUser');

test('getShippingCost(40, 10, 1)', async() => {

    const respParams = { 
        FREE_SHIPPING_MIN_AMOUNT: 30,
    };

    const resPrincing = [
        { fromWeight: 0, toWeight: 200, price: 0.99 },
        { fromWeight: 201, toWeight: 500, price: 1.99 },
        { fromWeight: 501, toWeight: 1000, price: 2.99 },
        { fromWeight: 1001, toWeight: 2000, price: 3.99 },
        { fromWeight: 2001, toWeight: 5000, price: 4.99 },
        { fromWeight: 5001, toWeight: 10000, price: 5.99 },
        { fromWeight: 10001, toWeight: 15000, price: 6.99 }
    ];

    const resUser = { 
        id: 1, 
        shippingCredit: 0, 
        walletBalance: 0 
    }
        
    getParams.mockResolvedValue(respParams);
    getPricingByWeight.mockResolvedValue(resPrincing);
    getInfosUser.mockResolvedValue(resUser);

    expect(await getShippingCost(40, 10, 1)).toBe(0);
});

test('getShippingCost(20, 10, 2)', async() => {

    const respParams = { 
        FREE_SHIPPING_MIN_AMOUNT: 30,
    };

    const resPrincing = [
        { fromWeight: 0, toWeight: 200, price: 0.99 },
        { fromWeight: 201, toWeight: 500, price: 1.99 },
        { fromWeight: 501, toWeight: 1000, price: 2.99 },
        { fromWeight: 1001, toWeight: 2000, price: 3.99 },
        { fromWeight: 2001, toWeight: 5000, price: 4.99 },
        { fromWeight: 5001, toWeight: 10000, price: 5.99 },
        { fromWeight: 10001, toWeight: 15000, price: 6.99 }
    ];

    const resUser = { 
        id: 2, 
        shippingCredit: 2, 
        walletBalance: 0 
    }
        
    getParams.mockResolvedValue(respParams);
    getPricingByWeight.mockResolvedValue(resPrincing);
    getInfosUser.mockResolvedValue(resUser);

    expect(await getShippingCost(20, 10, 2)).toBe(0);
});

test('getShippingCost(20, 250, 3)', async() => {

    const respParams = { 
        FREE_SHIPPING_MIN_AMOUNT: 30,
    };

    const resPrincing = [
        { fromWeight: 0, toWeight: 200, price: 0.99 },
        { fromWeight: 201, toWeight: 500, price: 1.99 },
        { fromWeight: 501, toWeight: 1000, price: 2.99 },
        { fromWeight: 1001, toWeight: 2000, price: 3.99 },
        { fromWeight: 2001, toWeight: 5000, price: 4.99 },
        { fromWeight: 5001, toWeight: 10000, price: 5.99 },
        { fromWeight: 10001, toWeight: 15000, price: 6.99 }
    ];

    const resUser = { 
        id: 3, 
        shippingCredit: 0, 
        walletBalance: 0 
    }
        
    getParams.mockResolvedValue(respParams);
    getPricingByWeight.mockResolvedValue(resPrincing);
    getInfosUser.mockResolvedValue(resUser);

    expect(await getShippingCost(20, 250, 3)).toBe(1.99);
});

