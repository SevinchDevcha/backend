const express = require("express")
const app = express()
const { PORT } = require('./utils/secret.js')

app.get("/",(req , res)=> {
 res.status(201).json({success:true})
})

app.listen(PORT  , ()=> {
	console.log(`Explore ports http://locaolhost:${PORT}`);
})