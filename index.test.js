const hasToPayWithBankCard = require('./index');

const getInfosUser = require('./datas/getInfosUser');
const getBuyerProtectionCost = require('./costs/getBuyerProtectionCost');
const getShippingCost = require('./costs/getShippingCost');

jest.mock('./datas/getInfosUser');
jest.mock('./costs/getBuyerProtectionCost');
jest.mock('./costs/getShippingCost');

test('test hasToPayWithBankCard({ id: 2, products: [], userId: 1 })', async() => {
    const resUser = { id: 1, shippingCredit: 0, walletBalance: 0 };
    const resBuyerProtectionCost = 0.7;
    const resShippingCost = 0.99;

    getInfosUser.mockResolvedValue(resUser);
    getShippingCost.mockResolvedValue(resShippingCost);
    getBuyerProtectionCost.mockResolvedValue(resBuyerProtectionCost);
    expect(await hasToPayWithBankCard({ id: 2, products: [], userId: 1 })).toBe(1.69);
})

test('test hasToPayWithBankCard({ id: 10, products: [], userId: 7 })', async() => {
    const resUser = { id: 7, shippingCredit: 0, walletBalance: 4 };
    const resBuyerProtectionCost = 0.7;
    const resShippingCost = 0.99;

    getInfosUser.mockResolvedValue(resUser);
    getShippingCost.mockResolvedValue(resShippingCost);
    getBuyerProtectionCost.mockResolvedValue(resBuyerProtectionCost);
    expect(await hasToPayWithBankCard({ id: 10, products: [], userId: 7 })).toBe(0);
})

test('test hasToPayWithBankCard({ id: 11, products: [{ price: 10, weight: 500 }], userId: 1 })', async() => {
    const resUser = { id: 1, shippingCredit: 0, walletBalance: 0 };
    const resBuyerProtectionCost = 1.2;
    const resShippingCost = 1.99;

    getInfosUser.mockResolvedValue(resUser);
    getShippingCost.mockResolvedValue(resShippingCost);
    getBuyerProtectionCost.mockResolvedValue(resBuyerProtectionCost);
    expect(await hasToPayWithBankCard({ id: 11, products: [{ price: 10, weight: 500 }], userId: 1 })).toBe(13.19);
})