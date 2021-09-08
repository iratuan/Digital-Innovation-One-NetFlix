import { Wrapper } from "./styles";
import Item from "./Item";

import Img01 from "../../assets/images/mini1.jpg";
import Img02 from "../../assets/images/mini2.jpg";
import Img03 from "../../assets/images/mini3.jpg";
import Img04 from "../../assets/images/mini4.jpg";
import Img05 from "../../assets/images/mini5.jpg";
import Img06 from "../../assets/images/mini6.jpg";
import Img07 from "../../assets/images/mini7.jpg";
import Img08 from "../../assets/images/mini8.jpg";
import Img09 from "../../assets/images/mini9.jpg";
import Img10 from "../../assets/images/mini10.jpg";

/** Carousel */
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  navText: ["", ""],
  smartSpeed: 1000,
  dots: true,
  loop: true,
  responsive: {
    0: {items:1},
    780: {items:3},
    960: { items: 5 },
  },
};

const SliderHome = () => (
  <Wrapper>
    <OwlCarousel className="slider-items owl-carousel" {...options}>
      <Item img={Img01} />
      <Item img={Img02} />
      <Item img={Img03} />
      <Item img={Img04} />
      <Item img={Img05} />
      <Item img={Img06} />
      <Item img={Img07} />
      <Item img={Img08} />
      <Item img={Img09} />
      <Item img={Img10} />
    </OwlCarousel>
  </Wrapper>
);

export default SliderHome;
