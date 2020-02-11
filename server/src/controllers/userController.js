const knex = require('../../db/knex')

const getUser = async (req, res) => {
	try {
		const user = await knex
			.select('*')
			.from('users')
			.innerJoin('stocks_owned', 'users.id', 'stocks_owned.user_id')
			.where('users.id', '1')
		res.send(user)
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getUser,
}
