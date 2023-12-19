import React from 'react'
import '../products/productsStyle.css'
import Header from "../../components/header/header";
import Card from "../../components/card/card";
import Nav from '../../components/nav/nav';

const products = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="leftPart">
        <Nav />
        </div>
        <div className="rightPart">
        <Card />
        </div>
      </div>
    </div>
  )
}

export default products
