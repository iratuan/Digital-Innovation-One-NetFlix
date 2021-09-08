import styled from "styled-components";
import { vermelho, wLg, preto } from "../../assets/css/variaveis";


const Item = styled.main`
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${props => props.img});
  background-size: cover;
  padding: 2rem;
  display: flex;
  margin:0
`;

const Wrapper = styled.div`
  width: ${wLg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
`;

const Title = styled.h2`
  font-size: 2.5em;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin-top: 1em;
  line-height: 1.75em;
  font-size: 1rem;
  max-width: 55%
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  padding: 1em;
  border: none;
  background-color: ${(props) =>
    props.type == "primary" ? "rgba(0,0,0,0.5)" : "rgba(150,0,0,0.75)"};
  color: ${(props) => (props.type == "primary" ? "fff" : "fff")};
  margin-right: 1em;
`;

export { Item, Title, Description, Button, ContainerButtons, Wrapper };
