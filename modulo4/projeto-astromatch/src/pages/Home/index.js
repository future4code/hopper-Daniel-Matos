import React, { useEffect, useState, useContext } from "react";
import ProfileContext from "../../context/ProfilesContext";
import { useNavigate } from "react-router-dom";
import { Container, ContainerMatch } from "../../styles";

function Home() {
  const navigate = useNavigate();
  const [profile, getProfile] = useContext(ProfileContext);

  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/matchs")}>ir matchs</button>
        {profile.name}
        {profile.bio}
        {profile.age}
        <button
          onClick={() => {
            console.log(profile.id);
          }}
        >
          Sim
        </button>
        <button onClick={() => getProfile()}>Não</button>
      </ContainerMatch>
    </Container>
  );
}

export default Home;
