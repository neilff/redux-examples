import angular from 'angular';

import counter from './counter';

export default angular
  .module('app.components', [
    counter
  ])
  .name;
