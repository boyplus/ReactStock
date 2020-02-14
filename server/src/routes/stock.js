const express = require('express')
const stockController = require('../controllers/stockController')

const router = new express.Router()

router.get('/api/stocks', stockController.getAllStocks)

router.post('/api/stocks', stockController.addNewStock)

module.exports = router
