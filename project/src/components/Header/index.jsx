/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const HeaderComponent = props => {
  const style = {
    margin: 12,
  };
    let logoutButton;
    if(props.username !== '') {
        logoutButton =
          <RaisedButton label="Logout" primary={true} style={style} />
    }
    const onChangeScreen = props.changeScreenName;
    return (
      <div>
        <AppBar
          title="My Company"
          iconElementRight={<div>
            Welcome, {props.username}
            <br />
            {logoutButton}
          </div>}
        />
      </div>
    );
};

HeaderComponent.propTypes = {
  changeScreenName: PropTypes.func,
  username: PropTypes.string
};

export default HeaderComponent;

