const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect('mongodb+srv://alkmohanty:hn4y6nas@cluster0-w9wdc.mongodb.net/wefrenz?retryWrites=true&w=majority')
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};