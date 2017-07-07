/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'components/LoginContainer';
import EmployeeContainer from 'components/EmployeeContainer';

const BodyContainer = props => {

  if(props.screenName === 'Login') {
    return (<div>
        <LoginContainer
          loggedInUser={props.loggedInUser}
          checkLogin={props.checkLogin}
          openErrorMessage={props.openErrorMessage}
          handleTouchTap={props.handleTouchTap}
          handleRequestClose={props.handleRequestClose}
        />
      </div>
    )
  } else if(props.screenName === 'Employee') {
    return (
      <div>
        <EmployeeContainer employeeList={props.employeeList} />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  loggedInUser: PropTypes.bool,
  openErrorMessage: PropTypes.bool,
  handleTouchTap: PropTypes.func,
  handleRequestClose: PropTypes.func,
  screenName: PropTypes.string,
  employeeList: PropTypes.arrayOf
};

export default BodyContainer;

