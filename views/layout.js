module.exports = (content) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link href="/css/styles.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body style="background-color: grey">
    <div>
      <div id="toolbar">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
      <div class="container">
          <div class="row" id="headerDiv">
              <div class="col-lg-12">
                <a href="/">
                  <h1 id="mainLogo" class="card large">Weather App</h1>
                </a>
              </div>
            </div>
          <div class="row">
          <div class="card">${content}</div>
        </div>
      </div>
    </body>
  </html>
  `;
};
