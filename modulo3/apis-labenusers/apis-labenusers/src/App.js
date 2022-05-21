import React, { Component } from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";

class App extends Component {
  state = {
    users: [],
    error: "",
  };

  componentDidMount() {
    this.requestUsers();
  }

  requestUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "daniel-matos-hopper",
          },
        }
      )
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
  };

  createUser = (user) => {
    const body = user;
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "daniel-matos-hopper",
          },
        }
      )
      .then(() => {
        this.setState({ error: "" });
        this.requestUsers();
      })
      .catch((response) =>
        this.setState({ error: response.response.data.message })
      );
  };

  deleteUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "daniel-matos-hopper",
          },
        }
      )
      .then(() => {
        this.setState({ error: "" });
        this.requestUsers();
      })
      .catch((response) =>
        this.setState({ error: response.response.data.message })
      );
  };

  render() {
    return (
      <div>
        <div>{this.state.error}</div>
        <CreateUser createUser={(user) => this.createUser(user)} />
        <UsersList
          users={this.state.users}
          deleteUser={(id) => this.deleteUser(id)}
        />
      </div>
    );
  }
}

export default App;
