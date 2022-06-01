import {data } from './Const'
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import React from 'react'
import './Accordion.scss'

function Accordion( ) {
  return (
    <>
        <BootstrapAccordion>
                            {
                                  data.map(({title, text}, index)=>(
                                       <BootstrapAccordion.Item key={index} eventKey={`${index}`}>
                                           <BootstrapAccordion.Header><span>{`0${++index}  `}</span> {` ` + title}</BootstrapAccordion.Header>
                                           <BootstrapAccordion.Body>{text}</BootstrapAccordion.Body>
                                       </BootstrapAccordion.Item>
                                   ))
                            }
        </BootstrapAccordion>
    </>
  )
}

export default Accordion