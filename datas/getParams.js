const axios = require('axios');

const getParams = async () => {
    const getData = await axios.get('https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/params');

    const params = getData.data.data;

    return params;
}

module.exports = getParams;