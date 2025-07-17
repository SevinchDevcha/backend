const { StatusCodes } = require('http-status-codes')
const { HttpException } = require('../../utils/http-exception')
const { UploadModel } = require('../../models/upload/upload.model')

class UploadController {
	static upload = async (req, res) => {
		const file = req.file
		if (!file) {
			throw new HttpException(StatusCodes.NOT_FOUND, ' Not found file')
		}

		await UploadModel.create({ file_path: 'uploads/images/' + file?.filename })
		res.status(StatusCodes.CREATED).json({
			success: true,
			msg: 'uploads/images/' + file?.filename,
		})
	}
}

module.exports = { UploadController }
