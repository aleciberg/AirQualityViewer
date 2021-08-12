const axios = require('axios');
require('dotenv').config();

module.exports = {
  async callCity(cityValue, stateValue) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${stateValue},USA&appid=${process.env.APIKEY}`;
    return await axios
      .get(url, { params: { units: 'imperial' } })
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
  },
};
