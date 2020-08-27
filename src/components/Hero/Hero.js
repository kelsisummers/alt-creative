import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Hero.module.scss';


export default class Hero extends React.Component {
    componentDidMount() {
    // Get a reference to the <path>
    const heroPath = document.querySelector('#hero-path');

    // let heightOutput = document.documentElement.clientHeight;
    let widthOutput = document.documentElement.clientWidth;
    // console.log(`initial value: ${heightOutput} & ${widthOutput}`);


    // Get length of path... ~577px in this case
    let pathLength = heroPath.getTotalLength() + (widthOutput + 5000);

    // Make very long dashes (the length of the path itself)
    heroPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    // Offset the dashes so the it appears hidden entirely
    heroPath.style.strokeDashoffset = pathLength;

    heroPath.getBoundingClientRect()

    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    
      // What % down is it? 
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
      // Length to offset the dashes
      let drawLength = (pathLength * scrollPercentage) * 5;
      
      // Draw in reverse
      heroPath.style.strokeDashoffset = pathLength - drawLength;
        
      // When complete, remove the dash array, otherwise shape isn't quite sharp
      if (scrollPercentage >= .99) {
        heroPath.style.strokeDasharray = 'none';
        
      } else {
        heroPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      }
      
    });
  }

  render() {
    return(
      <div className={styles.Hero}>
        <div className={styles.Hero__animation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="hero-svg" className={styles.Hero__svg} >
              <path vectorEffect="non-scaling-stroke" id='hero-path' fill="none" strokeWidth="3" stroke="#000" 
              d="M90,15v-14H2v21h100" />
          </svg>
        </div>
        <div className={styles.Hero__copy}>
          <div className="test">
          <h1>alt creative</h1>
          </div>
          <h2>creative work to empower the collective.</h2>
        </div>
      </div>
    )
  }
};
