import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Services.module.scss';


const Services = () => (
  <div className={styles.Services} id="services">
    <div className={styles.Services__header}>
      <h1>Services</h1>
    </div>
    <div className={styles.Services__container}>
      <div className={styles.Services__col}>
        <h2>User Experience Design</h2>
        <p>Pretending to code on this thing to see if it's worth keeping. It's awful small. But not smaller than what I have been using. And the keyboard on the macpro was kind of a pain in the ass. But that was mostly because of the stupid touchbar along the top. Real lame.</p>
      </div>
      <div className={styles.Services__col}>
        <h2>User Interface Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
      </div>
      <div className={styles.Services__col}> 
        <h2>Frontend Web Development</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
      </div>
    </div>
  </div>
);

// Services.propTypes = {};

// Services.defaultProps = {};

export default Services;
