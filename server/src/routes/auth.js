const express = require('express')
const passport = require('passport')
const cors = require('cors')
require('../auth/facebook')

const router = new express.Router()

router.options('*', cors())

router.get(
	'/api/auth/facebook',
	passport.authenticate('facebook', { scope: ['email'] })
)

router.get(
	'/api/auth/facebook/return',
	passport.authenticate('facebook', {
		session: true,
		failureRedirect: process.env.CLIENT_URL,
	}),
	(req, res) => {
		res.redirect(process.env.CLIENT_URL)
	}
)

router.get('/api/auth/logout', (req, res) => {
	req.logout()
	res.redirect(process.env.CLIENT_URL)
})

module.exports = router
