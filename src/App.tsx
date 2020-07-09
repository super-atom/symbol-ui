import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import routes from './routes/index.routes';
import './App.css';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">{routes}</div>
    </ConnectedRouter>
  );
};

export default connect(null, null)(App);
