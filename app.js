const express = require('express');
const cors = require('cors');
const filters = require('./filters');
const hobbies = require('./data/hobbies');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.json(hobbies));

app.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json(filters.findById(hobbies.data, id));
});

app.listen(process.env.PORT || 3000);
