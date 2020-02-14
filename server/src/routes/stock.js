const express = require('express')
const stockController = require('../controllers/stockController')
const checkAuth = require('../auth/checkAuth')

const router = new express.Router()

router.get('/api/stocks', stockController.getAllStocks)
router.get('/api/stock', stockController.getStock)
router.post('/api/stock', stockController.addNewStock)
router.patch('/api/stock', stockController.buyStock)

module.exports = router
