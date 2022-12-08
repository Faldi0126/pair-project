const express = require('express');
const router = express.Router()
const itemsRouter = require('./itemsRouter');
const profileRouter = require('./profileRouter');
const userRouter = require('./userRouter');


router.get('/', (req, res) => res.render('home'))
router.use('/items', itemsRouter)
router.use('/profiles', profileRouter)
router.use('/users', userRouter)


module.exports = router