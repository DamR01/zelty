import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  color: cornflowerblue;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: darkblue;
  margin: 10px 0px 0px 0px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover,
  &:visited,
  &:active {
    color: black;
  }
`;
