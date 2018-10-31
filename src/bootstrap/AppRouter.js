import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage, PostPage, EditPostPage } from '../pages';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/posts/create" component={EditPostPage}/>
      <Route exact path="/posts/:id/edit" component={EditPostPage}/>
      <Route exact path="/posts/:id" component={PostPage}/>
      <Route component={MainPage}/>
    </Switch>
  </Router>
);

export default AppRouter;
