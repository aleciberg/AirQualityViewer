const layout = require('./layout');

module.exports = () => {
  return layout(
    ` 
        <div>
        <h1>Sign Up</h1>    
        <form action="/signup" method="post">
                <input id="user" name="user" placeholder="Username" />
                <input id="password" name="password" placeholder="Password" />
                <input id="password" name="password" placeholder="Confirm Password" />
                <button id="button" type="submit">Submit</button>
            </form>
        </div>
      `
  );
};
