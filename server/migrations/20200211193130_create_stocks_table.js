exports.up = function(knex) {
	return knex.schema.createTable('stocks', table => {
		table
			.increments('id')
			.primary()
			.unsigned()
		table.string('name')
		table.decimal('price', 8, 2)
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('stocks')
}
