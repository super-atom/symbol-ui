import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuthorization } from './checkAuthorization';

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if (checkAuthorization() === true) {
      return (
        <Route
          {...rest}
          render={(props) => (
            <div className="privateLayout">
              <Component {...rest} {...props} />
            </div>
          )}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname,
            state: { from: props.location },
          }}
        />
      );
    }
  };
  return <Routes />;
};

export default PrivateRoute;
