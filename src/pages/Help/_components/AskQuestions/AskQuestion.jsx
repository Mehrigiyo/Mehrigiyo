import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrum from '../../../../components/Breadcrum/Breadcrum';
import tree from "../../../../images/Group.png"
import FreDoctorTree from "../../../../images/Group 2535107.png"
import "./AskQuestion.scss";


function AskQuestion() {
  return (
    <div className='askquestion_page globalContainer'>
        <Container style={{ maxWidth: 960 }}>
                <Breadcrum>Yordam</Breadcrum>
                <div className="askquestion_title">
                    <h1>Ko’p so'raladigan savollar</h1>
                    <p>Qo'shimcha ma'lumot uchun biz bilan bog'laning</p>
                </div>
                <div className="askquestion_leftBack">
                    <img src={FreDoctorTree} alt="" />
                </div>
                <div className="askquestion_rightBack">
                    <img src={tree} alt="" />
                </div>
            </Container>
    </div>
  )
}

export default AskQuestion