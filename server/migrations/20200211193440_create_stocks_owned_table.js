exports.up = function(knex) {
	return knex.schema.createTable('stocks_owned', table => {
		table.increments('id').primary()
		table.string('user_id').notNullable()
		table
			.integer('stock_id')
			.notNullable()
			.unsigned()
		table.integer('quantity').notNullable()
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.foreign('user_id').references('users.id')
		table.foreign('stock_id').references('stocks.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('stocks_owned')
}
