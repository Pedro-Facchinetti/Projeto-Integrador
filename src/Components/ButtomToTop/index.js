import React, { useState, useEffect } from 'react';
import styles from './Button.module.scss';

import SetaTopo from '../../Assets/SetaTopo.png';

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.buttonToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
    >
      <img src={SetaTopo} alt="Seta topo" className={styles.buttonImage} />
    </button>
  );
};

export default ButtonToTop;
