import {
  Item,
  Description,
  Title,
  Button,
  ContainerButtons,
  Wrapper,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle, faFilm } from "@fortawesome/free-solid-svg-icons";
import ImgGuia from "../../assets/images/bg-guia.jpg"
import ImgGeral from "../../assets/images/bg-home.jpg"


/** Carousel */
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  responsiveClass: true,
  nav: true,
  autoplay: true,
  navText: ["", ""],
  smartSpeed: 1000,
  magin:0,
  dots:true,
  responsive:{
    0:{items:1},
  },
  loop:true
};

const Banner = () => (
  <OwlCarousel className="slider-items owl-carousel" {...options}>
    <Item img={ImgGuia}> 
      <Wrapper>
        <Title>The Hitchhiker's Guide to the Galaxy</Title>
        <Description>
          The Hitchhiker's Guide to the Galaxy é uma série de ficção científica
          cómica criada por Douglas Adams. Originalmente era transmitida na BBC
          Radio 4 em 1978, foi mais tarde adaptada para outros formatos, e após
          vários anos se tornou um fenômeno internacional
        </Description>
        <ContainerButtons>
          <Button type="primary">
            <FontAwesomeIcon icon={faPlay} style={{ marginRight: 10 }} />
            Assitir Agora
          </Button>
          <Button type="secundary">
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
            Mais informações
          </Button>
        </ContainerButtons>
      </Wrapper>
    </Item>
    <Item img={ImgGeral}>
      <Wrapper>
        <Title>Assista sua série favorita</Title>
        <Description>
         Milhares, eu disse, MILHARES, de títulos à sua disposição.
         Vamos começar a maratonar?
        </Description>
        <ContainerButtons>
          <Button type="primary">
            <FontAwesomeIcon icon={faFilm} style={{ marginRight: 10 }} />
           Quer uma dica?
          </Button>
          <Button type="secundary">
            <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
            Mais informações
          </Button>
        </ContainerButtons>
      </Wrapper>
    </Item>
  </OwlCarousel>
);

export default Banner;
