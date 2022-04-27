import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    comentario: "",
  };

  onChangeComentario(e) {
    // console.log(e);
    if (e.target.value.length <= 10) {
      this.setState({
        comentario: e.target.value,
      });
    }
  }

  render() {
    return (
      <CommentContainer>
        <InputComentario
          placeholder={"Comentário"}
          value={this.state.comentario}
          onChange={(e) => this.onChangeComentario(e)}
        />
        <button onClick={() => this.props.aoEnviar(this.state.comentario)}>
          Enviar
        </button>
      </CommentContainer>
    );
  }
}
