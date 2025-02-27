import React from 'react'
import {Link} from 'react-router-dom'
import './CSS/navbar.css'

const Navbar=()=>{
    return(
        <header>
            <nav>
                <li className='link'><Link to='/'>Home</Link></li>
                <li className='link'><Link to='/setting'>Setting</Link></li>
            </nav>
        </header>
    )
}

export default Navbar