const layout = require('./layout');

module.exports = (weatherData) => {
  return layout(
    `
            <div>
                <h2>Search results for ${weatherData.city}, ${weatherData.state}</h2>
                <h2>Air Quality: ${weatherData.current.pollution.aqius}</h2>
            </div>
        `
  );
};
