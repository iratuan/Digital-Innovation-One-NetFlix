import { Container, Navigation, Title } from "./styles";
import NavItem from "./Navigation/NavItem";

const Header = () => (
  <Container>
    <Title>Nerdflix</Title>
    <Navigation>
      <NavItem link="#">Início</NavItem>
      <NavItem link="#">Séries</NavItem>
      <NavItem link="#">Filmes</NavItem>
      <NavItem link="#">Documentários</NavItem>
    </Navigation>
  </Container>
);

export default Header;
