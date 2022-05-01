import React from "react";
import SendMessage from "./components/SendMessage";
import MessageList from "./components/MessageList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 500px;
  height: 100%;
  min-height: 100vh;
  background-color: #028251;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;
class App extends React.Component {
  state = {
    messages: [
      { user: "Daniel", message: "Oi!", id: Math.random() },
      { user: "Labenu", message: "Olá!", id: Math.random() },
      { user: "React", message: "Bom dia!", id: Math.random() },
      { user: "JSX", message: "Olá!", id: Math.random() },
      { user: "Javascript", message: "Oi!", id: Math.random() },
      { user: "Html", message: "Olá!", id: Math.random() },
      { user: "Css", message: "Oi!", id: Math.random() },
      { user: "React Native", message: "Olá!", id: Math.random() },
      { user: "Vue", message: "Oi!", id: Math.random() },
      { user: "Daniel", message: "Olá!", id: Math.random() },
    ],
  };

  render() {
    const onClickSendMessage = (user, message) => {
      this.setState({
        messages: [
          ...this.state.messages,
          { user, message, id: Math.random() },
        ],
      });
    };
    return (
      <Container>
        <MessageList messages={this.state.messages} />
        <SendMessage onClickSendMessage={onClickSendMessage} />
      </Container>
    );
  }
}

export default App;
