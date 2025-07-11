const { Schema, model } = require('mongoose')

const newsSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		desc: {
			type: String,
			required: true
		}
	},
	{ timestamps: true, versionKey: false }
)

const newsModel = model('news', newsSchema, 'news')

module.exports = {newsModel}
