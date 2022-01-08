import React from "react";
import styled from "styled-components";
import { device } from "../style/devices";

const Main = () => {
  return (
    <MainContainer>
      <ContentContainer></ContentContainer> // to be replaced by topbar
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  @media ${device.tablets} {
    margin-top: 8rem;
  }
`;

const ContentContainer = styled.div``;
