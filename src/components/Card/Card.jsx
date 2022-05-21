// Reimboyev Shuhrat

import React from 'react'
import { Card as AntdCard } from 'antd'
import Mehrigiyo from '../../icons/mehrigiyo.jpg'
import arrowIcons from '../../icons/Arrow001.svg'

import './Card.css'

export const Card = ({data}) => {
  const {title, img, deckriptoin, hashTag, date} = data

  console.log(img);
  return (
    <>
      {/* <section className='bg'> */}
          <AntdCard 
             hoverable
             className='card'
            cover={<img src={Mehrigiyo} alt={'Mehrigiyo'} />}
          >
            <div className="card__body">
              <p className='card-hesh'>
              {hashTag}
                <span>{date}</span>
              </p>
              <h4>
              {title}
              </h4>
              <p className='card__text'>
                {deckriptoin}
              </p>

              <a href="#" className='card__link'>
                Ko'proq o'qish <span><img src={arrowIcons} alt=">" /></span>
              </a>
            </div>
          </AntdCard>
      {/* </section> */}
    
    </>    
  )
}


export default Card