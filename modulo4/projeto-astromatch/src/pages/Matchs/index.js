import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMatches, clearMatches } from "../../api";
import { Container, ContainerMatch } from "../../styles";

function Matchs() {
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
          {matches
            ? matches.map((match) => <Match key={match.id} match={match} />)
            : null}
        </ul>
      </div>
    );
  };

  const Match = ({ match }) => {
    return (
      <li>
        <span>{match.name}</span>
      </li>
    );
  };

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/")}>ir home</button>
        <button onClick={() => buttonClearMatches()}>Limpar</button>
        {loading ? "carregando" : ""}
        {renderMatches()}
      </ContainerMatch>
    </Container>
  );
}

export default Matchs;
