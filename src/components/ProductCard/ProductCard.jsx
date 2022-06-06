import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import "./ProductCard.scss";
import {BsChevronRight, BsSuitHeart} from "react-icons/bs";
import SliderImage1 from "../../icons/slider_img1.png";
import ProductCount from '../ProductCount/ProductCount';

const ProductCard = ({data}) => {

    const [btn, setBtn] =useState(0)

    function HandleBtn() {
        setBtn (next => !next)
    }


    // const [heart, setHeart] = useState(0)
    // const handleClickHeart = ! setHeart
    return (
        <div className='product_card'>
                        <div className="product_card_item">
                            <div className="product_card_item__img">
                                <img src={data.img} alt="card_img" />
                                <a href="#"><BsSuitHeart/></a>
                            </div>
                            <div className="product_card_item__title">
                                <h4>{data.name}</h4>
                            </div>
                            <div className="product_card_item__text">
                                <p>{data.title}</p>
                            </div>
                            <div className="product_card_item_btn">
                                <div className="product_card_item__sale">
                                    <del>{data.sale}</del>
                                    <span>{data.price}</span>
                                </div>
                                <div className="product_card_item__add_btn">
                                    <a href="#" onClick={HandleBtn}>
                                        {
                                            '+'
                                        }
                                        </a>

                                </div>
                            </div>
                            <div className="product_card_all_vies">
                                <a href="#">Tafsilotlar <BsChevronRight/></a>
                            </div>
                        </div>
        </div>
    )
}

export default ProductCard;