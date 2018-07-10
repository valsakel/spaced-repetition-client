import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestions} from '../actions/questions';

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

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit answer ran');
    if (this.input.value === this.props.questions.data[this.state.questionIndex].a) {
      console.log('Answer is correct');
      if (this.state.questionIndex < 2) {
        this.setState({
          questionIndex: ++this.state.questionIndex
        });
      } else {
        this.setState({
          questionIndex: 0
        });
      }
    } else {
      console.log('Answer is wrong');
    }

    const obj = {
      currQuestion: this.props.questions.data[this.state.questionIndex].q,
      userAnswer: this.input.value
    };

    // clear user input
    this.input.value = '';

    // set focus back to input field
    this.input.focus();

    console.log('user input to be sent', obj);
  };

    render() {
      console.log('RENDER', this.props.questions.data.length);
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                {/*<div className="dashboard-protected-data">*/}
                  {/*{question}*/}
                {/*</div>*/}
                <div className="">
                  <div>
                    { this.props.questions.data.length > 0
                      ?
                      this.props.questions.data[this.state.questionIndex].q
                      :
                      <p>hello</p>
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
                  <button disabled>Next</button>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        questions: state.questions,
        questionIndex: 0
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
