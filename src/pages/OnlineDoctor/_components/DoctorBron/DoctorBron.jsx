
import React from 'react'
import { useParams } from 'react-router-dom'
import img from '../../../../images/hand01.png'
import ItemPage from '../../../../components/ItemPage/ItemPage'
import './DoctorBron.scss'
import { Col, Row } from 'react-bootstrap'
import Day from './_components/Day'
import Modal from '../../../../components/Modal/Modal'
import { Store } from '../../../../Context/Context'


function DoctorBron() {
    const {id} = useParams()
    const g = []
    const { handelVisible } = Store()
    Date.prototype.addDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
  }
  
  let newDate = new Date();
  
  for (let i = 0; i < 12; i++) {
    let h = newDate.addDays(i)
      g.push(h)
  }

  
    
  return (
      <>
      <ItemPage>

         {/* <div>DoctorBron <h1>{id}</h1></div> */}

         <section className='DoctorBron '>
            <div className="DoctorBron__item d-flex justify-content-between ">
              <div className="DoctorBron__title">
                <h4>Maslahat kunni bron qiling</h4>
                <p>Iltimos, maslahat kuniga borishdan oldin kun va vaqtni tanlang</p>
              </div>
              <img src={img} alt="img" />
            </div>
            <div className="DoctorBron__item">
              <div>Yanvar, 2022 yil <span><img src="" alt="img" /></span></div>
              <Row >
                {
                  g.map((item, index)=>(
                    <Col key={index}>
                      <Day day={item.getDate()} weekDay={item.getDay()}  className={'days ' + (index == 0 ? 'active': '')} />
                    </Col>
                  ))

                }
               
              </Row>
            </div>
         
            <div className="DoctorBron__item">
               <Row>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
                  <Col lg={4}><p className='DoctorBron__soat'>09:00 - 10:00 Selected</p></Col>
               </Row>
            </div>
         </section>
      </ItemPage>
      </>
  )
}

export default DoctorBron