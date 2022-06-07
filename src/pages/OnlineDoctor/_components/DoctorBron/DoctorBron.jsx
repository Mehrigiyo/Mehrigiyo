
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
  
  for (let i = 0; i < 14; i++) {
    let h = newDate.addDays(i)
      g.push(h)
  }

  
    
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
                      <Day day={item.getDate()} weekDay={item.getDay()}  className={'days ' + (index == 0 ? 'active': '')} />
                    </Col>
                  ))

                }
               
              </Row>
            </div>
            <Modal>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aliquam sint perferendis dolore eaque, natus aspernatur magnam ullam quos consectetur nihil blanditiis mollitia aperiam vel, debitis qui libero sequi numquam asperiores ipsam! Molestias alias esse incidunt, ex voluptatem inventore accusamus.
              om
              </Modal>
            <div className="DoctorBron__item"></div>
         </section>
      </ItemPage>
      </>
  )
}

export default DoctorBron