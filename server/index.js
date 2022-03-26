const express = require('express');
const path = require('path');
const db = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.get('/cows', (req, res) => {
  db.query((err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(result);
  })
  // res.send('Hello from the server!');
})

app.post('/cows/add', (req, res) => {
  // console.log(req.body.query)
  db.add(req.body.query, (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(result);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
