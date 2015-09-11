import angular from 'angular';

class RequestController {
  constructor($scope, $ngRedux, requestActions) {

    let unsubscribe = $ngRedux.connect(state => ({
      isFetching: state.posts.isFetching,
      error: state.posts.error,
      posts: state.posts.data
    }))(this);

    $scope.$on('$destroy', unsubscribe);

    this.loadPosts = requestActions.loadPosts;
    this.forceHttpError = requestActions.forceHttpError;
  }
}

RequestController.$inject = ['$scope', '$ngRedux', 'requestActions'];

export default angular
  .module('app.request', [])
  .directive('httpRequest', () => ({
    restrict: 'E',
    template: `
      <div>
        <p class="lead">Latest Reddit Posts</p>
        <div
          ng-if="request.error"
          class="alert alert-danger">
          An error occured: {{ request.error | json }}
        </div>
        <ul class="list-inline">
          <li>
            <button
              class="btn btn-primary"
              ng-class="{'btn-disabled': request.isFetching}"
              ng-disabled="request.isFetching"
              ng-click="request.loadPosts()">
              Request Posts
              <img
                ng-show="request.isFetching"
                src="http://jxnblk.com/loading/loading-spin.svg" />
            </button>
          </li>
          <li>
            <button
              class="btn btn-danger"
              ng-class="{'btn-disabled': request.isFetching}"
              ng-disabled="request.isFetching"
              ng-click="request.forceHttpError()">
              Request Error
              <img
                ng-show="request.isFetching"
                src="http://jxnblk.com/loading/loading-spin.svg" />
            </button>
          </li>
        </ul>
        <p class="lead" ng-if="request.posts.length <= 0">No posts loaded.</p>
        <ol ng-if="request.posts.length > 0">
          <li ng-repeat="post in request.posts">
            {{ post.data.title }}
          </li>
        </ol>
      </div>
    `,
    controller: 'RequestController',
    controllerAs: 'request'
  }))
  .controller('RequestController', RequestController)
  .name;
