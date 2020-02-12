const knex = require('../../db/knex')

const getAllStocks = async (req, res) => {
	try {
		const stocks = await knex.select('*').from('stocks')
		res.send(stocks)
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getUser function',
			error: err,
		})
	}
}

module.exports = {
	getAllStocks,
}
