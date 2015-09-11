import angular from 'angular';

// redux
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

// angular
import components from './components';
import actions from './actions';

export default angular
  .module('app', [
    ngRedux,
    components,
    actions
  ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunkMiddleware]);
  })
  .name;
