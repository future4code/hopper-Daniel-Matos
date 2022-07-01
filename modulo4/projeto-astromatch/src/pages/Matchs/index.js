import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, ContainerMatch } from "../../styles";

function Matchs() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerMatch>
        <button onClick={() => navigate("/")}>ir home</button>
      </ContainerMatch>
    </Container>
  );
}

export default Matchs;
