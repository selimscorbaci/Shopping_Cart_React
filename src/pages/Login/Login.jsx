import React from 'react'
import {Link} from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className='container'>
      <Link to='/' className='logoLogin'>WhiteStore</Link>
      <h1>Welcome to the White Store</h1>
      <form className='loginForm'>
        <h2 style={{textAlign:'center'}}>Log In To Continue</h2>
        <label htmlFor="userEmail">Email</label> 
        <input type="email" id='userEmail' placeholder='Your email' />

        <label htmlFor="userPassword">Password</label>
        <input type="password" className='userPassword' placeholder='Your password'/>

        <button onClick={(e)=>{
          e.preventDefault();
        }}>Log In</button>
        <span>Don't you have an account?</span>
        <Link to='/register'>
         Register
        </Link>
      </form>
    </div>
  )
}

export default Login