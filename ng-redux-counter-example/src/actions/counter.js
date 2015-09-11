import {bindActionCreators} from 'redux';

export const INCREMENT_COUNTER = '@@reduxAction/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = '@@reduxAction/DECREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export default function counterActions($ngRedux) {
  let actionCreator = {
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

counterActions.$inject = ['$ngRedux'];
