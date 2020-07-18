import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Food from './Food/Food';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="app-wrapper">
      <Navigation />
      <Hero title="home" dark="true" id="home" />
      <About title="about" dark="true" id="about" />
      <Food title="food" dark="true" id="food" />
      <Contact title="contact" dark="true" id="contact" />
      <Footer />
    </div>
  );
}

export default App;
