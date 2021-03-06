import React from 'react'
import logo from "../../../icons/Logo.svg"
import "./Footer.css"
import home from "../../../icons/home.svg"
import google from "../../../images/google.svg"
import app from "../../../images/app.svg"

import Facebook from './SVG/Facebook'
import Instagram from './SVG/Instagram'
import Telegram from './SVG/Telegram'
import YouTube from './SVG/Youtube'

const Footer = () => {
  return (
    <>
    <div className='foterFirst '>
      <div className="globalContainer">

          <div className='one'>
        <div className='foterTwo'>
          <img src={logo} alt="" />
          <ul className='white_color' >
            <li className='rightFirst white_color'>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
            <li className='right white_color'>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
          </ul>
       <ul className='localSet'>
         <li><a href="">
         <Facebook/></a></li>
         <li><a href="">
         <Instagram/></a></li>
         <li><a href="">
         <Telegram/></a></li>
         <li><a href="">
         <YouTube/></a></li>
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
        <div  className='playmarket'>
          <img src={google} alt="" />
          <img src={app} alt="" />
        </div>
        </div>
        </div>
        <div className='footertop align-items-end '>
          <div className='net'>
            <div className='email'>
              <p className='text'>E-mail</p>
              <p className='emailInfo mb-0'>info@mehrigiyo.uz</p>
            </div>
            <div className='phone email'>
              <p className='text'>Bizga qo'ng'iroq qiling</p>
              <p className='phoneNumber mb-0'>+99898 125 31 03</p>

            </div>
          </div>
        <div className='foterFoto'>
          <img src={home} alt="" />
        </div>
        </div>
      </div>
    </div>
    <div className='Footer globalContainer'>
      <div className='foterRight'>
       <p>?? 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. </p>
       <p> Saytdan olingan barcha ma??lumotlar chop etilganda veb-saytga havola qilish majburiy. </p>
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