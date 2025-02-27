const express = require('express')
const mdb=require('mongoose')
const app = express()
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const PORT = 3001
dotenv.config()
app.use(express.json())
const Signup=require('./models/signupSchema')
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/",(req,res)=>{
    res.send("<h1> Welcome to Backend Server</h1>")
})

app.post("/signup",async(req,res)=>{
    try {
        const{userName,password,email}=req.body
        const hashPassword=await bcrypt.hash(password,10)
        const newSignup = new Signup({
            userName:userName,
            password:password,
            email:email,
        })
        newSignup.save()
        console.log("Signup Successful")
        res.status(201).json({message:"Signup Successful",isSignup:true})
    } catch (error) {
        res.status(400).json({message:"Signup Failed"})
    }
})


app.listen(PORT,()=>console.log("Server started successfully"))