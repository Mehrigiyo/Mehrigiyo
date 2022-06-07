
import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../../../../images/hand01.png'
import ItemPage from '../../../../components/ItemPage/ItemPage'


import './DoctorBron.scss'
import { Col, Row } from 'react-bootstrap'
import Date from './_components/Date'


function DoctorBron() {
    const {id} = useParams()
    const g = [3,4, 3,2 ,3 ,4, 3,4 ,33,3]
    
  
  
    // for (let i = 0; i < 12; i++) {
      // g.push(new Date)
      
    // }
  return (
      <>
      <ItemPage>

         {/* <div>DoctorBron <h1>{id}</h1></div> */}

         <section className='DoctorBron border'>
            <div className="DoctorBron__item d-flex justify-content-between ">
              <div className="DoctorBron__title">
                <h4>Maslahat kunni bron qiling</h4>
                <p>Iltimos, maslahat kuniga borishdan oldin kun va vaqtni tanlang</p>
              </div>
              <img src={img} alt="img" />
            </div>
            <div className="DoctorBron__item">
              <Row >
                {
                  g.map((item, index)=>(
                    <Col key={index}>
                    <Date day={++index} />
                    </Col>
                  ))

                }
               
              </Row>
            </div>
            <div className="DoctorBron__item"></div>
         </section>
      </ItemPage>
      </>
  )
}

export default DoctorBron