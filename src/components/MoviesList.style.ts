import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const MovieImg = styled.img`
  width: 300px;
  cursor: pointer;
  padding: 10px;
  object-fit: contain;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: black;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  max-width: 400px;
  padding: 10px 0px;
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-row-gap: 20px;
`;

export const MovieRelease = styled.p`
  font-size: 14px;
  text-align: center;
`;
