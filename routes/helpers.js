const axios = require('axios');

module.exports = {
  async callCity(cityValue, stateValue) {
    const apiKey = '167ade61-45fe-46cd-8e75-49dcbd89d780';
    const url = `http://api.airvisual.com/v2/city?city=${cityValue}&state=${stateValue}&country=USA&key=${apiKey}`;
    return await axios
      .get(url)
      .then((response) => {
        return response.data.data;
      })
      .catch((err) => console.log(`Error: ${err}`));
  },

  async callState(stateValue) {
    const apiKey = '167ade61-45fe-46cd-8e75-49dcbd89d780';
    const url = `http://api.airvisual.com/v2/cities?state=${stateValue}&country=USA&key=${apiKey}`;
    // should return list of cities
    return await axios.get(url).then((response) => {
      return response.data.data;
    });
  },
};
