const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const knex = require('../../db/knex')

passport.use(
	new FacebookStrategy(
		{
			clientID: '403004513727886',
			clientSecret: 'ccfb0b01f501090cf89cc50534a3991a',
			callbackURL: '/api/login/facebook/return',
			profileFields: ['id', 'displayName', 'email'],
		},
		async function(accessToken, refreshToken, profile, done) {
			const user = await knex('users')
			return done(null, profile)
		}
	)
)
