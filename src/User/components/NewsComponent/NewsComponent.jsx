//  Reimboyev Shuhrat
import { Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { data } from "./Const";

import "./NewComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { NewsGetData } from "../../../store/reducers/news/action";

function NewsComponent() {
  const [count, setCount] = useState(0);
  const   {data,  loading, error} = useSelector(state => state.newsDataReduser)
  // { loading, access , data, error} 
  // data[0]
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(NewsGetData())
  },[])

  let link = [
    "Hammasi",
    "Mahsulotlar haqida",
    "Shifokorlar tavsiya qiladilar",
    "Ozish",
    "Salomatlik",
    "Detoks",
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="newsSections">
        <div className="globalContainer">
          <h1>So'nggi yangiliklar</h1>
          <ul className="news__tabs">
            {link.map((item, index) => (
              <li key={index} className={index === count ? "active" : ""} onClick={() => setCount(index)}>
                  {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="globalContainer">
          <div className="news__cards">
            <ul>
              <div></div>
            </ul>

            {/* {
              link.map((item, index) => (
              ))[count]
            } */}
            {
              loading?
              'loading':
                <>
                  {/* <h2>{item}</h2> */}
                  <Row  className="news__slider">
                    <Slider {...settings}>
                      { 
                      
                     data.map((data, index) => (
                        <Col className="" key={index} xs={3}>
                          <Card data={data} />
                        </Col>
                      ))}
                    </Slider>
                  </Row>
                </>}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsComponent;
