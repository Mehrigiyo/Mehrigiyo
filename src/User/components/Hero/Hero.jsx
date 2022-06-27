import React from "react";
import green from "../../../images/Group.png";
// import GreenButton from "../Button/GreenButton";
import heroimg from "../../../images/hero-img.png";
import admin from "../../../images/admin.svg";
import quart from "../../../images/quart.svg";
import gg from "../../../icons/gg.svg"
import vector from "../../../icons/serch.svg"
import Notifacation from "../Notifacation/Notifacation";
import "./Hero.css";
export default function Hero() {

  return (
    <>
      {/* <div className='hero-image'></div> */}
      <div className="hero-image">
        <div className="hero__slider">

        
        <div className="hero d-flex justify-content-center flex-column">
        <div className="hero__text  d-flex justify-content-center align-content-center flex-column">
          <h1 style={{ fontSize: 44 }}>Bepul shifokor maslahat kerakmi?</h1>
          <p>
            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq Faqat mobil
            ilovada
          </p>
          <div className="hero-input__div  m-auto position-relative align-items-center"> 
            <input
              type="text"
              className="hero-input"
              placeholder={"Nima izlayapsiz?"}
            />
            <div className="inputPhoto">
              <img src={gg} alt="" />
            </div>
            <button className="hero-btn d-flex align-items-center justify-content-evenly"> <img src={vector} alt="" /> Qidirish</button>
          </div>
         
        </div>
          <div className="hero-bgImage">
          <img
            src={heroimg}
            alt=""
            width={837}
            height={524}
            className=" globalContainer"
          />
          <div className="hero-gg">
            <div className="papper">
              <h4 className="papperOne">
                <img src={admin} alt="" />
                Consultant
              </h4>
              <p className="papperTwo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ullamcorper in et amet.
              </p>
            </div>
          </div>
          <div className="hero-ggTwo">
            <div className="papper">
              <h4 className="papperOne">
                <img src={quart} alt="" />
                Consultant
              </h4>
              <p className="papperTwo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ullamcorper in et amet.
              </p>
            </div>
          </div>
        
        </div> 
      </div>
        </div>

      </div>
      <img src={green} className={"bgGreenOpacity hero-image__bgTree"} />
      
      
    </>
  );
}
