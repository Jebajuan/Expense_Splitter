import React from 'react'
import {useState} from 'react'

function create() {
    const [groupName,setGN] =useState("")
    const [grpDesc,setGD]=useState("")
    const [memName,setMN]=useState("")
    const [amount,setAmount]=useState("")
    const [selectedFriends,setSelectedFriends]=useState([])

    const addFriend = () => {
        if (memName.trim() !== "" && amount.trim() !== "") {
          const newFriend = {
            name: memName,
            amount: parseFloat(amount)
          };
        setSelectedFriends([...selectedFriends, newFriend]);
        setMN(""); 
        setAmount(""); 
        }
    };
    
    const removeFriend=(index)=>{
        const updatedFriends=selectedFriends.filter((_,i)=>i !==index)
        setSelectedFriends(updatedFriends)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Group Name:", groupName);
        console.log("Group Description:", grpDesc);
        console.log("Selected Friends:", selectedFriends);
        
      };
    
    
    
  return (
    <div>
        <div>
            <h2>Create Group</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Group Name</label>
                    <input type="text" value={groupName} onChange={(e)=>setGN(e.target.value)} required/>
                </div>
                <div>
                    <label>Group Description</label>
                    <input type="text" value={grpDesc} onChange={(e)=>setGD(e.target.value)} required/>
                </div>
                <div>
                    <h2>Add Friends</h2>
                    <input type="text" placeholder="Enter friend's name" value={memName} onChange={(e)=>setMN(e.target.value)} required/>
                    <input type="number" placeholder='Enter amount' value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
                    <button type='button' onClick={addFriend}>Add Friend</button>

                    <h3>Selected Friends</h3>
                    <ol>
                        {selectedFriends.map((friend,index)=>(
                            <li key={index}>
                                {friend.name}-${friend.amount.toFixed(2)}
                                <button type='button' onClick={()=>removeFriend(index)}>Remove</button>
                            </li>
                        ))}
                    </ol>
                </div>
                <button type='submit'>Create Group</button>
            </form>
        </div>
    </div>
  )
}

export default create