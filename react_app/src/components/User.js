import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  render() {
    //We can use Destructuring here:
    const {name,department,salary} = this.props;
    return (
      <div>
        <ul>
          <li>Name :{name}</li>
          <li>Department :{department}</li>
          <li>Salary :{salary}</li>
        </ul>
      </div>
    )
  }
}
User.defaultProps = {
  salary : "no info",
  department : "no info"
}
User.prototype = {
  name : PropTypes.string.isRequired
}

export default User;
//Here we are using promps to create more then one element from one same element.