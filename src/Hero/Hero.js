import React, {useState} from 'react';
import './Hero.scss';
import HeroVideo from '../images/video-background3.mp4';
import Logo from '../images/logo-white.png'


function Hero(){

    return(
        <div id="home" className="hero-wrapper">
            <div className="video-background">
                <video autoPlay muted loop>
                <source src={HeroVideo} type="video/mp4" />
                </video>
            </div>
            <div className="hero-text">
                <img src={Logo} alt="Thunder Logo" />
            </div>
        </div>
    )
}

export default Hero;