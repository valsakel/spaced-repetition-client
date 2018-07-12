import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom'

import NavBar from "./nav-bar";

import './header-bar.css'

class HeaderBarNew extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header-bar" role="banner">
          <div>
            <Link
              to="/"
              className="header-link"
            >
              FlashFluent
            </Link>
          </div>
          <NavBar />
        </header>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBarNew);