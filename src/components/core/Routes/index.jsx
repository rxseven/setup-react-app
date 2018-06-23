// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Home from 'screens/main/Home';
import NotFound from 'screens/main/404';

// Constants
import PATHS from 'constants/router/paths';

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.main.home} />
    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
