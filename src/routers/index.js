const { newsRouter } = require('./news/news.router')

const main_router = [
	{path:"/news",router:newsRouter}
]

module.exports = {main_router}