import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/login';

import Title from '../components/ui/Title';
import LoginForm from '../components/login/LoginForm';

function mapStateToProps(state) {
  return {
    hasError: state.session.get('hasError'),
    loginAttempts: state.session.get('loginAttempts'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptLogin: (username, password) => dispatch(login(username, password)),
  };
}

const Login = ({ hasError, loginAttempts, attemptLogin }) => {
  return (
    <div>
      <Title>Login</Title>

      <LoginForm
        hasError={ hasError }
        loginAttempts={ loginAttempts }
        onSubmit={ ({ username, password }) => attemptLogin(username, password ) } />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
