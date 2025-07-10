class NewsController {
  static getAll = (req , res) => {
		res.status(201).json({success:true,msg:"Hello Word !"})
	}
}

module.exports = {NewsController}