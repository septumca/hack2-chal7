const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAllItemsDB, getSingleItemDB } = require('./dbHandler');

const PORT = 7000;
const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/items', async function (req, res, next) {
  try {
    const items = await getAllItemsDB();
    res.json({ items: items.map(({ id }) => id) })
  } catch(err) {
    next(err);
  }
});

app.get('/items/:id', async function (req, res, next) {
  try {
    const item = await getSingleItemDB(req.params.id);
    res.json({ item })
  } catch(err) {
    next(err);
  }
});

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
});
