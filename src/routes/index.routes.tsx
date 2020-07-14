import React, { Suspense, lazy } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../features/auth/authRoutes';
import PrivateRoute from '../features/auth/privateRoutes';

const HomePage = lazy(() => import('../components/pages/home.page'));
const CounterPage = lazy(() => import('../components/pages/counter.page'));
const CounterLegacyPage = lazy(() =>
  import('../components/pages/counterLegacy.page'),
);
const ImageGridPage = lazy(() => import('../components/pages/imageGrid.page'));
const ProfileMainPage = lazy(() =>
  import('../components/pages/profile/ProfileMain'),
);

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/image-grid" component={ImageGridPage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/counter-legacy" component={CounterLegacyPage} />
        <Route exact path="/profile" component={ProfileMainPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
