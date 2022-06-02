import React, { useState } from 'react'
import './ProductMenu.scss';
// import SerchIcon from "../../../../images/Search icon.svg"; 
import { BsSearch, BsChevronDown } from 'react-icons/bs';
import { Dropdown, Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import Button from '../../../../components/Buttons/Button';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { TabData } from "./TabData";
import { NavLink } from 'react-router-dom';

function ProductMenu() {
    const [tabSlider, setTabSlider] = useState(0);


    const TabContentBtn = ['Hammasi', 'Choy', 'Yog’lar', 'Ziravorlar', 'Asal', 'Tabletkalar']

    const HandleTabSlider = (index) => setTabSlider(index)

    const newArrays = TabData.map(item => (
        <Col lg={3}>
            <NavLink to="/productabout">
                <ProductCard title={'sa'} data={item}/>
            </NavLink>
        </Col>
    ))

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };


    return (
        <div className='propductMenu'>
            <div className="globalContainer">
                <div className="product_menu__title d-flex">
                    <h1>Mahsulotlarimiz ro'yxati</h1>
                    <div className="product_drop">
                        <div className="product_drop__btn">
                            <a href='#'><BsSearch /></a>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                narx bo'yicha <BsChevronDown />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="tab_menu">
                    <div className='tab_menu_item'>
                        {TabContentBtn.map((item, i) => (
                            <div className='tab_menu_item_title'>
                                <a href="#" className={tabSlider == 0 ? "active" : ""} onClick={() => HandleTabSlider(i)}>
                                    {item}
                                </a>
                            </div>
                        ))}
                    </div>
                    <Row>
                        <Slider {...settings}>

                            {

                                tabSlider === 0 ? newArrays : newArrays[tabSlider]
                            }


                        </Slider>
                    </Row>
                    <Button>Barcha mahsulotlarni ko’rish</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductMenu;