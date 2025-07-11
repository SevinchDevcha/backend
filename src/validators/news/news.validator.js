const { body, param } = require('express-validator')

class NewsValidator {
	static add = ()=>[
		body("title","titleni to'ldiring !").notEmpty().bail().isString().withMessage("titlega string kiriting !"),
		body("desc","descni to'ldiring !").notEmpty().bail().isString().withMessage("descga string kiriting !")
	]
	static getById = ()=>[
		param("id","ID da xatolik bor").isMongoId()
	]
	static update = ()=>[
		param("id","ID da xatolik bor").isMongoId(),
		body("title","string kiriting").optional().isString(),
		body("desc","string kiriting").optional().isString()
	]
	
}

module.exports = {NewsValidator}