import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';

export default class About extends React.Component {
  // When Component Mounts
  componentDidMount(props) {
    // Call createPath Animation Function
    const { createPath } = this.props;
    createPath('about', 25000, .3, 1);
  }
  render(){
    return (
      <div className={styles.About} id="about">
        <h1 className={styles.About__header}>About</h1>
        <div className={styles.About__animation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="about-svg" className={styles.About__svg} >
            <path vectorEffect="non-scaling-stroke" id='about-path' className={styles.About__path} fill="none" strokeWidth="3" stroke="#000" 
              d="M0,25h5.5V5.5h52.5V25h50" />
          </svg>
          </div>
        <div className={styles.About__content}>
          <img src="../assets/headshot.png" alt="Founder Kelsi Summers" />
          <p>womxn-owned and run. specializing in creative services for web. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Pulvinar etiam non quam lacus suspendisse faucibus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Fusce ut placerat orci nulla pellentesque dignissim enim..</p>
        </div>
      </div>
    );
  }
};

About.propTypes = {
  createPath: PropTypes.func,
};

// About.defaultProps = {};
