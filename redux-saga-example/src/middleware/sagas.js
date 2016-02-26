import sagaMiddleware from 'redux-saga';

import toastQueue from '../sagas/toastQueue';

const sagas = sagaMiddleware(toastQueue);

export default sagas;
