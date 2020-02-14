const express = require('express')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const stockRouter = require('./routes/stock')
const authRouter = require('./routes/auth')
const transactionRouter = require('./routes/transactions')

const app = express()

passport.serializeUser(function(user, cb) {
	cb(null, user)
})

passport.deserializeUser(function(obj, cb) {
	cb(null, obj)
})

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
)
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
	session({
		// store: new RedisStore({ client: redisClient }),
		secret: 'foobar',
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 3600000 },
	})
)
app.use(passport.initialize())
app.use(passport.session())

app.use(userRouter)
app.use(stockRouter)
app.use(authRouter)
app.use(transactionRouter)

module.exports = app
