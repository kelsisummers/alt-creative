import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';
import headshot from '../../assets/headshot.png'

export default class About extends Component {
  // When Component Mounts
  componentDidMount(props) {
    // Call createPath Animation Function
    const { createPath } = this.props;
    // Calls createPath Animation Function
    createPath('about', 1000, .3);

    // Resizes SVG Animation
    window.addEventListener('resize', createPath('about', 20000, .3));
  }
  render(){
    return (
      <div className={styles.About} id="about">
        <h1 className={styles.About__header}>About</h1>
        <div className={styles.About__animation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="about-svg" className={styles.About__svg} >
            <path vectorEffect="non-scaling-stroke" id='about-path' className={styles.About__path} fill="none" strokeWidth="3" stroke="#000" 
              d="M0,30h5.5V5.5h52.5V20h50" />
          </svg>
          </div>
        <div className={styles.About__content}>
          <img src={headshot} alt="Founder Kelsi Summers" />
          <div>
          <p>the alternative solution. woman-owned and run. specializing in creative services for web.</p>
          <p>we aim to support and empower our clients through an empathic creative process.</p>
          </div>

        </div>
      </div>
    );
  }
};

About.propTypes = {
  createPath: PropTypes.func,
};

// About.defaultProps = {};
