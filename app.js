const express = require('express');
const hobbies = require('./data/hobbies');
const app = express();

app.get('/', (req, res) => res.json(hobbies))

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000!'))
