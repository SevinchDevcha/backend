const { body, param } = require('express-validator')

class NewsValidator {
	static add = () => [
		body('title', "titleni to'ldir !")
			.notEmpty()
			.bail()
			.isString()
			.withMessage('titlega string kirit'),
		body('desc', "descni to'ldir !")
			.notEmpty()
			.bail()
			.isString()
			.withMessage('descga string kirit'),
	]

	static getById = () => [param('id', "id ni to'liq kirit ").isMongoId()]

	static update = () => [
		param('id', "id ni to'liq kirit ").isMongoId(),
		body('title', "titleni to'ldir !")
			.notEmpty()
			.optional()
			.bail()
			.isString()
			.withMessage('titlega string kirit'),
		body('desc', "descni to'ldir !")
			.notEmpty()
			.optional()
			.bail()
			.isString()
			.withMessage('descga string kirit'),
	]
}

module.exports = { NewsValidator }
