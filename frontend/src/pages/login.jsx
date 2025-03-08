import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function login() {
  const [userName,setUN]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const handleLogin = async (e) =>{
    e.preventDefault()
    const req=await axios.post("http://localhost:3001/login",{
      userName:userName,
      password:password
    })
    const message=req.data.message
    const isLogin=req.data.isLogin
    if(isLogin){
      navigate("/dashboard")
    }else{
      alert(message)
    }
  }
  return (
    <div >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label >Enter Username: </label>
          <input type="text" value={userName} onChange={(e)=>setUN(e.target.value)} required/>
        </div>
        <div>
          <label> Enter Password: </label>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default login