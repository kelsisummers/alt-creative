import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import { Link } from 'react-scroll'


const Nav = (props) => {
  const { isMobile } = props;
  
  // isMobile();



  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerText.toLowerCase());
    const target = e.target.innerText.toLowerCase();
    const element =  document.getElementById(target);

    switch(true) {
      case (target === 'services'):
        element.style.display = "flex"
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        break;
      case (target === 'about'):
        element.style.display = "flex"
        document.getElementById('services').style.display = 'none';
        document.getElementById('contact').removeAttribute('style');
        break;
      case (target === 'contact'):
        element.style.display = "flex"
        document.getElementById('services').style.display = 'none';
        document.getElementById('about').removeAttribute('style');
        break;
    }
  }
  return (
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
            <Link href="#services" activeClass={styles.Nav__links_active } to="services" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
            Services</Link>
          </li>
          <li>
            <Link href="#about" activeClass={styles.Nav__links_active } to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
              About</Link>
          </li>
          <li>
            <Link href="#contact" activeClass={styles.Nav__links_active } to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
            Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
};


// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav;