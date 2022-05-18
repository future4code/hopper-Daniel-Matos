import React, { Component } from "react";
import { Label, Input } from "../styles";

class PerguntaAberta extends Component {
  render() {
    return (
      <>
        <Label>{this.props.pergunta}</Label>
        <Input type="text" />
      </>
    );
  }
}

export default PerguntaAberta;
