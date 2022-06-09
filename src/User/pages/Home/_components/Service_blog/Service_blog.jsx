import './Service_blog.css';
import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import truck from "../../../../../images/truck.svg";
import wallet from "../../../../../images/wallet.svg";
import parcent from "../../../../../images/percentage.svg";
import headphone from "../../../../../images/headphones.svg";

const ServiceBlog = () => {
    const data = [{
        img: truck,
        title: "Yetkazib berish bepul",
        text: "100 000 so'mdan ortiq buyurtma berganingizda"
    },
    {
        img: wallet,
        title: "Onlayn yordam",
        text: "Ish vaqti: 08:00 - 18:00"
    },
    {
        img: parcent,
        title: "Doimiy chegirmalar",
        text: "Ular allaqachon ishlamoqda"
    },
    {
        img: headphone,
        title: "Tez to'lov",
        text: "100% xavfsiz to'lov",
    },
    ]
    return (
        <div className='service_blog globalContainer'>
            <Container fluid style={{ justifyContent: "center" }}>
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
