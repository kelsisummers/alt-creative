import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends React.Component {
  // When Component Mounts
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
        case (componentWidth <= 1440 && componentWidth > 1300):
          updatedPath = 'M0,2h75V45h30';
          break;
        case (componentWidth <= 1300 && componentWidth > 900):
          updatedPath = 'M0,2h75V50h30';
          break;
        case (componentWidth < 900):
          updatedPath = 'M0,2h75V75h30';
          break;
        default :
          updatedPath = ("M0,2h75V40h30")
      }
      if (componentWidth > 768) {
        document.getElementById('contact-path').setAttribute('d', updatedPath);
      }
    }

    // Set SVG Path On Page Load
    window.onload = svgPath(componentWidth);

    // When Window is Resized...
    // window.addEventListener('resize', function(e) {
    //   // Update Component Width
    //   componentWidth = document.documentElement.clientWidth;
    //   // console.log(`updated width: ${componentWidth}`);

    //   // Update Path Depending on Component Width
    //   svgPath(componentWidth);
    // });

    // Calls createPath Animation Function
    createPath('contact', 500, .7, 3);
  }
  render() {
    return (
      <div className={styles.Contact} id="contact">
          <h1>Contact</h1>
          <div className={styles.Contact__animation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100.6 107.6" id="-svg" className={styles.Contact__svg} >
                <path vectorEffect="non-scaling-stroke" id='contact-path' className={styles.Contact__path} fill="none" strokeWidth="3" stroke="#000" 
                  d="M0,2h75V40h30" />
              </svg>
          </div>
          <h2>work with us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type message here"></textarea>
            <input type="submit" value="Send" />
          </form>
      </div>
    );
  }
}

Contact.propTypes = {
  createPath: PropTypes.func
};

// Contact.defaultProps = {};
