import angular from 'angular';

import requestActions from './request';

export default angular
  .module('app.actions', [])
  .factory('requestActions', requestActions)
  .name;
