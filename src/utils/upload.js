const multer = require("multer")
const path = require("path")
const { HttpException } = require('./http.exception')

const storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		if(file.fieldname=="image"){
			cb(null,"./public/uploads/images")
		}
		if(file.fieldname=="video"){
			cb(null,"./public/uploads/videos")
		}
	},
	filename:(req,file,cb)=>{
		const uniqueSuffix = Date.now()+'-'+Math.round(Math.random()*1e9)
		cb(null , uniqueSuffix+path.extname(file.originalname))
	}
})

const checkFileType= (req, file , cb)=> {
	const fileTypes = /jpeg|png|jpg|gif|mp4|avi|movi/
	const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
	const mimetype = fileTypes.test(file.mimetype)
	if(extname && mimetype) {
		return cb(null , true)
	} else {
		cb (
			new HttpException(Sta)
		)
	}
}

const upload = multer({
	storage,
	limits:({fileSize:50*1024*1024}),
	fileFilter:(req,file,cb)=>{
		checkFileType(req,file,cb)
	}
})

module.exports = {upload}