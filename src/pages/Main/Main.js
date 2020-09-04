import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import About from '../../components/About';
import Contact from '../../components/Contact';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.createPath = this.createPath.bind(this);
  }

  // Function to Create SVG Animation
  createPath(component, extraLength, offset, speed) {
    // Get a reference to the <path>
    const path = document.querySelector(`#${component}-path`);
    // console.log(path);

    let widthOutput = document.documentElement.clientWidth;
    // console.log(`initial value: ${widthOutput}`);


    // Get length of path... ~577px in this case
    let pathLength = path.getTotalLength() + (widthOutput + extraLength);
    // console.log(`initial path length: ${pathLength}`);
    
    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;
    
    path.getBoundingClientRect();

    // Determines ScreenWidth When Window is Resized
    // window.addEventListener('resize', function(e) {
    //   widthOutput = document.documentElement.clientWidth;
    //   pathLength = path.getTotalLength() + (widthOutput + extraLength);
    //   path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    //   // Offset the dashes so the it appears hidden entirely
    //   path.style.strokeDashoffset = pathLength;
    //   path.getBoundingClientRect();
    //   // console.log(`updated path length: ${pathLength}`);
    //   return pathLength;
    // })


    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    // console.log(`path length on scroll?: ${pathLength}`)
    
    // What % down is it? 
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log(scrollPercentage);
    
    // Offset scrollPercentage Based on Component Location
    let scrollOffset = scrollPercentage - offset;
        
    // Length to offset the dashes
    let drawLength = (pathLength * scrollOffset) * speed;
    // console.log(drawLength);
      
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
        
    // When complete, remove the dash array, otherwise shape isn't quite sharp
    if (scrollPercentage >= .99) {
      path.style.strokeDasharray = 'none';  
    } else {
      path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    };
  });
}

  render() {
    // Destructuring Props
    const { isMobile, activeTab } = this.props;
    return (
      <div className={styles.Main}>
        <Hero createPath={this.createPath} />
        {/* Conditionally Render Components If On Mobile Device */}
        {(isMobile && activeTab === 'services') ? <Services createPath={this.createPath} /> : (!isMobile ? <Services createPath={this.createPath} /> : null)}
        {(isMobile && activeTab === 'about') ? <About createPath={this.createPath} /> : (!isMobile ? <About createPath={this.createPath} /> : null)}
        {(isMobile && activeTab === 'contact') ? <Contact createPath={this.createPath} /> : (!isMobile ? <Contact createPath={this.createPath} /> : null)}
      </div>
    )
  }
}

Main.propTypes = {
  isMobile: PropTypes.bool,
  activeTab: PropTypes.string
};

// Main.defaultProps = {};
