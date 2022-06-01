import React from "react";
import "./Bottom-Header.scss";
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
                <NavLink to="/onlinedoctor"> Onlayn shifokorlar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/doctorslist">Nevropatolog</NavLink>
                    <NavLink to="/">Genetika</NavLink>
                    <NavLink to="/">Stomatologiya</NavLink>
                    <NavLink to="/">Jarrohlik</NavLink>
                    <NavLink to="/">Hammasi +</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/product">Mahsulotlar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">  
                    <NavLink to="/choy">Choy</NavLink>
                    <NavLink to="/yoglar">Yog’lar</NavLink>
                    <NavLink to="/ziravor">Ziravorlar</NavLink>
                    <NavLink to="/asal">Asal</NavLink>
                    <NavLink to="/tabletka">Tabletkalar</NavLink>
                    <NavLink to="/allproduct">Hammasi +</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/aboute">Biz haqimizda</NavLink>
              </li>
              <li className="topi">
                <NavLink to="/news">Yangiliklar</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/news">Yangiliklar</NavLink>
                    <NavLink to="/tohealth">Salomatlik sari</NavLink>
                  </li>
                </ul>
              </li>
              <li className="topi">
                <NavLink to="/help">Yordam</NavLink>
                <ul className="drop_menu">
                  <li className="drop_link">
                    <NavLink to="/help">Yordam</NavLink>
                    <NavLink to="/askquestion">Ko’p so’raladigan savollar</NavLink>
                  </li>
                </ul>
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
