import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
// import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
    // this.handleSetActive = this.handleSetActive.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
 
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  // handleSetActive = (to) => {
  //   console.log(to);
  // }

  render() {
    return (
      <div className={styles.Nav}>
        <nav>
          <div class={styles.Nav__logo}>
            <a href="/">
              <img src="../assets/logo.svg"  alt="Alt Creative Logo" />
            </a>
          </div>
          <div className={styles.Nav__links}>
            <ul>
              <li>
                <Link href="#services" activeClass={styles.Nav__links_active } to="services" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Services</Link>
              </li>
              <li>
                <Link href="#about" activeClass={styles.Nav__links_active } to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                  About</Link>
              </li>
              <li>
                <Link href="#contact" activeClass={styles.Nav__links_active } to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );;
  }
}


// Nav.propTypes = {};

// Nav.defaultProps = {};

// export default Nav;
