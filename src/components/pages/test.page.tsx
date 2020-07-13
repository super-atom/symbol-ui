import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function TestPage() {
  const history = useHistory();
  return (
    <>
      <div>THIS IS TestPage</div>
      <button type="button" onClick={() => history.go(-1)}>
        Back
      </button>
      <Link to="/counter-legacy">CounterLegacy</Link>
    </>
  );
}

export default TestPage;
