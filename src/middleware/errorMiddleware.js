const errorMiddleware = (error, req, res, next) => {
	const msg = error.msg || error.message || 'Gateway timeout'
	const status_code = error.status_code || 500

	res.status(status_code).json({ success: false, msg })
}

module.exports = { errorMiddleware }
