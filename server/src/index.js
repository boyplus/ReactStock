const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 3030
app.listen(port, () => {
	if (process.env.NODE_ENV != 'production') {
		console.log(`Running on ${port}`)
	}
})
