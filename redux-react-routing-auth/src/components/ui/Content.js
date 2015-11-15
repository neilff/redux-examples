import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="container mt4 p1">
      <div className="clearfix">
        { children }
      </div>
    </div>
  );
};

export default Content;
