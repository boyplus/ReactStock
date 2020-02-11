exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('stocks')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('stocks').insert([
				{ name: 'Google', price: 100 },
				{ name: 'Facebook', price: 50 },
				{ name: 'Apple', price: 200.5 },
			])
		})
}
