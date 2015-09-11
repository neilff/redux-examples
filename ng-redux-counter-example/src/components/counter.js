import angular from 'angular';

class CounterController {
  constructor($scope, $ngRedux, counterActions) {
    console.log('CounterController');

    let unsubscribe = $ngRedux.connect(state => ({counter: state.counter}))(this);
    $scope.$on('$destroy', unsubscribe);

    this.increment = counterActions.increment;
    this.decrement = counterActions.decrement;
    this.incrementAsync = counterActions.incrementAsync;
    this.incrementIfOdd = counterActions.incrementIfOdd;
  }
}

CounterController.$inject = ['$scope', '$ngRedux', 'counterActions'];

export default angular
  .module('app.counter', [])
  .directive('counter', () => ({
    restrict: 'E',
    template: `
      <div>
        <p class="lead">{{ counter.counter }}</p>

        <ul class="list-inline">
          <li>
            <button
              ng-click="counter.increment()"
              class="btn">Increase</button>
          </li>
          <li>
            <button
              ng-click="counter.decrement()"
              class="btn">Decrease</button>
          </li>
          <li>
            <button
              ng-click="counter.incrementIfOdd()"
              class="btn">Increase If Odd</button>
          </li>
          <li>
            <button
              ng-click="counter.incrementAsync()"
              class="btn">Async Increase</button>
          </li>
        </ul>
      </div>
    `,
    controller: 'CounterController',
    controllerAs: 'counter'
  }))
  .controller('CounterController', CounterController)
  .name;
