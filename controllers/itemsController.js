const { Op } = require('sequelize');
const { Item, Profile, User } = require('../models/index');


class ItemController {
  static animalList(req, res) {
    console.log(req.query);
    let name = req.query.name

    let option = {
      include: {
        model: User,
        include: Profile
      },
      where: {}
    }

    if (name) {
      option.where.name = {
        [Op.iLike]: `%${name}%`
      }
    }

    Item.findAll(option)
      .then((result) => {
        // res.send(result)
        res.render('animalList', { result })
      })
      .catch((err) => {
        res.send(err)
      });
  }


  static itemForm(req, res) {
    Profile.findAll()
      .then((result) => {
        res.render('itemForm', { result })
        // res.send(result)
      })
      .catch((err) => {
        res.send(err)
      });
  }

  static addItem(req, res) {
    const newData = {
      name: req.body.name,
      age: req.body.age,
      category: req.body.category,
      price: req.body.price,
      weight: req.body.weight,
      img: req.body.img,
      description: req.body.description,
      UserId: req.body.UserId
    }

    Item.create(newData)
      .then(() => {
        res.redirect('/items')
      })
      .catch((err) => {
        res.send(err)
      });
  }
}

module.exports = ItemController