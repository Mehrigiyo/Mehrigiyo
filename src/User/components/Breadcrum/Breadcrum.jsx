import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./Breadcrum.css";

function Breadcrum({ children, name, width=960, style , className}) {
    return (
        <div className='breadcrum globalContainer'>
            <Container className={ className} style={{ maxWidth: width, ...style }}>
                <Breadcrumb className='d-flex'>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                        {name}
                    <Breadcrumb.Item active>{children}</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}

export default Breadcrum