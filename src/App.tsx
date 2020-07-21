import React from 'react';
import Routes from 'routes/index.routes';
import { ReactQueryConfigProvider } from 'react-query';
import reactQueryConfig from 'settings/reactQueryConfig';

const App = (): JSX.Element => {
  return (
    <>
      <ReactQueryConfigProvider config={reactQueryConfig}>
        <Routes />
      </ReactQueryConfigProvider>
    </>
  );
};

export default App;
