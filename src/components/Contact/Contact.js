import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

export default class Contact extends Component {
  state = {
    executed: false,
    success: false,
    error: '',
    form: {
      name: '',
      replyto: '',
      subject: '',
      message: '',
    },
  };

  // When Component Mounts
  componentDidMount(props) {
    // Destructuring Props
    const { createPath } = this.props;
    // Calls createPath Animation Function
    createPath('contact', 2000, .7, 2);

    // Resizes SVG Animation
    window.addEventListener('resize', createPath('contact', 2000, .7, 2));
  }

  checkError(fieldID) {

    const input = document.getElementById(fieldID);
    const findError = input.checkValidity();
    let errorMSG = document.getElementById(`${fieldID}-error`);
    let errorText;

    if (!findError && !errorMSG) {
      const span = document.createElement('span');
      span.id = `${fieldID}-error`;
      span.classList.add(styles.Contact__inputErrors);
      input.after(span);
      input.style.border = "1px solid #cc0000";
      errorMSG = document.getElementById(`${fieldID}-error`);
      errorText = input.validationMessage;
      errorMSG.innerText = errorText;
    } else if (findError && errorMSG) {
        errorMSG.remove();
        input.style.border = '1px solid #ccc'
    } else if (!findError && errorMSG) {
      errorMSG = document.getElementById(`${fieldID}-error`);
      errorText = input.validationMessage;
      errorMSG.innerText = errorText;
    } else {
      input.style.border = '1px solid #ccc'
    }
  }

  validateForm(formData) {

    let valid = true;
    Object.keys(formData).map(field => {
      if (!formData[field]) {
        valid = false;
      }
    });

    const form = document.getElementById('contact-form');
    const errArr = [];
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

    return valid
  }

  async submitForm(e) {

    if (!this.validateForm(this.state.form)) {
      this.setState({ error: 'Please fill out required inputs' })
      return;
    }

    const url = 'https://formspree.io/mwkweeep';
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(this.state.form);

    console.log('Have request to send to formspree: ', this.state.form);

    let res;
    try {

      res = await fetch(url, { method, headers, body });
    } catch(err) {

      console.log('Error sending request to formspree: ', err);
      this.setState({ error: 'Ooops! There was an error.' });
      return;
    }

    if (res.status !== 200) {

      console.log('Error sending request to formspree: ', res);
      this.setState({ error: 'Ooops! There was an error.' });
      return;
    }

    this.setState({ success: true, error: '' });
  }

  handleFieldChange(fieldName, value) {

    const { form } = this.state;
    const newForm = { ...form, [fieldName]: value };
    this.setState({ form: newForm });
  }

  render() {

    return (
      <div className={styles.Contact} id="contact">
          <h1>Contact</h1>
          <div className={styles.Contact__animation}>
              <svg xmlns="http://www.w3.org/2000/svg" height='100%' width="100%" viewBox="0 0 100.6 107.6" preserveAspectRatio="none" id="contact-svg" className={styles.Contact__svg} >
                <path vectorEffect="non-scaling-stroke" id='contact-path' className={styles.Contact__path} fill="none" strokeWidth="3" stroke="#000"
                  d="M0,2h75V80h30" />
              </svg>
          </div>
          <h2 id="subtext">work with us</h2>

          <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.Contact__inputs}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => this.handleFieldChange('name', e.target.value)}
                onBlur={() => this.checkError('name')}
                required
                autoComplete="on"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) => this.handleFieldChange('replyto', e.target.value)}
                onBlur={() => this.checkError('email')}
                required
                autoComplete="on"
                id="email"
                name="_replyto"
                placeholder="Email"
              />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                onChange={(e) => this.handleFieldChange('subject', e.target.value)}
                onBlur={() => this.checkError('subject')}
                required
                autoComplete="off"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className={styles.Contact__inputs}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                onChange={(e) => this.handleFieldChange('message', e.target.value)}
                onBlur={() => this.checkError('message')}
                required
                autoComplete="off"
                name="message"
                placeholder="Type message here" />
              <input type="text" name="_gotcha" style={{display:"none"}} />
            </div>

            {this.state.success && <p>Thanks! We'll be in touch.</p>}
            {this.state.error && <p className={styles.Contact__formError}>{this.state.error}</p>}

            <button onClick={() => this.submitForm()} disabled={this.state.success} id='submit-button'>Send</button>
          </form>
      </div>
    );
  }
}

Contact.propTypes = {
  createPath: PropTypes.func
};

// Contact.defaultProps = {};
