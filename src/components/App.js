import React from 'react';
import {Helmet} from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/navbar';
import SearchBar from './searchBar/searchBar'
import AccordionFunc from './accordion/accordion'
import GettingStarted from './getStarted/getStarted'

import styles from './app.module.css';

const items = [
    {
      title: 'How can I load up my balances?',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu imperdiet dui. Donec ac turpis eget ante rutrum iaculis vestibulum rutrum lectus',
    },
    {
      title: 'Is trading my coins possible?',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu imperdiet dui. Donec ac turpis eget ante rutrum iaculis vestibulum rutrum lectus',
    },
    {
      title: 'Can I activate a 2FA method on my app?',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu imperdiet dui. Donec ac turpis eget ante rutrum iaculis vestibulum rutrum lectus',
    },
    {
        title: 'Sending money abroad',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu imperdiet dui. Donec ac turpis eget ante rutrum iaculis vestibulum rutrum lectus',
      },
  ];
  

const App = () => {
    return (

        <div className={styles.content}>
            <Helmet>
                <style>{'body { background-color: #0A161C; }'}</style>
            </Helmet>
            <div>     
            <BrowserRouter>
                <div className='nav-bar'>
                    <Navbar />
                </div>
            </BrowserRouter> 
            </div>
            <div className={styles.title}> 
            <h1>Welcome to our support</h1>
            <h3>Search on any topic or you can browse by category</h3>
            </div>
            <div className='search-bar'>
                <SearchBar />
            </div>

            <div className={styles.blockTeam}>
                <div className={styles.accordion}> 
                    <div className={styles.heading}>
                        <h3>Frequently Asked Questions</h3>
                    </div>
                    <AccordionFunc items={items}/>
                </div>

                <div className={styles.gettingStarted}>
                    <BrowserRouter>
                        <GettingStarted />
                    </BrowserRouter> 
                </div>
            </div>
        </div>
    );
}

export default App;