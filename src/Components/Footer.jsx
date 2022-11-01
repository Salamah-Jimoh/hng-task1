import React from 'react'
import Zuri from './assets/zuri.svg'
import I4G from './assets/I4G.png'
const Footer = () => {
  return (
    <div className='footer'>
    <img src={Zuri} alt="Zuri logo" />  
    <p>HNG Internship 9 Frontend Task</p>
    <img src={I4G} alt="I4G Logo" />
    </div>
  )
}

export default Footer
