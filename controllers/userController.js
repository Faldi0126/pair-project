const { Op } = require('sequelize');
const { Item, Profile, User } = require('../models/index');

class UserController {
  static registerForm(req, res) {
    res.render('/auth-pages/register-form')
  }

  static postRegister(req, res) {

  }
}

module.exports = UserController