exports.up = function(knex) {
	return knex.schema.createTable('users', table => {
		table
			.increments('id')
			.primary()
			.unsigned()
		table.string('email')
		table.decimal('fund', 19, 2)
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('users')
}
