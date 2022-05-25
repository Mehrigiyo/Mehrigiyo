import React from 'react';
import { Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import './DownloadMobile.css';
import { $ } from "react-jquery-plugin";

const DownloadMobile = () => {

    // $.mask.definitions['9'] = '';
    // $.mask.definitions['n'] = '[0-9]';
    // $(function () {
    //     $(".phone-input").mask("+998 nn nnn nn nn");
    // });

    // $.mask.definitions['9'] = '';
    // $.mask.definitions['n'] = '[0-9]';
    // document.addEventListener("DOMContentLoaded", () => {
    //     document.getElementByClassName("phone-input").mask("+998 nn nnn nn nn");
    // });
    return (
        <div className='DownloadMobile globalContainer'>
            <Container fluid>
                <Row>
                    <Col lg={6}>
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
                                        <img src="./image/apple.svg" alt="apple" />
                                        <div className='phone_name'>
                                            <span>Download on the</span>
                                            <p>App Store</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="app_link_iphone">
                                    <a href="#">
                                        <img src="./image/Object.svg" alt="playmarket" />
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
                                <img src="./image/Group 2535058.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DownloadMobile;
