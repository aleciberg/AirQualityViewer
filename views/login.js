const layout = require('./layout');

module.exports = () => {
  return layout(
    ` 
        <div>
        <h1>Login to your Account</h1>    
        <form action="/login" method="post">
                <input id="user" name="user" placeholder="Username" />
                <input id="password" name="password" placeholder="Password" />
                <button id="button" type="submit">Submit</button>
            </form>
        </div>
      `
  );
};
