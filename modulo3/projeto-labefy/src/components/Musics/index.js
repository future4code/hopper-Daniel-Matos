import React from "react";

class Musics extends React.Component {
  state = {
    musicName: "",
  };

  onChangeInputMusicName = (event) => {
    this.setState({ musicName: event.target.value });
  };

  addMusic = (musicName) => {
    console.log(musicName);
  };
  render() {
    return (
      <div>
        <span>Musics of {this.props.currentPlaylist}</span>
        <input
          placeholder="Criar música"
          value={this.state.musicName}
          onChange={this.onChangeInputMusicName}
        />
        <button onClick={() => this.addMusic(this.state.musicName)}>+</button>
        <ul>
          <li>
            <button onClick={() => this.props.toggleMusic("music 1")}>
              music 1
            </button>
          </li>
          <li>
            <button onClick={() => this.props.toggleMusic("music 2")}>
              music 2
            </button>
          </li>
          <li>
            <button onClick={() => this.props.toggleMusic("music 3")}>
              music 3
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Musics;
