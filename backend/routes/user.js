const express = require('express')

//controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// the login route
router.post('/login', loginUser)


// the signup route
router.post('/signup', signupUser)

module.exports = router 