const layout = require('./layout');

module.exports = (error = '') => {
  return layout(`
  <div>
  <h2>${error}</h2>
  <form action="/" method="post">
  <input id="State" name="state" placeholder="Enter State" />
  <input id="State" name="state" placeholder="Enter State" />
  <button id="button" type="submit">Submit</button>
</form>
  </div>
  `);
};
