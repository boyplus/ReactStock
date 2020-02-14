const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const knex = require('../../db/knex')
require('dotenv').config()

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FB_CLIENT_ID,
			clientSecret: process.env.FB_CLIENT_SECRET,
			callbackURL: '/api/auth/facebook/return',
			profileFields: ['id', 'displayName', 'email'],
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = await knex('users')
				.select('*')
				.where('id', profile.id)
			if (user.length == 0) {
				const prop = {
					id: profile.id,
					name: profile.displayName,
					email: profile.emails[0].value,
					fund: 50000,
				}
				await knex('users').insert(prop)
				return done(null, prop)
			}
			return done(null, user[0])
		}
	)
)
