const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Start App
const app = express();

// Resive POST Json data
app.use(express.json());

// Parse POST data - req.body
app.use(bodyParser.json());

// CORS policy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});


const { server, mongodb } = require('./config/.env');
const port = process.env.PORT || server.port;
const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.server}/${mongodb.database}`;

mongoose.connect(url, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(port);
    console.log('Mongobd connected!');
  })
  .catch(err => console.log(err));

  // load models
  require('./src/Models/Movie');
  require('./src/Models/User');
  require('./src/Models/Highlight');

  // use routes: get all req
  app.use('/', require('./src/routes'));
