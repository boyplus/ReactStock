const checkAuth = (req, res, next) => {
	if (!req.user) return res.status(404).send({err: 'User is not authnicated'})
	next()
}

module.exports = checkAuth
