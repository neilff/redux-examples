import angular from 'angular';
import promiseMiddleware from './promise';

export default angular
  .module('app.middleware', [])
  .factory('promiseMiddleware', promiseMiddleware)
  .name;
