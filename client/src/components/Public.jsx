import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const Public = () => {
  return (
    <div style={{padding:20}}><div className='text-2xl'>hello chào mừng bạn đến</div> <Link to={'login'} >Login</Link></div>
  )
}

export default Public