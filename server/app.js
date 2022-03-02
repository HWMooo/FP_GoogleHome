const express = require('express');
const searchResults = require('./data');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/search', (request, response) => {
    const searchQuery = request.query.searchquery;


})


module.exports = {
    app
  }




