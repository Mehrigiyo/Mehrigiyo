import React from 'react'
import './DoctorTypesBlog.scss'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import brainIcon from "../../../../images/brain icon.svg"
import DnaIcon from "../../../../images/dna icon.svg"
import DentistIcon from "../../../../images/dentist.svg"
import SurgeryIcon from "../../../../images/surgery.svg"
import Remember from "../../../../images/Close_Icon.svg"
import BabyIcon from "../../../../images/baby 1.svg";
import CaronaIcon from "../../../../images/coronavirus 1.svg"
import EndocrinologIcon from "../../../../images/endocrinologist 1.svg"
import HeadIcon from "../../../../images/head 1.svg"
import PulseIcon from "../../../../images/pulse 1.svg";
import RetinaIcon from "../../../../images/retina 1.svg";
import SportIcon from "../../../../images/spots 1.svg";
import StomachIcon from "../../../../images/stomach 1.svg";
import tree from "../../../../images/Group.png";
import DoctorTypeCard from "../../../../components/DoctorTypeCard/DoctorTypeCard";
import { useSelector } from "react-redux";
function DoctorTypesBlog() {

    const { data } = useSelector(state => state.getTypeDoctors)
    console.log(data, "bu data ")

    const nameApi = (e) =>{
        const sortName = data.map((item) => item.name)
        const sortFilter =  sortName.filter((item)=> item === e)
        return sortFilter.length
      } 

    const apiurl =  `http://207.154.244.140:8000/`
    return (
        <div className='DoctorTypesBlog globalContainer'>
            <div className="DoctorTypesBlog__title">
                <h1>Shifokorlar turlari</h1>
                <p>Barcha turlari</p>
            </div>
            <div className="DoctorTypesBlog__Card">
                <Row style={{ marginTop: 30 }}>
                    {
                        data.filter((_, index) => index < 12).map((item) => (
                            <Col lg={2}>
                                <NavLink to="/doctorslist">
                                    <DoctorTypeCard image={apiurl + item.image} children={item.name} number={nameApi} icon={Remember}></DoctorTypeCard>
                                </NavLink>
                            </Col>
                        ))
                    }

                    {/* <Col lg={2}>
                        <DoctorTypeCard image={DnaIcon} children={"Ginekolog"} number={"1,870"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={DentistIcon} children={"Stomatologiya"} number={"2 129"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={SurgeryIcon} children={"Jarrohlik"} number={"4"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={BabyIcon} children={"Kardiolog"} number={"12"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={CaronaIcon} children={"Otolaringolog"} number={"1,332"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={EndocrinologIcon} children={"Dermotolog"} number={"570"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={HeadIcon} children={"Yuqumli kasalliklar"} number={"3"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={PulseIcon} children={"Endokrinolog"} number={"194"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={RetinaIcon} children={"Gastroenterolog"} number={"2 029"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={SportIcon} children={"Oftalmolog"} number={"14"} icon={Remember}></DoctorTypeCard>
                    </Col>
                    <Col lg={2}>
                        <DoctorTypeCard image={StomachIcon} children={"Pediatr"} number={"23"} icon={Remember}></DoctorTypeCard>
                    </Col> */}
                </Row>
            </div>
            <div className="back_tree">
                <img src={tree} alt="" />
            </div>
        </div>
    )
}

export default DoctorTypesBlog