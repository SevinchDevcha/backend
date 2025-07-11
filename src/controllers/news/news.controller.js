class NewsController {

  static getAll = (req , res) => {
		res.status(201).json({success:true,msg:"Hello Word !"})
	}

	static add = (req, res)=> {
		const {title , desc} = req.body
		res.status(201).json({success:true,data:{title,desc}})
	}

}

module.exports = {NewsController}