import React from 'react';

import Button from '../ui/Button';
import Title from '../ui/Title';

const Counter = ({ increase, decrease, count }) => {
  return (
    <div>
      <Title>{ count }</Title>
      <Button onClick={ increase }>Increase</Button>
      <Button onClick={ decrease }>Decrease</Button>
    </div>
  );
};

export default Counter;
