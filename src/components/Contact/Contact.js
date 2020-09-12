import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends Component {
  state = {
    status: ""
  };

  submitForm = this.submitForm.bind(this);

  // When Component Mounts
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;
    // Calls createPath Animation Function
    createPath('contact', 1000, .7, 3);

    // Resizes SVG Animation + Throttle
    window.addEventListener('resize', createPath('contact', 5000, .7, 3));
  }

  submitForm(ev) {
    let form = document.getElementById('contact-form');
    ev.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
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
          <form id="contact-form" action="https://formspree.io/mwkweeep" method="post">

            <label htmlFor="name">Name</label>
            <input type="text" required autoComplete="on" id="name" name="name" placeholder="Name" />

            <label htmlFor="email">Email</label>
            <input type="email" required autoComplete="on" id="email" name="_replyto" placeholder="Email" />

            <label htmlFor="subject">Subject</label>
            <input type="text" required autoComplete="off" id="subject" name="subject" placeholder="Subject" />

            <label htmlFor="message">Message</label>
            <textarea id="message" required autoComplete="off" name="message" placeholder="Type message here"></textarea>
            <input type="text" name="_gotcha" style={{display:"none"}} />

            {status === "SUCCESS" ? <p>Thanks! We'll be in touch.</p> : <button onClick={this.submitForm} type="submit">Send</button> }
            {status === "ERROR" && <p className={styles.Contact__error}>Ooops! There was an error.</p>}
          </form>
      </div>
    );
  }
}

Contact.propTypes = {
  createPath: PropTypes.func
};

// Contact.defaultProps = {};
