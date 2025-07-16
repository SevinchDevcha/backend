const {Router} = require("express")
const { NewsController } = require('../../controllers/news/news.controller')
const { NewsValidator } = require('../../validators/news/news.validator')
const { ExpressValidate } = require('../../validators')

const newsRouter = new Router()

newsRouter.get(
	"/get-all",
	NewsController.getAll
)

newsRouter.post(
	"/add",
	NewsValidator.add(),
	ExpressValidate,
	NewsController.add
)
newsRouter.get(
	"/getById/:id",
	NewsValidator.getById(),
	ExpressValidate,
	NewsController.getById
)

newsRouter.delete(
	"/delete/:id",
	NewsValidator.getById(),
	ExpressValidate,
	NewsController.delete
)

newsRouter.put(
	"/update/:id",
	NewsValidator.update(),
	ExpressValidate,
	NewsController.update
)

module.exports = {newsRouter}