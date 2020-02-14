const express = require('express')
const transactionController = require('../controllers/transactionController')
const checkAuth = require('../auth/checkAuth')
require('dotenv').config()

const router = new express.Router()

router.get(
	'/api/transactions',
	checkAuth,
	transactionController.getUserTransactions
)

module.exports = router
