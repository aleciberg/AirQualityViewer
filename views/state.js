const layout = require('./layout');

module.exports = (state, cities) => {
  const renderedItems = cities.map((city) => {
    return `
        <option name="${city.city}"> ${city.city} </option> 
    `;
  });

  console.log(renderedItems.length);

  return layout(`
  <div>
  <form action="/result" method="post">
  <h2>${state}</h2>
  <input name="state" value="${state}" type="hidden"/>
  <select id="City" name="city">
  <option value="" disabled selected>Select your city</option>
  ${renderedItems}
  </select>
  <button id="button" type="submit">Submit</button>
</form>
  </div>
  `);
};
