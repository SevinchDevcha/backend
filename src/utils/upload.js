const multer = require("multer")

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
		
	}
})

const upload = multer({
	storage,
	limits:({fileSize:50*1024*1024}),
	fileFilter:(req,file,cb)=>{
		checkFileType(req,file,cb)
	}
})

module.exports = {upload}