import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Breadcrum from '../../components/Breadcrum/Breadcrum'
import Button from "../../components/Buttons/Button";
import ShopImages from "../../images/productImage.svg"
import ProductCount from "../../components/ProductCount/ProductCount";
import RemoveProduct from "../../images/remove.svg";
import Buttons from "../../components/Button/GreenButton";
import './ShopMenu.scss';
import Modal from '../../components/Modal/Modal';
import { products } from './const';
import ProductModal from '../../components/Modal/_components/ProductModal/ProductModal';
function ShopMenu() {

    const [list, setList] = useState(products);

    const [open, setOpen] = useState(false)

    function removeItem(id) {
        const NewList = list.filter((item)=> item.id !== id);
        setList(NewList);
    }

    return (
        <div className='shop_menu globalContainer'>
            <Breadcrum name={"Savatcha"} width={1240}>Savatcha</Breadcrum>
            {list.map((item) => (
                <Row key={item}>
                    <div className="shop_menu_title">
                        <h1>Savatchada {item.id} ta mahsulot bor</h1>
                        <Button href={"/shopmenu"}>Buyurtmalar tarixi</Button>
                    </div>
                    <Col lg={9}>
                        <div className="shopping_card" key={item.id}>
                            <div className="shopping_image">
                                <img src={ShopImages} alt="" />
                                <div className="image_title">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="shopping_counter">
                                <ProductCount>
                                    <del>{item.sale}</del>
                                </ProductCount>
                            </div>
                            <div className="shopping_remove">
                                <a href="#" onClick={() => removeItem(item.id)}><img src={RemoveProduct} alt="" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="shopping_result">
                            <div className="result_text">
                                <div className="result_pro">
                                    <h6> Mahsulotlar</h6>
                                    <p>{item.id}</p>
                                </div>
                                <div className="result_sale">
                                    <h6>Chegirma</h6>
                                    <p>{item.sale}</p>
                                </div>
                                <div className="result_delivery">
                                    <h6>Yetkazib berish</h6>
                                    <p>15 000</p>
                                </div>
                                <div className="result_all_price">
                                    <h4>Umumiy</h4>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                            <div className="result_price_go" onClick={()=> setOpen(true)}>
                                <Buttons >To’lovga o’tish</Buttons>
                            </div>
                            <div className="result_price_out">
                                <Buttons>Menyuga qaytish</Buttons>
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
            { open && <Modal children={<ProductModal/>} boolen={true}/> }
        </div>
    )
}

export default ShopMenu