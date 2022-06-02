import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrum.css";

function Breadcrum({ children, name, width=960, url="/onlinedoctor" }) {
    return (
        <div className='breadcrum globalContainer'>
            <Container style={{ maxWidth: width }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item href={url}>
                        {name}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{children}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}

export default Breadcrum