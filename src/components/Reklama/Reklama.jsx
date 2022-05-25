import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Reklama.css';


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
                                <img src="./image/home-1-blog-bg 1.png" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="reklama_image">
                            <img src="./image/Rectangle 366.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="reklama_position_image">
                <img src="./image/Group 2535107.png" alt="" />
            </div>
        </div>
    );
}

export default Reklama;
