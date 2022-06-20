import React from "react";

class Player extends React.Component {
  render() {
    return <div>Playing {this.props.currentMusic}</div>;
  }
}

export default Player;
