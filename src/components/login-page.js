import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  console.log(props);
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <main className="register-page-wrapper">
      <div className="register-form-wrapper">
        <h2>Log in</h2>
        <LoginForm />
        <p
          className="form-link-wrapper">
          New to FF?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </main>



  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);