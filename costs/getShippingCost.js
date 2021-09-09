const getParams = require('../datas/getParams');
const getPricingByWeight = require('../datas/getPricingByWeight');
const getInfosUser = require('../datas/getInfosUser');


const getShippingCost = async (totalPriceCart, totalWeightCart, userId) => {
    const FREE_SHIPPING_MIN_AMOUNT = (await getParams()).FREE_SHIPPING_MIN_AMOUNT;

    const shippingCredit = (await getInfosUser(userId)).shippingCredit;

    let cost;

    if (totalPriceCart >= FREE_SHIPPING_MIN_AMOUNT) {
        cost = 0;
    } else if (shippingCredit) { // shippingCredit > 0
        cost = 0;
    } else {
        const pricingByWeight = await getPricingByWeight();
        for (const pricingBW of pricingByWeight) {
            if (totalWeightCart >= pricingBW.fromWeight && totalWeightCart <= pricingBW.toWeight) {
                cost = pricingBW.price;
                break;
            }
        }
    }

    return cost;
}

module.exports = getShippingCost;