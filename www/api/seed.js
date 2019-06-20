const Seed = require('./seed/SeedMongoose');
const { mongodb } = require('./config/.env');

const modelsPath =  __dirname + '/src/models';
const mocksPath = __dirname + '/mocks';

const options = {
    mongodb: {
      ...mongodb,
    },
    models: [
      { path: modelsPath + '/Movie.js', mock:  mocksPath + '/movies.json', name: 'Movie', clear: true },
      { path: modelsPath + '/User.js', mock:  mocksPath + '/users.json', name: 'User', clear: true }
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
