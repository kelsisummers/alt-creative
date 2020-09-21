import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import About from '../../components/About';
import Contact from '../../components/Contact';
// import Footer from '../../components/Footer'

const Main = (props) => {
  // Destructuring Props
  const { isMobile, activeTab, createPath } = props;
  return (
    <div className={styles.Main}>

      {isMobile ? null : <Hero createPath={createPath} />}

      {/* Conditionally Render Components If On Mobile Device */}
      {(isMobile && activeTab === 'services') ? <Services createPath={createPath} /> : (!isMobile ? <Services createPath={createPath} /> : null)}

      {(isMobile && activeTab === 'about') ? <About createPath={createPath} /> : (!isMobile ? <About createPath={createPath} /> : null)}

      {(isMobile && activeTab === 'contact') ? <Contact createPath={createPath} /> : (!isMobile ? <Contact createPath={createPath} /> : null)}
      {/* <Footer /> */}
    </div>
  )
}

Main.propTypes = {
  isMobile: PropTypes.bool,
  activeTab: PropTypes.string,
  getWidth: PropTypes.func,
  createPath: PropTypes.func
};

// Main.defaultProps = {};

export default Main;
