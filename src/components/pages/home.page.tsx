import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();
  return (
    <>
      <div>THIS IS HOME</div>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
    </>
  );
}

export default HomePage;
