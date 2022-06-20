import React from "react";

class Playlists extends React.Component {
  state = {
    playlistName: "",
  };

  onChangeInputPlaylistName = (event) => {
    this.setState({ playlistName: event.target.value });
  };

  addPlaylist = (playlistName) => {
    this.props.addPlaylist(playlistName);
    this.setState({ playlistName: "" });
  };
  render() {
    return (
      <div>
        <input
          placeholder="Criar nova playlist"
          value={this.state.playlistName}
          onChange={this.onChangeInputPlaylistName}
        />
        <button onClick={() => this.addPlaylist(this.state.playlistName)}>
          +
        </button>
        <ul>
          {this.props.playlists.map((playlist) => (
            <li key={playlist}>
              <button onClick={() => this.props.togglePlaylist(playlist)}>
                {playlist}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Playlists;
