import React from 'react'
import "./head.css";
import {Link} from 'react-router-dom';



const head = () => {
  return (
    <div className='head'>
        <Link to='/' className='show'>Home </Link>
        <Link to='/student' className='show'>Student</Link>
        <Link to='/contact'className='show'>Contact</Link>
    </div>
  )
}

export default head