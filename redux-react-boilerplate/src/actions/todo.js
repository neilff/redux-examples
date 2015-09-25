import { ADD_TODO, REMOVE_TODO } from '../constants';

export function addTodo(text) {
  if (!text || text.length <= 0) {
    return false;
  }

  return {
    type: ADD_TODO,
    payload: {
      text,
    },
  };
}

export function removeTodo(text) {
  return {
    type: REMOVE_TODO,
    payload: {
      text,
    },
  };
}

export default {
  addTodo,
  removeTodo,
};
