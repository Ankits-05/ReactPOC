/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import EmployeeComponent from 'components/EmployeeComponent';

class EmployeeContainer extends React.Component {

  render() {
    return (
      <div>
        <EmployeeComponent employeeList={this.props.employeeList} />
      </div>
    )
  }

}

EmployeeContainer.PropTypes = {
  employeeList: PropTypes.arrayOf
};

export default EmployeeContainer;