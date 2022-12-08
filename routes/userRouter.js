const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()

router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)





module.exports = router