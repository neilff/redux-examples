import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../constants';

import { loginUser } from '../api';

export function login(username, password) {
  return {
    types: [
      LOGIN_PENDING,
      LOGIN_SUCCESS,
      LOGIN_ERROR,
    ],
    payload: {
      promise: loginUser(username, password),
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
