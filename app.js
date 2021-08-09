const express = require('express');
const bodyParser = require('body-parser');
const baseRouter = require('./routes/home');
const multer = require('multer');
const cookieSession = require('cookie-session');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(
  cookieSession({
    keys: ['a89076s0d87fvbmdwkrtu'],
  })
);

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(baseRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
