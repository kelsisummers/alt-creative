import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';


export default class Hero extends React.Component {
  // When Component Mounts
  componentDidMount(props) {
    // Calls createPath Animation Function from Props
    const { createPath } = this.props;
    createPath('hero', 5000, 0, 5);
  }
  render() {
    return (
      <div className={styles.Hero}>
      <div className={styles.Hero__animation}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100.6 107.6" id="hero-svg" className={styles.Hero__svg} >
            <path vectorEffect="non-scaling-stroke" id='hero-path' fill="none" strokeWidth="3" stroke="#000" 
            d="M90,15v-14H2v21h100" />
        </svg>
      </div>
      <div className={styles.Hero__copy}>
        <div className="test">
        <h1>alt creative</h1>
        </div>
        <h2>creative work to empower the collective.</h2>
      </div>
    </div>
    )
  }
}

Hero.propTypes = {
  createPath: PropTypes.func,
};

// Hero.defaultProps = {};