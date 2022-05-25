import React from 'react';
import './Consult_doctor.css';
import { data } from './Const';
import { Row, Col, Container } from 'react-bootstrap';
import Button from '../../../../components/Buttons/Button';

const ConsultDoctor = () => {
    return (
        <div className='consult_doctor globalContainer'>
                <div className="consult_doctor_title">
                    <h2>Har qanday sog'liq bilan bog'liq muammolar uchun <br/>
                        <span>onlayn shifokorlarga</span>
                           murojaat qiling</h2>
                    <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                </div>
                <Container style={{maxWidth: 960}}>
                <Row >
                    {
                        data.map(({ img, name, price }) => (
                            <Col lg={3}>
                                <div className="consult_doctor_item">
                                    <div className="consult_doctor_image">
                                        <img src={img} alt="title" />
                                    </div>
                                    <div className="consult_doctor_text">
                                        <h3>{name}</h3>
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                        )
                    }
                </Row>
            </Container>
            <div className="positon_picture_tree">
                <img src="./image/Group 2535107.png" alt="picture" />
            </div>
            <div className='consutl_doctor_button'>
                <Button>Batafsil</Button>
            </div>
        </div>
    );
}

export default ConsultDoctor;
