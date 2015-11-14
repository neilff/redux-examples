import React from 'react';

import NavigatorItem from './NavigatorItem';

const Navigator = ({ logoutUser, isLoggedIn, username }) => {
  const menuItems = isLoggedIn ?
    (
      <NavigatorItem>
        <a
          href
          onClick={ (e) => {
            e.preventDefault();
            logoutUser();
          } }
          className="white">Logout</a>
      </NavigatorItem>
    ) : null;

  return (
    <div className="flex fixed top-0 left-0 right-0 p1 bg-blue white">
      <div className="flex-auto flex-column">
        <NavigatorItem>
          React Login
        </NavigatorItem>
        { menuItems }
      </div>
      <div className="flex-end">
        <NavigatorItem>
          { username }
        </NavigatorItem>
      </div>
    </div>
  );
};

export default Navigator;
