const request = require('supertest')
const app = require('../src/app')
const knex = require('../db/knex')

beforeEach(async () => {
	await knex.migrate.latest()
	await knex.seed.run()
	// done()
})

afterEach(async () => {
	await knex.migrate.down()
})

describe('User Controller Test', () => {
	it('can get user', async () => {
		const expected = {
			name: 'Sethanant',
			email: 'example1@mail.com',
			fund: 100000,
		}
		const res = await request(app).get('/api/user')
		expect(res.body[0]).toMatchObject(expected)
	})

	it.only(`can get user's port folio`, async () => {
		const expected = {
			quantity: 10,
			name: 'Google',
			price: 100,
		}

		// const res = await request(app).get('/api/portfolio')
		// console.log(res.body)
		// expect(res.body[0]).toMatchObject(expected)
	})
})
