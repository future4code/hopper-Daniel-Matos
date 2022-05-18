import React, { Component } from "react";
import { Container, Button } from "../../styles";
import PerguntaAberta from "../../components/PerguntaAberta";
import PerguntaOpcoes from "../../components/PerguntaOpcoes";

class Etapa1 extends Component {
  state = {
    escolaridade: "",
  };
  proximaEtapa = (escolaridade) => {
    if (
      escolaridade === "Médio Incompleto" ||
      escolaridade === "Médio Completo"
    ) {
      this.props.proximaEtapa(3);
    } else if (
      escolaridade === "Superior Incompleto" ||
      escolaridade === "Superior Completo"
    ) {
      this.props.proximaEtapa(2);
    }
  };
  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          options={[
            "Médio Incompleto",
            "Médio Completo",
            "Superior Incompleto",
            "Superior Completo",
          ]}
          escolha={(escolaridade) => this.setState({ escolaridade })}
        />
        <Button onClick={() => this.proximaEtapa(this.state.escolaridade)}>
          Próxima etapa
        </Button>
      </Container>
    );
  }
}

export default Etapa1;
