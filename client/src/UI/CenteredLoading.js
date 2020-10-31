import React from "react";
import { Spinner } from "./Spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  color: black;
`;

export const CenteredLoading = () => (
  <Container>
    <Spinner />
  </Container>
);
