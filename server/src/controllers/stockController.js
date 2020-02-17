const knex = require('../../db/knex')

const findStock = async stockID => {
	try {
		const stock = await knex('stocks')
			.select('*')
			.where('id', stockID)
		if (stock.length == 0)
			return {
				err: 'Not found',
			}
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
		console.log(err)
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
		const orderProp = {
			user_id: req.user.id,
			stock_id: req.body.stockID,
			quantity: req.body.quantity,
		}
		// Find stock if it exist
		const stock = await findStock(orderProp.stock_id)
		if (stock.err) return res.status(404).send(stock)

		// Subtract the user's fund
		const updatedFund = req.user.fund - orderProp.quantity * stock.price
		await knex('users')
			.update('fund', updatedFund)
			.where('id', orderProp.user_id)

		// Find if use alreay own the stock
		const existingStock = await knex('stocks_owned')
			.select('id', 'quantity')
			.where({
				stock_id: orderProp.stock_id,
				user_id: orderProp.user_id,
			})
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
		// Add order to the transaction table
		orderProp.price = orderProp.quantity * stock.price
		orderProp.created_at = knex.fn.now()
		await knex('transactions').insert(orderProp)
		return res.status(200).send({
			success: true,
		})
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in buyStock function',
			error: err,
		})
	}
}

const sellStock = async (req, res) => {
	try {
		const orderProp = {
			user_id: req.user.id,
			stock_id: req.body.stockID,
			quantity: req.body.quantity,
		}
		// Find stock if it exist
		const stock = await findStock(orderProp.stock_id)
		if (stock.err) return res.status(404).send(stock)

		// Check if user own the stock
		const existingStock = await knex('stocks_owned')
			.select('*')
			.where({
				user_id: orderProp.user_id,
				stock_id: orderProp.stock_id,
			})
		if (!existingStock.length) {
			return res.status(404).send({
				err: 'User does not own the stock',
			})
		}
		// Check if user have enough stock to sell
		if (existingStock[0].quantity < orderProp.quantity) {
			return res.status(406).send({
				err: 'User does not own enough stock quantity',
			})
		}

		// if user sell all of his stock
		if (existingStock[0].quantity == orderProp.quantity) {
			await knex('stocks_owned')
				.delete()
				.where({
					user_id: orderProp.user_id,
					stock_id: orderProp.stock_id,
				})
		} else {
			await knex('stocks_owned')
				.update(
					'quantity',
					existingStock[0].quantity - orderProp.quantity
				)
				.where({
					user_id: orderProp.user_id,
					stock_id: orderProp.stock_id,
				})
		}

		// Add the user's fund
		const updatedFund = req.user.fund + orderProp.quantity * stock.price
		await knex('users')
			.update('fund', updatedFund)
			.where('id', orderProp.user_id)

		// Add order to the transaction table
		orderProp.price = orderProp.quantity * stock.price
		orderProp.created_at = knex.fn.now()
		await knex('transactions').insert(orderProp)
		return res.status(200).send({
			success: true,
		})
	} catch (err) {
		console.log(err)
		res.status(500).send({
			message: 'Error in sellStock function',
			error: err,
		})
	}
}

module.exports = {
	getAllStocks,
	addNewStock,
	getStock,
	buyStock,
	sellStock,
}
