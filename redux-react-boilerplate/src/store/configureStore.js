import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { devTools, persistState } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(routes, history, initialState = {}) {
  const store = compose(
    reduxReactRouter({
      routes,
      history,
    }),
    applyMiddleware(thunkMiddleware, logger),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
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
