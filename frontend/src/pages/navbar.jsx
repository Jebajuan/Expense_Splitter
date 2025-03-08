import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/navbar.css'
import { useState } from 'react'
import Setting from './CSS/profile.png'

const Navbar=()=>{
    var [dropdown,setDropdown] = useState(false)
    return(
        <header>
            <nav>
                <ul>
                    <li className='link'><Link to='/'>Home</Link></li>
                    <li className='link'><Link to='/create'>Create Group</Link></li>
                    <li className='link'><Link to='/update'>Update Group</Link></li>
                    <li className='link'><Link to='/dashboard'>Dashboard</Link></li>
                    <div className='dropdown' onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                        <img src={Setting} className='icon' alt="profile" />
                        {dropdown && (
                            <ol className='dropdown-list'>
                                <li><Link className='dropdown-link' to='/signup'>Signup</Link></li>
                                <li><Link className='dropdown-link' to='/login'>Login</Link></li>
                            </ol>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar