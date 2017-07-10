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
            passwordErrorMsg: '',
            open: false
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleTouchTap() {
        this.setState({
            open: true
        });
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    handleUsernameChange(event) {
        const username = event.target.value;
        this.setState({ username, usernameErrorMsg: '' });
    }

    handlePasswordChange(event) {
        const password = event.target.value;
        this.setState({ password, passwordErrorMsg: '' });
    }

    onSubmit() {
        if (this.state.username === '' && this.state.password === '') {
            this.setState({
                usernameErrorMsg: 'This field is required',
                passwordErrorMsg: 'This field is required'
            });
        } else if (this.state.username === '') {
            this.setState({ usernameErrorMsg: 'This field is required' });
        } else if (this.state.password === '') {
            this.setState({ passwordErrorMsg: 'This field is required' });
        } else {
            this.props.checkLogin(this.state.username, this.state.password);
            if (this.props.loggedInUser === false) {
                this.handleTouchTap();
            } else {
                this.handleRequestClose();
            }
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
              handleRequestClose={this.handleRequestClose}
              open={this.state.open}
              handleTouchTap={this.handleTouchTap}
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
