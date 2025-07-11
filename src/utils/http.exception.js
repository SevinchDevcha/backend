class HttpException extends Error {
	constructor(status_code , msg) {
		super (msg)
		this.status_code = status_code
		this.msg=msg
	}
}

module.exports = {HttpException}