import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends React.Component {
  // When Component Mounts
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;

    // Calls createPath Animation Function
    createPath('contact', 500, .7, 3);
  }
  render() {
    return (
      <div className={styles.Contact} id="contact">
          <h1>Contact</h1>
          <div className={styles.Contact__animation}>
              <svg xmlns="http://www.w3.org/2000/svg" height='100%' width="100%" viewBox="0 0 100.6 107.6" preserveAspectRatio="none" id="contact-svg" className={styles.Contact__svg} >
                <path vectorEffect="non-scaling-stroke" id='contact-path' className={styles.Contact__path} fill="none" strokeWidth="3" stroke="#000" 
                  d="M0,2h75V89h30" />
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
