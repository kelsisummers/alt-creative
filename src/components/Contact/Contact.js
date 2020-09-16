import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends Component {
  state = {
    status: "",
    executed: false
  };

  checkError = this.checkError.bind(this);
  submitForm = this.submitForm.bind(this);

  // When Component Mounts
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;
    // Calls createPath Animation Function
    createPath('contact', 1000, .7, 3);

    // Resizes SVG Animation
    window.addEventListener('resize', createPath('contact', 5000, .7, 3));
  }

  checkError(e) {
    const id = e.target.getAttribute('id');
    const input = document.getElementById(id);
    const findError = input.checkValidity();
    let errorMSG = document.getElementById(`${id}-error`);
    let errorText;

    if (!findError && !errorMSG) {
      const span = document.createElement('span');
      span.id = `${id}-error`;
      span.classList.add(styles.Contact__inputErrors);
      input.after(span);
      input.style.border = "1px solid #cc0000";
      errorMSG = document.getElementById(`${id}-error`);
      errorText = input.validationMessage;
      errorMSG.innerText = errorText;
    } else if (findError && errorMSG) {
        errorMSG.remove();
        input.style.border = '1px solid #ccc'
    } else if (!findError && errorMSG) {
      errorMSG = document.getElementById(`${id}-error`);
      errorText = input.validationMessage;
      errorMSG.innerText = errorText;
    } else {
      input.style.border = '1px solid #ccc'
    }
  }


  submitForm(e) {
    const form = document.getElementById('contact-form');
    const error = form.checkValidity();
    let errArr = [];
    console.log(errArr)
    const formErr = document.getElementById('form-error');
    if (!error && !formErr) {
      const list = form.querySelectorAll(':invalid');
      for (const item of list) {
        let err = item.validationMessage;
        errArr.push(err)
        console.log(errArr)
        item.style.border = '1px solid #cc0000'
      }
      if (errArr.includes('Please fill out this field.')) {
        const button = document.getElementById('submit-button');
        const p = document.createElement('p');
        p.id = "form-error"
        p.classList.add(styles.Contact__formError);
        p.innerText = "Please fill out required inputs.";
        button.after(p);
        errArr = [];
        console.log(errArr)
      }
    } else if (!error && formErr) {
      errArr = [];
      console.log(errArr)
      formErr.innerText = "There's still an error."
      const list = form.querySelectorAll(':invalid');
      for (const item of list) {
        let err = item.validationMessage;
        errArr.push(err)
        item.style.border = '1px solid #cc0000'
      }
      const fixed = form.querySelectorAll(':valid');
      for (const item of fixed) {
        item.style.border = '1px solid #ccc'
      }
      console.log(errArr)
    } else if (error && formErr) {
      formErr.remove();
      errArr = [];
      console.log(errArr)
      const list = form.querySelectorAll(':valid');
      for (const item of list) {
        item.style.border = '1px solid #ccc'
      }
    } 
    e.preventDefault();
    // const data = new FormData(form);
    // const xhr = new XMLHttpRequest();
    // xhr.open(form.method, form.action);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //   if (xhr.status === 200) {
    //     form.reset();
    //     this.setState({ status: "SUCCESS" });
    //   } else {
    //     this.setState({ status: "ERROR" });
    //   }
    // };
    // xhr.send(data);
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
          <h2 id="subtext">work with us</h2>
          <form id="contact-form" action="https://formspree.io/mwkweeep" method="post">
            <div className={styles.Contact__inputs}>
              <label htmlFor="name">Name</label>
              <input type="text" onBlur={this.checkError} required autoComplete="on" id="name" name="name" placeholder="Name" />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="email">Email</label>
              <input type="email" onBlur={this.checkError} required autoComplete="on" id="email" name="_replyto" placeholder="Email" />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="subject">Subject</label>
              <input type="text" onBlur={this.checkError} required autoComplete="off" id="subject" name="subject" placeholder="Subject" />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="message">Message</label>
              <textarea id="message" onBlur={this.checkError} required autoComplete="off" name="message" placeholder="Type message here"></textarea>
              <input type="text" name="_gotcha" style={{display:"none"}} />
            </div>

            {status === "SUCCESS" ? <p>Thanks! We'll be in touch.</p> : <button onClick={this.submitForm} type="submit" id='submit-button'>Send</button> }
            {status === "ERROR" && <p className={styles.Contact__formError}>Ooops! There was an error.</p>}
          </form>
      </div>
    );
  }
}

Contact.propTypes = {
  createPath: PropTypes.func
};

// Contact.defaultProps = {};
