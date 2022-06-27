import React, { Component } from "react";

class UsersList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => this.props.deleteUser(user.id)}>X</button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
