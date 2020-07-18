import React, {useState, useEffect} from 'react';
import './Navigation.scss';
import TruckLogo from '../images/food-truck-white.png';
import LogoTop from '../images/logo-white-top.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation(){

    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [condition, setCondition] = useState(false);

    function mobileTogglerHandler () {
        if (condition == false) {
            setCondition(true);
        } else {
            setCondition(false);
        }
    }

    function hideMobileMenu() {
        setCondition(false);
    }

    return (
        <div className={"nav-wrapper " + (scrollPosition > 300 ? 'menu-to-center' : 'menu-to-left')}>
            <div className="container">
                <div className="row">
                   <div className="col-md-12">


                   <div className="logo-wrapper">
                        <img className={"logo-top img-fluid " + (scrollPosition > 300 ? 'show-logo' : 'hide-logo') } src={LogoTop} />
                        <img className={"truck-logo img-fluid " + (scrollPosition > 300 ? 'logo-to-center' : 'logo-to-left')} src={TruckLogo} />
                    </div>
                    <div className="menu-wrapper">
                        <div className="mobile-menu-toggler" onClick={mobileTogglerHandler}><FontAwesomeIcon icon={faBars} /></div>
                        <nav className={"thunder-nav " + (condition === true ? 'nav-show' : '')}>
                            <Link onClick={hideMobileMenu} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                            <Link onClick={hideMobileMenu} to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                            <Link onClick={hideMobileMenu} to="food" spy={true} smooth={true} offset={-70} duration={500}>Food</Link>
                            <Link onClick={hideMobileMenu} to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                        </nav>
                    </div>


                   </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;