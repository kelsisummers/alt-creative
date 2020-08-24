import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.Hero}>
    <div className={styles.Hero__animation}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="star-svg" className={styles.Hero__svg} >
          <path vectorEffect="non-scaling-stroke" id='star-path' className={styles.Hero__path} fill="none" strokeWidth="3" stroke="#000" 
          d="M90,15v-14H2v21h100" />
      </svg>
    </div>
    <div className={styles.Hero__copy}>
      <h1>alt creative</h1>
      <h2>creative work to empower the collective.</h2>
    </div>

  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
