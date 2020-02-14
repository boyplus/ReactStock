const express = require('express')
const transactionController = require('../controllers/transactionController')

const router = new express.Router()

router.get('/api/transaction', transactionController.getUserTransactions)

module.exports = router
