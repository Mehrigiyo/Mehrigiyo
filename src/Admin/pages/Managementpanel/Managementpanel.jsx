import React from 'react'
import { Row , Col} from 'react-bootstrap'
import AdminTitle from '../../components/AdminTitle/AdminTitle'
import AdminDoctorCard from './_components/AdminDoctorCard/AdminDoctorCard'
import SmallTitle from './_components/SmallTitle/SmallTitle'
import TableItem from './_components/TableItem/TableItem'

function Managementpanel() {
  return (
    <div className='managment__panel'>
        <AdminTitle/>

        <Row className='border'>
          <Col lg={8} className='border'>
          <SmallTitle></SmallTitle>
              <TableItem style={{backgroundColor: '#F4F4F4'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
            <TableItem>
               <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem?</p>
            </TableItem>
          <SmallTitle>

          </SmallTitle>

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
          <Col lg={4} className='p-0'>
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