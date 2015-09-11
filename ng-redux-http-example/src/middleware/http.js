export default function httpMiddleware($http, $timeout) {
  function callAPI(config) {
    config = angular.extend(config, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return $http(config)
      .then(res => res.data);
  }

  return ({dispatch, getState}) => next => action => {
    const {
      types,
      config,
      shouldCallAPI = () => true,
      meta = {}
    } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof config !== 'object') {
      throw new Error('Expected config to be an object. See $http config.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(Object.assign({}, {
      type: requestType,
      payload: {
        meta
      }
    }));

    return callAPI(config).then(
      response => dispatch(Object.assign({}, {
        type: successType,
        payload: {
          response,
          meta
        }
      })),
      error => dispatch(Object.assign({}, {
        type: failureType,
        error: true,
        payload: {
          error: error.data,
          meta
        }
      }))
    );
  }
}

httpMiddleware.$inject = ['$http', '$timeout'];
