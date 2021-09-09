const axios = require('axios');

const getPricingByWeight = async () => {
    const getData = await axios.get('https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/pricings-by-weight');

    const pricingByWeight = getData.data.data;

    return pricingByWeight;
}

module.exports = getPricingByWeight;