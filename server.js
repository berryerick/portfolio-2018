//Configure our Services
const express = require('express'),
    app = express()
    //routes

app.use(express.static(__dirname + '/src'));

require('./server/config/mongoose.js')

const routes_setter = require ('./server/config/routes.js')
routes_setter(app)

app.listen(8000, function(){
  console.log("active on port 8000")
});
