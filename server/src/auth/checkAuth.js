const checkAuth = (req, res, next) => {
	if (!req.user)
		return res.status(401).send({ err: 'User is not authnicated' })
	next()
}

module.exports = checkAuth
