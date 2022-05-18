import React, { Component } from "react";
import PerguntaAberta from "../../components/PerguntaAberta";
import { Container, Label, Input, Button } from "../../styles";

class Etapa2 extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
        <Button onClick={() => this.props.proximaEtapa(4)}>
          Próxima etapa
        </Button>
      </Container>
    );
  }
}

export default Etapa2;
