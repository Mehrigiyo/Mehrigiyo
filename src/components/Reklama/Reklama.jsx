import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Reklama.css';
import ReklomaImage1 from "../../images/home-1-blog-bg 1.png"
import ReklomaImage2 from "../../images/Rectangle 366.png"
import ReklamaImage3 from "../../images/Group 2535107.png"

const Reklama = () => {
    return (
        <div className='Reklama globalContainer'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="reklama_left">
                            <div className="reklama_name">
                                <h1>Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h1>
                            </div>
                            <div className="reklama_text">
                                <p>Farg‘ona vodiysi tabiati bergan bu xilma-xilliklarning barchasi noyob mahsulotlar yaratishga asos bo‘lmoqda.</p>
                            </div>
                            <div className="reklama_left_img">
                                <img src={ReklomaImage1} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="reklama_image">
                            <img src={ReklomaImage2} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="reklama_position_image">
                <img src={ReklamaImage3} alt="" />
            </div>
        </div>
    );
}

export default Reklama;
