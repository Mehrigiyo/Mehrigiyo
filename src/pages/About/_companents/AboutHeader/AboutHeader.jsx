import React from 'react'
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'
import organic2 from "../../../../icons/organic2.svg"
import organic from "../../../../icons/organic.svg"
import organic3 from "../../../../icons/organic3.svg"
import organic4 from "../../../../icons/organic4.svg"
import "./AboutHeader.scss";
import { Col, Container, Row } from 'react-bootstrap';
import VideoLink from "../../../../components/VideoLink/VideoLink"
import FreDoctorTree from "../../../../images/Group 2535107.png"

function AboutHeader() {
  return (
    <div className='OnlineDoctorHeader globalContainer'>
        <Breadcrum>Biz haqimizda</Breadcrum>
        <div className="freedoctor_advice">
            <Container style={{maxWidth: 960}}>
                  <Row>
                    <Col lg={7}>
                          <div className="left_freedoctor_advice">
                                <div className="left_freedoctor_advice_title">
                                    <h1>Bepul shifokor maslahatini oling</h1>
                                    <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                                    <div className='left_freedoctor_advice_link'>
                                        
                                        <VideoLink/>
                                    </div>
                                </div>
                          </div>
                    </Col> 
                    <Col lg={5}>
                          <div className="right_freedoctor_advice">
                                <img src={organic} alt="onlineDoctor" />
                                <img src={organic2} alt="onlineDoctor" />
                                <img src={organic3} alt="onlineDoctor" />
                                <img src={organic4} alt="onlineDoctor" />
                          </div>
                    </Col>  
                  </Row>
            </Container>
            <div className="freeDoctorBack">
                <img src={FreDoctorTree} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutHeader