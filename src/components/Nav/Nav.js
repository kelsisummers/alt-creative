import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

const Nav = () => (
  <div className={styles.Nav}>
    <nav>
      <div class={styles.Nav__logo}>
        <a href="/">
          <img src="../assets/logo.png"  alt="Alt Creative Logo" />
        </a>
      </div>
      <div>
        <ul class={styles.Nav__links}>
          <li><a class="services__link" href="#services">Services</a></li>
          <li><a class="about__link" href="#about">About</a></li>
          <li><a class="contact__link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;
