import React from 'react';
import PropTypes from 'prop-types';
import styles from './Services.module.scss';


export default class Services extends React.Component {
  // When Component Mounts
  componentDidMount(props) {
    // Destructure Props
    const { createPath } = this.props; 
    // Calls createPath Animation Function
    createPath('services', 5000, .11, 2.7);

    let throttled;
    // let timeout = false;
    // window.addEventListener('resize', function(e){
    //   clearTimeout(timeout);
    //   setTimeout(function() { 
    //     createPath('services', 5000, .11, 2.7)}, 5000);
    // });
    
    // Resizes SVG Animation + Throttle
    window.addEventListener('resize', function(e){
      if (!throttled) {
        throttled = true;
        setTimeout(function() {
          throttled = false;
          createPath('services', 5000, .11, 2.7);
        }, 250);
      } 
    });
  }
  render() {
    return (
      <div className={styles.Services} id="services">
      <div className={styles.Services__container}>
        <h1 className={styles.Services__header}>Services</h1>
        <div className={styles.Services__copy}>
          <span className={styles.Services__copy_col}>
            <h2>User Experience Design</h2>
            <p>Synthesizing user data and stakeholder objectives, I design seamless, intuitive user experiences with measurable success metrics. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. </p>
          </span>
          <span className={styles.Services__copy_col}>
            <h2>User Interface Design</h2>
            <p>Utilizing color palettes, typography, iconography, and grid layout, I ensure your business’s brand identity is represented in all aspects of a product's design. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium.</p>
          </span>
          <span className={styles.Services__copy_col}> 
            <h2>Frontend Web Development</h2>
            <p>Leveraging the latest frontend technologies or template solutions, I create mobile-friendly, accessible web interfaces users love.Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
          </span>
        </div>
      </div>
  
      <div className={styles.Services__animation}>
            <svg xmlns="http://www.w3.org/2000/svg"  height='100%' width="100%" viewBox="0 0 100.6 107.6" id="services-svg" preserveAspectRatio="none" className={styles.Services__svg} >
                <path vectorEffect="non-scaling-stroke" id='services-path' className={styles.Services__path} fill="none" strokeWidth="3" stroke="#000" 
                d="M0,16h16V75h90" />
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