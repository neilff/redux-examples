import {bindActionCreators} from 'redux';

export const REQUEST_COMPANY = '@@reduxAction/REQUEST_COMPANY';
export const REQUEST_COMPANY_SUCCESS = '@@reduxAction/REQUEST_COMPANY_SUCCESS';
export const REQUEST_COMPANY_ERROR = '@@reduxAction/REQUEST_COMPANY_ERROR';

export function queryAutocomplete(query) {
  return {
    types: [
      REQUEST_COMPANY,
      REQUEST_COMPANY_SUCCESS,
      REQUEST_COMPANY_ERROR
    ],
    config: {
      method: 'get',
      url: `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
    },
    meta: {
      timestamp: Date.now(),
      query: query
    }
  };
}

export default function autoCompleteActions($ngRedux) {
  let actionCreator = {
    queryAutocomplete
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

autoCompleteActions.$inject = ['$ngRedux'];
