import React from 'react'
import Arrow from '../SVG/Arrow'
import Pen from '../SVG/Pen'


import './Acardions.scss'
function Acardions({children, title='My account', img=<Pen/>, span}) {
  return (
    <>
      <div className='Acardions d-flex align-items-center'>
        <div className="Acardions__img">
            {img}
        </div>
        <div className="Acardions__title">
            {title}
        </div>
        <div className="Acardions__icons">
            <span>{span}</span>
            <Arrow/>
        </div>
      </div>
    </>
     
  )
}

export default Acardions