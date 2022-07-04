import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMatches, clearMatches } from "../../api";
import { Container, ContainerMatch } from "../../styles";
import Match from "./components";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getMatches().then((matches) => {
      setMatches(matches);
      setLoading(false);
    });
  }, []);

  const buttonClearMatches = () => {
    clearMatches();
    setMatches([]);
  };

  const renderMatches = () => {
    return (
      <div>
        <ul>
          {matches.length > 0 ? (
            matches.map((match) => <Match key={match.id} match={match} />)
          ) : (
            <span>{loading ? "Carregando" : "Nenhum match"}</span>
          )}
        </ul>
      </div>
    );
  };

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/")}>ir home</button>
        <button onClick={() => buttonClearMatches()}>Limpar</button>
        {renderMatches()}
      </ContainerMatch>
    </Container>
  );
}

export default Matches;
