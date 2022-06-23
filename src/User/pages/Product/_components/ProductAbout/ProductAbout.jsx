import  React, { useState} from 'react'
import "./ProductAbout.scss";
import CloseIcon from "../../../../../icons/Union.svg"
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import Slider2 from "../../../../../images/slider-4.png";
import Slider3 from "../../../../../images/slider-6.png";
import Slider1 from "../../../../../images/slider-9.png";
import InfoIcon from "../../../../../icons/info.svg";
import HeartIcon from "../../../../../icons/heart.svg";
import StartIcon from "../../../../../icons/star.svg";
import { NavLink } from "react-router-dom";
import ProductCount from '../../../../components/ProductCount/ProductCount';
import ItemPage from '../../../../components/ItemPage/ItemPage';
import HeartRed from "../../../../../icons/redHeart.svg"

function ProductAbout() {
    // let thumbnails = document.getElementsByClassName('thumbnail');
    // let activeImages = document.getElementsByClassName('active');
    // for (let i = 0; i < thumbnails.length; i++) {
    //     thumbnails[i].addEventListener('click', function () {
    //         if (activeImages.length > 0) {
    //             activeImages[0].classList.remove('active')
    //         }
    //         this.classList.add('active')
    //         document.getElementById('featured').src = this.src
    //     })
    // }

    const [activeImage, setActiveImage] = useState({img:Slider1, activeClass:" active"})
    
    function HandleImage(e){
        setActiveImage({img:e.target.src})
    }




    const [heart, setHeart] = useState(true)

    const HandeHeart = ()=> {
        setHeart(prev => !prev)
    }


    return (

        <ItemPage>
        <div className='product_about globalContainer'>
            {/* <div className="product_about_close">
                <NavLink to="/product"><img src={CloseIcon} alt="" /></NavLink>
            </div> */}
            <Container style={{ maxWidth: 960 }}>
                <Row>
                    <Col lg={4}>
                        <div className="wrapper_slider">
                            <div className="slider_items">
                                <img onClick={(e)=>HandleImage(e)} className='thumbnail' src={Slider1} alt="" />
                                <img onClick={(e)=>HandleImage(e)} className='thumbnail' src={Slider2} alt="" />
                                <img onClick={(e)=>HandleImage(e)} className='thumbnail' src={Slider3} alt="" />
                            </div>
                            <div className="slider_featured">
                                <img id='featured' src={activeImage.img} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="right_slider_about">
                            <div className="slider_about_title">
                                <div className="slider_name">
                                    <h5>Rastaropsha MAX</h5>
                                    <img src={StartIcon} alt="" />
                                </div>
                                <div className="slider_link">
                                    {
                                        heart ? 
                                        <a href="#" onClick={HandeHeart}><img src={InfoIcon} alt="" /></a>
                                        : 
                                        <a href="#" onClick={HandeHeart}><img src={HeartRed} alt="" /></a>
                                    }
                                    
                                    <a href="#"><img src={HeartIcon} alt="" /></a>
                                </div>
                            </div>
                            <div className="slider_price">
                                <ProductCount />
                            </div>

                        </div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="accordion_title">
                                        <h6>Mahsulot haqida</h6>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                        <div className='accrordion_title'>
                                            <h6>Og’irligi</h6>
                                            <span>100 gr</span>
                                        </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
        </ItemPage>
        
    )
}

export default ProductAbout