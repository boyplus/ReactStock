exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('transactions')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('transactions').insert([
				{
					user_id: 1,
					stock_id: 1,
					price: 1000,
					quantity: 10,
					buying: true,
				},
				{
					user_id: 1,
					stock_id: 2,
					price: 250,
					quantity: 5,
					buying: true,
				},
				{
					user_id: 2,
					stock_id: 1,
					price: 5000,
					quantity: 50,
					buying: true,
				},
			])
		})
}
