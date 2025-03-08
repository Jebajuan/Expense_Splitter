import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function update() {
    const [groupName,setGN]=useState("")
    const [memName,setMN]=useState("")
    const [amount,setAmount]=useState("");
    const navigate=useNavigate()
    const handleUpdate=async (e)=>{
        e.preventDefault()
        const req=await axios.post("http://localhost:3001/update",{
            groupName:groupName,
            name:memName,
            amount:parseFloat(amount)
        })
        const message=req.data.message
        const isUpdate=req.data.isUpdate
        if(!isUpdate){
            alert(message)
        }else{
            navigate("/dashboard")
        }
    }

  return (
    <div>
        <h1>Update group</h1>
        <form onSubmit={handleUpdate}>
            <div>
                <label >Enter Group Name</label>
                <input type="text"  value={groupName} onChange={(e)=>setGN(e.target.value)} />
            </div>
            <div>
                <label >Enter the Member name:</label>
                <input type="text" value={memName} onChange={(e)=>setMN(e.target.value)} />
            </div>
            <div>
                <label >Enter the Updated amount</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </div>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default update