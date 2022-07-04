import { useNavigate } from "react-router-dom";
import { Container, ContainerMatch } from "../../styles";
import Profile from "./components/Profile";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/matchs")}>ir matchs</button>
        <Profile />
      </ContainerMatch>
    </Container>
  );
}

export default Home;
