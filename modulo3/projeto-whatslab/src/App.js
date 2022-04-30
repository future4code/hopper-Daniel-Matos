import React from "react";
import SendMessage from "./components/SendMessage";
import MessageList from "./components/MessageList";

class App extends React.Component {
  state = {
    messages: [],
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
      <div>
        <MessageList messages={this.state.messages} />
        <SendMessage onClickSendMessage={onClickSendMessage} />
      </div>
    );
  }
}

export default App;
