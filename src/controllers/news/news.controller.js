const { newsModel } = require('../../models/news/news.model')
const { HttpException } = require('../../utils/http.exception')

class NewsController {
	static getAll = async (req, res) => {
		const news = await newsModel.find({})
		if (!news) {
			throw new HttpException(400, 'Docklar topilmadi !!!')
		}
		res.status(201).json({ success: true, data: news })
	}

	static add = async (req, res) => {
		const { title, desc } = req.body
		// const news = await newsModel.findOne({title})
		// if(news) {
		// 	throw new HttpException(400, "Bu title avval ishlatilgan")
		// }
		await newsModel.create({ title, desc })
		res.status(201).json({ success: true, msg: 'Ohh my good 😍' })
	}

	static delete = async (req, res) => {
		const { id } = req.params
		const news = newsModel.findById(id)
		if (!news) {
			throw new HttpException(400, 'Xatoku jinni 😂')
		}
		// await newsModel.findByIdAndDelete(id)  //1-usul
		await news.deleteOne()
		res.status(201).json({ success: true, msg: 'Ohh my good 😍' })
	}

	static update = async (req, res) => {
		const { id } = req.params
		const { title, desc } = req.body
		const news = await newsModel.findById(id)
		if (!news) {
			throw new HttpException(400, 'Bu dock topilmadi')
		}
		let example = {}
		if (title && title !== news.title) {
			example.title = title
		}
		if (desc && desc !== news.desc) {
			example.desc = desc
		}
		await newsModel.findByIdAndUpdate(id, example)
		res.status(201).json({ success: true, msg: 'Ohh my good 😍' })
	}

	static getById = async (req, res) => {
		const { id } = req.params
		const news = await newsModel.findById(id)
		if (!news) {
			throw new HttpException(400, 'Bu dock topilmadi')
		}
		res.status(201).json({ success: true, data: news })
	}
}

module.exports = { NewsController }
