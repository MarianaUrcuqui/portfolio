import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
      <NavLink 
      to='/'
      className='header-title'>Mariana Urcuqui</NavLink>
      <nav className='nav'>
      <NavLink
        to='about'
        style={({ isActive }) => isActive ?   {textDecoration: 'underline'} : null}
      >About me</NavLink>
      </nav>
    </div>
  )
}

export default Header