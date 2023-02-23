const express = require('express');
const db = require('./db');
const app = express();

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.json(rows);
    });
  });
  

app.listen(3000, () => {
    console.log('Server started on port 3000');
});