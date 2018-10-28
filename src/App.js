import { ConnectedRouter } from 'connected-react-router/immutable';
import React, { Component } from 'react';
import { HomePage, NotFound, PostPage } from './components';
import { Switch, Route } from 'react-router-dom';
import { history, store } from './redux/store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    console.log('history, store', history, store);

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path={"/post"} component={PostPage}/>
            <Route path="" component={NotFound}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
