const express = require('express');
const bodyParser = require('body-parser');
const baseRouter = require('./routes/home');
const path = require('path');
const multer = require('multer');
const app = express();
const port = 3000;
const upload = multer();
const layout = require('./views/layout');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(baseRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
