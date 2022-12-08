const express = require('express');
const router = express.Router()
const ItemController = require('../controllers/itemsController');


router.get('/', ItemController.animalList)
router.get('/add', ItemController.itemForm)
router.post('/add', ItemController.addItem)


// router.get('/:id/detail', ItemController)
// router.get('/:id/delete', ItemController)
// router.get('/:id/sold', ItemController)


module.exports = router