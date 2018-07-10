import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import './landing-page.css';
import algorithm_icon from '../images/algorithm.svg'
import pantone_icon from '../images/pantone.svg'
import alarmclock_icon from '../images/alarm-clock.svg';



export function LandingPage(props) {
  console.log('LANDING PAGE', props);
  // // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <main className="lp-main-section" role="main">
        <section className="lp-hero-section">
          <h2 className="lp-hero-header">
            Memorizing words in a foreign language never been easier
          </h2>
          {/*<div className="landing-page-welcome-footer">*/}
          <Link
            to={`/register`}
            className="lp-hero-btn"
            aria-label="Click to register"
          >
            Check it out
          </Link>
          {/*<a*/}
          {/*href="#landing-page-how-works-wrapper"*/}
          {/*className="landing-page-how-works-link"*/}
          {/*aria-label="Click to show how it works section"*/}
          {/*>*/}
          {/*How it works*/}
          {/*</a>*/}
          {/*</div>*/}
        </section>
        <section className="lp-about-section">
          <h3>What makes FlashFluent unique?</h3>
          <div className="lp-about-section-details">
            <div>
              {/*<div>*/}
              <img
                className="lp-about-section-icon"
                src={alarmclock_icon}
                alt="algorithm"
              />
              {/*</div>*/}

              <p>
                Built-in spaced repetition algorithm ensures that you keep learning
                words that don't stick.

              </p>
            </div>
            <div>
              <img
                className="lp-about-section-icon"
                src={algorithm_icon}
                alt="algorithm"
              />
              <p>
                Built-in spaced repetition algorithm ensures that you keep learning
                words that don't stick.

              </p>
            </div>
            <div>
              <img
                className="lp-about-section-icon"
                src={pantone_icon}
                alt="algorithm"
              />
              <p>
                Carefully chosen color scheme for this app is intended to increase brain recognition and stimulate memory.

              </p>
            </div>
          </div>


        </section>
      </main>
      {/*<LoginForm />*/}

      {/*<Link to="/register">Check it out</Link>*/}
      {/*<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
      {/*<div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
      {/*<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
    </React.Fragment>

  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);