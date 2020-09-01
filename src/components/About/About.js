import React from 'react';
// import PropTypes from 'prop-types';
import styles from './About.module.scss';

export default class About extends React.Component {
  componentDidMount() {
    // Get a reference to the <path>
    const aboutPath = document.querySelector('#about-path');

    // let heightOutput = document.documentElement.clientHeight;
    let widthOutput = document.documentElement.clientWidth;


    // Get length of path... ~577px in this case
    let pathLength = aboutPath.getTotalLength() + (widthOutput + 25000);

    // Make very long dashes (the length of the path itself)
    aboutPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    // Offset the dashes so the it appears hidden entirely
    aboutPath.style.strokeDashoffset = pathLength;

    aboutPath.getBoundingClientRect();

    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    
      // What % down is it? 
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      // console.log(scrollPercentage);
      
      let scrollOffset = scrollPercentage - .30;

      // Length to offset the dashes
      let drawLength = (pathLength * scrollOffset) ;
      
      // Draw in reverse
      aboutPath.style.strokeDashoffset = pathLength - drawLength;
        
      // When complete, remove the dash array, otherwise shape isn't quite sharp
      if (scrollPercentage >= .99) {
        aboutPath.style.strokeDasharray = 'none';
        
      } else {
        aboutPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      }
      
    });
  }
  render(){
    return (
      <div className={styles.About} id="about">
        <h1 className={styles.About__header}>About</h1>
        <div className={styles.About__animation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="about-svg" className={styles.About__svg} >
            <path vectorEffect="non-scaling-stroke" id='about-path' className={styles.About__path} fill="none" strokeWidth="3" stroke="#000" 
              d="M0,25h5.5V5.5h52.5V20h50" />
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

// About.propTypes = {};

// About.defaultProps = {};

// export default About;
