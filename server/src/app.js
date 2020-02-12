const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const stockRouter = require('./routes/stock')

const app = express()

app.use(cors())
app.use(userRouter)
app.use(stockRouter)

module.exports = app
