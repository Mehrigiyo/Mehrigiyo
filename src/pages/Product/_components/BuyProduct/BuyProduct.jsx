import React from 'react'
import './BuyProduct.scss';
import { NavLink } from 'react-router-dom';
import buy1 from "../../../../images/Group 2535220-1.svg";
import buy2 from "../../../../images/Group 2535220-2.svg";
import buy3 from "../../../../images/Group 2535220-3.svg";
import buy4 from "../../../../images/Group 2535220-4.svg";
import buy5 from "../../../../images/Group 2535220-5.svg";
import buy6 from "../../../../images/Group 2535220-6.svg";
import buy7 from "../../../../images/Group 2535220-7.svg";
import buy8 from "../../../../images/Group 2535220-8.svg";
import buy9 from "../../../../images/Group 2535220-9.svg";
import buy10 from "../../../../images/Group 2535220-10.svg";
import buy11 from "../../../../images/Group 2535220.svg";
import { Col, Row } from 'react-bootstrap';
import tree from "../../../../images/Group.png"





function BuyProduct() {
    return (
        <div className='buy_product'>
            <div className="buy_product_title">
                <h1>Mehrigiyodan xarid qiling</h1>
            </div>
            <Row>
                <Col lg={2}>
                    <NavLink to="/productlist">
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Sharbatlar</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy1} alt="card_img" />
                        </div>
                    </div>
                    </NavLink>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Asal</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy2} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Choy</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy3} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Ziravorlar</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy4} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Yog’</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy5} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Tabletkalar</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy6} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Non</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy7} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Lolipoplar</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy8} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Halva</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy9} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Sovun</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy10} alt="card_img" />
                        </div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="buy_product__card">
                        <div className="buy_product__card_title">
                            <p>Sprey</p>
                        </div>
                        <div className="buy_product__card_img">
                            <img src={buy11} alt="card_img" />
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="BuyProductBack">
                <img src={tree} alt="" />
            </div>
        </div>
    )
}

export default BuyProduct