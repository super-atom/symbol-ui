import React from 'react';
import Routes from './routes/index.routes';
import { ReactQueryDevtools } from 'react-query-devtools';

import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Routes />;
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};

export default App;
