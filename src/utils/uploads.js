const multer = require('multer')
const path = require('path')
const { HttpException } = require('./http-exception')
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname == 'image') {
			cb(null, 'public/uploads/images')
		}
		if (file.fieldname == 'video') {
			cb(null, 'public/uploads/videos')
		}
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
		cb(null, uniqueSuffix + path.extname(file.originalname))
	},
})

const checkFileType = (req, file, cb) => {
	const fileType = /jpeg|png|jpg|gif|mp4|avi|movi/
	const extname = fileType.test(path.extname(file.originalname).toLowerCase())
	const mimetype = fileType.test(file.mimetype)
	if (extname && mimetype) {
		return cb(null, true)
	} else {
		cb(new HttpException(400, 'Errors'))
	}
}

const uploads = multer({
	storage,
	limits: { fileSize: 50 * 1024 * 1024 },
	fileFilter: (req, file, cb) => {
		checkFileType(req, file, cb)
	},
})

module.exports = { uploads }
