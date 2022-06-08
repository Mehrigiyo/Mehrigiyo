import React from "react";
import { useState } from "react";
import GreenButton from "../../../Button/GreenButton";
import "./Login.scss";
const Login = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="loginWrapper">
      <div className="loginWrapper__box">
        <ul className={num === 1 ? "active" : "technalogy__spam" } onClick={() => setNum(1)}>
          <li className="technalogy__spam__in">
            <p>Kirish</p>
          </li>
        </ul>
        <ul className={num === 2 ? "active2" : "technalogy__spam1"} onClick={() => setNum(2)}>
          <li className="technalogy__spam__in1">
            <p>Ro’yxatdan o’tish </p>
          </li>
        </ul>
      </div>
      <div className="title">
        {num === 1 ? (
          <div className="box flex">
            <div className=" box__text">
              <h2>LAUNCH VEHICLE</h2>A launch ve
            </div>
          </div>
        ) : num === 2 ? (
          <div className="box flex">
            <div className=" box__text">
              <h2>SPACEPORT </h2>A 
            </div>
          </div>
        ) : null}
      </div>
      <GreenButton> 
      Ro’yxatdan o’tish
      </GreenButton>
    </div>
  );
};

export default Login;
