const mongoose = require('mongoose');
const _models = [];

// init 
init = async (options) => {
  const models = options.models;
  const mongodb = options.mongodb;
  const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.server}/${mongodb.database}`;

  try {
    await connect(url);
    await startSeed(models);
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
clean = (Model) => {
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
populate = (Model, data) => {
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

// resolves module dependencies
dependency = async (model, mock) => {
  try {
    let result = [];
    let setter = {};
    
    // load dependency.find 
    for (const dependency of model.dependency) {
      let dependencyFind = dependency.find;
      setter[dependencyFind] = new Function("obj", "newval", "obj." + dependencyFind + " = newval;");
    }
    
    for (const mock_ of mock) {
      for (const dependency of model.dependency) {
        let dependencyRecords = dependency.records;
        let dependencyFind = dependency.find;
        let dependencyData = dependency.data;

        result = await updateDataSource(dependencyRecords, dependencyData);
        setter[dependencyFind](mock_, result);
      }
    }
  } catch(err) {
    throw (err);
  }

  return mock;    
}

//load random mongobd data
loadRandomMongobdData = async (model, find) => {  
  const findModel = _models.find(item => item === model);

  if (typeof findModel === 'undefined'){
    throw ({code: "ERROR_LOAD_DATA", message: `Model "${model}" was not loaded!`});
  }

  if (typeof find !== 'string'){
    throw ({code: "ERROR_LOAD_DATA", message: `In the "${model}" Model the "find" parameter must be a string. Objects are not yet accepted!`});
  }

  const Model = mongoose.model(model);
  const data = await Model.find({}, find);
  const random = Math.floor(Math.random() * data.length);

  return data[random][find];
}

//load random number
loadRandomNumber = (length) => {
  return Math.floor(Math.random() * length);
}

// get data to update to original source
updateDataSource = async (dependencyRecords, dependencyData) => {
  const result = [];
  try {  
    for (let i = 0; i < dependencyRecords; i++) {

      let tmp = {};
      for (const data of dependencyData) {
        switch(data.type) {
          case 'Schema.Types.ObjectId':
            updateData = await loadRandomMongobdData(data.ref, '_id');
          break;
          case 'Schema.Types.Number':
            updateData = loadRandomNumber(10000);
          break;
          default:
            updateData = 'No schema type processed';
        }   
        
        tmp[data.name] = updateData;
      }
      result.push(tmp);
    }    
  } catch(err) {
    throw (err);
  }

  return result;
}

//load data and models and clear and resolves dependency
startSeed = async (models) => {  
  try {
    for (const model of models) {
      require(model.path);
      let Model = mongoose.model(model.name);
      let mock = require(model.mock);
      
      if (model.clear) {
        await clean(Model);
      }
      
      if (model.dependency) {
        mock = await dependency(model, mock);
      }
      
      if (typeof mock === 'object') {
        for (const data of mock) {
          await populate(Model, data);
        }
        _models.push(model.name);
      }
    }

  } catch(err) {
    if (err.code === "MODULE_NOT_FOUND" || err.code === "ERROR_LOAD_DATA"){
      throw new Error(err.message);
    }
    else {
      throw new Error("Something wrong happened, data not imported:", err);
    }
  } 
}

//list result models
result = async () => {
  console.log("Modules processed:");
  console.log(_models);
}

// public interface 
module.exports = {
  init,
  result
};