/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

const style = {
  margin: 12,
};

const LoginComponent = props => {
  const handleUsernameChange = props.handleUsernameChange;
  const handlePasswordChange = props.handlePasswordChange;
  const onSubmit = props.onSubmit.bind(this);
  const userErrorMsg = props.userErrorMsg;
  const passwordErrorMsg = props.passwordErrorMsg;

  return (
    <MuiThemeProvider>
      <div>
        <TextField
          hintText="Username Field"
          floatingLabelText="Username"
          errorText={userErrorMsg}
          onChange={handleUsernameChange}
        />
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          errorText={passwordErrorMsg}
          onChange={handlePasswordChange}
        />
        <br />
        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          onClick={onSubmit}
        />
        <Snackbar
          open={props.openErrorMessage}
          message="Wrong Credentials"
          autoHideDuration={4000}
          onRequestClose={props.handleRequestClose}
        />
      </div>
    </MuiThemeProvider>
  );
};

LoginComponent.propTypes = {
  handleUsernameChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  onSubmit: PropTypes.func,
  userErrorMsg: PropTypes.string,
  passwordErrorMsg: PropTypes.string
};

export default LoginComponent;
