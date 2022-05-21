import React, { Component } from "react";

class UsersList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default UsersList;
