import {data} from '../TopDoctors/Const'

import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import DoctorTypeCard from '../../../../components/DoctorTypeCard/DoctorTypeCard'
import img from '../../../../../images/itemPageImg.png'
import './DoctorInfo.scss'
import { useParams } from 'react-router-dom'
import Remember from "../../../../../images/Close_Icon.svg"
import ItemPage from '../../../../components/ItemPage/ItemPage'
import { useDispatch, useSelector } from 'react-redux';
import { actionDoctorByID } from '../../../../../store/reducers/Specialist/specialistDoctors/action'
function DoctorInfo() {
    const Api="http://207.154.244.140:8000"
    // getDoctorByID
    // useSelector
    useEffect(()=>{
        dispatch(actionDoctorByID(1))
    },[])
    const   f = useSelector(state => state.dataDoctorsReduser)
    // actionDoctorByID
    const dispatch = useDispatch()
    // useDispatch
    // useEffect
    const {id} = useParams()
    const {doctorsData} = useSelector(state => state.dataDoctorsReduser);
    let data = ()=>{
     for(let i = 0; i < doctorsData.length; i++) {
        const element = doctorsData[i];
        if(element?.id == id) {
            return element
        
     }
    }
}
    const {image, full_name, description_uz,experience, type_doctor}  = data()
    // const index = data.map()

  return (
    <>
    <ItemPage pageId={id}>

   
     <div>
     
        <div className="doctorInfo">
            <Row >
                <Col lg={3} className="" >
                    <img className='doctorInfo__img' src={Api + image } alt="img" />
                </Col>
                <Col lg={7} className=''>
                    <div className="doctorInfo__item">
                        <h3 className='doctorInfo__name'>{full_name} {id}</h3>
                    </div>
                    <div className="doctorInfo__item">
                        <Row>
                            <Col lg={4}>
                                 <div className="DoctorTypeCard DoctorTypeCard__sharh">
                                    <p>Sharhlar</p>
                                    <span>233+</span>
                                 </div>
                             </Col>
                             <Col lg={4}>
                             <div className="DoctorTypeCard DoctorTypeCard__experience">
                                    <p >Tajriba</p>
                                    <span>{experience}</span>
                             </div>
                            
                             </Col>
                             <Col lg={4}>
                                 <DoctorTypeCard image={Api + type_doctor.image }  children={type_doctor.name} icon={Remember} />
                             </Col>
                        </Row>
                    </div>
                    <div className="doctorInfo__item">

                        <h5>About Doctor</h5>
                        <p>{description_uz}</p>
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