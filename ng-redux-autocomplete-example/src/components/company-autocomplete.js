import angular from 'angular';

class CompanyAutocomplete {
  constructor($scope, $ngRedux, autoCompleteActions) {

    let unsubscribe = $ngRedux.connect(state => ({
      isFetching: state.suggestions.isFetching,
      error: state.suggestions.error,
      suggestions: state.suggestions.data,
      latestFetchAttempt: state.suggestions.latestFetchAttempt
    }))(this);

    $scope.$on('$destroy', unsubscribe);

    this.queryAutocomplete = (query) => {
      if (query.length <= 0) {
        this.suggestions = [];
        return;
      }

      autoCompleteActions.queryAutocomplete(query);
    };

    this.query = '';
  }
}

CompanyAutocomplete.$inject = ['$scope', '$ngRedux', 'autoCompleteActions'];

export default angular
  .module('app.autocomplete', [])
  .directive('companyAutocomplete', () => ({
    restrict: 'E',
    template: `
      <div>
        <p class="lead">Type a company name below</p>
        <div
          ng-if="autocomplete.error"
          class="alert alert-danger">
          An error occured: {{ autocomplete.error | json }}
        </div>
        <div class="input-group" style="max-width: 300px;">
          <input
            ng-model="autocomplete.query"
            ng-model-options="{'debounce': 200}"
            ng-change="autocomplete.queryAutocomplete(autocomplete.query)"
            type="text"
            class="form-control"
            placeholder="Search for...">
          <span class="input-group-btn">
            <button
              ng-click="autocomplete.queryAutocomplete(autocomplete.query)"
              class="btn btn-default"
              type="button">Go!</button>
          </span>
        </div>
        <ul class="list-unstyled">
          <li ng-repeat="company in autocomplete.suggestions">
            {{ company.name }}
          </li>
        </ul>
      </div>
    `,
    controller: 'CompanyAutocomplete',
    controllerAs: 'autocomplete'
  }))
  .controller('CompanyAutocomplete', CompanyAutocomplete)
  .name;
