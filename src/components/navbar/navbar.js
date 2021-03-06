import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.banner}>
            <Link to='/' className={styles.link}> 
              <img src={Logo} alt='logo' width='102px' height='80px'/>
            </Link>

        </div>
    );
}

export default Navbar;


