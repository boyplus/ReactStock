const knex = require('../db/knex')

beforeAll(async done => {
	knex.migrate.latest()
})
