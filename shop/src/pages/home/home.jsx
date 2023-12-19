import React from 'react';
import '../home/homeStyle.css';
import Header from "../../components/header/header";
import Nav from '../../components/nav/nav';
import Slider from '../../components/slider/slider';

const home = () => {
  return (
    <div className='home'>
      <Header />
      <div className="main">
        <div className="leftPart">
        <Nav />
        </div>
        <div className="rightPart">
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default home
