import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Breadcrum from '../../components/Breadcrum/Breadcrum'
import Button from "../../components/Buttons/Button";
import ShopImages from "../../images/productImage.svg"
import ProductCount from "../../components/ProductCount/ProductCount";
import RemoveProduct from "../../images/remove.svg";
import './ShopMenu.scss';
function ShopMenu() {
  return (
    <div className='shop_menu globalContainer'>
        <Breadcrum name={"Savatcha"} width={1240}>Savatcha</Breadcrum>
        <div className="shop_menu_title">
            <h1>Savatchada {} ta mahsulot bor</h1>
            <Button href={"/shopmenu"}>Buyurtmalar tarixi</Button>
        </div>
        <Row>
            <Col lg={9}>
                <div className="shopping_card">
                    <div className="shopping_image">
                        <img src={ShopImages} alt="" />
                        <div className="image_title">
                            <h4>Rastaropsha MAX</h4>
                            <p>Mavjud</p>
                        </div>
                    </div>
                    <div className="shopping_counter">
                        <ProductCount>
                                <del>17,190, uzs</del>
                        </ProductCount>
                    </div>
                    <div className="shopping_remove">
                            <a href="#"><img src={RemoveProduct} alt="" /></a>
                    </div>
                </div>
                <div className="shopping_card">
                    <div className="shopping_image">
                        <img src={ShopImages} alt="" />
                        <div className="image_title">
                            <h4>Rastaropsha MAX</h4>
                            <p>Mavjud</p>
                        </div>
                    </div>
                    <div className="shopping_counter">
                        <ProductCount>
                                <del>17,190, uzs</del>
                        </ProductCount>
                    </div>
                    <div className="shopping_remove">
                            <a href="#"><img src={RemoveProduct} alt="" /></a>
                    </div>
                </div>
                <div className="shopping_card">
                    <div className="shopping_image">
                        <img src={ShopImages} alt="" />
                        <div className="image_title">
                            <h4>Rastaropsha MAX</h4>
                            <p>Mavjud</p>
                        </div>
                    </div>
                    <div className="shopping_counter">
                        <ProductCount>
                                <del>17,190, uzs</del>
                        </ProductCount>
                    </div>
                    <div className="shopping_remove">
                            <a href="#"><img src={RemoveProduct} alt="" /></a>
                    </div>
                </div>
            </Col>
            <Col lg={3}>
                <div className="shopping_result">
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default ShopMenu