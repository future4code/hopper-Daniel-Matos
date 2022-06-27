import React, { Component } from "react";
import axios from "axios";
import Musics from "./components/Musics";
import Playlists from "./components/Playlists";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "daniel-matos-hooper",
  },
};

class App extends Component {
  state = {
    playlists: [],
    currentPlaylist: "",
    musics: [],
  };

  componentDidMount() {
    this.loadingPlaylist();
  }

  loadingPlaylist = () => {
    axios
      .get(url, headers)
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
      .post(url, body, headers)
      .then(() => {
        this.loadingPlaylist();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${url}/${playlistId}`, headers)
      .then(() => {
        if (playlistId === this.state.currentPlaylist.id) {
          this.setState({ currentPlaylist: "" });
        }
        this.loadingPlaylist();
      })
      .catch((err) => console.log(err));
  };

  loadingMusics = (playlistId) => {
    axios
      .get(`${url}/${playlistId}/tracks`, headers)
      .then((response) => {
        this.setState({ musics: response.data.result.tracks });
      })
      .catch((error) => {
        console.log("Erro", error.response.data);
      });
  };

  addMusic = (musicName, artistName) => {
    if (this.state.currentPlaylist) {
      const body = {
        name: musicName,
        artist: artistName,
        url: "http://spoti4.future4.com.br/1.mp3",
      };
      axios
        .post(`${url}/${this.state.currentPlaylist.id}/tracks`, body, headers)
        .then(() => {
          this.loadingMusics(this.state.currentPlaylist.id);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  };

  togglePlaylist = (playlist) => {
    this.setState({ currentPlaylist: playlist });
    this.loadingMusics(playlist.id);
  };

  closePlaylist = () => {
    this.setState({ currentPlaylist: "" });
  };

  renderMusics = () => {
    if (this.state.currentPlaylist) {
      return (
        <Musics
          currentPlaylist={this.state.currentPlaylist}
          musics={this.state.musics}
          addMusic={this.addMusic}
          closePlaylist={this.closePlaylist}
        />
      );
    }
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
        {this.renderMusics()}
      </div>
    );
  }
}

export default App;
