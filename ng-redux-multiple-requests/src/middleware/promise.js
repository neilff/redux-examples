import angular from 'angular';
import invariant from 'invariant';

function isPromise(value) {
  return angular.isDefined(value) &&
         angular.isObject(value) &&
         angular.isFunction(value.then);
}

export default function promiseMiddleware() {
  return ({dispatch, getState}) => next => action => {
    const {
      types,
      config,
      meta = {},
      payload
    } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    invariant(
      isPromise(payload.promise),
      'Expected payload.promise to be a promise.'
    );

    invariant(
      angular.isArray(types) &&
      types.length === 3 &&
      types.every(i => angular.isString(i)),
      'Expected an array of three string types.'
    );

    const [
      requestType,
      successType,
      failureType
    ] = types;

    dispatch({
      type: requestType,
      payload
    });

    return payload.promise.then(
      response => dispatch({
        type: successType,
        payload: response
      }),
      error => dispatch({
        type: failureType,
        error: true,
        payload: {
          error: error.data,
          meta
        }
      })
    );
  }
}
