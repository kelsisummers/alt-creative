import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import { Link } from 'react-scroll'


const Nav = () => (
  <div className={styles.Nav}>
    <nav>
      <div className={styles.Nav__logo}>
        <a href="/">
          <img src="../assets/logo.svg"  alt="Alt Creative Logo" />
        </a>
      </div>
      <div className={styles.Nav__links}>
        <ul>
          <li>
            <Link href="#services" activeClass={styles.Nav__links_active } to="services" spy={true} smooth={true} offset={50} duration={500} >
            Services</Link>
          </li>
          <li>
            <Link href="#about" activeClass={styles.Nav__links_active } to="about" spy={true} smooth={true} offset={50} duration={500} >
              About</Link>
          </li>
          <li>
            <Link href="#contact" activeClass={styles.Nav__links_active } to="contact" spy={true} smooth={true} offset={50} duration={500} >
            Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);


// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;