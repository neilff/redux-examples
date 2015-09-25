import R from 'ramda';
import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  onRemove(text) {
    this.props.removeTodo(text);
  }

  render() {
    const { text } = this.props;
    const onRemove = R.partial(this.onRemove, text).bind(this);

    return (
      <li>
        <button onClick={ onRemove }>x</button> { text }
      </li>
    );
  }
}

export default TodoItem;
