import {REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR} from '../actions/request';

const INITIAL_STATE = {
  isFetching: false,
  error: false,
  data: null
};

export default function posts(state = INITIAL_STATE, action) {
  const {payload} = action;

  var actions = {
    [REQUEST_POSTS]: (state) => {
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    },
    [REQUEST_POSTS_SUCCESS]: (state) => {
      return Object.assign({}, state, {
        isFetching: false,
        data: payload.response.data.children
      });
    },
    [REQUEST_POSTS_ERROR]: (state) => {
      return Object.assign({}, state, {
        isFetching: false,
        error: payload.error
      });
    },
  };

  return actions[action.type] ?
    actions[action.type](state) :
    state;
}
