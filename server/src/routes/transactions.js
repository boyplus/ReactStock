const express = require('express')
const ensureLogin = require('connect-ensure-login')
const transactionController = require('../controllers/transactionController')
require('dotenv').config()

const router = new express.Router()

router.get(
	'/api/transaction',
	ensureLogin.ensureLoggedIn(process.env.CLIENT_URL),
	transactionController.getUserTransactions
)

module.exports = router
