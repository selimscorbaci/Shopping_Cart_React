import React from 'react'
import './DropDown.css'
import {Link} from 'react-router-dom'

function DropDown() {
  return (
    <div className='dropDown'>
      <ul className='menu'>
        <li><Link to='/login'>Login</Link></li>
        <hr />
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </div>
  )
}

export default DropDown