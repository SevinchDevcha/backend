const { StatusCodes } = require('http-status-codes')
const { NewsModel } = require('../../models/news/news.model')
const { HttpException } = require('../../utils/http-exception.js')

class NewsController {
	static getAll = async (req, res) => {
		const { search, page, limit } = req.query
		let searchQuery = {}
		if (search && search.length > 0) {
			searchQuery = {
				$or: [
					{ title: { $regex: search.trim(), $options: 'i' } },
					{ desc: { $regex: search.trim(), $options: 'i' } },
				],
			}
		}
		const news = await NewsModel.find(searchQuery)
			.skip((page - 1) * limit)
			.limit(limit)

		const total = await NewsModel.countDocuments(searchQuery)
		res.status(201).json({
			success: true,
			data: news,
			pagination: {
				total,
				page,
				limit,
			},
		})
	}

	static add = async (req, res) => {
		const { title, desc } = req.body
		await NewsModel.create({ title, desc })
		res.status(201).json({ success: true, msg: 'juda yaxshi qoyilmaqom' })
	}

	static getById = async (req, res) => {
		const { id } = req.params
		const news = await NewsModel.findById(id)
		if (!news) {
			throw new HttpException(500, 'doc topilmadi')
		}
		res.status(StatusCodes.CREATED).json({ success: true, data: news })
	}

	static delete = async (req, res) => {
		const { id } = req.params
		const news = await NewsModel.findById(id)
		if (!news) {
			throw new HttpException(500, 'doc topilmadi')
		}
		await news.deleteOne()
		res
			.status(StatusCodes.CREATED)
			.json({ success: true, msg: 'hammasi yaxshi' })
	}

	static update = async (req, res) => {
		const { id } = req.params
		const { title, desc } = req.body
		const news = NewsModel.findById(id)
		let example = {}
		if (title && title !== news.title) {
			example.title = title
		}
		if (desc && desc !== news.desc) {
			example.desc = desc
		}
		await NewsModel.findByIdAndUpdate(id, example)
		res
			.status(StatusCodes.CREATED)
			.json({ success: true, msg: 'hammasi yaxshi' })
	}
}

module.exports = { NewsController }
