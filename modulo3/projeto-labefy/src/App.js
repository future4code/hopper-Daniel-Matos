import React, { Component } from "react";
import axios from "axios";
import Musics from "./components/Musics";
import Player from "./components/Player";
import Playlists from "./components/Playlists";

class App extends Component {
  state = {
    playlists: [],
    currentPlaylist: "",
    currentMusic: "",
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  pegarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "daniel-matos-hooper",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log("Erro", error.response.data);
      });
  };

  addPlaylist = (playlist) => {
    const body = {
      name: playlist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "daniel-matos-hooper",
          },
        }
      )
      .then(() => {
        this.pegarPlaylist();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "daniel-matos-hooper",
          },
        }
      )
      .then(() => {
        this.pegarPlaylist();
      })
      .catch((err) => console.log(err));
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
          deletePlaylist={this.deletePlaylist}
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
