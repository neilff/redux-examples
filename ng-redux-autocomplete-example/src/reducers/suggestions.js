import {
  REQUEST_COMPANY,
  REQUEST_COMPANY_SUCCESS,
  REQUEST_COMPANY_ERROR
} from '../actions/autocomplete';

const INITIAL_STATE = {
  isFetching: false,
  latestFetchAttempt: null,
  error: false,
  data: null
};

export default function suggestions(state = INITIAL_STATE, action) {
  const {payload} = action;

  var actions = {
    [REQUEST_COMPANY]: (state) => {
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
        latestFetchAttempt: payload.meta.timestamp
      });
    },
    [REQUEST_COMPANY_SUCCESS]: (state) => {
      return Object.assign({}, state, {
        isFetching: false,
        data: state.latestFetchAttempt === payload.meta.timestamp ?
          payload.response :
          state.data
      });
    },
    [REQUEST_COMPANY_ERROR]: (state) => {
      return Object.assign({}, state, {
        isFetching: false,
        error: payload.error
      });
    }
  };

  return actions[action.type] ?
    actions[action.type](state) :
    state;
}
