const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// get selected reader info
router.get('/:id', (req, res) => {
  const readerId = req.params.id
  console.log('reader id', req.params.id);

  const queryText = 
  `SELECT * FROM reader_info WHERE "id" = $1;`
  
  pool.query(queryText, [readerId])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET route for Selected Reader', err);
      res.sendStatus(500)
    })
})

/**
 * GET route reader_info DB
 */
router.get('/', (req, res) => {

  console.log('user id',req.query);

  pool.query(`SELECT * FROM "reader_info" WHERE "parent_id"=${req.query.userId} ORDER BY "id" DESC;`)
  
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/reader', error);
    res.sendStatus(500);
  });
});

/**
 * POST route reader_info DB
 */
router.post('/', (req, res) => {
  console.log('request info', req.body)
  let newReader = req.body
  let queryText = `INSERT INTO "reader_info" ("reader_name", "goal", "reward", "parent_id")
                 VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newReader.name, newReader.goal, newReader.reward, newReader.user])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new Reader`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
