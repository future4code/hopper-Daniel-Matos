import React from "react";

class MessageList extends React.Component {
  state = {
    mensagen: "list",
  };
  render() {
    return <div>{this.state.mensagen}</div>;
  }
}

export default MessageList;
