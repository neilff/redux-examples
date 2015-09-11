import angular from 'angular';

import http from './http';

export default angular
  .module('app.middleware', [])
  .factory('httpMiddleware', http)
  .name;
