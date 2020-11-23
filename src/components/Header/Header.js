import React from 'react';
import styles from './Header.module.css';
import img from './img/netflix.svg';
const srcLogo = `https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg`;
const srcUser = `https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png`;
const Header = ({ black }) => {
  return (
    <header className={black ? styles.black : ''}>
      <div className={styles.headerLogo}>
        <a href="/">
          <img src={srcLogo} alt="Netflix" />
        </a>
      </div>
      <div className={styles.headerUser}>
        <a href="/">
          <img src={srcUser} alt="usuario" />
        </a>
      </div>
    </header>
  );
};

export default Header;
