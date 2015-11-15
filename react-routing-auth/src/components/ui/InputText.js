import React from 'react';

const InputText = ({ type, binding }) => {
  return (
    <input
      type={ type }
      className="block col-12 mb1 field"
      { ...binding } />
  );
};

export default InputText;
