/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const EmployeeComponent = props => {
    const employeeComps = props.employeeList.map(
    emp => (
      <div
        className="listDiv"
        key={emp.id}
      >
        {emp.name}
      </div>));

    return (
      <div className="mainListDiv">
        {employeeComps}
      </div>);
};

EmployeeComponent.PropTypes = {
  employeeList: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeComponent;
