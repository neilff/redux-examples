import React from 'react';
import { reduxForm } from 'redux-form';

import Button from '../ui/Button';
import Label from '../ui/Label';
import InputText from '../ui/InputText';
import FormError from '../ui/FormError';
import FormGroup from '../ui/FormGroup';

const formDefinition = {
  form: 'loginForm',
  fields: [
    'username',
    'password',
  ],
};

const LoginForm = (props) => {
  const {
    fields: {
      username,
      password,
    },
    hasError,
    loginAttempts,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <FormError isVisible={ hasError }>
        Invalid username / password. You've attempted to login { loginAttempts } times.
      </FormError>

      <FormGroup>
        <Label>Username</Label>
        <InputText
          type="text"
          binding={ username } />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <InputText
          type="password"
          binding={ password } />
      </FormGroup>

      <FormGroup>
        <Button>Login</Button>
      </FormGroup>
    </form>
  );
};

export default reduxForm(
  formDefinition,
)(LoginForm);
