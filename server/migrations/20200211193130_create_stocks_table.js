exports.up = function(knex) {
	return knex.schema.createTable('stocks', table => {
		table
			.increments('id')
			.primary()
			.unsigned()
		table.string('name').notNullable()
		table.decimal('price', 8, 2).notNullable()
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('stocks')
}
