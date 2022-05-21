import React from 'react'
import { Row } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='Footer globalContainer'>
      <div className='foterRight'>
       <p>© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. </p>
       <p> Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy. </p>
      </div>
      <div className='foterLeft'>
        <h3>Bosh sahifa</h3>
        <h3>Biz haqimizda</h3>
        <h3>Yangiliklar</h3>
      </div>
    </div>
    </>
  )
}

export default Footer