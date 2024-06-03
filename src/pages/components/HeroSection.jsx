import React from 'react';
import img from "../../assets/shoe_image.png"
import img2 from "../../assets/flipkart.png";
import img3 from "../../assets/amazon.png"



const HeroSection = () => {
  return (
    <main>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>OUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
              <div className='hero-btn'>
                <button>Shop Now</button>
                <button>Catogary</button>
              </div>
              <div className='shoping'>
                  <p>Also Available On</p>
                  <div className='brand-icons'>
                      <img src={img2}/>
                      <img src={img3}/>
                  </div>
              </div>
        </div>
        <div className='hero-img'>
            <img src={img} alt='shoe img'/>
        </div>
        
    </main>
  )
}

export default HeroSection;