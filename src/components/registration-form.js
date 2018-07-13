import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux'
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

import './registration-form.css';

const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    console.log('onSubmit ERROR', this.props.error);

    const { username, password, firstname, lastname } = values;
    const user = { username, password, firstname, lastname };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    console.log('SIGN UP PROPS', this.props);

    return (
      <form
        className="register-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <Field
          component={Input}
          type="text"
          name="firstname"
          label="First Name"
        />
        <Field
          component={Input}
          type="text"
          name="lastname"
          label="Last Name"
        />
        <Field
          component={Input}
          type="text"
          name="username"
          label="Username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          label="Password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          label="Confirm password"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          className="register-form-btn"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
                </button>
      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);

export default RegistrationForm = connect(
  state => {
    return {
      isAuthenticated: state.auth.currentUser !== null,
      user: state.auth.currentUser,
      // error: state.auth.error
    }
  }
)(RegistrationForm);

