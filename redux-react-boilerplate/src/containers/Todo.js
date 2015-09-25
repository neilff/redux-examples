import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions/todo';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class TodoApp extends Component {

  static propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos } = this.props;
    const removeTodoFn = this.props.removeTodo;
    const addTodoFn = this.props.addTodo;

    return (
      <div>
        <h1>Todos</h1>
        <TodoForm
          addTodo={ addTodoFn } />
        <TodoList
          todos={ todos }
          removeTodo={ removeTodoFn } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoApp);
