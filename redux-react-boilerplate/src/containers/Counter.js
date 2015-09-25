import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';
import Counter from '../components/Counter';

class CounterApp extends Component {

  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter { ...this.props } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps, { increment, decrement })(CounterApp);
