import React from 'react';
import { Link } from 'react-router-dom';

import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

import './nav-bar.css'

class NavBar extends React.Component {

  handleClick = e => {
    this.toggleMenu();
    e.stopPropagation();
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });

    // Set focus on hamburger 'open' button when sliding menu is hidden
    if (this.state.visible) {
      this.refs.open.focus();
    }
  };

  signOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let
      signOutBtn,
      dashboardBtn,
      signInBtn,
      signUpBtn,
      viewDemoBtn;

    if (this.props.loggedIn) {
      signOutBtn = (

        <button onClick={() => this.signOut()}>Sign out</button>

      );

      dashboardBtn = (
        <Link
          to={`/dashboard`}
          className="dashbrd-btn"
          aria-label="Click to register"
        >
          Dashboard
        </Link>
        // <button
        //   className="dashbrd-btn"
        //   onClick={() => this.logOut()}>Dashboard</button>
      );
    } else {
      signInBtn = (
        <Link
          to={`/signin`}
          className="signin-btn"
          aria-label="Click to sign in"
        >
          Sign in
        </Link>
        // <button
        //   className="signin-btn"
        //   onClick={() => this.signOut()}>Sign in</button>
      );
      signUpBtn = (
        <Link
          to={`/register`}
          className="signup-btn"
          aria-label="Click to sign up"
        >
          Sign up
        </Link>

      );
      viewDemoBtn = (
        <Link
          to={`/signin`}
          className="demo-btn"
          aria-label="Click to sign in as demo user"
        >
          View Demo
        </Link>

        // <button
        //   className="demo-btn"
        //   onClick={() => this.signOut()}>View Demo</button>
      );
    }
    return (
      <React.Fragment>

        <nav
          className="nav-bar"
          role="navigation">
          {signOutBtn}
          {dashboardBtn}
          {signInBtn}
          {signUpBtn}
          {viewDemoBtn}
          {/*<button*/}
          {/*id="menuButton"*/}
          {/*type="button"*/}
          {/*onClick={this.handleClick}*/}
          {/*ref="open"*/}
          {/*aria-expanded={this.state.visible}*/}
          {/*aria-label="MENU"*/}
          {/*aria-controls="overlay-menu"*/}
          {/*>*/}
          {/*<span className="icon-bar"></span>*/}
          {/*<span className="icon-bar"></span>*/}
          {/*<span className="icon-bar"></span>*/}
          {/*</button>*/}
        </nav>

      </React.Fragment>
    )
  }
}

export default NavBar;