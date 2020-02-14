const express = require('express')
const userController = require('../controllers/userController')
const checkAuth = require('../auth/checkAuth')
require('dotenv').config()

const router = new express.Router()

router.get('/api/test', (req, res) => {
	res.send('Hello World')
})

router.get('/api/user', checkAuth, userController.getUser)

router.get('/api/portfolio', checkAuth, userController.getPortfolio)

module.exports = router
