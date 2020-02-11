exports.up = function(knex) {
	return knex.schema.createTable('stocks_owned', table => {
		table
			.increments('id')
			.primary()
			.unsigned()
		table.integer('user_id')
		table.integer('stock_id')
		table.foreign('user_id').references('users.id')
		table.foreign('stock_id').references('stocks.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('stocks_owned')
}
