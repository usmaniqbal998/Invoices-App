import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../style/devices";
import Dropdowns from "./Dropdown";
import Typography from "./Typography";

const Main = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <MainContainer>
      <ContentContainer>
        <TopBar>
          <Titles>
            <Typography variant="h1">Invoices</Typography>
            <SubTitle variant="body1">No Invoices</SubTitle>
          </Titles>
        </TopBar>
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  padding-top: 7.2rem;
  @media ${device.tablets} {
    margin-top: 8rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled(Typography)`
  margin-top: 1rem;
`;

const ContentContainer = styled.div``;
