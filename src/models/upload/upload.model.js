const { Schema, model } = require('mongoose')

const uploadSchema = new Schema(
	{
		is_use: { type: Boolean, required: true, default: false },
		file_path: { type: String, required: true },
		where_used: {
			type: String,
			enum: ['news'],
		},
	},
	{ versionKey: false }
)

const UploadModel = model('save_file', uploadSchema, 'save_file')

module.exports = { UploadModel }
