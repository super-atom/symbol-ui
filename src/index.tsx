import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider, ReactReduxContext } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { store, history } from './app/store';
import './index.css';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
