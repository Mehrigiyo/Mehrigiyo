import React, { useState } from "react";
import "./TopHeader.css";
import { Link, NavLink } from "react-router-dom";
import flag from "../../icons/UzbFlag.svg";
import locate from "../../icons/Location.svg";
import Adde from "../../icons/Add-User.svg";
import { DownSvg } from "../IconSvg/IconSvg";
import Modal from "../Modal/Modal";
import { Store } from "../../Context/Context";
import Login from "../Modal/_components/Login/Login";
const TopHeader = () => {
  const [open, setOpen] = useState(false);

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
                <Link to="/" style={{ color: "#AB7A19" }}>
                  Aksiya
                </Link>
              </li>
              <li className="topLi">
                <Link to="/news" style={{ color: "#53B175" }}>
                  Yangi
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="section">
          <div className="location_flag">
            <a href="#">
              <img src={flag} alt="" />
              <DownSvg />
            </a>
          </div>
          <div className="location_country">
            <a href="#" className="pismo">
              Toshkent shahar
              <img src={locate} alt="" />
            </a>
          </div>
          <div className="location_log">
            <a className="pismo" onClick={() => setOpen(!open)}>
              Kirish <img src={Adde} alt="" />
            </a>
          </div>
        </section>
        {open && <Modal children={<Login />} set={setOpen} />}
      </div>
    </header>
  );
};

export default TopHeader;
