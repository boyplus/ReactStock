const knex = require('../../db/knex')

const findStock = async stockID => {
	try {
		const stock = await knex('stocks')
			.select('*')
			.where('id', stockID)
		if (stock.length == 0) return { err: 'Not found' }
		return stock[0]
	} catch (err) {
		return err
	}
}

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

const getStock = async (req, res) => {
	try {
		const result = await findStock(req.body.stockID)
		if (result.err) {
			res.status(404)
		}
		res.send(result)
	} catch (err) {
		onsole.log(err)
		res.status(500).send({
			message: 'Error in getStock function',
			error: err,
		})
	}
}

const getAllStocks = async (req, res) => {
	try {
		const stocks = await knex.select('*').from('stocks')
		res.send(stocks)
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in getAllStocks function',
			error: err,
		})
	}
}

const buyStock = async (req, res) => {
	try {
		// {
		// 	stockID: 1,
		// 	quantity: 10
		// }
		const orderProp = {
			user_id: '1',
			stock_id: res.body.stockID,
			quantity: res.body.quantity,
		}
		const result = await findStock(req.body.stockID)
		if (result.err) return res.status(404).send(result)

		const existingStock = await knex('stocks')
			.select('id', 'quantity')
			.where('id', req.body.stockID)
		if (existingStock.length == 0) {
			await knex('stocks_owned').insert(orderProp)
		} else {
			await knex('stocks_owned')
				.update(
					'quantity',
					existingStock[0].quantity + orderProp.quantity
				)
				.where({
					user_id: orderProp.user_id,
					stock_id: orderProp.stock_id,
				})
		}
		res.status(200).send({ success: true })
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in buyStock function',
			error: err,
		})
	}
}

module.exports = {
	getAllStocks,
	addNewStock,
	getStock,
	buyStock,
}
