import angular from 'angular';

import autoCompleteActions from './autocomplete';

export default angular
  .module('app.actions', [])
  .factory('autoCompleteActions', autoCompleteActions)
  .name;
