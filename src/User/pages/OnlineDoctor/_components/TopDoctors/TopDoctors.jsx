
import { Col, Row } from 'react-bootstrap'
import Button from '../../../../components/Buttons/Button'
import DoctorCard from '../DoctorCard/DoctorCard' 
import {data as f} from './Const'
import background from '../../../../../images/Group.png';
   
import './TopDoctors.scss'
import Modal from '../../../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function TopDoctors() {
 const {doctorsData} = useSelector(state => state.getDoctors);



  return (
    <>
    <section className='topDoctors'>

      <div className="globalContainer">
        <div className="topDoctors__head d-flex justify-content-between">
            <h3>Top Shifokorlar</h3>
            <Button>Batafsil</Button>
        </div>
        <div className="topDoctors__body">

            <Row>
                {
                    doctorsData.map((item)=>(
                      <Col xs={2}>
                          <DoctorCard data={item} />
                      </Col>
                    ))
                }
            </Row>
        </div>
         <div className="topDoctors__bg">
                <img src={background} alt=" " />
         </div>
      </div>
    </section>
    
    {/* <Modal>smodal</Modal> */}

    </>
  )
}

export default TopDoctors