import React from "react";
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Final from "./pages/Final";
import { Main } from "./styles";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  irEtapa = (etapa) => {
    this.setState({ etapa: etapa });
  };

  render() {
    let pagina;
    switch (this.state.etapa) {
      case 1:
        pagina = <Etapa1 proximaEtapa={(etapa) => this.irEtapa(etapa)} />;
        break;
      case 2:
        pagina = <Etapa2 proximaEtapa={(etapa) => this.irEtapa(etapa)} />;
        break;
      case 3:
        pagina = <Etapa3 proximaEtapa={(etapa) => this.irEtapa(etapa)} />;
        break;
      case 4:
        pagina = <Final proximaEtapa={(etapa) => this.irEtapa(etapa)} />;
        break;
      default:
        pagina = <Final proximaEtapa={(etapa) => this.irEtapa(etapa)} />;
        break;
    }
    return <Main>{pagina}</Main>;
  }
}
