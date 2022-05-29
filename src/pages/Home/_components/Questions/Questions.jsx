import {data} from './Const'


import './Questions.css'

import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
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
                       

                       <Accordion>
                           {
                               data.map(({title, text}, index)=>( 
                                   <Accordion.Item key={index} eventKey={`${index}`}>
                                       <Accordion.Header><span>{`0${++index}  `}</span> {` ` + title}</Accordion.Header>
                                       <Accordion.Body>{text}</Accordion.Body>
                                   </Accordion.Item>
                               ))
                           }
                       </Accordion>
                   </Col>
               </Row>
            </div>
     </section>

    </>
  )
}
