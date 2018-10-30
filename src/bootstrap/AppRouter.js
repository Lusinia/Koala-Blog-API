import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/aleshka" component={() => 'ALESHKA'} />
    </Switch>
  </Router>
);

export default AppRouter;
