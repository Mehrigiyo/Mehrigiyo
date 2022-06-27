import React from 'react'
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'
import CloseIcon from "../../../../../icons/top_Icon.svg"
import LeftIcon from "../../../../../images/Close_Icon.svg"
import "./OnlineDoctorHeader.css";
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../../../../components/Buttons/Button';
import VideoLink from "../../../../components/VideoLink/VideoLink"
import OnlineDowctorImage from "../../../../../images/Group 2535185.png"
import FreDoctorTree from "../../../../../images/Group 2535107.png"
import Notifacation from '../../../../components/Notifacation/Notifacation';

function OnlineDoctorHeader() {
  return (
    <div className='OnlineDoctorHeader globalContainer'>
        <div className="top_onlinedoctorheader d-flex">
            <div className="left_top d-flex">
              <a href="#"><img src={LeftIcon} /></a>
                <p>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </p>
            </div>
            <div className="right_top">
                <a href="#"><img src={CloseIcon} /></a>
            </div>
        </div>
        <Breadcrum>Onlayn shifokorlar</Breadcrum>
        <div className="freedoctor_advice">
            <Container style={{maxWidth: 960}}>
                  <Row>
                    <Col lg={7}>
                          <div className="left_freedoctor_advice">
                                <div className="left_freedoctor_advice_title">
                                    <h1>Bepul shifokor maslahatini oling</h1>
                                    <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                                    <div className='left_freedoctor_advice_link'>
                                        <Button>Bepul maslahat olish </Button>
                                        <VideoLink/>
                                    </div>
                                </div>
                          </div>
                    </Col> 
                    <Col lg={5}>
                          <div className="right_freedoctor_advice">
                                <img src={OnlineDowctorImage} alt="onlineDoctor" />
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

export default OnlineDoctorHeader