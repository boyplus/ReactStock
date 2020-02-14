const knex = require('../../db/knex')

const getUser = async (req, res) => {
	try {
		const user = await knex
			.select('name', 'email', 'fund')
			.from('users')
			.where('id', '1')
		if (user.length == 0)
			return res.status(404).send({ err: 'User not found' })
		res.send(user[0])
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getUser function',
			error: err,
		})
	}
}

const getPortfolio = async (req, res) => {
	try {
		const stockOwn = await knex
			.sum('quantity as quantity')
			.select('name', 'price')
			.from('stocks_owned')
			.innerJoin('stocks', 'stocks.id', 'stocks_owned.stock_id')
			.groupBy('stock_id')
			.where('stocks_owned.user_id', '1')
		res.send(stockOwn)
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
	getPortfolio,
}
