const express = require('express')
const passport = require('passport')
const knex = require('../../db/knex')
require('../auth/facebook')

const router = new express.Router()

router.get(
	'/api/login/facebook',
	passport.authenticate('facebook', { scope: ['email'] })
)

router.get(
	'/api/login/facebook/return',
	passport.authenticate('facebook', {
		session: true,
		failureRedirect: '/',
	}),
	(req, res) => {
		console.log(req.user)
		res.redirect('/api/user')
	}
)

module.exports = router
