exports.up = function(knex) {
	return knex.schema.createTable('transactions', table => {
		table
			.increments('id')
			.primary()
			.unsigned()
		table.string('user_id')
		table.integer('stock_id')
		table.decimal('price', 19, 2)
		table.integer('quantity')
		table.timestamp('created_at').defaultTo(knex.fn.now())
		table.foreign('user_id').references('users.id')
		table.foreign('stock_id').references('stocks.id')
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('transactions')
}
