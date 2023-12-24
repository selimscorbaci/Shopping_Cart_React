import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className='container'>
      <Link to='/' className='logoRegister'>WhiteStore</Link>
      <h1>Welcome to the White Store</h1>
      <form className='registerForm'>
        <h2>Register To Continue</h2>
        <label htmlFor="userEmail">Email</label> 
        <input type="email" id='userEmail' placeholder='Your Email' />

        <label htmlFor="userPassword">Password</label>
        <input type="password" className='userPassword' maxLength={9} minLength={9} placeholder='Your Password'/>
        <label htmlFor="userPassword">Confirm Password</label>
        <input type="Password" className='userPassword' maxLength={9} minLength={9} placeholder='Confirm Password' />
        <button onClick={(e)=>{
          e.preventDefault();
        }}>Register</button>
        <span>Already have an account?</span>
        <Link to='/login'>
         Log In
        </Link>
      </form>
    </div>    
  )
}

export default Register
