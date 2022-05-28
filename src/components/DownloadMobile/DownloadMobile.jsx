import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './DownloadMobile.css';
import DownloadImage1 from "../../images/Object.svg";
import DownloadImage2 from "../../images/Group 2535058.png";
import DownloadImage from "../../images/apple.svg";
import InputMask from 'react-input-mask';


class DownloadMobile extends React.Component {

    render() {
        return <div className='DownloadMobile globalContainer'>
            <Container fluid>
                <Row>
                    <Col lg={6} style={{ alignSelf: "center" }}>
                        <div className="DownloadMobile_left">
                            <div className="DownloadMobile_title">
                                <h1>”Mehrigiyo” mobil ilovasini yuklab <span>Shifokorlardan BEPUL maslahat</span>  oling</h1>
                            </div>
                            <div className="DownloadMobile_text">
                                <p>O’zbekistonning yetakchi shifokorlari bilan videokonsultatsiyadan foydalaning.</p>
                            </div>
                            <div className="form_item">
                                <h6>Ilovani yuklab olish uchun havolani oling</h6>
                            </div>
                            <form className='form_menu'>
                                <div className="form_control">
                                    <span>+998</span>
                                    <InputMask {...this.props} mask="99 999 99 99" maskChar="_" />
                                    {/* <input type="text" placeholder='Telefon raqamingizni kiriting' required /> */}
                                </div>
                                <Button className='btn'>SMS yuboring</Button>
                            </form>
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

    }
}
export default DownloadMobile
