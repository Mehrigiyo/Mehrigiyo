
import React from 'react'
import GreenButton from '../Buttons/Button/GreenButton'
import close from '../../../icons/Union.svg'
import barg from '../../../images/Group 2535107.png'
import shox from '../../../images/Group.png'
import './ItemPage.scss'
import { Link, useNavigate } from 'react-router-dom'

function ItemPage({children, pageId, functions , hidden=true}) {
  const navigete = useNavigate()
  return (

      <>
    <section className="itemPage">
     <div className="globalContainer">
{   hidden &&
          <div className="itemPage__reletive">
            <div className="itemPage__close"  >
              <img src={close} alt="img" />
            </div>
          </div>}
          {children}
          <div className="itemPage__reletive bottom ">
            <div className="itemPage__reletive__item">
              {/* <Link to={`/onlinedoctor/doctors/${pageId}`} > */}
               <span onClick={functions} > <GreenButton  > Appointment</GreenButton></span>
              {/* </Link> */}
          </div>
      </div>
           
      
     </div>

     <img className='itemPage__bg-left' src={barg} alt="img" />
     <img className='itemPage__bg-rigth' src={shox} alt="img" />

    </section>
      </>
  )
}

export default ItemPage