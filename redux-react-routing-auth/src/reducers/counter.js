import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../constants';

const INITIAL_STATE = 0;

const counterReducer = handleActions({
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1,
}, INITIAL_STATE);

export default counterReducer;
