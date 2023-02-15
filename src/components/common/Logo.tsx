import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/spacesheep_logo.svg";

const StyledLogo = styled(Logo)`
  height: 140px;
  width: 140px;
`;

export const SpacesheepLogo = () => {
  return <StyledLogo />;
};
