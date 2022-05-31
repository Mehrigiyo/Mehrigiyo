
import React from 'react'
import GreenButton from '../Button/GreenButton'
import close from '../../icons/Union.svg'
import barg from '../../images/Group 2535107.png'
import shox from '../../images/Group.png'
import './ItemPage.scss'

function ItemPage({children}) {
  return (
      <>
    <section className="itemPage">
     {children}
     <div className="globalContainer">

      <div className="itemPage__reletive">
        <div className="itemPage__close" >
          <img src={close} alt="img" />
        </div>
      <GreenButton > Appointment</GreenButton>

      </div>
     </div>
     <img className='itemPage__bg-left' src={barg} alt="img" />
     <img className='itemPage__bg-rigth' src={shox} alt="img" />

    </section>
      </>
  )
}

export default ItemPage