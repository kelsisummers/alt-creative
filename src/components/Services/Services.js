import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Services.module.scss';


export default class Services extends React.Component {
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;

    // Initialize Variable for Resized SVG Path
    let updatedPath;

    // Get Component Width
    let componentWidth = document.documentElement.clientWidth;
    // console.log(componentWidth)

    // Responsive SVG Paths
    const svgPath = (componentWidth) => {
      switch (true) {
        case (componentWidth <= 1440 && componentWidth > 1024):
          updatedPath = 'M0,12h14V25h90';
          break;
        case (componentWidth <= 1024 && componentWidth > 900):
          updatedPath = 'M0,8h14V25h90';
          break;
        case (componentWidth <= 900 && componentWidth > 800):
          updatedPath = 'M0,8h14V28h90';
          break;
        case (componentWidth <= 800):
          updatedPath = 'M0,4h17V38h90';
          break;
        default :
          updatedPath = ("M0,16h14V25h90")
      }
      // console.log(updatedPath);
      document.getElementById('services-path').setAttribute('d', updatedPath);
    }
    
    // Set SVG Path On Page Load
    window.onload = svgPath(componentWidth);

    // When Window is Resized...
    window.addEventListener('resize', function(e) {
      // Update Component Width
      componentWidth = document.documentElement.clientWidth;
      // console.log(`updated width: ${componentWidth}`);

      // Update Path Depending on Component Width
      svgPath(componentWidth);
    })
    
    // Calls createPath Animation Function
    createPath('services', 5000, .11, 2.7);
  }
  render() {
    return (
      <div className={styles.Services} id="services">
      <div className={styles.Services__container}>
        <h1 className={styles.Services__header}>Services</h1>
        <div className={styles.Services__copy}>
          <span className={styles.col}>
            <h2>User Experience Design</h2>
            <p>Pretending to code on this thing to see if it's worth keeping. It's awful small. But not smaller than what I have been using. And the keyboard on the macpro was kind of a pain in the ass. But that was mostly because of the stupid touchbar along the top. Real lame.</p>
          </span>
          <span className={styles.col}>
            <h2>User Interface Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
          </span>
          <span className={styles.col}> 
            <h2>Frontend Web Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Vel pretium lectus quam id leo in vitae. Cras adipiscing enim eu turpis egestas pretium. Amet consectetur adipiscing elit duis.</p>
          </span>
        </div>
      </div>
  
      <div className={styles.Services__animation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="services-svg" className={styles.Services__svg} >
                <path vectorEffect="non-scaling-stroke" id='services-path' className={styles.Services__path} fill="none" strokeWidth="3" stroke="#000" 
                d="M0,16h14V25h90" />
            </svg>
      </div>
    </div>
    );
  };
};

// Services.propTypes = {};

// Services.defaultProps = {};