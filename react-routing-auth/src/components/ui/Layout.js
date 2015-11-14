import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      { children }
    </div>
  );
};

export default Layout;
