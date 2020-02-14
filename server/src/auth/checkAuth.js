const checkAuth = (req, res, next) => {
	if (req.user) next()
	res.status(404).send({ err: 'Auth first' })
}

module.exports = checkAuth
