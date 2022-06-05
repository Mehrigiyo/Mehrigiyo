import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import "./ProductCard.scss";
import {BsChevronRight, BsSuitHeart} from "react-icons/bs";
import SliderImage1 from "../../icons/slider_img1.png";
import ProductCount from '../ProductCount/ProductCount';

const ProductCard = ({img=SliderImage1, name, title, sale, price, data}) => {

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
                                <img src={img} alt="card_img" />
                                <a href="#"><BsSuitHeart/></a>
                            </div>
                            <div className="product_card_item__title">
                                <h4>{name}</h4>
                            </div>
                            <div className="product_card_item__text">
                                <p>{title}</p>
                            </div>
                            <div className="product_card_item_btn">
                                <div className="product_card_item__sale">
                                    <del>{sale}</del>
                                    <span>{price}</span>
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