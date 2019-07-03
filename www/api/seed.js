const Seed = require('./seed/SeedMongoose');
const { mongodb } = require('./config/.env');

const modelsPath =  __dirname + '/src/Models';
const mocksPath = __dirname + '/mocks';

const options = {
    mongodb: {
      ...mongodb,
    },
    models: [
      { 
        name: 'Movie', 
        path: modelsPath + '/Movie.js', 
        mock: mocksPath + '/movies.json', 
        clear: true 
      },
      { 
        name: 'User', 
        path: modelsPath + '/User.js', 
        mock:  mocksPath + '/users.json', 
        clear: true, 
        dependency: [
          { "records": 3,
            "find": 'movies.viewed', 
            "data": [
              { 'name': 'movie', 'type': 'Schema.Types.ObjectId', 'ref': 'Movie' },
              { 'name': 'watchTime', 'type': 'Schema.Types.Number' }
            ]
          },
          { "records": 5,
            "find": 'movies.likes', 
            "data": [
              { 'name': 'movie', 'type': 'Schema.Types.ObjectId', 'ref': 'Movie' },
            ]
          },          
        ]
      },
      {
        name: 'Highlight', 
        path: modelsPath + '/Highlight.js',
        mock: mocksPath + '/highlights.json', 
        clear: true,
        dependency: [
          { "records": 1,
            "find": 'movie', 
            "data": [
              { 'name': 'movie', 'type': 'Schema.Types.ObjectId', 'ref': 'Movie' }
            ]
          },
        ]
      }
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
