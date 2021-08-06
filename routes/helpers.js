const axios = require('axios');

module.exports = {
  async callCity(cityValue, stateValue) {
    // const apiKey = '167ade61-45fe-46cd-8e75-49dcbd89d780';
    // const url = `http://api.airvisual.com/v2/city?city=${cityValue}&state=${stateValue}&country=USA&key=${apiKey}`;
    // return await axios
    //   .get(url)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((err) => console.log(`Error: ${err}`));

    // rewrite to use new API

    const apiKey = 'accb25b0cb72696b3b65255b7830bc08';
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

function apiCall(city, state) {
  const apiKey = 'accb25b0cb72696b3b65255b7830bc08';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},USA&appid=${apiKey}`;

  axios
    .get(url, { params: { units: 'imperial' } })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

apiCall('Irvine', 'CA');
