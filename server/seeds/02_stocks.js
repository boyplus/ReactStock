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
				{ name: 'YouTube', price: 2007 },
				{ name: 'Whatsapp', price: 9 },
				{ name: 'Amazon', price: 2000 },
				{ name: 'Twitter', price: 34 },
			])
		})
}
