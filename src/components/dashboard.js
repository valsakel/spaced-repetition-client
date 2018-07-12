import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchQuestions } from '../actions/questions';
import { clearAnswer, fetchAnswers } from '../actions/answers';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.head);

    const userAnswer = {
      answer: this.input.value,
      head: this.props.head
    };

    this.props.dispatch(fetchAnswers(userAnswer))
    // console.log('onSubmit answer ran');
    // if (this.input.value === this.props.questions.data[this.state.questionIndex].a) {
    //   console.log('Answer is correct');
    //   if (this.state.questionIndex < 2) {
    //     this.setState({
    //       questionIndex: ++this.state.questionIndex
    //     });
    //   } else {
    //     this.setState({
    //       questionIndex: 0
    //     });
    //   }
    // } else {
    //   console.log('Answer is wrong');
    // }
    //
    // const obj = {
    //   currQuestion: this.props.questions.data[this.state.questionIndex].q,
    //   userAnswer: this.input.value
    // };
    //
    // this.props.dispatch(updateCorrectAnswer(this.props.questions.data[this.state.questionIndex].q));
    //
    // // clear user input
    // // this.input.value = '';
    //
    // // set focus back to input field
    // this.input.focus();
    //
    // console.log('user input to be sent', obj);
  };

  onNext = e => {
    e.preventDefault();
    this.props.dispatch(clearAnswer());
    this.props.dispatch(fetchQuestions());

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
              <p>
                Question is: {this.props.questions.data.prompt}
                </p>
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
    questionIndex: 0
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
