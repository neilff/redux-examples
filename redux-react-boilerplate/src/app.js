import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';

import App from './containers/App';
import Todo from './containers/Todo';
import Counter from './containers/Counter';
import About from './containers/About';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Todo } />
    <Route path="/counter" component={ Counter } />
    <Route path="/about" component={ About } />
  </Route>
);

const history = createBrowserHistory();
const store = configureStore(routes, history, { counter: 99 });

React.render(
  <div>
    <Provider store={ store }>
      {() =>
        <ReduxRouter />
      }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ store }
                monitor={ LogMonitor }
                visibleOnLoad />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
