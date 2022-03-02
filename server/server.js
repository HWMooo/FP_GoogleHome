const express = require('express')
const appCore = require('./app')
const port = 3000
const bodyParser = require('body-parser');
const server = express();


server.use(bodyParser.json());
appCore.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })