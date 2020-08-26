import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Services.module.scss';


export default class Services extends React.Component {
  componentDidMount() {
    // Get a reference to the <path>
    let path = document.querySelector('#services-path');

    let viewport = document.documentElement.clientWidth;

    console.log(viewport);

    // Get length of path... ~577px in this case
    let pathLength = path.getTotalLength() + (viewport + 100);

    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength ;
    console.log(pathLength)

    path.getBoundingClientRect()

    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    
      // What % down is it? 
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
      // Length to offset the dashes
      if (scrollPercentage >= .15) {
        let drawLength = (pathLength * scrollPercentage) * 4;
      
        // Draw in reverse
        path.style.strokeDashoffset = pathLength - drawLength;
      }
        
      // // When complete, remove the dash array, otherwise shape isn't quite sharp
      // if (scrollPercentage >= .99) {
      //   path.style.strokeDasharray = 'none';
        
      // } else {
      //   path.style.strokeDasharray = pathLength + ' ' + pathLength;
      // }
    });
  }
  render() {
    return (
      <div className={styles.Services} id="services">
      <div className={styles.Services__copy}>
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
  
      <div className={styles.Services__animation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="services-svg" className={styles.Hero__svg} >
                <path vectorEffect="non-scaling-stroke" id='services-path' className={styles.Services__path} fill="none" strokeWidth="3" stroke="#000" 
                d="M0,2h16V15h90" />
            </svg>
      </div>
    </div>
    );
  };
};
// Services.propTypes = {};

// Services.defaultProps = {};

// export default Services;


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
