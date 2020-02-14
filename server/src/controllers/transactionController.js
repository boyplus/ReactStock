const knex = require('../../db/knex')

const getUserTransactions = async (req, res) => {
	try {
		const userID = '1'
		const transac = await knex('transactions')
			.select(
				'transactions.id',
				'stocks.name',
				'transactions.price',
				'quantity',
				'created_at'
			)
			.innerJoin('stocks', 'transactions.stock_id', 'stocks.id')
			.where('user_id', userID)
			.orderBy('created_at', 'asc')
		res.send(transac)
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getUserTransactions function',
			error: err,
		})
	}
}

module.exports = {
	getUserTransactions,
}
