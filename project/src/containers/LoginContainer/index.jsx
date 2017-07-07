/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoginComponent from 'components/LoginComponent';

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      usernameErrorMsg: '',
      passwordErrorMsg: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }

  handleUsernameChange(event) {
    let username = event.target.value;
    this.setState({username: username, usernameErrorMsg: ''});

  }

  handlePasswordChange(event) {
    let password = event.target.value;
    this.setState({password: password, passwordErrorMsg: ''});
  }

  onSubmit() {
    if (this.state.username === '' && this.state.password === '') {
      this.setState({
        usernameErrorMsg: 'This field is required',
        passwordErrorMsg: 'This field is required'
      });
    } else if (this.state.username === '') {
      this.setState({usernameErrorMsg: 'This field is required'});
    } else if (this.state.password === '') {
      this.setState({passwordErrorMsg: 'This field is required'});
    } else {
      this.props.checkLogin(this.state.username, this.state.password);
    }
  }

  render() {

    return (
      <div>
        <LoginComponent
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          onSubmit={this.onSubmit}
          userErrorMsg={this.state.usernameErrorMsg}
          passwordErrorMsg={this.state.passwordErrorMsg}
          loggedInUser={this.props.loggedInUser}
          openErrorMessage={this.props.openErrorMessage}
          handleRequestClose={this.props.handleRequestClose}
        />
      </div>
    );
  }
}

LoginContainer.PropTypes = {
  checkLogin: PropTypes.func,
  loggedInUser: PropTypes.bool
};

export default LoginContainer;