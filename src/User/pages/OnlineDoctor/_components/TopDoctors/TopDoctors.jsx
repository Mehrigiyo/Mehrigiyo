
import { Col, Row } from 'react-bootstrap'
import Button from '../../../../components/Buttons/Button'
import DoctorCard from '../DoctorCard/DoctorCard' 
import {data as f} from './Const'
import background from '../../../../../images/Group.png';
   
import './TopDoctors.scss'
import { useSelector, useDispatch } from 'react-redux';
import { SpscialistDoctorsGetData } from '../../../../../store/reducers/get/SpecialistDoctors/action';
import { useEffect } from 'react';

function TopDoctors() {
const {data=[], loading, error} = useSelector(state=> state.SpectalistDoctorDataReduser)
const dispatch = useDispatch()

useEffect(()=>{
  console.log('Ishladi');
  dispatch(SpscialistDoctorsGetData())
},[])
 console.log(data);
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
                    f.map((item)=>(
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