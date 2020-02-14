const knex = require('../../db/knex')

const getUser = async (req, res) => {
	try {
		const user = await knex
			.select('*')
			.from('users')
			.where('id', req.user.id)
		if (user.length == 0) res.status(404).send({ err: 'User not found' })
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
			.where('stocks_owned.user_id', req.user.id)
		res.send(stockOwn)
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getPortfolio function',
			error: err,
		})
	}
}

const buyStock = async (req, res) => {
	try {
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in buyStock function',
			error: err,
		})
	}
}

module.exports = {
	getUser,
	getPortfolio,
}
