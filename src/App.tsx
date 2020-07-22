import React from 'react';
import Body from 'components/layout/Body';
import Header from 'components/layout/Header';
import MainNavigator from 'components/layout/MainNavigator';
import Routes from 'routes/index.routes';
import { ReactQueryConfigProvider } from 'react-query';
import reactQueryConfig from 'settings/reactQueryConfig';

const App = (): JSX.Element => {
  return (
    <>
      <ReactQueryConfigProvider config={reactQueryConfig}>
        <Body>
          <Header />
          <Routes />
        </Body>
      </ReactQueryConfigProvider>
    </>
  );
};

export default App;
