import angular from 'angular';
import promiseActions from '../actions/promise';

class RequestController {
  constructor($scope, $ngRedux) {

    let unsubscribe = $ngRedux.connect(
      state => ({
        player: state.player,
        team: state.team
      }),
      promiseActions
    )(this);

    $scope.$on('$destroy', unsubscribe);
  }

  playerId = '8470599'
}

RequestController.$inject = ['$scope', '$ngRedux'];

export default angular
  .module('app.request', [])
  .directive('httpRequest', () => ({
    restrict: 'E',
    template: `
      <div>
        <div class="form-group">
          <label for="playerId">PlayerID</label>
          <input
            type="text"
            class="form-control"
            id="playerId"
            placeholder="Player ID"
            ng-model="request.playerId">
        </div>
        <pre>{{ request | json }}</pre>
        <div
          ng-if="request.error"
          class="alert alert-danger">
          An error occured: {{ request.player.error | json }}
        </div>
        <ul class="list-inline">
          <li>
            <button
              class="btn btn-primary"
              ng-class="{'btn-disabled': request.player.isFetching}"
              ng-disabled="request.player.isFetching"
              ng-click="request.getPlayerInfo(request.playerId)">
              Get Player Info
              <img
                ng-show="request.player.isFetching"
                src="http://jxnblk.com/loading/loading-spin.svg" />
            </button>
          </li>
          <li>
            <button
              class="btn btn-primary"
              ng-class="{'btn-disabled': request.team.isFetching}"
              ng-disabled="request.team.isFetching"
              ng-click="request.getPlayerTeamData(request.playerId)">
              Get Player Team Data
              <img
                ng-show="request.team.isFetching"
                src="http://jxnblk.com/loading/loading-spin.svg" />
            </button>
          </li>
        </ul>
        <div class="row">
          <ol>
            <li ng-repeat="team in request.team.teamInfo">
              {{ team.teamFullName }} {{ team.seasonId }} {{ team.wins }} {{ team.losses }}
            </li>
          </ol>
        </div>
      </div>
    `,
    controller: 'RequestController',
    controllerAs: 'request'
  }))
  .controller('RequestController', RequestController)
  .name;
