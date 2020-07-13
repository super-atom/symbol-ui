import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(): JSX.Element {
  return (
    <>
      <div>THIS IS HOME</div>
      <hr />
      <Link to="/counter">Counter</Link>
      <hr />
      <Link to="/counter-legacy">CounterLegacy</Link>
      <hr />
      <Link to="/image-grid">ImageGrid</Link>
    </>
  );
}

export default HomePage;
