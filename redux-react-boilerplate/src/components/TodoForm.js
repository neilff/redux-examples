import React, { Component, PropTypes } from 'react';
import R from 'ramda';

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  onSubmit(value) {
    this.props.addTodo(value);
  }

  render() {
    const value = this.state.value;
    const onSubmit = R.partial(this.onSubmit, value).bind(this);

    return (
      <div>
        <input type="text" value={value} onChange={ this.onChange.bind(this) } />
        <button
          onClick={ onSubmit }>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
