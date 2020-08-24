import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Services.module.scss';


const Services = () => (
  <div className={styles.Services} id="services">
    <h1 className={styles.Services__header}>Services</h1>
    <div className={styles.Services__container}>
      <div className={styles.col}>
        <h2>User Experience Design</h2>
        <p>Pretending to code on this thing to see if it's worth keeping. It's awful small. But not smaller than what I have been using. And the keyboard on the macpro was kind of a pain in the ass. But that was mostly because of the stupid touchbar along the top. Real lame.</p>
      </div>
      <div className={styles.col}>
        <h2>User Interface Design</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
      </div>
      <div className={styles.col}> 
        <h2>Frontend Web Development</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
      </div>
    </div>
  </div>
);

// Services.propTypes = {};

// Services.defaultProps = {};

export default Services;


// Line animation starter code

// CSS
// const animation = {
//   position: "fixed",
//   top: "250px",
//   left: "0",
//   width: "100%",
//   height: "100px",
//   margin: "-75px 0 0 -75px",
//   zIndex: "-1"
// }

// Javascript
//   componentDidMount() {
//     // Get a reference to the <path>
//     let path = document.querySelector('#star-path');

//     // Get length of path... ~577px in this case
//     let pathLength = path.getTotalLength();

//     // Make very long dashes (the length of the path itself)
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//     // Offset the dashes so the it appears hidden entirely
//     path.style.strokeDashoffset = pathLength;

//     // Jake Archibald says so
//     // https://jakearchibald.com/2013/animated-line-drawing-svg/
//     path.getBoundingClientRect()

//     // When the page scrolls...
//     window.addEventListener("scroll", function(e) {
    
//       // What % down is it? 
//       // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
//       // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
//       let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
//       // Length to offset the dashes
//       let drawLength = pathLength * scrollPercentage;
      
//       // Draw in reverse
//       path.style.strokeDashoffset = pathLength - drawLength;
        
//       // When complete, remove the dash array, otherwise shape isn't quite sharp
//       // Accounts for fuzzy math
//       if (scrollPercentage >= 0.99) {
//         path.style.strokeDasharray = "none";
        
//       } else {
//         path.style.strokeDasharray = pathLength + ' ' + pathLength;
//       }
      
//     });
//   }
