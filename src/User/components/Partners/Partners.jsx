import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Partners.css";
import PartnersImage1 from "../../../images/laxisam 1.svg";
// import PartnersImage2 from "../../../images/logoslogan777x518 1.svg";
import PartnersImage3 from "../../../images/logo-1-1 1.svg";
import PartnersImage4 from "../../../images/Dori_Darmon-01 1.svg";
import PartnersImage5 from "../../../images/35e525b352b8e1ab88ea7ed0142df17c 1.svg";
import PartnersImage6 from "../../../images/logo 1.svg";

function Partners() {
  return (
    <div className='partners globalContainer'>
        <Container fluid>
            <Row>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        {/* <img src={PartnersImage2} alt="" /> */}
                    </div>
                </Col>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        <img src={PartnersImage3} alt="" />
                    </div>
                </Col>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        <img src={PartnersImage4} alt="" />
                    </div>
                </Col>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        <img src={PartnersImage6} alt="" />
                    </div>
                </Col>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        <img src={PartnersImage1} alt="" />
                    </div>
                </Col>
                <Col lg={2} style={{alignSelf:"center"}}>
                    <div className="partners_itm">
                        <img src={PartnersImage5} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Partners