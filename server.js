const express=require('express')
const mongoose=require("mongoose")
const app=express()
const UserRouter=require("./Route/User.Route")
const cors=require("cors")
app.use(express.urlencoded({extended : true}))

app.use(express.json())
app.use(cors())
app.use("/user",UserRouter)
app.get('/',(req,res)=>{res.send('hello')})
mongoose.set("strictQuery", false)

mongoose.connect("mongodb+srv://skismile:7867@cluster0.ngknmv4.mongodb.net/?retryWrites=true&w=majority",()=>{

    app.listen(8081,()=>{console.log('server is runing on port 8081')})
})