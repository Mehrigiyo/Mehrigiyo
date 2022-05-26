import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OnlineHelp.css';
import Button from '../../../../components/Buttons/Button';
import OnlineRightImage from '../../../../images/image.png';
import BackTreeImg from "../../../../images/Group 2535107.png";

const OnlineHelp = () => {
    return (
        <div className='OnlineHelp globalContainer'>
            <Container fluid>
                <Row>
                    <Col lg={5} style={{alignSelf:"center"}}>
                        <div className="OnlineHelp_left">
                            <div className="OnlineHelp_left_name">
                                <h1>Shoshilinch onlayn yordam</h1>
                            </div>
                            <div className="OnlineHelp_left_text">
                                <p>Bizga shoshilinch sog'liq bo'yicha maslahatchini ayting
                                    va biz 60 soniya ichida eng yaxshi shifokorni tayinlaymiz.</p>
                            </div>
                            <div className="OnlineHelp_left_btn">
                                <Button>Onlayn uchrashuv belgilash</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="OnlineHelp_right">
                            <img src={OnlineRightImage} alt="image" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="OnlineHelp_position">
                <img src={BackTreeImg} alt="" />
            </div>
        </div>
    );
}

export default OnlineHelp;
