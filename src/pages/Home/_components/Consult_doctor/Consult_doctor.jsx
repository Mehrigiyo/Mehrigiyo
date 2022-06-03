import React from 'react';
import './Consult_doctor.css';
import brainIcon from "../../../../images/brain icon.svg"
import DnaIcon from "../../../../images/dna icon.svg"
import DentistIcon from "../../../../images/dentist.svg"
import SurgeryIcon from "../../../../images/surgery.svg"
import { data } from './Const';
import { Row, Col, Container } from 'react-bootstrap';
import Button from '../../../../components/Buttons/Button';
import ConsultDoctorBackImg from "../../../../images/Group 2535107.png"
import DoctorTypeCard from '../../../../components/DoctorTypeCard/DoctorTypeCard';
import { NavLink} from 'react-router-dom';

const ConsultDoctor = () => {
    return (
        <div className='consult_doctor globalContainer'>
            <div className="consult_doctor_title">
                <h2>Har qanday sog'liq bilan bog'liq muammolar uchun <br />
                    <span>onlayn shifokorlarga</span>
                    murojaat qiling</h2>
                <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
            </div>
            <Container style={{ maxWidth: 960 }}>
                <Row >
                    {/* {
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
                    } */}
                    <Col lg={3}>
                        <NavLink to="/doctorslist">
                            <DoctorTypeCard image={brainIcon} children={"Nefrolog"} number={"2 029"}>
                            </DoctorTypeCard>
                        </NavLink>
                    </Col>
                    <Col lg={3}>
                        <DoctorTypeCard image={DnaIcon} children={"Genetika"} number={"1,870"}>
                        </DoctorTypeCard>
                    </Col>
                    <Col lg={3}>
                        <DoctorTypeCard image={DentistIcon} children={"Stomatologiya"} number={"1,064"}>
                        </DoctorTypeCard>
                    </Col>
                    <Col lg={3}>
                        <DoctorTypeCard image={SurgeryIcon} children={"Jarrohlik"} number={"1,064"}>
                        </DoctorTypeCard>
                    </Col>
                </Row>
            </Container>
            <div className="positon_picture_tree">
                <img src={ConsultDoctorBackImg} alt="picture" />
            </div>
            <div className='consutl_doctor_button'>
                <Button>Batafsil</Button>
            </div>
        </div>
    );
}

export default ConsultDoctor;
