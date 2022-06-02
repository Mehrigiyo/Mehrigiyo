import './MehrigiyoPlus.scss'
import src from '../../../../images/doktors.png'



import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GreenButton from '../../../../components/Button/GreenButton'

function MehrigiyoPlus() {
  return (
    <>
       <section className='mehrigiyo-plus'>
           <div className="globalContainer">
               <div className="M-plus  border">
                   <Row className='row'>
                     <Col className='M-plus__img grid-center' xs={4}>
                       <img src={src} alt="img" />
                     </Col>
                     <Col className='' xs={8}>
                       <button className='white-bnt'>
                       Mehrigiyo Plus
                       </button>
                       <h3 className='M-plus__title'>
                       Bepul onlayn maslahatlar
                        oyiga 100 000 so’mdan boshlanadi
                       </h3>
                      
                       <GreenButton>Aʼzo boʻlish</GreenButton>
                     </Col>
                   </Row>
               </div>
           </div>
       </section>
    </>
  )
}

export default MehrigiyoPlus