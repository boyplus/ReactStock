const knex = require('../db/knex')

beforeAll(async done => {
	await knex.migrate.latest()
	await knex.seed.run()
	done()
})

describe('User Controller Test', () => {
	it('can get user', () => {
		const data = {}
	})
})
