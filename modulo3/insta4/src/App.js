import React from "react";
import styled from "styled-components";
import Post from "./components/Post";
import uuid from "react-uuid"; // https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FormNewPost = styled.div`
  padding: 10px;
`;
const InputNewPots = styled.input`
  padding: 10px;
  margin: 10px;
  border: 2px solid #000;
`;
const ButtonNewPots = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #fff;
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
        postagem: "",
        key: 1,
      },
    ],
    novoUsuario: {
      nome: "",
      fotoUsuario: "",
      fotoPost: "",
      postagem: "",
      key: "",
    },
  };

  render() {
    const adicionarPost = () => {
      const novoUsuario = {
        ...this.state.novoUsuario,
        fotoUsuario:
          "https://i.picsum.photos/id/939/50/50.jpg?hmac=zdiuye-Ef4lr4kW4uiDYU-cZLLdaH2Nom6tinqc1Wi0",
        key: uuid(),
      };
      this.setState({
        usuarios: [...this.state.usuarios, novoUsuario],
      });

      this.setState({
        novoUsuario: {
          nome: "",
          fotoUsuario: "",
          fotoPost: "",
          postagem: "",
          key: "",
        },
      });
    };
    const onChangeInputNome = (e) => {
      this.setState({
        novoUsuario: { ...this.state.novoUsuario, nome: e.target.value },
      });
    };
    const onChangeInputPostagem = (e) => {
      this.setState({
        novoUsuario: { ...this.state.novoUsuario, postagem: e.target.value },
      });
    };
    return (
      <MainContainer>
        <FormNewPost>
          <InputNewPots
            placeholder="Nome"
            value={this.state.novoUsuario.nome}
            onChange={(event) => onChangeInputNome(event)}
          />
          <InputNewPots
            placeholder="Nova postagem"
            value={this.state.novoUsuario.postagem}
            onChange={(event) => onChangeInputPostagem(event)}
          />
          <ButtonNewPots onClick={() => adicionarPost()}>Postar</ButtonNewPots>
        </FormNewPost>
        {this.state.usuarios.map((usuario) => {
          return (
            <Post
              nomeUsuario={usuario.nome}
              fotoUsuario={usuario.fotoUsuario}
              fotoPost={usuario.fotoPost}
              postagem={usuario.postagem}
              key={usuario.key}
            />
          );
        })}
      </MainContainer>
    );
  }
}

export default App;
