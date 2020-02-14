const express = require('express')
const stockController = require('../controllers/stockController')

const router = new express.Router()

router.get('/api/stocks', stockController.getAllStocks)
router.get('/api/stock', stockController.getStock)
router.post('/api/stock', stockController.addNewStock)

module.exports = router
