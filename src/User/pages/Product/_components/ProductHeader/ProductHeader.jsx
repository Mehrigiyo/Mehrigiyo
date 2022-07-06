import React from 'react'
import "./ProductHeader.scss";
import Breadcrum from '../../../../components/Breadcrum/Breadcrum'
import { Col, Container, Row } from 'react-bootstrap';
import VideoLink from "../../../../components/VideoLink/VideoLink"
// import OnlineDowctorImage from "../../../../images/Group 2535185.png"

import productmenu from "../../../../../images/productimg001.png"
import tree from "../../../../../images/Group.png"
import FreDoctorTree from "../../../../../images/Group 2535107.png"

function ProductHeader() {
    return (
        <div className='product_header'>
            <div className="freedoctor_advice">
                <Container style={{ maxWidth: 960 }}>
                    <Row>
                        <Col lg={6}>
                              <Breadcrum className='p-0' >Mahsulotlar</Breadcrum>
                            <div className="left_freedoctor_advice">
                                <div className="left_freedoctor_advice_title">
                                    <h1>Mehrigiyo tabiiy mahsulotlari</h1>
                                    <p>Shifobaxsh o'simliklardan foydalanish, salomatlik va <br />
                                        uzoq umr ko'rishingi uchun asosiy omildir</p>
                                    <div className='left_freedoctor_advice_link'>
                                        <VideoLink />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right_freedoctor_advice m-0 ">
                                <img src={productmenu} alt="onlineDoctor" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="freeDoctorBack">
                    <img src={FreDoctorTree} alt="" />
                </div>
                <div className="rightProductBack">
                    <img src={tree} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductHeader