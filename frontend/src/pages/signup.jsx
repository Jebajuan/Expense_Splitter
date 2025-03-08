import "./CSS/signup.css"
import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function signup() {
  const [userName,setUN]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const navigate=useNavigate()
  const handleSignin =async (e)=>{
    e.preventDefault()
    const req=await axios.post("http://localhost:3001/signup",{
      userName:userName,
      password:password,
      email:email
    })
    const message=req.data.message
    const isSignUp=req.data.isSignup
    if(!isSignUp){
      alert(message)
    }else{
      navigate("/dashboard")
    }
  }

  return (
    <div onSubmit={handleSignin}>
      <h1>Signup</h1>
      <form >
      <div>
        <label>Enter Username: </label>
        <input type="text" value={userName} onChange={(e)=>setUN(e.target.value)} />
      </div>
      <div>
        <label >Enter Password: </label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div>
        <label >Enter Email: </label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default signup