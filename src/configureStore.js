import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middleware = [routeMiddleware, thunk, logger];
const connectedReducer = connectRouter(history)(rootReducer);

const store = createStore(
  connectedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(...middleware),
  ),
);


export { store, history };
