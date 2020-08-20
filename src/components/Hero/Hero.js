import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

const Hero = () => {
  window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
  });
  return (
  <div className={styles.Hero}>
    <h1>alt creative</h1>
    <h2>creative work to empower the collective.</h2>
  </div>
);
  }
// Hero.propTypes = {};

// Hero.defaultProps = {};

export default Hero;
