const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const getDb = () => {
  return new sqlite3.Database('./test.db');
}

const initalize = () => {
  const db = getDb();

  db.serialize(function() {
    db.run('DROP TABLE IF EXISTS Item');
    db.run(`CREATE TABLE Item (
      id TEXT PRIMARY KEY,
      prop1 TEXT NOT NULL,
      prop2 NUMBER DEFAULT 0
    )`);

    const stmt = db.prepare("INSERT INTO Item VALUES (?, ?, ?)");
    for (var i = 1; i < 5; i++) {
        stmt.run(uuidv4(), `prop-1-${i}`, i);
    }
    stmt.finalize();
  });

  db.close();
}

initalize();

const getAllItemsDB = () => {
  const db = getDb();

  return new Promise((resolve) => {
    db.all('SELECT id, prop1, prop2 FROM Item', function(err, rows) {
      resolve(rows);
      db.close();
    });
  });
}

const getSingleItemDB = async (itemId) => {
  const db = getDb();

  return new Promise((resolve) => {
    db.get(`SELECT id, prop1, prop2 FROM Item where id = '${itemId}'`, function(err, row) {
      resolve(row);
      db.close();
    });
  });
}

module.exports = {
  getDb,
  getAllItemsDB,
  getSingleItemDB
}

