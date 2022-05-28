//  Reimboyev Shuhrat
import { Row, Col, Carousel, CarouselItem } from 'react-bootstrap'
import React, { useState } from 'react'
import Slider from "react-slick";
import Card from  '../Card/Card'
import {data} from './Const'


import './NewComponent.scss'


function NewsComponent() {

   const [count, setCount] = useState(0)

  let link = ['Hammasi', 'Mahsulotlar haqida','Shifokorlar tavsiya qiladilar', 'Ozish', 'Salomatlik', 'Detoks']

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
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

    <div className="newsSections">
    <div className="globalContainer">
      <h1>So'nggi yangiliklar</h1>
      <ul className='news__tabs'>
        
        {
          link.map((item, index)=>(
            <li key={index} onClick={()=>setCount(index)} ><a href="#" className={ index === count ? "active": ''}>{item}</a></li>
          ))
        }
      
      </ul>
    </div>
    <div className="globalContainer">
      <div className="news__cards">
        <ul>
        <div>
         
      </div>
        </ul>
           
            {
              
              link.map((item, index)=>(
                <>
               <h2>{item}</h2>
                <Row key={item} className='news__slider' >
                <Slider {...settings}> 
                    {
                    data.map((data, index)=>( 
                      
                      <Col className=''  key={index} xs={3}  >
                          <Card data={data}/>
                      </Col>
                    ))
                  }
                 </Slider> 
                 </Row>
               </>
              ))[count]
            }

      </div>
    </div>
    </div>

    
    </>


  )
}

export default NewsComponent