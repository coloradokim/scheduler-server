const express = require('express');
const hobbies = require('./data/hobbies');
const app = express();

app.get('/', (req, res) => res.json(hobbies))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
