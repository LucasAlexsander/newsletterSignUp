import React from 'react';
import icon from '../assets/images/icon-list.svg';
import styles from '../styles/Vantagens.module.css';

const Vantagens = ({ prods }) => {
  return (
    <ul className={styles.ul}>
      {prods.map((text) => (
        <li key={text}>
          <img src={icon} />
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Vantagens;
