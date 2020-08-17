import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Main.module.scss';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import About from '../../components/About';
import Contact from '../../components/Contact';

export default function Main() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

// Main.propTypes = {};

// Main.defaultProps = {};
