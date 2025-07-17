const { Schema, model } = require('mongoose')

const newsSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
)

const NewsModel = model('news', newsSchema, 'news')

module.exports = { NewsModel }
