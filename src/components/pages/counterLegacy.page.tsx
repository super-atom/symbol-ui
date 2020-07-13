import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import CounterLegacy from '../../features/counterLegacy/CounterLegacy';

function CounterLegacyPage(): JSX.Element {
  const history = useHistory();
  return (
    <>
      <CounterLegacy />
      <button type="button" onClick={() => history.go(-1)}>
        Back
      </button>
      <Link to="/counter-legacy/test">TEST</Link>
    </>
  );
}

export default CounterLegacyPage;
