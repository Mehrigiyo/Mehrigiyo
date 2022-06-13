import React from 'react'
import logo from "../../../icons/Logo.svg"
import "./Footer.css"
import home from "../../../icons/home.svg"
import google from "../../../images/google.svg"
import app from "../../../images/app.svg"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <>
    <div className='foterFirst '>
      <div className="globalContainer">

          <div className='one'>
        <div className='foterTwo'>
          <img src={logo} alt="" />
          <ul>
            <li className='rightFirst'>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
            <li className='right'>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
          </ul>
       <ul className='localSet'>
         <li><a href="">
         <BsInstagram/></a></li>
         <li><a href="">
         <BsFacebook/></a></li>
         <li><a href="">
         <BsTelegram/></a></li>
         <li><a href="">
         <BsYoutube/></a></li>
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
        <div className='footertop '>
          <div className='net'>
            <div className='email'>
              <p className='emailtext'>E-mail</p>
              <p className='emailInfo'>info@mehrigiyo.uz</p>
            </div>
            <div className='phone'>
              <p className='phoneText'>Bizga qo'ng'iroq qiling</p>
              <p className='phoneNumber'>+99898 125 31 03</p>

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