import React from 'react';
import { Link } from 'react-router-dom';

import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

import './nav-bar.css'

class NavBar extends React.Component {

  signOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };

  render() {
    // When user is logged in render log out button and link to dashboard
    // Otherwise, render links to log in, register, and view demo components
    return (
      <React.Fragment>
        <nav
          className="nav-bar"
          role="navigation">
          {this.props.loggedIn
          ?
            <React.Fragment>
              <Link
                to={`/dashboard`}
                className="dashbrd-btn"
                aria-label="Click to register"
              >
                Dashboard
              </Link>
              <button onClick={this.signOut}>Sign out</button>
            </React.Fragment>
          :
            <React.Fragment>
              <Link
                to={`/login`}
                className="login-link"
                aria-label="Click to log in"
              >
                Log in
              </Link>
              <Link
                to={`/register`}
                className="register-link"
                aria-label="Click to sign up"
              >
                Register
              </Link>
              <Link
                to={`/login`}
                className="demo-btn"
                aria-label="Click to sign in as demo user"
              >
                View Demo
              </Link>
            </React.Fragment>
          }
        </nav>
      </React.Fragment>
    )
  }
}

export default NavBar;