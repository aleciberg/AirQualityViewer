const express = require('express');
const router = express.Router();
const searchResults = require('../views/searchResults');
const searchView = require('../views/search');
const { callCity } = require('../routes/helpers');
const loginView = require('../views/login');
const signUpView = require('../views/signup');
const users = require('../repos/user');

router.get('/', async (req, res) => {
  res.send(searchView());
});

router.post('/', async (req, res) => {
  const results = await callCity(req.body.city, req.body.state);
  if (results === undefined) {
    res.send(
      search(
        `There was an error searching for ${req.body.city}, ${req.body.state}`
      )
    );
  }
  res.send(searchResults(results));
});

router.get('/login', async (req, res) => {
  res.send(loginView());
});

router.post('/login', async (req, res) => {
  // once repo is set up we can confirm login and use cookies
  // req.session.userId = user.id;

  // retrieve user after comparing passwords, need to add middleware

  //draft compare function
  const { username } = req.body;
  await users.verify(req.body)
  res.redirect('/');
});

router.get('/signup', async (req, res) => {
  res.send(signUpView());
});

router.post('/signup', async (req, res) => {
  console.log(req.body);
  // update repo with new user
  users.create({
    username: req.body.user,
    password: req.body.password,
  });
  // redirect to home screen with message
  res.send('received');
});

module.exports = router;
