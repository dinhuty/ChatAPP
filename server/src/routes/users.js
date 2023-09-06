const express = require('express')
const userController = require('../app/controller/userController')

const router = express.Router()

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/me', userController.userProfile)


module.exports = router