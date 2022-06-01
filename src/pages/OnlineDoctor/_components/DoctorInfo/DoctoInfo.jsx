

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DoctorTypeCard from '../../../../components/DoctorTypeCard/DoctorTypeCard'
import img from '../../../../images/itemPageImg.png'
import './DoctorInfo.scss'

function DoctoInfo() {
  return (
    <>
     <div>
        <div className="doctorInfo">
            <Row >
                <Col lg={3} className="border" >
                    <img className='doctorInfo__img' src={img} alt="img" />
                </Col>
                <Col lg={6} className='border'>
                    <div className="doctorInfo__item"></div>
                    <div className="doctorInfo__item">

                        {/* <DoctorTypeCard> */}
                    </div>
                    <div className="doctorInfo__item">
                        <h5>Doctor About</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec turpis integer ipsum, et enim orci amet.</p>
                    </div>
                </Col>
            </Row>
        </div>
     </div>
    </>
  )
}

export default DoctoInfo