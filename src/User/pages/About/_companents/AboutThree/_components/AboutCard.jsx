import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutCardImg1 from "../../../../../../icons/aboutCardImg1.svg";
import "../AboutThree.scss";
const AboutCard = ({price, text}) => {
  return (
    <div className="about_wins">
      <Row>
        <Col lg={2}>
          <div className="about_card_img">
            <img src={aboutCardImg1} alt="" />
          </div>
        </Col>
        <Col lg={10}>
          <div className="about_card_text">
            <span>{price}</span>
            <p>{text}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutCard;
