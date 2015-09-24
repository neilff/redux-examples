import {handleActions} from 'redux-actions';
import {
  REQUEST_PLAYER_INFO,
  REQUEST_PLAYER_INFO_SUCCESS,
  REQUEST_PLAYER_INFO_ERROR
} from '../constants';

const playerReducer = handleActions({
  REQUEST_PLAYER_INFO: (state) => {
    return Object.assign({}, state, {
      playerInfo: null,
      isFetching: true,
      hasError: false
    });
  },
  REQUEST_PLAYER_INFO_SUCCESS: (state, action) => {
    return Object.assign({}, state, {
      playerInfo: action.payload,
      isFetching: false,
      hasError: false
    });
  },
  REQUEST_PLAYER_INFO_ERROR: (state) => {
    return Object.assign({}, state, {
      playerInfo: null,
      isFetching: false,
      hasError: true
    });
  }
}, {
  isFetching: false,
  playerInfo: null,
  hasError: false
});

export default playerReducer;
