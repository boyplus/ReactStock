const request = require('supertest')
const app = require('../src/app')
// const knex = require('../db/knex')

// beforeAll(async () => {
// 	await knex.migrate.rollback()
// 	await knex.migrate.latest()
// 	await knex.seed.run()
// 	// done()
// })

describe('User Controller Test', () => {
	it('can get user', function(done) {
		request(app)
			.get('/api/user')
			.expect(200)
			.end(function(err, res) {
				if (err) return done(err)
				done()
			})
		// .end()
		// expect(body[0].id).toBe(1)
		// console.log(res.body)
		// expect(res.body[0].fund).toBe(100000)
		// done()
	})
})
