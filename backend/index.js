const express = require('express')
const mdb=require('mongoose')
const app = express()
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const PORT = 3001
dotenv.config()
app.use(express.json())
const Signup=require('./models/signupSchema')
const Group=require('./models/createSchema')
const cors =require ('cors')
app.use(cors())

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
        const lowerUserName=userName.toLowerCase()
        const hashPassword=await bcrypt.hash(password,10)
        const user=await Signup.findOne({userName:lowerUserName})
        if(user){
          return res.status(400).json({message:"Username Already exsist",isSignup:false})
        }
        const newSignup = new Signup({
            userName:lowerUserName,
            password:hashPassword,
            email:email,
        })
        newSignup.save()
        res.status(201).json({message:"Signup Successful",isSignup:true})
    } catch (error) {
      console.log(error)
        res.status(400).json({message:"Signup Failed",isSignup:false})
    }
})

app.post("/login",async (req,res)=>{
  try {
    const {userName,password}=req.body
    const lowerUserName=userName.toLowerCase();
    const user=await Signup.findOne({userName:lowerUserName})
    if(!user){
      return res.status(404).json({message:"Invalid Username or password",isLogin:false})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
      return res.status(401).json({message:"Invalid Username or Password",isLogin:false})
    }
    res.status(200).json({message:"login Successful",isLogin:true})
  } catch (error) {
    res.status(404).json({message:"Login Failed",isLogin:false})
  }
 
})

app.put("/create",async (req,res)=>{
  try{
    const {groupName,description,members}=req.body
    const newGroup = new Group({
      groupName,
      description,
      members
    })
    await newGroup.save()
    res.status(201).json({message:"Group Successfully Created",isCreate:true})
  }
  catch(error){
    res.status(400).json({message:"Failed to create group",isCreate:failed})
  }
})

app.post("/update",async (req,res)=>{
  try {
    const {groupName,memName,amount}=req.body
    const group=await Group.findOne({groupName:groupName})
    if(!group){
      return res.status(404).json({message:"Group Not Found",isUpdate:false})
    }
    const memIndex =group.members.findIndex((member)=>member.name === memName);
    if(memIndex=== -1){
      return res.status(404).json({message:"Member Not Found",isUpdate:false})
    }
    group.members[memIndex].amount=amount
    await group.save()
    res.status(200).json({message:"Updated Successfully",isUpdate:true})
  } catch (error) {
    res.status(404).json({message:"Error Updating Amount",isUpdate:false})   
  }
})

app.get("/dashboard", async (req,res)=>{
  try {
    const groups=await Group.find()
    res.status(200).json(groups)
  } catch (error) {
    res.status(400).json({message:"Display failed"})
  }
})

app.listen(PORT,()=>console.log("Server started successfully"))