const express = require('express')
// const ensureLogin = require('connect-ensure-login')
const transactionController = require('../controllers/transactionController')
const checkAuth = require('../auth/checkAuth')
require('dotenv').config()

const router = new express.Router()

router.get(
	'/api/transaction',
	// ensureLogin.ensureLoggedIn(process.env.CLIENT_URL),
	// checkAuth,
	transactionController.getUserTransactions
)

module.exports = router
