const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Booklist GET route
router.get('/', (req, res) => {

  // console.log('user id',req.query);
  
  // pool.query(`SELECT * FROM "reader_info" WHERE "parent_id"=${req.query.userId} ORDER BY "id" DESC;`)
    
  // .then((result) => {
  //   res.send(result.rows);
  // }).catch((error) => {
  //   console.log('Error GET /api/booklist', error);
  //   res.sendStatus(500);
  // });
});
  

// Booklist POST route
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
