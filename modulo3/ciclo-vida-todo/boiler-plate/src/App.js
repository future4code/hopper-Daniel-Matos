import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidMount() {
    // localStorage.removeItem("tarefas");
    // console.log(JSON.parse(localStorage.getItem("tarefas")));
    const tarefasLS = localStorage.getItem("tarefas");
    if (tarefasLS) {
      this.setState({
        tarefas: [...JSON.parse(tarefasLS)],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    if (this.state.inputValue) {
      const tarefaNova = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false,
      };
      const tarefas = [...this.state.tarefas, tarefaNova];
      this.setState({ tarefas: tarefas, inputValue: "" });
    }
  };

  selectTarefa = (id) => {
    const tarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const tarefaCompletada = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return tarefaCompletada;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: tarefas });
  };

  onChangeFilter = (event) => {
    const filtro = event.target.value;
    this.setState({ filtro: filtro });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {this.state.tarefas ? (
            listaFiltrada.map((tarefa) => {
              return (
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                  key={tarefa.id}
                >
                  {tarefa.texto}
                </Tarefa>
              );
            })
          ) : (
            <p>Adicione uma lista</p>
          )}
        </TarefaList>
      </div>
    );
  }
}

export default App;
