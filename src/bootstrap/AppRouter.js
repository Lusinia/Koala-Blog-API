import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/posts" component={MainPage} />
      <Route  path="/posts/:id" component={() => 'POST'} />
      <Route  component={MainPage} />
    </Switch>
  </Router>
);

export default AppRouter;
