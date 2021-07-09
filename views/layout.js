module.exports = (content) => {
  return `
  <!DOCTYPE html>
  <html>
    <head> </head>
    <body>
      <div>
        <h1>Weather App</h1>
        <h2>Header Here</h2>
      </div>
      <div>
      <h5>Content Here</h5>
        ${content}
      </div>
      <div>
        <h2>Footer Here</h2>
      </div>
    </body>
  </html>
  `;
};
