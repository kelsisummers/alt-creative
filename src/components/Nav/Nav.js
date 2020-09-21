import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import { Link } from 'react-scroll'
import logo from '../../assets/logo.svg';


const Nav = (props) => {
  // Destructing Props
  const { checkMobile, isMobile, handleClick, activeTab } = props;

  let throttled;
  // Calls checkMobile() Function on Page Load
  window.addEventListener('load', function(e){
    if (!throttled) {
      throttled = true;

      setTimeout(function() {
        throttled = false;
        checkMobile();
      }, 250);
    }
  });

  // Calls checkMobile() Function When Screen is Resized
  window.addEventListener('resize', function(e){
    if (!throttled) {
      throttled = true;

      setTimeout(function() {
        throttled = false;
        checkMobile();
      }, 250);
    }
  });


  return (
  <div className={styles.Nav}>
    <nav>
      <div className={styles.Nav__logo}>
        <a href="/">
          <img src={logo}  alt="Alt Creative Logo" />
        </a>
      </div>
      <div className={styles.Nav__links}>
        <ul>
          <li>
            {/* Active Tab Styling for Default Link on Mobile */}
            <Link href="#services" activeClass={styles.Nav__links_active } className={isMobile && activeTab == 'services' ? styles.Nav__mobile : null} to="services" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Services</Link>
          </li>
          <li>
          {isMobile && activeTab === 'about' ?
            <Link href="#about" activeClass={styles.Nav__links_active } className={styles.Nav__mobile}  to="about" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>About</Link>
            :
            <Link href="#about" activeClass={styles.Nav__links_active } to="about" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>About</Link>}
          </li>
          <li>
            {isMobile && activeTab === 'contact' ?
            <Link href="#contact" activeClass={styles.Nav__links_active } className={styles.Nav__mobile} to="contact" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Contact</Link>
            :
            <Link href="#contact" activeClass={styles.Nav__links_active } to="contact" spy={true} hashSpy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Contact</Link>}



          </li>
        </ul>
      </div>
    </nav>
  </div>
);
};


Nav.propTypes = {
  checkMobile: PropTypes.func,
  isMobile: PropTypes.bool,
  handleClick: PropTypes.func,
  activeTab: PropTypes.string
};

// Nav.defaultProps = {};

export default Nav;
