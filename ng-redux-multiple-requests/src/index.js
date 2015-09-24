import angular from 'angular';

// redux
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  level: 'info'
});

// angular
import components from './components';
import middleware from './middleware';

export default angular
  .module('app', [
    ngRedux,
    components,
    middleware
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [
      logger,
      'promiseMiddleware',
      thunkMiddleware,
    ]);
  })
  .name;
