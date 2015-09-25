import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div>
        <h1>{ counter }</h1>
        <button
          onClick={ this.props.increment }>Increment</button>
        <button
          onClick={ this.props.decrement }>Decrement</button>
      </div>
    );
  }
}

export default Counter;
