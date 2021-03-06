import React, { useEffect, useState } from "react";
import "./TopHeader.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import flag from "../../../images/uz_flag.png";
import locate from "../../../icons/Location.svg";
import Adde from "../../../icons/Add-User.svg";
import { DownSvg } from "../IconSvg/IconSvg";
import Modal from "../Modal/Modal";
import Login from "../Modal/_components/Login/Login";
import ruFlag from "../../../images/ru_flag.png";
import uzFlag from "../../../images/uz_flag.png";
import engFlag from "../../../images/eng_flag.png";
import { useDispatch, useSelector } from "react-redux";
import { userGet } from "../../../store/reducers/user/userMe/action";
const TopHeader = () => {
  const [open, setOpen] = useState(false);

  const {logindate , loading} = useSelector((state)=> state.usermeReducer)

  const {access} = useSelector(state=>state.loginReducer)
  const dispacht = useDispatch()
  
  const getUser = localStorage.getItem('user')
  const userObj = JSON.parse(getUser)

  const {pathname}  = useLocation()
  return (
    <header className="TopHeaderContainer " style={ pathname === '/' ? {backgroundColor: '#D6ECDF'} :  {backgroundColor:  'rgba(255, 255, 2555, .5)'}} >
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
                  <NavLink to="/uz"><img src={uzFlag} alt="" /> O???zbekcha</NavLink>
                  <NavLink to="/ru"><img src={ruFlag} alt="" /> ??????????????</NavLink>
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
          { !logindate?.id ?
            <div className="location_log">
              <div className="pismo" onClick={() => setOpen(true)}>
                Kirish <img src={Adde} alt="" />
              </div>
            </div>
            :
            <div className="d-block ml-1 login">
                <p className="mb-0">
                 <Link className="login" to='/admin' >
                 {
                    logindate?.first_name + "." + 
                    logindate?.last_name.split(" ")[0][0]
                  }
                 </Link>
              </p>
            </div>}
        </section>
        {open && <Modal children={<Login set={setOpen} />} set={setOpen} />}
      </div>
    </header>
  );
};

export default TopHeader;
