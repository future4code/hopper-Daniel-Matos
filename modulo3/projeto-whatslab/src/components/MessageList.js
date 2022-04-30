import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const MessageContainer = styled.p``;
const Message = styled.span``;
const User = styled.span`
  font-weight: bolder;
`;

class MessageList extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.messages.map((message) => (
            <MessageContainer key={message.id}>
              <User>{message.user}: </User>
              <Message>{message.message}</Message>
            </MessageContainer>
          ))}
        </Container>
      </div>
    );
  }
}

export default MessageList;
