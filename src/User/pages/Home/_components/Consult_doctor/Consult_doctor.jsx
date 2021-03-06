import React from 'react';
import './Consult_doctor.css';
import brainIcon from "../../../../../images/brain icon.svg"
import DnaIcon from "../../../../../images/dna icon.svg"
import DentistIcon from "../../../../../images/dentist.svg"
import SurgeryIcon from "../../../../../images/surgery.svg"
import { Row, Col, Container } from 'react-bootstrap';
import Button from '../../../../components/Buttons/Button';
import ConsultDoctorBackImg from "../../../../../images/Group 2535107.png"
import DoctorTypeCard from '../../../../components/DoctorTypeCard/DoctorTypeCard';
import bg_rasm from '../../../../../images/Group.png'
import { NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";

const ConsultDoctor = () => {

    const { data, access } = useSelector(state => state.getTypeDoctors)
//   const nameApi = (e) =>{
//     const sortName = data?.results.map((item) => item.name)
//     const sortFilter =  sortName.filter((item)=> item === e)
//     return sortFilter.length
//   } 

  const apiurl =  `http://207.154.244.140:8000/`
    return (
        <div className='consult_doctor globalContainer'>
            <div className="consult_doctor_title">
                <h2>Har qanday sog'liq bilan bog'liq muammolar uchun <br />
                    <span>onlayn shifokorlarga</span>
                    murojaat qiling</h2>
                <p className='mb-0'>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
            </div>
            <Container style={{ maxWidth: 960 }}>
                <Row>
                    {
                    access ?
                        data?.results.map((item, index) => (
                            
                            <Col key={index} lg={3}>
                                <div className="consult_doctor_item">
                                    <div className="consult_doctor_image">
                                        <img src={ item.image} alt="image" />
                                    </div>
                                    <div className="consult_doctor_text">
                                        <h3>{item.name}</h3>
                                        <p>{item.get_doctors_count} shifokor</p>
                                    </div>
                                </div>
                            </Col>
                        )
                        )
                        : null
                    }
                    {/* <Col lg={3}>
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
                    </Col> */}
                </Row>
            </Container>
            <div className="positon_picture_tree">
                <img src={ConsultDoctorBackImg} alt="picture" />
            </div>
            <div className='consutl_doctor_button'>
                <Button style={{width: 260, fontWeight: 400, fontSize: 16}} href={"/onlinedoctor/#doctortype"}>Bepul maslahat olish </Button>
            </div>

            <img className='bg_rasm' src={bg_rasm} alt="" />
        </div>
    );
}

export default ConsultDoctor;
