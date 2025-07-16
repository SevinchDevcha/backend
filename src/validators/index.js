const { validationResult } = require('express-validator')
const { StatusCodes } = require('http-status-codes')

const ExpressValidate = async ( req , res , next )=> {
	const errors = await validationResult(req)

	if(errors.isEmpty()) {
		return next()
	}

	let message = ""

	errors.array().map(item => (
		message+= item.msg +" ,"
	))

	res.status(StatusCodes.BAD_REQUEST).json({success:false , msg:message})
}

module.exports = {ExpressValidate}