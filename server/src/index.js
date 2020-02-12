const app = require('./app')

const port = process.env.PORT || 3030
app.listen(port, () => {
	if (process.env.NODE_ENV != 'production') {
		console.log(`Running on ${port}`)
	}
})
