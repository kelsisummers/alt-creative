import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Services.module.scss';


export default class Services extends Component {
  // When Component Mounts
  componentDidMount(props) {
    // Destructure Props
    const { createPath } = this.props; 
    // Calls createPath Animation Function
    createPath('services', 5000, .11, 2.7);
    
    // Resizes SVG Animation + Throttle
    window.addEventListener('resize', createPath('services', 5000, .11, 2.7));
  }
  render() {
    return (
      <div className={styles.Services} id="services">
      <div className={styles.Services__container}>
        <h1 className={styles.Services__header}>Services</h1>
        <div className={styles.Services__copy}>
          <span className={styles.Services__copy_col}>
            <h2>User Experience Design</h2>
            <p>Synthesizing user data and stakeholder objectives, we design seamless, intuitive user experiences with measurable success metrics.</p>
          </span>
          <span className={styles.Services__copy_col}>
            <h2>User Interface Design</h2>
            <p>Utilizing color palettes, typography, iconography, and grid layout, we ensure your business’s brand identity is represented in all aspects of a product's design. </p>
          </span>
          <span className={styles.Services__copy_col}> 
            <h2>Frontend Web Development</h2>
            <p>Leveraging the latest frontend technologies or template solutions, we create mobile-friendly, accessible web interfaces users love.</p>
          </span>
        </div>
      </div>
  
      <div className={styles.Services__animation}>
            <svg xmlns="http://www.w3.org/2000/svg"  height='100%' width="100%" viewBox="0 0 100.6 107.6" id="services-svg" preserveAspectRatio="none" className={styles.Services__svg} >
                <path vectorEffect="non-scaling-stroke" id='services-path' className={styles.Services__path} fill="none" strokeWidth="3" stroke="#000" 
                d="M0,16h16V60h90" />
            </svg>
      </div>
    </div>
    );
  };
};

Services.propTypes = {
  createPath: PropTypes.func,
};

// Services.defaultProps = {};