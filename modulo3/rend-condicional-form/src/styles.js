import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
`;

export const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
`;

export const Select = styled.select`
  padding: 5px;
`;

export const Button = styled.button`
  border: 0;
  background-color: #498278;
  color: #fff;
  font-weight: bolder;
  padding: 10px;
  margin: 10px 0;
`;
