import React from 'react'
import "./SertefikatSlayd.scss"
import Slider from "react-slick";
import url from '../../../../../../icons/sertifikat1.svg'
import url1 from '../../../../../../icons/sertifikat2svg.svg'
import url2 from '../../../../../../icons/sertifikat3.svg'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

function SertefikatSlayd() {
  const array = [
    {
      title: `USDA ORGANIC`,
      img: url,
      
    },
    {
      title: `EU ORGANIC`,
      img: url1
    },
    {
      title: `Мужиза зелёный`,
      img: url2
    },
    {
      title: `USDA ORGANIC`,
      img: url
    }
  ]
  return (
    <div className='sertSlayder globalContainer'>
        <div className='sertSlayder__dokument'>
        <Slider  className='sertSlayder__dokument__slideer'{...settings}>
          {
            array.map((item, index)=>(
              <div  key={index} className='sertSlayder__dokument__slideer__dokInfo'>
                <img src={item.img} alt="img" />
                 <h3  className='sertSlayder__dokument__slideer__dokInfo__dokText'>{item.title}</h3>
            </div>
            ))
          }
          
         
         
        </Slider>
      </div>
    </div>
  )
}

export default SertefikatSlayd