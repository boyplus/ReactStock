const knex = require('../../db/knex')

const getUser = async (req, res) => {
	try {
		const user = await knex
			.select('*')
			.from('stocks_owned')
			.innerJoin('users', 'users.id', 'stocks_owned.user_id')
			.innerJoin('stocks', 'stocks_owned.stock_id', 'stocks.id')
			.where('users.id', '2')
		res.send(user)
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getUser function',
			error: err,
		})
	}
}

module.exports = {
	getUser,
}
