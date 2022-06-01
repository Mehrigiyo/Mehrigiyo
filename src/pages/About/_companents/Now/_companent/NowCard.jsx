import React from 'react'
import "../_companent/NowCard.scss"
import { Col, Row } from "react-bootstrap";
const NowCard= ({icon, text}) => {
  return (
    <div className=' noow  globalContainer' >
      <Row>
        <Col lg={1}>
          <div className='noow__nowCard'>
            <span><img src={icon} alt="" /></span>
            <p>{text}</p>
          </div>
        </Col>
        
      </Row>
    </div>
  )
}

export default NowCard