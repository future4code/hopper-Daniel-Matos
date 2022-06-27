import React, { Component } from "react";

class CreateUser extends Component {
  state = {
    nameInput: "",
    emailInput: "",
  };

  onClickCreateUser = () => {
    const user = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };
    this.setState({ nameInput: "", emailInput: "" });
    this.props.createUser(user);
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          value={this.state.nameInput}
          onChange={(ev) => this.setState({ nameInput: ev.target.value })}
        />
        <input
          placeholder="E-mail"
          value={this.state.emailInput}
          onChange={(ev) => this.setState({ emailInput: ev.target.value })}
        />
        <button onClick={this.onClickCreateUser}>Criar usuario</button>
      </div>
    );
  }
}

export default CreateUser;
