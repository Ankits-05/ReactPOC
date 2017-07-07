/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'components/LoginContainer';

const BodyContainer = props => {
  if(props.screenName === 'login') {
    return (<div>

      <LoginContainer loggedInUser={props.loggedInUser} checkLogin={props.checkLogin}/>
    </div>)
  } else {
    return (<div>
      <LoginContainer loggedInUser={props.loggedInUser} checkLogin={props.checkLogin}/>
    </div>)
  }
}

BodyContainer.propTypes = {
  screenName: PropTypes.string,
  loggedInUser: PropTypes.bool
};

export default BodyContainer;

