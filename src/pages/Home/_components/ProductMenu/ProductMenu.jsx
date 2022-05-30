import React, { useState } from 'react'
import './ProductMenu.scss';
// import SerchIcon from "../../../../images/Search icon.svg"; 
import { BsSearch, BsChevronDown } from 'react-icons/bs';
import {Dropdown } from 'react-bootstrap';
import Slider from "react-slick";
import Button from '../../../../components/Buttons/Button';


function ProductMenu() {
    const [tabSlider, setTabSlider] = useState(0);

    const TabData = [1, 2, 3, 4, 5, 6]

    const TabContentBtn = ['Hammasi', 'Choy', 'Yog’lar', 'Ziravorlar', 'Asal', 'Tabletkalar']

    const HandleTabSlider = (index) => setTabSlider(index)

    const newArrays = TabData.map(item => (
        <li>{item}</li>
    ))

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
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
                                narx bo'yicha <BsChevronDown/>
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
                                <a href="#" className={tabSlider == 0 ? "active" : ""} onClick={(i) => HandleTabSlider(i)}>
                                    {item}
                                </a>
                            </div>
                        ))}
                    </div>

                    <Slider {...settings}>
                            {
                                tabSlider === 0 ? newArrays : newArrays[tabSlider]
                            }
                    </Slider>
                    <Button>Barcha mahsulotlarni ko’rish</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductMenu;