const axios = require('axios');

const getInfosUser = async (userId) => {
    const getData = await axios.get('https://xubyxv3op5.execute-api.eu-west-1.amazonaws.com/dev/user/' + userId);

    const infos = getData.data.data;

    return infos;
}

module.exports = getInfosUser;