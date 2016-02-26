import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import generateRandomToast from '../utils/generateRandomToast';

import * as toastActions from '../reducers/toasts';

import Toaster from '../components/Toaster';
import Toast from '../components/Toast';

function mapStateToProps(state) {
  return {
    toasts: state.toasts.toList(),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(toastActions, dispatch);
}

function App({ toasts, addToast, burnToast }) {
  return (
    <div className="m4">
      <h1>Toaster</h1>
      <button
        className="btn btn-primary"
        onClick={() => addToast(generateRandomToast())}>
          Add Toast to Toaster
      </button>


      <pre>{ JSON.stringify(toasts, null, 2) }</pre>

      <Toaster>
        {
          toasts.map(i => {
            return (
              <Toast
                key={ i.get('id') }
                onClick={ () => burnToast(i.get('id')) }
                type={ i.get('type') }
                message={ i.get('message') } />
            );
          })
        }
      </Toaster>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
