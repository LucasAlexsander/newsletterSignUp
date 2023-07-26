import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ name, setValue }) => {
  const handleClick = () => {
    return setValue ? setValue(false) : null;
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
