import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';

import loggerMiddleware from './logger';
import promiseMiddleware from '../middleware/promiseMiddleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(routes, history, initialState = {}) {
  const store = compose(
    reduxReactRouter({
      routes,
      history,
    }),
    applyMiddleware(
      promiseMiddleware,
      thunkMiddleware,
      loggerMiddleware,
    ),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
