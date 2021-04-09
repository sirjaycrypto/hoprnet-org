import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Screens/Login';

const Router = () => {
  return (
    <Switch>
      <Route path={`/`} component={Login} />
    </Switch>
  );
};

export default Router;
