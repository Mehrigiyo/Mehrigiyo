import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutThree.scss";

import fullFoto from "../../../../icons/fullHistory.png";
import AboutCard from "./_components/AboutCard";

function AboutThree() {
  return (
    <div className="about_page_winner">
      <div className="welcome_organic" id="origin">
        <div className="aboutFon"></div>
        <div className="globalContainer">
          <Container fluid>
            <Row className="pictureSize">
              <Col lg={4}>
                <div className="welcome_organik_left">
                  <div className="wecome_organic_title">
                    <h4>Kelib chiqish</h4>
                  </div>
                  <div className="wecome_organic_text">
                    <p>
                      1992-yildan buyon yuqori malakali shifokorlar,
                      o‘simlikshunoslar, sharq tabobati izdoshlari, fermer va
                      texnologlardan tashkil topgan “MEHRIGIYO” kompaniyasining
                      professional jamoasi zamonaviy farmatsevtika sanoati
                      yutuqlari va qadimiy ta’limotlar tajribasini
                      muvaffaqiyatli sintez qilib, o‘z plantatsiyalarida
                      yetishtirmoqda. Farg'ona vodiysi va sog'lom balzamlar,
                      shifobaxsh choylar, yog'lar, asal, holva va boshqalarni
                      ishlab chiqarish.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 2 }} className="fullFoto">
                <img src={fullFoto} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="winners globalContainer">
        <Row>
          <Col lg={6}>
            <p className="winner30">30 yillik yutuqlarimiz</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <AboutCard price={"10 000+"} text={"Kuniga yuklab olish"} ></AboutCard>
              </Col>
              <Col lg={6}>
               <AboutCard price={"2 million"} text={"Foydalanuvchilar"} ></AboutCard>
              </Col>
              <Col lg={6}>
                <AboutCard price={"50 000+"} text={"Mijozlar"} ></AboutCard>
              </Col>
              <Col lg={6}>
                <AboutCard  price={"12"} text={"Mamlakatlar"}></AboutCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutThree;
