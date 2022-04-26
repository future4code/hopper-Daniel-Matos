import "./App.css";
import { videos } from "./videos";

function App() {
  const reproduzVideo = () => alert("O vídeo está sendo reproduzido");

  return (
    <div className="tela-inteira">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
        <div className="account">
          <span>D</span>
        </div>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          {videos.map((video) => {
            return (
              <div
                className={`box-pagina-principal ${video.className}`}
                onClick={reproduzVideo}
              >
                <img src={video.img} alt={video.title} />
                <div>
                  <div className="account"></div>
                  <span>{video.title}</span>
                </div>
                <p>4.4M views 1 year ago</p>
              </div>
            );
          })}
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;
