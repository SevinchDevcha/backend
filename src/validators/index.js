const {validationResult} = require("express-validator")

const ExpressValidate = ( req , res , next) => {
  const errors = validationResult(req) 

	if(errors.isEmpty()) {
     return next()
	}

	let msg = ""

	errors.array().map((value)=> {
		msg += value.msg+" , "
	})

	res.status(400).json({success:false , msg})
}

module.exports = {ExpressValidate}