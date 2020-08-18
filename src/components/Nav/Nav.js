import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

const Nav = () => (
  <div className={styles.Nav}>
    <nav>
      <a href="/" className={styles.Nav__logo}>
        <img src="../assets/logo.png"  alt="Alt Creative Logo" />
      </a>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
);

// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;
