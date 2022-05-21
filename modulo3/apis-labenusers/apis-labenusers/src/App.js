import React, { Component } from "react";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";

class App extends Component {
  state = {
    users: [],
  };
  createUser = (user) => {
    const newUsers = [...this.state.users, user];
    this.setState({ users: newUsers });
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <CreateUser createUser={(user) => this.createUser(user)} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
