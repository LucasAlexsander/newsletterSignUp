import React from 'react';
import Vantagens from './Vantagens';
import styles from '../styles/Info.module.css';
import Input from './Input';
import Button from './Button';

const text = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
];

const Info = ({ send }) => {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (emailRegex.test(input)) {
      send(true);
      return setError(false);
    }
    return setError(true);
  };

  React.useEffect(() => {
    setError(false);
  }, [input]);

  return (
    <div className={styles.info}>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <Vantagens prods={text} />

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Email address"
          name="email"
          value={input}
          setValue={setInput}
          placeholder="email@company.com"
          invalid={error}
        />
        <Button name="Subscribe to monthly newsletter" />
      </form>
    </div>
  );
};

export default Info;
