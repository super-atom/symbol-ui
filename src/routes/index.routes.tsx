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
const TestPage = lazy(() => import('../components/pages/test.page'));
const ImageGridPage = lazy(() => import('../components/pages/imageGrid.page'));
// const LogoutPage = lazy(() => import('../components/pages/logout.page'));
// const LoginPage = lazy(() => import('../components/pages/login.page'));
// const RegisterPage = lazy(() => import('../components/pages/register.page'));
// const ConfirmAccountPage = lazy(() => import('../components/pages/confirmAccount.page'));

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/*
          <AuthRoute path="/logout" component={LoginPage} />
          <AuthRoute path="/register" component={RegisterPage} />
          <AuthRoute path="/confirm-account" component={ConfirmAccountPage} />
          <PrivateRoute path="/logout" component={LogoutPage} />
        */}
        <Route exact path="/image-grid" component={ImageGridPage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/counter-legacy" component={CounterLegacyPage} />
        <Route exact path="/counter-legacy/test" component={TestPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
