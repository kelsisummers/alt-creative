import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends Component {

  handleClick = this.handleClick.bind(this);

  // When Component Mounts
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;
    // Calls createPath Animation Function
    createPath('contact', 1000, .7, 3);

    // Resizes SVG Animation + Throttle
    window.addEventListener('resize', createPath('contact', 500, .7, 3));
  }

  async handleClick(e){
    e.preventDefault();
    const form = document.querySelector('form');
    
    if(!form.checkValidity()) {
      const errors = document.querySelectorAll('input:invalid');
      const err = document.querySelector('textarea:invalid');
      if (errors) {
        errors.forEach((element) => {
          element.setAttribute("style", "border: 1px solid red");
        })
      }
      if (err) { 
        err.setAttribute('style', 'border: 1px solid red');
      }
    } 
    // else {
    //   const name = document.getElementById('name').value;
    //   const email = document.getElementById('email').value;
    //   const subject = document.getElementById('subject').value;
    //   const message = document.getElementById('message').value;
    // }

  }
  render() {
    return (
      <div className={styles.Contact} id="contact">
          <h1>Contact</h1>
          <div className={styles.Contact__animation}>
              <svg xmlns="http://www.w3.org/2000/svg" height='100%' width="100%" viewBox="0 0 100.6 107.6" preserveAspectRatio="none" id="contact-svg" className={styles.Contact__svg} >
                <path vectorEffect="non-scaling-stroke" id='contact-path' className={styles.Contact__path} fill="none" strokeWidth="3" stroke="#000" 
                  d="M0,2h75V78h30" />
              </svg>
          </div>
          <h2>work with us</h2>
          <form action="https://hooks.zapier.com/hooks/catch/7695150/oa0y361/" method="post">

            <label htmlFor="name">Name</label>
            <input type="text" required autoComplete="on" id="name" name="name" placeholder="Name" />

            <label htmlFor="email">Email</label>
            <input type="email" required autoComplete="on" id="email" name="email" placeholder="Email" />

            <label htmlFor="subject">Subject</label>
            <input type="text" required autoComplete="off" id="subject" name="subject" placeholder="Subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" required autoComplete="off" name="message" placeholder="Type message here"></textarea>

            <button onClick={this.handleClick}>Send</button>
          </form>
      </div>
    );
  }
}

Contact.propTypes = {
  createPath: PropTypes.func
};

// Contact.defaultProps = {};
