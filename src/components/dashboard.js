import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchQuestions} from '../actions/questions';

export class Dashboard extends React.Component {
  componentDidMount() {
      this.props.dispatch(fetchQuestions());
  }



  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit answer ran');
    if (this.input.value === this.props.questions[0].answer) {
      console.log('Answer is correct');
    } else {
      console.log('Answer is wrong');
    }
  };

    render() {

      // if (this.props.questions[0]) {
        // console.log(this.props.questions[0]);
      // }

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    {/*Protected data: {this.props.questions}*/}
                </div>
                <div className="">
                  <div>
                    {/*<p>{this.props.questions[0].question}</p>*/}
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
        questions: state.questions.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
