import React from 'react';
import ContactCSS from './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact(){
    return (
        <section id="contact" className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Contact</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.113262588198!2d17.63375751617217!3d59.897069672413245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcc45cb08f6b7%3A0x75f2bbc8645e5b39!2sVattholmav%C3%A4gen%2088%2C%20754%2040%20Uppsala%2C%20Sweden!5e0!3m2!1sen!2sus!4v1594217477288!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>Vi är belägna i den vackra Gamla Uppsala exakt mittemot Gamla Uppsala Kyrka med mycket parkeringsplats mittemot Thunder Truck för att stanna och njuta av våra mouth-watering hamburgare.</p>
                        <p class="location"><FontAwesomeIcon icon={faMapMarkedAlt} /> Vattholmavägen 88 Uppsala, Sweden 75440</p>
                        <p class="phone"><FontAwesomeIcon icon={faPhone} /> +46 76 906 89 42</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;