const express = require('express');
const router = express.Router();
const helpers = require('../routes/helpers');
const upload = require('multer');
const layout = require('../views/layout');
const searchResults = require('../views/searchResults');
const searchView = require('../views/search');

router.get('/', async (req, res) => {
  res.send(searchView());
});

router.post('/', async (req, res) => {
  const weatherData = await helpers.callCity(req.body.city, req.body.state);
  if (weatherData !== undefined) {
    res.send(searchResults(weatherData));
  } else {
    res.send(searchView('There was an error retrieving the data.'));
  }
});

module.exports = router;
