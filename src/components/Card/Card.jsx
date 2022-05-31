// Reimboyev Shuhrat

import React from 'react'
import {Card as BootstrapCard} from 'react-bootstrap'
 import Mehrigiyo from '../../icons/mehrigiyo.jpg'
import arrowIcons from '../../icons/Arrow001.svg'
// import src from '../../icons/play.svg'

import './Card.scss'

 const Card = ({data}) => {
  const {title, img, deckriptoin, hashTag, date} = data
  

  return (
    <>
      {/* <section className='bg'> */}
      <BootstrapCard  className='myCard'>
            <div className="myCard__img">
            <BootstrapCard.Img  variant="top" src={Mehrigiyo} />
            {/* <img  src={src} alt="play" /> */}
            </div>
            <BootstrapCard.Body>
              <div className="myCard__body">

              
             <p className='myCard-hesh'>
              {hashTag}
                <span>{date}</span>
              </p>
               <BootstrapCard.Title> 
                 <h4 className='myCard__h4'>
                   {title}
               </h4>
              
              </BootstrapCard.Title>
               <BootstrapCard.Text>
               <p className='myCard__text'>
                {deckriptoin}
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