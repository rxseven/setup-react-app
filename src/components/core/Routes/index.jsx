// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withLoadable from 'HOCs/common/withLoadable';

// Constants
import PATHS from 'constants/router/paths';

// Screens
const Home = withLoadable(() => import('screens/main/Home'));
const NotFound = withLoadable(() => import('screens/main/404'));

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.main.home} />
    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
