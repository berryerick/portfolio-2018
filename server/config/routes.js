const mongoose = require('mongoose');
      admins = require('../controllers/admins.js')

module.exports = function (app) {
  app.get('/', function (req, res){
    admins.index(req, res)
  }),

  app.post('/register', function (req, res) {
    admins.register(req, res);
  }),
  app.post('/login', function (req, res) {
    admins.login(req, res);
  }),

  app.get('/session_admin', function (req, res) {
    admins.session_admin(req, res);
  }),

  app.get('/admin', function (req, res) {
    admins.index(req, res);
  })
}
