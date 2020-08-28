import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends React.Component {
  componentDidMount() {
    // Get a reference to the <path>
    const contactPath = document.querySelector('#contact-path');

    // let heightOutput = document.documentElement.clientHeight;
    let widthOutput = document.documentElement.clientWidth;


    // Get length of path... ~577px in this case
    let pathLength = contactPath.getTotalLength() + (widthOutput + 500);

    // Make very long dashes (the length of the path itself)
    contactPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    // Offset the dashes so the it appears hidden entirely
    contactPath.style.strokeDashoffset = pathLength;

    contactPath.getBoundingClientRect()

    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
    
      // What % down is it? 
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      console.log(scrollPercentage);
      
      let scrollOffset = scrollPercentage - .50;

      // Length to offset the dashes
      let drawLength = (pathLength * scrollOffset) * 3 ;
      
      // Draw in reverse
      contactPath.style.strokeDashoffset = pathLength - drawLength;
        
      // When complete, remove the dash array, otherwise shape isn't quite sharp
      if (scrollPercentage >= .99) {
        contactPath.style.strokeDasharray = 'none';
        
      } else {
        contactPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      }
      
    });
  }
  render() {
    return (
      <div className={styles.Contact} id="contact">
          <h1>Contact</h1>
          <div className={styles.Contact__animation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100.6 107.6" id="-svg" className={styles.Contact__svg} >
                <path vectorEffect="non-scaling-stroke" id='contact-path' className={styles.Contact__path} fill="none" strokeWidth="3" stroke="#000" 
                  d="M0,2h75V55h26" />
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

// Contact.propTypes = {};

// Contact.defaultProps = {};
