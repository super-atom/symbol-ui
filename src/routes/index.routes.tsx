import React, { Suspense, lazy } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from 'features/auth/authRoutes';
import PrivateRoute from 'features/auth/privateRoutes';
import Loader from 'components/atoms/Loader';

const HomePage = lazy(() => import('components/pages/home'));
const CounterPage = lazy(() => import('components/pages/counter.page'));
const CounterLegacyPage = lazy(() =>
  import('components/pages/counterLegacy.page'),
);
const ImageGridPage = lazy(() => import('components/pages/imageGrid.page'));
const ProfileMainPage = lazy(() =>
  import('components/pages/profile/ProfileMain'),
);
const CaseElementsMainPage = lazy(() =>
  import('components/pages/caseElements/CaseElementsMain'),
);

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/image-grid" component={ImageGridPage} />
        <Route exact path="/counter" component={CounterPage} />
        <Route exact path="/counter-legacy" component={CounterLegacyPage} />
        <Route exact path="/profile" component={ProfileMainPage} />
        <Route exact path="/case-elements" component={CaseElementsMainPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
