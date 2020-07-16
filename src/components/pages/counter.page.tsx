import React from 'react';
import { useHistory } from 'react-router-dom';
import Counter from 'features/counter';

function CounterPage(): JSX.Element {
  const history = useHistory();
  return (
    <>
      <Counter />
      <button type="button" onClick={() => history.go(-1)}>
        Back
      </button>
    </>
  );
}

export default CounterPage;
