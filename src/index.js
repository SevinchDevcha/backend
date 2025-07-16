const express = require("express")
const app = express()
const { PORT } = require('./utils/secret.js')
const { main_router } = require('./routers/index.js')
const { ConnectDB } = require('./utils/config.database.js')
const { errorMiddleware } = require('./middleware/error.middleware.js')
const cors = require("cors")

void ConnectDB()

app.use(cors({origin:"*"}))
app.use(express.json())

app.get("/",(req , res)=> {
 res.status(201).json({success:true})
})

main_router.forEach((value)=>{
	app.use(value.path , value.router)
})

app.use(errorMiddleware)

app.listen(PORT  , ()=> {
	console.log(`Explore ports http://locaolhost:${PORT}`);
})