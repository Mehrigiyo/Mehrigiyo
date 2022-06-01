import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillTelephoneFill } from 'react-icons/bs';
import './HelpMap.scss';
function HelpMap() {
    return (
        <div className='help_map'>
            <div className="map_content globalContainer">
                <Row>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>AQSH</h1>
                            </div>
                            <div className="country_adress">
                                <p>Manzil: 625 34-ave, San-Fransisko, CA 94121, AQSh.</p>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+1 415 387 33 99</span>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>O'zbekiston</h1>
                            </div>
                            <div className="country_adress">
                                <p>Manzil: Farg‘ona tumani, Uchko‘prik tumani, O‘rozimergan ko‘chasi 94-uy</p>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+998 97 700 78 72</span>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>Saudiya Arabistoni</h1>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+0 53 223 52 23</span>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>Rossiya, Moskva shahri.</h1>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+7 995 500 34 56</span>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>Qozog'iston, Olma-Ota shahri</h1>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+7 747 495 35 12</span>
                            </button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="map_content_title">
                            <div className="country_name">
                                <h1>Qirg'iziston, O'sh shahri</h1>
                            </div>
                            <button className='country_btn'>
                                <BsFillTelephoneFill />
                                <span>+996 55 828 28 22</span>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="map_picture">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95896.5995242067!2d69.22567679999999!3d41.3138944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1653996759789!5m2!1sru!2s" ></iframe>
            </div>
        </div>
    )
}

export default HelpMap