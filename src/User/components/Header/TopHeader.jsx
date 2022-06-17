import React, { useState } from "react";
import "./TopHeader.scss";
import { Link, NavLink } from "react-router-dom";
import flag from "../../../icons/UzbFlag.svg";
import locate from "../../../icons/Location.svg";
import Adde from "../../../icons/Add-User.svg";
import { DownSvg } from "../IconSvg/IconSvg";
import Modal from "../Modal/Modal";
import Login from "../Modal/_components/Login/Login";
import ruFlag from "../../../icons/ru_flag.svg";
import uzFlag from "../../../icons/uz_flag.svg";
import engFlag from "../../../icons/eng_flag.svg";
const TopHeader = () => {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem('user')
  const userObj = JSON.parse(user)
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
            <div>
              <img src={flag} alt="" />
              <DownSvg />
              <ul className="drop_menu">
                <li className="drop_link">
                  <NavLink to="/uz"><img src={uzFlag} alt="" /> O’zbekcha</NavLink>
                  <NavLink to="/ru"><img src={ruFlag} alt="" /> Русский</NavLink>
                  <NavLink to="/eng"><img src={engFlag} alt="" /> English</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="location_country">
            <div>
              Toshkent shahar
              <img src={locate} alt="" />
            </div>
          </div>
          { user === null ?
            <div className="location_log">
              <div className="pismo" onClick={() => setOpen(true)}>
                Kirish <img src={Adde} alt="" />
              </div>
            </div>
            :
            <div className="d-block">
            {
              userObj.first_name +
              userObj.last_name
            }
            </div>}
        </section>
        {open && <Modal children={<Login />} set={setOpen} />}
      </div>
    </header>
  );
};

export default TopHeader;
