

import './Questions.css'

import React from 'react'
import {  Col, Row } from 'react-bootstrap'
import Accordion from '../../../../components/Accordion/Accordion'
import Button from '../../../../components/Buttons/Button'

export default function Questions() {
  return (
    <>
     <section className='questions'>
            <div className="globalContainer">
               <Row>
                   <Col xs={4} className="">
                       <h3 className="questions__title">
                       Ko’p so'raladigan savollar

                       </h3>
                       <p className='questions__text'>
                        Qo'shimcha ma'lumot uchun
                        biz bilan bog'laning

                       </p>
                       <Button>Batafsil</Button>
                   </Col>
                   <Col xs={8} className="questions__accordion" >
                               <Accordion />
                   </Col>
               </Row>
            </div>
     </section>

    </>
  )
}
