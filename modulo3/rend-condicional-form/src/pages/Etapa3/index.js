import React, { Component } from "react";
import PerguntaAberta from "../../components/PerguntaAberta";
import PerguntaOpcoes from "../../components/PerguntaOpcoes";
import { Container, Button } from "../../styles";

class Etapa3 extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          options={["Nenhum", "Curso Técnico", "Curso de Inglês"]}
        />
        <Button onClick={() => this.props.proximaEtapa(4)}>
          Próxima etapa
        </Button>
      </Container>
    );
  }
}

export default Etapa3;
