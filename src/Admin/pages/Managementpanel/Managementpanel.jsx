import React from 'react'
import { Row , Col} from 'react-bootstrap'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import AdminDoctorCard from './_components/AdminDoctorCard/AdminDoctorCard'
import Camera from './_components/Camera/Camera'
import ClockButton from './_components/ClockButton/ClockButton'
import DoctorName from './_components/DoctorName/DoctorName'
import SmallTitle from './_components/SmallTitle/SmallTitle'
import TableItem from './_components/TableItem/TableItem'

import './Managementpanel.scss'
function Managementpanel() {
  return (
    <div className='managment__panel'>
        <AdminTitle/>

        <Row >
          <Col lg={8} >
          <SmallTitle />
              <TableItem style={{backgroundColor: '#F4F4F4'}} img={<Camera/>}>
                <div className='d-flex justify-content-between '>
                <DoctorName/>
                <ClockButton/>
                </div>
                
            </TableItem>
            <TableItem style={{background: 'rgba(200, 141, 94, 0.1)'}}>
               <h5 style={{fontWeight: 600,fontSize: '14px',lineHeight: '21px',color: 'rgba(200, 141, 94, 0.6)'}}>Bepul maslahat olish </h5>
                <p style={{fontSize: '14px',lineHeight: '21px',color: 'rgba(200, 141, 94, 0.6)'}}>Savolaringizga javob berishadi.</p>
            </TableItem>

            <span className='grozital_line'></span>
          <SmallTitle title={'Oxirgi bildirishnoma'}/>



            <TableItem>
               <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
            <TableItem>
               <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
            <TableItem>
               <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
            <TableItem>
               <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
          </Col>
          <Col lg={4} >
            <AdminDoctorCard/>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod totam molestiae
             aliquam eos maxime architecto rem doloremque, 
            accusamus id quisquam quaerat saepe consectetur fugiat inventore quia aliquid iure dolorum?
          </Col>
        </Row>
    </div>
  )
}

export default Managementpanel