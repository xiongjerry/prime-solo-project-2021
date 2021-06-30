const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route reader_info DB
 */
router.get('/', (req, res) => {
  pool.query('SELECT * FROM "reader_info" ORDER BY "id" DESC;').then((result) => {
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
