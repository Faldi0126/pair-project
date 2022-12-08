const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.get('/', profileController.profileList)





module.exports = router