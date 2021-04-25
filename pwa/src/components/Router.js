import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';

const Router = () => {
  return (
    <Switch>
      <Route path={`/`} component={Home} />
    </Switch>
  );
};

export default Router;
