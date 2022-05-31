import React from "react";
import green from "../../images/Group.png";
// import GreenButton from "../Button/GreenButton";
import heroimg from "../../images/hero-img.png";
import admin from "../../images/admin.svg";
import quart from "../../images/quart.svg";
import phone from "../../images/phone.svg";
import whatsap from "../../images/whatsap.svg";
import "./Hero.css";
export default function Hero() {
  return (
    <>
      {/* <div className='hero-image'></div> */}
      <div className="hero-image">
        <div className="hero-text">
          <h1 style={{ fontSize: 44 }}>Bepul shifokor maslahat kerakmi?</h1>
          <p>
            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq Faqat mobil
            ilovada
          </p>
          <input
            type="text"
            className="hero-input"
            placeholder={"Nima izlayapsiz?"}
          />
          <button className="hero-btn">Qidirish</button>
        </div>
      </div>
      <img src={green} className={"bgGreenOpacity hero-image__bgTree"} />
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
      
      <div className="notifacation">
          <div className="callInfo">
            <a href="#"> <img src={phone} alt="" /></a>
           
          </div>
          <div className="MassageInfo">
            <a href="#">
            <img src={whatsap} alt="" />
            </a>
           
          </div>
        </div>
    </>
  );
}
