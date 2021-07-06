import {
  HeaderContainer,
  Head,
  Title,
  Separator,
  StyledLink,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <Head>
        <StyledLink to="/">
          <Title>ZELTY MOVIES</Title>
        </StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Head>
      <Separator />
    </HeaderContainer>
  );
};
