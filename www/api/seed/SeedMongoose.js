const mongoose = require('mongoose');
const _models = [];


// init process
init = async (options) => {
  const models = options.models;
  const mongodb = options.mongodb;
  const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.server}/${mongodb.database}`;

  try {
    await connect(url);
    await loadModels(models);
  } catch(err) {
    console.log(err);
  }
}
 
// connect do Mongodb
connect = async (url) => {
  await mongoose.connect(url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Mongobd connected!');
  })
  .catch((err) => {
    throw new Error("Could not connect to the Mongobd database:", err);
  });
}

//clean collection
clean = async (Model) => {
  return new Promise((resolve, reject) => {
    Model.deleteMany({}, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

//populate collection
populate = async (Model, data) => {
  return new Promise((resolve, reject) => {
    Model.create(data, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
  
}

//load data and Models
loadModels = async (models) => {  
  try {
    for (const model of models) {
      require(model.path);
      let Model = mongoose.model(model.name);
      let mock = require(model.mock);

      if(model.clear) {
        await clean(Model);
      }
      
      if (typeof mock === 'object') {
        for (const data of mock) {
          await populate(Model, data);
        }
      }
      _models.push(model.name);
    }
  } catch(err) {
    if (err instanceof Error && err.code === "MODULE_NOT_FOUND"){
      console.log(err.message);
    }
    else {
      console.log(err);
      throw new Error("Something wrong happened, data not imported:", err);
    }
  } 
}

//list result models
result = async () => {
  console.log("Success process completed!");
  console.log("List modules:");
  console.log(_models);
}

// public interface 
module.exports = {
  init,
  result
};