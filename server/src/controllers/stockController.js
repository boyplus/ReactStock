const knex = require('../../db/knex')

const addNewStock = async (req, res) => {
	try {
		// {
		// 	name: 'StockName',
		// 	price: 10.0
		// }
		await knex('stocks').insert(req.body)
		res.status(201).send()
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in addNewStock function',
			error: err,
		})
	}
}

// const getStock = async (req, res) => {
// 	try {
// 		const stockProp = req.body
// 		const stock = await knex('stocks')
// 			.select('name', 'price')
// 			.where()
// 	} catch (err) {}
// }

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
	addNewStock,
}
