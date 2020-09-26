import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Services.module.scss';


export default class Services extends Component {
  // When Component Mounts
  componentDidMount(props) {
    // Destructure Props
    const { createPath } = this.props; 
    // Calls createPath Animation Function
    createPath('services', 5000, .2, 1.5);
    
    // Resizes SVG Animation
    window.addEventListener('resize', createPath('services', 5000, .2, 1.5));
  }
  render() {
    return (
      <div className={styles.Services} id="services">
      <div className={styles.Services__container}>
        <h1 className={styles.Services__header}>Services</h1>
        <div className={styles.Services__copy}>
          <span className={styles.Services__copy_col}>
            <h2>Product Research</h2>
            <p>From ideation to deployment, we work with our clients to determine a strategy for optimizing the tech to fit your business and user needs.</p>
            <ul>
              <li>User Interviews</li>
              <li>User Surveys</li>
              <li>Analytics Strategy and/or Analysis</li>
              <li>Competitive Analysis</li>
              <li>Opportunity Assessment</li>
              <li>Development Feasability</li>
              <li>Target Audience Research</li>
              <li>Product/Market Fit</li>
              <li>MVP Determination</li>
            </ul>
          </span>
          <span className={styles.Services__copy_col}>
            <h2>UX/UI Design</h2>
            <p>We refine the user experience and user interface to ensure an intuitive, seamless user journey that aligns with your business's brand.</p>
            <ul>
              <li>User Personas</li>
              <li>User Flows</li>
              <li>Sitemaps</li>
              <li>Information Architecture</li>
              <li>Low-Fidelity Wireframes</li>
              <li>UI Style Kit</li>
              <li>High-Fidelity User Interface Design</li>
              <li>Interactive Prototypes</li>
              <li>User Testing</li>
            </ul>
          </span>
          <span className={styles.Services__copy_col}> 
            <h2>Frontend Web Development</h2>
            <p>Leveraging the latest frontend technologies or template solutions, we create mobile-friendly, accessible web interfaces users love.</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>Squarespace</li>
              <li>Shopify</li>
              <li>Wordpress</li>
            </ul>
          </span>
        </div>
      </div>
  
      <div className={styles.Services__animation}>
            <svg xmlns="http://www.w3.org/2000/svg"  height='100%' width="100%" viewBox="0 0 100.6 107.6" id="services-svg" preserveAspectRatio="none" className={styles.Services__svg} >
                <path vectorEffect="non-scaling-stroke" id='services-path' className={styles.Services__path} fill="none" strokeWidth="3" stroke="#000" 
                d="M0,16h16V82h90" />
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