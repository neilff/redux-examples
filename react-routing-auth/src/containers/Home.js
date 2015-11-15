import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter/Counter';
import Title from '../components/ui/Title';

function mapStateToProps(state) {
  return {
    count: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement()),
  };
}

const Home = ({ count, increase, decrease }) => {
  return (
    <div>
      <Title>Home</Title>

      <Counter
        count={ count }
        increase={ increase }
        decrease={ decrease } />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
