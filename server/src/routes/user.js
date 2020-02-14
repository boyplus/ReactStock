const express = require('express')
// const ensureLogin = require('connect-ensure-login')
const userController = require('../controllers/userController')
const checkAuth = require('../auth/checkAuth')
require('dotenv').config()

const router = new express.Router()

router.get('/api/test', (req, res) => {
	res.send('Hello World')
})

router.get(
	'/api/user',
	checkAuth,
	// ensureLogin.ensureLoggedIn(process.env.CLIENT_URL),
	userController.getUser
)

router.get(
	'/api/portfolio',
	// ensureLogin.ensureLoggedIn(process.env.CLIENT_URL),
	checkAuth,
	userController.getPortfolio
)

module.exports = router
