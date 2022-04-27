import React from "react";
import styled from "styled-components";
import Post from "./components/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

class App extends React.Component {
  state = {
    usuarios: [
      {
        nome: "Daniel",
        fotoUsuario:
          "https://i.picsum.photos/id/939/50/50.jpg?hmac=zdiuye-Ef4lr4kW4uiDYU-cZLLdaH2Nom6tinqc1Wi0",
        fotoPost:
          "https://i.picsum.photos/id/239/200/150.jpg?hmac=do1FZaZATFB-KqhhTB8kyNpHrvFEoW7VHlyx86WNVlU",
      },
      {
        nome: "Jose",
        fotoUsuario:
          "https://i.picsum.photos/id/1065/50/50.jpg?hmac=KIghqI_ik4jhR7g5-I-HrDPeqtjnbdJvsGwodKkdE3M",
        fotoPost:
          "https://i.picsum.photos/id/184/200/150.jpg?hmac=7Y3yggPUUpdICQ8ba458eK1RF8XDSKsgGS5XQtoXse8",
      },
      {
        nome: "Maria",
        fotoUsuario:
          "https://i.picsum.photos/id/223/50/50.jpg?hmac=d9E4sAF4Ic6iRfpqElIHdpsNd-OOr2sB-QBEosZm_Dc",
        fotoPost:
          "https://i.picsum.photos/id/692/200/150.jpg?hmac=MEdaOUJw_uiruXBamHHNejjt3FoWq_sTxxb6UrgXxaI",
      },
    ],
  };

  render() {
    return (
      <MainContainer>
        {this.state.usuarios.map((usuario) => {
          return (
            <Post
              nomeUsuario={usuario.nome}
              fotoUsuario={usuario.fotoUsuario}
              fotoPost={usuario.fotoPost}
            />
          );
        })}
      </MainContainer>
    );
  }
}

export default App;
