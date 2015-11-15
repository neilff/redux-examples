import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      className="btn btn-outline"
      onClick={ () => {
        if (onClick) {
          onClick();
        }
      } }>
      { children }
    </button>
  );
};

export default Button;
