import React from "react";
import green from "../../../images/Group.png";
// import GreenButton from "../Button/GreenButton";
import heroimg from "../../../images/hero-img001.jpg";
import heroimg002 from "../../../images/hero-img003.jpg";

import heroRigth01 from '../../../images/Hero-rigth001.jpg'
import heroRigth02 from '../../../images/Hero-rigth002.jpg'
import admin from "../../../images/admin.svg";
import quart from "../../../images/quart.svg";
import gg from "../../../icons/gg.svg"
import vector from "../../../icons/serch.svg"
import Notifacation from "../Notifacation/Notifacation";
import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Hero() {

  const [counter , setCounter] = useState(-1)

  const handlerClick = ()=>{
    console.log(counter);
    setCounter(prev => prev +  1)
  }
  console.log(counter);
  useEffect(()=>{
      setCounter(prev => prev +  1)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      // setCounter(prev => prev +  1)
    }, 1000 * 7)
  },[counter])
  return (
    <>
      {/* <div className='hero-image'></div> */}
      <div className="hero-image">
        <div className="hero__slider">

        
        <div className="hero d-flex justify-content-center flex-column">
        <div className="hero__text  d-flex justify-content-center align-content-center flex-column">
          <h1 style={{ fontSize: 44 }}>Bepul shifokor maslahat kerakmi?</h1>
          <p>
            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq 
            Faqat 
            <a className="hero_link" href="#">

             mobil
            ilovada
            </a>
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
            <button className="hero-btn d-flex align-items-center justify-content-evenly"> <img src={vector} alt="img" /> Qidirish</button>
          </div>
         
        </div>
         <div className="hero_carusel m-auto">
         {/* style={{
                transform: `translateX(calc(-100% * ${counter} - 170px))`
              }} */}
            <div className="hero_carusel__item d-grid"   >
                
                <div className="hero-bgImage">
                  <img
                    src={heroimg}
                    alt=""
                    // width={837}
                    // height={524}
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

                {/* <div className="hero-bgImage  bgImage__rigth">
                    <img
                      src={heroimg002}
                    
                      alt=""
                      className=" globalContainer"
                    />
                    <div className="hero-gg hero-gg__rigth">
                      <div className="papper d-grid m-0 justify-content-center align-items-center">
                        <img src={heroRigth01}   style={{marginTop: 18, maxWidth: 86}} alt="img" />
                        <p className="papper_text">EU ORGANIC</p>
                      </div>
                  </div>
                  <div className="hero-ggTwo hero-ggTwo_right">
                    <div className="papper m-0 d-grid justify-content-center align-content-center  ">
                      <img style={{maxWidth: 80, maxHeight: 80 , marginTop: 19}}
                       src={heroRigth02} alt="img" />
                    </div>
                  </div>
              
                </div>  */}
              </div>

         </div>
      </div>
        </div>

      </div>
      <img src={green} className={"bgGreenOpacity hero-image__bgTree"} />
      
      
    </>
  );
}
