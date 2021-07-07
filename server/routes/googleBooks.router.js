const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // proxy api
  console.log('Search input', req.query)
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}`)
  .then(response => {
      console.log(response.data);
      res.send(response.data)
  }).catch( err => {
      console.log(err);
      res.sendStatus(500)
  })    
})

module.exports = router;
