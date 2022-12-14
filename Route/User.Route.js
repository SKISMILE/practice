const express=require("express")
const app=express.Router()
const UserModel=require("../Model/User.Model")

app.get("/",(req,res)=>{


res.send("user")


})

app.get("/create",async(req,res)=>{

res.send("create route")

})
app.post("/create",async(req,res)=>{
let {email,password,name}=req.body

console.log(email,password,name)

try{
console.log(UserModel)
    let user = await UserModel.create({email,password,name})
    
    res.send("user created")
}catch(e){
    res.send("user not created")
    // console.log(e)
}
    
    
    })


module.exports=app
