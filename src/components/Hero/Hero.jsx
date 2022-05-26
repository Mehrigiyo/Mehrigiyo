import React from "react";
import green from "../../images/Group.png";
// import GreenButton from "../Button/GreenButton";
import heroimg from "../../images/hero-img.png";
import "./Hero.css";
export default function Hero() {
  return (
    <>
      {/* <div className='hero-image'></div> */}
      <div class="hero-image">
        <div class="hero-text">
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
      <div className="hero-bgImage" >
        <img
          src={heroimg}
          alt=""
          width={837}
          height={524}
          className=" globalContainer"
        />
        <div className="hero-gg">companent qanaqadr</div>
      </div>
    </>
  );
}
