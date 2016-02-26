import { fromJS, OrderedMap } from 'immutable';

export const ADD_TOAST = 'ADD_TOAST';
export const BURN_TOAST = 'BURN_TOAST';

let toastID = 0;
const initialState = OrderedMap({});

export default function toastReducer(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_TOAST:
    return state.set(action.payload.get('id'), action.payload);

  case BURN_TOAST:
    return state.delete(action.payload);

  default:
    return state;
  }
}

export function addToast(toast) {
  return {
    type: ADD_TOAST,
    payload: fromJS({
      id: toastID++,
      ...toast,
    }),
  };
}

export function burnToast(id) {
  return {
    type: BURN_TOAST,
    payload: id,
  };
}
