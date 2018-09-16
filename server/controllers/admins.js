const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Admin = mongoose.model('Admin');
const sessionAdmin = {loggedIn: false} //session declaration


module.exports = {

  index: function(req, res) {
    Admin.find({}, function(err, results){
      if (err){
        console.log(err);
      } else {
        res.json(results);
      };
    });
  },

  register: function(req, res){
    Admin.findOne({email: req.body.email}, function(err, admin){
      if(admin) res.json({status: false, errors: 'email already in use'})
      else {
        if((req.body.password == req.body.confirm_password)){
          var admin = new Admin({
            email: req.body.email,
            password: req.body.password,
          })
          admin.jsave(function(err){
            if(err) res.json(err)
            else {
              sessionAdmin = {
                loggedIn: true,
                admin_id: admin._id,
                email: admin.email,
              }
              res.json({status: true, sessionAdmin: sessionAdmin})
            }
          })
        }
        else {
          if(admin) res.json({status: false, errors: "passwords do not match"})
        }
      }
    })
    res.json('in register')
  },

  login: function(req, res){
    Admin.findOne({email: req.body.email}, function(err, admin){
      if(err) res.json({status: false, errors: 'incorrect Email or password'})
      else {
        if(admin.valid(req.body.password)){
          sessionAdmin = {
            loggedIn: true,
            admin_id: admin._id,
            email: admin.email,
            password:
          }
          res.json({ status: true, sessionAdmin: sessionAdmin})
        }
        else{
          res.json({status:false, errors: 'incorrect email or password'})
        }
      }
    })
  },

  session_admin: function(req, res){
    return sessionAdmin
  },

  logout: function(req, res){
    sessionAdmin = {loggedIn: false}
    return sessionAdmin
  },

};
