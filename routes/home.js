const express = require('express');
const router = express.Router();
const helpers = require('../routes/helpers');
const upload = require('multer');
const layout = require('../views/layout');
const searchResults = require('../views/searchResults');
const searchView = require('../views/search');
const state = require('../views/state');
const { response } = require('express');

router.get('/', async (req, res) => {
  res.send(searchView());
});

router.post('/', async (req, res) => {
  // api call with city and state
  // send back results page
  res.redirect(307, '/state');
});

// this will need to go
router.post('/state', async (req, res) => {
  const cities = await helpers.callState(req.body.state);
  res.send(state(req.body.state, cities));
});

// this will need to go
// put this in other post function
router.post('/result', async (req, res) => {
  const result = await helpers.callCity(req.body.city, req.body.state);
  if (result === undefined) {
    res.send('There has been an error pulling the cities.');
  }
  res.send(searchResults(result));
});

module.exports = router;

// / will post and redirect to state
// res.send state view
// state will have the state and use an API call to populate city dropdown
