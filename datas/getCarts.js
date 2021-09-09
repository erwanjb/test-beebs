const axios = require('axios');

const getCarts = async () => {
    const getData = await axios.get('https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/carts');

    const carts = getData.data.data;

    return carts;
}

module.exports = getCarts;