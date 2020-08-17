import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.Contact} id="contact">
      <h1>Contact</h1>
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

// Contact.propTypes = {};

// Contact.defaultProps = {};

export default Contact;
