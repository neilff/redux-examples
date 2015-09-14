import angular from 'angular';

import companyAutocomplete from './company-autocomplete';

export default angular
  .module('app.components', [
    companyAutocomplete
  ])
  .name;
