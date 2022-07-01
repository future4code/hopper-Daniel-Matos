import { useContext } from "react";
import ProfileContext from "../../context/ProfilesContext";
import { useNavigate } from "react-router-dom";
import { chooseProfile } from "../../api";
import { Container, ContainerMatch } from "../../styles";

function Home() {
  const navigate = useNavigate();
  const [profile, changeProfile] = useContext(ProfileContext);

  const buttonChooseProfile = (profile) => {
    chooseProfile(profile.id, true);
    changeProfile(); //.then(() => {});
  };

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/matchs")}>ir matchs</button>
        {profile.name}
        <button
          onClick={() => {
            buttonChooseProfile(profile);
          }}
        >
          Sim
        </button>
        <button onClick={() => changeProfile()}>Não</button>
      </ContainerMatch>
    </Container>
  );
}

export default Home;
