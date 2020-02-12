const express = require('express')
const userController = require('../controllers/userController')

const router = new express.Router()

router.get('/api/test', (req, res) => {
	res.send('Hello World')
})

router.get('/api/user', userController.getUser)
router.get('/api/portfolio', userController.getPortfolio)

module.exports = router
