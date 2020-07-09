import React from 'react';
import { useHistory } from 'react-router-dom';

function TestPage() {
  const history = useHistory();
  return (
    <>
      <div>THIS IS TestPage</div>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
    </>
  );
}

export default TestPage;
