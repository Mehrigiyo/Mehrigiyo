
import { Col, Row } from 'react-bootstrap'
import Button from '../../../../components/Buttons/Button'
import DoctorCard from '../DoctorCard/DoctorCard' 
import {data} from './Const'
import background from '../../../../images/Group.png';
   
import './TopDoctors.scss'
import Modal from '../../../../components/Modal/Modal';

function TopDoctors() {

 
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
                    data.map((item)=>(
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