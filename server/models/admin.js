const mongoose = require('mongoose'),
      bcrypt = require('bcrypt')



var AdminSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true,}
},{timestamps:true})

AdminSchema.pre('save', function(done){
  var admin = this

  const saltRounds = 10;

  bcrypt.hash(admin.password, saltRounds, function(err, hash){
    admin.password = hash
    done()
  })
})

console.log("using ADMIN Schema");

mongoose.model('Admin', AdminSchema);
