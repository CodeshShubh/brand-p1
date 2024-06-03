import React from 'react';
import  img from "../assets/logo.png"
import HeroSection from './components/HeroSection';

const Home = () => {
  return (
<>
<div>
        <nav>
            <div>
                <img src={img} alt='logo'/>
            </div>
            
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">Contact</li>
                <li href="#">About</li>
            </ul>

            <button>Login</button>

        </nav>
    </div>

    <HeroSection/>

</>
  )
}

export default Home;