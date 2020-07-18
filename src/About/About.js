import React from 'react';
import './About.scss';
import BurgerMaster from '../images/masterburger.jpg';
import Truck from '../images/thundertruckabout.jpg';
import Burgers from '../images/burgersabout.jpg';

function About(){
    return(
        <section id="about" className="about-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 welcome">
                        <div className="welcome-wrapper">
                            <div className="photo-about">
                                <img src={Truck} alt="Truck" />
                            </div>
                            <div className="text-about">
                                <h2>Thunder Truck</h2>
                                <p>Vårt uppdrag är att ge våra kunder den högsta kvaliten i denna amerikanska hamburgare inspirerad av amerikansk kök. Mentaliteten av Thunder Truck är enkel, vi bjuder högst kvalitet och samtidigt vi arbetar i en ren miljö och serverar den färsk.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 masterburger">
                        <div className="masterburger-wrapper">
                            <div className="photo-about">
                                <img src={BurgerMaster} alt="Vasilis Panolis" />
                            </div>
                            <div className="text-about">
                                <h2>Master Burger</h2>
                                <p>Passionen för färsk och högt kvalitet hamburgare och kundernas glädje inspirerar oss varje dag. Vi serverar inte bara snabbmat, vi serverar den färskaste snabbmat i staden.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 burgers-town">
                        <div className="burgers-town-wrapper">
                            <div className="photo-about">
                                <img src={Burgers} alt="Vasilis Panolis" />
                            </div>
                            <div className="text-about">
                                <h2>Best Burgers in Town</h2>
                                <p>Vi lagar våra hamburgare av färsk högrev varje dag. Våra hamburgare är välsmakande, saftiga och messy som varje rätt hamburgare borde vara.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;