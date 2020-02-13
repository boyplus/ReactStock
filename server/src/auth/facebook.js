const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

passport.use(
	new FacebookStrategy(
		{
			clientID: '403004513727886',
			clientSecret: 'ccfb0b01f501090cf89cc50534a3991a',
			callbackURL: '/api/login/facebook/return',
			profileFields: ['id', 'displayName', 'email'],
		},
		function(accessToken, refreshToken, profile, done) {
			return done(null, profile)
		}
	)
)
