import React, { useState } from 'react'
import './ProductMenu.scss';
// import SerchIcon from "../../../../images/Search icon.svg"; 
import { BsSearch, BsChevronDown } from 'react-icons/bs';
import { Dropdown, Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import Button from '../../../../components/Buttons/Button';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';
import SliderImage1 from "../../../../../icons/slider_img1.png";
import SliderImage2 from "../../../../../icons/slider_img2.png";
import SliderImage3 from "../../../../../icons/slider_img3.png";
import SliderImage4 from "../../../../../icons/slider_img4.png";

function ProductMenu() {
    const TabData = [{
        img: SliderImage1,
        name: 'ROHAT Yog\ `i №2',
        title: "Mavjud",
        sale: "17,190, uzs",
        price: "16 000 uzs",
    },
    {
        img: SliderImage2,
        name: 'Rohat Sirop',
        title: "Erkaklar kuchi",
        sale: "200,190, uzs",
        price: "150 000 uzs",
    }, {
        img: SliderImage3,
        name: 'Organic Bananas',
        title: "7pcs, Price",
        sale: "17,190, uzs",
        price: "16 000 uzs",
    }, {
        img: SliderImage4,
        name: 'ROHAT Yog\ `i №2',
        title: "Mavjud",
        sale: "17,190, uzs",
        price: "150 000 uzs",
    }, 
    {
        img: SliderImage1,
        name: 'ROHAT Yog\ `i №2',
        title: "Mavjud",
        sale: "17,190, uzs",
        price: "150 000 uzs",
    }, 
]
    const [tabSlider, setTabSlider] = useState(0);


    const TabContentBtn = ['Hammasi', 'Choy', 'Yog’lar', 'Ziravorlar', 'Asal', 'Tabletkalar']

    const HandleTabSlider = (index) => setTabSlider(index)

    const newArrays = TabData.map(item => (
        <Col lg={3}>
            <NavLink to="/productabout">
                <ProductCard data={item}/>
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
                            <li key={i} className='tab_menu_item_title' onClick={() => HandleTabSlider(i)}>
                                <a className={ i === tabSlider ? "active": ''} >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </div>
                    <Row>
                        <Slider {...settings}>

                            {
                                newArrays
                                // tabSlider === 0 ? newArrays : newArrays[tabSlider]
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