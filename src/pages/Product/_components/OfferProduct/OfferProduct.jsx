import React from 'react'
import { Col, Row } from 'react-bootstrap'
import offerproduct1 from "../../../../images/Group 2535226.png";
import offerproduct2 from "../../../../images/banner.png";
import offerproduct3 from "../../../../images/Group 2535227.png";
import "./OfferProduct.scss";
function OfferProduct() {
  return (
    <div className='offer_product'>
        <div className="offer_product__item">
            <h1>Siz uchun eng yaxshi takliflar</h1>
            <a href="#">Hammasi</a>
        </div>
        <Row>
            <Col lg={4}>
                <div className="offer_product_picture">
                    <img src={offerproduct1} alt="" />
                </div>
            </Col>
            <Col lg={4}>
                <div className="offer_product_picture">
                    <img src={offerproduct2} alt="" />
                </div>
            </Col>
            <Col lg={4}>
                <div className="offer_product_picture">
                    <img src={offerproduct3} alt="" />
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default OfferProduct