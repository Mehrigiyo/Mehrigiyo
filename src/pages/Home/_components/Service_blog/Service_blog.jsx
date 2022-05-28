import './Service_blog.css';
import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import { data } from './Const';
import src from '../../../../images/truck.svg'

const ServiceBlog = () => {
    return (
        <div className='service_blog globalContainer'>
            <Container fluid style={{justifyContent:"center"}}>
            <Row>
            {
                data.map(({ img, title, text }) => (
                <Col lg={3}>
                    <div className="service_blog_item">
                    <div className="service_image">
                        <img src={img} alt="service" />
                    </div>
                    <div className="service_item">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    </div>
                </Col>
                )
                )
            }
            </Row>
            </Container>
           
        </div>
    );
}

export default ServiceBlog;
