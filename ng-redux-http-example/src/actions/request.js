import {bindActionCreators} from 'redux';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';

export function loadPosts(reddit = 'all') {
  return {
    // Types of actions to emit before and after
    types: ['REQUEST_POSTS', 'REQUEST_POSTS_SUCCESS', 'REQUEST_POSTS_ERROR'],

    // Check the cache (optional):
    shouldCallAPI: (state) => !state.posts.data,

    // Configure $http
    config: {
      method: 'get',
      url: `https://www.reddit.com/r/${reddit}.json`,
    },

    // Metadata to inject in begin/end actions
    meta: {
      timestamp: Date.now()
    }
  };
}

export function forceHttpError() {
  return {
    types: ['REQUEST_POSTS', 'REQUEST_POSTS_SUCCESS', 'REQUEST_POSTS_ERROR'],
    config: {
      method: 'get',
      url: `https://www.reddit.com/r/garbagejunkredditidontexist.json`,
    }
  };
}

export default function requestActions($ngRedux) {
  let actionCreator = {
    loadPosts,
    forceHttpError
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

requestActions.$inject = ['$ngRedux'];
