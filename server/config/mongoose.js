//mongoose code here
const mongoose = require('mongoose'),
  fs = require('fs'),
  path = require('path');

mongoose.connect('mongodb://localhost/portfolio');

var db = mongoose.connection;

mongoose.set('debug', true);


db.on('error', console.error.bind(console, '# Mongo DB: connection error:'))
db.once('open', () => console.log("# Mongo DB: Connected to server"));


//connect models
const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file);
  };
})
