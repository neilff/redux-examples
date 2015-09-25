import { handleActions } from 'redux-actions';
import { ADD_TODO, REMOVE_TODO } from '../constants';

const INITIAL_STATE = [
  {
    text: 'Learn React',
  },
  {
    text: 'Learn Flux',
  },
  {
    text: 'Learn Redux',
  },
];

const todosReducer = handleActions({
  [ADD_TODO]: (state, action) => ([...state, action.payload]),
  [REMOVE_TODO]: (state, action) => state.filter(i => i.text !== action.payload.text),
}, INITIAL_STATE);

export default todosReducer;
