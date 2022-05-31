import React from 'react'
//import './Bar.css'
import logo from '../img/AlchemyLogo.png'
import stripes from '../img/tres_lineas.png'
import user from '../img/profile.png'
import bag from '../img/bolsa.png'



function Bar() {
  return (
    <div className='top_bar'>
        <div className='left_top'>
            <img className='menu_lineas' src={stripes}></img>
            <h3 className='menu_text'>Home</h3>
        </div>
        <div className='center_top'>
            <img className='logo' src={logo}></img>
        </div>
        <div className='right_top'>
            <img className='perfil' src={user}></img>
            <img className='bag' src={bag}></img>
        </div>
    </div>
  )
}

export default Bar