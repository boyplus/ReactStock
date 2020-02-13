const request = require('supertest')
const app = require('../src/app')
// const knex = require('../db/knex')

// beforeAll(async () => {
// 	await knex.migrate.rollback()
// 	await knex.migrate.latest()
// 	await knex.seed.run()
// 	// done()
// })

// let server, agent

// beforeEach(done => {
// 	server = app.listen(4000, err => {
// 		if (err) return done(err)

// 		agent = request.agent(server) // since the application is already listening, it should use the allocated port
// 		done()
// 	})
// })

// afterEach(done => {
// 	return server && server.close(done)
// })

describe('User Controller Test', () => {
	it('can get user', done => {
		request(app)
			.get('/api/user')
			// .send({})
			.end(done)
		// expect(typeof res).toBe('object')
	})
})
