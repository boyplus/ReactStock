exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
					id: '1',
					name: 'Sethanant',
					email: 'example1@mail.com',
					fund: 100000,
				},
				{
					id: '2',
					name: 'Tutorism',
					email: 'example2@mail.com',
					fund: 50000,
				},
				{
					id: '3',
					name: 'Buyplus',
					email: 'example3@mail.com',
					fund: 10000,
				},
			])
		})
}
