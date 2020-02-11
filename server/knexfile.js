// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './dev.sqlite3',
		},
	},

	// production: {
	// 	client: 'mysql',
	// 	connection: {
	// 		host: '127.0.0.1',
	// 		user: 'your_database_user',
	// 		password: 'your_database_password',
	// 		database: 'myapp_test',
	// 	},
	// },
}