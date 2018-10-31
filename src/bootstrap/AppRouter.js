import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage, PostPage } from '../pages';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/posts" component={MainPage}/>
      <Route path="/posts/:id" component={PostPage}/>
      <Route component={MainPage}/>
    </Switch>
  </Router>
);

export default AppRouter;
