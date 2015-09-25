import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  render() {
    const {
      todos,
      removeTodo,
    } = this.props;

    const todoList = todos.map((i, idx) => {
      return (
        <TodoItem
          key={ idx }
          text={ i.text }
          removeTodo={ removeTodo } />
      );
    });

    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          { todoList }
        </ul>
      </div>
    );
  }
}

export default TodoList;
