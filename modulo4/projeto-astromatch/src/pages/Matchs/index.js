import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMatches } from "../../api";
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

  const renderMatches = () => {
    return (
      <div>
        <ul>
          {matches
            ? matches.map((match) => <li key={match.id}>{match.name}</li>)
            : null}
        </ul>
      </div>
    );
  };

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/")}>ir home</button>
        {loading ? "carregando" : ""}
        {renderMatches()}
      </ContainerMatch>
    </Container>
  );
}

export default Matchs;
