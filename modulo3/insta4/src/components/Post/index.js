import React from "react";
import {
  PostContainer,
  PostHeader,
  PostFooter,
  UserPhoto,
  PostPhoto,
  PostMensage,
} from "./styles";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: !this.state.curtido ? 1 : 0,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = (comentario) => {
    console.log(comentario);
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;
    if (this.state.curtido) iconeCurtida = iconeCoracaoPreto;
    else iconeCurtida = iconeCoracaoBranco;

    let componenteComentario;
    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario
          aoEnviar={(comentario) => this.aoEnviarComentario(comentario)}
        />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        {this.props.fotoPost ? (
          <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />
        ) : (
          ""
        )}
        {this.props.postagem ? (
          <PostMensage>{this.props.postagem}</PostMensage>
        ) : (
          ""
        )}

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post;
