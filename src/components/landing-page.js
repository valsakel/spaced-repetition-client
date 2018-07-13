import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './landing-page.css';
import algorithm_icon from '../images/algorithm.svg'
import pantone_icon from '../images/pantone.svg'
import alarmclock_icon from '../images/alarm-clock.svg';

export function LandingPage(props) {
  // // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <main className="lp-main-section" role="main">
        <section className="lp-hero-section">
          <h2 className="lp-hero-header">
            Memorizing famous architectural masterpieces never been easier
          </h2>
          <Link
            to={`/register`}
            className="lp-hero-btn"
            aria-label="Click to register"
          >
            Check it out
          </Link>
        </section>
        <section className="lp-about-section">
          <h3>What makes FlashFluent unique?</h3>
          <div className="lp-about-section-details">
            <div>
              <img
                className="lp-about-section-icon"
                src={alarmclock_icon}
                alt="algorithm"
              />

              <p>
                Questions are scored and shown less and less the more you get it right.
                {/* Built-in timer will remind you to take breaks every 20 minutes
                to re-energize. */}
              </p>
            </div>
            <div>
              <img
                className="lp-about-section-icon"
                src={pantone_icon}
                alt="algorithm"
              />
              <p>
                Color scheme is intended to increase brain recognition and stimulate memory.
              </p>
            </div>
            <div>
              <img
                className="lp-about-section-icon"
                src={algorithm_icon}
                alt="algorithm"
              />
              <p>
                Learn new words faster through a built-in spaced repetition technique.
              </p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>

  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
