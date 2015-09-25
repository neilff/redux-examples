import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';

import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
  router: routerStateReducer,
});

export default rootReducer;
