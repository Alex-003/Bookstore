const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database.');
});

module.exports = db;

/*This code creates a new SQLite database in memory and exports the database object
 for use in other parts of your application. */