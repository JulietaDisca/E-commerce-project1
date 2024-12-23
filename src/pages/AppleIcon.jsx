import React from 'react'
import './AppleIcon.css';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

import Img1AppleIcon from '../img/Image1_AppleIcon.jpeg';

const AppleIcon = () => {
  return (
    <div>
        <h2 className="ItemListContainer-h2">Welcome to Apple excellence: your ideal devices await you</h2>
        <div className='containerAppleIcon1'>
          <div className='container_h3_btn'>
            <h3 className='description_img1'>"Discover the new iPhone 16: Next-generation AI technology and a design that redefines perfection. Be the first to get your hands on it!"</h3>
            <button className='btn_seemore'>See more</button>
          </div>
          <img className='img1' src={Img1AppleIcon} alt="iphones 16" />
        </div>
        <h2 className='ItemListContainer-h2'>ALL OUR PRODUCTS</h2>
        <ItemListContainer />
    </div>

  )
}

export default AppleIcon