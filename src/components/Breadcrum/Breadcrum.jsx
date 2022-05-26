import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrum.css";

function Breadcrum() {
    return (
        <div className='breadcrum globalContainer'>
            <Container style={{maxWidth: 960}}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Onlayn shifokorlar</Breadcrumb.Item>
                </Breadcrumb>
            </Container>

        </div>
    )
}

export default Breadcrum