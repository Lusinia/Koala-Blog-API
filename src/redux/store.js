import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducer';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger';


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middleware = [routeMiddleware, thunk, logger];
const connectedReducer = connectRouter(history)(reducer);

const store = createStore(
  connectedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(...middleware),
  ),
);


export { store, history };

