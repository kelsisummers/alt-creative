import React from 'react';
// import PropTypes from 'prop-types';
import styles from './About.module.scss';

const About = () => (
  <div className={styles.About} id="about">
    <div className={styles.About__header}>
      <h1>About</h1>
    </div>
    <div className={styles.About__content}>
      <img src="../assets/headshot.png" alt="Founder Kelsi Summers" />
      <p>womxn-owned and run. specializing in creative services for web. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Pulvinar etiam non quam lacus suspendisse faucibus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Fusce ut placerat orci nulla pellentesque dignissim enim..</p>
    </div>
  </div>
);

// About.propTypes = {};

// About.defaultProps = {};

export default About;
