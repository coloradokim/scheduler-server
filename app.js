const express = require('express');
const cors = require('cors');
const hobbies = require('./data/hobbies');
const app = express();

app.use(cors())

app.get('/', (req, res) => res.json(hobbies))

app.listen(process.env.PORT || 3000, () => console.log('Listening on port 3000!'))
