import React from 'react'
import './DoctorTypesBlog.scss'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Remember from "../../../../../images/Close_Icon.svg"
import tree from "../../../../../images/Group.png";
import DoctorTypeCard from "../../../../components/DoctorTypeCard/DoctorTypeCard";
import { useSelector } from "react-redux";
function DoctorTypesBlog() {

    const { data, access } = useSelector(state => state.getTypeDoctors)
     console.log(data);
   

    const apiurl =  `http://207.154.244.140:8000/`
    return (
        <div className='DoctorTypesBlog globalContainer' id="doctortype">
            <div className="DoctorTypesBlog__title">
                <h1>Shifokorlar turlari</h1>
                <p>Barcha turlari</p>
            </div>
            <div className="DoctorTypesBlog__Card">
                <Row style={{ marginTop: 30 }}>
                    {access?
                        data?.results.filter((_, index) => index < 12).map((item) => (
                            <Col lg={2}>
                                {/* <NavLink to="doctorslist"> */}
                                    <DoctorTypeCard image={item.image} children={item.name} number={'194 shifokor'} icon={Remember}></DoctorTypeCard>
                                {/* </NavLink> */}
                            </Col>
                        ))
                        : null
                    }
               {access?
                        data?.results.filter((_, index) => index < 12).map((item) => (
                            <Col lg={2}>
                                {/* <NavLink to="doctorslist"> */}
                                    <DoctorTypeCard image={item.image} children={item.name} number={'194 shifokor'} icon={Remember}></DoctorTypeCard>
                                {/* </NavLink> */}
                            </Col>
                        ))
                        : null
                    }
                </Row>
            </div>
            <div className="back_tree">
                <img src={tree} alt="" />
            </div>
        </div>
    )
}

export default DoctorTypesBlog