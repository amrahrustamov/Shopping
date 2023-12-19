import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <nav>
        <NavLink to="/products" className='list'>ALL</NavLink>
        <NavLink to="/Mens_clothing" className='list'>Men's clothing</NavLink>
        <NavLink to="/Women_clothing" className='list'>Women's clothing</NavLink>
        <NavLink to="/Electronics" className='list'>Electronics</NavLink>
        <NavLink to="/Jewelery" className='list'>Jewelery</NavLink>
        <NavLink to="/Kids_clothing" className='list'>Kid's clothing</NavLink>
    </nav>
  )
}

export default Nav
