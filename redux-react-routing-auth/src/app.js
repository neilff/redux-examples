import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import configureStore from './config/store';
import history from './config/history';

import Main from './containers/Main';
import Home from './containers/Home';
import Login from './containers/Login';

const routes = (
  <Route path="/" component={ Main }>
    <IndexRoute component={ Home } />
    <Route path="/login" component={ Login } />
  </Route>
);

const store = configureStore(routes, history, { counter: 99 });

store.subscribe(() => {
  const state = store.getState();
  const currentPath = state.router.location.pathname;
  const isLoggedIn = state.session.get('loggedIn');

  if (currentPath === '/' && !isLoggedIn) {
    history.pushState(null, '/login');
  }

  if (currentPath === '/login' && isLoggedIn) {
    history.pushState(null, '/');
  }
});

render(
  <div>
    <Provider store={ store }>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('root')
);
