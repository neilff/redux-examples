import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';
import sagas from '../middleware/sagas';
import logger from '../middleware/logger';

import reducers from '../reducers';

function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(sagas, thunk, logger),
  )(createStore);

  const store = finalCreateStore(combineReducers(reducers), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
