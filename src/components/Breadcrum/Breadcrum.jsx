import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrum.css";

function Breadcrum({ children, name="Onlayn shifokorlar", width=960 }) {
    return (
        <div className='breadcrum globalContainer'>
            <Container style={{ maxWidth: width }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item href="/onlinedoctor">
                        {name}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{children}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}

export default Breadcrum