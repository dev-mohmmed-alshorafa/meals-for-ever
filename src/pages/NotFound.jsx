import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div style={{minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h1 className='title' >
      Not Found 404
      </h1>
      <Link to='/' className='title'>
      Back to Home
      </Link>
    </div>
  )
}

export default NotFound
