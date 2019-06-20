const mongoose = require('mongoose');

const Seed = require('./seed/SeedMongoose');
const { mongodb } = require('./config/.env');

const options = {
    mongodb: {
      user: mongodb.user,
      password: mongodb.password,
      server: mongodb.server,
      database: mongodb.database
    },
    models: [
      { path: __dirname + '/src/models/Movie.js', mock:  __dirname + '/mock/movies.json', name: 'Movie', clear: true },
      { path: __dirname + '/src/models/User.js', mock:  __dirname + '/mock/users.json', name: 'User', clear: true }
    ]
  };

(async (options) => {
  try {
    await Seed.init(options);
    Seed.result();
    process.exit();
  } catch(err) {
    console.log(err);
  }
})(options);
