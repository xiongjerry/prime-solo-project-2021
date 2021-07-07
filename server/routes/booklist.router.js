const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


// Booklist GET route
router.get('/', rejectUnauthenticated, (req, res) => {

  console.log('req.query id',req.query.readerId);
  
  pool.query(`SELECT * FROM "books_list" WHERE "reader_id"=${req.query.readerId} ORDER BY "id" DESC;`)
    
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/booklist', error);
    res.sendStatus(500);
  });
});
  

// Booklist POST route
router.post('/', rejectUnauthenticated,(req, res) => {
  console.log('request Book info', req.body)
  let newBook = req.body
  let queryText = `INSERT INTO "books_list" ("book_title", "book_img", "author", "reader_id")
                 VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newBook.title, newBook.bookImg, newBook.author, newBook.id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new Book`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
