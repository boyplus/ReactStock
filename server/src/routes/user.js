const express = require('express')
const ensureLogin = require('connect-ensure-login')
const userController = require('../controllers/userController')
require('dotenv').config()

const router = new express.Router()

router.get('/api/test', (req, res) => {
	res.send('Hello World')
})

router.get(
	'/api/user',
	ensureLogin.ensureLoggedIn(process.env.CLIENT_URL),
	userController.getUser
)
router.get('/api/portfolio', userController.getPortfolio)

module.exports = router
