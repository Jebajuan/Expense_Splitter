import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function dashboard() {
    const [groups,setGroups]=useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      const fetchGroups=async()=>{
        const req=await axios.get("http://localhost:3001/dashboard")
        setGroups(req.data)
        setLoading(false)
      }
      fetchGroups()
    },[])

    if (loading) {
      return <p>Loading groups...</p>;
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <h2>You are in {groups.length} number of groups</h2>
        <button><Link to={"/create"}>Create group</Link></button>
        <div>
            <h3>Group List</h3>
            {groups.length ===0 ?(
              <p>No groups found. Create a new group to get Started</p>
            ):(
              <ul>
                {groups.map((group)=>(
                  <li key={group._id}>
                    <h2>{group.groupName}</h2>
                    <p>{group.description}</p>
                  </li>
                ))}
              </ul>
            )}
        </div>
    </div>
  )
}

export default dashboard