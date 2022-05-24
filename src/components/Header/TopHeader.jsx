import React from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";
import flag from "../../icons/UzbFlag.svg";
import locate from "../../icons/Location.svg"
import Adde from "../../icons/Add-User.svg"

const TopHeader = () => {
  return (
    <header className="TopHeaderContainer ">
      <div className="globalContainer flex-between">

      <section>
        <nav>
          <ul className="topUl">
            <li className="topLi">
              <Link to="/"> Mahsulotlar katalogi</Link>
            </li>
            <li className="topLi">
              <Link to="/"> Foto-lavhalar</Link>
            </li>
            <li className="topLi">
              <Link to="/"> Yetkazib berish va to'lash</Link>
            </li>
            <li className="topLi">
              <Link to="/">Aksiya</Link>
            </li>
            <li className="topLi">
              <Link to="/news">Yangi</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section">
        <div className="location">
            <img src={flag} alt="" />
            <span className="stek">|</span>
        </div>
        <div className="location">
            <p className="pismo">Toshkent shahar</p>
            <img src={locate} alt="" />
            <span className="stek">|</span>
        </div>
        <div className="location">
          <p className="pismo">Kirish</p>
        <img src={Adde} alt="" />


        </div>
      </section>
      </div>
    </header>
  );
};

export default TopHeader;
