import React from "react";
import "./Bottom-Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../icons/Logo.svg";
import doctor from "../../icons/doktor-icon.svg";
import heart from "../../icons/heart.svg";
import Cart from "../../icons/Cart.svg";

const BottomHeader = () => {
  return (
    <div className="bottom-header  ">
      <div className="globalContainer flex-between">
        <section className="bottom-headder-two">
          <div>
            <img src={logo} alt=" logo" />
          </div>
          <nav className="navi">
            <ul className="topUl">
              <li className="topi">
                <NavLink to="/"> Bosh sahifa</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/restapi"> Onlayn shifokorlar</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/product">Mahsulotlar</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/aboute">Biz haqimizda</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/news">Yangiliklar</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/help">Yordam</NavLink>
              </li>
            </ul>
          </nav>
          <div className="threeIcon">
            <div className="iconca">
              <img src={doctor} alt="" />
            </div>
            <div className="iconca">
              <img src={heart} alt="" />
            </div>
            <div className="iconca">
              <img src={Cart} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomHeader;
