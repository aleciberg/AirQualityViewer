const layout = require('./layout');

module.exports = (weatherData) => {
  if (weatherData !== undefined) {
    return layout(
      `
            <div>
                <h2>Search results for ${weatherData.name}</h2>
                <h2>Weather: ${weatherData.weather[0].main}</h2>
                <h2>Weather Desc: ${weatherData.weather[0].description}</h2>
                <h2>Temperature: ${weatherData.main.temp} &#8457;</h2>
                <h2>Feels Like: ${weatherData.main.feels_like} &#8457;</h2>
                <h2>Humidity: ${weatherData.main.humidity}</h2>
            </div>
        `
    );
  } else {
    return layout(
      `
            <div>
                <h2>There has been an error, please redo your search.</h2>
            </div>
        `
    );
  }
};
