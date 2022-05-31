

import React from 'react'
import { Col, Row } from 'react-bootstrap'
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
                </Col>
            </Row>
        </div>
     </div>
    </>
  )
}

export default DoctoInfo