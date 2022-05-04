import React, { Component } from "react";
import { Label, Select } from "../styles";

class PerguntaOpcoes extends Component {
  render() {
    return (
      <>
        <Label>{this.props.pergunta}</Label>
        <Select onChange={(e) => this.props.escolha(e.target.value)}>
          <option></option>
          {this.props.options.map((option) => (
            <option>{option}</option>
          ))}
        </Select>
      </>
    );
  }
}

export default PerguntaOpcoes;
