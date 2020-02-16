const knex = require('../../db/knex')

const checkAuth = async (req, res, next) => {
	if (!req.user)
		return res.status(401).send({
			err: 'User is not authnicated'
		})
	const user = await knex('users')
		.select('*')
		.where('id', req.user.id)
	// .where('id', '1')
	if (!user.length) return res.status(404).send({
		err: 'User is not in DB'
	})
	req.user = user[0]
	next()
}

module.exports = checkAuth