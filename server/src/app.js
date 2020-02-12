const express = require('express')
const userRouter = require('./routes/user')
const stockRouter = require('./routes/stock')

const app = express()

app.use(userRouter)
app.use(stockRouter)

module.exports = app
