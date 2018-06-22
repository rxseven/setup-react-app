// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Component
const Routes = () => (
  <Switch>
    <Route path="/" render={() => <div>Home</div>} />
  </Switch>
);

// Module exports
export default Routes;
