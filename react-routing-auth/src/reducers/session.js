import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../constants';

const INITIAL_STATE = fromJS({
  loggedIn: false,
  hasError: false,
  loginAttempts: 0,
  sessionId: null,
  username: null,
});

const sessionReducer = handleActions({
  [LOGIN_PENDING]: (state) => state.merge(fromJS({
    hasError: false,
    loginAttempts: state.get('loginAttempts') + 1,
  })),
  [LOGIN_SUCCESS]: (state, { payload }) => state.merge(fromJS({
    loggedIn: true,
    loginAttempts: 0,
    sessionId: payload.id,
    username: payload.username,
  })),
  [LOGIN_ERROR]: (state) => state.merge(fromJS({
    loggedIn: false,
    hasError: true,
    sessionId: null,
    username: null,
  })),
  [LOGOUT]: (state) => state.merge(fromJS({
    loggedIn: false,
    sessionId: null,
    username: null,
  })),
}, INITIAL_STATE);

export default sessionReducer;
