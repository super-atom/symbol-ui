import React from 'react';
import { useHistory } from 'react-router-dom';
import Counter from '../../features/counter/Counter';

function CounterPage() {
  const history = useHistory();
  return (
    <>
      <Counter />
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
    </>
  );
}

export default CounterPage;
