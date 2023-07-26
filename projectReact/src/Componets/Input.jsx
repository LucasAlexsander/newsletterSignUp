import React from 'react';
import styles from '../styles/Input.module.css';

const Input = ({ label, name, value, setValue, invalid, ...probs }) => {
  const [error, setError] = React.useState(invalid);

  React.useEffect(() => {
    setError(invalid);
  }, [invalid]);

  return (
    <label className={styles.input}>
      <div className={styles.header}>
        <p>{label}</p>
        {error == true && <span>Valid email required</span>}
      </div>
      <input
        className={`${error == true && styles.error}`}
        type="email"
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...probs}
      />
    </label>
  );
};

export default Input;
