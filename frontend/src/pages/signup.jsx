import "./CSS/signup.css"
import React from 'react'
import {Link} from 'react-router-dom'
function signup() {
  return (
    <div>
      <div className="form-container">
        <h2>SignUp</h2>
        <form >
            <label htmlFor="userName"></label>
            <input type="text" className="space" id='userName' placeholder='Username' required />
            <br />
            <label htmlFor="password"></label>
            <input type="password" id='passwword' className="space" placeholder='Password' required />
            <br />
            <label htmlFor="conPassword"></label>
            <input type="password" className="space" id='conPassword' placeholder='Confirm Password' required />
            <br />
            <label htmlFor="email"></label>
            <input type="email" className="space" id='email' placeholder='Email' required/>
            <br />
            <button className="space" type='submit'>Signup</button>
        </form>
        <p>Already have an account? <Link to='/login' className="already">Login</Link></p>
      </div>
    </div>
  )
}

export default signup