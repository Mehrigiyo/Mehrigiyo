import React from 'react'
import logo from "../../icons/Logo.svg"
import "./Footer.css"
import home from "../../icons/home.svg"

const Footer = () => {
  return (
    <>
    <div className='foterFirst globalContainer'>
      <div className='one'>
    <div className='foterTwo'>
      <img src={logo} alt="" />
      <ul>
        <li className='rightFirst'>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
        <li className='right'>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
      </ul>
    </div>
    <div className='foterThree'>
      <h3 className='htext'>Huquqiy</h3>
      <ul>
        <li className='rightThree' >Maxfiylik siyosati</li>
        <li className='rightThree'>Xizmat ko'rsatish shartlari</li>
        <li className='rightThree'>Huquqni muhofaza qilish</li>
        </ul>
    </div>
    <div className='foterFour'>
    <h3 className='htext'>Ilovani yuklab olish</h3>
    </div>
    </div>
    <div className='footertop '>
    <div className='foterFoto'>
      <img src={home} alt="" />
    </div>
    </div>
    </div>
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