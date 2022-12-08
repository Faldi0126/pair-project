const { Op } = require('sequelize');
const { Item, Profile, User } = require('../models/index');

class profileController {
  static profileList(req, res) {
    Profile.findAll({
      include: {
        model: User,
        include: Item
      }
    })
      .then((result) => {
        // res.render('profileList', { result })
        res.send(result)
      })
      .catch((err) => {
        res.send(err)
      });
  }


}

module.exports = profileController