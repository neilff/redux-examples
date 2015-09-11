import angular from 'angular';

import counterActions from './counter';

export default angular
  .module('app.actions', [])
  .factory('counterActions', counterActions)
  .name;
