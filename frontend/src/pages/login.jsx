import React from 'react'
import "./CSS/login.css"
import {Link} from 'react-router-dom'

function login() {
  return (
    <div >
        <div className='form-container'>
            <h2 className='login-center'>Login</h2>
            <form >
                <label htmlFor="userName"></label>
                <input type="text" className='space' id='userName' placeholder='Username' required />
                <br />
                <label htmlFor="password"></label>
                <input type="password" className='space' id='password' placeholder='Password' required />
                <br />
                <button className='space' type='submit'>Login</button>
            </form>
            <p>Don't have  an account? <Link to='/signup' className='already'>Signup</Link></p>
        </div>
    </div>
  )
}

export default login