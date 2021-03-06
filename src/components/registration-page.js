import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

import './registration-page.css';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <main className="register-page-wrapper">
      <div className="register-form-wrapper">
        <h2>Register Form</h2>
        <RegistrationForm />
        <p
          className="form-link-wrapper">
          Already have FF account?
              <Link to="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
