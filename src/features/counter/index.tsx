import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterAction, counterSelector } from './slice';
import ErrorPage from 'components/pages/ErrorPage';
import styles from './Counter.module.css';

function Counter(): JSX.Element {
  const dispatch = useDispatch();
  const { value, error } = useSelector(counterSelector.all);
  const [incrementAmount, setIncrementAmount] = useState('2');

  if (error) return <ErrorPage />;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterAction.increment())}
        >
          +
        </button>
        <span className={styles.value}>{value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterAction.decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() =>
            dispatch(
              counterAction.incrementByAmount(Number(incrementAmount) || 0),
            )
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(
              counterAction.incrementByAmountAsync(
                Number(incrementAmount) || 0,
              ),
            )
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
