import styled from "styled-components";
import { vermelho, preto, wLg } from "../../assets/css/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 0;
  width: ${wLg}
`;

export const Title = styled.h2`
  color: ${vermelho};
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 900;
`;

export const Navigation = styled.nav`

`;
