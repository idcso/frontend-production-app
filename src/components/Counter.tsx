import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};

export default Counter;
