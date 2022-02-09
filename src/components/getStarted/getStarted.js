import React from 'react';
import { Link } from 'react-router-dom'
import videoLogo from '../../assets/images/video.svg'

import styles from './getStarted.module.css';

const GettingStarted = () => {
  return (
      <div className={styles.content}>
          <div className={styles.title}>
              <h3>Getting Started</h3>
          </div>
          <div className={styles.description}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq porttitor justo et convallis</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.link}>
            <Link to='/' className={styles.link}> 
            <img src={videoLogo} alt='link' width='20px' height='20px'/>
            <label for='link' className={styles.label}>Watch Video</label>
            </Link>
        </div>
      </div>

  );
}

export default GettingStarted;