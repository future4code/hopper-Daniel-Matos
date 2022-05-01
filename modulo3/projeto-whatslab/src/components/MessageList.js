import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 20px;
`;
const MessageContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const Message = styled.span``;
const User = styled.span`
  font-weight: bolder;
`;

class MessageList extends React.Component {
  render() {
    return (
      <Container>
        {this.props.messages.map((message) => (
          <MessageContainer key={message.id}>
            <User>{message.user}: </User>
            <Message>{message.message}</Message>
          </MessageContainer>
        ))}
      </Container>
    );
  }
}

export default MessageList;
