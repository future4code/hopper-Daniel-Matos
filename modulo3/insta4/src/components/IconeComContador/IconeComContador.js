import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
`;
const IconImage = styled.img`
  margin-right: 5px;
`;

export function IconeComContador({ icone, valorContador, onClickIcone }) {
  return (
    <IconContainer>
      <IconImage alt={"Icone"} src={icone} onClick={onClickIcone} />
      <p>{valorContador}</p>
    </IconContainer>
  );
}
