import React from "react";
import { useState } from "react";
import GreenButton from "../../../Button/GreenButton";
import uzFlag from "../../../../icons/uz_flag.svg";
import reg1 from "../../../../images/registrationBg.png";
import reg2 from "../../../../images/registrationBg2.png";
import "./Login.scss";
const Login = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="loginWrapper">
      <div className="loginWrapper__box">
        <ul
          className={num === 1 ? "active" : "technalogy__spam"}
          onClick={() => setNum(1)}
        >
          <li className="technalogy__spam__in">
            <p>Kirish</p>
          </li>
        </ul>
        <ul
          className={num === 2 ? "active2" : "technalogy__spam1"}
          onClick={() => setNum(2)}
        >
          <li className="technalogy__spam__in1">
            <p>Ro’yxatdan o’tish </p>
          </li>
        </ul>
      </div>
      <div className="title">
        {num === 1 ? (
          <div className="box flex">
            <div className=" box__text">
              <form className="form__forn" action="#">
                <label htmlFor="fullNUmber">Telefon raqam</label>
                <input
                  className="number"
                  type="text"
                  placeholder="+998977075828"
                />
                <img className="flag" src={uzFlag} alt="flag" />

                <label htmlFor="email">Parol</label>
                <input type="text" id="email" placeholder="**********" />
              </form>
              <div className="loginWrapper__box__boxButton">
                <GreenButton>Tizimga kirish</GreenButton>
              </div>
            </div>
          </div>
        ) : num === 2 ? (
          <div className="box reg">
            <div className="box__text">
              <div className="box_img">
                <img className="img1" src={reg1} alt="" />
                <img className="img2" src={reg2} alt="" />
              </div>
              <p>Fotosurat yuklang (optinal)</p>
            </div>
            <form className="form__forn" action="#">
              <input
                className="numbar"
                type="text"
                placeholder="Foydalanuvchi nomi"
              />
              <label htmlFor="email">Elektron pochta (optinal)</label>
              <input
                type="text"
                id="email"
                placeholder="AripovXojiakbar@gmail.com"
              />
              <label htmlFor="email">Parolni o’ylab toping</label>
              <input type="text" id="email" placeholder="************" />
            </form>
            <div className="boxButtonText">
            <p>“Ro’yxatdan o’tish” tugmasini bosgan holda, Siz
                <span> Foydalanish shartlarini qabul qilgan xisoblanasiz</span>
            </p>
            
            </div>
            <div className="loginWrapper__box__boxButton2">
              <GreenButton>Ro’yxatdan o’tish</GreenButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
