import {data} from '../TopDoctors/Const'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DoctorTypeCard from '../../../../components/DoctorTypeCard/DoctorTypeCard'
import img from '../../../../images/itemPageImg.png'
import './DoctorInfo.scss'
import { useParams } from 'react-router-dom'
import ItemPage from '../../../../components/ItemPage/ItemPage'

function DoctorInfo() {
    const {id} = useParams()
    // console.log(id);
    // const index = data.map()

  return (
    <>
    <ItemPage pageId={id}>

   
     <div>
     
        <div className="doctorInfo">
            <Row >
                <Col lg={3} className="" >
                    <img className='doctorInfo__img' src={img} alt="img" />
                </Col>
                <Col lg={7} className=''>
                    <div className="doctorInfo__item">
                        <h3 className='doctorInfo__name'>Gavhar Sobirova {id}</h3>
                    </div>
                    <div className="doctorInfo__item">
                        <Row>
                            <Col lg={4}>
                                 <DoctorTypeCard />
                             </Col>
                             <Col lg={4}>
                                 <DoctorTypeCard />
                             </Col>
                             <Col lg={4}>
                                 <DoctorTypeCard />
                             </Col>
                        </Row>
                    </div>
                    <div className="doctorInfo__item">

                        <h5>About Doctor</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec turpis integer ipsum, et enim orci amet.</p>
                    </div>
                </Col>
            </Row>
        </div>
     </div> 
     </ItemPage>
    </>
  )
}

export default DoctorInfo