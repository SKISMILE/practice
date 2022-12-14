const express=require('express')
require("dotenv").config()
const mongoose=require("mongoose")
const app=express()
const UserRouter=require("./Route/User.Route")
const cors=require("cors")
const PORT=process.env.PORT ||8081
const MONGO_URL=process.env.MONGO_URL
app.use(express.urlencoded({extended : true}))

app.use(express.json())
app.use(cors())
app.use("/user",UserRouter)
app.get('/',(req,res)=>{res.send('hello')})
mongoose.set("strictQuery", false)

mongoose.connect(MONGO_URL,()=>{

    app.listen(PORT,()=>{console.log('server is runing on port 8081')})
})