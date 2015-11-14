import { Iterable } from 'immutable';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: (getState, { type }) => {
    return type !== 'redux-form/CHANGE' &&
           type !== 'redux-form/BLUR' &&
           type !== 'redux-form/TOUCH' &&
           type !== 'redux-form/FOCUS' &&
           type !== 'redux-form/DESTROY' &&
           type !== 'redux-form/START_SUBMIT' &&
           type !== 'redux-form/STOP_SUBMIT';
  },
  transformer: (state) => {
    return Object.keys(state).reduce((newState, key) => {
      const val = state[key];
      newState[key] = Iterable.isIterable(val) ? val.toJS() : val;
      return newState;
    }, {});
  },
});

export default loggerMiddleware;
