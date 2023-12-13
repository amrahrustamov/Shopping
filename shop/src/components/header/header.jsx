import React from 'react'
import "../header/header.css"
import { NavLink } from 'react-router-dom'

const header = () => {



  return (
    <header className='header'>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/products`}>Products</NavLink>
        <NavLink to={`/contact`}>Contact</NavLink>
    </header>
  )
}

export default header
