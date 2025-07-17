const { Router } = require('express')
const {
	UploadController,
} = require('../../controllers/upload/upload.controller')
const { uploads } = require('../../utils/uploads')

const uploadRouter = new Router()

uploadRouter.post('/add', uploads.single('image'), UploadController.upload)

module.exports = { uploadRouter }
