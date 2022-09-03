import React from "react";

class Musics extends React.Component {
  state = {
    musicName: "",
    artistName: "",
  };

  addMusic = (musicName, artistName) => {
    if (musicName && artistName) {
      this.props.addMusic(musicName, artistName);
      this.setState({ musicName: "", artistName: "" });
    }
  };

  render() {
    return (
      <div>
        <span>Musics of {this.props.currentPlaylist.name}</span>
        <input
          placeholder="Música"
          value={this.state.musicName}
          onChange={(event) => this.setState({ musicName: event.target.value })}
        />
        <input
          placeholder="Artista"
          value={this.state.artistName}
          onChange={(event) =>
            this.setState({ artistName: event.target.value })
          }
        />
        <button
          onClick={() =>
            this.addMusic(this.state.musicName, this.state.artistName)
          }
        >
          Adicionar música
        </button>
        <button onClick={this.props.closePlaylist}>Fechar Playlist</button>
        <ul>
          {this.props.musics.map((music) => (
            <li key={music.id}>
              {music.name} | {music.artist}
              <audio controls src={music.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Musics;
