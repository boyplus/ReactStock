const app = require('./app')
// const knex = require('../db/knex')
// require('dotenv').config()

// if(process.env.NODE_ENV == 'production'){
// 	knex.migrate.latest()
// }

const port = process.env.PORT || 3030
app.listen(port, () => {
	if (process.env.NODE_ENV != 'production') {
		console.log(`Running on ${port}`)
	}
})
