import React from "react";
import styled from "styled-components";

const User = styled.input``;
const Input = styled.input``;
const Button = styled.button``;

class SendMessage extends React.Component {
  state = {
    user: "",
    message: "",
  };

  onChangeUser(e) {
    this.setState({ user: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onClickSendMessage() {
    this.props.onClickSendMessage(this.state.user, this.state.message);
    this.setState({ user: "", message: "" });
  }
  render() {
    return (
      <div>
        <User
          placeholder="Usuário"
          value={this.state.user}
          onChange={(event) => this.onChangeUser(event)}
        />
        <Input
          placeholder="Mensagem"
          value={this.state.message}
          onChange={(event) => this.onChangeMessage(event)}
        />
        <Button onClick={() => this.onClickSendMessage()}>Enviar</Button>
      </div>
    );
  }
}

export default SendMessage;
