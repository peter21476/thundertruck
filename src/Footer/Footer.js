import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerCSS from './Footer.scss';
import TruckLogo from '../images/truck-logo.png';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <img class="img-fluid truck-logo" src={TruckLogo} alt="Thunder Truck" />
                    </div>
                    <div className="col-lg-6 text-center">
                    <p className="social"><a target="_blank" href="https://www.facebook.com/Thunder-Truck-Uppsala-104901301260603/"><FontAwesomeIcon icon={faFacebook} /></a> | <a target="_blank" href="https://www.instagram.com/thunder.truck.uppsala/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a></p>
                    <p>
                    Vattholmavägen 88 Uppsala<br />Sweden 75440</p>
                    <p>&copy;2020 - Thunder Truck</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;