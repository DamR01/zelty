import { HeaderContainer, Title, Separator, StyledLink } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>ZELTY MOVIES</Title>
      </StyledLink>
      <Separator />
    </HeaderContainer>
  );
};
