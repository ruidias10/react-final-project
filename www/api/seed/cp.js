const mongoose = require('mongoose');

//init = async (options)  => {
init = (options)  => {  
  const mongodb = options.mongodb;
  const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.server}/${mongodb.database}`;
  //await connect(url);

  connect(url).then(function(response) {
    console.log("Success!", response);
  }, function(error) {
    console.error("Failed!", error);
  })

}
 
//connect = async (url)  => {
connect = (url)  => {  
  return new Promise(function (resolve, reject) {
    //await mongoose.connect(url, {
    mongoose.connect(url, {
      useNewUrlParser: true
    })
    .then(() => {
      resolve('Mongobd connected!');
    })
    .catch((err) => {
      reject(err);
    });
  });
}



otherMethod = async ()  => {
  await console.log("1");
 }
 
 module.exports = {
    init, 
    otherMethod,
 };