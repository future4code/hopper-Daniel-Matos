import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #028251;
  max-width: 100%;
`;
const User = styled.input`
  width: 20%;
  padding: 15px;
  border: 0;
  border-radius: 30px 0 0 30px;
`;
const Input = styled.input`
  width: 65%;
  padding: 5px;
  border: 0;
  border-radius: 0 5px 5px 0;
`;
const Button = styled.button`
  width: 15%;
  border: 0;
  background-color: #848484;
  color: #fff;
  border-radius: 30px;
  font-weight: bolder;
  font-size: 2em;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #454545;
  }
`;

class SendMessage extends React.Component {
  state = {
    user: "",
    message: "",
  };

  onChangeInputUser(e) {
    this.setState({ user: e.target.value });
  }
  onChangeInputMessage(e) {
    this.setState({ message: e.target.value });
  }
  onClickSendMessage(user, message) {
    if (user.length != 0 && message.length != 0) {
      this.props.onClickSendMessage(user, message);
      this.setState({ user: "", message: "" });
    }
  }
  render() {
    return (
      <Container>
        <User
          placeholder="Usuário"
          value={this.state.user}
          onChange={(event) => this.onChangeInputUser(event)}
        />
        <Input
          placeholder="Mensagem"
          value={this.state.message}
          onChange={(event) => this.onChangeInputMessage(event)}
        />
        <Button
          onClick={() =>
            this.onClickSendMessage(this.state.user, this.state.message)
          }
        >
          {">"}
        </Button>
      </Container>
    );
  }
}

export default SendMessage;
