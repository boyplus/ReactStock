exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{ email: 'example1@mail.com', fund: 100000 },
				{ email: 'example2@mail.com', fund: 50000 },
				{ email: 'example3@mail.com', fund: 10000 },
			])
		})
}
