import React from "react";
import "./NewCompony.scss";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import detox from "../../../../../icons/detoksin.png";
import fotojpg from "../../../../../icons/videojpg.png";
import { NavLink } from "react-router-dom";

import Button from "../../../../components/Buttons/Button";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

function NewCompony() {
  const array = [
    {
      img: detox,
    },
  ];
  return (
   <>
     <div className="NewCompony globalContainer">
      <div className="NewCompony__componyTop">
        <Row className="NewCompony__componyTop__componyRowTop ">
          {array.map((item, index) => (
            <Col
              key={index}
              className="NewCompony__componyTop__componyRowTop__rowTopRight"
              lg={6}
            >
              <img src={item.img} alt="" />
            </Col>
          ))}

          <Col
            className="NewCompony__componyTop__componyRowTop__rowTopLeft"
            lg={6}
          >
            <h3 className="NewCompony__componyTop__componyRowTop__rowTopLeft__lefththree">
              Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini
              taqdim etadi.
            </h3>
            <p className="NewCompony__componyTop__componyRowTop__rowTopLeft__leftT">
              Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
              ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.
            </p>
            <div className="NewCompony__componyTop__componyRowTop__rowTopLeft__leftBut"></div>
            <Button href={"/fullcard"}>Ko’proq o’qish </Button>
          </Col>
        </Row>
      </div>
      <div className="NewCompony__componyButtom">
          <Slider  className="NewCompony__componyButtom__buttomSlad" {...settings}>
            <div className="NewCompony__componyButtom__buttomSlad__sladComponent">
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompFoto">
                <img src={fotojpg} alt="" />
              </div>
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText">
                <h3 className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladText">
                  BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ...
                </h3>
                <p className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladPiText">
                  Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
                  ekologik toza hududida yetishtiril-gan tabiiy komponentlar
                  mavjud.
                </p>
                </div>
           
           </div>
           <div className="NewCompony__componyButtom__buttomSlad__sladComponent">
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompFoto">
                <img src={fotojpg} alt="" />
              </div>
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText">
                <h3 className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladText">
                  BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ...
                </h3>
                <p className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladPiText">
                  Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
                  ekologik toza hududida yetishtiril-gan tabiiy komponentlar
                  mavjud.
                </p>
                </div>
           
           </div>
           <div className="NewCompony__componyButtom__buttomSlad__sladComponent">
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompFoto">
                <img src={fotojpg} alt="" />
              </div>
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText">
                <h3 className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladText">
                  BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ...
                </h3>
                <p className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladPiText">
                  Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
                  ekologik toza hududida yetishtiril-gan tabiiy komponentlar
                  mavjud.
                </p>
                </div>
           
           </div>
           <div className="NewCompony__componyButtom__buttomSlad__sladComponent">
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompFoto">
                <img src={fotojpg} alt="" />
              </div>
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText">
                <h3 className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladText">
                  BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ...
                </h3>
                <p className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladPiText">
                  Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
                  ekologik toza hududida yetishtiril-gan tabiiy komponentlar
                  mavjud.
                </p>
                </div>
           
           </div>
           <div className="NewCompony__componyButtom__buttomSlad__sladComponent">
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompFoto">
                <img src={fotojpg} alt="" />
              </div>
              <div className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText">
                <h3 className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladText">
                  BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ...
                </h3>
                <p className="NewCompony__componyButtom__buttomSlad__sladComponent__sladCompText__sladPiText">
                  Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning
                  ekologik toza hududida yetishtiril-gan tabiiy komponentlar
                  mavjud.
                </p>
                </div>
           
           </div>
          </Slider>
        </div>
      </div>
   </>
  );
}

export default NewCompony;
