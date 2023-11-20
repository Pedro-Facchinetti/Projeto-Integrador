import React from 'react';
import styles from './Menu.module.scss';
import backgroundImage from '../../Assets/background.svg';
import NavBar from '../../NavBar'

function Menu({ userType }) {

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.form__content}>
          <NavBar/>
        </div>
    </div>
  );
}

export default Menu;