const express = require('express')
const passport = require('passport')
require('../auth/facebook')

const router = new express.Router()

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
		console.log(req.user)
		res.redirect(process.env.CLIENT_URL)
	}
)

module.exports = router
