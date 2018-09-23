var express = require('express')
var router = express.Router()
var AuthenticationController = require('../controllers/AuthenticationController')
var AuthenticationControllerPolicies = require('../policies/AuthenticationControllerPolicies')

router.post('/signup', AuthenticationControllerPolicies.signup, AuthenticationController.signup)
router.post('/login', AuthenticationController.login)

module.exports = router