const getParams = require('../datas/getParams');

const getBuyerProtectionCost = async (totalPriceCart) => {
    const FIXED_BUYER_FEE = (await getParams()).FIXED_BUYER_FEE;
    const VARIABLE_BUYER_FEE = (await getParams()).VARIABLE_BUYER_FEE;

    const cost = FIXED_BUYER_FEE + totalPriceCart * VARIABLE_BUYER_FEE / 100;

    return cost;
}

module.exports = getBuyerProtectionCost;