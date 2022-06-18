// Reimboyev Shuhrat

import React from 'react'
import {Card as BootstrapCard, NavLink} from 'react-bootstrap'
 import Mehrigiyo from '../../../icons/mehrigiyo.jpg'
import arrowIcons from '../../../icons/Arrow001.svg'
// import src from '../../icons/play.svg'

import './Card.scss'

 const Card = ({data}) => {
  // const {title, img, deckriptoin, hashTag, date} = data
  const {id, created_at, description,  description_en,description_ru, description_uz,hashtag,image, name,name_uz} = data
  const sana = new Date(created_at)

  const urlnews = "http://207.154.244.140:8000/"
  // console.log(sana);
  return (
    <>
      {/* <section className='bg'> */}
      <BootstrapCard  className='myCard'>
            <div className="myCard__img">
            <BootstrapCard.Img  variant="top" src={urlnews + image} />
            {/* <img  src={src} alt="play" /> */}
            </div>
            <BootstrapCard.Body>
              <div className="myCard__body">

              
              <p className='myCard-hesh'>
                #{hashtag}
                  <span>{created_at}</span>
                </p>
                <BootstrapCard.Title> 
                  <h4 className='myCard__h4'>
                    {description}
                </h4>
                
                </BootstrapCard.Title>
                <BootstrapCard.Text>
                <p className='myCard__text'>
                  {description_uz}
                </p>
                </BootstrapCard.Text>
                <a href="#" className="myCard__link">Ko'proq o'qish <span><img src={arrowIcons} alt="img" /></span></a>
              </div>
            </BootstrapCard.Body>
       </BootstrapCard>
      {/* </section> */}
    
    </>    
  )
}


export default Card