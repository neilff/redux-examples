import {handleActions} from 'redux-actions';
import {
  REQUEST_PLAYER_TEAM_DATA,
  REQUEST_PLAYER_TEAM_DATA_SUCCESS,
  REQUEST_PLAYER_TEAM_DATA_ERROR
} from '../constants';

const teamReducer = handleActions({
  REQUEST_PLAYER_TEAM_DATA: (state) => {
    return Object.assign({}, state, {
      teamInfo: null,
      isFetching: true,
      hasError: false
    });
  },
  REQUEST_PLAYER_TEAM_DATA_SUCCESS: (state, action) => {
    return Object.assign({}, state, {
      teamInfo: action.payload,
      isFetching: false,
      hasError: false
    });
  },
  REQUEST_PLAYER_TEAM_DATA_ERROR: (state) => {
    return Object.assign({}, state, {
      teamInfo: null,
      isFetching: false,
      hasError: true
    });
  }
}, {
  isFetching: false,
  teamInfo: null,
  hasError: false
});

export default teamReducer;
