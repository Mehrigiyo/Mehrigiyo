import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'

function DoctorsList() {
  return (
    <div className='doctor_list globalContainer'>
        <Container style={{ maxWidth: 1400}}>
            <Breadcrum name={"Onlayn shifokorlar"}>Shifokorlar</Breadcrum>
        </Container>
    </div>
  )
}

export default DoctorsList