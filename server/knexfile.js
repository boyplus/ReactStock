// Update with your config settings.
require('dotenv').config()

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './dev.sqlite3',
		},
	},

	test: {
		client: 'sqlite3',
		connection: {
			filename: './test.sqlite3',
		},
	},

	production: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: 'react-stock',
		},
	},
}