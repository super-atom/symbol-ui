import React from 'react';
import { useHistory } from 'react-router-dom';
import CounterLegacy from 'features/counterLegacy/CounterLegacy';

function CounterLegacyPage(): JSX.Element {
  const history = useHistory();
  return (
    <>
      <CounterLegacy />
      <button type="button" onClick={() => history.go(-1)}>
        Back
      </button>
    </>
  );
}

export default CounterLegacyPage;
