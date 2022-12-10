import React from 'react'
import {Link} from 'react-router-dom'
function index() {
  return (
    <div className='nav' >
      <img src="./logo.png" alt="" />
      <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/meals'>Meals</Link>
      </div>
    </div>
  )
}

export default index
