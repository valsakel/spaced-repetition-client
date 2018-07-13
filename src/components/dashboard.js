import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchNextQuestion } from '../actions/questions';
import { clearAnswer, fetchAnswers } from '../actions/answers';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNextQuestion());
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.head);

    const userAnswer = {
      answer: this.input.value,
      head: this.props.head
    };

    this.props.dispatch(fetchAnswers(userAnswer))
  };

  onNext = e => {
    e.preventDefault();
    this.props.dispatch(clearAnswer());
    this.props.dispatch(fetchNextQuestion());

    // clear user input
    this.input.value = '';

    // set focus back to input field
    this.input.focus();
  };

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">

        </div>
        <div className="">
          <div>
            {this.props.questions.data
              ?
              <img
                className="dashboard-card-img"
                src={this.props.questions.data.prompt}
                // src={randomImg}
                alt="algorithm"
              />
              :
              <p>Loading</p>
            }
          </div>
          <div>
            {this.props.answer
              ?
              <p>
                Answer is: {this.props.answer}
              </p>
              :
              <p>What is the answer?</p>
            }
          </div>
          <label>
            <input
              id="text-input"
              type="text"
              title="Answer"
              aria-label="Answer"
              ref={input => (this.input = input)}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={this.onSubmit}
            aria-label="click to submit answer"
          >
            Submit
                  </button>
          <button
            type="button"
            disabled={!this.props.answer}
            onClick={this.onNext}
          >
            Next
                  </button>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  console.log(currentUser);
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.fullname}`,
    head: `${currentUser.head}`,
    questions: state.questions,
    answer: state.answer.answer,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
