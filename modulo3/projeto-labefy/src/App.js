import React, { Component } from "react";
import Musics from "./components/Musics";
import Player from "./components/Player";
import Playlists from "./components/Playlists";

class App extends Component {
  state = {
    playlists: ["playlist 1", "playlist 2", "playlist 3"],
    currentPlaylist: "",
    currentMusic: "",
  };

  addPlaylist = (playlist) => {
    const newPlaylist = this.state.playlists;
    newPlaylist.push(playlist);
    this.setState({ playlists: newPlaylist });
  };

  togglePlaylist = (playlistName) => {
    this.setState({ currentPlaylist: playlistName });
  };

  toggleMusic = (musicName) => {
    this.setState({ currentMusic: musicName });
  };
  render() {
    return (
      <div>
        <Playlists
          playlists={this.state.playlists}
          addPlaylist={this.addPlaylist}
          togglePlaylist={this.togglePlaylist}
        />
        <Musics
          currentPlaylist={this.state.currentPlaylist}
          toggleMusic={this.toggleMusic}
        />
        <Player currentMusic={this.state.currentMusic} />
      </div>
    );
  }
}

export default App;
