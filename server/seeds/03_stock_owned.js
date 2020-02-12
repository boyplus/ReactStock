exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('stocks_owned')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('stocks_owned').insert([
				{ user_id: 1, stock_id: 1, quantity: 10 },
				{ user_id: 1, stock_id: 2, quantity: 5 },
				{ user_id: 2, stock_id: 1, quantity: 50 },
				// { user_id: 2, stock_id: 1, quantity: 5 },
			])
		})
}
