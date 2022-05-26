import React from 'react';
import { Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import './DownloadMobile.css';
import DownloadImage from "../../images/apple.svg";
import DownloadImage1 from "../../images/Object.svg";
import DownloadImage2 from "../../images/Group 2535058.png";


const DownloadMobile = () => {
    return (
        <div className='DownloadMobile globalContainer'>
            <Container fluid>
                <Row>
                    <Col lg={6} style={{alignSelf:"center"}}>
                        <div className="DownloadMobile_left">
                            <div className="DownloadMobile_title">
                                <h1>”Mehrigiyo” mobil ilovasini yuklab <span>Shifokorlardan BEPUL maslahat</span>  oling</h1>
                            </div>
                            <div className="DownloadMobile_text">
                                <p>O’zbekistonning yetakchi shifokorlari bilan videokonsultatsiyadan foydalaning.</p>
                            </div>
                            <Form>
                                <Form.Label type="text">Ilovani yuklab olish uchun havolani oling</Form.Label>
                                <InputGroup className="phone-input" type="text" Placeholder="Telefon raqamingizni kiriting"/>
                            </Form>
                            <div className="app_link">
                                <div className="app_link_iphone">
                                    <a href="#">
                                        <img src={DownloadImage} alt="apple" />
                                        <div className='phone_name'>
                                            <span>Download on the</span>
                                            <p>App Store</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="app_link_iphone">
                                    <a href="#">
                                        <img src={DownloadImage1} alt="playmarket" />
                                        <div className='phone_name'>
                                            <span>Get it on</span>
                                            <p>Google Play</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="DownloadMobile_right">
                                <img src={DownloadImage2} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DownloadMobile;
