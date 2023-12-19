import React from 'react'
import "../header/header.css"
import { NavLink } from 'react-router-dom'
import { ImAmazon } from "react-icons/im";

const header = () => {



  return (
    <header className='header'>
      <div className='leftHeader'>
        <ImAmazon className='logo'/>
        <h1>Azerbaijan</h1>
      </div>
      <div className='rightHeader'>
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/products`}>Products</NavLink>
        <NavLink to={`/contact`}>Contact</NavLink>
      </div>
    </header>
  )
}

export default header
