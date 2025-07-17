const { newsRouter } = require('./news/news.router')
const { uploadRouter } = require('./upload/upload.router')

const main_router = [
	{ path: '/news', router: newsRouter },
	{ path: '/upload', router: uploadRouter },
]

module.exports = { main_router }
