import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CounterPage,
  TestPage,
} from '../components/pages/index.page';

const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/counter" component={CounterPage} />
    <Route exact path="/counter/test" component={TestPage} />
  </Switch>
);

export default routes;
