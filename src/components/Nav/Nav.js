import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import { Link } from 'react-scroll'


const Nav = (props) => {
  // Destructing Props
  const { checkMobile, isMobile, handleClick, activeTab } = props;
  
  function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,1000,event);
    };
  }

  // // Calls checkMobile() Function on Page Load
  // window.addEventListener('load', function(e){
  //   checkMobile();
  // });
  
  // // Calls checkMobile() Function When Screen is Resized
  // window.addEventListener('resize', debounce(function(e){
  //   checkMobile();
  // }));

  // Default Styles for Services Link on Mobile
  const style = {
    color: 'black',
    textDecoration: 'underline'
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
            {/* Active Tab Styling for Default Link on Mobile */}
            {isMobile && activeTab === 'services' ? 
            <Link href="#services"  activeClass={styles.Nav__links_active } to="services" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
            <span style={style}>Services</span></Link>
            : 
            <Link href="#services" activeClass={styles.Nav__links_active } to="services" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Services</Link>}
          </li>
          <li>
            <Link href="#about" activeClass={styles.Nav__links_active } to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>About</Link> 
          </li>
          <li>
            <Link href="#contact" activeClass={styles.Nav__links_active } to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>Contact</Link>
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