class HttpException extends Error {
	constructor(status_code, msg) {
		super(msg)
		this.msg = msg
		this.status_code = status_code
	}
}

module.exports = { HttpException }
