
import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../../../../images/hand01.png'
import ItemPage from '../../../../components/ItemPage/ItemPage'


import './DoctorBron.scss'
import { Col, Row } from 'react-bootstrap'
import Date from './_components/Date'
import Modal from '../../../../components/Modal/Modal'
import { Store } from '../../../../Context/Context'


function DoctorBron() {
    const {id} = useParams()
    const g = [3,4, 3,2 ,3 ,4, 3,4 ,33,3]
    
    const { handelVisible } = Store()
  
    
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
                    <Col onClick={handelVisible} key={index}>
                    <Date day={++index} />
                    </Col>
                  ))

                }
               
              </Row>
            </div>
            <Modal>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aliquam sint perferendis dolore eaque, natus aspernatur magnam ullam quos consectetur nihil blanditiis mollitia aperiam vel, debitis qui libero sequi numquam asperiores ipsam! Molestias alias esse incidunt, ex voluptatem inventore accusamus.
              om</Modal>
            <div className="DoctorBron__item"></div>
         </section>
      </ItemPage>
      </>
  )
}

export default DoctorBron